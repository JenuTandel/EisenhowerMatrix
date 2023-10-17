import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownOverlayService {
  public closeDialog: Subject<boolean>;
  public instance: any;

  constructor(private overlay: Overlay) {
    this.closeDialog = new Subject();
  }

  openDialog(component: any, className: string): ComponentRef<any> {
    // const positionStrategy = this.overlay.position();

    // Create an overlay with customizable options
    const overlayRef = this.overlay.create({
      // positionStrategy,
      panelClass: className,
      hasBackdrop: false,
    });

    const portal = new ComponentPortal(component);
    this.instance = overlayRef.attach(portal);

    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    this.closeDialog.subscribe((res) => {
      if (res == true) {
        overlayRef.detach();
      }
    });
    return this.instance;
  }
}

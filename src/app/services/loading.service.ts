import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, PLATFORM_ID, Inject, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { LoadingComponent as LoadingSpinner } from 'src/app/shared/components/loading/loading.component';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private componentRef!: ComponentRef<LoadingSpinner>;
  constructor(
    // tslint:disable-next-line:ban-types
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }


  public hide() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }

  public show(duration: number = 0): void {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
    // Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(LoadingSpinner)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // Append DOM element to the body

    document.body.appendChild(domElem);

    // Wait some time and remove it from the component tree and from the DOM
    if (duration && duration > 0) {
      setTimeout(() => {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
      }, duration);
    }
  }
}

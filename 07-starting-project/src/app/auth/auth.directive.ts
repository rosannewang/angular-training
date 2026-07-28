import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // getting the what's in the ng-template
  private viewContainer = inject(ViewContainerRef); // getting the view container (where the template it's being used)

  constructor() { 
    effect(() => {
      if(this.authService.activePermission() === this.userType()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }); // runs whenever signal changes
  }
}

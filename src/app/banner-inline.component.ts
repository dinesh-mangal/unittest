import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  //templateUrl: './banner-inline.component.html'
  template: '<h1>{{title}}</h1>'
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}
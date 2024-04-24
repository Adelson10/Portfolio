import { Component, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMouseScroll:boolean = false;
  isHeaderMobile: boolean = false;

  @HostListener('window:scroll',['$event']) onScroll() {
    if((window.scrollY >= 60) && (window.innerWidth>950)){
      this.isMouseScroll = true;      
    } else {
      this.isMouseScroll = false;
    }
  }

  onActiveMobileNav() {
    window
    this.isHeaderMobile = !this.isHeaderMobile;
  }
  
}

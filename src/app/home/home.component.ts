import { Component, OnInit } from '@angular/core';

import SwiperCore, {SwiperOptions, Autoplay, } from 'swiper';

SwiperCore.use([Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styles: [`.swiper-button-prev {
    color: red; 
}
.swiper-button-next {
    color: red; 
}`]
})
export class HomeComponent implements OnInit {

  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

  
  config: SwiperOptions = {
    spaceBetween: 30,
    autoplay: {delay: 5000,}
  };  

}

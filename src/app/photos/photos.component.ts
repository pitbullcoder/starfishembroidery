import { Component, OnInit } from '@angular/core';

import SwiperCore, {SwiperOptions, Autoplay, } from 'swiper';

SwiperCore.use([Autoplay])

@Component({
  selector: 'app-photos',
  templateUrl: "./photos.component.html",
  styles: [
  ]
})
export class PhotosComponent implements OnInit {

  public deviceType: string;

  constructor() { }

  ngOnInit(): void {
    this.deviceType = this.getDeviceType();
  }

  config: SwiperOptions = {
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 30,
    slidesPerView: 3
  };

  private getDeviceType(): string {
    const ua = navigator.userAgent;
    // if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    //     return "tablet";
    // }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      this.config.slidesPerView = 1;  
      console.log("mobile");
      return "mobile";
    }
    this.config.slidesPerView = 3;
    console.log("desktop");
    return "desktop";
  };


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('.navbar-menu');
    menu.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
  }

}

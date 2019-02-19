import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent implements OnInit {

  instaGallery: string[] = [
    '/assets/images/insta-1.jpg',
    '/assets/images/insta-2.jpg',
    '/assets/images/insta-3.jpg',
    '/assets/images/insta-4.jpg',
    '/assets/images/insta-5.jpg',
    '/assets/images/insta-6.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}

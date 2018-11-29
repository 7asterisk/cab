import { Component, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-people-say',
  templateUrl: './people-say.component.html',
  styleUrls: ['./people-say.component.css']
})
export class PeopleSayComponent {

  @ViewChild('carousel') carouselElement;
  actions = new EventEmitter<string>();

  imageURLs = [
    '../assets/img/review/abhi.jpg',
    '../assets/img/review/balasahab.jpg',
    '../assets/img/review/kevin.jpg',
    '../assets/img/review/mohit.jpg',
    '../assets/img/review/sumit.jpg',
  ];
  ratings = [
    {
      imageURLs: '../assets/img/review/abhi.jpg',
      name: 'Abhishek kumar',
      star: 5,
      review: 'Had nice time, great place to visit. Nice ride .'
    },
    {
      imageURLs: '../assets/img/review/balasahab.jpg',
      name: 'Balasaheb Gaikwad',
      star: 5,
      review: 'Gotta lot of enjoy on this tour Thanks for giving this memoriable journey.'
    },
    {
      imageURLs: '../assets/img/review/kevin.jpg',
      name: 'kevin bhanushali',
      star: 5,
      review: 'Awesome time with this tour, very satisfying service provided. Thank you for your comfortable service.'
    },
    {
      imageURLs: '../assets/img/review/mohit.jpg',
      name: 'Mohit Kadam',
      star: 5,
      review: 'Best Service Regarding Traveling Long way to go I will recommend you to try it for sure.'
    },
    {
      imageURLs: '../assets/img/review/sumit.jpg',
      name: 'Sumit Lohar',
      star: 5,
      review: 'Amazing service and a thorough professional. Looking forward to another tour.'
    }
  ];

  showInitialized = false;

  constructor() {
    // example of a hacky way to add an image to the carousel dynamically
    window.setTimeout(() => {
      this.imageURLs = [this.imageURLs[0], ...this.imageURLs]; // duplicate the first iamge
      this.carouselElement.nativeElement.classList.toggle('initialized');
      this.actions.emit('carousel');
    }, 1000);
  }
}

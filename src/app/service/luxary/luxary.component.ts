import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxary',
  templateUrl: './luxary.component.html',
  styleUrls: ['./luxary.component.css']
})
export class LuxaryComponent implements OnInit {
  vechiles = [
    {
      name: 'Jaguar XF',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/jaguar.jpg',
      cost8Hr: 9500,
      cost4Hr: 5500,
      extraHr: 900,
      extraKm: 90,
    },
    {
      name: 'Mercedes E – 200',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/mercedesE200.jpg',
      cost8Hr: 8000,
      cost4Hr: 5000,
      extraHr: 500,
      extraKm: 65,
    },
    {
      name: 'Bmw 5 series',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/BMW-5.jpg',
      cost8Hr: 8000,
      cost4Hr: 5000,
      extraHr: 500,
      extraKm: 65,
    },
    {
      name: 'Audi A4',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/audi4.jpg',
      cost8Hr: 6500,
      cost4Hr: 4500,
      extraHr: 400,
      extraKm: 50,
    },
    {
      name: 'Mitsubishi Pajero Sport',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/Mitsubishi-Pajero-Sport.jpg',
      cost8Hr: 4500,
      cost4Hr: 3000,
      extraHr: 400,
      extraKm: 40,
    },
    {
      name: 'Mercedes E 250',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/mercedes-benz-e-class.jpg',
      cost8Hr: 8500,
      cost4Hr: 5000,
      extraHr: 650,
      extraKm: 65,
    },
    {
      name: 'Toyota Fortuner',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/toyota.jpg',
      cost8Hr: 4500,
      cost4Hr: 3000,
      extraHr: 400,
      extraKm: 40,
    },
    {
      name: 'Mahindra XUV',
      // tslint:disable-next-line:max-line-length
      src: '../../../assets/img/vechile/mahindraxuv.jpg',
      cost8Hr: 3300,
      cost4Hr: 2300,
       extraHr: 250,
      extraKm: 23,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

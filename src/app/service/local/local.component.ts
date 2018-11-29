import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }
  vechiles = [{
    name: 'Dzire',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/dzire.jpg',
    cost: 1600,
    seats: 4,
    extraKm: 10,
    extraHr: 100
  },
  {
    name: 'Xcent',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/xcent.jpg',
    cost: 1600,
    seats: 4,
    extraKm: 10,
    extraHr: 100
  },
  {
    name: 'Ertiga',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/ertiga.jpg',
    cost: 1800,
    seats: 6,
    extraKm: 12,
    extraHr: 100
  },
  {
    name: 'Innova',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/Innova.jpg',
    cost: 2200,
    seats: 6,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Scorpio',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/scorpio.jpg',
    cost: 2200,
    seats: 8,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Sumo',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/sumo.png',
    cost: 2200,
    seats: 8,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Cruiser',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/cruiser.jpg',
    cost: 2500,
    seats: 13,
    extraKm: 14,
    extraHr: 100
  },
  {
    name: 'Traveller',
    // tslint:disable-next-line:max-line-length
    src: '../../../assets/img/vechile/traveller.jpg',
    cost: 3000,
    seats: 17,
    extraKm: 17,
    extraHr: 150
  },

  ];
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstation',
  templateUrl: './outstation.component.html',
  styleUrls: ['./outstation.component.css']
})
export class OutstationComponent implements OnInit {

  constructor() { }
  vechiles = [{
    name: 'Dzire',
    src: '../../../assets/img/vechile/dzire.jpg',
    cost: 3000,
    seats: 4,
    extraKm: 10,
    extraHr: 100
  },
  {
    name: 'Xcent',
    src: '../../../assets/img/vechile/xcent.jpg',
    cost: 3000,
    seats: 4,
    extraKm: 10,
    extraHr: 100
  },
  {
    name: 'Ertiga',
    src: '../../../assets/img/vechile/ertiga.jpg',
    cost: 3600,
    seats: 6,
    extraKm: 12,
    extraHr: 100
  },
  {
    name: 'Innova',
    src: '../../../assets/img/vechile/Innova.jpg',
    cost: 3900,
    seats: 6,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Scorpio',
    src: '../../../assets/img/vechile/scorpio.jpg',
    cost: 3900,
    seats: 8,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Sumo',
    src: '../../../assets/img/vechile/sumo.png',
    cost: 3900,
    seats: 8,
    extraKm: 13,
    extraHr: 100
  },
  {
    name: 'Cruiser',
    src: '../../../assets/img/vechile/cruiser.jpg',
    cost: 4200,
    seats: 13,
    extraKm: 14,
    extraHr: 100
  },
  {
    name: 'Traveller',
    src: '../../../assets/img/vechile/traveller.jpg',
    cost: 5400,
    seats: 17,
    extraKm: 17,
    extraHr: 150
  },

  ];
  ngOnInit() {
  }

}

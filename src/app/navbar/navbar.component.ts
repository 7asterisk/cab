import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MzMediaService } from 'ngx-materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public mResolution: Observable<boolean>;
  public gtmResolution: Observable<boolean>;

  constructor(private mediaService: MzMediaService) {
    this.mResolution = this.mediaService.isActive('lt-l'); // small screen resolution
    this.gtmResolution = this.mediaService.isActive('gt-m'); // less then mediam screen resolution
  }
  ngOnInit() {

  }

}

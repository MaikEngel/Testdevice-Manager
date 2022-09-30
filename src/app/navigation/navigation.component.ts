import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  borrowedDevices(){
    this.router.navigateByUrl('borrowed-device')

  }

  refresh(): void {
    this.router.navigateByUrl('')

}

}

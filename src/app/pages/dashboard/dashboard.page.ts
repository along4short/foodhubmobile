import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { AddRestaurantPage } from 'pages/add-restaurant/add-restaurant.page';
import { DeleteRestaurantPage } from 'pages/delete-restaurant/delete-restaurant.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: User;
  constructor(private menu: MenuController, private authService: AuthService, private navCtrl: NavController, private router: Router) { 
    this.menu.enable(true);
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  addRestaurant(){
    this.router.navigate(['add-restaurant']);

  }
  deleteRestaurant(){
    this.router.navigate(['delete-restaurant']);

  }
}
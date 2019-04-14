import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { AddRestaurantPage } from 'pages/add-restaurant/add-restaurant.page';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  constructor(private menu: MenuController, private authService: AuthService, private navCtrl: NavController, private router: Router, private alertService: AlertService) { 
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  dismissAddRestaurant(){
    this.router.navigate(['dashboard']);
   }

   
	registerRestaurant(form: NgForm) {
    this.authService.addRestaurant(form.value.restaurant_name, form.value.restaurant_type, form.value.bio, form.value.locations).subscribe(
      data => {
        this.alertService.presentToast("Restaurant Added");
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['dashboard']);
      }
    );
  }
}
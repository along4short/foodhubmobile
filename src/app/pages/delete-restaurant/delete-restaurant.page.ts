import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.page.html',
  styleUrls: ['./delete-restaurant.page.scss'],
})
export class DeleteRestaurantPage implements OnInit {

  constructor(private menu: MenuController, private authService: AuthService, private navCtrl: NavController, private router: Router, private alertService: AlertService) { 
    this.menu.enable(true);
  }

  ngOnInit() {
  }
  dismissDeleteRestaurant(){
    this.router.navigate(['dashboard']);
   }

   
	deleteRestaurant(form: NgForm) {
    this.authService.deleteRestaurant(form.value.restaurant_name).subscribe(
      data => {
        this.alertService.presentToast("Restaurant Deleted");
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

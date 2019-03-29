import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,

  ) { }

  ngOnInit() {
  }

  Login(form: NgForm){
    this.login(form.value.email, form.valie,password)subscribe(
      data => {
        this.presentToast("Logged In");
  }
    error => {
      console.log(error);
    }
}

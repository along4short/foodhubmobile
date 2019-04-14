import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  isLoggedIn = false;
  token:any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }
  login(username: String, password: String) {
    return this.http.post(this.env.API_URL + 'customer/login',
      {username: username, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(username: String, password: String, firstname: String, lastname: String, contact_number: String, gender: String ) {
    return this.http.post(this.env.API_URL + 'customer/',
      {username: username, password: password, firstname: firstname, lastname: lastname, contact_number: contact_number, gender: gender}
    )
  }
  addRestaurant(restaurant_name: String, restaurant_type: String, bio: String, locations: String ) {
    return this.http.post(this.env.API_URL + 'restaurant/',
      {restaurant_name: restaurant_name, restaurant_type: restaurant_type, bio: bio, locations: locations}
    )
  }
  deleteRestaurant(restaurant_name: String) {
    return this.http.delete<Restaurant>(this.env.API_URL + 'restaurant/',
      {restaurant_name: restaurant_name}
    )
  }
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'customer/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }
  user(username: String) {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'customer/', {headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
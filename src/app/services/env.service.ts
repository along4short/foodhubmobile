import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Restaurant} from 'src/app/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  


  API_URL = 'http://127.0.0.1:5000/';

  
  
  constructor() { }
}
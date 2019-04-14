@Injectable({
  providedIn: 'root'
})

export class Restaurant {

   restaurant_name: string;
   restaurant_type: string;
   bio: string;
   locations: string; 

 	restaurant_API = '{restaurant_name}';
}
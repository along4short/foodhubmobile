import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'customer-profile', loadChildren: './pages/customer-profile/customer-profile.module#CustomerProfilePageModule' },
  { path: 'restaurant-profile', loadChildren: './pages/restaurant-profile/restaurant-profile.module#RestaurantProfilePageModule' },  { path: 'add-restaurant', loadChildren: './pages/add-restaurant/add-restaurant.module#AddRestaurantPageModule' },
  { path: 'delete-restaurant', loadChildren: './pages/delete-restaurant/delete-restaurant.module#DeleteRestaurantPageModule' },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
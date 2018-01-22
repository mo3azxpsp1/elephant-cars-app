import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CarsComponent } from  "./components/cars/cars.component";
import { NewCarComponent } from  "./components/new-car/new-car.component";
import { CarComponent } from  "./components/car/car.component";
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: CarsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'cars/add',
        component: NewCarComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'car/:id',
        component: CarComponent,
        canActivate: [AuthGuardService]
    },

];

export const AppRoutes = RouterModule.forRoot(appRoutes);
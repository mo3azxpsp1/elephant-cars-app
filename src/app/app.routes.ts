import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { CarsComponent } from  "./components/cars/cars.component";
import { NewCarComponent } from  "./components/new-car/new-car.component";
import { CarComponent } from  "./components/car/car.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: CarsComponent
    },
    {
        path: 'cars/add',
        component: NewCarComponent
    },
    {
        path: 'car/:id',
        component: CarComponent
    },


];

export const AppRoutes = RouterModule.forRoot(appRoutes);
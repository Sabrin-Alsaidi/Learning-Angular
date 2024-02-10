import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';

export const routes: Routes = [
    {path:"", component:MainComponent},
    {path:"header", component:HeaderComponent},


];

import { Routes } from "@angular/router";
import { AboutComponent } from "./angular-material/components/about/about/about.component";
import { CoursesComponent } from "./angular-material/components/courses/courses/courses.component";
import { HomeComponent } from "./angular-material/components/home/home/home.component";
import { LoginComponent } from "./angular-material/components/login/login/login.component";
import { PlacementsComponent } from "./angular-material/components/placements/placements/placements.component";
import { RegisterComponent } from "./angular-material/components/register/register/register.component";

export const routes:Routes=
[
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'courses',
        component:CoursesComponent
    },
    {
        path:'placements',
        component:PlacementsComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
]
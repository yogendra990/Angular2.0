// tslint:disable-next-line:eofline
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
const route: Routes = [{path: 'Register', component: RegisterComponent},
                       {path: '**', redirectTo: 'Register'}];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [RouterModule]
})

export class Approuteconfig {}

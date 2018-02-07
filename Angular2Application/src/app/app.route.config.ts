// tslint:disable-next-line:eofline
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const route: Routes = [{path: 'Register', component: RegisterComponent},
                       {path: 'Dashboard', component: DashBoardComponent},
                       {path: '**', redirectTo: 'Register'}];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [RouterModule]
})

export class Approuteconfig {}

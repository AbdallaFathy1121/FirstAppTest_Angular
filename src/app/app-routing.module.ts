import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { UsersComponent } from './users/users.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {path: '', component: Test1Component},
  {path: 'test2', component: Test2Component},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'cockpit', component: CockpitComponent},
  {path: 'servers', component: ServerElementComponent, children: [
    {path: ':name/:content', component: ServerElementComponent},
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

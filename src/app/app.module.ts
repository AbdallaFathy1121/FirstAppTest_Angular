import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


const appRoutes: Routes = [
  {path: '', component: Test1Component},
  {path: 'test2', component: Test2Component},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
]

@NgModule({
  declarations: [								
    AppComponent,
      CockpitComponent,
      ServerElementComponent,
      Test1Component,
      Test2Component,
      UsersComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


const appRoutes: Routes = [
  {path: '', component: Test1Component},
  {path: 'test2', component: Test2Component}
]

@NgModule({
  declarations: [							
    AppComponent,
      CockpitComponent,
      ServerElementComponent,
      Test1Component,
      Test2Component
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

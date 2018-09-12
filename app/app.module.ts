import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { SearchComponent } from './routes/search/search.component';
import { HomeComponent } from './routes/home/home.component';

import { UserListService } from './services/user-list.service';
import { PlanetListService } from './services/planet-list.service';

const appRoutes:Routes = [
  { path:'',component:HomeComponent },
  { path:'login',component:LoginComponent },
  { path:'search',component:SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserListService,PlanetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

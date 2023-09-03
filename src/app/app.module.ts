import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes:Routes=[
  {
    path:'',component:MainLayoutComponent,children:[
      {
        path:'',redirectTo:'users',pathMatch:"full"
      },
      {
        path:'users',component:UsersPageComponent,children:[
          {
            path:':id',component:UserDetailsPageComponent
          }
        ]
      },
      {
        path:'posts', component:PostsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UsersComponent,
    MainLayoutComponent,
    UsersPageComponent,
    UserDetailsPageComponent,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataService } from './user-data.service';
import { TaskDataService } from './task-data.service';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    UserListHeaderComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {path: "user", component: UserComponent},
    //   {path: "task", component: TaskComponent}
    // ])
  ],
  providers: [ApiService,UserDataService, TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

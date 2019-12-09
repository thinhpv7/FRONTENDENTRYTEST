import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { QuizCardComponent } from './quizzes/quiz-card/quiz-card.component';
import { QuizDetailComponent } from './quizzes/quiz-detail/quiz-detail.component';
import { ResultComponent } from './result/result.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    UserComponent,
    PmComponent,
    QuizCardComponent,
    QuizDetailComponent,
    ResultComponent,
    LayoutHomeComponent],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

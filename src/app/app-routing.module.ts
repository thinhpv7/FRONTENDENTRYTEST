import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidatesComponent } from './admin-layout/candidates/candidates.component';
import { QuestionComponent } from './admin-layout/question/question.component';
import { ManageTestsComponent } from './admin-layout/manage-tests/manage-tests.component';
import { AddTestComponent } from './admin-layout/manage-tests/add-test/add-test.component';
import { ListTestComponent } from './admin-layout/manage-tests/list-test/list-test.component';
import {HomeComponent} from './home/home.component'
import {UserComponent} from './user/user.component'
import {PmComponent} from './pm/pm.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {AdminComponent} from './admin/admin.component'


const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'questions', component: QuestionComponent},
    {path: 'tests', component: ManageTestsComponent, children:[
      {path: '', redirectTo: 'list-test', pathMatch: 'full'},
      {path: 'list-test', component: ListTestComponent},
      {path: 'add-test',component: AddTestComponent}
    ]}
  ]},
  {path: 'home', component: HomeComponent, children: [
    {path: 'home',redirectTo: '', pathMatch: 'full'},
  ]},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login',component: LoginComponent},
  {path: 'signup',component: RegisterComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

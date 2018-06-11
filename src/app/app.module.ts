import { HouseFormComponent } from './houseform/houseform.component';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { NavComponent } from './navbar/navbar.component';
import { GLogin } from './googlelogin/glogin.component';
import { RegisterService } from './register.service';
import { environment } from './evironment/environment';
import { Observable } from 'rxjs/observable';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { RegisterCompanyComponent } from './register_company/registerc.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegisterCompanyComponent,
    GLogin,
    NavComponent,
    HouseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,                
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    GithubService,
    RegisterService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

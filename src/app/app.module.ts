import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateBoxComponent } from './create-box/create-box.component';
import { SuccessCreateComponent } from './success-create/success-create.component';
import { AccessBoxComponent } from './access-box/access-box.component';
import { BoxComponent } from './box/box.component';
import { WishComponent } from './wish/wish.component';
import { SuccessWishComponent } from './success-wish/success-wish.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateBoxComponent,
    SuccessCreateComponent,
    AccessBoxComponent,
    BoxComponent,
    WishComponent,
    SuccessWishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
	AngularFirestoreModule,
	AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

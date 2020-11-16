import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { CreateBoxComponent } from 'src/app/create-box/create-box.component';
import { SuccessCreateComponent } from 'src/app/success-create/success-create.component';
import { BoxComponent } from 'src/app/box/box.component';
import { AccessBoxComponent } from 'src/app/access-box/access-box.component';
import { SuccessWishComponent } from 'src/app/success-wish/success-wish.component';
import { WishComponent } from 'src/app/wish/wish.component';

const routes: Routes = [
    {
        path: "/",
        component: HomeComponent
    },
    {
        path: "/crear",
        component: CreateBoxComponent
    },
    {
        path: "/exito-creacion",
        component: SuccessCreateComponent
    },
    {
        path: "/buzon/:id",
        component: BoxComponent
    },
    {
        path: "/acceder",
        component: AccessBoxComponent
    },
    {
        path: "/deseo",
        component: SuccessWishComponent
    },
    {
        path: "/:id",
        component: WishComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

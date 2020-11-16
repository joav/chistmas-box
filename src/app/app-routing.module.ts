import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateBoxComponent } from './create-box/create-box.component';
import { SuccessCreateComponent } from './success-create/success-create.component';
import { BoxComponent } from './box/box.component';
import { AccessBoxComponent } from './access-box/access-box.component';
import { SuccessWishComponent } from './success-wish/success-wish.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "crear",
        component: CreateBoxComponent
    },
    {
        path: "exito-creacion",
        component: SuccessCreateComponent
    },
    {
        path: "buzon/:id",
        component: BoxComponent
    },
    {
        path: "acceder",
        component: AccessBoxComponent
    },
    {
        path: "deseo",
        component: SuccessWishComponent
    },
    {
        path: ":id",
        component: WishComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

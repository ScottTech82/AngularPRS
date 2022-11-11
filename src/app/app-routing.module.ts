import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { E404Component } from './misc/e404/e404.component';
import { AboutComponent } from './misc/about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestReviewitemComponent } from './request/request-reviewitem/request-reviewitem.component';
import { VendorPoComponent } from './vendor/vendor-po/vendor-po.component';


const routes: Routes = [
  {path: "", redirectTo: "/user/login", pathMatch: "full"},
  

  
  {path: "user/login", component: UserLoginComponent},
  {path: "user/list", component: UserListComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/change/:id", component: UserChangeComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/change/:id", component: VendorChangeComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/change/:id", component: ProductChangeComponent},
  {path: "request/list", component: RequestListComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "request/detail/:id", component: RequestDetailComponent},
  {path: "request/change/:id", component: RequestChangeComponent},
  {path: "requestline/list/:id", component: RequestlineListComponent},
  {path: "requestline/create/:id", component: RequestlineCreateComponent},
  {path: "requestline/change/:id", component: RequestlineChangeComponent},
  {path: "request/reviews", component: RequestReviewComponent},
  {path: "request/reviews/:id", component: RequestReviewitemComponent},
  {path: "vendor/po/:id", component: VendorPoComponent},

  {path: "about", component: AboutComponent},
  


  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

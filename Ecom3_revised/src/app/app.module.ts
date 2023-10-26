import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CouponComponent } from "./store/coupon.component";
import { ProductDetailsComponent } from "./store/producDetails.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { Discount } from "./model/coupon.model";
@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      {
        path: "coupon",
        component: CouponComponent,
      },
      {
        path: "productdetails/:id",
        component: ProductDetailsComponent,
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },

      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [Discount],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

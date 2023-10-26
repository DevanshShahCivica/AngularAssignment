import { Injectable } from "@angular/core";

@Injectable()
export class Discount {
  public isCouponApplied: any = false;

  CheckDiscount() {
    this.isCouponApplied = true;

    console.log("coupon is applied", this.isCouponApplied);
  }
}

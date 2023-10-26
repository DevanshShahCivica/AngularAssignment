import { Component } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { Observable } from "rxjs";
const PROTOCOL = "http";
const PORT = 3500;
@Component({
  selector: "product-details",
  templateUrl: "productdetails.component.html",
})
@Injectable()
export class ProductDetailsComponent {
  product: Product | undefined;
  baseUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repository: ProductRepository,
    private http: HttpClient // Inject the HttpClient
  ) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    const productId = this.route.snapshot.paramMap.get("id");

    if (productId) {
      this.product = this.repository.getProduct(+productId);
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }
}


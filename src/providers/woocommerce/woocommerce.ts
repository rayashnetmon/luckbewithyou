import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {
  Woocommerce: any;
  WoocommerceV2: any;
  constructor() {
    /*
    this.Woocommerce = WC({
      url: "https://ray.modifiedarts.com",
      consumerKey: "ck_0aeb15044cd8833659ee1dc2ec33ba85d6ef447d",
      consumerSecret: "cs_6d43781ba7bd65b5257e977077e379243b9fc2fa"
    });

    this.WoocommerceV2 = WC({
      url: "https://ray.modifiedarts.com",
      consumerKey: "ck_0aeb15044cd8833659ee1dc2ec33ba85d6ef447d",
      consumerSecret: "cs_6d43781ba7bd65b5257e977077e379243b9fc2fa"
      //wpAPI: true,
      //version: "wc/v2"
    });
    */
    this.Woocommerce = WC({
      url: "https://luckbewithyou.com",
      consumerKey: "ck_c5933cde7f99c45aa344dcfd8cde577b2392b2d0",
      consumerSecret: "cs_11ad9c8dffd455fc81b98500bcf9b75aff15a470"
    });

    this.WoocommerceV2 = WC({
      url: "https://luckbewithyou.com",
      consumerKey: "ck_c5933cde7f99c45aa344dcfd8cde577b2392b2d0",
      consumerSecret: "cs_11ad9c8dffd455fc81b98500bcf9b75aff15a470"
      //wpAPI: true,
      //version: "wc/v2"
    });
  }
  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }
}

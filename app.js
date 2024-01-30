"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var product_1 = require("./product");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getById(2);
var p = new product_1.Product;
p.name = "Iphone6";
p.price = 4000;
p.category = "Telefon";
//_productService.saveProduct(p); ekleme
_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);

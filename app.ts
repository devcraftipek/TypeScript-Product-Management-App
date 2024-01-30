import { ProductService } from "./ProductService";
import { Product } from "./product";

let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new Product;

p.name ="Iphone6";
p.price = 4000;
p.category = "Telefon";

//_productService.saveProduct(p); ekleme
//_productService.deleteProduct(result); silme
result = _productService.getProducts();

console.log(result);
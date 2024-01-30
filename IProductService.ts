import { Product } from "./product";

export interface IProductService {
    getById(id: number): Product;
    getProducts(): Array<Product>;
    saveProduct(product: Product): void; 
    deleteProduct(product: Product): void;
}


// getById(id: number): Product;
// Bu metod, belirli bir ürünün ID'si verilen bir sayıya göre getirilmesini sağlar.
// Parametre olarak bir sayı alır (ID).
// Geri dönüş değeri olarak Product tipinde bir nesne döndürür.

// getProducts(): Array<Product>;
// Bu metod, tüm ürünleri getirmek için kullanılır.
// Herhangi bir parametre almaz.
// Geri dönüş değeri olarak Product tipinde bir diziyi içeren bir dizi döndürür.

// saveProduct(product: Product): void;
// Bu metod, bir ürünü kaydetmek için kullanılır.
// Parametre olarak Product tipinde bir nesne alır (kaydedilecek ürün).
// Geri dönüş değeri yoktur (void), yani herhangi bir değer döndürmez.

// deleteProduct(product: Product): void;
// Bu metod, bir ürünü silmek için kullanılır.
// Parametre olarak Product tipinde bir nesne alır (silinecek ürün).
// Geri dönüş değeri yoktur (void), yani herhangi bir değer döndürmez.
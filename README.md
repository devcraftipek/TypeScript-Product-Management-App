# TypeScript-Product-Management-App
Bu proje, TypeScript dilinde geliştirilmiş basit bir ürün yönetimi uygulamasını içerir. Uygulama, ürün ekleme, silme ve güncelleme gibi temel işlevselliği içermektedir.
## Kullanılan Teknolojiler

- TypeScript
- Node.js (yalnızca çalışma zamanında kullanıldı)
- VSCode (önerilen IDE)

- ## Nasıl Çalıştırılır

1. Proje klasörünü yerel makinenize klonlayın.
2. Terminal veya komut istemcisini açın ve proje dizinine gidin.
3. `npm install` komutu ile gerekli paketleri yükleyin.
4. `tsc` komutu ile TypeScript dosyalarını derleyin.
5. `node dist/app.js` komutu ile uygulamayı başlatın.


## Örnek Kullanım

```typescript
import { ProductService } from "./ProductService";
import { Product } from "./product";

let _productService = new ProductService();

// Ürün bilgisi almak için
let result = _productService.getById(2);
console.log(result);

// Yeni bir ürün eklemek için
let p = new Product();
p.name = "Iphone6";
p.price = 4000;
p.category = "Telefon";
_productService.saveProduct(p);

// Tüm ürünleri almak için
result = _productService.getProducts();
console.log(result);


Bu örneği kendi projenize uyarlayabilir ve kendi projenizin özelliklerini daha detaylı bir şekilde açıklayabilirsiniz.

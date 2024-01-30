export class Product {

    constructor (
        public id? : number, //isteğe bağlı ve clasa özel
        public name? : string,
        public category? : string,
        public price? : number 
    ) {}
}

let p = new Product ();
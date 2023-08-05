import ProductManager from '../ProductManager';

const productManager = new ProductManager('./products.json');


const newProduct = {
  title: 'Remeras Blancas',
  description: 'remeras de puro algodon',
  price: 1200,
  thumbnail: 'ruta/imagen.jpg',
  code: 'ABC123',
  stock: 10,
};

await productManager.addProduct(newProduct);


const allProducts = await productManager.getProducts();
console.log(allProducts);


const productById = await productManager.getProductById(1);
console.log(productById);


const updatedFields = {
  title: 'Producto Actualizado',
  price: 14.99,
};
await productManager.updateProduct(1, updatedFields);


await productManager.deleteProduct(1);

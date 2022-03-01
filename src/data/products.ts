import { Product } from '../interfaces/product.interface';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  image: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug Meme',
  image: './coffee-mug2.png'
}

export const products: Product[] = [product1, product2];
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  image: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      <ProductCard product={product1}>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
      </ProductCard>

      <ProductCard product={product2}>
        <ProductCard.Image/>
        <ProductCard.Title title={'New product'}/>
        <ProductCard.Buttons/>
      </ProductCard>
      </div>
    </div>
  )
}

import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components';
import '../styles/custom-styles.css'

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

      <ProductCard product={product1} className="bg-dark">
        <ProductImage className="custom-image"/>
        <ProductTitle className="white-text"/>
        <ProductButtons className="custom-buttons"/>
      </ProductCard>

      <ProductCard product={product2} className="bg-dark">
        <ProductCard.Image className="custom-image"/>
        <ProductCard.Title className="white-text" title={'New product'}/>
        <ProductCard.Buttons className="custom-buttons"/>
      </ProductCard>

      <ProductCard 
        product={product1} 
        style={{backgroundColor: '#70D1F8'}}
      >
        <ProductImage 
          style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}}
        />
        <ProductTitle style={{fontWeight: 'bold'}}/>
        <ProductButtons style={{
          display: 'flex',
          justifyContent: 'end'
        }}/>
      </ProductCard>
      </div>
    </div>
  )
}

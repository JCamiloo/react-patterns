import { useShoppingCart } from '../hooks/useShoppingCart';
import { ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              className="bg-dark"
              product={product}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title className="white-text"/>
              <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map(product => (
            <ProductCard
              key={product.id}
              className="bg-dark"
              style={{ width: '100px' }}
              product={product}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}

import { ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>

      <ProductCard
        key={product.id}
        className="bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 50
        }}
      >
        {
          ({ reset, increaseBy, isMaxCountReached }) => (
            <>
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title className="white-text"/>
              <ProductCard.Buttons className="custom-buttons"/>
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              { !isMaxCountReached && <button onClick={() => increaseBy(2)}> +2 </button> }
            </>
          )
        }
      </ProductCard>
    </div>
  )
}

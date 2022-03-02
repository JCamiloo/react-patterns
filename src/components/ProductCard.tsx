import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product.interface';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  children: (args: ProductCardHandlers) => JSX.Element;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
  const {counter, maxCount, isMaxCountReached, increaseBy, reset} = useProduct({onChange, product, value, initialValues});

  return (
    <Provider value={{counter, increaseBy, product, maxCount}}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  )
}

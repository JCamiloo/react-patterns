import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({image, className, style}: Props) => {
  const { product } = useContext(ProductContext);
  const imageToShow = image || product.image || noImage;

  return (
    <img 
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      style={style}
      alt="Product"
    />
  );
}

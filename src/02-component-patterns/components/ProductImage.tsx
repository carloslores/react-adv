import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imageShow: string;

  if (img) {
    imageShow = img;
  } else if (product.img) {
    imageShow = product.img;
  } else {
    imageShow = noImage;
  }

  return <img className={styles.productImg} src={imageShow} alt="Product" />;
};

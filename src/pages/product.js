import React, {useContext} from 'react';
import { ShopContext } from '../contexts/shop-context';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import ProductDisplay from '../components/product-display/product-display';
import DescriptionBox from '../components/descriptions/descriptionbox';
import RelatedProducts from '../components/related-products/related-products';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;
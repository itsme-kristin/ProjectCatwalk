import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

const RelatedProducts = (props) => {
  const [relatedProductsList, setRelatedProductsList] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${props.currentProduct.id}/related`)
      .then(productIds => {
        setRelatedProductsList(productIds.data);
      })
      .catch(err => {
        console.info('There was an error getting related product information from the server.')
      })
  }, []);

  return relatedProductsList && ( // this is called lazy eval
    <React.Fragment>
      <h3>RELATED PRODUCTS</h3>
      {relatedProductsList.map((product, index) => {
        return <ProductCard productId={product} key={index}/>
      })}
    </React.Fragment>
  )

};

export default RelatedProducts;
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';



const RelatedProducts = (props) => {
  const [relatedProductsList, setRelatedProductsList] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

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
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          >
            {relatedProductsList.map((product, index) => {
              return <ProductCard currentProduct={props.currentProduct} productId={product} key={index} setProduct={props.setProduct}/>
            })}
        </ItemsCarousel>
      </div>
    </React.Fragment>
  );
};

export default RelatedProducts;
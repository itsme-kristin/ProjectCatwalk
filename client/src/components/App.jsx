import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import ReviewTile from './ReviewTile.jsx';

const App = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/products')
      .then(products => {
        setProduct(products.data[0]);
      });
  }, []);

  if (product) {
    return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <RelatedProducts currentProduct={product}/>
      <div>
        <ReviewTile />
      </div>
    </React.Fragment>
    );
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;
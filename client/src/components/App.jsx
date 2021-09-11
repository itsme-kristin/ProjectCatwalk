import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

import Overview from './Overview.jsx';

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
      <Overview productInfo={product}/>
      <RelatedProducts currentProduct={product}/>
      <YourOutfit currentProduct={product}/>
    </React.Fragment>
    );
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;
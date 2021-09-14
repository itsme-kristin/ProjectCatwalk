import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './RatingsReviews/Reviews.jsx';
import YourOutfit from './YourOutfit/YourOutfit.jsx';
import Overview from './Overview/Overview.jsx';

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
      <Overview productId={product.id}/>
      <RelatedProducts currentProduct={product}/>
      <YourOutfit currentProduct={product}/>
      <Reviews currentProduct={product} />
      </React.Fragment>
    );
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;
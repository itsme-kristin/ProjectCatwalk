import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
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
      <div>
        <h1>{product.name}</h1>
        <Overview />
      </div>
    );
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;
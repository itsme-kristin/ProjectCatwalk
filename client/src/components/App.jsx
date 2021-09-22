import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './RatingsReviews/Reviews.jsx';
import YourOutfit from './YourOutfit/YourOutfit.jsx';
import Overview from './Overview/Overview.jsx';
import Header from './Header.jsx';

import { makeStyles } from '@material-ui/core/styles';
import { Container, CircularProgress } from '@material-ui/core';

const App = () => {
  const [productId, setProductId] = useState(38322);
  const [product, setProduct] = useState(null);
  const [productMeta, setProductMeta] = useState(null);
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then(products => {
        setProduct(products.data);
        return axios.get(`/api/reviews/meta?product_id=${productId}`)
      }).then(meta => {
        setProductMeta(meta.data);
      });
  }, [productId]);

  const handleClick = (e, widget) => {
    const data = {
      element: e.target.outerHTML,
      widget,
      time: moment().toString()
    }
    axios.post('/api/interactions', data)
      .then(() => {
        console.log('Posted interactions')
      })
      .catch(() => {
        console.log('Error posting interactions')
      })
  }

  if (product && productMeta) {
    return (
      <React.Fragment>
        <Header handleClick={handleClick} />
        <Container maxWidth="lg">
          <Overview handleClick={handleClick} product={product} productMeta={productMeta}/>
          <RelatedProducts handleClick={handleClick} currentProduct={product} setProductId={setProductId} />
          <YourOutfit handleClick={handleClick} currentProduct={product} outfitList={outfitList} setOutfitList={setOutfitList}/>
          <Reviews handleClick={handleClick} currentProduct={product} productMeta={productMeta} />
        </Container>
      </React.Fragment>
    );
  }
  else {
    return <CircularProgress />
  }
};

export default App;
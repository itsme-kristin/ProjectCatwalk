import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
  }
}));

const RelatedProducts = ({ currentProduct, setProductId, productMeta }) => {
  const classes = useStyles();
  const [relatedProductsList, setRelatedProductsList] = useState(null);
  const [doneSearching, setDoneSearching] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    setDoneSearching(false);
    axios.get(`/api/products/${currentProduct.id}/related`)
      .then(productIds => {
        setRelatedProductsList(productIds.data);
        setDoneSearching(true);
      })
      .catch(err => {
        console.info('There was an error getting related product information from the server.')
      })
  }, [currentProduct]);

  if (doneSearching) {
    return (
    <React.Fragment>
      <Typography className={classes.title} variant="h4" gutterBottom>
        RELATED PRODUCTS
      </Typography>
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
            {relatedProductsList.map((productId, index) => {
              return <ProductCard currentProduct={currentProduct} cardId={productId} key={index} setProductId={setProductId}/>
            })}
        </ItemsCarousel>
      </div>
    </React.Fragment>
    );
  } else {
    return null;
  }
};

export default RelatedProducts;
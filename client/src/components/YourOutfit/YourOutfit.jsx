import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';
import ProductCard from '../RelatedProducts/ProductCard.jsx';

const YourOutfit = (props) => {
  // const [outfitList, setOutfitList] = useState[[]];
  // const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <React.Fragment>
      <h3>YOUR OUTFIT</h3>
       <AddOutfitButton currentProduct={props.currentProduct} />
    </React.Fragment>
  )
};

export default YourOutfit;
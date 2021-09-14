import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';

const YourOutfit = () => {
  // const [outfitList, setOutfitList] = useState[null];
  // const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <React.Fragment>
      <h3>YOUR OUTFIT</h3>
       <AddOutfitButton />
    </React.Fragment>
  )
};

export default YourOutfit;
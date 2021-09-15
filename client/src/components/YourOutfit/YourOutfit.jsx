import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';
import OutfitCard from './OutfitCard.jsx';

const YourOutfit = (props) => {
  const [outfitList, setOutfitList] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <React.Fragment>
      <h3>YOUR OUTFIT</h3>
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
          <AddOutfitButton currentProduct={props.currentProduct} />
          {outfitList ? outfitList.map((product, index) => { return <OutfitCard productID={product} key={index} />}) : null
          }
        </ItemsCarousel>
      </div>
    </React.Fragment>
  )
};

export default YourOutfit;
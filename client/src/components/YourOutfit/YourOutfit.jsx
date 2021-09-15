import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';
import OutfitCard from './OutfitCard.jsx';
import Grid from '@material-ui/core/Grid';

const YourOutfit = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const handleAddOutfitClick = () => {
    const newOutfitList = props.outfitList.slice();
    if (newOutfitList.length === 0) {
      newOutfitList.push(props.currentProduct);
      props.setOutfitList(newOutfitList);
    }
    for (var i = 0; i < newOutfitList.length; i++) {
      var current = newOutfitList[i];
      if (current.id !== props.currentProduct.id) {
        newOutfitList.push(props.currentProduct);
      }
    }
    props.setOutfitList(newOutfitList);
  }
  return (
    <React.Fragment>
      <h3>YOUR OUTFIT</h3>
      <Grid container direction="row">
        <Grid item xs={2}>
          <AddOutfitButton handleAddOutfitClick={handleAddOutfitClick}/>
        </Grid>
        <Grid item xs={10}>
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
              {props.outfitList.map((product, index) => <OutfitCard product={product} key={index}/>)}
            </ItemsCarousel>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default YourOutfit;
import React from 'react';
import PlaceItem from './PlacesItem.jsx';

const PlacesList = ({sights}) => {
    // console.log(sights);
    const PlacesItem= sights.map(place => {
        return (
        <PlacesItem place={place.name}/>
          
        );
    });
    
    return (
        <h2>
            {PlacesItem}
        </h2>
    );
}

export default PlacesList;
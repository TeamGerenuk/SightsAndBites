import React from 'react';
import PlaceItem from './PlacesItem.jsx';
import Center from 'react-center';

const PlacesList = ({sights}) => {
    // console.log(sights);
    const PlacesItem= sights.map(place => {
        return (

        <PlacesItem place={place.name}/>
          
        );
    });
    
    return (
        <Center>
        <h2>
            {PlacesItem}
        </h2>
        </Center>
       
    );
}

export default PlacesList;
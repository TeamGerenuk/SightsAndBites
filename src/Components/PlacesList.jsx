import React from 'react';
import PlacesItem from './PlacesItem.jsx';
import Center from 'react-center';
import { connect } from 'react-redux';

const PlacesList = (props) => {
    // console.log(props.sights);
    const placesItem= props.sights.map(place => {
        return (
        <PlacesItem name={place.name} address={place.formatted_address}/>
        
        );
    });

    return (
        <Center>
        <div>
            {placesItem}
        </div>
        </Center>
    );
}

function mapStateToProps({getPlaces}) {
    return { getPlaces }; // {getPlaces} === {getPlaces: getPlaces}
}

export default connect(mapStateToProps)(PlacesList);
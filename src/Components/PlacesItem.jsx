import React from 'react';
import Center from 'react-center';


const PlacesItem = ({name, address}) => {
    // console.log(place);
    return (
        <Center>
        <p>{name + ' ' + address}</p>
        </Center>
    )
}

export default PlacesItem;
import React from 'react';
import Center from 'react-center';

const Header=({message}) => {
    return (
       <Center>
       <div>
            <h1>Sights and Bites </h1>
            <img src ="data:image/jpeg;base64,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" />
        </div>
        </Center>
    )
}

export default Header;
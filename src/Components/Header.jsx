import React from 'react';
import Center from 'react-center';

const Header=({message}) => {
    return (
       <Center>
       <div>
            <h1>{message}</h1>
        </div>
        </Center>
    )
}

export default Header;
import React from 'react';

const Heading = ({ subtitle, title }:any) => {

    return (
        <>
            <div id='heading'>
                <h3>{subtitle} </h3>
                <h1>{title} </h1>
            </div>
        </>
    );
};

export default Heading;

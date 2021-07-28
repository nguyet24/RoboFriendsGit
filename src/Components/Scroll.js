import React from 'react';

const Scroll = (props) => {
    return(
        //Can create a Scroll.css file but below is another way
        //using {} means you are using a jsx expression 
        //{{}} - this just states this a javascript expression and within this im return an object
        <div style={{overflowY: 'scroll ', border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
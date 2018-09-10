import React from 'react';

const Scroll = (props) => {
    return (
        <div className="mt3 mb3" style={{ overflowY: 'scroll', borderTop: '3px solid lightBlue', height: '500px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;
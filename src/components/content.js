import React from 'react';

const Content = (props) => (
    <div style={style.content}>
        {props.children}
    </div>
);

const style = {
    content: {
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
    }
};

export default Content;
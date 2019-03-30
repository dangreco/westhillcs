/**
 * This file contains the content component; it holds content inside a bounded box.
 */

import React from 'react';

class Content extends React.Component {

    render()
    {
        return (
            <div style={style.content}>
                {this.props.children}
            </div>
        )
    }

}

const style = {
    content: {
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
    }
};

export default Content;
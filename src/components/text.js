/**
 * This component renders text in one of two styles: normal or big.
 * TODO: Implement this component more.
 */

import React from 'react';

class Text extends React.Component {

    render()
    {
        return (
            <p style={this.props.big ? styles.bigText : styles.text}>{this.props.children}</p>
        )
    }

}

const styles = {
    text: {
        fontFamily: "Roboto",
        color: "#282828",
    },
    bigText: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        color: "#282828",
        fontSize: 64,
        lineHeight: 1,
        marginTop: 30,
        marginBottom: 60
    }
};

export default Text;
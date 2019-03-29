import React from 'react';

const Text = (props) => (
    <p style={props.big ? styles.bigText : styles.text}>{props.children}</p>
);

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
}

export default Text;
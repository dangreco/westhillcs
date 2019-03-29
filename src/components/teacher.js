import React from 'react';
import globals from '../globals';

const styles = {
    container: {
        width: 300,
        paddingLeft: 75,
        paddingRight: 75
    },
    picture: {
        marginTop: 30,
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: globals.shadow2
    }, 
    text: {
        textAlign: "center",
        width: "100%",
        marginTop: 15,
        marginBottom: 0,
        fontWeight: "500",
        fontFamily: "Roboto"
    }
};

const Teacher = (props) => (
    <div style={styles.container}>
        <div style={{
            ...styles.picture,
            backgroundImage: `url('${props.source}')`
        }}></div>
        <p style={styles.text}>{props.name}</p>
    </div>
);

export default Teacher;
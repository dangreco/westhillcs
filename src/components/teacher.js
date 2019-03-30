/**
 * This component renders a teacher's photo and name.
 */

import React from 'react';
import globals from '../globals';

class Teacher extends React.Component {

    render()
    {
        return (
            <div style={styles.container}>
                <div style={{
                    ...styles.picture,
                    backgroundImage: `url('${this.props.source}')`
                }}/>
                <p style={styles.text}>{this.props.name}</p>
            </div>
        )
    }

}

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

export default Teacher;
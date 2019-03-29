import React, { Component } from 'react'

const Section = (props) => (
    <div style={{marginBottom: 60, position: "relative"}}>
        <span style={styles.title}>{props.title}</span>
        {props.children}
    </div>
);

const styles = {
    title: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 32, 
        marginBottom: 30,
        display: "block"
    }
}

export default Section;
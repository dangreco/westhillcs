import React from "react";

const Course = (props) => (
    <div style={styles.card}>
        <div style={styles.container}>
            <p style={styles.title}>{props.title}</p>
            <p style={styles.desc}>{props.desc}</p>
            <p style={styles.link}>Textbook</p>
        </div>
    </div>
);


const styles = {
    card: {
        margin: 30,
        width: 340,
        height: 212,
        borderRadius: 10,
        boxShadow: "rgba(50, 50, 50, 0.25) 0px 0px 60px 0px"
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    title: {
        fontFamily: "Montserrat",
        fontSize: 26,
        fontWeight: "bold",
    },
    desc: {
        fontFamily: "Montserrat"
    },
    link: {
        fontFamily: "Montserrat"
    }
};

export default Course;

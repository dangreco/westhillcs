import React from "react";
import { Link } from 'gatsby'
import globals from '../globals';

const Course = (props) => (
    <div className="CourseCard" style={styles.card}>
        <Link style={styles.cardLink} to={props.page}>
            <div style={styles.container}>
                <p style={styles.title}>{props.title}</p>
                <p style={styles.desc}><i>{props.desc}</i></p>
                {
                    props.noBook ? (null) : (
                        <a href={props.redirect} style={styles.link}>Textbook</a>
                    )
                }
            </div>
        </Link>
    </div>
);

const styles = {
    card: {
        margin: 30,
        width: 340,
        height: 212,
        borderRadius: 10,
        boxShadow: globals.shadow2,
        backgroundColor: "#ffffff"
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 15
    },
    title: {
        fontFamily: "Montserrat",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        color: "#282828"
    },
    desc: {
        fontFamily: "Roboto",
        marginBottom: 0,
        textAlign: "center",
        color: "#282828"
    },
    link: {
        fontFamily: "Roboto",
        fontWeight: "500",
        textDecoration: "none",
        textAlign: "center",
        color: globals.colors.purple,
        marginTop: 10,
        marginBottom: 0
    },
    cardLink: {
        textDecoration: "none"
    }
};

export default Course;

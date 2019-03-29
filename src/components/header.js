import React from "react"
import { Link } from 'gatsby'

const styles = {
    header: {
        height: 60
    },
    headerContainer: {
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
    },
    headerText: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 20,
        color: "#282828"
    },
    link: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 16,
        color: "#282828",
        textDecoration: "none",
        margin: 10
    },
    activeLink: {
        fontWeight: "bold",
        color: "#282828",
    }
};

const Header = () => (
    <header style={styles.header}>
        <div style={styles.headerContainer}>
            <span style={styles.headerText}>Westhill CS</span>
            <div>
                <Link style={styles.link} activeStyle={styles.activeLink} to="/">Home</Link>
                <Link style={styles.link} activeStyle={styles.activeLink} to="/info">Info</Link>
                <Link style={styles.link} activeStyle={styles.activeLink} to="/news">News</Link>
                <Link style={styles.link} activeStyle={styles.activeLink} to="/resources">Resources</Link>
            </div>
        </div>
    </header>
);


export default Header

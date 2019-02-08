import { Link } from "gatsby"
import React from "react"

const styles = {
    header: {
        height: 60
    },
    headerContainer: {
        height: 60,
        display: "flex",
        alignItems: "center",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
    },
    headerText: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 20,
        color: "#282828"
    }
};

const Header = () => (
  <header style={styles.header}>
      <div style={styles.headerContainer}>
          <span style={styles.headerText}>Westhill Computer Science</span>
      </div>
  </header>
);


export default Header

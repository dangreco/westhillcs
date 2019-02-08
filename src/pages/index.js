import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Course from "../components/course"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={styles.root}>
        <div style={styles.main}>
            <div style={styles.videoContainer}>
                <iframe id="ytplayer" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameBorder="0"/>
            </div>
            <span style={styles.section}>Courses</span>
            <div style={styles.courses}>
                <Course title={"Intro to CS"} desc={"Computer science fundamentals"}/>
                <Course title={"Intro to CS"} desc={"Computer science fundamentals"}/>
                <Course title={"Intro to CS"} desc={"Computer science fundamentals"}/>
                <Course title={"Intro to CS"} desc={"Computer science fundamentals"}/>
                <Course title={"Intro to CS"} desc={"Computer science fundamentals"}/>
            </div>
        </div>
    </div>
  </Layout>
);

const styles = {
    root: {
    },
    main: {
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
    },
    videoContainer: {
        width: "100%",
        height: 675,
        marginBottom: 30
    },
    section: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 32
    },
    courses: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        alignContent: "flex-start",
        alignItems: "center",
        justifyContent: "center"
    }
};

export default IndexPage

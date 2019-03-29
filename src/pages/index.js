import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Course from "../components/course"
import SEO from "../components/seo"
import Section from "../components/section";
import LinearContainer from "../components/linearContainer";
import Content from "../components/content";
import Teacher from "../components/teacher";
import YouTube from "../components/youtube";
import Text from "../components/text"

//<YouTube source="https://www.youtube.com/embed/r9--eMWFpXQ" />

const IndexPage = () => (
    <Layout shapes>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <Text big>Home of Westhill's Computer Science Program</Text>
            <Section title={"Meet Your Teachers"}>
                <LinearContainer>
                    <Teacher name="Mr. Sarkar" source="http://westhillcs.com/img/sarkar.JPG" />
                    <Teacher name="Ms. Tennent" source="http://westhillcs.com/img/tennent.jpg" />
                    <Teacher name="Ms. Kurtz" source="http://westhillcs.com/img/kurtz.jpg" />
                    <Teacher name="Mr. Temelini" source="http://westhillcs.com/img/temelini.jpg" />
                </LinearContainer>
            </Section>
            <Section title={"Courses"}>
                <LinearContainer>
                    <Course noBook title={"Web Design"} desc={"Website development using HTML/CSS."} />
                    <Course noBook title={"Game Design"} desc={"Learn how to create video games."} />
                    <Course title={"Python A"} desc={"Introduction to the Python programming language."} redirect={"https://academy.cs.cmu.edu/login"}/>
                    <Course title={"Python B"} desc={"Further concepts for the Python programming language."} redirect={"https://academy.cs.cmu.edu/login"}/>
                    <Course title={"Cyber Security"} desc={"Taking digital privacy into your own hands."} redirect={"https://csab373.appspot.com/cyber/course"} page={"/courses/cyber"}/>
                    <Course title={"Intro CS"} desc={"Computer science fundamentals"} redirect={"https://csab373.appspot.com/introCS/course"} page={"/courses/introcs"}/>
                    <Course title={"AP CSP"} desc={"Mobile app development."} redirect={"https://course.mobilecsp.org/mobilecsp/course"} page={"/courses/csp"} />
                    <Course title={"AP CSA"} desc={"Java-based, object-oriented programming."} redirect={"https://csab373.appspot.com/apcsa/"} page={"/courses/csa"}/>
                    <Course title={"CS AB"} desc={"Advanced algorithms and data structures."} redirect={"https://csab373.appspot.com/first/course"} page={"/courses/csab"}/>
                </LinearContainer>
            </Section>
        </Content>
    </Layout>
);

export default IndexPage

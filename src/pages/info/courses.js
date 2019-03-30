import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import Text from "../../components/text";
import Table from "../../components/table";
import tables from "../../data/tables";
import YouTube from "../../components/youtube";

class CourseInfoPage extends React.Component {

    render()
    {
        return (
            <Layout>
                <SEO title="Courses" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Section title={"Which Comp Sci Course To Take"}>
                        <Text>
                            Students are sometimes confused about which Computer Science course to take at Westhill.
                            This page describes the differences between the courses offered.
                            <br />
                            Here is a diagram that shows the typical course sequences that students at Westhill follow.
                        </Text>
                        <Table data={tables.courseSequence}/>
                    </Section>
                    <Section title={"Which Starter Course To Take"}>
                        <Text>
                            All Honors-level students should start with AP CSP as their first computer science class (including Freshman).
                            For all other students, the choice will be between Python A and Intro to CS.
                            The Intro to CS course is based on block programming and, as such, provides a gentler introduction to programming.
                        </Text>
                    </Section>
                    <Section title={"Which AP Course To Take"}>
                        <Text>If you are trying to choose between the two AP offerings, check out this video: </Text>
                        <YouTube source={"https://www.youtube.com/embed/C8e19APClpc"}/>
                        <Text>
                            If you are currently an 8th grader and will be attending Westhill High School next year, here are things to consider
                            if you are thinking of taking a Computer Science course as a freshman:
                        </Text>
                        <Table data={tables.freshmanCourse} />
                        <ul>
                            <li>Honors freshmen wanting to take an AP Computer Science course in their first year at Westhill are encouraged to take AP CSP before taking AP Comp Sci A. </li>
                            <li>Seniors are encouraged to take AP CSP or AP Computer Science A in place of Intro to Comp Sci.</li>
                            <li>Students must successfully complete AP Computer Science A to be eligible to take the AB course.</li>
                            <li>No previous programming experience is necessary for the Intro, CSP, and Comp Sci A courses.</li>
                        </ul>
                    </Section>
                    <Section title={"Pathways: Typical Computer Science Sequences"}>
                        <img alt="pathways" src="http://westhillcs.com/img/pathways.png"/>
                    </Section>
                    <Section title={"Prerequisites for Computer Science Courses"}>
                        <img alt="prerequisites" src="http://westhillcs.com/img/prerequisites.png" />
                    </Section>
                </Content>
            </Layout>
        )
    }

}

export default CourseInfoPage;

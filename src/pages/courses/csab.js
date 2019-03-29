import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import Text from "../../components/text";
import YouTube from "../../components/youtube";

const CSABPage = () => (
    <Layout>
        <SEO title="CS AB" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <Text big>CS AB: Theory, data structures, <br/>advanced algorithms.</Text>
            <Section title="Description">
                <Text>
                    In this rigorous course, students will expand their knowledge of computer science to deal
                    with the optimization of programming-related problems. Starting in 2009, there is no longer
                    an AP exam associated with this course. Westhill's version of the Advanced CS AB course retains
                    some of the topics in the original curriculum, as well as introduces miscellaneous topics
                    vital to one's career in computer science.
                </Text>
            </Section>
            <Section title="Requirements">
                <ul><li>
                        <Text><strong>Prerequisites:</strong> AP CSA</Text>
                    </li>
                    <li>
                        <Text><strong>AP Score:</strong> 4 or 5 on the CSA exam</Text>
                    </li>
                    <li>
                        <Text><strong>Math:</strong> Algebra II (Recommended)</Text>
                    </li>
                </ul>
            </Section>
            <Section title="Outline">
                <ol>
                    <li>
                        <Text><strong>Big-O</strong> - describing the theoretical complexity of an algorithm.</Text>
                    </li>
                    <li>
                        <Text><strong>Additional Java</strong> - Java topics not included in CSA (e.g, operators and programming constructs.)</Text>
                    </li>
                    <li>
                        <Text><strong>Java Colletions</strong> - standard Java library classes including maps and sets.</Text>
                    </li>
                    <li>
                        <Text><strong>Linked Lists</strong> - introduction to linked lists and doubly linked lists.</Text>
                    </li>
                    <li>
                        <Text><strong>Stacks & Queues</strong> - how stacks and queues can be used to solve common programming problems.</Text>
                    </li>
                    <li>
                        <Text><strong>Trees</strong> - the single most important data structure of this course.</Text>
                    </li>
                    <li>
                        <Text><strong>Sorting</strong> - a continuation of CSA. This course looks at Heapsort and Quicksort.</Text>
                    </li>
                    <li>
                        <Text><strong>Hashing</strong> - how hashing can be used to speed up searching.</Text>
                    </li>
                    <li>
                        <Text><strong>Regular Expressions</strong> - reducing code size when searching for patterns in text.</Text>
                    </li>
                </ol>
            </Section>
            <Section title="Video">
                <YouTube source="https://www.youtube.com/embed/xGUZnYLa9uQ" />
            </Section>
        </Content> 
    </Layout>
);

export default CSABPage;
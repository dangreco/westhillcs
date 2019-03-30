import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";
import Section from "../components/section";
import Text from "../components/text";
import globals from "../globals";

class ResourcesPage extends React.Component {

    render()
    {
        return (
            <Layout>
                <SEO title="Resources" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Section title="Try a Little Programming!">
                        <Text>
                            Not sure if you will enjoy computer science?
                            Why not give it a try? Just click on the links and try it for yourself.
                            If you want to do more visit code.org/learn and try a few more projects.
                        </Text>
                        <Text>
                            Not challenging enough? Register (for free) at codeacademy.com (not codeacademy.org) and try the lessons on Python or JavaScript.
                        </Text>
                    </Section>
                    <Section title="Look at What Our Students are Building!">
                        <Text>
                            Here are some videos of apps built by our CSP students.
                            If you want to see more examples of what our students have built, click <a style={{color: globals.colors.purple, fontWeight: "bold"}} href="google.com">here</a>.
                        </Text>
                        <Text>
                            To read what Westhill graduates are saying about how computer science courses are helping in college click <a style={{color: globals.colors.purple, fontWeight: "bold"}} href="google.com">here</a>.
                        </Text>
                    </Section>
                </Content>
            </Layout>
        )
    }

}

export default ResourcesPage

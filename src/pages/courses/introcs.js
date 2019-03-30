import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import YouTube from "../../components/youtube";

class IntroCSPage extends React.Component {

    render()
    {
        return (
            <Layout>
                <SEO title="Intro CS" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Section title={"Intro CS"}>
                        <YouTube source="https://www.youtube.com/embed/p1NRaichQa8" />
                    </Section>
                </Content>
            </Layout>
        )
    }

}

export default IntroCSPage;
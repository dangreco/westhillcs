import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import Text from "../../components/text";
import YouTube from "../../components/youtube";

const IntroCSPage = () => (
    <Layout>
        <SEO title="Intro CS" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <Section title={"Intro CS"}>
                <YouTube source="https://www.youtube.com/embed/p1NRaichQa8"></YouTube>
            </Section>
        </Content>
    </Layout>
);

export default IntroCSPage;
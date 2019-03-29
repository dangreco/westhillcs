import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import Text from "../../components/text";
import YouTube from "../../components/youtube";

const CSAPage = () => (
    <Layout>
        <SEO title="CSA" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <Text big></Text>
            <Section title="Requirements">
                <ul>
                    <li>
                        <Text><strong>Prerequisites:</strong> Any other CS course OR an unweighted GPA of 3.7</Text>
                    </li>
                    <li>
                        <Text><strong>Math:</strong> At least a B+ in Honors Algebra II (recommended)</Text>
                    </li>
                </ul>
            </Section>
        </Content>
    </Layout>
);

export default CSAPage;
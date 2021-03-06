import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";

class InfoPage extends React.Component {

    render()
    {
        return (
            <Layout>
                <SEO title="Info" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Link to={"/info/courses"}>What course to take</Link>
                </Content>
            </Layout>
        )
    }

}

export default InfoPage;

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";
import Section from "../components/section";
import Spinner from "../components/spinner";
import NewsItem from "../components/newsItem";

class NewsPage extends React.Component {


    constructor(props)
    {
        super(props);
        this.state = {
            posts: [],
            loading: false
        };
        this.fetchPage = this.fetchPage.bind(this);
    }

    async fetchPage()
    {
        await this.setState({loading: true});
        fetch("https://us-central1-westhillcs-9e55d.cloudfunctions.net/getBlogPosts")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    posts: this.state.posts.concat(json),
                    loading: false
                })
            })
    }

    componentWillMount()
    {
        this.fetchPage();
    }

    render()
    {
        return (
            <Layout shapes>
                <SEO title="News" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Section title={"News"}>
                        {
                            this.state.posts.map(item => (
                                <NewsItem post={item}/>
                            ))
                        }
                        {
                            this.state.loading ? (<Spinner centered size={30} />) : (null)
                        }
                    </Section>
                </Content>
            </Layout>
        )
    }

}

export default NewsPage;

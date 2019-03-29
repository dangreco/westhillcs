import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";
import Section from "../components/section";
import globals from "../globals";
import Spinner from "../components/spinner";

var moment = require('moment');

function shortenContent(content)
{
    const max = 175;
    if (content <= max) return content;
    let overflow = content.substring(max);
    let nextSpace= overflow.indexOf(" ");
    return content.substring(0, max + nextSpace) + "...";
}

const NewsItem = (props) => (
  <div style={styles.newsItem}>
      <p style={styles.headline}>{props.post.headline}</p>
      <p style={styles.timestamp}>{
          moment(props.post.timestamp).format("MMMM Do YYYY")
      }</p>
      <p style={styles.content}>
          {
              shortenContent(props.post.content.replace(/(<([^>]+)>)/ig,""))
          }

          <Link to={`/news/post?id=${props.post.id}`} style={styles.readMore}> Read More</Link>
      </p>
  </div>
);

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

const styles = {
    newsItem: {
        border: "1px solid #dadce0",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#ffffff"
    },
    headline: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 18,
        color: "#282828",
        marginBottom: 0
    },
    timestamp: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#202124",
        marginBottom: 10
    },
    content: {
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#202124",
        marginBottom: 0
    },
    readMore: {
        textDecoration: "none",
        color: globals.colors.purple,
        fontWeight: "500"
    }
};

export default NewsPage

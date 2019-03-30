import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Content from "../../components/content";
import Section from "../../components/section";
import Spinner from "../../components/spinner";
let moment = require('moment');

export default class Post extends  React.Component {


    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            post: undefined,
            loading: false
        }
        this.getPost = this.getPost.bind(this);
    }

    componentDidMount()
    {
        this.getPost();
    }

    async getPost()
    {
        await this.setState({loading: true});
        let re = /........-....-....-....-............/;
        let postId = re.exec(this.props.location.search)[0];
        if (postId === undefined) {
            console.log(this.props.location)
        } else {
            fetch("https://us-central1-westhillcs-9e55d.cloudfunctions.net/getPostById", {
                method: "POST",
                body: JSON.stringify({
                    id: postId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json()).then(json => {
                this.setState({
                    post: json.post,
                    loading: false
                })
            })
        }
    }

    render()
    {
        return(
            <Layout>
                <SEO title="Post" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    <Section title={this.state.post === undefined ? "" : this.state.post.headline}>
                        {
                            this.state.post === undefined ? (null) : (
                                <div>
                                    <p style={{fontFamily: "Roboto", fontSize: 14}}><i>Posted {moment(this.state.post.timestamp).format("MMMM Do YYYY")}</i></p>
                                    <div style={{fontFamily: "Roboto", fontSize: 16}} dangerouslySetInnerHTML={{__html: this.state.post.content}} />
                                </div>
                            )
                        }
                        {
                            this.state.loading ? (
                                <Spinner centered size={30}/>
                            ) : (null)
                        }
                    </Section>
                </Content>
            </Layout>
        )
    }

}
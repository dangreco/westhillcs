/**
 * This component renders a news item.
 */

import React from 'react';
import {Link} from "gatsby";
import globals from "../globals";
let moment = require('moment');

/**
 * Shortens text to maximum length.
 * @param content => the text to shorten
 * @returns {string|*} => the shortened text.
 */
function shortenContent(content)
{
    const max = 175;
    if (content <= max) return content;
    let overflow = content.substring(max);
    let nextSpace= overflow.indexOf(" ");
    return content.substring(0, max + nextSpace) + "...";
}

class NewsItem extends React.Component {

    render()
    {
        return (
            <div style={styles.newsItem}>
                <p style={styles.headline}>{this.props.post.headline}</p>
                <p style={styles.timestamp}>{
                    moment(this.props.post.timestamp).format("MMMM Do YYYY")
                }</p>
                <p style={styles.content}>
                    {
                        shortenContent(this.props.post.content.replace(/(<([^>]+)>)/ig,""))
                    }

                    <Link to={`/news/post?id=${this.props.post.id}`} style={styles.readMore}>Read More</Link>
                </p>
            </div>
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

export default NewsItem;
/**
 * This component renders a YouTube video in the proper aspect ratio.
 */

import React from 'react';

class YouTube extends React.Component {

    render()
    {
        return (
            <div style={{width: "100%", height: "100%", position: "static"}}>
                <div style={styles.videoWrapper}>
                    <iframe
                        style={styles.video}
                        width="560"
                        height="349"
                        src={this.props.source}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        )
    }

}

const styles = {
    videoWrapper: {
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: 25,
        width: "100%",
        height: 0,
        marginBottom: 60,
        backgroundColor: "#000000"
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
};

export default YouTube;

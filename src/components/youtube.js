import React from 'react';

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
}

const YouTube = (props) => (
    <div style={{width: "100%", height: "100%", position: "static"}}>
        <div style={styles.videoWrapper}>
            <iframe
                style={styles.video}
                width="560" 
                height="349"
                src={props.source}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default YouTube;

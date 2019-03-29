import React from "react";

const LinearContainer = (props) => (
    <div style={style.container}>
        {props.children}
    </div>
);

const style = {
    container: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        alignContent: "flex-start",
        alignItems: "center",
        justifyContent: "center"
    }
}

export default LinearContainer;
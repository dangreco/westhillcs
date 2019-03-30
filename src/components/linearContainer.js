/**
 * This component is a wrapper for a linear flexbox container.
 */

import React from "react";

class LinearContainer extends React.Component {

    render()
    {
        return (
            <div style={style.container}>
                {this.props.children}
            </div>
        )
    }

}

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
};

export default LinearContainer;
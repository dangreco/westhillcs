/**
 * This component is a section -- it has a section title and content.
 */

import React from 'react'

class Section extends React.Component {

    render()
    {
        return (
            <div style={{marginBottom: 60, position: "relative"}}>
                <span style={styles.title}>{this.props.title}</span>
                {this.props.children}
            </div>
        )
    }

}

const styles = {
    title: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 32, 
        marginBottom: 30,
        display: "block"
    }
};

export default Section;
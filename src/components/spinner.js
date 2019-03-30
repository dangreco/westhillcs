/**
 * This component renders a spinner.
 */

import React from 'react';

class SpinnerIcon extends React.Component {

    render()
    {
        return (
            <svg className="spinner" width={`${this.props.size}px`} height={`${this.props.size}px`} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="spinnerPath" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
            </svg>
        )
    }

}

class Spinner extends React.Component {

    render()
    {
        return this.props.centered ? (
            <div style={containerStyle}>
                <SpinnerIcon {...this.props}/>
            </div>
        ) : (<SpinnerIcon {...this.props}/>)
    }

}

/* Note: actual spinner animation code is in ./layout.css. */
const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export default Spinner;
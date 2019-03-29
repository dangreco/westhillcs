import React from 'react';

/* Note: actual spinner animation code is in ./layout.css. */

const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const Spinner = (props) => (
    <svg className="spinner" width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="spinnerPath" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
);

class SpinnerWrapper extends React.Component {
    render()
    {
        return this.props.centered ? (
            <div style={containerStyle}>
                <Spinner {...this.props}/>
            </div>
        ) : (<Spinner {...this.props}/>)
    }
}


export default SpinnerWrapper;
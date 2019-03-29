import React from "react"

import Header from "./header"
import "./layout.css"
import Shape from "./shape";

class Layout extends React.Component {

  constructor(props)
  {
    super();
    this.props = props;
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount()
  {
    const height = this.rootContainer.clientHeight;
    const width = this.rootContainer.clientWidth;
    this.setState({
      height: height,
      width: width
    });
  }

  render()
  {
    
    let numberOfShapes = Math.round((this.state.height - 500) / 860);
    numberOfShapes = numberOfShapes < 0 ? 0 : numberOfShapes;
    let shapes = [];
    for (let i = 0; i < numberOfShapes; ++i) {
      shapes.push(
        i % 2 !== 0 ? <Shape color="purple" /> : <Shape color="gold" />
      );
    }

    return (
      <div ref={(ref) => this.rootContainer = ref}>
        <Header />
        <main className="Content" >{this.props.children}</main>
        <div style={{position: "absolute", zIndex: -99999, top: 500, left: 0, width: "100%",}}>
          { this.props.shapes ? shapes : null }
        </div>
      </div>
    )
  }

}

export default Layout

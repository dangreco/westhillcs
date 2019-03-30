import React from "react"

import Header from "./header"
import "./layout.css"
import Shape from "./shape";

class Layout extends React.Component {

  constructor(props)
  {
    super(props);
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

  /**
   * Determines the number of colored background shapes to use based on the height of the page.
   * @param height => the height of the page.
   * @returns {number} => the number of shapes to generate.
   */
  static getNumShapes(height)
  {
    let numberOfShapes = Math.round((height - 500) / 860);
    return numberOfShapes < 0 ? 0 : numberOfShapes;
  }

  /**
   * Generates n shapes given the number of shapes to generate.
   * @param numShapes => the number of shapes to generate.
   * @returns {Array} => the shape components in an array.
   */
  static getShapes(numShapes)
  {
    let shapes = [];
    for (let i = 0; i < numShapes; ++i) {
      shapes.push(
          i % 2 !== 0 ? <Shape color="purple" /> : <Shape color="gold" />
      );
    }
    return shapes;
  }

  render()
  {
    let numShapes = Layout.getNumShapes(this.state.height);
    let shapes =  Layout.getShapes(numShapes);

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

export default Layout;

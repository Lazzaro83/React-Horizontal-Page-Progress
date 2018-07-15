import React from "react";
import "./HorizontalPageProgress.css";

class HorizontalPageProgress extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      width: "0",
      height: prop.height,
      backgroundColor: prop.backgroundColor
    };
    this.caluculateWidth = this.caluculateWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.caluculateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.caluculateWidth);
  }

  caluculateWidth(event) {
    let { scrollTop } = event.target.scrollingElement;
    const { offsetHeight } = event.target.scrollingElement;
    const { clientHeight } = event.target.scrollingElement;
    const fullWidth = offsetHeight - clientHeight;
    this.setState({ width: `${Math.ceil(100 * scrollTop / fullWidth)}%` });
  }

  render() {
    return (
      <div className="horizontalPageProgress">
        <div style={this.state} />
      </div>
    );
  }
}
export default HorizontalPageProgress;

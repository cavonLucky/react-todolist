import React from "react";
import "./style.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this);
  }

  handleToggole() {
    let show = this.state.show ? false : true;
    this.setState({ show });
  }

  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <div className={show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggole}>toggole</button>
      </React.Fragment>
    )
  }
}

export default App;

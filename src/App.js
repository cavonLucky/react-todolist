import React from "react";
import { CSSTransition } from 'react-transition-group';
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
        <CSSTransition
          in={show}
          timeout={1000}
          // 与 css 样式的类名前缀保持一致即可
          classNames={'fade'}
          unmountOnExit
          onEntered={(el) => { el.style.color = 'blue'; }}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggole}>toggole</button>
      </React.Fragment>
    )
  }
}

export default App;

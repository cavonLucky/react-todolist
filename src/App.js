import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem() {
    this.setState((prevState) => ({ list: [...prevState.list, 'item'] }));
  }

  render() {
    const { list } = this.state;
    return (
      <React.Fragment>
        {/* 一组动画用 TransitionGroup 包裹然后立马使用 CSSTransition，单个动画 CSSTransition */}
        <TransitionGroup>
          {
            list.map((item, index) => (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames={'fade'}
                unmountOnExit
                onEntered={(el) => { el.style.color = 'blue'; }}
                appear={true}
              >
                <div>{item}</div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggole</button>
      </React.Fragment>
    )
  }
}

export default App;

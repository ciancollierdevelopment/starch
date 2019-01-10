import React, {Component} from 'react';

class Switcher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="switcher">
        <div className={(this.props.selected == 1) ? "switcher-option selected" : "switcher-option"}>
          <a onClick={() => {this.props.clickHandler(1)}} href="#">{this.props.firstoption}</a>
        </div>
        <div className={(this.props.selected == 2) ? "switcher-option selected" : "switcher-option"}>
          <a onClick={() => {this.props.clickHandler(2)}} href="#">{this.props.secondoption}</a>
        </div>
      </div>
    );
  }
}

export default Switcher;

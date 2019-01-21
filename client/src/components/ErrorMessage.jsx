import React, {Component} from 'react';

class ErrorMessage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let to_display = this.props.display ? 'block' : 'none';

    return (
      <React.Fragment>
        <p style={{display: to_display}} className="error">{this.props.text}</p>
      </React.Fragment>
    )
  }
}

export default ErrorMessage;

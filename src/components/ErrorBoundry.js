/* Requires React 16 or higher */
/* In development mode, an error would be displayed in fullscreen. */
/* In the live version of the app, only the component breaks, not the whole website. */
import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  /* Lifecycle hook that runs after an error */
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;

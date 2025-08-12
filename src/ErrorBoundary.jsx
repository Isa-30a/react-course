import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {}

  componentDidCatch(error, info) {
    //you could sent this to TrackJS/Sentry
    console.log("ERRORBOUNDARY  caught some error", error, info);
  }

  //every classs componente muist have arender method
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh- oh!</h2>
          <p>
            There was an error with this pages
            <Link to="/"> Click Here</Link>
            to go back to the home page
          </p>
        </div>
      );
    }
    //if you have no error be invisible
    /**<ErrorBoundary>
     * <h1>hi</h1>
     * </ErrorBoundary> */
    return this.props.children;
  }
}

export default ErrorBoundary;

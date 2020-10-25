import React, {CreateRef, PureComponent} from "react";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
      }
    }

    // componentDidMount() {

    // }

    render() {
      const {trailer} = this.props;
      return (
        <Component {...this.props} styleLeftValue={`30`}>
          <video
            ref={this._videoRef}
            src={trailer}
            autoPlay
            muted
            width="280"
            height="175"
          />
        </Component>
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;

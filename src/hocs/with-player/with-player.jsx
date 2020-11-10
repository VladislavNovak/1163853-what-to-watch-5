import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {filmPropStructure} from "../../utils/validator.prop";
import {getVideoProgress} from "../../utils/utils";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        videoCurrentTime: 0,
        progressPosition: 0,
      };

      this._onPlayerFullscreenClickHandler = this._onPlayerFullscreenClickHandler.bind(this);
      this._onPlayerPlayClickHandler = this._onPlayerPlayClickHandler.bind(this);
      this._onPlayerPauseClickHandler = this._onPlayerPauseClickHandler.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
    }

    _onPlayerFullscreenClickHandler() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _onPlayerPlayClickHandler() {
      this.setState({
        isPlaying: true
      });
    }

    _onPlayerPauseClickHandler() {
      this.setState({
        isPlaying: false
      });
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      video.src = film.trailer;

      this.setState({
        videoCurrentTime: video.currentTime,
        progressPosition: getVideoProgress(video),
      });

      if (this.state.isPlaying) {
        video.play();
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handleVideoTimeUpdate() {
      const video = this._videoRef.current;
      this.setState({
        videoCurrentTime: video.currentTime,
      });

      this.setState({
        progressPosition: getVideoProgress(video),
      });
    }

    render() {
      const {film, onPlayerExitClickHandler} = this.props;
      const {isPlaying, videoCurrentTime, progressPosition} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          videoCurrentTime={videoCurrentTime}
          progressPosition={progressPosition}
          title={film.title}
          onPlayerExitClickHandler={onPlayerExitClickHandler}
          onPlayerFullscreenClickHandler={this._onPlayerFullscreenClickHandler}
          onPlayerPlayClickHandler={this._onPlayerPlayClickHandler}
          onPlayerPauseClickHandler={this._onPlayerPauseClickHandler}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            onTimeUpdate={this._handleVideoTimeUpdate}
            poster={film.poster}
            muted
          />
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    film: PropTypes.shape(filmPropStructure).isRequired,
    onPlayerExitClickHandler: PropTypes.func.isRequired,
  };

  return WithPlayer;
};

export default withPlayer;

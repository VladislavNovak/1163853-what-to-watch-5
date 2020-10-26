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

      this._handlePlayerFullscreenClick = this._handlePlayerFullscreenClick.bind(this);
      this._handlePlayerPlayClick = this._handlePlayerPlayClick.bind(this);
      this._handlePlayerPauseClick = this._handlePlayerPauseClick.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
    }

    _handlePlayerFullscreenClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _handlePlayerPlayClick() {
      this.setState({
        isPlaying: true
      });
    }

    _handlePlayerPauseClick() {
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
      });

      this.setState({
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
      const {film, handlePlayerExitClick} = this.props;
      const {isPlaying, videoCurrentTime, progressPosition} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          videoCurrentTime={videoCurrentTime}
          progressPosition={progressPosition}
          title={film.title}
          handlePlayerExitClick={handlePlayerExitClick}
          handlePlayerFullscreenClick={this._handlePlayerFullscreenClick}
          handlePlayerPlayClick={this._handlePlayerPlayClick}
          handlePlayerPauseClick={this._handlePlayerPauseClick}
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
    handlePlayerExitClick: PropTypes.func.isRequired,
  };

  return WithPlayer;
};

export default withPlayer;

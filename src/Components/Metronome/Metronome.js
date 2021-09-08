import React, { Component } from "react";
import "./Metronome.css";
import click1 from "./click1.mp3";
import click2 from "./click2.mp3";

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4,
    };
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBpmChange = (event) => {
    const bpm = event.target.value;
    if (this.state.playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, 60000 / bpm);
      this.setState({
        count: 0,
        bpm,
      });
    } else {
      this.setState({
        bpm,
      });
    }
  };

  startStop = () => {
    this.timeInterval = 60000 / this.state.bpm;
    if (this.state.playing) {
      clearInterval(this.timer);
      this.setState({
        playing: false,
      });
    } else {
      this.expected = Date.now() + this.timeInterval;
      this.timer = setTimeout(this.round, this.timeInterval);
      this.setState(
        {
          count: 0,
          playing: true,
        },
        this.playClick
      );
    }
  };

  round = () => {
    let drift = Date.now() - this.expected;

    this.playClick();
    this.expected += this.timeInterval;

    this.timer = setTimeout(this.round, this.timeInterval - drift);
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    this.setState((state) => ({
      count: (state.count + 1) % state.beatsPerMeasure,
    }));
  };
  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="20" max="280" value={bpm} onChange={this.handleBpmChange} />
        </div>
        <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;

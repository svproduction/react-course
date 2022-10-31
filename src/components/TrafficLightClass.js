import { PureComponent } from "react";

class TrafficLightClass extends PureComponent {
  constructor() {
    super();
    this.state = {
      pos: 0,
    };
    this.changeLight = this.changeLight.bind(this);
  }

  changeLight() {
    if (this.state.pos !== 2) {
      this.setState({ pos: this.state.pos + 1 });
    } else {
      this.setState({ pos: 0 });
    }
  }

  render() {
    const { pos } = this.state;
    return (
      <div className="light">
        <div
          className={`light__color light__color_red ${
            pos === 0 ? "active" : null
          }`}
        ></div>
        <div
          className={`light__color light__color_yellow ${
            pos === 1 ? "active" : null
          }`}
        ></div>
        <div
          className={`light__color light__color_green ${
            pos === 2 ? "active" : null
          }`}
        ></div>
        <button onClick={this.changeLight}>Change</button>
      </div>
    );
  }
}

export default TrafficLightClass;

import React from "react";

class DataDispClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      count: 0,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://swapi.dev/api/people/${this.props.id}/`
    );
    const newData = await response.json();
    this.setState({ data: newData });
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <>
          <div>{data.name}</div>
          <p>{this.props.text}</p>
          <button
            onClick={() => {
              this.setState({ ...this.state, count: this.state.count + 1 });
            }}
          >
            {this.state.count}
          </button>
        </>
      );
    } else {
      return "No data";
    }
  }
}

export default DataDispClass;

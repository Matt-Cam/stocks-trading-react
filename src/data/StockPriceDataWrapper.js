import React from 'react';

export default class StockPriceDataWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return this.props.render(this.state.data);
  }

  // change to useEffect
  componentDidMount() {
    // get data from the server
    this.setState({
      data: dataMock
    });
  }
}

const dataMock = [1, 2, 3, 4];

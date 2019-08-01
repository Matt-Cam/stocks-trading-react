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
/*
const dataMock = [
  {
    name: 'test',
    data: [1, 2, 3]
  },
  {
    name: 'other test',
    data: [2, 3, 4, 5]
  }
];
*/

const dataMock = [
  {
    name: 'aggregated',
    data: [
      {
        x: new Date('2019-03-20T00:05:00.000Z'),
        y: 20
      },
      {
        x: new Date('2019-03-23T00:05:00.000Z'),
        y: 5
      },
      {
        x: new Date('2019-03-29T00:05:00.000Z'),
        y: 5
      }
    ]
  },
  {
    name: 'detailed',
    data: [
      {
        x: new Date('2019-03-24T00:05:00.000Z'),
        y: 24
      },
      {
        x: new Date('2019-03-25T00:05:00.000Z'),
        y: 55
      },
      {
        x: new Date('2019-03-26T00:05:00.000Z'),
        y: 500
      }
    ]
  }
];

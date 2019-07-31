import React from 'react';
import Highcharts from 'highcharts';
// useEffect hook can be used here
export default class HighchartsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.graph = React.createRef();
  }

  createChart() {
    this.chart = Highcharts.chart(this.graph.current, defaultConfig);
  }

  render() {
    return <div ref={this.graph} />;
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    if (this.chart) {
      this.chart.update({
        ...defaultConfig,
        series: [{ data: this.props.data }]
      });
    } else {
      this.createChart();
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }
}

const defaultConfig = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'AAPL'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['10:00', '10:20', '10:40', '11:00']
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
    }
  },
  series: [
    {
      name: 'AAPL'
    }
  ]
};

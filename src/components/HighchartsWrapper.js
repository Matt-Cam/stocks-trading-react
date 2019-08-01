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
        series: this.props.data
        //series: this.props.data
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
    type: 'datetime',

    labels: {
      formatter: function() {
        return Highcharts.dateFormat('%e %b %y', this.value);
      }
    },
    dateTimeLabelFormats: {
      second: '%Y-%m-%d<br/>%H:%M:%S',
      minute: '%Y-%m-%d<br/>%H:%M',
      hour: '%Y-%m-%d<br/>%H:%M',
      day: '%Y<br/>%m-%d',
      week: '%Y<br/>%m-%d',
      month: '%Y-%m',
      year: '%Y'
    }
  },
  tooltip: {
    formatter: function() {
      return (
        'x: ' +
        Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
        ' y: ' +
        this.y.toFixed(2)
      );
    }
  },
  series: [{ name: 'aggregated', data: [] }, { name: 'detailed', data: [] }]
};

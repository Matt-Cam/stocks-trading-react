import React from 'react';

import { connect } from 'react-redux';
import { getAllocations } from '../redux/selectors';
import { fetchAllocationsRequest } from '../redux/actions';

class AllocationDataWrapper extends React.Component {

  render() {
    return this.props.render(this.props.allocations);
  }

  // change to useEffect
  componentDidMount() {
    this.props.fetchAllocations();
  }
}

const mapStateToProps = state => {
  return {
    allocations: getAllocations(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllocations: () => dispatch(fetchAllocationsRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllocationDataWrapper);

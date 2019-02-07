import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { updateCurrentOffset } from '../../../actions/VideosList';

const BASE_OFFSET = 12;

class Pagination extends React.Component {
  onClickPrev() {
    this.props.updateCurrentOffset(BASE_OFFSET * -1);
  }
  
  onClickNext() {
    this.props.updateCurrentOffset(BASE_OFFSET);
  }

  render() {
    return (
      <section className="container">
        <nav className="pagination">
          <button className="prev" onClick={() => this.onClickPrev()}>&lt;</button>
          <button className="next" onClick={() => this.onClickNext()}>&gt;</button>
        </nav>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentOffset: state.videosList.currentOffset,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentOffset: offsetModifier => {
      dispatch(updateCurrentOffset(offsetModifier));
    }
  }
}

Pagination.propTypes = {
  currentOffset: PropTypes.number.isRequired,
  updateCurrentOffset: PropTypes.func.isRequired,
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination)


export default PaginationContainer

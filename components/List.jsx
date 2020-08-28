import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const {
    children, container, data, className,
  } = props;

  const dataList = data.map(children);

  return React.createElement(container, { className }, dataList);
};

List.propTypes = {
  children: PropTypes.func.isRequired,
  container: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};

List.defaultProps = {
  className: '',
};

export default List;

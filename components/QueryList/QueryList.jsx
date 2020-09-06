import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import List from '../List/List';

const QueryList = (props) => {
  const {
    query, children, type, container, className,
  } = props;

  const {
    loading, error, data,
  } = useQuery(query, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return 'Loading';
  }

  if (error || !data) {
    return 'Error';
  }

  return (
    <>
      <List container={container} data={data[type].results} className={className}>
        {children}
      </List>
    </>
  );
};

QueryList.propTypes = {
  query: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  container: PropTypes.string.isRequired,
  className: PropTypes.string,
};

QueryList.defaultProps = {
  className: '',
};

export default QueryList;

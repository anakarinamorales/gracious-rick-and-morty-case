import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import List from '../List/List';

const QueryList = (props) => {
  const {
    query, children, type, container, className,
  } = props;

  const {
    loading, error, data, fetchMore,
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
      {/* <button
        type="button"
        onClick={() => fetchMore({
          variables: {
            offset: data.characters.results.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
              ...prev,
              characters: {
                results: [...prev.characters.results, ...fetchMoreResult.characters.results],
              },
            };
          },
        })}
      >
        Load More
      </button> */}
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

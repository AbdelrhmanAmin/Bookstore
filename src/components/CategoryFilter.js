import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = (props) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <select
        id="category"
        name="category"
        onChange={(e) => {
          props.handleFilterChange(e.target.value);
        }}
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, null)(CategoryFilter);

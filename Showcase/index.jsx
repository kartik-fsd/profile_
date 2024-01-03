import PropTypes from 'prop-types';
import './index.css'; // Import CSS for styling

function ComponentView({ Component ,title}) {
  return (
    <div className="component-showcase">
      <div className="component-demo">
      <h3 className="component-heading">{title} Component</h3>
        <div className="component-container">
          <Component /> {/* Render the provided component */}
        </div>
      </div>
    </div>
  );
}

ComponentView.propTypes = {
  Component: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default ComponentView;

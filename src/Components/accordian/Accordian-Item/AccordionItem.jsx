import PropTypes from 'prop-types';
import { useState } from 'react';
import './accordion.css'; 

function AccordionItem({ title, content, size }) {
  // State to handle the opening/closing of the accordion item
  const [open, setOpen] = useState(false);

  // Function to determine the width of the accordion based on the provided size prop
  const setSize = () => {
    if (size === 'sm') {
      return '400px';
    } else if (size === 'md') {
      return '600px';
    } else if (size === 'lg') {
      return '800px';
    }
    // Provide a default size if size prop doesn't match any defined options
    return '600px'; // Change this value to your preferred default
  };

  // Function to toggle the accordion item's open/close state
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`Accordion-bar ${open ? 'open' : ''}`} onClick={handleClick} style={{ width: setSize() }}>
      <div className="Accordion-header">
        <header>{title}</header>
        <p className="Arrow-end">{open ? <span>&#11165;</span> : <span>&#11167;</span>}</p>
      </div>
      <div className="Accordion-container">
        <p>{content}</p>
      </div>
    </div>
  );
}

// Define PropTypes for the AccordionItem component
AccordionItem.propTypes = {
  // The title of the accordion item (required string)
  title: PropTypes.string.isRequired,
  
  // The content to be displayed within the accordion item (required string)
  content: PropTypes.string.isRequired,
  
  // The size of the accordion item (one of: 'sm', 'md', 'lg'; required string)
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
};

export default AccordionItem;

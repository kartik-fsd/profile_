import PropTypes from 'prop-types';
import { useState } from 'react';
import "./accordion.css"; 

function AccordionItem({ title, content ,size}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
const setSize = () =>{
  if(size === "sm"){
    return "400px";
  }
  else if(size === "md"){
    return "600px";
  }
  else if(size === "lg"){
    return "800px";
  }
}
  return (
    <div className={`Accordion-bar ${open ? 'open' : ''}`} onClick={handleClick} style={{width:setSize()}}>
      <div className="Accordion-header">
        <header>{title}</header>
        <p className="Arrow-end">{open ? <span>&#11167;</span> : <span>&#11166;</span>}</p>
      </div>

      <div className="Accordion-container">
        <p>{content}</p>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size :PropTypes.string.isRequired
};

export default AccordionItem;

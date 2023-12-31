/* eslint-disable react/prop-types */
// Build a fully accessible accordion component with keyboard support according to ARIA specifications.

import AccordionItem from "./Accordian-Item/AccordionItem";

function Accordion() {


  return (
    <div className="Accordion-wrapper">
      <AccordionItem
        title="Accordion 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        size ="sm"
      />
      <AccordionItem
        title="Accordion 2"
        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        size="md"
      />
      <AccordionItem
        title="Accordion 3"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        size = "lg"
      />
    </div>
  );
}

export default Accordion;

// import  { useState } from 'react';
// import './Accordion.css';

// const AccordionItem = ({ title, content, expanded, index, handleItemClick }) => {
//   const handleClick = () => {
//     handleItemClick(index);
//   };

//   return (
//     <div className="accordion-item" role="presentation">
//       <button
//         className={`accordion-header ${expanded ? 'expanded' : ''}`}
//         onClick={handleClick}
//         aria-expanded={expanded}
//         aria-controls={`content-${index}`}
//       >
//         {title}
//       </button>
//       <div
//         id={`content-${index}`}
//         className={`accordion-content ${expanded ? 'expanded' : ''}`}
//         role="region"
//         aria-labelledby={`content-${index}`}
//         hidden={!expanded}
//       >
//         {content}
//       </div>
//     </div>
//   );
// };

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const handleKeyDown = (event, index) => {
//     const currentIndex = index;
//     const lastIndex = items.length - 1;

//     switch (event.key) {
//       case 'ArrowUp':
//         event.preventDefault();
//         handleItemClick(currentIndex > 0 ? currentIndex - 1 : lastIndex);
//         break;
//       case 'ArrowDown':
//         event.preventDefault();
//         handleItemClick(currentIndex < lastIndex ? currentIndex + 1 : 0);
//         break;
//       case 'Home':
//         event.preventDefault();
//         handleItemClick(0);
//         break;
//       case 'End':
//         event.preventDefault();
//         handleItemClick(lastIndex);
//         break;
//       case 'Enter':
//       case 'Space':
//         handleItemClick(currentIndex);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="accordion" role="tablist">
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           index={index}
//           title={item.title}
//           content={item.content}
//           expanded={activeIndex === index}
//           handleItemClick={handleItemClick}
//           onKeyDown={(event) => handleKeyDown(event, index)}
//           tabIndex={0}
//         />
//       ))}
//     </div>
//   );
// };

// export default Accordion;

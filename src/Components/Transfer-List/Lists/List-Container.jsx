import { useState } from "react";
import "./List-container.css";

const Container = () => {
  const dataItems = [
    {
      value: "check box1",
      title: "check box 1",
    },
    {
      value: "check box2",
      title: "check box 2",
    },
    {
      value: "check box3",
      title: "check box 3",
    },
  ];

  const [rightMove, setRightMove] = useState([]);
  const [leftMove, setLeftMove] = useState(dataItems);
  const [items, setItems] = useState([]);
  const [leftItems, setLeftItems] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setItems((prevItems) => [...prevItems, value]);
    } else {
      setItems((prevItems) => prevItems.filter((item) => item !== value));
    }
  };

  const handleLeftChange = (e) => {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setLeftItems((prevItems) => [...prevItems, value]);
    } else {
      setLeftItems((prevItems) => prevItems.filter((item) => item !== value));
    }
  };

  const LeftShift = () => {
    const newRightItems = dataItems.filter((data) => items.includes(data.value));
    setRightMove([...rightMove, ...newRightItems]);
    setLeftMove((prevItems) => prevItems.filter((data) => !items.includes(data.value)));
    setItems([]);
  };

  const RightShift = () => {
    const newLeftItems = dataItems.filter((data) => leftItems.includes(data.value));
    setLeftMove([...leftMove, ...newLeftItems]);
    setRightMove((prevItems) => prevItems.filter((data) => !leftItems.includes(data.value)));
    setLeftItems([]);
  };

  const ShiftAllRight = () => {
    setRightMove([...rightMove, ...leftMove]);
    setLeftMove([]);
  };

  const ShiftAllLeft = () => {
    setLeftMove([...leftMove, ...rightMove]);
    setRightMove([]);
  };

  console.log(leftMove,"l start")
  console.log(rightMove,"r")
  console.log(items,"ch")
  console.log(leftItems,"chL  end")

  return (
    <div className="wrapper">
      <div className="List-container">
        <ul>
          {leftMove.map((data, key) => (
            <li key={key}>
              <div className="list">
                <input
                  type="checkbox"
                  name={data.value}
                  id={data.value}
                  value={data.value}
                  onChange={handleChange}
                  checked={items.includes(data.value)}
                />
                <label htmlFor={data.value}>{data.title}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-wrapper">
        <button type="button"  onClick={ShiftAllRight} disabled = {!leftMove.length}>
          {">>"}
        </button>
        <button type="button"  onClick={LeftShift}  disabled = {!items.length}>
          {">"}
        </button>
        <button type="button"  onClick={RightShift} disabled={!leftItems.length}>
          {"<"}
        </button>
        <button type="button"  onClick={ShiftAllLeft}  disabled={!rightMove.length}>
          {"<<"}
        </button>
      </div>
      <div className="List-container">
       
          <ul>
            {rightMove.map((data, key) => (
              <li key={key}>
                <div className="list">
                  <input
                    type="checkbox"
                    name={data.value}
                    id={data.value}
                    value={data.value}
                    onChange={handleLeftChange}
                    checked={leftItems.includes(data.value)}
                  />
                  <label htmlFor={data.value}>{data.title}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Container;

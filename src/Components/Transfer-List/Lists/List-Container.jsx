import "./List-container.css";

const Container = () => {
    const dataItems = [
       {
        value:"check box1",
        title:"check box 1"
       },
       {
        value:"check box2",
        title:"check box 2"
       },
       {
        value:"check box3",
        title:"check box 3"
       }
    ];
    console.log(dataItems)
    
  return (
    <div className="wrapper">
 <div className="List-container">
        <ul>
          {dataItems.map((data, key) => (
            <li key={key}>
              <div className="list">
                <input
                  type="checkbox"
                  name={data.value}
                  id={data.value}
                  value={data.value}
                />
                <label htmlFor={data.value}>{data.title}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <>
        <button type="button" style={{ margin: "0px 10px" }}>
          {"<<"}
        </button>
        <button type="button" style={{ margin: "0px 10px" }}>
          {"<"}
        </button>
        <button type="button" style={{ margin: "0px 10px" }}>
          {">"}
        </button>
        <button type="button" style={{ margin: "0px 10px" }}>
          {">>"}
        </button>
      </>
      <div className="List-container">

      </div>
    </div>
  );
};

export default Container;

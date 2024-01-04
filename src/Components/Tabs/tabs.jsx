//Build a tabs component that displays list of tab elements and one associated panel of content at a time.
import { useState } from "react";
import "./tabs.css";
export default function Tabs() {
  const [tab, setTab] = useState(0);
  const tabData = [
    {
      label: "tab one",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit",
    },
    {
      label: "tab two",
      content:
        " voluptates quidem, aperiam quae ratione iste modi in explicabo eos",
    },
    {
      label: "tab three",
      content:
        "  commodi possimus fugiat a, autem delectus omnis unde optio nisi qui?",
    },
  ];

  const handleTabs = (index) => {
    setTab(index);
  };
  return (
    <div className="tab-wrapper">
      <div className="divider">
        {tabData.map((data, index) => (
             <div
             key={index}
             className={`tabs ${index === tab ? "active" : ""}`}
             onClick={() => handleTabs(index)}
           >
             <h3>{data?.label}</h3>
             {console.log(data.label, "la")}
           </div>
           ))}
      </div>
      <div className="content-wrapper">
        <div className="tab-content">
          <p>{tabData[tab].content}</p>
        </div>
      </div>
    </div>
  );
}

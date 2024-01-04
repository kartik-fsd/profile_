//Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely.
import { useState, useEffect } from "react";

export default function TrafficLights() {
  const traffic = [
    {
      light: "red",
      time: 3000,
      next: "yellow",
    },
    {
      light: "yellow",
      time: 1000,
      next: "green",
    },
    {
      light: "green",
      time: 3000,
      next: "red",
    },
  ];
  const [active, setActive] = useState("red");
  const lightColor = traffic.find((lig) => lig.light === active);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setActive(lightColor.next);
    }, lightColor.time);

    return () => clearTimeout(timerId);
  }, [lightColor, active]);

  return (
    <div
      className="lights-wrapper"
      style={{ width: "100%",borderRadius:10, display: "flex",backgroundColor: "#011627" }}
    >
      {traffic.map((signal, key) => (
        <div
          key={key}
          className="Light"
          style={{
            padding: 5,
            margin: 5,
            width: 100,
            height: 100,
            border: "1px solid #010101e3",
            borderRadius: "50%",
            backgroundColor: active === signal.light ? signal.light : "#e0e0e0",
          }}
        ></div>
      ))}
    </div>
  );
}

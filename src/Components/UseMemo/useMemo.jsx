import { useEffect, useMemo, useState } from "react";

function slowFunc(number) {
  console.log("slow function is calling ");
  for (let i = 0; i < 1000000000; i++) {
    /* empty */
  }
  return number * 2;
}
function UseMemo() {
  const [dark, setDark] = useState(false);
  const [double, setDouble] = useState({});

  const getDouble = useMemo(() => {
    return slowFunc(double);
  }, [double]);

  const handleClick = () => {
    setDark((prev) => !prev);
  };

  const themeChange = useMemo(() => {
    return {
      backgroundColor: dark ? "#000" : "",
      color: dark ? "#f1f1f1" : "",
    };
  }, [dark]);


  useEffect(() => {
    console.log("Theme changed");
  }, [themeChange]);

  return (
    <div>
      <label htmlFor="number">Number To double</label>
      <input
        type="number"
        name="number"
        id="number"
        value={double}
        onChange={(e) => setDouble(parseInt(e.target.value))}
        placeholder="Enter a number to double"
      />

      <button type="button" onClick={handleClick}>
        Change theme
      </button>

      <div style={themeChange}>{getDouble}</div>
    </div>
  );
}

export default UseMemo;


export const UseMemoCode = `
import { useEffect, useMemo, useState } from "react";
function slowFunc(number) {
  console.log("slow function is calling ");
  for (let i = 0; i < 1000000000; i++) {
    /* empty */
  }
  return number * 2;
}
function UseMemo() {
  const [dark, setDark] = useState(false);
  const [double, setDouble] = useState({});

  const getDouble = useMemo(() => {
    return slowFunc(double);
  }, [double]);

  const handleClick = () => {
    setDark((prev) => !prev);
  };

  const themeChange = useMemo(() => {
    return {
      backgroundColor: dark ? "#000" : "",
      color: dark ? "#f1f1f1" : "",
    };
  }, [dark]);


  useEffect(() => {
    console.log("Theme changed");
  }, [themeChange]);

  return (
    <div>
      <label htmlFor="number">Number To double</label>
      <input
        type="number"
        name="number"
        id="number"
        value={double}
        onChange={(e) => setDouble(parseInt(e.target.value))}
        placeholder="Enter a number to double"
      />

      <button type="button" onClick={handleClick}>
        Change theme
      </button>

      <div style={themeChange}>{getDouble}</div>
    </div>
  );
}

export default UseMemo;
`
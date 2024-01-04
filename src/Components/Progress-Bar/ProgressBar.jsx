import { useEffect, useState } from "react";
import "./progressbar.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 10);
      }
    }, 2000);

    return () => clearTimeout(timerId);
  }, [progress]);

  return (
    <div className="progress">
      <div className="progress-standard">
        <h3 className="progress-standard-text">Progress Tag</h3>
        <progress
          style={{ width: "100%", padding: "10px", height: "50px" }}
          value={progress}
          max="100"
        >
          bar
        </progress>
      </div>
      <h3 className="progress-standard-text">Custom Progress Bar</h3>
      <div className="progress-bar">
        <span className="progress-bar-text">{`Task ${progress}% ...`}</span>
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

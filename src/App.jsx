import { motion } from "framer-motion";
import "./App.css"
import Accordion from "./Components/accordian/accordion";
import List from "./Components/Transfer-List";
import ComponentView from "../Showcase";
import Stopwatch from "./Components/Stop-watch_Widget/stopwatch";
import Counter from "./Components/Counter-redo-undo/counter";
import Tabs from "./Components/Tabs/tabs";
import TrafficLights from "./Components/Traffic-lights/TraficLight";
import ProgressBar from "./Components/Progress-Bar/ProgressBar";
import Clock from "./Components/Analouge-Clock/Analog";
import StarRating from "./Components/Rating/Stars";
import MortageCalculator from "./Components/Mortage/Calculator";
import Mole from "./Components/Games/Mole";
import UseMemo from "./Components/UseMemo/useMemo";

const App = () => {
  return (
    <>
      <div className="video-background">
        <div className="content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Your text or content here */}
            <h1>Hello, World!</h1>
          </motion.div>
        </div>
      </div>
      <ComponentView Component={Accordion} title="Accordion"/>
      <ComponentView Component={List} title="List Transfer"/>
      <ComponentView Component={Stopwatch} title="Stopwatch" />
      <ComponentView Component={Counter} title="Counter" /> 
      <ComponentView Component={Tabs} title="Tabs" />
      <ComponentView Component={TrafficLights} title="Traffic lights" />
      <ComponentView Component={ProgressBar} title="Progress Bar" />
      <ComponentView Component={Clock} title="Analog Clock"/>
      <ComponentView Component={StarRating} title="Star Rating"/>
      <ComponentView Component={MortageCalculator} title="Mortage Calculator" />
      <ComponentView Component={Mole} title="Mole Game" />
      <ComponentView Component={UseMemo} title="Use Memo" />
    </>
  );
};

export default App;

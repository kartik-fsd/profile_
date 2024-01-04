import { motion } from "framer-motion";
import "./App.css"
import Accordion from "./Components/accordian/accordion";
import List from "./Components/Transfer-List";
import ComponentView from "../Showcase";
import Stopwatch from "./Components/Stop-watch_Widget/stopwatch";
import Counter from "./Components/Counter-redo-undo/counter";
import Tabs from "./Components/Tabs/tabs";

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
    </>
  );
};

export default App;

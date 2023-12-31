import { motion } from "framer-motion";
import "./App.css"
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
    </>
  );
};

export default App;
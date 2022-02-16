import React from "react";
import home from "./components/Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Route path="/" element={home}/>
    </Router>
  );
};

export default App;

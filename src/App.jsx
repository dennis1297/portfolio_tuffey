import Intro from "./components/intro/intro";
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {useContext } from "react";

const App = () => {
 const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div style={{
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode && "white",}}>
    <Toggle/>
    <Intro/>
    <About/>
    <Contact/>
    </div>
  );
};

export default App;
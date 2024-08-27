import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./component/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer">
          <div className="container">
            <p className="text-center">Made with ❤️ by Sadid, &copy; 2024</p>
          </div>
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;

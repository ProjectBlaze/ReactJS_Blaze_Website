import "./components/stylesheet/App.css";
import BlazeScreenshot from "./components/BlazeScreenshot";
import Doubts from "./components/Doubts";
import Home from "./components/Home";
import Footer from "./components/Footer";
import WhyBlaze from "./components/WhyBlaze";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Disclaimer from "./components/Disclaimer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={[
            <Home key="home" />,
            <WhyBlaze key="whyblaze" />,
            <BlazeScreenshot key="blazescreenshot" />,
            <Doubts key="doubts" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/screenshot"
          element={[
            <Navbar key="navbar" />,
            <BlazeScreenshot key="blazescreenshot" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/download"
          element={[<Download key="download" />, <Footer key="footer" />]}
        />
        <Route
          path="/features"
          element={[
            <Navbar key="navbar" />,
            <WhyBlaze key="whyblaze" />,
            <Doubts key="doubts" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/disclaimer"
          element={[
            <Navbar key="navbar" />,
            <Disclaimer key="disclaimer" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/privacypolicy"
          element={[
            <Navbar key="navbar" />,
            <PrivacyPolicy key="privacy" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/tac"
          element={[
            <Navbar key="navbar" />,
            <TermsAndConditions key="tac" />,
            <Footer key="footer" />,
          ]}
        />

      </Routes>
    </>
  );
}

export default App;

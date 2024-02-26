import "./styles.css";
import Pagination from "./Projects/pagination/Pagination";
import PracticeWorkbase from "./Practice workbase/PracticeWorkbase";
import NestedFolderFileSystem from "./Projects/NestedFolderFileSystem/NestedFolderFileSystem";
import Stepper from "./Projects/Stepper/Stepper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Projects/Navbar";
import Home from "./Projects/Home";
import { ThemeProvider } from "./Projects/theme.context";
import Notification from "./Projects/notification/Notification";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="stepper" element={<Stepper />} />
            <Route path="/practice" element={<PracticeWorkbase />} />
            <Route path="/files" element={<NestedFolderFileSystem />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

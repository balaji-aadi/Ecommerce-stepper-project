import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Suspense, lazy } from "react";
import { useTheme } from "./Projects/theme.context";
import Navbar from "./Projects/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const Stepper = lazy(() => import("./Projects/Stepper/Stepper"));
const Pagination = lazy(() => import("./Projects/pagination/Pagination"));
const NestedFolderFileSystem = lazy(() =>
  import("./Projects/NestedFolderFileSystem/NestedFolderFileSystem")
);
const PracticeWorkbase = lazy(() =>
  import("./Practice workbase/PracticeWorkbase")
);
const Notification = lazy(() => import("./Projects/notification/Notification"));
const Home = lazy(() => import("./Projects/Home"));
const Login = lazy(() => import("./frontend-datamodeling/pages/Login"));

export default function App() {
  const { isLoading } = useTheme();

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/stepper" element={<Stepper />} />
              <Route path="/practice" element={<PracticeWorkbase />} />
              <Route path="/files" element={<NestedFolderFileSystem />} />
              <Route path="/pagination" element={<Pagination />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        )}
      </Router>
    </div>
  );
}

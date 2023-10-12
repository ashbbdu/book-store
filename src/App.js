import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import BookDetails from "./pages/BookDetails";
import UserBooks from "./pages/UserBooks";
import SideMenu from "./components/SideMenu";
import AuthLayout from "./layout/AuthLayout";
import PrivateRoute from "./privateRoutes";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import {useSelector} from "react-redux"

function App() {
  const {loading , token} = useSelector(state => state.auth)
  console.log(token , "token")
  return (
    <>
    {
      loading &&   <Loader />
    }
    <div className="main">
   
      <Toaster position="top-center" reverseOrder={false} />
      {/* <SideMenu /> */}

      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="book-details"
          element={
            <PrivateRoute>
              <BookDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="user-books"
          element={
            <PrivateRoute>
              <UserBooks />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<AuthLayout />} />
        <Route path="/signup" element={<AuthLayout />} />
        <Route path="/verify-account" element={<AuthLayout />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

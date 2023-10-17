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
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import AddEditBook from "./pages/AddBook";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Cart from "./pages/Cart";


function App() {
  const { loading, token } = useSelector((state) => state.auth);
  console.log(token, "token");
  return (
    <>
      {loading && <Loader />}
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
            path="/book-details/:id"
            element={
              <PrivateRoute>
                <BookDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/user-books"
            element={
              <PrivateRoute>
                <UserBooks />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-book"
            element={
              <PrivateRoute>
                <AddBook />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-book/:id"
            element={
              <PrivateRoute>
                <EditBook />
              </PrivateRoute>
            }
          />

<Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
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

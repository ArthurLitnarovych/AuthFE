import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddEditTour from "./pages/AddEditTour";
import { gapi } from "gapi-script";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/slices/authSlice";
import SingleTour from "./pages/SingleTour";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: "728527815522-gl8ksiegj2k6mb8bpv30i9mi4nd66q8j.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addTour" element={<PrivateRoute><AddEditTour /></PrivateRoute>} />
          <Route path="/editTour/:id" element={<PrivateRoute><AddEditTour /></PrivateRoute>}/>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/tour/:id" element={<SingleTour />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

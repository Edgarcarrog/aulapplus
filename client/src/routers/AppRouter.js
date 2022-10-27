import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserVerified from "../pages/UserVerified";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <>
      {/* <Provider> */}
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/grupos" element={<h1>Grupos</h1>} />
          </Route>
          <Route exact path="/verified" element={<UserVerified />} />
          <Route exact path="/verified/:token" element={<UserVerified />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/*  <Footer /> */}
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
};

export default AppRouter;

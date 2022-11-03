import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "../pages/Group";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Students from "../pages/Students";
import UserVerified from "../pages/UserVerified";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      {/* <Provider> */}
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route element={<PublicRoute />}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/students" element={<Students />} />
            <Route path="/group" element={<Group />}>
              <Route path=":groupId" element={<Group />} />
            </Route>
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

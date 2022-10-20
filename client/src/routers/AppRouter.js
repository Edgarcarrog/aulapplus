import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRouter = () => {
  return (
    <>
      {/* <Provider> */}
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/*  <Footer /> */}
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
};

export default AppRouter;

import { Routes, Route } from "react-router-dom";
import Result from "../components/common/result";

import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Result status="404" />} />
    </Routes>
  );
};

export default AppRoutes;

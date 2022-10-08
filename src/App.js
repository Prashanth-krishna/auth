import { Route, Routes } from "react-router-dom";
import "./App.css";

import Welcome from "./pages/welcome";
import Auth from "./pages/auth";
import Changepwd from "./pages/changepwd";
import NotFound from "./pages/not-found";
import SignUp from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/changepwd" element={<Changepwd />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

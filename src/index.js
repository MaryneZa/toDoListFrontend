import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import LogIn from "./pages/login";
import UserPage from "./pages/userPage";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route path="userPage" element={<UserPage />} />


      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RecoilRoot><App /></RecoilRoot>);
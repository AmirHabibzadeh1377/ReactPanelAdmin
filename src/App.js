import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from './pages/single/Single';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import { UserColumn, ProductColumn } from './pages/new/UserAndProductColumn';
import './style/dark.scss'
import { dividerClasses } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={ darkMode ? "app dark" :"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="افزودن کاربر جدید" columns={UserColumn} isUser={true} />} />
            </Route>

          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New title="افزودن محصول جدید" columns={ProductColumn} isUser={false} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

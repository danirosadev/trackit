import GlobalStyle from "./assets/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { UserContext } from "../src/context/context"
import SignInPage from "./pages/SingInPage/SignInPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage"

function App() {
  const [userData, setUserData] = useState()

  return (
    <UserContext.Provider value={{ userData, setUserData }} >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinRoomComponent from "./JoinRoomComponent";
import ChatComponent from "./ChatComponent";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<JoinRoomComponent />}></Route>
      <Route path="/chat" element={<ChatComponent />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;

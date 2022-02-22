import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Campaigns from "../Components/Campaigns/Campaigns";
import Header from "./Header";
import Past from "../Components/Campaigns/Past";
import Present from "../Components/Campaigns/Present";
import NewModal from "../Components/Modal/NewModal";
import Campaign from "../Components/Campaign/Campaign";
import Connection from "../Components/Nav/Connection";
import Mypage from "../Components/Nav/Mypage";
import BottomTab from "./BottomTab";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="modal/:dataId" element={<NewModal />} />
          <Route path="connection" element={<Connection />} />
        </Route>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/campaigns/*" element={<Campaigns />}>
          <Route path="present" element={<Present />} />
          <Route path="past" element={<Past />} />
        </Route>
        <Route path="/campaign/:camId" element={<Campaign />} />
      </Routes>
      <BottomTab />
    </BrowserRouter>
  );
}

export default Router;

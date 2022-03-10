import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Past from "../Components/Campaigns/Past";
import Present from "../Components/Campaigns/Present";
import Campaign from "../Components/Campaigns/Campaign";
import Mypage from "../Components/Nav/Mypage";
import BottomTab from "../Components/Nav/BottomTab";
import Header from "../Components/Nav/Header";
import CreateCampaign from "../Components/Campaigns/CreateCampaign";
import Splash from "../Components/Splash";

function Router() {
  return (
    <BrowserRouter>
      <Splash />
      <Header />
      <Routes>
        <Route exact path="/*" element={<Home />}>
          <Route path="present" element={<Present />} />
          <Route path="past" element={<Past />} />
        </Route>
        <Route path="/createCampaign" element={<CreateCampaign />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/campaign/:camId" element={<Campaign />} />
      </Routes>
      {/* <BottomTab /> */}
    </BrowserRouter>
  );
}

export default Router;

import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, theme } from "../../styles/theme";
import Past from "./Past";
import Present from "./Present";

const Container = styled.div`
  width: 935px;
  margin: 100px auto;
  padding: 30px;
  ${media.tablet} {
    width: auto;
  }
`;

const CampaignsTitle = styled.h3`
  ${theme.font.large}
  text-align: center;
  margin-bottom: 80px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  /* font-weight: ${(props) => (props.isActive ? "bold" : "normal")}; */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive
      ? props.theme.color.accentColor
      : props.theme.color.textColor};
  a {
    display: block;
  }
`;

function Campaigns() {
  const path = useLocation();
  // const detail = search === "present";
  return (
    <>
      <Container>
        <CampaignsTitle>All Campaigns</CampaignsTitle>
        <Tabs>
          <Tab isActive={path.pathname == "/campaigns/present"}>
            <Link to="present">진행 중 캠페인</Link>
          </Tab>
          <Tab isActive={path.pathname == "/campaigns/past"}>
            <Link to="past">완료된 캠페인</Link>
          </Tab>
        </Tabs>
        <Routes>
          <Route path="present" element={<Present />} />
          <Route path="past" element={<Past />} />
        </Routes>
      </Container>
    </>
  );
}

export default Campaigns;

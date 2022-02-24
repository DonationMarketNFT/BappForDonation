import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../assets/banners/0.jpg";
import img2 from "../../assets/banners/1.jpg";
import img3 from "../../assets/banners/2.jpg";
import { media } from "../../styles/theme";
import NewSlider from "./NewSlider";
import Campaigns from "../Campaigns/Campaigns";
import { data } from "../../api/allpresentdata";
import { makeNewImagePath } from "../../utils";
import { testCampaignList } from "../../api/UseCaver";
import { useNavigate } from "react-router";

const Span = styled.span`
  font-size: 40px;
  color: white;
  position: absolute;
  left: 150px;
  bottom: 130px;
  ${media[768]} {
    left: 80px;
    bottom: 100px;
  }
`;

const Desc = styled.span`
  font-size: 18px;
  color: gray;
  position: absolute;
  left: 150px;
  bottom: 100px;
  ${media[768]} {
    left: 80px;
    bottom: 60px;
  }
`;

const Container = styled.div`
  background: black;
`;

function Banner() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [bannerData, setBannerData] = useState([]);
  const getBannerData = async () => {
    const results = await testCampaignList();
    const reverse = [...results].reverse().slice(0, 3);
    setBannerData(reverse);
    console.log(bannerData);
  };

  const onBoxClicked = (index) => {
    navigate(`/campaign/${index}`);
  };

  useEffect(() => {
    getBannerData();
  }, []);

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} className="mb-3">
        {bannerData.map((data, i) => (
          <Carousel.Item key={i} style={{ height: "60vh" }}>
            <img
              onClick={() => onBoxClicked(data[7])}
              style={{
                height: "100%",
                objectFit: "none",
                backgroundRepeat: "repeat-x",
              }}
              className="d-block w-100"
              src={makeNewImagePath(data[0])}
              alt="banner image"
            />
            <Span>{data[1]}</Span>
            <Desc>{data[2]}</Desc>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

function Home() {
  return (
    <>
      <Banner />
      <NewSlider />
      <Campaigns />
    </>
  );
}

export default Home;

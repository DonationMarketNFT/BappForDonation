import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../assets/banners/0.jpg";
import img2 from "../../assets/banners/1.jpg";
import img3 from "../../assets/banners/2.jpg";
import { theme } from "../../styles/theme";
import NewSlider from "./NewSlider";
import PopularSlider from "./PopularSlider";
import * as KlipAPI from "../../api/UseKlip";
import { useRecoilState } from "recoil";
import { myAddressState, qrValueState, showModalState } from "../../atom";

function Banner() {
  const [index, setIndex] = useState(0);
  const imgs = [img1, img2, img3];
  const ismobile = window.screen.width >= 480 ? false : true;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-3">
      {imgs.map((o, i) => (
        <Carousel.Item key={i} style={{ height: "60vh" }}>
          <img
            style={{
              height: "100%",
              objectFit: "none",
            }}
            className="d-block w-100"
            src={o}
            alt="banner image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const ViewAllButton = styled.button`
  all: unset;
  display: block;
  margin: 50px auto 100px auto;
  padding: 15px 30px;
  border-radius: 20px;
  ${theme.BoxShadow1}

  &:hover {
    ${theme.BoxShadow2}
    transform: translateY(-3px);
    transition: all 0.3s ease;
  }
`;

function Home() {
  return (
    <>
      <Banner />

      <NewSlider />
      <PopularSlider />
      <Link to="/campaigns">
        <ViewAllButton>View All Campaigns</ViewAllButton>
      </Link>
    </>
  );
}

export default Home;

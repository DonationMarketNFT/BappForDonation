import { useState } from "react";
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
  const imgs = [img1, img2, img3];
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const array = [];
  for (let i = 0; i < 3; i++) {
    array.push(makeNewImagePath(data[i].id));
  }

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} className="mb-3">
        {array.map((o, i) => (
          <Carousel.Item key={i} style={{ height: "50vh" }}>
            <img
              style={{
                height: "100%",
                objectFit: "none",
                backgroundRepeat: "repeat-x",
              }}
              className="d-block w-100"
              src={o}
              alt="banner image"
            />
            <Span>{data[i].name}</Span>
            <Desc>{data[i].description}</Desc>
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

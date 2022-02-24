import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media, theme } from "../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../api/populardata";
import { makeNewImagePath, makePopularImagePath } from "../../utils";
import { useNavigate } from "react-router";
import { isMobile } from "react-device-detect";
import { testCampaignList } from "../../api/UseCaver";

const Wrapper = styled.div`
  width: 935px;
  margin: 0 auto;
  padding: 30px;
  ${media.tablet} {
    width: auto;
  }
  ${media.mobile} {
    padding: 30px 10px;
  }
`;

const Slider = styled.div`
  position: relative;
  height: 220px;
  z-index: 1;
  margin-top: 30px;
`;

const SliderTitle = styled.h3`
  ${theme.font.medium}
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
  ${media[768]} {
    margin-bottom: 20px;
  }
`;

const Row = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  padding: 0 60px;
  ${media.tablet} {
    padding: 0 50px;
  }
  ${media.mobile} {
    overflow-x: scroll;
    // 하드코딩 해결
    grid-template-columns: repeat(6, 150px);
    padding: 0 10px;
  }
`;

const Box = styled(motion.div)`
  background-image: url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
  height: 150px;
  ${media[768]} {
    height: 120px;
  }
`;

const Prev = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  height: 95%;
  opacity: 0.3;
  cursor: pointer;
  z-index: 1;
`;

const Next = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  height: 95%;
  opacity: 0.3;
  cursor: pointer;
  z-index: 1;
`;

const rowVariants = {
  hidden: (back) => ({
    x: back ? -window.outerWidth - 10 : window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (back) => ({
    x: back ? window.outerWidth : -window.outerWidth - 10,
  }),
};

const offset = 3;

function PopularSlider() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const ismobile = window.screen.width >= 480 ? false : true;

  const [popularData, setPopularData] = useState([]);
  const getPopularData = async () => {
    const results = await testCampaignList();
    const sort = results.sort(
      (b, a) => b["current_amount"] - a["current_amount"]
    );
    setPopularData(sort);
  };

  useEffect(() => {
    getPopularData();
  }, []);

  const decreaseIndex = () => {
    if (leaving) return;
    setBack(true);
    toggleLeaving();
    const totalData = 6; //임시 (데이터length 이용)
    const maxIndex = Math.floor(totalData / offset) - 1;
    // 현재 인덱스가 첫번째 인덱스일 경우엔 마지막 인덱스로 넘김
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const increaseIndex = () => {
    if (leaving) return;
    setBack(false);
    toggleLeaving();
    const totalData = 6; //임시
    const maxIndex = Math.floor(totalData / offset) - 1;
    // 현재 인덱스가 마지막 인덱스일 경우엔 첫번째 인덱스로 넘김
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (dataId) => {
    navigate(`/campaign/${dataId}`);
  };

  return (
    <Wrapper>
      {ismobile ? (
        <Slider>
          <SliderTitle>Popular Campaigns</SliderTitle>
          <Row>
            {popularData.slice(0, 6).map((data, i) => (
              <Box
                key={i}
                // length={data.length}
                bgphoto={makeNewImagePath(popularData[7])}
                onClick={() => onBoxClicked(popularData[7])}
              ></Box>
            ))}
          </Row>
        </Slider>
      ) : (
        <Slider>
          <SliderTitle>Popular Campaigns</SliderTitle>
          <Prev whileHover={{ opacity: 1 }} onClick={decreaseIndex}>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </Prev>
          <AnimatePresence
            custom={back}
            initial={false}
            onExitComplete={toggleLeaving}
          >
            <Row
              custom={back}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 1 }}
              key={index}
            >
              {/* slice 조건문 수정필요? */}
              {popularData
                .slice(0, 6)
                .slice(offset * index, offset * index + offset)
                .map((popularData, i) => (
                  <Box
                    key={i}
                    bgphoto={makeNewImagePath(popularData[7])}
                    onClick={() => onBoxClicked(popularData[7])}
                  ></Box>
                ))}
            </Row>
          </AnimatePresence>
          <Next whileHover={{ opacity: 1 }} onClick={increaseIndex}>
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </Next>
        </Slider>
      )}
    </Wrapper>
  );
}

export default PopularSlider;

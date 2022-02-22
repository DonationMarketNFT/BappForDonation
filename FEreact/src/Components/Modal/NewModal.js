import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../../api/newdata";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 998;
`;

const ModalContainer = styled(motion.div)`
  position: absolute;
  width: 30vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: lightgray;
  z-index: 999;
  ${media.tablet} {
    width: 50vw;
  }
`;

const ModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgphoto});
  height: 300px;
`;

const ModalTitle = styled.h3`
  padding: 20px;
  font-size: 36px;
`;

const ModalDesc = styled.p`
  padding: 10px 20px;
`;

const ModalButton = styled.button`
  all: unset;
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background: gray;
  border-radius: 5px;
`;

function NewModal() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  const onOverlayClick = () => {
    navigate("/");
  };

  return (
    <AnimatePresence>
      {location.pathname !== "/" ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <ModalContainer style={{ top: scrollY.get() + 50 }}>
            <ModalCover
              bgphoto={makeNewImagePath(data[params.dataId - 1].id)}
            />
            <ModalTitle>{data[params.dataId - 1].name}</ModalTitle>
            <ModalDesc>{data[params.dataId - 1].description}</ModalDesc>
            <Link to={`campaign/${params.dataId}`}>
              <ModalButton>자세히 보기</ModalButton>
            </Link>
          </ModalContainer>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default NewModal;

import styled from "styled-components";
import { media } from "../../styles/theme";
import img1 from "../../assets/banners/0.jpg";
import { motion } from "framer-motion";
import { data } from "../../api/mynft";
import { makeNewImagePath } from "../../utils";
import { useEffect, useState } from "react";
import { Button, Modal, ModalDialog } from "react-bootstrap";
import { myAddressState } from "../../atom";
import { useRecoilState } from "recoil";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 200px 0 100px 0;
  width: 935px;
  margin: 0 auto;
  ${media.tablet} {
    width: auto;
    padding: 170px 0 130px 0;
  }
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 100px 0 50px 0;
  }
`;

const ProfileImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  margin: 10px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${media.tablet} {
    width: 220px;
    height: 220px;
  }
  ${media.mobile} {
    width: 220px;
    height: 220px;
  }
`;

const ProfileInfoBox = styled.div`
  margin: 10px;
  margin-bottom: 20px;
  ${media.mobile} {
    width: 80%;
  }
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  span {
    display: block;
  }
  span:first-child {
    color: gray;
    font-size: 22px;
    ${media.tablet} {
      font-size: 16px;
    }
  }
  span:last-child {
    font-size: 24px;
    background: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
    ${media.tablet} {
      font-size: 18px;
    }
    ${media[768]} {
      font-size: 15px;
    }
  }
`;

const NFTContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 15px;
  width: 935px;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 200px;
  h3 {
    position: absolute;
    left: 30px;
  }
  ${media.tablet} {
    width: auto;
  }
  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
`;

const NFTBox = styled(motion.div)`
  background: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  border-radius: 10px;
  ${media.tablet} {
    height: 150px;
  }
  ${media[768]} {
    height: 130px;
  }
`;

const boxVariants = { hover: { scale: 1.05 } };
const DEFAULT_IMAGE = img1;

function Mypage() {
  const [profile, setProfile] = useState(DEFAULT_IMAGE);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);

  const handleClose = (e) => {
    setShow(false);
    // console.log(e);
  };
  const handleShow = (e) => {
    setShow(true);
    setValue(e.target.attributes.bgphoto.value);
  };

  const handleOK = () => {
    setProfile(value);
    handleClose();
  };

  return (
    <>
      <ProfileContainer>
        <ProfileImage bgphoto={profile} />
        <ProfileInfoBox>
          <ProfileInfo>
            <span>Name</span>
            <span>유저이름</span>
          </ProfileInfo>
          <ProfileInfo>
            <span>Wallet Address</span>
            <span>{myAddress}</span>
          </ProfileInfo>
          <ProfileInfo>
            <span>Wallet Balance</span>
            <span>523 Klay</span>
          </ProfileInfo>
        </ProfileInfoBox>
      </ProfileContainer>
      <NFTContainer>
        <h3>My NFTs</h3>
        {data.map((o, i) => (
          <>
            <NFTBox
              key={i}
              onClick={(e) => handleShow(e)}
              variants={boxVariants}
              whileHover="hover"
              bgphoto={makeNewImagePath(o.id)}
            />
          </>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>프로필 변경</Modal.Title>
          </Modal.Header>
          <Modal.Body>프로필 이미지로 설정하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={() => onNFTClicked(data)}> */}
            <Button variant="primary" onClick={handleOK}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </NFTContainer>
    </>
  );
}

export default Mypage;

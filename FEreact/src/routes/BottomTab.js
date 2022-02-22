import { MobileView } from "react-device-detect";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import * as KlipAPI from "../api/UseKlip";
import {
  modalPropsState,
  myAddressState,
  qrValueState,
  showQRState,
} from "../atom";
import { useRecoilState } from "recoil";
import ConnectWalletModal from "./ConnectWalletModal";

const BottomTabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const BottomTabBox = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
  }
  span {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 10px;
    color: gray;
  }
`;

function BottomTab() {
  const [isLogined, setIsLogined] = useState(false);
  const [tap, setTap] = useState("home");
  const [showQR, setShowQR] = useRecoilState(showQRState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);

  const handleQRClose = () => setShowQR(false);
  const handleQRShow = () => setShowQR(true);

  const getUserData = () => {
    setModalProps({
      title: "Connect Wallet",
      onConfirm: () => {
        KlipAPI.getAddress(setQrvalue, async (address) => {
          setMyAddress(address);
          setIsLogined(true);
        });
      },
    });
    handleQRClose();
  };
  return (
    <>
      <MobileView>
        <BottomTabContainer>
          <BottomTabBox onClick={() => setTap("home")}>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            <span>홈</span>
          </BottomTabBox>
          <BottomTabBox onClick={() => setTap("search")}>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            <span>검색</span>
          </BottomTabBox>
          <BottomTabBox onClick={() => setTap("user")}>
            {isLogined ? (
              <>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span>My</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  onClick={() => {
                    getUserData();
                    handleQRShow();
                  }}
                  icon={faWallet}
                ></FontAwesomeIcon>
                <span>지갑 연동하기</span>
                {showQR ? <ConnectWalletModal /> : null}
              </>
            )}
          </BottomTabBox>
        </BottomTabContainer>
      </MobileView>
    </>
  );
}

export default BottomTab;

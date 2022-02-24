import { MobileView } from "react-device-detect";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import * as KlipAPI from "../../api/UseKlip";
import {
  modalPropsState,
  myAddressState,
  myBalanceState,
  qrValueState,
  showModalState,
} from "../../atom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { getBalance } from "../../api/UseCaver";

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
  a {
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
  }
`;

function BottomTab() {
  const [isLogined, setIsLogined] = useState(false);
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [myBalance, setMyBalance] = useRecoilState(myBalanceState);

  const getUserData = () => {
    setModalProps({
      title: "Connect Wallet",
      onConfirm: () => {
        KlipAPI.getAddress(setQrvalue, async (address) => {
          setMyAddress(address);
          const _balance = await getBalance(address);
          setMyBalance(_balance);
          setIsLogined(true);
        });
      },
    });
    setShowModal(true);
  };

  useEffect(() => {
    getUserData();
    setShowModal(false);
  }, []);

  return (
    <>
      <MobileView>
        <BottomTabContainer>
          <BottomTabBox>
            <Link to="/">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              <span>홈</span>
            </Link>
          </BottomTabBox>
          <BottomTabBox>
            <Link to="/createCampaign">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              <span>캠페인 생성</span>
            </Link>
          </BottomTabBox>
          {!myAddress ? (
            <>
              <BottomTabBox>
                <Link to="/mypage">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <span>My</span>
                </Link>
              </BottomTabBox>
            </>
          ) : (
            <>
              <BottomTabBox>
                <a>
                  <FontAwesomeIcon
                    onClick={getUserData}
                    icon={faWallet}
                  ></FontAwesomeIcon>
                  <span>지갑 연동하기</span>
                </a>
              </BottomTabBox>
            </>
          )}
        </BottomTabContainer>
      </MobileView>
    </>
  );
}

export default BottomTab;

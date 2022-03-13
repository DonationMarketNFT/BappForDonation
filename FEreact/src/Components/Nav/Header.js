import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, theme } from "../../styles/theme";
import { BrowserView } from "react-device-detect";
import * as KlipAPI from "../../api/UseKlip";
import ConnectWalletModal from "../Modal/ConnectWalletModal";
import { useRecoilState } from "recoil";
import {
  modalPropsState,
  myAddressState,
  myBalanceState,
  qrValueState,
  showModalState,
} from "../../atom";
import { getBalance } from "../../api/UseCaver";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 9;
  ${media.mobile} {
    height: 72px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 935px;
  height: 100%;
  z-index: 9;
  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    justify-content: center;
    padding: 10px;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.h1)`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-family: "Black Han Sans", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: white;
  ${media.mobile} {
    font-size: 24px;
  }
`;

// 어드밴스
// const SearchForm = styled.form`
//   position: relative;
//   svg {
//     height: 20px;
//   }
//   ${media.mobile} {
//     display: none;
//   }
// `;

// const SearchInput = styled(motion.input).attrs({ autoComplete: "off" })`
//   all: unset;
//   transform-origin: right center;
//   position: absolute;
//   top: -3px;
//   right: 0px;
//   padding: 3px 10px 3px 40px;
//   box-sizing: border-box;
//   padding-left: 40px;
//   z-index: -1;
//   border: 1px solid lightgray;
// `;

const Mypage = styled.div`
  background: ${theme.color.accentColor};
  margin-left: 15px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  ${media.mobile} {
    font-size: 10px;
    padding: 10px;
  }
`;

const CreateCampaignBtn = styled.div`
  background: ${theme.color.accentColor};
  margin-left: 15px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  ${media.mobile} {
    font-size: 10px;
    padding: 10px;
  }
`;

const ConnectWallet = styled.div`
  background: ${theme.color.accentColor};
  margin-left: 15px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  ${media.mobile} {
    font-size: 10px;
    padding: 10px;
  }
`;

const headVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0)",
  },
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(7.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

const logoVariants = {
  top: {
    color: "white",
  },
  scroll: {
    color: "black",
  },
};

function Header() {
  // const [searchOpen, setSearchOpen] = useState(false);
  // const inputAnimation = useAnimation();
  const [isLogined, setIsLogined] = useState(false);
  const headAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [myBalance, setMyBalance] = useRecoilState(myBalanceState);

  // 어드밴스
  // const toggleSearch = () => {
  //   if (searchOpen) {
  //     inputAnimation.start({
  //       scaleX: 0,
  //     });
  //     if (scrollY.get() == 0) headAnimation.start("top");
  //   } else {
  //     inputAnimation.start({ scaleX: 1 });
  //     headAnimation.start("scroll");
  //   }
  //   setSearchOpen((prev) => !prev);
  // };

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
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        headAnimation.start("scroll");
      } else {
        headAnimation.start("top");
      }
    });
  }, [scrollY, headAnimation]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        logoAnimation.start("scroll");
      } else {
        logoAnimation.start("top");
      }
    });
  }, [scrollY, logoAnimation]);

  useEffect(() => {
    getUserData();
    setShowModal(false);
  }, []);

  return (
    <Head variants={headVariants} animate={headAnimation} initial={"top"}>
      <Container>
        <Col>
          <Link to="/">
            <Logo
              variants={logoVariants}
              animate={logoAnimation}
              initial={"top"}
            >
              JOGAKBO
            </Logo>
          </Link>
        </Col>
        {/* <BrowserView> */}
        <Col>
          {/* 어드밴스
            <SearchForm>
              <motion.svg
                onClick={toggleSearch}
                animate={{ x: searchOpen ? -185 : 0 }}
                transition={{ type: "linear" }}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </motion.svg>
              <SearchInput
                animate={inputAnimation}
                initial={{ scaleX: 0 }}
                transition={{ type: "linear" }}
                placeholder="Search for Campaign..."
              />
            </SearchForm> */}
          {myAddress !== "0x00" ? (
            <Link to="/createCampaign">
              <CreateCampaignBtn>create Campaign</CreateCampaignBtn>
            </Link>
          ) : null}
          {myAddress !== "0x00" ? (
            <>
              <Link to="/mypage">
                <Mypage>Mypage</Mypage>
              </Link>
            </>
          ) : (
            <>
              <ConnectWallet onClick={getUserData}>
                Connect Wallet
              </ConnectWallet>
              {showModal ? <ConnectWalletModal /> : null}
            </>
          )}
        </Col>
        {/* </BrowserView> */}
      </Container>
    </Head>
  );
}

export default Header;

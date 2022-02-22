import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { showQRState } from "../atom";
import { media, theme } from "../styles/theme";
import klip from "../assets/png/klip-logo.svg";
import kaikas from "../assets/png/kaikas-logo.svg";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  transition: all 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  background: ${theme.color.accentColor};
  border-radius: 10px;
  transition: all 0.2 ease-in-out;
  width: 593px;
  padding: 44px 51px;
  ${media.tablet} {
    width: 419px;
    padding: 28px 33px;
  }
  ${media[768]} {
    width: 332px;
    padding: 20px 22px;
  }
`;

const ConnectWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;

const ConnectWalletModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease-in-out;
  color: white;
  button {
    all: unset;
    cursor: pointer;
  }
  margin-bottom: 28px;
  ${media[768]} {
    margin-bottom: 24px;
  }
  h5 {
    font-size: 20px;
    ${media.tablet} {
      font-size: 18px;
    }
  }
`;

const ConnectWalletModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ConnectWalletCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  all: unset;
  width: 220px;
  height: 160px;
  padding: 0 30px;
  box-sizing: border-box;
  background: ${theme.color.accentColor};
  border-radius: 10px;
`;

function ConnectWalletModal() {
  const [showQR, setShowQR] = useRecoilState(showQRState);

  const handleQRClose = () => setShowQR(false);

  return (
    <ModalWrapper show={showQR}>
      <ModalContent>
        <ConnectWalletContainer>
          <ConnectWalletModalHeader>
            <h5>Connect Wallet</h5>
            <button>
              <FontAwesomeIcon onClick={handleQRClose} icon={faTimes} />
            </button>
          </ConnectWalletModalHeader>
          <ConnectWalletModalContent>
            <ConnectWalletCard>
              <img src={kaikas} />
              <h5>Connect To KaiKas Wallet</h5>
            </ConnectWalletCard>
            <ConnectWalletCard>
              <img src={klip} />
              <h5>Connect To Klip Wallet</h5>
            </ConnectWalletCard>
          </ConnectWalletModalContent>
        </ConnectWalletContainer>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ConnectWalletModal;

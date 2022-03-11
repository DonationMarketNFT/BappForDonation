import { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${theme.flexCenter}
  background:${theme.color.accentColor};
  z-index: 99999;
  font-size: 36px;
`;

function Splash() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setSplash(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      {splash === true ? (
        <MobileView>
          <Container>hello</Container>
        </MobileView>
      ) : null}
    </>
  );
}

export default Splash;

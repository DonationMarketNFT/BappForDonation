import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../../api/allpresentdata";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";

const Wrapper = styled.div`
  margin: 100px 0;
`;

const PresentTitle = styled.h3`
  margin: 30px 0;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  width: 180px;
  height: 150px;
  margin: 10px 0;
  background: black;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  ${media.mobile} {
    width: 160px;
  }
`;

function Present() {
  return (
    <Wrapper>
      <PresentTitle>진행 중인 캠페인</PresentTitle>
      <FlexBox>
        {data.map((o, i) => (
          <>
            <BoxContainer key={i}>
              <Link to={`/campaign/${o.id}`}>
                <Box bgphoto={makeNewImagePath(o.id)} />
              </Link>
            </BoxContainer>
          </>
        ))}
      </FlexBox>
    </Wrapper>
  );
}

export default Present;

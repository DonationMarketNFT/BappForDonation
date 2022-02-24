import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../../api/allpresentdata";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
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
  height: 150px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;

function Present() {
  return (
    <Wrapper>
      <GridBox>
        {data.map((o, i) => (
          <>
            <BoxContainer key={i}>
              <Link to={`/campaign/${o.id}`}>
                <Box bgphoto={makeNewImagePath(o.id)} />
              </Link>
            </BoxContainer>
          </>
        ))}
      </GridBox>
    </Wrapper>
  );
}

export default Present;

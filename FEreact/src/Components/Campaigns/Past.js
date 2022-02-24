import styled from "styled-components";
import { data } from "../../api/allpastdata";
import { media } from "../../styles/theme";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  height: 150px;
  background: black;
  margin-bottom: 20px;
`;

function Past() {
  return (
    <Wrapper>
      <FlexBox>
        {/* 실제 데이터 map 함수 */}
        {data.map((a, i) => (
          <Box key={i} />
        ))}
      </FlexBox>
    </Wrapper>
  );
}

export default Past;

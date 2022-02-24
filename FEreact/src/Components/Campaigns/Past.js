import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { testCampaignList } from "../../api/UseCaver";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";

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
  background: black;
  margin-bottom: 20px;
`;

function Past() {
  const [pastData, setPastData] = useState([]);
  const getPastData = async () => {
    const results = await testCampaignList();
    const array = [];
    for (let i = 0; i < results.length; i++) {
      if (!results[i].campaign_state) {
        array.push(results[i]);
      }
    }
    setPastData(array);
  };

  useEffect(() => {
    getPastData();
  }, []);

  return (
    <Wrapper>
      <FlexBox>
        {pastData.map((data, i) => (
          <>
            <BoxContainer key={`pastkey${i}`}>
              <Link to={`/campaign/${data[7]}`}>
                <Box bgphoto={makeNewImagePath(data[7])} />
              </Link>
            </BoxContainer>
          </>
        ))}
      </FlexBox>
    </Wrapper>
  );
}

export default Past;

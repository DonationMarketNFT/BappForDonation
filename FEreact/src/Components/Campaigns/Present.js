import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../../api/allpresentdata";
import { testCampaignList } from "../../api/UseCaver";
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
  const [presentData, setPresentData] = useState([]);
  const getPresentData = async () => {
    const results = await testCampaignList();
    const array = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].campaign_state) {
        array.push(results[i]);
      }
    }
    setPresentData(array);
  };

  useEffect(() => {
    getPresentData();
  }, []);

  return (
    <Wrapper>
      <GridBox>
        {presentData.map((data, i) => (
          <>
            <BoxContainer key={`presentkey${i}`}>
              <Link to={`/campaign/${data[7]}`}>
                <Box bgphoto={makeNewImagePath(data[7])} />
              </Link>
            </BoxContainer>
          </>
        ))}
      </GridBox>
    </Wrapper>
  );
}

export default Present;

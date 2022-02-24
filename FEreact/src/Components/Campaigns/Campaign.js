import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { data } from "../../api/allpresentdata";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";
import { testCampaignList } from "../../api/UseCaver";

const CampaignBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 935px;
  margin: 0 auto;
  box-sizing: border-box;
  ${media.tablet} {
    width: 100%;
  }
`;

const CampaignImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
`;

const CamPaignTitle = styled.h2`
  ${(props) => props.theme.font.large}
  margin-bottom: 50px;
`;

const Bars = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 100px;
  ${media.tablet} {
    width: 100%;
  }
`;

const PercentBar = styled.div`
  width: 100%;
  height: 10px;
  background: lightgray;
  border-radius: 5px;
`;

const CurrentBar = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 10px;
  background: gray;
  border-radius: 5px;
`;

const Percent = styled.div`
  ${(props) => props.theme.font.medium}
  margin-top: 20px;
  text-align: right;
`;

const Klay = styled.div`
  ${(props) => props.theme.font.small}
  margin-top: 10px;
  text-align: right;
`;

const CampaignBox = styled.div`
  display: flex;
  width: 935px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 10px;
  ${media.tablet} {
    width: auto;
    margin: 0 30px;
    padding: 0 30px;
  }
  ${media.mobile} {
    padding: 0 10px;
  }
`;

const CampaignRow = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 70%;
  }
  &:last-child {
    width: 30%;
  }
  ${media.mobile} {
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
`;

const ParticipantBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  ${media.mobile} {
    padding: 20px 10px;
  }
`;

const ParticipantRow = styled.div`
  display: flex;
`;

const ParticipantTitle = styled.h3`
  margin: 10px 0;
  ${(props) => props.theme.font.medium}
`;

const Participant = styled.div`
  margin-right: 10px;
  width: 70px;
  height: 70px;
  background: black;
  border-radius: 50%;
  ${media.tablet} {
    width: 50px;
    height: 50px;
  }
`;

const DescriptionBox = styled.div`
  padding: 50px 30px;
  height: 90vh;
  ${media.mobile} {
    padding: 20px 10px;
  }
`;
const DescriptionTitle = styled.h3`
  margin: 10px 0;
  ${(props) => props.theme.font.medium}
`;

const DonationBox = styled.div`
  position: sticky;
  top: 70px;
  padding: 50px 20px 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
  ${media.tablet} {
    all: unset;
    background: white;
    width: 70%;
    padding: 30px 15px 30px 15px;
    border-radius: 15px;
    border: 1px solid lightgray;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const CampaignName = styled.h2`
  ${(props) => props.theme.font.large}
  text-align:center;
  margin-bottom: 30px;
  ${media.tablet} {
    ${(props) => props.theme.font.medium}
    display: none;
  }
`;

const CampaignDesc = styled.p`
  margin-bottom: 30px;
  height: 150px;
  ${media.tablet} {
    display: none;
    height: 70px;
  }
`;

const DonationForm = styled.form`
  position: relative;
  label {
    position: absolute;
    top: 2px;
    right: 5px;
  }
  ${media.tablet} {
    label {
      top: 6px;
      font-size: 24px;
    }
  }
  ${media.mobile} {
    label {
      top: 4px;
      font-size: 30px;
    }
  }
`;

const DonationInput = styled.input.attrs({ required: true })`
  all: unset;
  border-bottom: 1px solid lightgray;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 40px 5px 0;
  text-align: right;
  ${media.tablet} {
    font-size: 30px;
    padding: 0 70px 5px 0;
  }
`;

const DonationButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: gray;
  }
  ${media.tablet} {
    padding: 25px 0;
    font-size: 30px;
  }
`;

function Campaign() {
  const params = useParams();
  const [campaignInfo, setCampaignInfo] = useState([]);
  const getCampaignInfo = async () => {
    const results = await testCampaignList();
    for (let i = 0; i < results.length; i++) {
      if (results[i].campaignIndex === params.camId) {
        setCampaignInfo(results[i]);
      }
    }
  };
  console.log(campaignInfo);
  useEffect(() => {
    getCampaignInfo();
  }, []);

  return (
    <>
      <CampaignBox1>
        <CampaignImage bgphoto={makeNewImagePath(campaignInfo[7])} />
        <CamPaignTitle>{campaignInfo[1]}</CamPaignTitle>
        <Bars>
          <PercentBar />
          <CurrentBar width={`${(campaignInfo[4] / campaignInfo[3]) * 100}%`} />
          <Percent>{(campaignInfo[4] / campaignInfo[3]) * 100}%</Percent>
          <Klay>
            (<span>{campaignInfo[4]}</span>Klay / <span>{campaignInfo[3]}</span>
            Klay)
          </Klay>
        </Bars>
      </CampaignBox1>
      <CampaignBox>
        <CampaignRow>
          <ParticipantBox>
            <ParticipantRow>
              <ParticipantTitle>participant</ParticipantTitle>
            </ParticipantRow>
            <ParticipantRow>
              <Participant />
              <Participant />
              <Participant />
              <Participant />
            </ParticipantRow>
          </ParticipantBox>
          <DescriptionBox>
            <DescriptionTitle>Description</DescriptionTitle>
            {campaignInfo[2]}
          </DescriptionBox>
        </CampaignRow>
        <CampaignRow style={{ padding: "50px 0" }}>
          <DonationBox>
            <CampaignName>{data[params.camId - 1].name}</CampaignName>
            <CampaignDesc>{data[params.camId - 1].description}</CampaignDesc>
            <DonationForm>
              <DonationInput type="number" id="klay" step={10} />
              <label htmlFor="klay">Klay</label>
              <DonationButton>Donate</DonationButton>
            </DonationForm>
          </DonationBox>
        </CampaignRow>
      </CampaignBox>
    </>
  );
}

export default Campaign;

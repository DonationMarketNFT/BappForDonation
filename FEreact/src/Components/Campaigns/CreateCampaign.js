import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  myAddressState,
  qrValueState,
  showModalState,
} from "../../atom";
import { media, theme } from "../../styles/theme";
import * as KlipAPI from "../../api/UseKlip";
import {
  getBalance,
  testCampaignList,
  testCampaignNumber,
} from "../../api/UseCaver";
import { createRef, useEffect } from "react";

const Container = styled.div`
  width: 935px;
  margin: 100px auto;
  ${media.tablet} {
    width: auto;
    margin: 100px 30px;
  }
`;

const FormTitle = styled.h3`
  ${theme.font.medium}
  margin: 30px auto;
  padding: 30px;
  text-align: center;
`;

function CreateCampaign() {
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const navigate = useNavigate();

  const inputRef = createRef();

  // 각 인풋의 value를 인자로 전달하여 onClickTest 실행하는 함슈
  // 첫번째 지갑주소 밸류는 필요없음..

  const createCam = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const amount = e.target.amount.value;
    onClickTest(name, desc, amount);
  };

  const onClickTest = (_name, _desc, _amount) => {
    setModalProps({
      title: "캠페인 생성을 위한 Klip 지갑 요청",
      onConfirm: () => {
        testCreateCampaign(_name, _desc, _amount);
      },
    });
    setShowModal(true);
  };

  const testCreateCampaign = (name, desc, amount) => {
    KlipAPI.createCampaign(name, desc, amount, setQrvalue, (result) => {
      alert(JSON.stringify(result));
    });
  };

  useEffect(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      {/* {myAddress !== "0x00" ? ( */}
      <Container>
        <FormTitle>CREATE CAMPAIGN</FormTitle>
        <Form
          ref={inputRef}
          onSubmit={(e) => {
            createCam(e);
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Klip 지갑 주소</Form.Label>
            <Form.Control readOnly type="text" value={myAddress} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>캠페인 이름</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="캠페인 이름을 입력해주세요"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>캠페인 설명</Form.Label>
            <Form.Control
              name="desc"
              as="textarea"
              rows={5}
              placeholder="캠페인에 대해 설명해주세요"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>목표 모금 금액</Form.Label>
            <Form.Control
              name="amount"
              type="number"
              placeholder="목표 모금 금액을 입력해주세요"
              required
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              style={{ border: 0, background: theme.color.accentColor }}
            >
              제출
            </Button>
          </div>
        </Form>
      </Container>
      {/* ) : (
        navigate("/")
      )} */}
    </>
  );
}

export default CreateCampaign;

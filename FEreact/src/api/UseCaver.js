import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  DONATION_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.baobab";
import DONATIONABI from "../abi/DonationABI.json";

function Test() {
  const option = {
    headers: [
      {
        name: "Authorization",
        value:
          "Basic " +
          Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCRESS_KEY).toString(
            "base64"
          ),
      },
      {
        name: "x-chain-id",
        value: CHAIN_ID,
      },
    ],
  };

  const caver = new Caver(
    new Caver.providers.HttpProvider(
      // "https://node-api.klaytnapi.com/v1/klaytn",
      "https://node-api.klaytnapi.com/v1/klaytn",
      option
    )
  );

  const DonationContract = new caver.contract(
    DONATIONABI,
    DONATION_CONTRACT_ADDRESS
  );

  console.log(DonationContract.methods);

  return null;
}

export default Test;

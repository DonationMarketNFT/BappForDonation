import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  DONATION_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.cypress";
import DONATIONABI from "../abi/DonationABI.json";

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
    "https://node-api.klaytnapi.com/v1/klaytn",
    // "https://api.baobab.klaytn.net:8651/",
    option
  )
);

const DonationContract = new caver.contract(
  DONATIONABI,
  DONATION_CONTRACT_ADDRESS
);

export const testCampaignList = async () => {
  // const Number = await DonationContract.methods.CampaignNumber().call();
  // const infos = [];
  // for (let i = 0; i < Number; i++) {
  //   const info = await DonationContract.methods.campaignList(i).call();
  //   infos.push(info);
  // }
  // console.log(infos);

  // return infos;
  const Number = await DonationContract.methods.CampaignNumber().call();

  const lists = [];
  for (let i = 0; i < Number; i++) {
    const list = await DonationContract.methods.campaignList(0).call();
    lists.push(list.campaign_name);
  }
  console.log(lists);
  return lists;
};

export const testCampaignNumber = async () => {
  const Number = await DonationContract.methods.CampaignNumber().call();
  console.log(`number:${Number}`);
  return Number;
};

// klip 잔고 조회시 메인넷 chain_id 필요
export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((response) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response)
    );
    return balance;
  });
};

// export const getBalance = async (address) => {
//   const bal = await caver.klay.getBalance(
//     "0xA5707282Da9FC57C09e159B61cE9DAA646F838D4"
//   );
//   console.log(bal);

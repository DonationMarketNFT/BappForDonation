# 조각보

클레이튼 기반 기부 서비스([바로가기](https://relaxed-snyder-7acf42.netlify.app/))

## 개발자

- 김다운 : [Smart Contract](https://github.com/DonationMarketNFT/BappForDonation/tree/main/SmartContract)
- 배지선 : [Smart Contract](https://github.com/DonationMarketNFT/BappForDonation/tree/main/SmartContract)
- 백시아 : [Front(React)](https://github.com/DonationMarketNFT/BappForDonation/tree/main/FEreact)
- 김민준 : [Front(React Native)](https://github.com/DonationMarketNFT/BappForDonation/tree/main/FErn)

## 기술

`Solidity` `React.js` `Recoil` `Styled-components` `caver-js`

## 특징

- 반응형
- 최신 캠페인 슬라이더
- 인기 캠페인 슬라이더
- 모든 캠페인 조회
- 지갑(카카오 클립) 연동 로그인
- 캠페인 기부 및 환불
- 관리자 계정

## [스마트 컨트랙트 주요 함수](https://github.com/DonationMarketNFT/BappForDonation/blob/main/SmartContract/contracts/DonationCampaign_update.sol)

- createCampaign
- donateTocampaign
- refund

## FE Directory Tree

```bash
.
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── Components
│   │   ├── Campaigns
│   │   │   ├── Campaign.js
│   │   │   ├── Campaigns.js
│   │   │   ├── CreateCampaign.js
│   │   │   ├── Past.js
│   │   │   └── Present.js
│   │   ├── Home
│   │   │   ├── Home.js
│   │   │   ├── NewSlider.js
│   │   │   └── PopularSlider.js
│   │   ├── Modal
│   │   │   └── ConnectWalletModal.js
│   │   └── Nav
│   │       ├── BottomTab.js
│   │       ├── Header.js
│   │       └── Mypage.js
│   ├── abi
│   │   └── DonationABI.json
│   ├── api
│   │   ├── UseCaver.js
│   │   ├── UseKlip.js
│   │   ├── allpastdata.js
│   │   ├── allpresentdata.js
│   │   ├── mynft.js
│   │   └── populardata.js
│   ├── assets
│   │   ├── banners
│   │   │   ├── 0.jpg
│   │   │   ├── 1.jpg
│   │   │   └── 2.jpg
│   │   └── png
│   │       ├── kaikas-logo.svg
│   │       └── klip-logo.svg
│   ├── atom.js
│   ├── constants
│   │   ├── constants.baobab.js
│   │   └── constants.cypress.js
│   ├── index.js
│   ├── routes
│   │   └── Router.js
│   ├── setupTests.js
│   ├── styles
│   │   ├── global-style.js
│   │   └── theme.js
│   └── utils.js
└── yarn.lock
```

## Screenshots

<div align="center">
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788590-651f8e93-ff52-4a30-bbfe-3a57d265d77a.png" />
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788640-0c90c974-e73d-4888-a9ff-88cf085ba1ab.png" />
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788700-d5593722-cf76-486b-bcf9-cd89912f35bc.png" />
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788744-002c0427-a73a-422d-8eb1-38be1cd54a01.png" />
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788877-bb123ef1-5d15-46fd-807a-7b3f73aa16a9.png" />
<img width="500" src="https://user-images.githubusercontent.com/94106976/169788902-c814ea54-3f20-4f31-a9c6-1a03f910a1b8.png" />
</div>
<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/94106976/169789049-97fb8047-045c-494b-b3e4-20e4d1c2cbd9.png" />
<img width="300" src="https://user-images.githubusercontent.com/94106976/169789082-ac6095f5-632c-4456-8fac-3f6d113bfbba.png" />
<img width="300" src="https://user-images.githubusercontent.com/94106976/169789162-8ad57f39-6d58-44b9-82b3-5afe7f4ac219.png" />
</div>

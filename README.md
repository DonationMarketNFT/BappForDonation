<h1 align="center">클레이튼 기반 기부 서비스 조각보</h1>
<hr />

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6bb6414f-7687-4fb3-a5f0-7af59df1c369/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T143608Z&X-Amz-Expires=86400&X-Amz-Signature=6a4c7b60f4197e6569e5675da72b569d56e3cd419d0c1e2e5fba2c3696a1f660&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14735da6-9526-41e5-b7bd-f96f1b8db904/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T143722Z&X-Amz-Expires=86400&X-Amz-Signature=d08c1775daa6d5af76c4820d0df66f0d768cf09e71ff46b08742a03720f073ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68f1e049-3125-4f71-8459-11aebfad33e2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T143751Z&X-Amz-Expires=86400&X-Amz-Signature=c867ef299179e87613a18c40911477c46b8b83389d343d6f6c2f98afbb86c709&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />


<h3>메인기능 리스트</h3>
<hr />
<h4>1. 캠페인 생성</h4>
<br/>

function createCampaign(
    string memory _campaign_name,
    string memory _campaign_description,
    uint256 _target_amount
) public {}
<br/>
<br/>
<br/>

<h4>2. 기부 (기부 등록, 토큰 발행, 토큰 전송)</h4>
<br/>
function donateTocampaign(uint256 _campaignId, uint256 _amount) public payable {}
<br/>
<br/>
<br/>

<h4>3. 환불 </h4>
<br/>
function refund(uint256 _campaignId, address _userAddr) external {}

<br/>
<br/>
<br/>

<h3>FE Directory Tree</h3>
<hr />

```bash
.
├── README.md
├── node_modules
│       └── readme.md
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
├── tree.txt
├── tree2.txt
└── yarn.lock
```


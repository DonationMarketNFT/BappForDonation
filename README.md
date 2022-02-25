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

<br />
<br />
<br />

<h3>Screenshots</h3>
<hr />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da5d93b8-258f-4f17-b213-78db59e9aed1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.51.05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T145337Z&X-Amz-Expires=86400&X-Amz-Signature=fb8305fb5c43a5a5b11988f793d0931fb439d01fda32f4dca298a5d97216a57e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-02-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252011.51.05.png%22&x-id=GetObject" />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ba6ab6a-1a61-4201-84ab-0c5658532895/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.55.34.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T145646Z&X-Amz-Expires=86400&X-Amz-Signature=cfc47663da1a132f11eb5bcb52813ed11807c1184acce93969c6b4a0e2ad8c01&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-02-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252011.55.34.png%22&x-id=GetObject"/>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a88cd61c-481e-4b2e-a47e-4f1511c67879/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.54.57.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T145541Z&X-Amz-Expires=86400&X-Amz-Signature=897b02caa3e5dba1dc4d2c3ee73ef92640f6b188c639392c49fb58fc8bfbb90a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-02-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252011.54.57.png%22&x-id=GetObject" />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4826f9ee-37ad-40b9-b6cf-6dea3e318dc3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.54.45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T145600Z&X-Amz-Expires=86400&X-Amz-Signature=1ab9c160a09c7b2f00703495f3afa0a89562070fe1d41cdcb0f14512dff76bd5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-02-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252011.54.45.png%22&x-id=GetObject" />
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07ba8a21-add7-47ed-8444-407ec2656729/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.54.13.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220225T145621Z&X-Amz-Expires=86400&X-Amz-Signature=bde5b1916ef90b8cc2fb3f7a8a1b7429620bfaea753ec0c1d1e6b91e729d32cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-02-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252011.54.13.png%22&x-id=GetObject" />


import { atom } from "recoil";

const showQRState = atom({
  key: "QR",
  default: false,
});

export { showQRState };

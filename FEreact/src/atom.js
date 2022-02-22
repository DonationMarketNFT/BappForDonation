import { atom } from "recoil";

const showQRState = atom({
  key: "QR",
  default: false,
});

const modalPropsState = atom({
  key: "modal_props",
  default: { title: "MODAL", onConfirm: () => {} },
});

const myAddressState = atom({
  key: "my_address",
  default: "",
});

const qrValueState = atom({
  key: "qrcode",
  default: "DEFAULT",
});

export { showQRState, modalPropsState, myAddressState, qrValueState };

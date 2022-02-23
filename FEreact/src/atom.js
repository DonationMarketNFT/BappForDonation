import { atom } from "recoil";

const showModalState = atom({
  key: "modal",
  default: false,
});

const modalPropsState = atom({
  key: "modal_props",
  default: { title: "MODAL", onConfirm: () => {} },
});

const myAddressState = atom({
  key: "my_address",
  // default: "0xA5707282Da9FC57C09e159B61cE9DAA646F838D4",
  default: "0x00",
});

const myBalanceState = atom({
  key: "my_balance",
  default: "0",
});

const qrValueState = atom({
  key: "qrcode",
  default: "DEFAULT",
});

const profileImageState = atom({
  key: "profile_image",
  default:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
});

export {
  showModalState,
  modalPropsState,
  myAddressState,
  myBalanceState,
  qrValueState,
  profileImageState,
};

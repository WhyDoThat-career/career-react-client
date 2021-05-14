import { atom, selector } from "recoil";

export const userState = atom({
  key: "user",
  default: { isLogin: true },
});

export const navState = atom({
  key: "nav",
  default: { activeItem: "position" },
});

import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorator = [
  (Story) => (
    <RecoilRoot>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </RecoilRoot>
  ),
];

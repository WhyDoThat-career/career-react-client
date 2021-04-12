import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorator = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];

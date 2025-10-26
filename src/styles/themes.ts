import { Theme, Themes } from "../modules/theme";

const light: Theme = {
  name: "light",
  color: {
    backgroundPrimary: "#4682b4",
    backgroundSecondary: "#d8e5e0",
    text: "#2c3e50",
    border: "#bdc3c7",
  },
};

const darck: Theme = {
  name: "darck",
  color: {
    backgroundPrimary: "black",
    backgroundSecondary: "grey",
    text: "#ecf0f1",
    border: "#555555",
  },
};
export const themes: Themes = { light, darck } as const;

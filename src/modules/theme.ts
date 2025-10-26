export interface Theme {
  name: string;
  color: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    text: string;
    border: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}

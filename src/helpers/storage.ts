import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem('appState', appState);
  } catch (e) {
    console.warn(e);
  }
}

export const loadFromLocalStorage = (): RootState | undefined => {
  try {
    const appState = localStorage.getItem('appState');
    if (!appState) return undefined;
    return JSON.parse(appState) as RootState;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

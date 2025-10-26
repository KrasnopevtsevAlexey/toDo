import { Headers, Container, Link, ToggleButton } from "./Header.styled";

import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themeList";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Headers>
        <Container>
          <Link to="/">ToDo</Link>
          <Link to="/list">List</Link>

          <ToggleButton onClick={() => dispatch(toggleThemeAction())}>
            toggle
          </ToggleButton>
        </Container>
      </Headers>
    </>
  );
};

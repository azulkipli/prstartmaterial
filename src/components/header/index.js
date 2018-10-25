import { h } from "preact";
import TopAppBar from "preact-material-components/TopAppBar";
import "preact-material-components/TopAppBar/style.css";
import "preact-material-components/Button/style.css";

const Header = props => (
  <TopAppBar className="topappbar">
    <TopAppBar.Row>
      <TopAppBar.Section align-start>
        <TopAppBar.Icon
          navigation
          onClick={e => {
            e.preventDefault();
            props.openSidebar();
          }}
        >
          menu
        </TopAppBar.Icon>
        <TopAppBar.Title>PreactJS Material</TopAppBar.Title>
      </TopAppBar.Section>
      <TopAppBar.Section align-end>
        <TopAppBar.Icon
          style={{ cursor: "pointer" }}
          onClick={e => {
            e.preventDefault();
            props.openSidebar();
          }}
        >
          more_vert
        </TopAppBar.Icon>
      </TopAppBar.Section>
    </TopAppBar.Row>
  </TopAppBar>
);

export default Header;

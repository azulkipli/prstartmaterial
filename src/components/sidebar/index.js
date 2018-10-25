import { h } from "preact";
import Drawer from "preact-material-components/Drawer";
import "preact-material-components/Drawer/style.css";
import "preact-material-components/List/style.css";
import Icon from "preact-material-components/Icon";
import "preact-material-components/Icon/style.css";
import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";
import "preact-material-components/Theme/style.css";
import { route } from "preact-router";

const Sidebar = props => (
  <Drawer modal open={props.sidebarOpen}>
    <Drawer.DrawerHeader style={{ paddingTop: "16px" }}>
      <Typography headline5>List Menu</Typography>
    </Drawer.DrawerHeader>
    <Drawer.DrawerContent>
      <Drawer.DrawerItem
        style={{ cursor: "pointer" }}
        selected={props.currentUrl === "/" ? true : false}
        onClick={() => {
          route("/");
          props.closeSidebar();
        }}
      >
        <Icon>home</Icon> Home
      </Drawer.DrawerItem>
      <Drawer.DrawerItem
        style={{ cursor: "pointer" }}
        selected={props.currentUrl === "/profile" ? true : false}
        onClick={() => {
          route("/profile");
          props.closeSidebar();
        }}
      >
        <Icon>people</Icon> Profile
      </Drawer.DrawerItem>
    </Drawer.DrawerContent>
  </Drawer>
);

export default Sidebar;

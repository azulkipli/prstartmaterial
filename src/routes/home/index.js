import { h } from "preact";
import style from "./style";
import Helmet from "preact-helmet";

const Home = () => (
  <div class={style.home}>
    <Helmet
      htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
      title="Home"
      titleTemplate="PreactJS Material |  - %s"
      defaultTitle="PreactJS Material"
      titleAttributes={{ itemprop: "name", lang: "en" }}
      base={{ target: "_blank", href: "https://prstart_material.surge.sh/" }}
      meta={[
        { name: "description", content: "preactjs material components" },
        { property: "og:type", content: "preactjs" }
      ]}
    />
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </div>
);

export default Home;

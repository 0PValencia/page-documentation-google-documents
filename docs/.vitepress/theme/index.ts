import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () =>
        h(
          "a",
          { href: "#VPContent", class: "skip-to-content" },
          "Saltar al contenido",
        ),
    });
  },
};

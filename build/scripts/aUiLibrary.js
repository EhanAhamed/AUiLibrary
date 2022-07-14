var dom = {
  setup: function () {
    var aUiActionTypePage = document.querySelectorAll(
      '[aUi-action-type="page"]'
    );
    var aUiActionTypeRedirect = document.querySelectorAll(
      '[aUi-action-type="redirect"]'
    );
    var aUiActionTypeScript = document.querySelectorAll(
      '[aUi-action-type="script"]'
    );

    aUiActionTypePage.forEach(function (elemId) {
      document
        .getElementById(elemId)
        .setAttribute(
          "onclick",
          "window.location.href =" +
            document.getElementById(elemId).getAttribute("aUi-action")
        );
    });
    aUiActionTypeRedirect.forEach(function (elemId) {
      document
        .getElementById(elemId)
        .setAttribute(
          "onclick",
          "window.location.replace(" +
            document.getElementById(elemId).getAttribute("aUi-action") +
            ")"
        );
    });
    aUiActionTypeScript.forEach(function (elemId) {
      document
        .getElementById(elemId)
        .setAttribute(
          "onclick",
          document.getElementById(elemId).getAttribute("aUi-action")
        );
    });
  },
};
var colors = {
  Yin: "#2d2d2d" /* Yin - Black - 5 - Dark */,
  Yang: "#d5d5d5" /* Yang - White - 5 - Light */,
  Moon: "#525252" /* Moon - Gray - 5 - Mid */,
  Sea: "#2d5595" /* Sea - Blue - 5 - Primary */,
  Love: "#d99999" /* Love - Pink - 5 - Secondary */,
  Gem: "#5d5595" /* Gem - Purple - 5 - Primary Alt */,
  Fire: "#d99955" /* Fire - Orange - 5 - Secondary Alt */,

  /* Color */
  blue: "#2d5595" /* Sea - Blue - 5 - Primary */,
  indigo: "" /* ___ - Indigo - 5 - ___ */,
  purple: "#5d5595" /* Gem - Purple - 5 - Primary Alt */,
  pink: "#d99999" /* Love - Pink - 5 - Secondary */,
  red: "" /* ___ - Red - 5 - Danger */,
  orange: "#d99955" /* Fire - Orange - 5 - Secondary Alt */,
  yellow: "" /* ___ - Yellow - 5 - Warning */,
  lime: "" /* ___ - Lime - 5 - ___ */,
  green: "" /* ___ - Green - 5 - Sucess */,
  teal: "" /* ___ - Teal - 5 - ___ */,
  cyan: "" /* ___ - Cyan - 5 - ___ */,
  black: "" /* Yin - Black - 10 - Dark */,
  gray: "" /* Moon - Gray - 5 - Mid */,
  white: "#d5d5d5" /* Yang - White - 0 - Light */,
};
var utils = {
  colors: colors,
  dom: dom,
};
var layouts = {};
var items = {};
var components = {};
var aUi = {
  components: components,
  items: items,
  layouts: layouts,
  utils: utils,
};

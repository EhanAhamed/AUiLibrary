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

export { dom };

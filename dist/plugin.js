var capacitorInAppBrowser = (function (exports, core) {
    'use strict';

    exports.BackgroundColor = void 0;
    (function (BackgroundColor) {
        BackgroundColor["WHITE"] = "white";
        BackgroundColor["BLACK"] = "black";
    })(exports.BackgroundColor || (exports.BackgroundColor = {}));
    exports.ToolBarType = void 0;
    (function (ToolBarType) {
        ToolBarType["ACTIVITY"] = "activity";
        ToolBarType["NAVIGATION"] = "navigation";
        ToolBarType["BLANK"] = "blank";
        ToolBarType["DEFAULT"] = "";
    })(exports.ToolBarType || (exports.ToolBarType = {}));

    const InAppBrowser = core.registerPlugin("InAppBrowser", {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.InAppBrowserWeb()),
    });

    class InAppBrowserWeb extends core.WebPlugin {
        async open(options) {
            console.log("open", options);
            return options;
        }
        async clearCookies() {
            console.log("cleanCookies");
            return;
        }
        async openWebView(options) {
            console.log("openWebView", options);
            return options;
        }
        async close() {
            console.log("close");
            return;
        }
        async setUrl(options) {
            console.log("setUrl", options.url);
            return;
        }
        async reload() {
            console.log("reload");
            return;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        InAppBrowserWeb: InAppBrowserWeb
    });

    exports.InAppBrowser = InAppBrowser;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

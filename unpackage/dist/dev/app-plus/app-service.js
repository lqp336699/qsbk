(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$5 = {
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex flex-column px-2 py-3 border-bottom" }, [
      vue.createElementVNode("view", { class: "flex align-center justify-between" }, [
        vue.createElementVNode("view", { class: "flex align-center" }, [
          vue.createElementVNode("image", {
            style: { "width": "80rpx", "height": "80rpx" },
            src: "/static/touxiang.jpg",
            class: "mr-2 rounded-circle"
          }),
          vue.createElementVNode("text", {
            style: { "color": "#aaa" },
            class: "font-sm"
          }, "\u5364\u5927\u5E08")
        ]),
        vue.createElementVNode("view", { class: "flex justify-between align-center" }, [
          vue.createElementVNode("text", {
            class: "px-2 font-sm text-center mr-2",
            style: { "background-color": "rgba(100,100,100,0.1)" }
          }, "+ \u5173\u6CE8"),
          vue.createElementVNode("text", { style: { "color": "#aaa" } }, "\xD7")
        ])
      ]),
      vue.createElementVNode("view", { class: "mt-3" }, [
        vue.createElementVNode("text", { style: { "color": "#333", "font-size": "34rpx" } }, "\u5982\u4F55\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F")
      ]),
      vue.createElementVNode("view", {
        class: "flex mt-2",
        style: { "border-radius": "20rpx", "height": "370rpx" }
      }, [
        vue.createElementVNode("image", {
          src: "/static/11.jpeg",
          style: { "height": "370rpx", "display": "block", "width": "730rpx" },
          mode: "scaleToFill"
        })
      ]),
      vue.createElementVNode("view", { class: "flex mt-3 align-center justify-between" }, [
        vue.createElementVNode("view", {
          class: "flex",
          style: { "color": "#aaa" }
        }, [
          vue.createElementVNode("view", { class: "mr-3 flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "36rpx" }
            }, "\uE60F"),
            vue.createElementVNode("text", null, "997")
          ]),
          vue.createElementVNode("view", { class: "flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "40rpx" }
            }, "\uE758"),
            vue.createElementVNode("text", null, "10")
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex",
          style: { "color": "#aaa" }
        }, [
          vue.createElementVNode("view", { class: "mr-3 flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "36rpx" }
            }, "\uE63A"),
            vue.createElementVNode("text", null, "997")
          ]),
          vue.createElementVNode("view", { class: "flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "40rpx" }
            }, "\uE602"),
            vue.createElementVNode("text", null, "10")
          ])
        ])
      ])
    ]);
  }
  var lqpCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    components: { lqpCard },
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_lqpCard = vue.resolveComponent("lqpCard");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_lqpCard)
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesPaperPaper = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesNewsNews = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/paper/paper", PagesPaperPaper);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/news/news", PagesNewsNews);
  Object.freeze({});
  Object.freeze([]);
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);

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
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$7 = {
    data() {
      return {
        listData: {
          touxiang: "/static/touxiang.jpg",
          name: "\u5364\u5927\u5E08",
          title: "\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F\uFF1F",
          zan: 997,
          cai: 10,
          pinglun: 997,
          fengxiang: 10
        }
      };
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex flex-column px-2 py-3 border-bottom" }, [
      vue.createElementVNode("view", { class: "flex align-center justify-between" }, [
        vue.createElementVNode("view", { class: "flex align-center" }, [
          vue.createElementVNode("image", {
            src: $data.listData.touxiang,
            style: { "width": "80rpx", "height": "80rpx" },
            class: "mr-2 rounded-circle"
          }, null, 8, ["src"]),
          vue.createElementVNode("text", {
            style: { "color": "#aaa" },
            class: "font-sm"
          }, vue.toDisplayString($data.listData.name), 1)
        ]),
        vue.createElementVNode("view", { class: "flex justify-between align-center" }, [
          vue.createElementVNode("text", {
            class: "px-2 font-sm text-center mr-2",
            style: { "background-color": "rgba(100,100,100,0.1)" }
          }, "\u5173\u6CE8"),
          vue.createElementVNode("text", { style: { "color": "#aaa" } }, "\xD7")
        ])
      ]),
      vue.createElementVNode("view", { class: "mt-3" }, [
        vue.createElementVNode("text", { style: { "color": "#222", "font-size": "34rpx" } }, "\u5982\u4F55\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F")
      ]),
      vue.createElementVNode("view", {
        class: "flex mt-2 position-relative",
        style: { "border-radius": "20rpx", "height": "370rpx" }
      }, [
        vue.createElementVNode("image", {
          src: "/static/11.jpeg",
          style: { "height": "370rpx", "display": "block", "width": "730rpx" },
          mode: "scaleToFill"
        }),
        vue.createElementVNode("view", {
          class: "iconfont rounded-circle position-absolute top-0 bottom-0 right-0 left-0 m-auto",
          style: { "color": "rgba(255,255,255,0.6)", "font-weight": "800", "font-size": "100rpx", "width": "100rpx", "height": "100rpx" }
        }, " \uE624 ")
      ]),
      vue.createElementVNode("view", { class: "flex mt-3 align-center justify-between" }, [
        vue.createElementVNode("view", {
          class: "flex",
          style: { "color": "#333" }
        }, [
          vue.createElementVNode("view", { class: "mr-3 flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "36rpx" }
            }, "\uE60F"),
            vue.createElementVNode("text", null, vue.toDisplayString($data.listData.zan), 1)
          ]),
          vue.createElementVNode("view", { class: "flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "40rpx" }
            }, "\uE758"),
            vue.createElementVNode("text", null, vue.toDisplayString($data.listData.cai), 1)
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex",
          style: { "color": "#333" }
        }, [
          vue.createElementVNode("view", { class: "mr-3 flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "36rpx" }
            }, "\uE63A"),
            vue.createElementVNode("text", null, vue.toDisplayString($data.listData.pinglun), 1)
          ]),
          vue.createElementVNode("view", { class: "flex align-center" }, [
            vue.createElementVNode("text", {
              class: "iconfont mr-2",
              style: { "font-size": "40rpx" }
            }, "\uE602"),
            vue.createElementVNode("text", null, vue.toDisplayString($data.listData.fengxiang), 1)
          ])
        ])
      ])
    ]);
  }
  var lqpCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  const _sfc_main$6 = {
    components: { lqpCard },
    data() {
      return {
        title: "Hello",
        isloading: false,
        tabIndex: 0,
        scrollInto: "",
        swipers: [
          {
            touxiang: "/static/touxiang.jpg",
            name: "\u5364\u5927\u5E08",
            title: "\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F\uFF1F",
            zan: 997,
            cai: 10,
            pinglun: 997,
            fengxiang: 10
          },
          {
            touxiang: "/static/touxiang.jpg",
            name: "\u5364\u5927\u5E08",
            title: "\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F\uFF1F",
            zan: 997,
            cai: 10,
            pinglun: 997,
            fengxiang: 10
          },
          {
            touxiang: "/static/touxiang.jpg",
            name: "\u5364\u5927\u5E08",
            title: "\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F\uFF1F",
            zan: 997,
            cai: 10,
            pinglun: 997,
            fengxiang: 10
          }
        ],
        tabBars: [{
          name: "\u5173\u6CE8",
          id: "guanzhu"
        }, {
          name: "\u63A8\u8350",
          id: "tuijian"
        }, {
          name: "\u4F53\u80B2",
          id: "tiyu"
        }, {
          name: "\u70ED\u70B9",
          id: "redian"
        }, {
          name: "\u8D22\u7ECF",
          id: "caijing"
        }, {
          name: "\u5A31\u4E50",
          id: "yule"
        }, {
          name: "\u519B\u4E8B",
          id: "junshi"
        }, {
          name: "\u5386\u53F2",
          id: "lishi"
        }, {
          name: "\u672C\u5730",
          id: "bendi"
        }]
      };
    },
    onLoad() {
    },
    methods: {
      ontabtap(e) {
        let index = e.target.dataset.current || e.currentTarget.dataset.current;
        this.tabIndex = index;
        this.scrollInto = this.tabBars[index].id;
      },
      loadMore(e) {
        this.isloading = true;
        let newData = [{
          touxiang: "/static/touxiang.jpg",
          name: "\u5364\u5927\u5E08",
          title: "\u7528\u624B\u6539\u53D8\u4F60\u7684\u4E00\u751F\uFF1F",
          zan: 997,
          cai: 10,
          pinglun: 997,
          fengxiang: 10
        }];
        setTimeout(() => {
          this.swipers = [...this.swipers, ...newData, ...newData, ...newData];
          this.isloading = false;
        }, 1e3);
      },
      refresh() {
        formatAppLog("log", "at pages/index/index.vue:117", "\u5237\u65B0\u4E86");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_lqpCard = vue.resolveComponent("lqpCard");
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("scroll-view", {
        class: "scroll-x",
        style: { "white-space": "nowrap", "line-height": "80rpx" },
        "scroll-with-animation": "true",
        "scroll-into-view": $data.scrollInto,
        "scroll-x": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabBars, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "item mr-5",
            id: item.id,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args)),
            key: item.id,
            "data-current": index
          }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass(index == this.tabIndex ? "active" : "")
            }, vue.toDisplayString(item.name), 3)
          ], 8, ["id", "data-current"]);
        }), 128))
      ], 8, ["scroll-into-view"]),
      vue.createElementVNode("swiper", {
        class: "swiper",
        current: $data.tabIndex
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabBars, (item) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "",
              onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.loadMore && $options.loadMore(...args)),
              style: { "height": "85vh" }
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.swipers, (item2, index1) => {
                return vue.openBlock(), vue.createElementBlock("view", null, [
                  vue.createVNode(_component_lqpCard)
                ]);
              }), 256)),
              vue.createElementVNode("view", {
                "v-show": $data.isloading,
                class: "text-center text-danger"
              }, " \u6B63\u5728\u52A0\u8F7D... ", 8, ["v-show"])
            ], 32)
          ]);
        }), 256))
      ], 8, ["current"])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
  const _sfc_main$5 = {
    data() {
      return {
        list: [
          {
            title: "\u5A92\u4F53",
            open: false,
            pages: [{
              url: "pages/paper/img",
              title: "\u56FE\u7247"
            }, {
              url: "pages/paper/audio",
              title: "\u97F3\u9891"
            }, {
              url: "pages/paper/video",
              title: "\u89C6\u9891"
            }]
          },
          {
            title: "\u8BBE\u5907",
            open: false,
            pages: [{
              url: "pages/paper/wifi",
              title: "\u83B7\u53D6\u8BBE\u5907\u7F51\u7EDC\u72B6\u6001"
            }, {
              url: "pages/paper/info",
              title: "\u83B7\u53D6\u8BBE\u5907\u7CFB\u7EDF\u4FE1\u606F"
            }, {
              url: "pages/paper/call",
              title: "\u6253\u7535\u8BDD"
            }]
          },
          {
            title: "\u7F51\u7EDC",
            open: false,
            pages: [{
              url: "pages/paper/nav",
              title: "\u8BBE\u7F6E\u5BFC\u822A\u6761"
            }]
          }
        ]
      };
    },
    methods: {
      changescllspase(index) {
        for (var i = 0; i < this.list.length; i++) {
          if (i == index) {
            this.list[index].open = !this.list[index].open;
            formatAppLog("log", "at pages/paper/paper.vue:64", !this.list[index].open);
          } else {
            this.list[i].open = false;
          }
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "bg-white mt-3" }, [
          vue.createElementVNode("view", {
            class: "flex justify-between align-center p-3",
            onClick: ($event) => $options.changescllspase(index)
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1),
            vue.createElementVNode("text", { class: "iconfont" }, "\uEB04")
          ], 8, ["onClick"]),
          item.open ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(item.pages, (item1, index1) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
              vue.createElementVNode("view", { class: "flex justify-between align-center p-3" }, [
                vue.createElementVNode("text", null, vue.toDisplayString(item1.title), 1),
                vue.createElementVNode("text", { class: "iconfont" }, "\uE8F1")
              ])
            ]);
          }), 256)) : vue.createCommentVNode("v-if", true)
        ]);
      }), 256))
    ]);
  }
  var PagesPaperPaper = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    data() {
      return {
        list: [
          {
            title: "\u5A92\u4F53\u7EC4\u4EF6",
            open: false,
            pages: [
              "image",
              "video"
            ]
          },
          {
            title: "\u5BFC\u822A",
            open: false,
            pages: [
              "navigateTo"
            ]
          },
          {
            title: "\u8868\u5355\u7EC4\u4EF6",
            open: false,
            pages: [
              "button",
              "checkout"
            ]
          },
          {
            title: "\u5730\u56FE",
            open: false,
            pages: [
              "map"
            ]
          }
        ]
      };
    },
    methods: {
      changeCallapse(index, id) {
        formatAppLog("log", "at pages/home/home.vue:59", index);
        for (let i in this.list) {
          if (index == i) {
            formatAppLog("log", "at pages/home/home.vue:62", !this.list[index].open);
            this.list[index].open = !this.list[index].open;
          } else {
            this.list[i].open = false;
          }
        }
      },
      goPage(item1) {
        formatAppLog("log", "at pages/home/home.vue:70", item1);
        let url = `${item1}/${item1}`;
        formatAppLog("log", "at pages/home/home.vue:72", url);
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex-1" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "mt-4 bg-white" }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["list flex align-center px-3 justify-between", item.open ? "active" : ""]),
            onClick: ($event) => $options.changeCallapse(index, item.id)
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1),
            !item.open ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "iconfont font-lg"
            }, "\uEB04")) : vue.createCommentVNode("v-if", true),
            item.open ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "iconfont font-lg"
            }, "\uEB03")) : vue.createCommentVNode("v-if", true)
          ], 10, ["onClick"]),
          item.open ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(item.pages, (item1, index1) => {
            return vue.openBlock(), vue.createElementBlock("view", null, [
              vue.createElementVNode("view", {
                class: "list listItem flex align-center px-3 justify-between",
                onClick: ($event) => $options.goPage(item1)
              }, [
                vue.createElementVNode("text", null, vue.toDisplayString(item1), 1),
                vue.createElementVNode("text", { class: "iconfont font-lg" }, "\uE8F1")
              ], 8, ["onClick"])
            ]);
          }), 256)) : vue.createCommentVNode("v-if", true)
        ]);
      }), 256))
    ]);
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesNewsNews = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    onReady() {
      this.videoContext = uni.createVideoContext("myVideo");
    },
    methods: {
      sendDanmu() {
        let _this = this;
        this.videoContext.sendDanmu({
          text: _this.danmuValue,
          color: _this.getRandomColor()
        });
        this.danmuValue = "";
      },
      getRandomColor: function() {
        const rgb = [];
        for (let i = 0; i < 3; ++i) {
          let color = Math.floor(Math.random() * 256).toString(16);
          color = color.length == 1 ? "0" + color : color;
          rgb.push(color);
        }
        return "#" + rgb.join("");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-padding-wrap",
      style: { "background-color": "rgb(245,245,245)" }
    }, [
      vue.createElementVNode("view", { class: "p-4 flex-1 text-center" }, "video"),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("video", {
            id: "myVideo",
            src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            onError: _cache[0] || (_cache[0] = (...args) => _ctx.videoErrorCallback && _ctx.videoErrorCallback(...args)),
            "danmu-list": _ctx.danmuList,
            "enable-danmu": "",
            "danmu-btn": "",
            controls: "",
            poster: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png"
          }, null, 40, ["danmu-list"])
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "inp mt-4 flex p-2 justify-between align-center bg-white" }, [
          vue.createElementVNode("text", { class: "" }, "\u5F39\u5E55\u5185\u5BB9"),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            class: "",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.danmuValue = $event),
            placeholder: "\u5728\u6B64\u5904\u8F93\u5165\u5F39\u5E55\u5185\u5BB9",
            style: { "width": "450rpx" }
          }, null, 512), [
            [vue.vModelText, _ctx.danmuValue]
          ])
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            class: "mt-4",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.sendDanmu && $options.sendDanmu(...args))
          }, "\u53D1\u9001\u5F39\u5E55")
        ])
      ])
    ]);
  }
  var PagesHomeVideoVideo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    data() {
      return {
        id: 0,
        title: "map",
        latitude: 39.909,
        longitude: 116.39742,
        covers: [{
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "../../../static/location.png"
        }, {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "../../../static/location.png"
        }]
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("map", {
        style: { "width": "100%", "height": "300px" },
        latitude: $data.latitude,
        longitude: $data.longitude,
        markers: $data.covers
      }, null, 8, ["latitude", "longitude", "markers"])
    ]);
  }
  var PagesHomeMapMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
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
  __definePage("pages/home/video/video", PagesHomeVideoVideo);
  __definePage("pages/home/map/map", PagesHomeMapMap);
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

// node_modules/@gugadev/wc-stories/index.js
!function(r) {
  var n = {};
  function o(t) {
    if (n[t])
      return n[t].exports;
    var e = n[t] = { i: t, l: false, exports: {} };
    return r[t].call(e.exports, e, e.exports, o), e.l = true, e.exports;
  }
  o.m = r, o.c = n, o.d = function(t, e, r2) {
    o.o(t, e) || Object.defineProperty(t, e, { enumerable: true, get: r2 });
  }, o.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: true });
  }, o.t = function(e, t) {
    if (1 & t && (e = o(e)), 8 & t)
      return e;
    if (4 & t && "object" == typeof e && e && e.__esModule)
      return e;
    var r2 = /* @__PURE__ */ Object.create(null);
    if (o.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: e }), 2 & t && "string" != typeof e)
      for (var n2 in e)
        o.d(r2, n2, function(t2) {
          return e[t2];
        }.bind(null, n2));
    return r2;
  }, o.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 30);
}([function(t, S, e) {
  "use strict";
  Object.defineProperty(S, "__esModule", { value: true }), S.marker = "{{lit-" + String(Math.random()).slice(2) + "}}", S.nodeMarker = "<!--" + S.marker + "-->", S.markerRegex = new RegExp(S.marker + "|" + S.nodeMarker), S.boundAttributeSuffix = "$lit$";
  var r = function(v, t2) {
    var m = this;
    this.parts = [], this.element = t2;
    var _ = -1, g = 0, b = [], w = function(t3) {
      for (var e3 = t3.content, r3 = document.createTreeWalker(e3, 133, null, false), n2 = 0; r3.nextNode(); ) {
        _++;
        var o = r3.currentNode;
        if (1 === o.nodeType) {
          if (o.hasAttributes()) {
            for (var i = o.attributes, s = 0, a = 0; a < i.length; a++)
              0 <= i[a].value.indexOf(S.marker) && s++;
            for (; 0 < s--; ) {
              var u = v.strings[g], c = S.lastAttributeNameRegex.exec(u)[2], p = c.toLowerCase() + S.boundAttributeSuffix, l = o.getAttribute(p).split(S.markerRegex);
              m.parts.push({ type: "attribute", index: _, name: c, strings: l }), o.removeAttribute(p), g += l.length - 1;
            }
          }
          "TEMPLATE" === o.tagName && w(o);
        } else if (3 === o.nodeType) {
          var f = o.data;
          if (0 <= f.indexOf(S.marker)) {
            var d = o.parentNode, h = (l = f.split(S.markerRegex)).length - 1;
            for (a = 0; a < h; a++)
              d.insertBefore("" === l[a] ? S.createMarker() : document.createTextNode(l[a]), o), m.parts.push({ type: "node", index: ++_ });
            "" === l[h] ? (d.insertBefore(S.createMarker(), o), b.push(o)) : o.data = l[h], g += h;
          }
        } else if (8 === o.nodeType)
          if (o.data === S.marker) {
            var y = o.parentNode;
            null !== o.previousSibling && _ !== n2 || (_++, y.insertBefore(S.createMarker(), o)), n2 = _, m.parts.push({ type: "node", index: _ }), null === o.nextSibling ? o.data = "" : (b.push(o), _--), g++;
          } else
            for (a = -1; -1 !== (a = o.data.indexOf(S.marker, a + 1)); )
              m.parts.push({ type: "node", index: -1 });
      }
    };
    w(t2);
    for (var e2 = 0, r2 = b; e2 < r2.length; e2++) {
      var n = r2[e2];
      n.parentNode.removeChild(n);
    }
  };
  S.Template = r, S.isTemplatePartActive = function(t2) {
    return -1 !== t2.index;
  }, S.createMarker = function() {
    return document.createComment("");
  }, S.lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.isCEPolyfill = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback, e.reparentNodes = function(t2, e2, r2, n) {
    void 0 === r2 && (r2 = null), void 0 === n && (n = null);
    for (var o = e2; o !== r2; ) {
      var i = o.nextSibling;
      t2.insertBefore(o, n), o = i;
    }
  }, e.removeNodes = function(t2, e2, r2) {
    void 0 === r2 && (r2 = null);
    for (var n = e2; n !== r2; ) {
      var o = n.nextSibling;
      t2.removeChild(n), n = o;
    }
  };
}, function(t, e) {
  var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = r);
}, function(t, e, r) {
  "use strict";
  var n, o = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  });
  Object.defineProperty(e, "__esModule", { value: true });
  var i = r(1), s = r(0), a = function() {
    function t2(t3, e2, r2, n2) {
      this.strings = t3, this.values = e2, this.type = r2, this.processor = n2;
    }
    return t2.prototype.getHTML = function() {
      for (var t3 = this.strings.length - 1, e2 = "", r2 = 0; r2 < t3; r2++) {
        var n2 = this.strings[r2], o2 = s.lastAttributeNameRegex.exec(n2);
        e2 += o2 ? n2.substr(0, o2.index) + o2[1] + o2[2] + s.boundAttributeSuffix + o2[3] + s.marker : n2 + s.nodeMarker;
      }
      return e2 + this.strings[t3];
    }, t2.prototype.getTemplateElement = function() {
      var t3 = document.createElement("template");
      return t3.innerHTML = this.getHTML(), t3;
    }, t2;
  }(), u = function(n2) {
    function t2() {
      return null !== n2 && n2.apply(this, arguments) || this;
    }
    return o(t2, n2), t2.prototype.getHTML = function() {
      return "<svg>" + n2.prototype.getHTML.call(this) + "</svg>";
    }, t2.prototype.getTemplateElement = function() {
      var t3 = n2.prototype.getTemplateElement.call(this), e2 = t3.content, r2 = e2.firstChild;
      return e2.removeChild(r2), i.reparentNodes(e2, r2.firstChild), t3;
    }, t2;
  }(e.TemplateResult = a);
  e.SVGTemplateResult = u;
}, function(t, e) {
  var r = t.exports = { version: "2.6.4" };
  "number" == typeof __e && (__e = r);
}, function(t, e, r) {
  var n = r(28)("wks"), o = r(27), i = r(2).Symbol, s = "function" == typeof i;
  (t.exports = function(t2) {
    return n[t2] || (n[t2] = s && i[t2] || (s ? i : o)("Symbol." + t2));
  }).store = n;
}, function(t, r, e) {
  "use strict";
  var n, o = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  });
  function i(t2) {
    for (var e2 in t2)
      r.hasOwnProperty(e2) || (r[e2] = t2[e2]);
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var s = e(7), a = e(31), u = e(19);
  i(e(19)), i(e(33));
  var c = e(7);
  r.html = c.html, r.svg = c.svg, r.TemplateResult = c.TemplateResult, r.SVGTemplateResult = c.SVGTemplateResult;
  var p = e(20);
  i(e(20)), (window.litElementVersions || (window.litElementVersions = [])).push("2.0.1");
  var l = function(t2) {
    return t2.flat ? t2.flat(1 / 0) : function t3(e2, r2) {
      void 0 === r2 && (r2 = []);
      for (var n2 = 0, o2 = e2.length; n2 < o2; n2++) {
        var i2 = e2[n2];
        Array.isArray(i2) ? t3(i2, r2) : r2.push(i2);
      }
      return r2;
    }(t2);
  }, f = function(n2) {
    function t2() {
      return null !== n2 && n2.apply(this, arguments) || this;
    }
    return o(t2, n2), t2.finalize = function() {
      n2.finalize.call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || [];
    }, t2._getUniqueStyles = function() {
      var t3 = this.styles, e2 = [];
      Array.isArray(t3) ? l(t3).reduceRight(function(t4, e3) {
        return t4.add(e3), t4;
      }, /* @__PURE__ */ new Set()).forEach(function(t4) {
        return e2.unshift(t4);
      }) : t3 && e2.push(t3);
      return e2;
    }, t2.prototype.initialize = function() {
      n2.prototype.initialize.call(this), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
    }, t2.prototype.createRenderRoot = function() {
      return this.attachShadow({ mode: "open" });
    }, t2.prototype.adoptStyles = function() {
      var t3 = this.constructor._styles;
      0 !== t3.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? p.supportsAdoptingStyleSheets ? this.renderRoot.adoptedStyleSheets = t3.map(function(t4) {
        return t4.styleSheet;
      }) : this._needsShimAdoptedStyleSheets = true : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t3.map(function(t4) {
        return t4.cssText;
      }), this.localName));
    }, t2.prototype.connectedCallback = function() {
      n2.prototype.connectedCallback.call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
    }, t2.prototype.update = function(t3) {
      var r2 = this;
      n2.prototype.update.call(this, t3);
      var e2 = this.render();
      e2 instanceof s.TemplateResult && this.constructor.render(e2, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = false, this.constructor._styles.forEach(function(t4) {
        var e3 = document.createElement("style");
        e3.textContent = t4.cssText, r2.renderRoot.appendChild(e3);
      }));
    }, t2.prototype.render = function() {
    }, t2;
  }(u.UpdatingElement);
  (r.LitElement = f).finalized = true, f.render = a.render;
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var n = r(15), o = r(3), i = r(15);
  e.DefaultTemplateProcessor = i.DefaultTemplateProcessor, e.defaultTemplateProcessor = i.defaultTemplateProcessor;
  var s = r(16);
  e.directive = s.directive, e.isDirective = s.isDirective;
  var a = r(1);
  e.removeNodes = a.removeNodes, e.reparentNodes = a.reparentNodes;
  var u = r(17);
  e.noChange = u.noChange, e.nothing = u.nothing;
  var c = r(8);
  e.AttributeCommitter = c.AttributeCommitter, e.AttributePart = c.AttributePart, e.BooleanAttributePart = c.BooleanAttributePart, e.EventPart = c.EventPart, e.isPrimitive = c.isPrimitive, e.NodePart = c.NodePart, e.PropertyCommitter = c.PropertyCommitter, e.PropertyPart = c.PropertyPart;
  var p = r(18);
  e.parts = p.parts, e.render = p.render;
  var l = r(10);
  e.templateCaches = l.templateCaches, e.templateFactory = l.templateFactory;
  var f = r(9);
  e.TemplateInstance = f.TemplateInstance;
  var d = r(3);
  e.SVGTemplateResult = d.SVGTemplateResult, e.TemplateResult = d.TemplateResult;
  var h = r(0);
  e.createMarker = h.createMarker, e.isTemplatePartActive = h.isTemplatePartActive, e.Template = h.Template, (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0"), e.html = function(t2) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
      e2[r2 - 1] = arguments[r2];
    return new o.TemplateResult(t2, e2, "html", n.defaultTemplateProcessor);
  }, e.svg = function(t2) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
      e2[r2 - 1] = arguments[r2];
    return new o.SVGTemplateResult(t2, e2, "svg", n.defaultTemplateProcessor);
  };
}, function(t, r, e) {
  "use strict";
  var n, i = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  });
  Object.defineProperty(r, "__esModule", { value: true });
  var s = e(16), o = e(1), u = e(17), c = e(9), p = e(3), l = e(0);
  r.isPrimitive = function(t2) {
    return null === t2 || !("object" == typeof t2 || "function" == typeof t2);
  };
  var a = function() {
    function t2(t3, e2, r2) {
      this.dirty = true, this.element = t3, this.name = e2, this.strings = r2, this.parts = [];
      for (var n2 = 0; n2 < r2.length - 1; n2++)
        this.parts[n2] = this._createPart();
    }
    return t2.prototype._createPart = function() {
      return new f(this);
    }, t2.prototype._getValue = function() {
      for (var t3 = this.strings, e2 = t3.length - 1, r2 = "", n2 = 0; n2 < e2; n2++) {
        r2 += t3[n2];
        var o2 = this.parts[n2];
        if (void 0 !== o2) {
          var i2 = o2.value;
          if (null != i2 && (Array.isArray(i2) || "string" != typeof i2 && i2[Symbol.iterator]))
            for (var s2 = 0, a2 = i2; s2 < a2.length; s2++) {
              var u2 = a2[s2];
              r2 += "string" == typeof u2 ? u2 : String(u2);
            }
          else
            r2 += "string" == typeof i2 ? i2 : String(i2);
        }
      }
      return r2 += t3[e2];
    }, t2.prototype.commit = function() {
      this.dirty && (this.dirty = false, this.element.setAttribute(this.name, this._getValue()));
    }, t2;
  }();
  r.AttributeCommitter = a;
  var f = function() {
    function t2(t3) {
      this.value = void 0, this.committer = t3;
    }
    return t2.prototype.setValue = function(t3) {
      t3 === u.noChange || r.isPrimitive(t3) && t3 === this.value || (this.value = t3, s.isDirective(t3) || (this.committer.dirty = true));
    }, t2.prototype.commit = function() {
      for (; s.isDirective(this.value); ) {
        var t3 = this.value;
        this.value = u.noChange, t3(this);
      }
      this.value !== u.noChange && this.committer.commit();
    }, t2;
  }();
  r.AttributePart = f;
  var d = function() {
    function a2(t2) {
      this.value = void 0, this._pendingValue = void 0, this.options = t2;
    }
    return a2.prototype.appendInto = function(t2) {
      this.startNode = t2.appendChild(l.createMarker()), this.endNode = t2.appendChild(l.createMarker());
    }, a2.prototype.insertAfterNode = function(t2) {
      this.startNode = t2, this.endNode = t2.nextSibling;
    }, a2.prototype.appendIntoPart = function(t2) {
      t2._insert(this.startNode = l.createMarker()), t2._insert(this.endNode = l.createMarker());
    }, a2.prototype.insertAfterPart = function(t2) {
      t2._insert(this.startNode = l.createMarker()), this.endNode = t2.endNode, t2.endNode = this.startNode;
    }, a2.prototype.setValue = function(t2) {
      this._pendingValue = t2;
    }, a2.prototype.commit = function() {
      for (; s.isDirective(this._pendingValue); ) {
        var t2 = this._pendingValue;
        this._pendingValue = u.noChange, t2(this);
      }
      var e2 = this._pendingValue;
      e2 !== u.noChange && (r.isPrimitive(e2) ? e2 !== this.value && this._commitText(e2) : e2 instanceof p.TemplateResult ? this._commitTemplateResult(e2) : e2 instanceof Node ? this._commitNode(e2) : Array.isArray(e2) || e2[Symbol.iterator] ? this._commitIterable(e2) : e2 === u.nothing ? (this.value = u.nothing, this.clear()) : this._commitText(e2));
    }, a2.prototype._insert = function(t2) {
      this.endNode.parentNode.insertBefore(t2, this.endNode);
    }, a2.prototype._commitNode = function(t2) {
      this.value !== t2 && (this.clear(), this._insert(t2), this.value = t2);
    }, a2.prototype._commitText = function(t2) {
      var e2 = this.startNode.nextSibling;
      t2 = null == t2 ? "" : t2, e2 === this.endNode.previousSibling && 3 === e2.nodeType ? e2.data = t2 : this._commitNode(document.createTextNode("string" == typeof t2 ? t2 : String(t2))), this.value = t2;
    }, a2.prototype._commitTemplateResult = function(t2) {
      var e2 = this.options.templateFactory(t2);
      if (this.value instanceof c.TemplateInstance && this.value.template === e2)
        this.value.update(t2.values);
      else {
        var r2 = new c.TemplateInstance(e2, t2.processor, this.options), n2 = r2._clone();
        r2.update(t2.values), this._commitNode(n2), this.value = r2;
      }
    }, a2.prototype._commitIterable = function(t2) {
      Array.isArray(this.value) || (this.value = [], this.clear());
      for (var e2, r2 = this.value, n2 = 0, o2 = 0, i2 = t2; o2 < i2.length; o2++) {
        var s2 = i2[o2];
        void 0 === (e2 = r2[n2]) && (e2 = new a2(this.options), r2.push(e2), 0 === n2 ? e2.appendIntoPart(this) : e2.insertAfterPart(r2[n2 - 1])), e2.setValue(s2), e2.commit(), n2++;
      }
      n2 < r2.length && (r2.length = n2, this.clear(e2 && e2.endNode));
    }, a2.prototype.clear = function(t2) {
      void 0 === t2 && (t2 = this.startNode), o.removeNodes(this.startNode.parentNode, t2.nextSibling, this.endNode);
    }, a2;
  }();
  r.NodePart = d;
  var h = function() {
    function t2(t3, e2, r2) {
      if (this.value = void 0, this._pendingValue = void 0, 2 !== r2.length || "" !== r2[0] || "" !== r2[1])
        throw new Error("Boolean attributes can only contain a single expression");
      this.element = t3, this.name = e2, this.strings = r2;
    }
    return t2.prototype.setValue = function(t3) {
      this._pendingValue = t3;
    }, t2.prototype.commit = function() {
      for (; s.isDirective(this._pendingValue); ) {
        var t3 = this._pendingValue;
        this._pendingValue = u.noChange, t3(this);
      }
      if (this._pendingValue !== u.noChange) {
        var e2 = !!this._pendingValue;
        this.value !== e2 && (e2 ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)), this.value = e2, this._pendingValue = u.noChange;
      }
    }, t2;
  }();
  r.BooleanAttributePart = h;
  var y = function(o2) {
    function t2(t3, e2, r2) {
      var n2 = o2.call(this, t3, e2, r2) || this;
      return n2.single = 2 === r2.length && "" === r2[0] && "" === r2[1], n2;
    }
    return i(t2, o2), t2.prototype._createPart = function() {
      return new v(this);
    }, t2.prototype._getValue = function() {
      return this.single ? this.parts[0].value : o2.prototype._getValue.call(this);
    }, t2.prototype.commit = function() {
      this.dirty && (this.dirty = false, this.element[this.name] = this._getValue());
    }, t2;
  }(a);
  r.PropertyCommitter = y;
  var v = function(t2) {
    function e2() {
      return null !== t2 && t2.apply(this, arguments) || this;
    }
    return i(e2, t2), e2;
  }(f);
  r.PropertyPart = v;
  var m = false;
  try {
    var _ = { get capture() {
      return !(m = true);
    } };
    window.addEventListener("test", _, _), window.removeEventListener("test", _, _);
  } catch (t2) {
  }
  var g = function() {
    function t2(t3, e2, r2) {
      var n2 = this;
      this.value = void 0, this._pendingValue = void 0, this.element = t3, this.eventName = e2, this.eventContext = r2, this._boundHandleEvent = function(t4) {
        return n2.handleEvent(t4);
      };
    }
    return t2.prototype.setValue = function(t3) {
      this._pendingValue = t3;
    }, t2.prototype.commit = function() {
      for (; s.isDirective(this._pendingValue); ) {
        var t3 = this._pendingValue;
        this._pendingValue = u.noChange, t3(this);
      }
      if (this._pendingValue !== u.noChange) {
        var e2 = this._pendingValue, r2 = this.value, n2 = null == e2 || null != r2 && (e2.capture !== r2.capture || e2.once !== r2.once || e2.passive !== r2.passive), o2 = null != e2 && (null == r2 || n2);
        n2 && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options), o2 && (this._options = b(e2), this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options)), this.value = e2, this._pendingValue = u.noChange;
      }
    }, t2.prototype.handleEvent = function(t3) {
      "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t3) : this.value.handleEvent(t3);
    }, t2;
  }();
  r.EventPart = g;
  var b = function(t2) {
    return t2 && (m ? { capture: t2.capture, passive: t2.passive, once: t2.once } : t2.capture);
  };
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var n = r(1), l = r(0), o = function() {
    function t2(t3, e2, r2) {
      this._parts = [], this.template = t3, this.processor = e2, this.options = r2;
    }
    return t2.prototype.update = function(t3) {
      for (var e2 = 0, r2 = 0, n2 = this._parts; r2 < n2.length; r2++) {
        void 0 !== (s = n2[r2]) && s.setValue(t3[e2]), e2++;
      }
      for (var o2 = 0, i = this._parts; o2 < i.length; o2++) {
        var s;
        void 0 !== (s = i[o2]) && s.commit();
      }
    }, t2.prototype._clone = function() {
      var s = this, t3 = n.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true), a = this.template.parts, u = 0, c = 0, p = function(t4) {
        for (var e2, r2 = document.createTreeWalker(t4, 133, null, false), n2 = r2.nextNode(); u < a.length && null !== n2; ) {
          var o2 = a[u];
          if (l.isTemplatePartActive(o2))
            if (c === o2.index) {
              if ("node" === o2.type) {
                var i = s.processor.handleTextExpression(s.options);
                i.insertAfterNode(n2.previousSibling), s._parts.push(i);
              } else
                (e2 = s._parts).push.apply(e2, s.processor.handleAttributeExpressions(n2, o2.name, o2.strings, s.options));
              u++;
            } else
              c++, "TEMPLATE" === n2.nodeName && p(n2.content), n2 = r2.nextNode();
          else
            s._parts.push(void 0), u++;
        }
      };
      return p(t3), n.isCEPolyfill && (document.adoptNode(t3), customElements.upgrade(t3)), t3;
    }, t2;
  }();
  e.TemplateInstance = o;
}, function(t, o, e) {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: true });
  var i = e(0);
  o.templateFactory = function(t2) {
    var e2 = o.templateCaches.get(t2.type);
    void 0 === e2 && (e2 = { stringsArray: /* @__PURE__ */ new WeakMap(), keyString: /* @__PURE__ */ new Map() }, o.templateCaches.set(t2.type, e2));
    var r = e2.stringsArray.get(t2.strings);
    if (void 0 !== r)
      return r;
    var n = t2.strings.join(i.marker);
    return void 0 === (r = e2.keyString.get(n)) && (r = new i.Template(t2, t2.getTemplateElement()), e2.keyString.set(n, r)), e2.stringsArray.set(t2.strings, r), r;
  }, o.templateCaches = /* @__PURE__ */ new Map();
}, function(t, e, r) {
  "use strict";
  t.exports = function(r2) {
    var s = [];
    return s.toString = function() {
      return this.map(function(t2) {
        var e2 = function(t3, e3) {
          var r3 = t3[1] || "", n = t3[3];
          if (!n)
            return r3;
          if (e3 && "function" == typeof btoa) {
            var o = (s2 = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s2)))) + " */"), i = n.sources.map(function(t4) {
              return "/*# sourceURL=" + n.sourceRoot + t4 + " */";
            });
            return [r3].concat(i).concat([o]).join("\n");
          }
          var s2;
          return [r3].join("\n");
        }(t2, r2);
        return t2[2] ? "@media " + t2[2] + "{" + e2 + "}" : e2;
      }).join("");
    }, s.i = function(t2, e2) {
      "string" == typeof t2 && (t2 = [[null, t2, ""]]);
      for (var r3 = {}, n = 0; n < this.length; n++) {
        var o = this[n][0];
        null != o && (r3[o] = true);
      }
      for (n = 0; n < t2.length; n++) {
        var i = t2[n];
        null != i[0] && r3[i[0]] || (e2 && !i[2] ? i[2] = e2 : e2 && (i[2] = "(" + i[2] + ") and (" + e2 + ")"), s.push(i));
      }
    }, s;
  };
}, function(t, e) {
  t.exports = function(t2) {
    return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
  };
}, function(t, e, r) {
  t.exports = !r(25)(function() {
    return 7 != Object.defineProperty({}, "a", { get: function() {
      return 7;
    } }).a;
  });
}, function(t, e, r) {
  "use strict";
  var n, o = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  }), i = this && this.__makeTemplateObject || function(t2, e2) {
    return Object.defineProperty ? Object.defineProperty(t2, "raw", { value: e2 }) : t2.raw = e2, t2;
  }, s = this && this.__decorate || function(t2, e2, r2, n2) {
    var o2, i2 = arguments.length, s2 = i2 < 3 ? e2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(e2, r2) : n2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      s2 = Reflect.decorate(t2, e2, r2, n2);
    else
      for (var a2 = t2.length - 1; 0 <= a2; a2--)
        (o2 = t2[a2]) && (s2 = (i2 < 3 ? o2(s2) : 3 < i2 ? o2(e2, r2, s2) : o2(e2, r2)) || s2);
    return 3 < i2 && s2 && Object.defineProperty(e2, r2, s2), s2;
  }, a = this && this.__metadata || function(t2, e2) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(t2, e2);
  }, u = this && this.__importDefault || function(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  };
  Object.defineProperty(e, "__esModule", { value: true });
  var c, p = r(6), l = u(r(34)), f = function(e2) {
    function t2() {
      var t3 = null !== e2 && e2.apply(this, arguments) || this;
      return t3.src = "", t3.placeholder = "", t3.visible = false, t3.previewVisible = true, t3.loaded = false, t3.onImageLoad = function() {
        t3.shadowRoot.querySelector(".placeholder").animate({ opacity: [1, 0] }, { duration: 1e3, fill: "forwards" }), t3.loaded = true;
      }, t3;
    }
    return o(t2, e2), t2.prototype.updated = function() {
      if (this.visible && !this.loaded) {
        var t3 = this.shadowRoot.querySelector(".story");
        t3.src = t3.getAttribute("data-src");
      }
    }, t2.prototype.render = function() {
      return p.html(c || (c = i(['\n      <div class="', '">\n        <img class="story" data-src="', '" .onload="', '"/>\n        <img class="placeholder" src="', '"/>\n      </div>\n      <style>\n        ', "\n        :host {\n          opacity: ", ";\n        }\n      </style>\n    "], ['\n      <div class="', '">\n        <img class="story" data-src="', '" .onload="', '"/>\n        <img class="placeholder" src="', '"/>\n      </div>\n      <style>\n        ', "\n        :host {\n          opacity: ", ";\n        }\n      </style>\n    "])), this.cssClass, this.src, this.onImageLoad, this.placeholder, l.default.toString(), 1);
    }, Object.defineProperty(t2.prototype, "cssClass", { get: function() {
      return ["stories__container__story", this.visible ? "visible" : ""].join(" ");
    }, enumerable: true, configurable: true }), s([p.property({ type: String }), a("design:type", Object)], t2.prototype, "src", void 0), s([p.property({ type: String }), a("design:type", Object)], t2.prototype, "placeholder", void 0), s([p.property({ type: Boolean }), a("design:type", Object)], t2.prototype, "visible", void 0), s([p.property(), a("design:type", Object)], t2.prototype, "previewVisible", void 0), t2 = s([p.customElement("wc-stories-story")], t2);
  }(p.LitElement);
  e.Story = f;
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var i = r(8), n = function() {
    function t2() {
    }
    return t2.prototype.handleAttributeExpressions = function(t3, e2, r2, n2) {
      var o = e2[0];
      return "." === o ? new i.PropertyCommitter(t3, e2.slice(1), r2).parts : "@" === o ? [new i.EventPart(t3, e2.slice(1), n2.eventContext)] : "?" === o ? [new i.BooleanAttributePart(t3, e2.slice(1), r2)] : new i.AttributeCommitter(t3, e2, r2).parts;
    }, t2.prototype.handleTextExpression = function(t3) {
      return new i.NodePart(t3);
    }, t2;
  }();
  e.DefaultTemplateProcessor = n, e.defaultTemplateProcessor = new n();
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var o = /* @__PURE__ */ new WeakMap();
  e.directive = function(n) {
    return function() {
      for (var t2 = [], e2 = 0; e2 < arguments.length; e2++)
        t2[e2] = arguments[e2];
      var r2 = n.apply(void 0, t2);
      return o.set(r2, true), r2;
    };
  }, e.isDirective = function(t2) {
    return "function" == typeof t2 && o.has(t2);
  };
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.noChange = {}, e.nothing = {};
}, function(t, o, e) {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: true });
  var i = e(1), s = e(8), a = e(10);
  o.parts = /* @__PURE__ */ new WeakMap(), o.render = function(t2, e2, r) {
    var n = o.parts.get(e2);
    void 0 === n && (i.removeNodes(e2, e2.firstChild), o.parts.set(e2, n = new s.NodePart(Object.assign({ templateFactory: a.templateFactory }, r))), n.appendInto(e2)), n.setValue(t2), n.commit();
  };
}, function(t, i, e) {
  "use strict";
  var n, r = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  }), o = this && this.__awaiter || function(i2, s2, a2, u2) {
    return new (a2 || (a2 = Promise))(function(t2, e2) {
      function r2(t3) {
        try {
          o2(u2.next(t3));
        } catch (t4) {
          e2(t4);
        }
      }
      function n2(t3) {
        try {
          o2(u2.throw(t3));
        } catch (t4) {
          e2(t4);
        }
      }
      function o2(e3) {
        e3.done ? t2(e3.value) : new a2(function(t3) {
          t3(e3.value);
        }).then(r2, n2);
      }
      o2((u2 = u2.apply(i2, s2 || [])).next());
    });
  }, s = this && this.__generator || function(r2, n2) {
    var o2, i2, s2, t2, a2 = { label: 0, sent: function() {
      if (1 & s2[0])
        throw s2[1];
      return s2[1];
    }, trys: [], ops: [] };
    return t2 = { next: e2(0), throw: e2(1), return: e2(2) }, "function" == typeof Symbol && (t2[Symbol.iterator] = function() {
      return this;
    }), t2;
    function e2(e3) {
      return function(t3) {
        return function(e4) {
          if (o2)
            throw new TypeError("Generator is already executing.");
          for (; a2; )
            try {
              if (o2 = 1, i2 && (s2 = 2 & e4[0] ? i2.return : e4[0] ? i2.throw || ((s2 = i2.return) && s2.call(i2), 0) : i2.next) && !(s2 = s2.call(i2, e4[1])).done)
                return s2;
              switch (i2 = 0, s2 && (e4 = [2 & e4[0], s2.value]), e4[0]) {
                case 0:
                case 1:
                  s2 = e4;
                  break;
                case 4:
                  return a2.label++, { value: e4[1], done: false };
                case 5:
                  a2.label++, i2 = e4[1], e4 = [0];
                  continue;
                case 7:
                  e4 = a2.ops.pop(), a2.trys.pop();
                  continue;
                default:
                  if (!(s2 = 0 < (s2 = a2.trys).length && s2[s2.length - 1]) && (6 === e4[0] || 2 === e4[0])) {
                    a2 = 0;
                    continue;
                  }
                  if (3 === e4[0] && (!s2 || e4[1] > s2[0] && e4[1] < s2[3])) {
                    a2.label = e4[1];
                    break;
                  }
                  if (6 === e4[0] && a2.label < s2[1]) {
                    a2.label = s2[1], s2 = e4;
                    break;
                  }
                  if (s2 && a2.label < s2[2]) {
                    a2.label = s2[2], a2.ops.push(e4);
                    break;
                  }
                  s2[2] && a2.ops.pop(), a2.trys.pop();
                  continue;
              }
              e4 = n2.call(r2, a2);
            } catch (t4) {
              e4 = [6, t4], i2 = 0;
            } finally {
              o2 = s2 = 0;
            }
          if (5 & e4[0])
            throw e4[1];
          return { value: e4[0] ? e4[1] : void 0, done: true };
        }([e3, t3]);
      };
    }
  };
  Object.defineProperty(i, "__esModule", { value: true }), window.JSCompiler_renameProperty = function(t2, e2) {
    return t2;
  }, i.defaultConverter = { toAttribute: function(t2, e2) {
    switch (e2) {
      case Boolean:
        return t2 ? "" : null;
      case Object:
      case Array:
        return null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute: function(t2, e2) {
    switch (e2) {
      case Boolean:
        return null !== t2;
      case Number:
        return null === t2 ? null : Number(t2);
      case Object:
      case Array:
        return JSON.parse(t2);
    }
    return t2;
  } }, i.notEqual = function(t2, e2) {
    return e2 !== t2 && (e2 == e2 || t2 == t2);
  };
  var a = { attribute: true, type: String, converter: i.defaultConverter, reflect: false, hasChanged: i.notEqual }, u = Promise.resolve(true), c = function(e2) {
    function t2() {
      var t3 = e2.call(this) || this;
      return t3._updateState = 0, t3._instanceProperties = void 0, t3._updatePromise = u, t3._hasConnectedResolver = void 0, t3._changedProperties = /* @__PURE__ */ new Map(), t3._reflectingProperties = void 0, t3.initialize(), t3;
    }
    return r(t2, e2), Object.defineProperty(t2, "observedAttributes", { get: function() {
      var n2 = this;
      this.finalize();
      var o2 = [];
      return this._classProperties.forEach(function(t3, e3) {
        var r2 = n2._attributeNameForProperty(e3, t3);
        void 0 !== r2 && (n2._attributeToPropertyMap.set(r2, e3), o2.push(r2));
      }), o2;
    }, enumerable: true, configurable: true }), t2._ensureClassProperties = function() {
      var r2 = this;
      if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
        this._classProperties = /* @__PURE__ */ new Map();
        var t3 = Object.getPrototypeOf(this)._classProperties;
        void 0 !== t3 && t3.forEach(function(t4, e3) {
          return r2._classProperties.set(e3, t4);
        });
      }
    }, t2.createProperty = function(r2, t3) {
      if (void 0 === t3 && (t3 = a), this._ensureClassProperties(), this._classProperties.set(r2, t3), !t3.noAccessor && !this.prototype.hasOwnProperty(r2)) {
        var n2 = "symbol" == typeof r2 ? Symbol() : "__" + r2;
        Object.defineProperty(this.prototype, r2, { get: function() {
          return this[n2];
        }, set: function(t4) {
          var e3 = this[r2];
          this[n2] = t4, this.requestUpdate(r2, e3);
        }, configurable: true, enumerable: true });
      }
    }, t2.finalize = function() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) || !this.finalized) {
        var t3 = Object.getPrototypeOf(this);
        if ("function" == typeof t3.finalize && t3.finalize(), this.finalized = true, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
          for (var e3 = this.properties, r2 = 0, n2 = Object.getOwnPropertyNames(e3).concat("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e3) : []); r2 < n2.length; r2++) {
            var o2 = n2[r2];
            this.createProperty(o2, e3[o2]);
          }
      }
    }, t2._attributeNameForProperty = function(t3, e3) {
      var r2 = e3.attribute;
      return false === r2 ? void 0 : "string" == typeof r2 ? r2 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }, t2._valueHasChanged = function(t3, e3, r2) {
      return void 0 === r2 && (r2 = i.notEqual), r2(t3, e3);
    }, t2._propertyValueFromAttribute = function(t3, e3) {
      var r2 = e3.type, n2 = e3.converter || i.defaultConverter, o2 = "function" == typeof n2 ? n2 : n2.fromAttribute;
      return o2 ? o2(t3, r2) : t3;
    }, t2._propertyValueToAttribute = function(t3, e3) {
      if (void 0 !== e3.reflect) {
        var r2 = e3.type, n2 = e3.converter;
        return (n2 && n2.toAttribute || i.defaultConverter.toAttribute)(t3, r2);
      }
    }, t2.prototype.initialize = function() {
      this._saveInstanceProperties();
    }, t2.prototype._saveInstanceProperties = function() {
      var n2 = this;
      this.constructor._classProperties.forEach(function(t3, e3) {
        if (n2.hasOwnProperty(e3)) {
          var r2 = n2[e3];
          delete n2[e3], n2._instanceProperties || (n2._instanceProperties = /* @__PURE__ */ new Map()), n2._instanceProperties.set(e3, r2);
        }
      });
    }, t2.prototype._applyInstanceProperties = function() {
      var r2 = this;
      this._instanceProperties.forEach(function(t3, e3) {
        return r2[e3] = t3;
      }), this._instanceProperties = void 0;
    }, t2.prototype.connectedCallback = function() {
      this._updateState = 32 | this._updateState, this._hasConnectedResolver ? (this._hasConnectedResolver(), this._hasConnectedResolver = void 0) : this.requestUpdate();
    }, t2.prototype.disconnectedCallback = function() {
    }, t2.prototype.attributeChangedCallback = function(t3, e3, r2) {
      e3 !== r2 && this._attributeToProperty(t3, r2);
    }, t2.prototype._propertyToAttribute = function(t3, e3, r2) {
      void 0 === r2 && (r2 = a);
      var n2 = this.constructor, o2 = n2._attributeNameForProperty(t3, r2);
      if (void 0 !== o2) {
        var i2 = n2._propertyValueToAttribute(e3, r2);
        if (void 0 === i2)
          return;
        this._updateState = 8 | this._updateState, null == i2 ? this.removeAttribute(o2) : this.setAttribute(o2, i2), this._updateState = -9 & this._updateState;
      }
    }, t2.prototype._attributeToProperty = function(t3, e3) {
      if (!(8 & this._updateState)) {
        var r2 = this.constructor, n2 = r2._attributeToPropertyMap.get(t3);
        if (void 0 !== n2) {
          var o2 = r2._classProperties.get(n2) || a;
          this._updateState = 16 | this._updateState, this[n2] = r2._propertyValueFromAttribute(e3, o2), this._updateState = -17 & this._updateState;
        }
      }
    }, t2.prototype.requestUpdate = function(t3, e3) {
      var r2 = true;
      if (void 0 !== t3 && !this._changedProperties.has(t3)) {
        var n2 = this.constructor, o2 = n2._classProperties.get(t3) || a;
        n2._valueHasChanged(this[t3], e3, o2.hasChanged) ? (this._changedProperties.set(t3, e3), true !== o2.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t3, o2))) : r2 = false;
      }
      return !this._hasRequestedUpdate && r2 && this._enqueueUpdate(), this.updateComplete;
    }, t2.prototype._enqueueUpdate = function() {
      return o(this, void 0, void 0, function() {
        var e3, r2, n2, o2 = this;
        return s(this, function(t3) {
          switch (t3.label) {
            case 0:
              return this._updateState = 4 | this._updateState, r2 = this._updatePromise, this._updatePromise = new Promise(function(t4) {
                return e3 = t4;
              }), [4, r2];
            case 1:
              return t3.sent(), this._hasConnected ? [3, 3] : [4, new Promise(function(t4) {
                return o2._hasConnectedResolver = t4;
              })];
            case 2:
              t3.sent(), t3.label = 3;
            case 3:
              return null == (n2 = this.performUpdate()) || "function" != typeof n2.then ? [3, 5] : [4, n2];
            case 4:
              t3.sent(), t3.label = 5;
            case 5:
              return e3(!this._hasRequestedUpdate), [2];
          }
        });
      });
    }, Object.defineProperty(t2.prototype, "_hasConnected", { get: function() {
      return 32 & this._updateState;
    }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "_hasRequestedUpdate", { get: function() {
      return 4 & this._updateState;
    }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "hasUpdated", { get: function() {
      return 1 & this._updateState;
    }, enumerable: true, configurable: true }), t2.prototype.performUpdate = function() {
      if (this._instanceProperties && this._applyInstanceProperties(), this.shouldUpdate(this._changedProperties)) {
        var t3 = this._changedProperties;
        this.update(t3), this._markUpdated(), 1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t3)), this.updated(t3);
      } else
        this._markUpdated();
    }, t2.prototype._markUpdated = function() {
      this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = -5 & this._updateState;
    }, Object.defineProperty(t2.prototype, "updateComplete", { get: function() {
      return this._updatePromise;
    }, enumerable: true, configurable: true }), t2.prototype.shouldUpdate = function(t3) {
      return true;
    }, t2.prototype.update = function(t3) {
      var r2 = this;
      void 0 !== this._reflectingProperties && 0 < this._reflectingProperties.size && (this._reflectingProperties.forEach(function(t4, e3) {
        return r2._propertyToAttribute(e3, r2[e3], t4);
      }), this._reflectingProperties = void 0);
    }, t2.prototype.updated = function(t3) {
    }, t2.prototype.firstUpdated = function(t3) {
    }, t2;
  }(HTMLElement);
  (i.UpdatingElement = c).finalized = true;
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.supportsAdoptingStyleSheets = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var o = Symbol(), i = function() {
    function t2(t3, e2) {
      if (e2 !== o)
        throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3;
    }
    return Object.defineProperty(t2.prototype, "styleSheet", { get: function() {
      return void 0 === this._styleSheet && (e.supportsAdoptingStyleSheets ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
    }, enumerable: true, configurable: true }), t2.prototype.toString = function() {
      return this.cssText;
    }, t2;
  }();
  e.CSSResult = i, e.unsafeCSS = function(t2) {
    return new i(String(t2), o);
  };
  e.css = function(n) {
    for (var t2 = [], e2 = 1; e2 < arguments.length; e2++)
      t2[e2 - 1] = arguments[e2];
    var r2 = t2.reduce(function(t3, e3, r3) {
      return t3 + function(t4) {
        if (t4 instanceof i)
          return t4.cssText;
        throw new Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.");
      }(e3) + n[r3 + 1];
    }, n[0]);
    return new i(r2, o);
  };
}, function(t, e, r) {
  var i = r(40);
  t.exports = function(n, o, t2) {
    if (i(n), void 0 === o)
      return n;
    switch (t2) {
      case 1:
        return function(t3) {
          return n.call(o, t3);
        };
      case 2:
        return function(t3, e2) {
          return n.call(o, t3, e2);
        };
      case 3:
        return function(t3, e2, r2) {
          return n.call(o, t3, e2, r2);
        };
    }
    return function() {
      return n.apply(o, arguments);
    };
  };
}, function(t, e, r) {
  var n = r(23), o = r(26);
  t.exports = r(13) ? function(t2, e2, r2) {
    return n.f(t2, e2, o(1, r2));
  } : function(t2, e2, r2) {
    return t2[e2] = r2, t2;
  };
}, function(t, e, r) {
  var n = r(24), o = r(42), i = r(44), s = Object.defineProperty;
  e.f = r(13) ? Object.defineProperty : function(t2, e2, r2) {
    if (n(t2), e2 = i(e2, true), n(r2), o)
      try {
        return s(t2, e2, r2);
      } catch (t3) {
      }
    if ("get" in r2 || "set" in r2)
      throw TypeError("Accessors not supported!");
    return "value" in r2 && (t2[e2] = r2.value), t2;
  };
}, function(t, e, r) {
  var n = r(12);
  t.exports = function(t2) {
    if (!n(t2))
      throw TypeError(t2 + " is not an object!");
    return t2;
  };
}, function(t, e) {
  t.exports = function(t2) {
    try {
      return !!t2();
    } catch (t3) {
      return true;
    }
  };
}, function(t, e) {
  t.exports = function(t2, e2) {
    return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
  };
}, function(t, e) {
  var r = 0, n = Math.random();
  t.exports = function(t2) {
    return "Symbol(".concat(void 0 === t2 ? "" : t2, ")_", (++r + n).toString(36));
  };
}, function(t, e, r) {
  var n = r(4), o = r(2), i = "__core-js_shared__", s = o[i] || (o[i] = {});
  (t.exports = function(t2, e2) {
    return s[t2] || (s[t2] = void 0 !== e2 ? e2 : {});
  })("versions", []).push({ version: n.version, mode: r(48) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
}, function(t, e) {
  t.exports = {};
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), r(14), r(35);
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var p = r(1), c = r(32), l = r(18), f = r(10), d = r(9), h = r(3), y = r(0), n = r(7);
  e.html = n.html, e.svg = n.svg, e.TemplateResult = n.TemplateResult;
  var v = function(t2, e2) {
    return t2 + "--" + e2;
  }, m = true;
  void 0 === window.ShadyCSS ? m = false : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), m = false);
  var _ = ["html", "svg"], g = /* @__PURE__ */ new Set(), b = function(t2, e2, r2) {
    g.add(r2);
    var n2 = t2.querySelectorAll("style");
    if (0 !== n2.length) {
      for (var o, i = document.createElement("style"), s = 0; s < n2.length; s++) {
        (a = n2[s]).parentNode.removeChild(a), i.textContent += a.textContent;
      }
      if (o = r2, _.forEach(function(t3) {
        var e3 = f.templateCaches.get(v(t3, o));
        void 0 !== e3 && e3.keyString.forEach(function(t4) {
          var e4 = t4.element.content, r3 = /* @__PURE__ */ new Set();
          Array.from(e4.querySelectorAll("style")).forEach(function(t5) {
            r3.add(t5);
          }), c.removeNodesFromTemplate(t4, r3);
        });
      }), c.insertNodeIntoTemplate(e2, i, e2.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(e2.element, r2), window.ShadyCSS.nativeShadow) {
        var a = e2.element.content.querySelector("style");
        t2.insertBefore(a.cloneNode(true), t2.firstChild);
      } else {
        e2.element.content.insertBefore(i, e2.element.content.firstChild);
        var u = /* @__PURE__ */ new Set();
        u.add(i), c.removeNodesFromTemplate(e2, u);
      }
    } else
      window.ShadyCSS.prepareTemplateStyles(e2.element, r2);
  };
  e.render = function(t2, e2, r2) {
    var s, n2 = r2.scopeName, o = l.parts.has(e2), i = e2 instanceof ShadowRoot && m && t2 instanceof h.TemplateResult, a = i && !g.has(n2), u = a ? document.createDocumentFragment() : e2;
    if (l.render(t2, u, Object.assign({ templateFactory: (s = n2, function(t3) {
      var e3 = v(t3.type, s), r3 = f.templateCaches.get(e3);
      void 0 === r3 && (r3 = { stringsArray: /* @__PURE__ */ new WeakMap(), keyString: /* @__PURE__ */ new Map() }, f.templateCaches.set(e3, r3));
      var n3 = r3.stringsArray.get(t3.strings);
      if (void 0 !== n3)
        return n3;
      var o2 = t3.strings.join(y.marker);
      if (void 0 === (n3 = r3.keyString.get(o2))) {
        var i2 = t3.getTemplateElement();
        m && window.ShadyCSS.prepareTemplateDom(i2, s), n3 = new y.Template(t3, i2), r3.keyString.set(o2, n3);
      }
      return r3.stringsArray.set(t3.strings, n3), n3;
    }) }, r2)), a) {
      var c2 = l.parts.get(u);
      l.parts.delete(u), c2.value instanceof d.TemplateInstance && b(u, c2.value.template, n2), p.removeNodes(e2, e2.firstChild), e2.appendChild(u), l.parts.set(e2, c2);
    }
    !o && i && window.ShadyCSS.styleElement(e2.host);
  };
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var o = r(0);
  e.removeNodesFromTemplate = function(t2, e2) {
    for (var r2 = t2.element.content, n = t2.parts, o2 = document.createTreeWalker(r2, 133, null, false), i = f(n), s = n[i], a = -1, u = 0, c2 = [], p = null; o2.nextNode(); ) {
      a++;
      var l = o2.currentNode;
      for (l.previousSibling === p && (p = null), e2.has(l) && (c2.push(l), null === p && (p = l)), null !== p && u++; void 0 !== s && s.index === a; )
        s.index = null !== p ? -1 : s.index - u, s = n[i = f(n, i)];
    }
    c2.forEach(function(t3) {
      return t3.parentNode.removeChild(t3);
    });
  };
  var c = function(t2) {
    for (var e2 = 11 === t2.nodeType ? 0 : 1, r2 = document.createTreeWalker(t2, 133, null, false); r2.nextNode(); )
      e2++;
    return e2;
  }, f = function(t2, e2) {
    void 0 === e2 && (e2 = -1);
    for (var r2 = e2 + 1; r2 < t2.length; r2++) {
      var n = t2[r2];
      if (o.isTemplatePartActive(n))
        return r2;
    }
    return -1;
  };
  e.insertNodeIntoTemplate = function(t2, e2, r2) {
    void 0 === r2 && (r2 = null);
    var n = t2.element.content, o2 = t2.parts;
    if (null != r2)
      for (var i = document.createTreeWalker(n, 133, null, false), s = f(o2), a = 0, u = -1; i.nextNode(); )
        for (u++, i.currentNode === r2 && (a = c(e2), r2.parentNode.insertBefore(e2, r2)); -1 !== s && o2[s].index === u; ) {
          if (0 < a) {
            for (; -1 !== s; )
              o2[s].index += a, s = f(o2, s);
            return;
          }
          s = f(o2, s);
        }
    else
      n.appendChild(e2);
  };
}, function(t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  e.customElement = function(i2) {
    return function(t2) {
      return "function" == typeof t2 ? (n2 = i2, o = t2, window.customElements.define(n2, o), o) : (e2 = i2, { kind: (r2 = t2).kind, elements: r2.elements, finisher: function(t3) {
        window.customElements.define(e2, t3);
      } });
      var e2, r2, n2, o;
    };
  };
  e.property = function(s2) {
    return function(t2, e2) {
      return void 0 !== e2 ? (o = s2, i2 = e2, void t2.constructor.createProperty(i2, o)) : (r2 = s2, "method" !== (n2 = t2).kind || !n2.descriptor || "value" in n2.descriptor ? { kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer: function() {
        "function" == typeof n2.initializer && (this[n2.key] = n2.initializer.call(this));
      }, finisher: function(t3) {
        t3.createProperty(n2.key, r2);
      } } : Object.assign({}, n2, { finisher: function(t3) {
        t3.createProperty(n2.key, r2);
      } }));
      var r2, n2, o, i2;
    };
  }, e.query = n(function(t2, e2) {
    return t2.querySelector(e2);
  }), e.queryAll = n(function(t2, e2) {
    return t2.querySelectorAll(e2);
  });
  var i = function(t2, e2, r2) {
    Object.defineProperty(e2, r2, t2);
  }, s = function(t2, e2) {
    return { kind: "method", placement: "prototype", key: e2.key, descriptor: t2 };
  };
  function n(o) {
    return function(n2) {
      return function(t2, e2) {
        var r2 = { get: function() {
          return o(this.renderRoot, n2);
        }, enumerable: true, configurable: true };
        return void 0 !== e2 ? i(r2, t2, e2) : s(r2, t2);
      };
    };
  }
  e.eventOptions = function(a) {
    return function(t2, e2) {
      return void 0 !== e2 ? (o = a, i2 = t2, s2 = e2, void Object.assign(i2[s2], o)) : (r2 = a, n2 = t2, Object.assign({}, n2, { finisher: function(t3) {
        Object.assign(t3.prototype[n2.key], r2);
      } }));
      var r2, n2, o, i2, s2;
    };
  };
}, function(t, e, r) {
  (t.exports = r(11)(false)).push([t.i, "*,:after,:before{box-sizing:border-box;margin:0;padding:0}:host{height:100%;left:0;position:absolute;top:0;width:100%}:host .stories__container__story{background-color:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;opacity:0;position:relative;transition:opacity .5s ease}:host .stories__container__story img{display:block;max-height:100%;max-width:100%;z-index:1}:host .stories__container__story .placeholder{left:0;pointer-events:none;position:absolute;top:0;z-index:2}:host .stories__container__story .placeholder.hidden{opacity:0}:host .stories__container__story.visible{opacity:1}", ""]);
}, function(t, e, r) {
  "use strict";
  var n, o = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  }), i = this && this.__makeTemplateObject || function(t2, e2) {
    return Object.defineProperty ? Object.defineProperty(t2, "raw", { value: e2 }) : t2.raw = e2, t2;
  }, s = this && this.__decorate || function(t2, e2, r2, n2) {
    var o2, i2 = arguments.length, s2 = i2 < 3 ? e2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(e2, r2) : n2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      s2 = Reflect.decorate(t2, e2, r2, n2);
    else
      for (var a2 = t2.length - 1; 0 <= a2; a2--)
        (o2 = t2[a2]) && (s2 = (i2 < 3 ? o2(s2) : 3 < i2 ? o2(e2, r2, s2) : o2(e2, r2)) || s2);
    return 3 < i2 && s2 && Object.defineProperty(e2, r2, s2), s2;
  }, a = this && this.__metadata || function(t2, e2) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(t2, e2);
  }, u = this && this.__importDefault || function(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  };
  Object.defineProperty(e, "__esModule", { value: true });
  var c = r(6), p = u(r(36));
  r(37);
  var l, f = r(14), d = function(t2) {
    function e2() {
      var r2 = null !== t2 && t2.apply(this, arguments) || this;
      return r2.duration = 5e3, r2.effect = "fade", r2.startAt = 0, r2.withShadow = false, r2.radius = 0, r2.height = 480, r2.width = 320, r2.handler = { onAnimationEnd: function() {
        r2.startAt = r2.startAt < r2.children.length - 1 ? r2.startAt + 1 : 0, r2.renderNewImage();
      } }, r2.goPrevious = function() {
        r2.startAt = 0 < r2.startAt ? r2.startAt - 1 : 0, r2.renderNewImage();
      }, r2.goNext = function() {
        r2.startAt = r2.startAt < r2.children.length - 1 ? r2.startAt + 1 : 0, r2.renderNewImage();
      }, r2._onOrientationChange = function() {
        var t3 = r2.width, e3 = r2.height;
        r2.width = e3, r2.height = t3;
      }, r2;
    }
    return o(e2, t2), e2.prototype.render = function() {
      return c.html(l || (l = i(['\n      <wc-stories-progress\n        segments="', '"\n        duration="', '"\n        current="', '"\n        .handler="', '"\n      >\n      </wc-stories-progress>\n      <section class="touch-panel">\n        <div @click="', '"></div>\n        <div @click="', '"></div>\n      </section>\n      <!-- Children -->\n      <slot></slot>\n      <style>\n        ', "\n        :host {\n          border-radius: ", "px;\n          box-shadow: ", "\n          height: ", "px;\n          width: ", "px;\n        }\n      </style>\n    "], ['\n      <wc-stories-progress\n        segments="', '"\n        duration="', '"\n        current="', '"\n        .handler="', '"\n      >\n      </wc-stories-progress>\n      <section class="touch-panel">\n        <div @click="', '"></div>\n        <div @click="', '"></div>\n      </section>\n      <!-- Children -->\n      <slot></slot>\n      <style>\n        ', "\n        :host {\n          border-radius: ", "px;\n          box-shadow: ", "\n          height: ", "px;\n          width: ", "px;\n        }\n      </style>\n    "])), this.children.length, this.duration, this.startAt, this.handler, this.goPrevious, this.goNext, p.default.toString(), this.radius, this.withShadow ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);" : "none;", this.height, this.width);
    }, e2.prototype.firstUpdated = function() {
      window.addEventListener("orientationchange", this._onOrientationChange), this.renderNewImage();
    }, e2.prototype.renderNewImage = function() {
      var r2 = this;
      Array.from(this.children).forEach(function(t3, e3) {
        t3 instanceof f.Story && (t3.visible = r2.startAt === e3);
      });
    }, s([c.property({ type: Number }), a("design:type", Object)], e2.prototype, "duration", void 0), s([c.property({ type: String }), a("design:type", Object)], e2.prototype, "effect", void 0), s([c.property({ type: Number }), a("design:type", Object)], e2.prototype, "startAt", void 0), s([c.property({ type: Boolean }), a("design:type", Object)], e2.prototype, "withShadow", void 0), s([c.property({ type: Number }), a("design:type", Object)], e2.prototype, "radius", void 0), s([c.property({ type: Number }), a("design:type", Object)], e2.prototype, "height", void 0), s([c.property({ type: Number }), a("design:type", Object)], e2.prototype, "width", void 0), e2 = s([c.customElement("wc-stories")], e2);
  }(c.LitElement);
  e.WCStories = d;
}, function(t, e, r) {
  (t.exports = r(11)(false)).push([t.i, "*,:after,:before{box-sizing:border-box;margin:0;padding:0}:host{background-color:#f4f4f4;display:block;overflow:hidden;position:relative}:host.with--shadow{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}:host .touch-panel{background-color:transparent;display:flex;height:100%;opacity:0;position:absolute;top:0;width:100%;z-index:2}:host .touch-panel div:first-of-type,:host .touch-panel div:last-of-type{height:100%;flex:1}", ""]);
}, function(t, e, r) {
  "use strict";
  var n, o = this && this.__extends || (n = function(t2, e2) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r2 in e3)
        e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
    })(t2, e2);
  }, function(t2, e2) {
    function r2() {
      this.constructor = t2;
    }
    n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
  }), i = this && this.__makeTemplateObject || function(t2, e2) {
    return Object.defineProperty ? Object.defineProperty(t2, "raw", { value: e2 }) : t2.raw = e2, t2;
  }, s = this && this.__decorate || function(t2, e2, r2, n2) {
    var o2, i2 = arguments.length, s2 = i2 < 3 ? e2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(e2, r2) : n2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      s2 = Reflect.decorate(t2, e2, r2, n2);
    else
      for (var a2 = t2.length - 1; 0 <= a2; a2--)
        (o2 = t2[a2]) && (s2 = (i2 < 3 ? o2(s2) : 3 < i2 ? o2(e2, r2, s2) : o2(e2, r2)) || s2);
    return 3 < i2 && s2 && Object.defineProperty(e2, r2, s2), s2;
  }, a = this && this.__metadata || function(t2, e2) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(t2, e2);
  }, u = this && this.__importDefault || function(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  };
  Object.defineProperty(e, "__esModule", { value: true });
  var c = r(6), p = u(r(38));
  r(39);
  var l, f, d = function(e2) {
    function t2() {
      var t3 = null !== e2 && e2.apply(this, arguments) || this;
      return t3.segments = 0, t3.currentIndex = 0, t3.duration = 0, t3.handler = {}, t3;
    }
    return o(t2, e2), t2.prototype.render = function() {
      var e3 = this, t3 = Array.from({ length: 5 }, function(t4, e4) {
        return e4;
      });
      return c.html(f || (f = i(["\n      ", "\n      <style>\n        ", "\n      </style>\n    "], ["\n      ", "\n      <style>\n        ", "\n      </style>\n    "])), t3.map(function(t4) {
        return c.html(l || (l = i(['\n            <section\n              class="progress__bar"\n              style="width: calc(100% / ', ')"\n            >\n              <div id="track-', '" class="bar__track">\n              </div>\n            </section>\n          '], ['\n            <section\n              class="progress__bar"\n              style="width: calc(100% / ', ')"\n            >\n              <div id="track-', '" class="bar__track">\n              </div>\n            </section>\n          '])), e3.segments || 1, t4);
      }), p.default.toString());
    }, t2.prototype.updated = function() {
      this.animation && this.animation.cancel();
      var t3 = this.currentIndex, e3 = this.shadowRoot.querySelector("#track-" + t3);
      if (e3) {
        var r2 = { duration: this.duration, iterations: 1 };
        this.animation = e3.animate({ width: ["0%", "100%"] }, r2), this.animation.onfinish = this.handler.onAnimationEnd || function() {
        };
      }
    }, s([c.property({ type: Number }), a("design:type", Object)], t2.prototype, "segments", void 0), s([c.property({ type: Number, attribute: "current" }), a("design:type", Object)], t2.prototype, "currentIndex", void 0), s([c.property({ type: Number }), a("design:type", Object)], t2.prototype, "duration", void 0), s([c.property({ type: Object }), a("design:type", Object)], t2.prototype, "handler", void 0), t2 = s([c.customElement("wc-stories-progress")], t2);
  }(c.LitElement);
  e.Progress = d;
}, function(t, e, r) {
  (t.exports = r(11)(false)).push([t.i, "*,:after,:before{box-sizing:border-box;margin:0;padding:0}:host{align-items:center;display:flex;height:20px;justify-content:space-around;left:0;padding:0 5px;position:absolute;top:0;width:100%;z-index:3}:host .progress__bar{background-color:#555;border-radius:4px;height:2px;margin:0 5px}:host .progress__bar .bar__track{background-color:#fff;height:100%;width:0}", ""]);
}, function(t, e, r) {
  "use strict";
  var f = r(21), n = r(41), d = r(49), h = r(51), y = r(52), v = r(53), m = r(55), _ = r(56);
  n(n.S + n.F * !r(59)(function(t2) {
    Array.from(t2);
  }), "Array", { from: function(t2) {
    var e2, r2, n2, o, i = d(t2), s = "function" == typeof this ? this : Array, a = arguments.length, u = 1 < a ? arguments[1] : void 0, c = void 0 !== u, p = 0, l = _(i);
    if (c && (u = f(u, 2 < a ? arguments[2] : void 0, 2)), null == l || s == Array && y(l))
      for (r2 = new s(e2 = v(i.length)); p < e2; p++)
        m(r2, p, c ? u(i[p], p) : i[p]);
    else
      for (o = l.call(i), r2 = new s(); !(n2 = o.next()).done; p++)
        m(r2, p, c ? h(o, u, [n2.value, p], true) : n2.value);
    return r2.length = p, r2;
  } });
}, function(t, e) {
  t.exports = function(t2) {
    if ("function" != typeof t2)
      throw TypeError(t2 + " is not a function!");
    return t2;
  };
}, function(t, e, r) {
  var y = r(2), v = r(4), m = r(22), _ = r(45), g = r(21), b = "prototype", w = function(t2, e2, r2) {
    var n, o, i, s, a = t2 & w.F, u = t2 & w.G, c = t2 & w.S, p = t2 & w.P, l = t2 & w.B, f = u ? y : c ? y[e2] || (y[e2] = {}) : (y[e2] || {})[b], d = u ? v : v[e2] || (v[e2] = {}), h = d[b] || (d[b] = {});
    for (n in u && (r2 = e2), r2)
      i = ((o = !a && f && void 0 !== f[n]) ? f : r2)[n], s = l && o ? g(i, y) : p && "function" == typeof i ? g(Function.call, i) : i, f && _(f, n, i, t2 & w.U), d[n] != i && m(d, n, s), p && h[n] != i && (h[n] = i);
  };
  y.core = v, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, t.exports = w;
}, function(t, e, r) {
  t.exports = !r(13) && !r(25)(function() {
    return 7 != Object.defineProperty(r(43)("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
}, function(t, e, r) {
  var n = r(12), o = r(2).document, i = n(o) && n(o.createElement);
  t.exports = function(t2) {
    return i ? o.createElement(t2) : {};
  };
}, function(t, e, r) {
  var o = r(12);
  t.exports = function(t2, e2) {
    if (!o(t2))
      return t2;
    var r2, n;
    if (e2 && "function" == typeof (r2 = t2.toString) && !o(n = r2.call(t2)))
      return n;
    if ("function" == typeof (r2 = t2.valueOf) && !o(n = r2.call(t2)))
      return n;
    if (!e2 && "function" == typeof (r2 = t2.toString) && !o(n = r2.call(t2)))
      return n;
    throw TypeError("Can't convert object to primitive value");
  };
}, function(t, e, r) {
  var i = r(2), s = r(22), a = r(46), u = r(27)("src"), n = r(47), o = "toString", c = ("" + n).split(o);
  r(4).inspectSource = function(t2) {
    return n.call(t2);
  }, (t.exports = function(t2, e2, r2, n2) {
    var o2 = "function" == typeof r2;
    o2 && (a(r2, "name") || s(r2, "name", e2)), t2[e2] !== r2 && (o2 && (a(r2, u) || s(r2, u, t2[e2] ? "" + t2[e2] : c.join(String(e2)))), t2 === i ? t2[e2] = r2 : n2 ? t2[e2] ? t2[e2] = r2 : s(t2, e2, r2) : (delete t2[e2], s(t2, e2, r2)));
  })(Function.prototype, o, function() {
    return "function" == typeof this && this[u] || n.call(this);
  });
}, function(t, e) {
  var r = {}.hasOwnProperty;
  t.exports = function(t2, e2) {
    return r.call(t2, e2);
  };
}, function(t, e, r) {
  t.exports = r(28)("native-function-to-string", Function.toString);
}, function(t, e) {
  t.exports = false;
}, function(t, e, r) {
  var n = r(50);
  t.exports = function(t2) {
    return Object(n(t2));
  };
}, function(t, e) {
  t.exports = function(t2) {
    if (null == t2)
      throw TypeError("Can't call method on  " + t2);
    return t2;
  };
}, function(t, e, r) {
  var i = r(24);
  t.exports = function(e2, t2, r2, n) {
    try {
      return n ? t2(i(r2)[0], r2[1]) : t2(r2);
    } catch (t3) {
      var o = e2.return;
      throw void 0 !== o && i(o.call(e2)), t3;
    }
  };
}, function(t, e, r) {
  var n = r(29), o = r(5)("iterator"), i = Array.prototype;
  t.exports = function(t2) {
    return void 0 !== t2 && (n.Array === t2 || i[o] === t2);
  };
}, function(t, e, r) {
  var n = r(54), o = Math.min;
  t.exports = function(t2) {
    return 0 < t2 ? o(n(t2), 9007199254740991) : 0;
  };
}, function(t, e) {
  var r = Math.ceil, n = Math.floor;
  t.exports = function(t2) {
    return isNaN(t2 = +t2) ? 0 : (0 < t2 ? n : r)(t2);
  };
}, function(t, e, r) {
  "use strict";
  var n = r(23), o = r(26);
  t.exports = function(t2, e2, r2) {
    e2 in t2 ? n.f(t2, e2, o(0, r2)) : t2[e2] = r2;
  };
}, function(t, e, r) {
  var n = r(57), o = r(5)("iterator"), i = r(29);
  t.exports = r(4).getIteratorMethod = function(t2) {
    if (null != t2)
      return t2[o] || t2["@@iterator"] || i[n(t2)];
  };
}, function(t, e, r) {
  var o = r(58), i = r(5)("toStringTag"), s = "Arguments" == o(function() {
    return arguments;
  }());
  t.exports = function(t2) {
    var e2, r2, n;
    return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (r2 = function(t3, e3) {
      try {
        return t3[e3];
      } catch (t4) {
      }
    }(e2 = Object(t2), i)) ? r2 : s ? o(e2) : "Object" == (n = o(e2)) && "function" == typeof e2.callee ? "Arguments" : n;
  };
}, function(t, e) {
  var r = {}.toString;
  t.exports = function(t2) {
    return r.call(t2).slice(8, -1);
  };
}, function(t, e, r) {
  var i = r(5)("iterator"), s = false;
  try {
    var n = [7][i]();
    n.return = function() {
      s = true;
    }, Array.from(n, function() {
      throw 2;
    });
  } catch (t2) {
  }
  t.exports = function(t2, e2) {
    if (!e2 && !s)
      return false;
    var r2 = false;
    try {
      var n2 = [7], o = n2[i]();
      o.next = function() {
        return { done: r2 = true };
      }, n2[i] = function() {
        return o;
      }, t2(n2);
    } catch (t3) {
    }
    return r2;
  };
}]);
//# sourceMappingURL=@gugadev_wc-stories.js.map

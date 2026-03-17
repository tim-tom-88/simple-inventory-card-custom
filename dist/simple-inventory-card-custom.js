const t = '0.3.7',
  e = globalThis,
  i =
    e.ShadowRoot &&
    (void 0 === e.ShadyCSS || e.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  o = /* @__PURE__ */ Symbol(),
  n = /* @__PURE__ */ new WeakMap();
let r = class {
  constructor(t, e, i) {
    if (((this._$cssResult$ = !0), i !== o))
      throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    ((this.cssText = t), (this.t = e));
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (i && void 0 === t) {
      const i = void 0 !== e && 1 === e.length;
      (i && (t = n.get(e)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && n.set(e, t)));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const a = (t, ...e) => {
    const i =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, o) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(i) +
              t[o + 1],
            t[0],
          );
    return new r(i, t, o);
  },
  s = i
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = '';
              for (const i of t.cssRules) e += i.cssText;
              return ((t) => new r('string' == typeof t ? t : t + '', void 0, o))(e);
            })(t)
          : t,
  {
    is: l,
    defineProperty: d,
    getOwnPropertyDescriptor: c,
    getOwnPropertyNames: p,
    getOwnPropertySymbols: h,
    getPrototypeOf: u,
  } = Object,
  m = globalThis,
  g = m.trustedTypes,
  y = g ? g.emptyScript : '',
  f = m.reactiveElementPolyfillSupport,
  v = (t, e) => t,
  b = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? y : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (o) {
            i = null;
          }
      }
      return i;
    },
  },
  x = (t, e) => !l(t, e),
  _ = { attribute: !0, type: String, converter: b, reflect: !1, useDefault: !1, hasChanged: x };
((Symbol.metadata ??= /* @__PURE__ */ Symbol('metadata')),
  (m.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap()));
let $ = class extends HTMLElement {
  static addInitializer(t) {
    (this._$Ei(), (this.l ??= []).push(t));
  }
  static get observedAttributes() {
    return (this.finalize(), this._$Eh && [...this._$Eh.keys()]);
  }
  static createProperty(t, e = _) {
    if (
      (e.state && (e.attribute = !1),
      this._$Ei(),
      this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0),
      this.elementProperties.set(t, e),
      !e.noAccessor)
    ) {
      const i = /* @__PURE__ */ Symbol(),
        o = this.getPropertyDescriptor(t, i, e);
      void 0 !== o && d(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: o, set: n } = c(this.prototype, t) ?? {
      get() {
        return this[e];
      },
      set(t) {
        this[e] = t;
      },
    };
    return {
      get: o,
      set(e) {
        const r = o?.call(this);
        (n?.call(this, e), this.requestUpdate(t, r, i));
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? _;
  }
  static _$Ei() {
    if (this.hasOwnProperty(v('elementProperties'))) return;
    const t = u(this);
    (t.finalize(),
      void 0 !== t.l && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties)));
  }
  static finalize() {
    if (this.hasOwnProperty(v('finalized'))) return;
    if (((this.finalized = !0), this._$Ei(), this.hasOwnProperty(v('properties')))) {
      const t = this.properties,
        e = [...p(t), ...h(t)];
      for (const i of e) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const e = litPropertyMetadata.get(t);
      if (void 0 !== e) for (const [t, i] of e) this.elementProperties.set(t, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const t = this._$Eu(e, i);
      void 0 !== t && this._$Eh.set(t, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(s(t));
    } else void 0 !== t && e.push(s(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : 'string' == typeof i
        ? i
        : 'string' == typeof t
          ? t.toLowerCase()
          : void 0;
  }
  constructor() {
    (super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev());
  }
  _$Ev() {
    ((this._$ES = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = /* @__PURE__ */ new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t) => t(this)));
  }
  addController(t) {
    ((this._$EO ??= /* @__PURE__ */ new Set()).add(t),
      void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.());
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(),
      e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, o) => {
        if (i) t.adoptedStyleSheets = o.map((t) => (t instanceof CSSStyleSheet ? t : t.styleSheet));
        else
          for (const i of o) {
            const o = document.createElement('style'),
              n = e.litNonce;
            (void 0 !== n && o.setAttribute('nonce', n),
              (o.textContent = i.cssText),
              t.appendChild(o));
          }
      })(t, this.constructor.elementStyles),
      t
    );
  }
  connectedCallback() {
    ((this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(!0),
      this._$EO?.forEach((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    const i = this.constructor.elementProperties.get(t),
      o = this.constructor._$Eu(t, i);
    if (void 0 !== o && !0 === i.reflect) {
      const n = (void 0 !== i.converter?.toAttribute ? i.converter : b).toAttribute(e, i.type);
      ((this._$Em = t),
        null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
        (this._$Em = null));
    }
  }
  _$AK(t, e) {
    const i = this.constructor,
      o = i._$Eh.get(t);
    if (void 0 !== o && this._$Em !== o) {
      const t = i.getPropertyOptions(o),
        n =
          'function' == typeof t.converter
            ? { fromAttribute: t.converter }
            : void 0 !== t.converter?.fromAttribute
              ? t.converter
              : b;
      this._$Em = o;
      const r = n.fromAttribute(e, t.type);
      ((this[o] = r ?? this._$Ej?.get(o) ?? r), (this._$Em = null));
    }
  }
  requestUpdate(t, e, i, o = !1, n) {
    if (void 0 !== t) {
      const r = this.constructor;
      if (
        (!1 === o && (n = this[t]),
        (i ??= r.getPropertyOptions(t)),
        !(
          (i.hasChanged ?? x)(n, e) ||
          (i.useDefault && i.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))
        ))
      )
        return;
      this.C(t, e, i);
    }
    !1 === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: o, wrapped: n }, r) {
    (i &&
      !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) &&
      (this._$Ej.set(t, r ?? e ?? this[t]), !0 !== n || void 0 !== r)) ||
      (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)),
      !0 === o && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return (null != t && (await t), !this.isUpdatePending);
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [t, e] of this._$Ep) this[t] = e;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [e, i] of t) {
          const { wrapped: t } = i,
            o = this[e];
          !0 !== t || this._$AL.has(e) || void 0 === o || this.C(e, void 0, i, o);
        }
    }
    let t = !1;
    const e = this._$AL;
    try {
      ((t = this.shouldUpdate(e)),
        t
          ? (this.willUpdate(e), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(e))
          : this._$EM());
    } catch (i) {
      throw ((t = !1), this._$EM(), i);
    }
    t && this._$AE(e);
  }
  willUpdate(t) {}
  _$AE(t) {
    (this._$EO?.forEach((t) => t.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t));
  }
  _$EM() {
    ((this._$AL = /* @__PURE__ */ new Map()), (this.isUpdatePending = !1));
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    ((this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM());
  }
  updated(t) {}
  firstUpdated(t) {}
};
(($.elementStyles = []),
  ($.shadowRootOptions = { mode: 'open' }),
  ($[v('elementProperties')] = /* @__PURE__ */ new Map()),
  ($[v('finalized')] = /* @__PURE__ */ new Map()),
  f?.({ ReactiveElement: $ }),
  (m.reactiveElementVersions ??= []).push('2.1.2'));
const w = globalThis,
  E = (t) => t,
  A = w.trustedTypes,
  T = A ? A.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  I = '$lit$',
  k = `lit$${Math.random().toFixed(9).slice(2)}$`,
  S = '?' + k,
  C = `<${S}>`,
  z = document,
  D = () => z.createComment(''),
  L = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  M = Array.isArray,
  R = '[ \t\n\f\r]',
  N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  O = /-->/g,
  q = />/g,
  P = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, 'g'),
  U = /'/g,
  F = /"/g,
  H = /^(?:script|style|textarea|title)$/i,
  B = ((J = 1), (t, ...e) => ({ _$litType$: J, strings: t, values: e })),
  j = /* @__PURE__ */ Symbol.for('lit-noChange'),
  Y = /* @__PURE__ */ Symbol.for('lit-nothing'),
  Q = /* @__PURE__ */ new WeakMap(),
  V = z.createTreeWalker(z, 129);
var J;
function W(t, e) {
  if (!M(t) || !t.hasOwnProperty('raw')) throw Error('invalid template strings array');
  return void 0 !== T ? T.createHTML(e) : e;
}
class X {
  constructor({ strings: t, _$litType$: e }, i) {
    let o;
    this.parts = [];
    let n = 0,
      r = 0;
    const a = t.length - 1,
      s = this.parts,
      [l, d] = ((t, e) => {
        const i = t.length - 1,
          o = [];
        let n,
          r = 2 === e ? '<svg>' : 3 === e ? '<math>' : '',
          a = N;
        for (let s = 0; s < i; s++) {
          const e = t[s];
          let i,
            l,
            d = -1,
            c = 0;
          for (; c < e.length && ((a.lastIndex = c), (l = a.exec(e)), null !== l); )
            ((c = a.lastIndex),
              a === N
                ? '!--' === l[1]
                  ? (a = O)
                  : void 0 !== l[1]
                    ? (a = q)
                    : void 0 !== l[2]
                      ? (H.test(l[2]) && (n = RegExp('</' + l[2], 'g')), (a = P))
                      : void 0 !== l[3] && (a = P)
                : a === P
                  ? '>' === l[0]
                    ? ((a = n ?? N), (d = -1))
                    : void 0 === l[1]
                      ? (d = -2)
                      : ((d = a.lastIndex - l[2].length),
                        (i = l[1]),
                        (a = void 0 === l[3] ? P : '"' === l[3] ? F : U))
                  : a === F || a === U
                    ? (a = P)
                    : a === O || a === q
                      ? (a = N)
                      : ((a = P), (n = void 0)));
          const p = a === P && t[s + 1].startsWith('/>') ? ' ' : '';
          r +=
            a === N
              ? e + C
              : d >= 0
                ? (o.push(i), e.slice(0, d) + I + e.slice(d) + k + p)
                : e + k + (-2 === d ? s : p);
        }
        return [W(t, r + (t[i] || '<?>') + (2 === e ? '</svg>' : 3 === e ? '</math>' : '')), o];
      })(t, e);
    if (
      ((this.el = X.createElement(l, i)), (V.currentNode = this.el.content), 2 === e || 3 === e)
    ) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (o = V.nextNode()) && s.length < a; ) {
      if (1 === o.nodeType) {
        if (o.hasAttributes())
          for (const t of o.getAttributeNames())
            if (t.endsWith(I)) {
              const e = d[r++],
                i = o.getAttribute(t).split(k),
                a = /([.?@])?(.*)/.exec(e);
              (s.push({
                type: 1,
                index: n,
                name: a[2],
                strings: i,
                ctor: '.' === a[1] ? et : '?' === a[1] ? it : '@' === a[1] ? ot : tt,
              }),
                o.removeAttribute(t));
            } else t.startsWith(k) && (s.push({ type: 6, index: n }), o.removeAttribute(t));
        if (H.test(o.tagName)) {
          const t = o.textContent.split(k),
            e = t.length - 1;
          if (e > 0) {
            o.textContent = A ? A.emptyScript : '';
            for (let i = 0; i < e; i++)
              (o.append(t[i], D()), V.nextNode(), s.push({ type: 2, index: ++n }));
            o.append(t[e], D());
          }
        }
      } else if (8 === o.nodeType)
        if (o.data === S) s.push({ type: 2, index: n });
        else {
          let t = -1;
          for (; -1 !== (t = o.data.indexOf(k, t + 1)); )
            (s.push({ type: 7, index: n }), (t += k.length - 1));
        }
      n++;
    }
  }
  static createElement(t, e) {
    const i = z.createElement('template');
    return ((i.innerHTML = t), i);
  }
}
function Z(t, e, i = t, o) {
  if (e === j) return e;
  let n = void 0 !== o ? i._$Co?.[o] : i._$Cl;
  const r = L(e) ? void 0 : e._$litDirective$;
  return (
    n?.constructor !== r &&
      (n?._$AO?.(!1),
      void 0 === r ? (n = void 0) : ((n = new r(t)), n._$AT(t, i, o)),
      void 0 !== o ? ((i._$Co ??= [])[o] = n) : (i._$Cl = n)),
    void 0 !== n && (e = Z(t, n._$AS(t, e.values), n, o)),
    e
  );
}
class G {
  constructor(t, e) {
    ((this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e));
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: { content: e },
        parts: i,
      } = this._$AD,
      o = (t?.creationScope ?? z).importNode(e, !0);
    V.currentNode = o;
    let n = V.nextNode(),
      r = 0,
      a = 0,
      s = i[0];
    for (; void 0 !== s; ) {
      if (r === s.index) {
        let e;
        (2 === s.type
          ? (e = new K(n, n.nextSibling, this, t))
          : 1 === s.type
            ? (e = new s.ctor(n, s.name, s.strings, this, t))
            : 6 === s.type && (e = new nt(n, this, t)),
          this._$AV.push(e),
          (s = i[++a]));
      }
      r !== s?.index && ((n = V.nextNode()), r++);
    }
    return ((V.currentNode = z), o);
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV)
      (void 0 !== i &&
        (void 0 !== i.strings ? (i._$AI(t, i, e), (e += i.strings.length - 2)) : i._$AI(t[e])),
        e++);
  }
}
class K {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, o) {
    ((this.type = 2),
      (this._$AH = Y),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = o),
      (this._$Cv = o?.isConnected ?? !0));
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return (void 0 !== e && 11 === t?.nodeType && (t = e.parentNode), t);
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    ((t = Z(this, t, e)),
      L(t)
        ? t === Y || null == t || '' === t
          ? (this._$AH !== Y && this._$AR(), (this._$AH = Y))
          : t !== this._$AH && t !== j && this._(t)
        : void 0 !== t._$litType$
          ? this.$(t)
          : void 0 !== t.nodeType
            ? this.T(t)
            : ((t) => M(t) || 'function' == typeof t?.[Symbol.iterator])(t)
              ? this.k(t)
              : this._(t));
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  _(t) {
    (this._$AH !== Y && L(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(z.createTextNode(t)),
      (this._$AH = t));
  }
  $(t) {
    const { values: e, _$litType$: i } = t,
      o =
        'number' == typeof i
          ? this._$AC(t)
          : (void 0 === i.el && (i.el = X.createElement(W(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const t = new G(o, this),
        i = t.u(this.options);
      (t.p(e), this.T(i), (this._$AH = t));
    }
  }
  _$AC(t) {
    let e = Q.get(t.strings);
    return (void 0 === e && Q.set(t.strings, (e = new X(t))), e);
  }
  k(t) {
    M(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      o = 0;
    for (const n of t)
      (o === e.length
        ? e.push((i = new K(this.O(D()), this.O(D()), this, this.options)))
        : (i = e[o]),
        i._$AI(n),
        o++);
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const e = E(t).nextSibling;
      (E(t).remove(), (t = e));
    }
  }
  setConnected(t) {
    void 0 === this._$AM && ((this._$Cv = t), this._$AP?.(t));
  }
}
class tt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, o, n) {
    ((this.type = 1),
      (this._$AH = Y),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = n),
      i.length > 2 || '' !== i[0] || '' !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())), (this.strings = i))
        : (this._$AH = Y));
  }
  _$AI(t, e = this, i, o) {
    const n = this.strings;
    let r = !1;
    if (void 0 === n)
      ((t = Z(this, t, e, 0)), (r = !L(t) || (t !== this._$AH && t !== j)), r && (this._$AH = t));
    else {
      const o = t;
      let a, s;
      for (t = n[0], a = 0; a < n.length - 1; a++)
        ((s = Z(this, o[i + a], e, a)),
          s === j && (s = this._$AH[a]),
          (r ||= !L(s) || s !== this._$AH[a]),
          s === Y ? (t = Y) : t !== Y && (t += (s ?? '') + n[a + 1]),
          (this._$AH[a] = s));
    }
    r && !o && this.j(t);
  }
  j(t) {
    t === Y
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '');
  }
}
class et extends tt {
  constructor() {
    (super(...arguments), (this.type = 3));
  }
  j(t) {
    this.element[this.name] = t === Y ? void 0 : t;
  }
}
class it extends tt {
  constructor() {
    (super(...arguments), (this.type = 4));
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== Y);
  }
}
class ot extends tt {
  constructor(t, e, i, o, n) {
    (super(t, e, i, o, n), (this.type = 5));
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? Y) === j) return;
    const i = this._$AH,
      o =
        (t === Y && i !== Y) ||
        t.capture !== i.capture ||
        t.once !== i.once ||
        t.passive !== i.passive,
      n = t !== Y && (i === Y || o);
    (o && this.element.removeEventListener(this.name, this, i),
      n && this.element.addEventListener(this.name, this, t),
      (this._$AH = t));
  }
  handleEvent(t) {
    'function' == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t);
  }
}
class nt {
  constructor(t, e, i) {
    ((this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i));
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Z(this, t);
  }
}
const rt = w.litHtmlPolyfillSupport;
(rt?.(X, K), (w.litHtmlVersions ??= []).push('3.3.2'));
const at = globalThis;
class st extends $ {
  constructor() {
    (super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0));
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return ((this.renderOptions.renderBefore ??= t.firstChild), t);
  }
  update(t) {
    const e = this.render();
    (this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = ((t, e, i) => {
        const o = i?.renderBefore ?? e;
        let n = o._$litPart$;
        if (void 0 === n) {
          const t = i?.renderBefore ?? null;
          o._$litPart$ = n = new K(e.insertBefore(D(), t), t, void 0, i ?? {});
        }
        return (n._$AI(t), n);
      })(e, this.renderRoot, this.renderOptions)));
  }
  connectedCallback() {
    (super.connectedCallback(), this._$Do?.setConnected(!0));
  }
  disconnectedCallback() {
    (super.disconnectedCallback(), this._$Do?.setConnected(!1));
  }
  render() {
    return j;
  }
}
((st._$litElement$ = !0), (st.finalized = !0), at.litElementHydrateSupport?.({ LitElement: st }));
const lt = at.litElementPolyfillSupport;
(lt?.({ LitElement: st }), (at.litElementVersions ??= []).push('4.2.2'));
const dt = 'simple_inventory',
  ct = 'add_item',
  pt = 'decrement_item',
  ht = 'increment_item',
  ut = 'remove_item',
  mt = 'update_item',
  gt = 'amount',
  yt = 'auto_add_enabled',
  ft = 'auto_add_id_to_description_enabled',
  vt = 'auto_add_to_list_quantity',
  bt = 'barcode',
  xt = 'category',
  _t = 'description',
  $t = 'desired_quantity',
  wt = 'expiry_alert_days',
  Et = 'expiry_date',
  At = 'inventory_id',
  Tt = 'location',
  It = 'name',
  kt = 'old_name',
  St = 'price',
  Ct = 'quantity',
  zt = 'todo_list',
  Dt = 'todo_quantity_placement',
  Lt = 'unit',
  Mt = 'add-modal',
  Rt = 'edit-modal',
  Nt = 'auto-add-enabled',
  Ot = 'auto-add-id-to-description-enabled',
  qt = 'auto-add-to-list-quantity',
  Pt = 'barcode',
  Ut = 'category',
  Ft = 'description',
  Ht = 'desired-quantity',
  Bt = 'expiry-alert-days',
  jt = 'expiry-date',
  Yt = 'location',
  Qt = 'name',
  Vt = 'price',
  Jt = 'quantity',
  Wt = 'todo-list',
  Xt = 'todo-quantity-placement',
  Zt = 'unit',
  Gt = 'add-item-btn',
  Kt = 'open-add-modal',
  te = 'active-filters',
  ee = 'active-filters-list',
  ie = 'advanced-search-toggle',
  oe = 'clear-filters',
  ne = 'filter-category',
  re = 'filter-expiry',
  ae = 'filter-location',
  se = 'filter-quantity',
  le = 'search-input',
  de = 'cancel-btn',
  ce = 'category-group',
  pe = 'category-header',
  he = 'close-btn',
  ue = 'location-group',
  me = 'location-header',
  ge = 'modal-content',
  ye = 'save-btn',
  fe = 'show',
  ve = 'close_add_modal',
  be = 'decrement',
  xe = 'increment',
  _e = 'item_click',
  $e = 'open_edit',
  we = 'remove',
  Ee = 'toggle_item_menu',
  Ae = 'simple_inventory_item_click',
  Te = {
    AUTO_ADD_ENABLED: !1,
    AUTO_ADD_ID_TO_DESCRIPTION_ENABLED: !1,
    AUTO_ADD_TO_LIST_QUANTITY: 0,
    CATEGORY: '',
    DESCRIPTION: '',
    EXPIRY_ALERT_DAYS: 1,
    EXPIRY_DATE: '',
    LOCATION: '',
    QUANTITY: 1,
    SORT_METHOD: 'name',
    TODO_LIST: '',
    UNIT: '',
  },
  Ie = 'category',
  ke = 'expiry',
  Se = 'location',
  Ce = 'name',
  ze = 'quantity',
  De = 'quantity-low',
  Le = 'zero-last',
  Me = { ZERO: 'zero', NONZERO: 'nonzero' },
  Re = { NONE: 'none', EXPIRED: 'expired', SOON: 'soon', FUTURE: 'future' },
  Ne = (t) => `simple_inventory_filters_${t}`,
  Oe = 150,
  qe = 100,
  Pe = 'Inventory',
  Ue = {
    getInventoryName(t, e) {
      if (t?.attributes?.friendly_name?.trim()) return t.attributes.friendly_name;
      const i = e.split('.');
      if (i.length > 1) {
        const t = i.at(-1),
          e = t
            ?.split('_')
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
            .filter((t) => 'inventory' !== t.toLowerCase()),
          o = e?.join(' ').trim();
        return o || Pe;
      }
      return Pe;
    },
    getInventoryDescription(t) {
      if (t?.attributes?.description) return t.attributes.description;
    },
    getInventoryId(t, e) {
      const i = t.states[e];
      if (i?.attributes?.inventory_id) return i.attributes.inventory_id;
      if (i?.attributes?.unique_id) {
        const t = i.attributes.unique_id;
        if ('string' == typeof t && t.startsWith('inventory_')) return t.slice(10);
      }
      const o = e.split('.');
      return o.length > 1 ? o[1] : e;
    },
    preserveInputValues(t, e) {
      const i = {};
      for (const o of e) {
        const e = t.getElementById(o);
        e &&
          ('checkbox' === e.type
            ? (i[o] = e.checked)
            : 'number' === e.type
              ? (i[o] = Number.parseFloat(e.value) || 0)
              : (i[o] = e.value));
      }
      return i;
    },
    restoreInputValues(t, e) {
      if (e)
        for (const [i, o] of Object.entries(e)) {
          const e = t.getElementById(i);
          e && ('checkbox' === e.type ? (e.checked = Boolean(o)) : (e.value = String(o)));
        }
    },
    formatDate(t) {
      if (!t) return '';
      try {
        let e;
        if (/^\d+$/.test(t.trim())) e = new Date(Number.parseInt(t.trim()));
        else if (/^\d{4}-\d{2}-\d{2}$/.test(t.trim())) {
          const [i, o, n] = t.trim().split('-').map(Number);
          e = new Date(i, o - 1, n);
        } else e = new Date(t);
        return Number.isNaN(e.getTime()) ? t : e.toLocaleDateString('en-US', { timeZone: 'UTC' });
      } catch (e) {
        return (console.warn(`Error formatting date "${t}":`, e), t);
      }
    },
    isExpired(t) {
      if (!t) return !1;
      try {
        const e = new Date(t);
        if (Number.isNaN(e.getTime())) return !1;
        const i = /* @__PURE__ */ new Date(),
          o = e.toISOString().split('T')[0];
        return o < i.toISOString().split('T')[0];
      } catch {
        return !1;
      }
    },
    isExpiringSoon(t, e = 7) {
      if (!t) return !1;
      try {
        const i = /* @__PURE__ */ new Date();
        i.setHours(0, 0, 0, 0);
        const o = new Date(t).getTime() - i.getTime(),
          n = Math.ceil(o / 864e5);
        return n >= 0 && n <= e;
      } catch {
        return !1;
      }
    },
    debounce(t, e) {
      let i;
      return function (...o) {
        (i && clearTimeout(i),
          (i = setTimeout(() => {
            (i && (clearTimeout(i), (i = void 0)), t(...o));
          }, e)));
      };
    },
    validateRawFormData(t) {
      const e = [];
      if (
        (t.name?.trim() || e.push({ field: 'name', message: 'Item name is required' }),
        t.quantity?.trim())
      ) {
        const i = Number.parseFloat(t.quantity);
        Number.isNaN(i)
          ? e.push({ field: 'quantity', message: 'Quantity must be a valid number' })
          : i < 0 && e.push({ field: 'quantity', message: 'Quantity cannot be negative' });
      }
      if (t.autoAddEnabled) {
        if (t.autoAddToListQuantity?.trim()) {
          const i = Number.parseFloat(t.autoAddToListQuantity);
          Number.isNaN(i)
            ? e.push({
                field: 'autoAddToListQuantity',
                message: 'Quantity threshold must be a valid number',
              })
            : i < 0 &&
              e.push({ field: 'autoAddToListQuantity', message: 'Quantity cannot be negative' });
        } else
          e.push({
            field: 'autoAddToListQuantity',
            message: 'Quantity threshold is required when auto-add is enabled',
          });
        t.todoList?.trim() ||
          e.push({
            field: 'todoList',
            message: 'Todo list selection is required when auto-add is enabled',
          });
      }
      if (
        (t.expiryDate?.trim() &&
          !this.isValidDate(t.expiryDate) &&
          e.push({ field: 'expiryDate', message: 'Invalid expiry date format' }),
        t.expiryAlertDays?.trim())
      ) {
        const i = Number.parseFloat(t.expiryAlertDays);
        Number.isNaN(i)
          ? e.push({
              field: 'expiryAlertDays',
              message: 'Expiry alert days must be a valid number',
            })
          : i < 0 &&
            e.push({ field: 'expiryAlertDays', message: 'Expiry alert days cannot be negative' });
      }
      const i = t.expiryDate?.trim(),
        o = t.expiryAlertDays?.trim();
      return (
        o &&
          !i &&
          e.push({
            field: 'expiryAlertDays',
            message: 'Expiry threshold requires an expiry date to be set',
          }),
        { isValid: 0 === e.length, errors: e }
      );
    },
    convertRawFormDataToItemData: (t) => ({
      name: t.name?.trim() || '',
      quantity: Math.max(0, Ue.parseNumber(t.quantity, Te.QUANTITY)),
      autoAddEnabled: Boolean(t.autoAddEnabled),
      autoAddIdToDescriptionEnabled: Boolean(t.autoAddIdToDescriptionEnabled),
      autoAddToListQuantity: Math.max(
        0,
        Ue.parseNumber(t.autoAddToListQuantity, Te.AUTO_ADD_TO_LIST_QUANTITY),
      ),
      barcode: t.barcode?.trim() || '',
      todoList: t.todoList?.trim() || Te.TODO_LIST,
      todoQuantityPlacement: t.todoQuantityPlacement?.trim() || '',
      expiryDate: t.expiryDate?.trim() || Te.EXPIRY_DATE,
      expiryAlertDays: Math.max(0, Ue.parseNumber(t.expiryAlertDays, Te.EXPIRY_ALERT_DAYS)),
      category: t.category?.trim() || Te.CATEGORY,
      location: t.location?.trim() || Te.LOCATION,
      unit: t.unit?.trim() || Te.UNIT,
      description: t.description?.trim() || Te.DESCRIPTION,
      desiredQuantity: Math.max(0, Ue.parseNumber(t.desiredQuantity, 0)),
      price: Math.max(0, Ue.parseNumber(t.price, 0)),
    }),
    parseNumber: (t, e) => {
      if (('string' == typeof t && !t?.trim()) || void 0 === t) return e;
      const i = Number('string' == typeof t ? t.trim() : t);
      return Number.isNaN(i) || !Number.isFinite(i) ? e : i;
    },
    isValidDate(t) {
      try {
        const e = new Date(t);
        return !Number.isNaN(e.getTime());
      } catch {
        return !1;
      }
    },
    sanitizeHtml(t) {
      const e = document.createElement('div');
      return ((e.textContent = t), e.innerHTML);
    },
    groupItemsByCategory: (t) =>
      t.reduce((t, e) => {
        const i = e.category || 'Uncategorized';
        return (t[i] || (t[i] = []), t[i].push(e), t);
      }, {}),
    groupItemsByLocation: (t) =>
      t.reduce((t, e) => {
        const i = e.location || 'No Location';
        return (t[i] || (t[i] = []), t[i].push(e), t);
      }, {}),
    sanitizeItemData(t) {
      return {
        autoAddEnabled: Boolean(t.autoAddEnabled),
        autoAddIdToDescriptionEnabled: Boolean(t.autoAddIdToDescriptionEnabled),
        autoAddToListQuantity: Math.max(
          0,
          Ue.parseNumber(t.autoAddToListQuantity, Te.AUTO_ADD_TO_LIST_QUANTITY),
        ),
        barcode: this.sanitizeString(t.barcode, 100),
        category: this.sanitizeString(t.category, 50),
        description: this.sanitizeString(t.description, 500),
        desiredQuantity: Math.max(0, Ue.parseNumber(t.desiredQuantity, 0)),
        expiryAlertDays: Math.max(0, Ue.parseNumber(t.expiryAlertDays, Te.EXPIRY_ALERT_DAYS)),
        expiryDate: t.expiryDate || Te.EXPIRY_DATE,
        name: this.sanitizeString(t.name, 100),
        price: Math.max(0, Ue.parseNumber(t.price, 0)),
        quantity: Math.max(0, Math.min(999999, Ue.parseNumber(t.quantity, Te.QUANTITY))),
        todoList: this.sanitizeString(t.todoList, 100),
        todoQuantityPlacement: this.sanitizeString(t.todoQuantityPlacement, 20),
        unit: this.sanitizeString(t.unit, 20),
        location: this.sanitizeString(t.location, 50),
      };
    },
    sanitizeString: (t, e) =>
      t && 'string' == typeof t ? t.trim().slice(0, Math.max(0, e)).trim() : '',
    hasActiveFilters: (t) =>
      Boolean(
        t.searchText ||
        (t.category && t.category.length > 0) ||
        (t.location && t.location.length > 0) ||
        (t.quantity && t.quantity.length > 0) ||
        (t.expiry && t.expiry.length > 0),
      ),
    validateInventoryItems: (t) =>
      Array.isArray(t)
        ? t.filter(
            (t) =>
              !(!t || 'object' != typeof t || !t.name || 'string' != typeof t.name) &&
              ((t.quantity =
                'number' == typeof t.quantity && !Number.isNaN(t.quantity) && t.quantity >= 0
                  ? t.quantity
                  : Te.QUANTITY),
              (t.unit = 'string' == typeof t.unit ? t.unit : Te.UNIT),
              (t.category = 'string' == typeof t.category ? t.category : Te.CATEGORY),
              (t.location = 'string' == typeof t.location ? t.location : Te.LOCATION),
              (t.expiry_date = 'string' == typeof t.expiry_date ? t.expiry_date : Te.EXPIRY_DATE),
              (t.expiry_alert_days =
                'number' == typeof t.expiry_alert_days &&
                !Number.isNaN(t.expiry_alert_days) &&
                t.expiry_alert_days >= 0
                  ? t.expiry_alert_days
                  : Te.EXPIRY_ALERT_DAYS),
              (t.todo_list = 'string' == typeof t.todo_list ? t.todo_list : Te.TODO_LIST),
              (t.auto_add_enabled = Boolean(t.auto_add_enabled)),
              (t.auto_add_to_list_quantity =
                'number' == typeof t.auto_add_to_list_quantity &&
                !Number.isNaN(t.auto_add_to_list_quantity) &&
                t.auto_add_to_list_quantity >= 0
                  ? t.auto_add_to_list_quantity
                  : Te.AUTO_ADD_TO_LIST_QUANTITY),
              (t.auto_add_id_to_description_enabled = Boolean(
                t.auto_add_id_to_description_enabled,
              )),
              (t.description = 'string' == typeof t.description ? t.description : Te.DESCRIPTION),
              !0),
          )
        : [],
    extractTodoLists: (t) =>
      Object.keys(t.states)
        .filter((t) => t.startsWith('todo.'))
        .map((e) => ({ id: e, name: t.states[e].attributes?.friendly_name || e.split('.')[1] })),
    findInventoryEntities: (t) =>
      Object.keys(t?.states || {})
        .filter((e) => {
          if (!e.startsWith('sensor.')) return !1;
          const i = e.includes('inventory'),
            o = void 0 !== t?.states[e]?.attributes?.items;
          return i && o;
        })
        .sort(),
    createEntityOptions: (t, e) =>
      e.map((e) => ({ value: e, label: t.states[e]?.attributes?.friendly_name || e })),
  };
class Fe {
  static _cache = /* @__PURE__ */ new Map();
  static _loadingPromises = /* @__PURE__ */ new Map();
  static _cardName = 'simple-inventory-card-custom';
  static async loadTranslations(t) {
    const e = `${this._cardName}-${t}`;
    if (this._cache.has(e)) return this._cache.get(e);
    if (this._loadingPromises.has(e)) return this._loadingPromises.get(e);
    const i = this._loadTranslationsInternal(t);
    this._loadingPromises.set(e, i);
    try {
      const t = await i;
      return (this._cache.set(e, t), t);
    } finally {
      this._loadingPromises.delete(e);
    }
  }
  static async _loadTranslationsInternal(t) {
    const e = [
      `/local/community/${this._cardName}/translations/${t}.json`,
      `/hacsfiles/${this._cardName}/translations/${t}.json`,
      `/local/community/${this._cardName}/${t}.json`,
      `/hacsfiles/${this._cardName}/${t}.json`,
    ];
    for (const o of e)
      try {
        const t = await fetch(o);
        if (t.ok) {
          return await t.json();
        }
        console.debug('❌ Failed to load from', o, 'Status:', t.status);
      } catch (i) {
        console.debug(`Failed to load translations from ${o}:`, i);
      }
    return 'en' !== t ? this.loadTranslations('en') : {};
  }
  static localize(t, e, i, o) {
    const n = e.split('.');
    let r = t;
    for (const s of n) {
      if (!r || 'object' != typeof r || !(s in r)) return o || e;
      r = r[s];
    }
    let a = 'string' == typeof r ? r : o || e;
    return (
      i &&
        Object.entries(i).forEach(([t, e]) => {
          a = a.replace(new RegExp(`{${t}}`, 'g'), String(e));
        }),
      a
    );
  }
}
const He = a`
  .card-config {
    padding: 16px;
  }

  .option {
    margin-bottom: 16px;
  }

  .row {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  .col {
    flex: 1;
    margin-right: 15px;
  }

  .col:last-child {
    margin-right: 0;
  }

  ha-entity-picker {
    width: 100%;
  }

  ha-textfield,
  ha-textarea,
  ha-yaml-editor {
    width: 100%;
  }

  .section-title {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-text-color);
  }

  .entity-info {
    background: var(--secondary-background-color);
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
  }

  .info-header {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-color);
  }

  .info-content {
    color: var(--primary-text-color);
  }

  .no-entity {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background: var(--warning-color);
    color: white;
    border-radius: 8px;
    margin-top: 16px;
  }
`;
class Be extends st {
  hass;
  _config;
  _translations = {};
  _defaultType = {
    grid: 'custom:simple-inventory-card-custom-minimal-grid',
    standard: 'custom:simple-inventory-card-custom',
    minimal: 'custom:simple-inventory-card-custom-minimal',
  };
  constructor() {
    super();
  }
  static get properties() {
    return { hass: { type: Object }, _config: { type: Object } };
  }
  async firstUpdated() {
    await this._loadTranslations();
  }
  async updated(t) {
    if (t.has('hass') && this.hass) {
      const e = t.get('hass');
      (e &&
        e.language === this.hass.language &&
        e.selectedLanguage === this.hass.selectedLanguage) ||
        (await this._loadTranslations());
    }
  }
  async _loadTranslations() {
    const t = this.hass?.language || this.hass?.selectedLanguage || 'en';
    try {
      ((this._translations = await Fe.loadTranslations(t)), this.requestUpdate());
    } catch (e) {
      (console.warn('Failed to load translations:', e), (this._translations = {}));
    }
  }
  setConfig(t) {
    const e = t.type || this._resolveDefaultType(t);
    this._config = { ...t, type: e, sort_method: t.sort_method || Te.SORT_METHOD };
  }
  get _entity() {
    return this._config?.entity || '';
  }
  render() {
    if (!this.hass || !this._config)
      return B`<div>
        ${Fe.localize(this._translations, 'common.loading', void 0, 'Loading...')}
      </div>`;
    const t = Ue.findInventoryEntities(this.hass),
      e = Ue.createEntityOptions(this.hass, t),
      i = this._createSortOptions(),
      o = this._config.sort_method || Te.SORT_METHOD;
    if (!this._config.entity && t.length > 0) {
      const e = this._config.type || this._resolveDefaultType(this._config);
      ((this._config = { ...this._config, type: e, entity: t[0] }),
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: this._config },
            bubbles: !0,
            composed: !0,
          }),
        ));
    }
    return B`
      <div class="card-config">
        ${(function (t, e, i, o, n) {
          return B`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-combo-box
            .hass=${t}
            .label=${Fe.localize(n, 'config.inventory_entity_required', void 0, 'Inventory Entity (Required)')}
            .items=${e}
            .value=${i}
            @value-changed=${o}
          ></ha-combo-box>
        </div>
      </div>
    </div>
  `;
        })(this.hass, e, this._entity, this._valueChanged.bind(this), this._translations)}
        ${(function (t, e, i, o, n) {
          return B`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-combo-box
            .hass=${t}
            .label=${Fe.localize(n, 'sort.sort_by', void 0, 'Sort by')}
            .items=${e}
            .value=${i}
            @value-changed=${o}
          ></ha-combo-box>
        </div>
      </div>
    </div>
  `;
        })(this.hass, i, o, this._sortMethodChanged.bind(this), this._translations)}
        ${
          ((n = this._config?.item_click_action?.service || ''),
          (r = this._stringifyJson(this._config?.item_click_action?.target)),
          (a = this._stringifyJson(this._config?.item_click_action?.data)),
          (s = this._stringifyYaml(this._config?.item_click_action)),
          (l = this._actionValueChanged.bind(this)),
          (d = this._actionYamlChanged.bind(this)),
          (c = this._translations),
          B`
    <div class="option">
      <div class="section-title">
        ${Fe.localize(c, 'config.item_click_action', void 0, 'Item click action (optional)')}
      </div>
      <div class="row">
        <div class="col">
          <ha-textfield
            .label=${Fe.localize(c, 'config.item_click_service', void 0, 'Service (domain.service)')}
            .value=${n}
            data-field="item_click_service"
            @change=${l}
          ></ha-textfield>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ha-textarea
            .label=${Fe.localize(c, 'config.item_click_target', void 0, 'Target JSON (optional)')}
            .value=${r}
            placeholder='{"entity_id":"automation.example"}'
            data-field="item_click_target"
            @change=${l}
          ></ha-textarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ha-textarea
            .label=${Fe.localize(c, 'config.item_click_data', void 0, 'Data JSON (optional, supports {{location}}, {{name}}, {{quantity}})')}
            .value=${a}
            placeholder='{"variables":{"location":"{{location}}","name":"{{name}}"}}'
            data-field="item_click_data"
            @change=${l}
          ></ha-textarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ha-yaml-editor
            .label=${Fe.localize(c, 'config.item_click_yaml', void 0, 'Item click action YAML (optional)')}
            .value=${s}
            @value-changed=${d}
          ></ha-yaml-editor>
        </div>
      </div>
    </div>
  `)
        }
        ${
          this._entity
            ? (function (t, e, i) {
                const o = t.states[e],
                  n = o?.attributes?.friendly_name || e,
                  r = o?.attributes?.items?.length || 0;
                return B`
    <div class="entity-info">
      <div class="info-header">
        ${Fe.localize(i, 'config.selected_inventory', void 0, 'Selected Inventory:')}
      </div>
      <div class="info-content">
        <strong>${n}</strong>
        <br />
        <small>${e}</small>
        <br />
        <small>
          ${Fe.localize(i, 'config.items_count', void 0, 'Items')}:
          ${r}
        </small>
      </div>
    </div>
  `;
              })(this.hass, this._entity, this._translations)
            : (function (t) {
                return B`
    <div class="no-entity">
      <ha-icon icon="mdi:information-outline"></ha-icon>
      <div>
        ${Fe.localize(t, 'config.select_entity_message', void 0, 'Please select an inventory entity above')}
      </div>
    </div>
  `;
              })(this._translations)
        }
      </div>
    `;
    var n, r, a, s, l, d, c;
  }
  _valueChanged(t) {
    if (!this._config) return;
    const e = t.detail?.value;
    if (this._entity === e) return;
    const i = {
      ...this._config,
      entity: e,
      sort_method: this._config.sort_method || Te.SORT_METHOD,
      type: this._config.type || this._resolveDefaultType(this._config),
    };
    ((this._config = i),
      this.requestUpdate(),
      this.dispatchEvent(
        new CustomEvent('config-changed', { detail: { config: i }, bubbles: !0, composed: !0 }),
      ));
  }
  _actionValueChanged(t) {
    if (!this._config) return;
    const e = t.target,
      i = e?.dataset?.field;
    if (!i) return;
    const o = e.value ?? '',
      n = { ...(this._config.item_click_action || {}) };
    if (
      ('item_click_service' === i && (o.trim() ? (n.service = o.trim()) : delete n.service),
      'item_click_target' === i)
    ) {
      const t = this._parseJsonInput(o);
      if (void 0 === t) return;
      t ? (n.target = t) : delete n.target;
    }
    if ('item_click_data' === i) {
      const t = this._parseJsonInput(o);
      if (void 0 === t) return;
      t ? (n.data = t) : delete n.data;
    }
    const r = (n.service && n.service.trim()) || n.target || n.data,
      a = {
        ...this._config,
        ...(r ? { item_click_action: n } : {}),
        sort_method: this._config.sort_method || Te.SORT_METHOD,
        type: this._config.type || this._resolveDefaultType(this._config),
      };
    ((this._config = a),
      this.requestUpdate(),
      this.dispatchEvent(
        new CustomEvent('config-changed', { detail: { config: a }, bubbles: !0, composed: !0 }),
      ));
  }
  _actionYamlChanged(t) {
    if (!this._config) return;
    const e = t.detail?.value || (t.target?.value ?? ''),
      i = this._parseYamlOrJsonInput(e);
    if (void 0 === i) return;
    const o = {
      ...this._config,
      ...(i ? { item_click_action: i } : {}),
      sort_method: this._config.sort_method || Te.SORT_METHOD,
      type: this._config.type || this._resolveDefaultType(this._config),
    };
    (!i && this._config.item_click_action && delete o.item_click_action,
      (this._config = o),
      this.requestUpdate(),
      this.dispatchEvent(
        new CustomEvent('config-changed', { detail: { config: o }, bubbles: !0, composed: !0 }),
      ));
  }
  _parseJsonInput(t) {
    const e = t.trim();
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch (i) {
      return (
        console.warn('Invalid JSON in item click action field:', i),
        void alert('Invalid JSON. Please correct it before saving.')
      );
    }
  }
  _parseYamlOrJsonInput(t) {
    const e = t.trim();
    if (!e) return null;
    const i = globalThis.jsyaml;
    if (i?.load)
      try {
        const t = i.load(e);
        return t && 'object' == typeof t ? t : null;
      } catch (o) {
        return (
          console.warn('Invalid YAML in item click action field:', o),
          void alert('Invalid YAML. Please correct it before saving.')
        );
      }
    return this._parseJsonInput(t);
  }
  _sortMethodChanged(t) {
    if (!this._config) return;
    const e = t.detail?.value || Te.SORT_METHOD;
    if (this._config.sort_method === e) return;
    const i = {
      ...this._config,
      sort_method: e,
      type: this._config.type || this._resolveDefaultType(this._config),
    };
    ((this._config = i),
      this.requestUpdate(),
      this.dispatchEvent(
        new CustomEvent('config-changed', { detail: { config: i }, bubbles: !0, composed: !0 }),
      ));
  }
  _createSortOptions() {
    return [
      { value: Ce, label: Fe.localize(this._translations, 'sort.name', void 0, 'Name') },
      { value: Ie, label: Fe.localize(this._translations, 'sort.category', void 0, 'Category') },
      { value: Se, label: Fe.localize(this._translations, 'sort.location', void 0, 'Location') },
      {
        value: ze,
        label: Fe.localize(this._translations, 'sort.quantity_high', void 0, 'Quantity (High)'),
      },
      {
        value: De,
        label: Fe.localize(this._translations, 'sort.quantity_low', void 0, 'Quantity (Low)'),
      },
      {
        value: ke,
        label: Fe.localize(this._translations, 'sort.expiry_date', void 0, 'Expiry Date'),
      },
      { value: Le, label: Fe.localize(this._translations, 'sort.zero_last', void 0, 'Zero Last') },
    ];
  }
  _resolveDefaultType(t) {
    return t.grid
      ? this._defaultType.grid
      : t.minimal
        ? this._defaultType.minimal
        : this._defaultType.standard;
  }
  _stringifyJson(t) {
    return t ? JSON.stringify(t, null, 2) : '';
  }
  _stringifyYaml(t) {
    if (!t) return '';
    const e = globalThis.jsyaml;
    if (e?.dump)
      try {
        return e.dump(t);
      } catch (i) {
        console.warn('Failed to stringify YAML for item click action:', i);
      }
    return this._stringifyJson(t);
  }
  static get styles() {
    return He;
  }
}
class je {
  hass;
  constructor(t) {
    this.hass = t;
  }
  async addItem(t, e) {
    try {
      const i = Ue.sanitizeItemData(e),
        o = Ue.sanitizeString(t, 100);
      if (!o) return { success: !1, error: 'Invalid inventory ID' };
      if (!i.name) return { success: !1, error: 'Item name cannot be empty' };
      const n = {
        [yt]: i.autoAddEnabled,
        [ft]: i.autoAddIdToDescriptionEnabled,
        [vt]: i.autoAddToListQuantity,
        [xt]: i.category,
        [_t]: i.description,
        [$t]: i.desiredQuantity,
        [wt]: i.expiryAlertDays,
        [Et]: i.expiryDate,
        [At]: o,
        [Tt]: i.location,
        [It]: i.name,
        [Ct]: i.quantity,
        [zt]: i.todoList,
        [Dt]: i.todoQuantityPlacement,
        [St]: i.price,
        [Lt]: i.unit,
      };
      return (
        i.barcode && (n[bt] = i.barcode),
        await this.hass.callService(dt, ct, n),
        { success: !0 }
      );
    } catch (i) {
      return (
        console.error('Error adding item:', i),
        { success: !1, error: i instanceof Error ? i.message : String(i) }
      );
    }
  }
  async removeItem(t, e) {
    try {
      return (await this.hass.callService(dt, ut, { [At]: t, [It]: e }), { success: !0 });
    } catch (i) {
      return (
        console.error('Error removing item:', i),
        { success: !1, error: i instanceof Error ? i.message : String(i) }
      );
    }
  }
  async incrementItem(t, e, i = 1) {
    try {
      return (await this.hass.callService(dt, ht, { [At]: t, [It]: e, [gt]: i }), { success: !0 });
    } catch (o) {
      return (
        console.error('Error incrementing item:', o),
        { success: !1, error: o instanceof Error ? o.message : String(o) }
      );
    }
  }
  async decrementItem(t, e, i = 1) {
    try {
      return (await this.hass.callService(dt, pt, { [At]: t, [It]: e, [gt]: i }), { success: !0 });
    } catch (o) {
      return (
        console.error('Error decrementing item:', o),
        { success: !1, error: o instanceof Error ? o.message : String(o) }
      );
    }
  }
  async updateItem(t, e, i) {
    try {
      const o = Ue.sanitizeItemData(i),
        n = Ue.sanitizeString(t, 100);
      if (!n) return { success: !1, error: 'Invalid inventory ID' };
      const r = {
        [yt]: o.autoAddEnabled,
        [ft]: o.autoAddIdToDescriptionEnabled,
        [vt]: o.autoAddToListQuantity,
        [xt]: o.category,
        [_t]: o.description,
        [$t]: o.desiredQuantity,
        [wt]: o.expiryAlertDays,
        [Et]: o.expiryDate,
        [At]: n,
        [Tt]: o.location,
        [It]: o.name,
        [kt]: e,
        [Ct]: o.quantity,
        [zt]: o.todoList,
        [Dt]: o.todoQuantityPlacement,
        [St]: o.price,
        [Lt]: o.unit,
      };
      return (await this.hass.callService(dt, mt, r), { success: !0 });
    } catch (o) {
      return (
        console.error('Error updating item:', o),
        { success: !1, error: o instanceof Error ? o.message : String(o) }
      );
    }
  }
  async fireItemClickEvent(t, e, i, o) {
    try {
      const n = {
        inventory_id: Ue.sanitizeString(t, 100),
        entity_id: Ue.sanitizeString(e, 255),
        name: Ue.sanitizeString(i, 100),
        location: Ue.sanitizeString(o?.location ?? '', 50),
        category: Ue.sanitizeString(o?.category ?? '', 50),
        quantity: o?.quantity ?? 0,
        unit: Ue.sanitizeString(o?.unit ?? '', 20),
      };
      return (
        await this.hass.callWS({ type: 'fire_event', event_type: Ae, event_data: n }),
        { success: !0 }
      );
    } catch (n) {
      return (
        console.error('Error firing item click event:', n),
        { success: !1, error: n instanceof Error ? n.message : String(n) }
      );
    }
  }
  async callItemClickAction(t, e) {
    try {
      const i = Ue.sanitizeString(t.service, 255);
      if (!i || !i.includes('.'))
        return { success: !1, error: 'Invalid service name for item click action' };
      const [o, n] = i.split('.', 2),
        r = this.interpolateTemplateValues(t.data, e),
        a = this.interpolateTemplateValues(t.target, e);
      return (await this.hass.callService(o, n, r, a), { success: !0 });
    } catch (i) {
      return (
        console.error('Error calling item click action:', i),
        { success: !1, error: i instanceof Error ? i.message : String(i) }
      );
    }
  }
  interpolateTemplateValues(t, e) {
    if ('string' == typeof t) {
      const i = t.match(/^{{\s*([a-z0-9_]+)\s*}}$/i);
      if (i) {
        const t = e[i[1]];
        return null == t ? '' : t;
      }
      return t.replace(/{{\s*([a-z0-9_]+)\s*}}/gi, (t, i) => {
        const o = e[i];
        return null == o ? '' : String(o);
      });
    }
    if (Array.isArray(t)) return t.map((t) => this.interpolateTemplateValues(t, e));
    if (t && 'object' == typeof t) {
      const i = {};
      return (
        Object.entries(t).forEach(([t, o]) => {
          i[t] = this.interpolateTemplateValues(o, e);
        }),
        i
      );
    }
    return t;
  }
}
class Ye {
  constructor(t) {
    this.shadowRoot = t;
  }
  getRawAddModalData() {
    return {
      autoAddEnabled: this.getInputChecked(`add-${Nt}`),
      autoAddIdToDescriptionEnabled: this.getInputChecked(`add-${Ot}`),
      autoAddToListQuantity: this.getInputValue(`add-${qt}`),
      barcode: this.getInputValue(`add-${Pt}`),
      category: this.getInputValue(`add-${Ut}`),
      description: this.getInputValue(`add-${Ft}`),
      desiredQuantity: this.getInputValue(`add-${Ht}`),
      expiryAlertDays: this.getInputValue(`add-${Bt}`),
      expiryDate: this.getInputValue(`add-${jt}`),
      location: this.getInputValue(`add-${Yt}`),
      name: this.getInputValue(`add-${Qt}`),
      price: this.getInputValue(`add-${Vt}`),
      quantity: this.getInputValue(`add-${Jt}`),
      todoList: this.getInputValue(`add-${Wt}`),
      todoQuantityPlacement: this.getInputValue(`add-${Xt}`),
      unit: this.getInputValue(`add-${Zt}`),
    };
  }
  getRawEditModalData() {
    return {
      autoAddEnabled: this.getInputChecked(`edit-${Nt}`),
      autoAddIdToDescriptionEnabled: this.getInputChecked(`edit-${Ot}`),
      autoAddToListQuantity: this.getInputValue(`edit-${qt}`),
      barcode: this.getInputValue(`edit-${Pt}`),
      category: this.getInputValue(`edit-${Ut}`),
      description: this.getInputValue(`edit-${Ft}`),
      desiredQuantity: this.getInputValue(`edit-${Ht}`),
      expiryAlertDays: this.getInputValue(`edit-${Bt}`),
      expiryDate: this.getInputValue(`edit-${jt}`),
      location: this.getInputValue(`edit-${Yt}`),
      name: this.getInputValue(`edit-${Qt}`),
      price: this.getInputValue(`edit-${Vt}`),
      quantity: this.getInputValue(`edit-${Jt}`),
      todoList: this.getInputValue(`edit-${Wt}`),
      todoQuantityPlacement: this.getInputValue(`edit-${Xt}`),
      unit: this.getInputValue(`edit-${Zt}`),
    };
  }
  populateEditModal(t) {
    const e = [
      {
        id: `edit-${qt}`,
        value: (t.auto_add_to_list_quantity ?? Te.AUTO_ADD_TO_LIST_QUANTITY).toString(),
      },
      { id: `edit-${Ut}`, value: t.category ?? Te.CATEGORY },
      { id: `edit-${Ft}`, value: t.description ?? Te.DESCRIPTION },
      { id: `edit-${Bt}`, value: (t.expiry_alert_days ?? Te.EXPIRY_ALERT_DAYS).toString() },
      { id: `edit-${jt}`, value: t.expiry_date ?? Te.EXPIRY_DATE },
      { id: `edit-${Yt}`, value: t.location ?? Te.LOCATION },
      { id: `edit-${Qt}`, value: t.name ?? '' },
      { id: `edit-${Jt}`, value: (t.quantity ?? Te.QUANTITY).toString() },
      { id: `edit-${Wt}`, value: t.todo_list ?? Te.TODO_LIST },
      { id: `edit-${Zt}`, value: t.unit ?? Te.UNIT },
    ];
    this.setFormValues(e);
    const i = this.getElement(`edit-${Nt}`),
      o = this.getElement(`edit-${Ot}`);
    (i && (i.checked = t.auto_add_enabled ?? !1),
      o && (o.checked = t.auto_add_id_to_description_enabled ?? !1));
  }
  clearAddModalForm() {
    const t = [
      { id: `add-${qt}`, value: Te.AUTO_ADD_TO_LIST_QUANTITY.toString() },
      { id: `add-${Ut}`, value: Te.CATEGORY },
      { id: `add-${Ft}`, value: Te.DESCRIPTION },
      { id: `add-${Bt}`, value: Te.EXPIRY_ALERT_DAYS.toString() },
      { id: `add-${jt}`, value: Te.EXPIRY_DATE },
      { id: `add-${Yt}`, value: Te.LOCATION },
      { id: `add-${Qt}`, value: '' },
      { id: `add-${Jt}`, value: Te.QUANTITY.toString() },
      { id: `add-${Wt}`, value: Te.TODO_LIST },
      { id: `add-${Zt}`, value: Te.UNIT },
    ];
    this.setFormValues(t);
    const e = this.getElement(`add-${Nt}`),
      i = this.getElement(`add-${Ot}`);
    (e && (e.checked = Te.AUTO_ADD_ENABLED),
      i && (i.checked = Te.AUTO_ADD_ID_TO_DESCRIPTION_ENABLED));
  }
  setFormValues(t) {
    for (const { id: e, value: i } of t) {
      const t = this.getElement(e);
      t && (t.value = i);
    }
  }
  getInputValue(t) {
    const e = this.getElement(t);
    return e?.value?.trim() ?? '';
  }
  getInputChecked(t) {
    const e = this.getElement(t);
    return e?.checked ?? !1;
  }
  getElement(t) {
    return this.shadowRoot.getElementById(t);
  }
}
class Qe {
  constructor(t, e, i) {
    ((this.shadowRoot = t),
      (this.formManager = e),
      (this.validationManager = i),
      this.setupEventListeners());
  }
  boundEscHandler = void 0;
  openAddModal(t) {
    const e = this.getElement(Mt);
    e
      ? (this.validationManager.clearError(!0),
        e.classList.add(fe),
        this.focusElementWithDelay(Qt),
        this.setupExpiryThresholdInteraction(t),
        this.validationManager.setupValidationListeners())
      : console.warn('Add modal not found in DOM');
  }
  closeAddModal() {
    const t = this.getElement(Mt);
    t && t.classList.remove(fe);
  }
  openEditModal(t, e, i) {
    const { hass: o, config: n } = e(),
      r = n.entity,
      a = o.states[r];
    if (!a) return (console.warn(`Entity not found: ${r}`), { item: void 0, found: !1 });
    const s = (a.attributes?.items || []).find((e) => e.name === t);
    if (!s) return (console.warn(`Item not found: ${t}`), { item: void 0, found: !1 });
    this.formManager.populateEditModal(s);
    const l = this.getElement(Rt);
    return (
      l &&
        (this.validationManager.clearError(!1),
        l.classList.add(fe),
        this.focusElementWithDelay(Qt, !0),
        this.setupExpiryThresholdInteraction(i),
        this.validationManager.setupValidationListeners()),
      { item: s, found: !0 }
    );
  }
  closeEditModal() {
    const t = this.getElement(Rt);
    t && t.classList.remove(fe);
  }
  closeAllModals() {
    (this.closeAddModal(), this.closeEditModal());
  }
  handleModalClick(t) {
    const e = t.target;
    return e.id === Mt || e.id === Rt
      ? (t.preventDefault(),
        t.stopPropagation(),
        e.id === Mt ? this.closeAddModal() : this.closeEditModal(),
        !0)
      : e.dataset.action === ve || (e.classList.contains(he) && e.closest(`#${Mt}`))
        ? (t.preventDefault(), t.stopPropagation(), this.closeAddModal(), !0)
        : e.classList.contains(he) && e.closest(`#${Rt}`)
          ? (t.preventDefault(), t.stopPropagation(), this.closeEditModal(), !0)
          : (e.closest(`.${ge}`), !1);
  }
  setupExpiryThresholdInteraction(t) {
    (this.setupExpiryThresholdFieldForModal(!0, t), this.setupExpiryThresholdFieldForModal(!1, t));
  }
  setupExpiryThresholdFieldForModal(t, e) {
    const i = t ? 'add' : 'edit',
      o = this.getElement(`${i}-${jt}`);
    o &&
      (this.updateExpiryThresholdState(t, e),
      o.addEventListener('input', () => {
        this.updateExpiryThresholdState(t, e);
      }),
      o.addEventListener('change', () => {
        this.updateExpiryThresholdState(t, e);
      }));
  }
  updateExpiryThresholdState(t, e) {
    const i = t ? 'add' : 'edit',
      o = this.getElement(`${i}-${jt}`),
      n = this.getElement(`${i}-${Bt}`);
    if (!o || !n) return;
    if ('' !== o.value.trim())
      ((n.disabled = !1),
        (n.placeholder = Fe.localize(
          e,
          'modal.expiry_threshold_placeholder',
          void 0,
          'Days before expiry to alert (default: 0)',
        )),
        n.value.trim() || (n.value = '0'));
    else {
      ((n.disabled = !0), (n.value = ''));
      const t = Fe.localize(e, 'modal.set_expiry_first', void 0, 'Set expiry date first');
      n.placeholder = t;
    }
  }
  setupEventListeners() {
    this.boundEscHandler ||
      ((this.boundEscHandler = this.handleEscapeKey.bind(this)),
      document.addEventListener('keydown', this.boundEscHandler));
  }
  handleEscapeKey(t) {
    'Escape' === t.key && this.closeAllModals();
  }
  focusElementWithDelay(t, e = !1) {
    setTimeout(() => {
      const i = this.getElement(t);
      i && (i.focus(), e && i.select && i.select());
    }, qe);
  }
  getElement(t) {
    return this.shadowRoot.getElementById(t);
  }
  destroy() {
    this.boundEscHandler &&
      (document.removeEventListener('keydown', this.boundEscHandler),
      (this.boundEscHandler = void 0));
  }
}
class Ve {
  constructor(t) {
    this.shadowRoot = t;
  }
  highlightInvalidFields(t, e) {
    const i = e ? 'add' : 'edit';
    this.clearFieldErrors(e);
    for (const o of t) {
      let t = '';
      switch (o.field) {
        case 'name':
          t = `${i}-${Qt}`;
          break;
        case 'quantity':
          t = `${i}-${Jt}`;
          break;
        case 'autoAddToListQuantity':
          t = `${i}-${qt}`;
          break;
        case 'todoList':
          t = `${i}-${Wt}`;
          break;
        case 'expiryDate':
          t = `${i}-${jt}`;
          break;
        case 'expiryAlertDays':
          t = `${i}-${Bt}`;
      }
      if (t) {
        const e = this.getElement(t);
        e && e.classList.add('input-error');
      }
    }
  }
  clearFieldErrors(t) {
    const e = t ? Mt : Rt,
      i = this.getElement(e);
    if (i) for (const o of i.querySelectorAll('.input-error')) o.classList.remove('input-error');
  }
  showError(t, e = !0) {
    const i = e ? 'add' : 'edit',
      o = this.getElement(`${i}-validation-message`),
      n = o?.querySelector('.validation-text');
    if (o && n) {
      ((n.textContent = t), o.classList.add('show'));
      const i = o.closest('.modal-content');
      (i && (i.scrollTop = 0),
        setTimeout(() => {
          this.clearError(e);
        }, 5e3));
    } else console.error('Validation Error:', t);
  }
  clearError(t = !0) {
    const e = t ? 'add' : 'edit',
      i = this.getElement(`${e}-validation-message`);
    i && i.classList.remove('show');
  }
  setupValidationListeners() {
    (this.setupClearErrorsForModal(!0), this.setupClearErrorsForModal(!1));
  }
  setupClearErrorsForModal(t) {
    const e = t ? 'add' : 'edit',
      i = [
        this.getElement(`${e}-${Jt}`),
        this.getElement(`${e}-${qt}`),
        this.getElement(`${e}-${Wt}`),
        this.getElement(`${e}-${Qt}`),
        this.getElement(`${e}-${jt}`),
      ],
      o = this.getElement(`${e}-${Nt}`),
      n = this.getElement(`${e}-${qt}`),
      r = this.getElement(`${e}-${Wt}`);
    for (const a of i)
      if (a) {
        const e = () => {
          (a.classList.remove('input-error'), this.clearError(t));
        };
        (a.addEventListener('input', e), a.addEventListener('change', e));
      }
    o &&
      o.addEventListener('change', () => {
        o.checked ||
          (n?.classList.remove('input-error'),
          r?.classList.remove('input-error'),
          this.clearError(t));
      });
  }
  getElement(t) {
    return this.shadowRoot.getElementById(t);
  }
}
function Je(t) {
  const e = t.shadowRoot || document,
    i = e.getElementById(t.id),
    o = e.getElementById(`${t.id}-dropdown`);
  if (!i || !o) return;
  let n = [...t.options],
    r = -1,
    a = !1;
  function s() {
    n.length > 0 && (o.style.display = 'block');
  }
  function l() {
    ((o.style.display = 'none'), (r = -1));
  }
  function d(e) {
    const a = e.toLowerCase();
    ((n = t.options.filter((t) => t.toLowerCase().includes(a))), (r = -1));
    const s = n
      .map(
        (t, e) =>
          `<div class="autocomplete-option ${e === r ? 'selected' : ''}" data-value="${t}">${t}</div>`,
      )
      .join('');
    ((o.innerHTML = s),
      o.querySelectorAll('.autocomplete-option').forEach((e) => {
        e.addEventListener('click', (o) => {
          (o.preventDefault(), o.stopPropagation());
          const n = e.getAttribute('data-value') || '';
          ((i.value = n), l(), t.onSelect?.(n));
        });
      }));
  }
  function c() {
    o.querySelectorAll('.autocomplete-option').forEach((t, e) => {
      t.classList.toggle('selected', e === r);
    });
  }
  (o.addEventListener('mouseenter', () => {
    a = !0;
  }),
    o.addEventListener('mouseleave', () => {
      a = !1;
    }),
    d(''),
    i.addEventListener('input', (t) => {
      (d(t.target.value), s());
    }),
    i.addEventListener('click', (t) => {
      (t.stopPropagation(), 'block' === o.style.display ? l() : (d(i.value), s()));
    }),
    i.addEventListener('blur', () => {
      setTimeout(() => {
        a || l();
      }, 100);
    }),
    i.addEventListener('keydown', (e) => {
      const a = 'block' === o.style.display;
      if (!a && ('ArrowDown' === e.key || 'ArrowUp' === e.key)) return (d(i.value), void s());
      if (a && 0 !== n.length)
        switch (e.key) {
          case 'ArrowDown':
            (e.preventDefault(), (r = Math.min(r + 1, n.length - 1)), c());
            break;
          case 'ArrowUp':
            (e.preventDefault(), (r = Math.max(r - 1, -1)), c());
            break;
          case 'Enter':
            (e.preventDefault(), r >= 0 && ((i.value = n[r]), t.onSelect?.(i.value)), l());
            break;
          case 'Escape':
            l();
        }
    }),
    l());
}
class We {
  constructor(t, e, i, o) {
    ((this.services = e),
      (this.getInventoryId = i),
      (this.onDataChanged = o),
      (this.formManager = new Ye(t)),
      (this.validationManager = new Ve(t)),
      (this.uiManager = new Qe(t, this.formManager, this.validationManager)),
      (this.shadowRoot = t));
  }
  formManager;
  validationManager;
  uiManager;
  currentEditingItem = void 0;
  shadowRoot;
  openAddModal(t, e = [], i = []) {
    (this.uiManager.openAddModal(t), this.initializeAutoCompleteInputs('add', e, i));
  }
  closeAddModal() {
    this.uiManager.closeAddModal();
  }
  openEditModal(t, e, i, o = [], n = []) {
    this.uiManager.openEditModal(t, e, i).found &&
      ((this.currentEditingItem = t), this.initializeAutoCompleteInputs('edit', o, n));
  }
  closeEditModal() {
    (this.uiManager.closeEditModal(), (this.currentEditingItem = void 0));
  }
  closeAllModals() {
    (this.closeAddModal(), this.closeEditModal());
  }
  clearAddModalForm() {
    this.formManager.clearAddModalForm();
  }
  handleModalClick(t) {
    return this.uiManager.handleModalClick(t);
  }
  destroy() {
    this.uiManager.destroy();
  }
  async addItem(t) {
    try {
      this.validationManager.clearError(!0);
      const e = this.validateAndPrepareFormData(!0);
      if (!e) return !1;
      const i = await this.services.addItem(this.getInventoryId(t.entity), e);
      return this.handleAddResult(i);
    } catch (e) {
      return this.handleException(e, 'adding', !0);
    }
  }
  async saveEditModal(t) {
    if (!this.currentEditingItem) return !1;
    try {
      this.validationManager.clearError(!1);
      const e = this.validateAndPrepareFormData(!1);
      if (!e) return !1;
      const i = await this.services.updateItem(
        this.getInventoryId(t.entity),
        this.currentEditingItem,
        e,
      );
      return this.handleEditResult(i);
    } catch (e) {
      return this.handleException(e, 'updating', !1);
    }
  }
  validateAndPrepareFormData(t) {
    const e = t ? this.formManager.getRawAddModalData() : this.formManager.getRawEditModalData(),
      i = Ue.validateRawFormData(e);
    return i.isValid
      ? Ue.convertRawFormDataToItemData(e)
      : (this.validationManager.highlightInvalidFields(i.errors, t),
        void this.validationManager.showError(i.errors[0].message, t));
  }
  handleAddResult(t) {
    return t.success
      ? (this.clearAddModalForm(), this.triggerDataChanged(), !0)
      : (this.validationManager.showError(`Error adding item: ${t.error}`, !0), !1);
  }
  handleEditResult(t) {
    return t.success
      ? (this.triggerDataChanged(), !0)
      : (this.validationManager.showError(`Error updating item: ${t.error}`, !1), !1);
  }
  handleException(t, e, i) {
    return (
      console.error(`Error in ${e} item:`, t),
      this.validationManager.showError(`An error occurred while ${e} the item`, i),
      !1
    );
  }
  triggerDataChanged() {
    this.onDataChanged && this.onDataChanged();
  }
  initializeAutoCompleteInputs(t, e, i) {
    setTimeout(() => {
      (Je({ id: `${t}-${Yt}`, options: e, shadowRoot: this.shadowRoot }),
        Je({ id: `${t}-${Ut}`, options: i, shadowRoot: this.shadowRoot }));
    }, 0);
  }
}
function Xe(t, e) {
  const i = [];
  if (t.searchText) {
    const o = Fe.localize(e, 'active_filters.search', void 0, 'Search');
    i.push(`<span class="filter-badge search">\n        ${o}: "${t.searchText}"\n      </span>`);
  }
  const o = (t, o, n, r) => {
    if (t && t.length > 0) {
      const a = Fe.localize(e, o, void 0, r),
        s =
          t.length > 1
            ? `${a}: ${t.length} ${Fe.localize(e, 'active_filters.selected', void 0, 'selected')}`
            : `${a}: ${t[0]}`;
      i.push(`<span class="filter-badge ${n}">${s}</span>`);
    }
  };
  if (
    (o(t.category, 'active_filters.category', 'category', 'Category'),
    o(t.location, 'active_filters.location', 'location', 'Location'),
    o(t.quantity, 'active_filters.quantity', 'quantity', 'Quantity'),
    t.expiry && t.expiry.length > 0)
  ) {
    const o = Fe.localize(e, 'active_filters.expiry', void 0, 'Expiry');
    let n;
    if (t.expiry.length > 1)
      n = `${o}: ${t.expiry.length} ${Fe.localize(e, 'active_filters.selected', void 0, 'selected')}`;
    else {
      n = `${o}: ${Fe.localize(e, `filters.${t.expiry[0]}`, void 0, t.expiry[0])}`;
    }
    i.push(`<span class="filter-badge expiry">${n}</span>`);
  }
  return i;
}
class Ze {
  constructor(t) {
    this.shadowRoot = t;
  }
  searchTimeout = void 0;
  boundSearchHandler = void 0;
  getCurrentFilters(t) {
    const e = localStorage.getItem(Ne(t));
    if (e)
      try {
        const t = JSON.parse(e);
        return (
          'string' == typeof t.category && (t.category = t.category ? [t.category] : []),
          'string' == typeof t.location && (t.location = t.location ? [t.location] : []),
          'string' == typeof t.expiry && (t.expiry = t.expiry ? [t.expiry] : []),
          'string' == typeof t.quantity && (t.quantity = t.quantity ? [t.quantity] : []),
          (t.category = Array.isArray(t.category) ? t.category : []),
          (t.location = Array.isArray(t.location) ? t.location : []),
          (t.quantity = Array.isArray(t.quantity) ? t.quantity : []),
          (t.expiry = Array.isArray(t.expiry) ? t.expiry : []),
          (t.searchText = t.searchText || ''),
          (t.showAdvanced = !!t.showAdvanced),
          (t.sortMethod = t.sortMethod || Te.SORT_METHOD),
          t
        );
      } catch (i) {
        console.error('Error parsing saved filters:', i);
      }
    return {
      category: [],
      expiry: [],
      location: [],
      quantity: [],
      searchText: '',
      showAdvanced: !1,
      sortMethod: Te.SORT_METHOD,
    };
  }
  saveFilters(t, e) {
    localStorage.setItem(Ne(t), JSON.stringify(e));
  }
  clearFilters(t) {
    localStorage.removeItem(Ne(t));
  }
  filterItems(t, e) {
    return e && 0 !== Object.keys(e).length
      ? t.filter(
          (t) =>
            !(e.searchText && !this.matchesTextSearch(t, e.searchText)) &&
            !(e.category && e.category.length > 0 && !e.category.includes(t.category || '')) &&
            !(e.location && e.location.length > 0 && !e.location.includes(t.location || '')) &&
            !(e.quantity && e.quantity.length > 0 && !this.matchesQuantityFilter(t, e.quantity)) &&
            !(e.expiry && e.expiry.length > 0 && !this.matchesExpiryFilter(t, e.expiry)),
        )
      : [...t];
  }
  matchesTextSearch(t, e) {
    const i = (t.category ?? '').toLowerCase(),
      o = (t.location ?? '').toLowerCase(),
      n = (t.name ?? '').toLowerCase(),
      r = (t.unit ?? '').toLowerCase(),
      a = e.toLowerCase();
    return n.includes(a) || i.includes(a) || r.includes(a) || o.includes(a);
  }
  matchesQuantityFilter(t, e) {
    return e.some((e) => {
      switch (e) {
        case Me.ZERO:
          return 0 === t.quantity;
        case Me.NONZERO:
          return t.quantity > 0;
        default:
          return !0;
      }
    });
  }
  matchesExpiryFilter(t, e) {
    const i = /* @__PURE__ */ new Date();
    return (
      i.setHours(0, 0, 0, 0),
      e.some((e) => {
        switch (e) {
          case Re.NONE:
            return !t.expiry_date;
          case Re.EXPIRED:
            return !(!t.expiry_date || (t.quantity ?? 0) <= 0) && Ue.isExpired(t.expiry_date);
          case Re.SOON: {
            if (!t.expiry_date || (t.quantity ?? 0) <= 0) return !1;
            const e = t.expiry_alert_days || 7;
            return Ue.isExpiringSoon(t.expiry_date, e);
          }
          case Re.FUTURE: {
            if (!t.expiry_date || (t.quantity ?? 0) <= 0) return !1;
            const e = new Date(t.expiry_date),
              o = t.expiry_alert_days || 7,
              n = new Date(i);
            return (n.setDate(i.getDate() + o), e > n);
          }
          default:
            return !0;
        }
      })
    );
  }
  sortItems(t, e, i) {
    const o = [...t];
    switch (e) {
      case Ce:
        return this.sortByName(o);
      case Ie:
        return this.sortByCategory(o, i);
      case Se:
        return this.sortByLocation(o, i);
      case ze:
        return this.sortByQuantity(o, !1);
      case De:
        return this.sortByQuantity(o, !0);
      case ke:
        return this.sortByExpiry(o);
      case Le:
        return this.sortZeroLast(o);
      default:
        return o;
    }
  }
  sortByName(t) {
    return t.sort((t, e) => {
      const i = (t.name ?? '').toLowerCase().trim(),
        o = (e.name ?? '').toLowerCase().trim();
      return i.localeCompare(o, void 0, { numeric: !0, sensitivity: 'base' });
    });
  }
  sortByLocation(t, e) {
    return t.sort((t, i) => {
      const o = Fe.localize(e, 'common.no_location', void 0, 'No Location'),
        n = (t.location ?? o).toLowerCase().trim(),
        r = (i.location ?? o).toLowerCase().trim(),
        a = n.localeCompare(r);
      return 0 !== a ? a : this.compareNames(t.name, i.name);
    });
  }
  sortByCategory(t, e) {
    return t.sort((t, i) => {
      const o = Fe.localize(e, 'common.uncategorized', void 0, 'Uncategorized'),
        n = (t.category ?? o).toLowerCase().trim(),
        r = (i.category ?? o).toLowerCase().trim(),
        a = n.localeCompare(r);
      return 0 !== a ? a : this.compareNames(t.name, i.name);
    });
  }
  sortByQuantity(t, e = !1) {
    return t.sort((t, i) => {
      const o = e ? (t.quantity ?? 0) - (i.quantity ?? 0) : (i.quantity ?? 0) - (t.quantity ?? 0);
      return 0 !== o ? o : this.compareNames(t.name, i.name);
    });
  }
  sortByExpiry(t) {
    return t.sort((t, e) => {
      const i = t.expiry_date ?? '9999-12-31',
        o = e.expiry_date ?? '9999-12-31',
        n = i.localeCompare(o);
      return 0 !== n ? n : this.compareNames(t.name, e.name);
    });
  }
  sortZeroLast(t) {
    return t.sort((t, e) => {
      const i = (t.quantity ?? 0) > 0,
        o = (e.quantity ?? 0) > 0;
      return i && !o ? -1 : !i && o ? 1 : this.compareNames(t.name, e.name);
    });
  }
  compareNames(t, e) {
    const i = (t ?? '').toLowerCase().trim(),
      o = (e ?? '').toLowerCase().trim();
    return i.localeCompare(o, void 0, { numeric: !0, sensitivity: 'base' });
  }
  setupSearchInput(t, e) {
    const i = this.shadowRoot.getElementById(le);
    i &&
      (i.removeEventListener('input', this.boundSearchHandler),
      (this.boundSearchHandler = (i) => {
        const o = i.target.value;
        (this.searchTimeout && clearTimeout(this.searchTimeout),
          (this.searchTimeout = setTimeout(() => {
            const i = this.getCurrentFilters(t);
            ((i.searchText = o), this.saveFilters(t, i), e());
          }, Oe)));
      }),
      i.addEventListener('input', this.boundSearchHandler));
  }
  updateFilterIndicators(t, e) {
    const i = this.shadowRoot.getElementById(ie),
      o = this.shadowRoot.getElementById(oe);
    if ((o && o.classList.toggle('has-active-filters', Ue.hasActiveFilters(t)), i))
      if (Ue.hasActiveFilters(t)) {
        const o = Fe.localize(e, 'filters.hide_filters', void 0, 'Hide Filters'),
          n = Fe.localize(e, 'filters.filters', void 0, 'Filters'),
          r = t.showAdvanced ? `${o} ●` : `${n} ●`;
        ((i.textContent = r), (i.style.background = 'var(--warning-color, #ff9800)'));
      } else {
        const o = Fe.localize(e, 'filters.hide_filters', void 0, 'Hide Filters'),
          n = Fe.localize(e, 'filters.filters', void 0, 'Filters'),
          r = t.showAdvanced ? o : n;
        ((i.textContent = r), (i.style.background = 'var(--primary-color)'));
      }
    this.updateActiveFiltersDisplay(t, e);
  }
  updateActiveFiltersDisplay(t, e) {
    const i = this.shadowRoot.getElementById(te),
      o = this.shadowRoot.getElementById(ee);
    if (i && o) {
      const n = Xe(t, e);
      n.length > 0
        ? ((o.innerHTML = n.join('')), (i.style.display = 'block'))
        : (i.style.display = 'none');
    }
  }
}
const Ge = a`
  ${a`
  ha-card {
    padding: 16px;
  }

  .inventory-title {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: var(--primary-text-color);
  }

  .no-items {
    text-align: center;
    color: var(--secondary-text-color);
    padding: 20px;
  }

  .active-filters {
    display: block;
    padding: 8px 16px;
  }

  .filter-badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .filter-badge {
    display: inline-block;
    padding: 4px 12px;
    margin: 2px;
    color: white;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .filter-badge.search {
    background: var(--purple-color, #9c27b0);
  }

  .filter-badge.category {
    background: var(--orange-color, #ff9800);
  }

  .filter-badge.location {
    background: var(--blue-color, #2196f3);
  }

  .filter-badge.category,
  .filter-badge.location {
    font-style: normal !important;
    opacity: 1 !important;
  }

  .filter-badge.quantity {
    background: var(--green-color, #4caf50);
    color: white !important;
  }

  .filter-badge.expiry {
    background: var(--red-color, #ff5722);
    border-radius: 12px !important;
  }
`}
  ${a`
  .item-row {
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-bottom: 8px;
    border: 1px solid var(--divider-color, #e8e8e8);
    border-radius: 8px;
    gap: 8px;
    cursor: pointer;
  }

  .item-row.zero-quantity {
    opacity: 0.6;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .item-row.auto-add-enabled {
    border-left: 4px solid var(--success-color, #4caf50);
  }

  .item-info {
    flex: 1;
    min-width: 0;
    max-width: calc(100% - 200px); /* Reserve space for buttons */
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .item-name {
    font-weight: bold;
    font-size: 1.1em;
  }

  .category {
    font-style: italic;
    font-size: 0.9em;
    opacity: 0.7;
  }

  .location {
    font-size: 1em;
    font-style: italic;
    opacity: 0.7;
  }

  .location-category {
    font-size: 1em;
    font-style: italic;
    opacity: 0.7;
  }

  .item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .item-name-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
    max-width: 100%;
  }

  .item-name-line .item-name {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-name-line .category {
    flex-shrink: 0;
    font-size: 0.9em;
    opacity: 0.7;
    font-style: italic;
    white-space: nowrap;
    margin-left: auto;
  }

  .item-details {
    color: var(--secondary-text-color);
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    flex: 1;
  }

  .item-controls {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
  }

  .quantity {
    font-weight: bold;
    color: var(--primary-color);
  }

  .expiry {
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .expiry.expired {
    color: var(--error-color, #dc3545);
    background-color: rgba(220, 53, 69, 0.1);
  }

  .expiry.expires-today {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.1);
    font-weight: 600;
  }

  .expiry.expiring-soon {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.05);
  }

  .expiry.expiry-safe {
    color: var(--success-color, #4caf50);
    background-color: rgba(76, 175, 80, 0.05);
  }

  .auto-add-info {
    font-size: 0.8em;
    color: var(--success-color);
    font-weight: bold;
  }

  .category-group {
    margin-bottom: 20px;
  }

  .location-group {
    margin-bottom: 20px;
  }

  .category-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }

  .location-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }

  .item-grid-card {
    margin-bottom: 0;
    min-height: 168px;
    padding: 0;
    overflow: hidden;
  }

  .item-grid-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 168px;
    padding: 16px;
    gap: 16px;
  }

  .item-grid-main {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .item-grid-main .item-name {
    font-size: 1.4em;
    line-height: 1.2;
  }

  .item-grid-description {
    font-size: 1.05em;
    color: var(--secondary-text-color);
    word-break: break-word;
  }

  .item-grid-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
  }

  .item-grid-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
  }

  .item-grid-meta .quantity {
    font-size: 1.6em;
    line-height: 1;
  }

  .item-grid-meta .expiry,
  .item-grid-meta .location,
  .item-grid-meta .category,
  .item-grid-meta .location-category,
  .item-grid-meta .auto-add-info {
    font-size: 0.85em;
  }

  .item-grid-actions {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: flex-end;
  }

  .item-grid-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  .item-grid-menu-panel {
    display: none;
    gap: 8px;
  }

  .item-grid-card.menu-open .item-grid-menu-panel {
    display: flex;
  }

  .item-grid-card.menu-open .grid-menu-btn ha-icon {
    transform: rotate(180deg);
  }

  .grid-action-btn {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    padding: 0;
    border: 1px solid var(--divider-color, #d0d0d0);
    border-radius: 12px;
    background: var(--card-background-color, #ffffff);
    color: var(--primary-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  }

  .grid-action-btn ha-icon {
    --mdc-icon-size: 24px;
    transition: transform 0.2s ease;
  }
`}
  ${a`
  .validation-message {
    background: var(--error-color, #f44336);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.9em;
    display: none;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
    border-left: 4px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }

  .validation-message.show {
    display: flex;
    animation: slideInDown 0.3s ease-out;
  }

  .validation-message::before {
    content: '⚠️';
    font-size: 1.1em;
    flex-shrink: 0;
  }

  .validation-text {
    flex: 1;
    line-height: 1.4;
    font-weight: 500;
  }

  @keyframes slideInDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .input-error {
    border-color: var(--error-color, #f44336) !important;
    box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2) !important;
    animation: shake 0.3s ease-in-out;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    75% {
      transform: translateX(2px);
    }
  }

  .add-item-form {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid var(--divider-color);
  }

  .form-header {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--primary-text-color);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--primary-text-color);
    font-size: 0.9em;
  }

  .form-row {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    min-width: 120px;
  }

  .input-group label {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    font-weight: 500;
  }

  input:not([type='checkbox']),
  select {
    padding: 14px 16px;
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    font-size: 16px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    box-sizing: border-box;
  }

  input:not([type='checkbox']):focus,
  select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color), 0.1);
    transform: translateY(-1px);
  }

  input::placeholder {
    color: var(--secondary-text-color);
    opacity: 0.7;
  }

  input[type='checkbox'] {
    appearance: none !important;
    width: 20px !important;
    height: 20px !important;
    border: 2px solid var(--primary-color) !important;
    border-radius: 4px !important;
    background: var(--card-background-color) !important;
    cursor: pointer !important;
    position: relative !important;
    margin: 0 !important;
    padding: 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    flex-shrink: 0 !important;
  }

  input[type='checkbox']:checked {
    background: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
    transform: scale(1.05) !important;
  }

  input[type='checkbox']:checked::after {
    content: '✓' !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) scale(1) !important;
    color: var(--text-primary-color, white) !important;
    font-size: 12px !important;
    font-weight: bold !important;
    animation: checkmark 0.2s ease-in-out !important;
  }

  @keyframes checkmark {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  input[type='checkbox']:hover {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 25, 118, 210), 0.1) !important;
  }

  .checkbox-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95em;
    color: var(--primary-text-color);
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    padding: 4px 0;
  }

  .auto-add-id-container {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .auto-add-section {
    border-top: 1px solid var(--divider-color);
    padding-top: 20px;
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
  }

  .auto-add-section .checkbox-label {
    cursor: pointer;
    font-size: 0.95em;
    color: var(--primary-text-color);
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    flex: 1;
  }

  .auto-add-section .auto-add-controls {
    flex-basis: 100%;
    margin-top: 8px;
  }

  .auto-add-controls {
    display: none;
    margin-top: 16px;
    padding: 20px;
    background: var(--secondary-background-color, rgba(var(--rgb-primary-color), 0.05));
    border-radius: 12px;
    border: 1px solid var(--divider-color, #e9ecef);
  }

  .auto-add-header {
    display: block;
    font-size: 0.85em;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input[type='checkbox']:checked + label + .auto-add-controls,
  input[type='checkbox']:checked ~ .auto-add-controls {
    display: block !important;
  }

  #item-auto-add:checked ~ .auto-add-controls,
  #modal-auto-add:checked ~ .auto-add-controls,
  [id$='auto-add']:checked ~ .auto-add-controls,
  [id$='AUTO_ADD']:checked ~ .auto-add-controls {
    display: block !important;
  }

  .auto-add-required {
    border-color: var(--primary-color) !important;
  }

  .auto-add-controls label:has(+ .auto-add-required)::after,
  .auto-add-controls .input-group:has(.auto-add-required) label::after {
    content: ' *';
    color: var(--error-color, #f44336);
    font-weight: bold;
  }

  .auto-add-controls.has-errors {
    border-color: var(--error-color, #f44336);
    background: rgba(244, 67, 54, 0.05);
  }

  .input-error:focus {
    animation: none; /* Stop shake when user focuses to fix */
  }

  .autocomplete-container {
    position: relative;
  }

  .autocomplete-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--card-background-color);
    border: 2px solid var(--divider-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .autocomplete-option {
    padding: 14px 16px;
    cursor: pointer;
    color: var(--primary-text-color);
    font-size: 16px;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid var(--divider-color);
  }

  .autocomplete-option:last-child {
    border-bottom: none;
  }

  .autocomplete-option:hover,
  .autocomplete-option.selected {
    background: var(--secondary-background-color, rgba(var(--rgb-primary-color), 0.05));
  }

  .autocomplete-option.selected {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .autocomplete-container input {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4l3 3 3-3' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 48px;
  }

  .autocomplete-container input:focus {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4l3 3 3-3' stroke='var(--primary-color)' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  }

  .multi-select-container {
    position: relative;
  }

  .multi-select-trigger {
    padding: 14px 16px;
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }

  .multi-select-trigger:hover {
    border-color: var(--primary-color);
  }

  .multi-select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--card-background-color);
    border: 2px solid var(--divider-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .multi-select-option {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid var(--divider-color);
    gap: 12px;
  }

  .multi-select-option:last-child {
    border-bottom: none;
  }

  .multi-select-option:hover {
    background: var(--secondary-background-color);
  }

  .multi-select-option input[type='checkbox'] {
    margin: 0;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .multi-select-option span {
    flex: 1;
    user-select: none;
  }

  .multi-select-arrow {
    transition: transform 0.3s ease;
    margin-left: 8px;
  }

  .multi-select-trigger.open .multi-select-arrow {
    transform: rotate(180deg);
  }
`}
  ${a`
  button {
    padding: 14px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 48px;
  }

  .primary-btn,
  .save-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .primary-btn:hover,
  .save-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--rgb-primary-color), 0.3);
  }

  .add-new-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
  }

  .search-row .add-new-btn {
    width: 44px;
    height: 44px;
    padding: 0;
    flex: 0 0 44px;
  }

  .add-new-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .add-new-btn:active {
    transform: translateY(0);
  }

  .control-btn {
    padding: 8px 12px;
    font-size: 16px;
    font-weight: bold;
    min-width: 40px;
    min-height: 40px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .control-btn ha-icon,
  .edit-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .control-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: var(--disabled-color, #ccc);
    transform: none;
    box-shadow: none;
  }

  .add-btn {
    width: 100%;
    margin-top: 8px;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .edit-btn {
    padding: 6px 8px;
    font-size: 12px;
    min-width: auto;
    min-height: auto;
    background: var(--secondary-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  .edit-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }

  .toggle-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .toggle-btn:hover {
    opacity: 0.9;
  }

  .toggle-btn.has-active-filters {
    background: var(--warning-color, #ff9800) !important;
    position: relative;
  }

  .toggle-btn.has-active-filters::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background: var(--error-color, #f44336);
    border-radius: 50%;
    border: 2px solid var(--card-background-color, white);
  }

  .clear-only-btn {
    padding: 12px 16px;
    background: var(--secondary-background-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clear-only-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .clear-only-btn.has-active-filters {
    background: var(--warning-color, #ff9800);
    color: var(--text-primary-color, white);
    border-color: var(--warning-color, #ff9800);
  }

  .cancel-btn {
    background: var(--secondary-background-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 2px solid var(--divider-color, #e0e0e0);
  }

  .cancel-btn:hover {
    background: var(--primary-background-color);
    transform: translateY(-1px);
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--secondary-text-color);
    padding: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    min-height: auto;
  }

  .close-btn:hover {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }
`}
  ${a`
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  .modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: var(--card-background-color);
    padding: 32px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--divider-color);
  }

  .modal-header h3 {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
    margin: 0;
  }

  .modal-title {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  .modal-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    justify-content: flex-end;
  }

  .modal-buttons button {
    padding: 12px 24px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
`}
  ${a`
  .controls-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .controls-row .sorting-controls {
    flex: 1;
    margin-bottom: 0;
  }

  .search-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
  }

  .search-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 0;
    flex-wrap: nowrap;
  }

  .search-row input {
    flex: 1;
    min-width: 0;
  }

  .search-row input.has-value {
    border-color: var(--warning-color, #ff9800);
    box-shadow: 0 0 0 1px var(--warning-color, #ff9800);
  }

  .sorting-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sorting-controls label {
    font-weight: bold;
    color: var(--primary-text-color);
    white-space: nowrap;
    margin-bottom: 0;
  }

  .sorting-controls select {
    flex: 1;
    max-width: 200px;
  }

  .advanced-filters {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .filter-row {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
    flex: 1;
  }

  .filter-group label {
    font-size: 0.9em;
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .filter-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }

  .filter-actions button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  #apply-filters {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
  }

  #clear-filters {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  #apply-filters:hover,
  #clear-filters:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`}
  ${a`
  @media (max-width: 768px) {
    .item-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .controls-row {
      flex-direction: column;
      align-items: stretch;
    }

    .add-new-btn {
      width: 100%;
      margin-top: 8px;
    }

    .modal-content {
      padding: 24px;
      margin: 16px;
      width: calc(100% - 32px);
      border-radius: 12px;
    }

    .form-row {
      flex-direction: column;
      gap: 12px;
    }

    .modal-buttons {
      flex-direction: column-reverse;
    }

    .modal-buttons button {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .item-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (min-width: 768px) {
    .item-row {
      flex-wrap: nowrap;
    }

    .add-btn {
      width: auto;
      margin-top: 0;
    }
  }
`}
  ${a`
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
    background-color: var(--card-background-color);
  }

  .header-content {
    flex: 1;
    min-width: 0; /* Allows text to wrap */
  }

  .inventory-title {
    margin: 0 0 2px 0;
    font-size: 1.1em; /* Reduced from 1.2em */
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.1;
  }

  .inventory-description {
    margin: 0;
    font-size: 0.75em; /* Reduced from 0.8em */
    color: var(--secondary-text-color);
    line-height: 1.2;
    opacity: 0.8;
    max-width: 300px;
  }

  .expiry-indicators {
    display: flex;
    flex-direction: row; /* Changed from column to row */
    gap: 6px; /* Increased gap for horizontal layout */
    margin-left: 16px;
    flex-shrink: 0;
  }

  .expiring-badge,
  .expired-badge {
    display: inline-flex;
    align-items: center;
    gap: 2px; /* Reduced from 3px */
    padding: 2px 5px; /* Reduced from 2px 6px */
    border-radius: 6px; /* Reduced from 8px */
    font-size: 0.65em; /* Reduced from 0.7em */
    font-weight: 500;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .expiring-badge:hover,
  .expired-badge:hover {
    transform: translateY(-1px);
  }

  .expiring-badge {
    background-color: var(--warning-color, #ff9800);
    color: var(--text-primary-color, white);
  }

  .expired-badge {
    background-color: var(--error-color, #f44336);
    color: var(--text-primary-color, white);
  }

  .expiring-badge ha-icon,
  .expired-badge ha-icon {
    --mdc-icon-size: 11px; /* Reduced from 12px */
  }

  @media (max-width: 600px) {
    .card-header {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .expiry-indicators {
      margin-left: 0;
      align-self: flex-end;
      gap: 6px;
    }

    .inventory-description {
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    .card-header {
      padding: 12px;
    }

    .inventory-title {
      font-size: 1em; /* Further reduced for mobile */
    }

    .inventory-description {
      font-size: 0.7em; /* Further reduced for mobile */
    }

    .expiring-badge,
    .expired-badge {
      padding: 2px 4px; /* Even more compact on mobile */
      font-size: 0.6em; /* Smaller text on mobile */
    }

    .expiring-badge ha-icon,
    .expired-badge ha-icon {
      --mdc-icon-size: 10px; /* Smaller icon on mobile */
    }
  }
`}
`;
function Ke(t, e, i, o) {
  const n = e.filter((t) => {
    if (!t.expiry_date || (t.quantity ?? 0) <= 0) return !1;
    const e = t.expiry_alert_days || Te.EXPIRY_ALERT_DAYS;
    return Ue.isExpiringSoon(t.expiry_date, e);
  }).length;
  const r = (function (t) {
    return t.filter(
      (t) => !(!t.expiry_date || (t.quantity ?? 0) <= 0) && Ue.isExpired(t.expiry_date),
    ).length;
  })(e);
  return `\n      <div class="card-header">\n        <div class="header-content">\n          <h2 class="inventory-title">${Ue.sanitizeHtml(t)}</h2>\n          ${o && o.trim() ? `<p class="inventory-description">${Ue.sanitizeHtml(o)}</p>` : ''}\n        </div>\n        ${r > 0 || n > 0 ? `\n          <div class="expiry-indicators">\n            ${r > 0 ? `\n                <span class="expired-badge" title="${Fe.localize(i, 'header.items_expired', { count: r }, `${r} items expired`)}">\n                <ha-icon icon="mdi:calendar-remove"></ha-icon>\n                ${r}\n              </span>\n            ` : ''}\n            ${n > 0 ? `\n                <span class="expiring-badge" title="${Fe.localize(i, 'header.items_expiring_soon', { count: n }, `${n} items expiring soon`)}">\n                <ha-icon icon="mdi:calendar-alert"></ha-icon>\n                ${n}\n              </span>\n            ` : ''}\n          </div>\n        ` : ''}\n      </div>\n    `;
}
function ti(t, e) {
  return `\n    ${(function (t, e) {
    return `\n    <div class="search-row">\n      <input \n        type="text" \n        id="${le}" \n        placeholder="${Fe.localize(e, 'filters.search_placeholder', void 0, 'Search items...')}" \n        value="${t.searchText || ''}"\n        class="search-input ${t.searchText ? 'has-value' : ''}"\n      />\n      <button id="${oe}" \n        class="clear-only-btn ${Ue.hasActiveFilters(t) ? 'has-active-filters' : ''}">\n        ×\n      </button>\n      <button id="${Kt}" class="add-new-btn">\n        +\n      </button>\n    </div>\n`;
  })(t, e)}\n  `;
}
function ei(t) {
  return `\n    <div class="autocomplete-container">\n      <input \n        type="text" \n        id="${t.id}" \n        value="${t.value || ''}"\n        placeholder="${t.placeholder || ''}"\n        autocomplete="off"\n      />\n      <div class="autocomplete-dropdown" id="${t.id}-dropdown"></div>\n    </div>\n  `;
}
function ii(t, e, i, o = [], n = []) {
  const r = e.id === Mt ? 'add' : 'edit';
  return `\n    <div id="${e.id}" class="modal">\n      <div class="modal-content">\n\n        ${(function (
    t,
  ) {
    return `\n    <div class="modal-header">\n      <h3>${t.title}</h3>\n      <button class="${he}" ${t.closeAction ? `data-action="${t.closeAction}"` : ''}>\n        ×\n      </button>\n    </div>\n  `;
  })(
    e,
  )}\n\n        <div class="modal-body">\n          <div id="${r}-validation-message" class="validation-message">\n            <span class="validation-text"></span>\n          </div>\n\n          ${(function (
    t,
    e,
  ) {
    return `\n    <div class="form-group">\n      <label for="${t}-${Qt}" class="form-label">\n        ${Fe.localize(e, 'modal.name_required', void 0, 'Name *')}\n      </label>\n      <input type="text" id="${t}-${Qt}" required />\n    </div> \n  `;
  })(r, i)}\n          ${(function (t, e) {
    return `\n    <div class="form-group">\n      <label for="${t}-${Ft}" class="form-label">\n        ${Fe.localize(e, 'modal.description', void 0, 'Description')}\n      </label>\n      <input type="text" id="${t}-${Ft}" placeholder="${Fe.localize(e, 'modal.description_placeholder', void 0, 'Item description')}" />\n    </div> \n  `;
  })(r, i)}\n          ${(function (t, e) {
    return `\n    <div class="auto-add-id-container">\n      <input type="checkbox" id="${t}-${Ot}" class="auto-add-id-checkbox" />\n      <label for="${t}-${Ot}" class="checkbox-label">\n        ${Fe.localize(e, 'modal.auto_add_id_to_description', void 0, 'Append inventory ID to item description')}\n      </label>\n    </div>\n  `;
  })(r, i)}\n\n          <div class="form-row">\n            ${(function (t, e) {
    return `\n    <div class="input-group">\n      <label for="${t}-${Jt}">\n        ${Fe.localize(e, 'modal.quantity', void 0, 'Quantity')}\n      </label>\n      <input type="number" id="${t}-${Jt}" min="0" />\n    </div>\n  `;
  })(r, i)}\n            ${(function (t, e) {
    return `\n    <div class="input-group">\n      <label for="${t}-${Zt}">\n        ${Fe.localize(e, 'modal.unit', void 0, 'Unit')}\n      </label>\n      <input type="text" id="${t}-${Zt}" placeholder="${Fe.localize(e, 'modal.unit_placeholder', void 0, 'kg, pcs, etc.')}" />\n    </div>\n  `;
  })(r, i)}\n          </div>\n\n          <div class="form-row">\n            ${(function (
    t,
    e,
    i = [],
  ) {
    return `\n    <div class="input-group">\n      <label for="${t}-${Ut}" class="form-label">\n        ${Fe.localize(e, 'modal.category', void 0, 'Category')}\n      </label>\n      ${ei({ id: `${t}-${Ut}`, placeholder: Fe.localize(e, 'modal.category_placeholder', void 0, 'Food, Tools, Supplies, etc.'), options: i.sort((t, e) => t.localeCompare(e, void 0, { sensitivity: 'base' })) })}\n    </div>\n  `;
  })(r, i, o)}\n            ${(function (t, e, i = []) {
    return `\n    <div class="input-group">\n      <label for="${t}-${Yt}" class="form-label">\n        ${Fe.localize(e, 'modal.location', void 0, 'Location')}\n      </label>\n      ${ei({ id: `${t}-${Yt}`, placeholder: Fe.localize(e, 'modal.location_placeholder', void 0, 'Pantry, Garage Shelf, etc.'), options: i.sort((t, e) => t.localeCompare(e, void 0, { sensitivity: 'base' })) })}\n    </div>\n  `;
  })(r, i, n)}\n          </div>\n\n          <div class="form-row">\n            ${(function (
    t,
    e,
  ) {
    return `\n    <div class="input-group">\n      <label for="${t}-${jt}" class="form-label">\n        ${Fe.localize(e, 'modal.expiry_date', void 0, 'Expiry Date')}\n      </label>\n      <input type="date" id="${t}-${jt}" />\n    </div>\n  `;
  })(r, i)}\n            ${(function (t, e) {
    return `\n    <div class="input-group expiry-threshold-section">\n      <label for="${t}-${Bt}" class="form-label">\n        ${Fe.localize(e, 'modal.expiry_alert_threshold', void 0, 'Expiry Alert Threshold')}\n        <span class="optional">\n          ${Fe.localize(e, 'modal.days_before_expiry', void 0, '(days before expiry)')}\n        </span>\n      </label>\n      <input \n        type="number" \n        id="${t}-${Bt}" \n        min="1" \n        max="365"\n        placeholder="${Fe.localize(e, 'modal.set_expiry_first', void 0, 'Set expiry date first')}"\n        disabled\n      />\n      <small class="help-text">\n        ${Fe.localize(e, 'modal.expiry_help_text', void 0, 'How many days before expiry to show alerts')}\n      </small>\n    </div>\n  `;
  })(
    r,
    i,
  )}\n          </div>\n\n          <div class="form-group auto-add-section">\n            ${(function (
    t,
    e,
  ) {
    return `\n    <input type="checkbox" id="${t}-${Nt}" class="auto-add-checkbox" />\n    <label for="${t}-${Nt}" class="checkbox-label">\n      ${Fe.localize(e, 'modal.auto_add_when_low', void 0, 'Auto-add to todo list when low')}\n    </label>\n  `;
  })(r, i)}\n            ${(function (t, e, i) {
    return `\n    <div class="auto-add-controls" id="${t}-auto-add-controls">\n      <div class="auto-add-header">${Fe.localize(i, 'modal.auto_add_settings', void 0, 'Auto-add Settings')}</div>\n\n      <div class="form-row">\n\n        <div class="input-group">\n          <label for="${t}-${qt}">\n            ${Fe.localize(i, 'modal.quantity_threshold', void 0, 'Quantity Threshold')}\n          </label>\n          <input \n            type="number" \n            id="${t}-${qt}" \n            min="0"\n            class="auto-add-required"\n            placeholder="${Fe.localize(i, 'modal.minimum_quantity', void 0, 'Minimum quantity')}"\n          />\n        </div>\n\n        <div class="input-group">\n          <label for="${t}-${Wt}">${Fe.localize(i, 'modal.todo_list', void 0, 'Todo List')}</label>\n          <select id="${t}-${Wt}" class="auto-add-required">\n            <option value="">${Fe.localize(i, 'modal.select_list', void 0, 'Select list...')}</option>\n            ${e.map((t) => `<option value="${t.id}">${t.name}</option>`).join('')}\n          </select>\n        </div>\n\n      </div>\n\n    </div>\n  `;
  })(
    r,
    t,
    i,
  )}\n          </div>\n        </div>\n\n        <div class="modal-buttons">\n          <button ${e.primaryButtonId ? `id="${e.primaryButtonId}"` : ''} class="save-btn">${e.primaryButtonText}</button>\n          <button class="cancel-btn" ${e.closeAction ? `data-action="${e.closeAction}"` : ''}>\n            ${Fe.localize(i, 'modal.cancel', void 0, 'Cancel')}\n          </button>\n        </div>\n      </div>\n    </div>\n  `;
}
const oi = (t, e, i = Te.EXPIRY_ALERT_DAYS) => {
    if (!t.expiry_date) return null;
    const o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    const n = /* @__PURE__ */ new Date(t.expiry_date + 'T00:00:00'),
      r = Math.floor((n.getTime() - o.getTime()) / 864e5);
    if (r < 0) {
      const t = Math.abs(r),
        i = 1 === t ? 'expiry.expired_day_ago' : 'expiry.expired_days_ago';
      return {
        class: 'expired',
        label: Fe.localize(e, i, { days: t }, `Expired ${t} day${1 !== t ? 's' : ''} ago`),
      };
    }
    if (0 === r)
      return {
        class: 'expires-today',
        label: Fe.localize(e, 'expiry.expires_today', void 0, 'Expires today'),
      };
    if (r <= i) {
      const t = 1 === r ? 'expiry.expires_in_day' : 'expiry.expires_in_days';
      return {
        class: 'expiring-soon',
        label: Fe.localize(e, t, { days: r }, `Expires in ${r} day${1 !== r ? 's' : ''}`),
      };
    }
    return { class: 'expiry-safe', label: `${t.expiry_date}` };
  },
  ni = (t) =>
    t.location && t.category
      ? `<span class="location-category">${t.location} | ${t.category}</span>`
      : t.location
        ? `<span class="location">${t.location}</span>`
        : t.category
          ? `<span class="category">${t.category}</span>`
          : '',
  ri = (t, e, i) => {
    if (!t.auto_add_enabled) return '';
    const o = ((t, e) => {
      const i = t.find((t) => t.entity_id === e || t.id === e);
      return i ? i.name : e;
    })(e, t.todo_list || '');
    return `<span class="auto-add-info">${Fe.localize(i, 'items.auto_add_info', { quantity: t.auto_add_to_list_quantity || 0, list: o }, `Auto-add at ƒ%Ï ${t.auto_add_to_list_quantity || 0} ƒÅ' ${o}`)}</span>`;
  };
function ai(t, e, i, o, n = !1, r = !1) {
  if (0 === t.length) {
    return `<div class="no-items">${Fe.localize(o, 'items.no_items', void 0, 'No items in inventory')}</div>`;
  }
  return 'category' === e ? si(t, i, o, n) : 'location' === e ? li(t, i, o, n) : di(t, i, o, n, r);
}
function si(t, e, i, o = !1, n = !1) {
  const r = Ue.groupItemsByCategory(t);
  return Object.keys(r)
    .sort()
    .map(
      (t) =>
        `\n        <div class="${ce}">\n          <div class="${pe}">${t}</div>\n          ${di(r[t], e, i, o, n)}\n        </div>\n      `,
    )
    .join('');
}
function li(t, e, i, o = !1, n = !1) {
  const r = Ue.groupItemsByLocation(t);
  return Object.keys(r)
    .sort()
    .map(
      (t) =>
        `\n        <div class="${ue}">\n          <div class="${me}">${t}</div>\n          ${di(r[t], e, i, o, n)}\n        </div>\n`,
    )
    .join('');
}
function di(t, e, i, o, n) {
  const r = t
    .map((t) =>
      n
        ? (function (t, e, i) {
            const o = oi(t, i, t.expiry_alert_days),
              n = t.unit ? `${t.quantity} ${t.unit}` : `${t.quantity}`;
            return `\n    <div class="item-row item-grid-card ${0 === t.quantity ? 'zero-quantity' : ''} ${t.auto_add_enabled ? 'auto-add-enabled' : ''}" data-action="item_click" data-name="${t.name}">\n      <div class="item-grid-content">\n        <div class="item-grid-main">\n          <span class="item-name">${t.name}</span>\n          ${t.description ? `<span class="item-grid-description">${t.description}</span>` : ni(t)}\n        </div>\n        <div class="item-grid-footer">\n          <div class="item-grid-meta">\n            <span class="quantity">${n}</span>\n            ${o ? `<span class="expiry ${o.class}">${o.label}</span>` : ''}\n            ${t.description && (t.location || t.category) ? ni(t) : ''}\n            ${t.auto_add_enabled ? ri(t, e, i) : ''}\n          </div>\n          <div class="item-grid-actions">\n            <div class="item-grid-menu">\n              <button class="grid-menu-btn grid-action-btn" data-action="toggle_item_menu" data-name="${t.name}" aria-label="Toggle item actions" aria-expanded="false">\n                <ha-icon icon="mdi:chevron-double-right"></ha-icon>\n              </button>\n              <div class="item-grid-menu-panel">\n                <button class="grid-action-btn" data-action="open_edit" data-name="${t.name}" aria-label="Edit item">\n                  <ha-icon icon="mdi:pencil"></ha-icon>\n                </button>\n                <button class="grid-action-btn" data-action="remove" data-name="${t.name}" aria-label="Remove item">\n                  <ha-icon icon="mdi:trash-can-outline"></ha-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  `;
          })(t, e, i)
        : o
          ? (function (t, e, i) {
              const o = oi(t, i, t.expiry_alert_days);
              return `\n    <div class="item-row ${0 === t.quantity ? 'zero-quantity' : ''} ${t.auto_add_enabled ? 'auto-add-enabled' : ''}" data-action="item_click" data-name="${t.name}">\n      <div class="item-header">\n        <span class="item-name">${t.name}</span>\n        ${ni(t)}\n      </div>\n      <div class="item-description">\n        <span>${t.description || ''}</span>\n      </div>\n      <div class="item-footer">\n        <div class="item-details">\n          ${o ? `<span class="expiry ${o.class}">${o.label}</span>` : ''}\n          ${ri(t, e, i)}\n        </div>\n        <div class="item-controls">\n          <button class="edit-btn" data-action="open_edit" data-name="${t.name}" aria-label="Edit item">\n            <ha-icon icon="mdi:cog"></ha-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  `;
            })(t, e, i)
          : (function (t, e, i) {
              const o = oi(t, i, t.expiry_alert_days);
              return `\n    <div class="item-row ${0 === t.quantity ? 'zero-quantity' : ''} ${t.auto_add_enabled ? 'auto-add-enabled' : ''}" data-action="item_click" data-name="${t.name}">\n      <div class="item-header">\n        <span class="item-name">${t.name}</span>\n        ${ni(t)}\n      </div>\n      <div class="item-description">\n        <span>${t.description || ''}</span>\n      </div>\n      <div class="item-footer">\n        <div class="item-details">\n          <span class="quantity">${t.quantity} ${t.unit || ''}</span>\n          ${o ? `<span class="expiry ${o.class}">${o.label}</span>` : ''}\n          ${ri(t, e, i)}\n        </div>\n        <div class="item-controls">\n          <button class="edit-btn" data-action="open_edit" data-name="${t.name}" aria-label="Edit item">\n            <ha-icon icon="mdi:cog"></ha-icon>\n          </button>\n          <button class="control-btn" data-action="decrement" data-name="${t.name}" aria-label="Decrease quantity" ${0 === t.quantity ? 'disabled' : ''}>\n            <ha-icon icon="mdi:minus"></ha-icon>\n          </button>\n          <button class="control-btn" data-action="increment" data-name="${t.name}" aria-label="Increase quantity">\n            <ha-icon icon="mdi:plus"></ha-icon>\n          </button>\n          <button class="control-btn" data-action="remove" data-name="${t.name}" aria-label="Remove item">\n            <ha-icon icon="mdi:trash-can-outline"></ha-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  `;
            })(t, e, i),
    )
    .join('');
  return n ? `<div class="item-grid">${r}</div>` : r;
}
const ci = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    { __proto__: null, createItemsByCategory: si, createItemsByLocation: li, createItemsList: ai },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
function pi(t, e, i, o, n, r, a, s, l, d, c = !1, p = !1) {
  return `\n    <style>${Ge}</style>\n    <ha-card>\n      ${Ke(t, s, d, l)}\n\n      <div class="search-controls">\n        ${ti(i, d)}\n      </div>\n\n      ${(function (
    t,
    e,
  ) {
    const i = Xe(t, e),
      o = i.length > 0;
    return `\n    <div id="${te}" class="active-filters" style="display: ${o ? 'block' : 'none'};">\n      <div id="${ee}" class="filter-badges-container">\n        ${i.join('')}\n      </div>\n    </div>\n  `;
  })(
    i,
    d,
  )}\n\n      <div class="items-container ${p ? 'items-container-grid' : ''}">\n        ${e.length > 0 ? ai(e, o, a, d, c, p) : `<div class="empty-state">${Fe.localize(d, 'items.no_items', void 0, 'No items in inventory')}</div>`}\n      </div>\n\n      ${(function (
    t,
    e,
    i,
    o,
  ) {
    return ii(
      t,
      {
        id: Mt,
        title: Fe.localize(e, 'modal.add_item', void 0, 'Add Item'),
        primaryButtonText: Fe.localize(e, 'modal.add_item', void 0, 'Add Item'),
        primaryButtonId: Gt,
        closeAction: ve,
      },
      e,
      i,
      o,
    );
  })(a, d, n, r)}\n      ${(function (t, e, i, o) {
    return ii(
      t,
      {
        id: Rt,
        title: Fe.localize(e, 'modal.edit_item', void 0, 'Edit Item'),
        primaryButtonText: Fe.localize(e, 'modal.save_changes', void 0, 'Save Changes'),
      },
      e,
      i,
      o,
    );
  })(a, d, n, r)}\n    </ha-card>\n  `;
}
class hi {
  constructor(t) {
    this.shadowRoot = t;
  }
  renderCard(t, e, i, o, n, r, a, s = !1, l = !1) {
    const d = Ue.getInventoryName(t, e),
      c = Ue.getInventoryDescription(t),
      p = t?.attributes?.items || [],
      h = [...new Set(p.map((t) => t.category).filter((t) => !!t))].sort(),
      u = [...new Set(p.map((t) => t.location).filter((t) => !!t))].sort();
    this.shadowRoot.innerHTML = pi(d, i, o, n, h, u, r, p, c, a, s, l);
  }
  renderError(t, e) {
    const i = e ? Fe.localize(e, 'common.error', void 0, 'Error') : 'Error';
    this.shadowRoot.innerHTML = `\n      <style>${Ge}</style>\n      <ha-card>\n        <div class="card-content">\n          <div class="error-message" style="color: var(--error-color); padding: 16px; text-align: center;">\n            <p><strong>${i}:</strong> ${Ue.sanitizeHtml(t)}</p>\n          </div>\n        </div>\n      </ha-card>\n    `;
  }
  renderLoading(t) {
    const e = t ? Fe.localize(t, 'common.loading', void 0, 'Loading...') : 'Loading...';
    this.shadowRoot.innerHTML = `\n      <style>${Ge}</style>\n      <ha-card>\n        <div class="card-content">\n          <div class="loading-container" style="padding: 16px; text-align: center;">\n            <p>${e}</p>\n          </div>\n        </div>\n      </ha-card>\n    `;
  }
}
class ui {
  userInteracting = !1;
  renderTimeout = void 0;
  _lastEntityState = void 0;
  _renderCallback = void 0;
  _debouncedRenderFn = void 0;
  trackUserInteraction(t) {
    const e = t.querySelectorAll('input, select, textarea');
    for (const i of e)
      (i.addEventListener('focus', () => {
        this.userInteracting = !0;
      }),
        i.addEventListener('blur', () => {
          setTimeout(() => {
            this.userInteracting = !1;
          }, 100);
        }));
  }
  hasRealEntityChange(t, e) {
    const i = t.states[e];
    return (
      !!i &&
      (this._lastEntityState
        ? this.hasItemsChanged(this._lastEntityState.attributes?.items, i.attributes?.items)
        : ((this._lastEntityState = i), !0))
    );
  }
  hasItemsChanged(t, e) {
    const i = t || [],
      o = e || [],
      n = JSON.stringify(i) !== JSON.stringify(o);
    return (
      n &&
        e &&
        (this._lastEntityState = {
          ...this._lastEntityState,
          attributes: { ...this._lastEntityState?.attributes, items: [...o] },
        }),
      n
    );
  }
  debouncedRender(t, e = 100) {
    t || this._renderCallback
      ? (this._debouncedRenderFn ||
          (this._debouncedRenderFn = Ue.debounce(() => {
            this._renderCallback && this._renderCallback();
          }, e)),
        this._debouncedRenderFn())
      : console.warn('No render function provided to debouncedRender');
  }
  setRenderCallback(t) {
    this._renderCallback = t;
  }
  debouncedRenderWithCallback(t, e = 100) {
    this.debouncedRender(t, e);
  }
  debouncedRenderDefault(t = 100) {
    this.debouncedRender(void 0, t);
  }
  cleanup() {
    (this.renderTimeout && (clearTimeout(this.renderTimeout), (this.renderTimeout = void 0)),
      (this._renderCallback = void 0),
      (this.userInteracting = !1));
  }
}
function mi(t) {
  const e = t.shadowRoot || document,
    i = e.getElementById(`${t.id}-trigger`),
    o = e.getElementById(`${t.id}-dropdown`);
  if (!i || !o) return;
  let n = !1,
    r = [...t.selected];
  (i.addEventListener('click', (t) => {
    (t.stopPropagation(),
      e.querySelectorAll('.multi-select-dropdown').forEach((t) => {
        t !== o && (t.style.display = 'none');
      }),
      (n = !n),
      (o.style.display = n ? 'block' : 'none'));
  }),
    o.addEventListener('change', (e) => {
      const o = e.target;
      'checkbox' === o.type &&
        (o.checked ? r.includes(o.value) || r.push(o.value) : (r = r.filter((t) => t !== o.value)),
        (function () {
          const e = i.querySelector('.multi-select-label');
          e && (e.textContent = r.length > 0 ? `${r.length} selected` : t.placeholder);
        })(),
        t.onChange?.(r));
    }),
    o.addEventListener('click', (t) => {
      t.stopPropagation();
    }),
    e.addEventListener('click', (t) => {
      i.contains(t.target) || o.contains(t.target) || ((o.style.display = 'none'), (n = !1));
    }));
}
class gi {
  constructor(t, e, i, o, n, r, a, s, l, d) {
    ((this.getFreshState = l),
      (this.renderRoot = t),
      (this.services = e),
      (this.modals = i),
      (this.filters = o),
      (this.config = n),
      (this.hass = r),
      (this.renderCallback = a),
      (this.updateItemsCallback = s),
      (this.translations = d));
  }
  renderRoot;
  services;
  modals;
  filters;
  config;
  hass;
  renderCallback;
  updateItemsCallback;
  translations;
  boundClickHandler = void 0;
  boundChangeHandler = void 0;
  eventListenersSetup = !1;
  setupEventListeners() {
    if (this.eventListenersSetup)
      return void this.filters.setupSearchInput(this.config.entity, () =>
        this.handleSearchChange(),
      );
    (this.renderRoot.addEventListener('click', (t) => {
      this.handleClick(t).catch((t) => {
        console.error('Error in handleClick:', t);
      });
    }),
      this.renderRoot.addEventListener('change', (t) => {
        this.handleChange(t);
      }),
      this.filters.setupSearchInput(this.config.entity, () => this.handleSearchChange()),
      (this.eventListenersSetup = !0));
  }
  cleanupEventListeners() {
    (this.boundClickHandler && this.renderRoot.removeEventListener('click', this.boundClickHandler),
      this.boundChangeHandler &&
        this.renderRoot.removeEventListener('change', this.boundChangeHandler),
      (this.eventListenersSetup = !1));
  }
  updateDependencies(t, e) {
    ((this.config = t), (this.hass = e));
  }
  async handleClick(t) {
    const e = t.target,
      i = e.closest('[data-action][data-name]');
    if ('BUTTON' === i?.tagName && i.hasAttribute('data-processing'))
      return (t.preventDefault(), void t.stopPropagation());
    if (i?.dataset.action && i?.dataset.name)
      return i.dataset.action === Ee
        ? (t.preventDefault(), t.stopPropagation(), void this.toggleItemMenu(i))
        : (t.preventDefault(),
          t.stopPropagation(),
          void (await this.handleItemAction(i, i.dataset.action, i.dataset.name)));
    if (this.modals.handleModalClick(t)) return;
    const o = e.id;
    if (o && 'BUTTON' === e.tagName)
      switch (o) {
        case Kt: {
          (t.preventDefault(), t.stopPropagation());
          const e = this.getUniqueLocations(),
            i = this.getUniqueCategories();
          this.modals.openAddModal(this.translations, e, i);
          break;
        }
        case Gt:
          (t.preventDefault(), t.stopPropagation(), await this.handleAddItem());
          break;
        case ie:
          (t.preventDefault(), t.stopPropagation(), this.toggleAdvancedFilters());
          break;
        case oe:
          (t.preventDefault(), t.stopPropagation(), this.clearFilters());
          break;
        default:
          return;
      }
    else if ('BUTTON' === e.tagName) {
      if (e.classList.contains(ye))
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void (e.closest(`#${Rt}`) && (await this.handleSaveEdits()))
        );
      if (e.classList.contains(de))
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void (e.closest(`#${Mt}`)
            ? this.modals.closeAddModal()
            : e.closest(`#${Rt}`) && this.modals.closeEditModal())
        );
    }
  }
  handleChange(t) {
    const e = t.target;
    e instanceof HTMLInputElement &&
      'checkbox' === e.type &&
      (e.id.includes('auto') || e.id.includes('AUTO_ADD')) &&
      setTimeout(() => {
        const t = e.parentElement?.querySelector('.auto-add-controls');
        t && (t.style.display = e.checked ? 'block' : 'none');
      }, 0);
  }
  handleSearchChange() {
    const t = this.hass.states[this.config.entity];
    if (!t) return;
    const e = this.filters.getCurrentFilters(this.config.entity),
      i = this.config.sort_method || e.sortMethod || Te.SORT_METHOD,
      o = Ue.validateInventoryItems(t.attributes?.items || []),
      n = this.filters.filterItems(o, e),
      r = this.filters.sortItems(n, i, this.translations);
    (this.updateItemsCallback(r, i), this.filters.updateFilterIndicators(e, this.translations));
  }
  async handleItemAction(t, e, i) {
    const o = 'BUTTON' === t.tagName;
    if (!o || (!t.hasAttribute('disabled') && 'true' !== t.getAttribute('aria-disabled'))) {
      o &&
        (t.setAttribute('data-processing', 'true'),
        t.setAttribute('disabled', 'true'),
        (t.style.opacity = '0.6'),
        (t.style.pointerEvents = 'none'));
      try {
        const t = Ue.getInventoryId(this.hass, this.config.entity);
        switch (e) {
          case _e: {
            const e = this.hass.states[this.config.entity],
              o = Ue.validateInventoryItems(e?.attributes?.items || []).find((t) => t.name === i),
              n = {
                inventory_id: t,
                entity_id: this.config.entity,
                name: i,
                location: o?.location ?? '',
                category: o?.category ?? '',
                quantity: o?.quantity ?? 0,
                unit: o?.unit ?? '',
                description: o?.description ?? '',
                expiry_date: o?.expiry_date ?? '',
                expiry_alert_days: o?.expiry_alert_days ?? 0,
                auto_add_enabled: o?.auto_add_enabled ?? !1,
                auto_add_to_list_quantity: o?.auto_add_to_list_quantity ?? 0,
                todo_list: o?.todo_list ?? '',
              };
            (this.config.item_click_action?.service &&
              (await this.services.callItemClickAction(this.config.item_click_action, n)),
              await this.services.fireItemClickEvent(t, this.config.entity, i, o));
            break;
          }
          case xe:
            (await this.services.incrementItem(t, i), this.renderCallback());
            break;
          case be:
            (await this.services.decrementItem(t, i), this.renderCallback());
            break;
          case we: {
            const e = Fe.localize(
              this.translations,
              'actions.confirm_remove',
              { name: i },
              `Remove ${i} from inventory?`,
            );
            confirm(e) && (await this.services.removeItem(t, i), this.renderCallback());
            break;
          }
          case $e: {
            const t = this.getFreshState(),
              e = this.getUniqueLocations(),
              o = this.getUniqueCategories();
            this.modals.openEditModal(i, () => t, this.translations, e, o);
            break;
          }
          default:
            console.warn(`Unknown action: ${e}`);
        }
      } catch (n) {
        console.error(`Error performing ${e} on ${i}:`, n);
      } finally {
        setTimeout(() => {
          'BUTTON' === t.tagName &&
            (t.removeAttribute('data-processing'),
            t.removeAttribute('disabled'),
            (t.style.opacity = '1'),
            (t.style.pointerEvents = 'auto'));
        }, 200);
      }
    }
  }
  toggleItemMenu(t) {
    const e = t.closest('.item-grid-card');
    if (!(e instanceof HTMLElement)) return;
    const i = e.classList.toggle('menu-open');
    t.setAttribute('aria-expanded', String(i));
  }
  async handleAddItem() {
    (await this.modals.addItem(this.config)) && this.modals.closeAddModal();
  }
  async handleSaveEdits() {
    (await this.modals.saveEditModal(this.config)) && this.modals.closeEditModal();
  }
  toggleAdvancedFilters() {
    try {
      const t = this.filters.getCurrentFilters(this.config.entity);
      ((t.showAdvanced = !t.showAdvanced),
        this.filters.saveFilters(this.config.entity, t),
        this.renderCallback(),
        t.showAdvanced && this.initializeMultiSelects());
    } catch (t) {
      console.error('Error toggling advanced filters:', t);
    }
  }
  clearFilters() {
    try {
      this.filters.clearFilters(this.config.entity);
      const t = this.renderRoot.querySelector(le);
      (t && (t.value = ''), this.renderCallback());
      const e = this.filters.getCurrentFilters(this.config.entity);
      setTimeout(() => {
        this.filters.updateFilterIndicators(e, this.translations);
      }, 50);
    } catch (t) {
      console.error('Error clearing filters:', t);
      const e = Fe.localize(
        this.translations,
        'errors.clear_filters_error',
        void 0,
        'Error clearing filters. Please try again.',
      );
      alert(e);
    }
  }
  getUniqueLocations() {
    const t = this.hass.states[this.config.entity];
    if (!t?.attributes?.items) return [];
    const e = /* @__PURE__ */ new Set();
    return (
      Object.values(t.attributes.items).forEach((t) => {
        t.location?.trim() && e.add(t.location.trim());
      }),
      Array.from(e).sort((t, e) => t.localeCompare(e, void 0, { sensitivity: 'base' }))
    );
  }
  getUniqueCategories() {
    const t = this.hass.states[this.config.entity];
    if (!t?.attributes?.items) return [];
    const e = /* @__PURE__ */ new Set();
    return (
      Object.values(t.attributes.items).forEach((t) => {
        t.category?.trim() && e.add(t.category.trim());
      }),
      Array.from(e).sort((t, e) => t.localeCompare(e, void 0, { sensitivity: 'base' }))
    );
  }
  initializeMultiSelects() {
    const t = this.filters.getCurrentFilters(this.config.entity),
      e = this.getUniqueCategories(),
      i = this.getUniqueLocations();
    setTimeout(() => {
      (mi({
        id: ne,
        options: e,
        selected: t.category,
        placeholder: Fe.localize(
          this.translations,
          'filters.all_categories',
          void 0,
          'All Categories',
        ),
        shadowRoot: this.renderRoot,
        onChange: (t) => {
          const e = this.filters.getCurrentFilters(this.config.entity);
          ((e.category = t),
            this.filters.saveFilters(this.config.entity, e),
            this.filters.updateFilterIndicators(e, this.translations),
            this.applyFiltersWithoutRender());
        },
      }),
        mi({
          id: ae,
          options: i,
          selected: t.location,
          placeholder: Fe.localize(
            this.translations,
            'filters.all_locations',
            void 0,
            'All Locations',
          ),
          shadowRoot: this.renderRoot,
          onChange: (t) => {
            const e = this.filters.getCurrentFilters(this.config.entity);
            ((e.location = t),
              this.filters.saveFilters(this.config.entity, e),
              this.filters.updateFilterIndicators(e, this.translations),
              this.applyFiltersWithoutRender());
          },
        }),
        mi({
          id: re,
          options: ['none', 'expired', 'soon', 'future'],
          selected: t.expiry,
          placeholder: Fe.localize(this.translations, 'filters.all_items', void 0, 'All Items'),
          labels: {
            none: Fe.localize(this.translations, 'filters.no_expiry', void 0, 'No Expiry'),
            expired: Fe.localize(this.translations, 'filters.expired', void 0, 'Expired'),
            soon: Fe.localize(this.translations, 'filters.expiring_soon', void 0, 'Expiring Soon'),
            future: Fe.localize(this.translations, 'filters.future', void 0, 'Future'),
          },
          shadowRoot: this.renderRoot,
          onChange: (t) => {
            const e = this.filters.getCurrentFilters(this.config.entity);
            ((e.expiry = t),
              this.filters.saveFilters(this.config.entity, e),
              this.filters.updateFilterIndicators(e, this.translations),
              this.applyFiltersWithoutRender());
          },
        }),
        mi({
          id: se,
          options: ['zero', 'nonzero'],
          selected: t.quantity,
          placeholder: Fe.localize(
            this.translations,
            'filters.all_quantities',
            void 0,
            'All Quantities',
          ),
          labels: {
            zero: Fe.localize(this.translations, 'filters.zero', void 0, 'Zero'),
            nonzero: Fe.localize(this.translations, 'filters.non_zero', void 0, 'Non-zero'),
          },
          shadowRoot: this.renderRoot,
          onChange: (t) => {
            const e = this.filters.getCurrentFilters(this.config.entity);
            ((e.quantity = t),
              this.filters.saveFilters(this.config.entity, e),
              this.filters.updateFilterIndicators(e, this.translations),
              this.applyFiltersWithoutRender());
          },
        }));
    }, 0);
  }
  applyFiltersWithoutRender() {
    const t = this.hass.states[this.config.entity];
    if (!t) return;
    const e = this.filters.getCurrentFilters(this.config.entity),
      i = this.config.sort_method || e.sortMethod || Te.SORT_METHOD,
      o = Ue.validateInventoryItems(t.attributes?.items || []),
      n = this.filters.filterItems(o, e),
      r = this.filters.sortItems(n, i, this.translations);
    this.updateItemsCallback(r, i);
  }
}
class yi {
  renderRoot;
  isInitialized = !1;
  services;
  constructor(t) {
    this.renderRoot = t;
  }
  initialize(t, e, i, o, n, r, a) {
    if (this.isInitialized && this.services) return this.services;
    if (t && e && this.renderRoot)
      try {
        const s = new je(t),
          l = new Ze(this.renderRoot),
          d = new hi(this.renderRoot),
          c = new ui();
        c.setRenderCallback(i);
        const p = (e) => Ue.getInventoryId(t, e),
          h = new We(this.renderRoot, s, p, o),
          u = new gi(this.renderRoot, s, h, l, e, t, i, n, r, a);
        return (
          (this.services = {
            services: s,
            modals: h,
            filters: l,
            renderer: d,
            state: c,
            eventHandler: u,
          }),
          (this.isInitialized = !0),
          this.services
        );
      } catch (s) {
        return void console.error('Failed to initialize modules:', s);
      }
  }
  updateDependencies(t, e) {
    this.services && this.isInitialized && this.services.eventHandler.updateDependencies(e, t);
  }
  getServices() {
    return this.isInitialized ? this.services : void 0;
  }
  isReady() {
    return this.isInitialized && void 0 !== this.services;
  }
  cleanup() {
    (this.services &&
      (this.services.eventHandler?.cleanupEventListeners(),
      this.services.state?.cleanup(),
      this.services.modals?.destroy()),
      (this.services = void 0),
      (this.isInitialized = !1));
  }
}
class fi {
  lifecycleManager;
  renderRoot;
  updateTimeout = void 0;
  constructor(t, e) {
    ((this.lifecycleManager = t), (this.renderRoot = e));
  }
  render(t, e, i, o, n) {
    if (t && e && this.renderRoot)
      try {
        const r = t.entity,
          a = e.states[r];
        if (!a) {
          const t = Fe.localize(
            o,
            'errors.entity_not_found',
            { entity: r },
            `Entity ${r} not found. Please check your configuration.`,
          );
          return void this.renderError(t);
        }
        const s = this.lifecycleManager.getServices();
        if (!s) {
          const t = Fe.localize(
            o,
            'errors.initialization_failed',
            void 0,
            'Failed to initialize card components',
          );
          return void this.renderError(t);
        }
        const { filters: l, renderer: d, eventHandler: c, state: p } = s,
          h = l.getCurrentFilters(r),
          u = t.sort_method || h.sortMethod || Te.SORT_METHOD,
          m = !!t.grid,
          g = !!t.minimal,
          y = n(a.attributes?.items || []),
          f = l.filterItems(y, h),
          v = l.sortItems(f, u, o);
        (d.renderCard(a, r, v, h, u, i, o, g, m),
          c.setupEventListeners(),
          l.updateFilterIndicators(h, o),
          p.trackUserInteraction(this.renderRoot));
      } catch (r) {
        console.error('Error rendering card:', r);
        const t = Fe.localize(
          o,
          'errors.render_error',
          void 0,
          'An error occurred while rendering the card',
        );
        this.renderError(t);
      }
  }
  updateItemsOnly(t, e, i, o, n = !1, r = !1) {
    if (!this.renderRoot) return;
    const a = this.renderRoot.querySelector('.items-container');
    a &&
      Promise.resolve()
        .then(() => ci)
        .then(({ createItemsList: s }) => {
          a.innerHTML = s(t, e, i, o || {}, n, r);
        })
        .catch((t) => {
          console.error('Error loading templates:', t);
        });
  }
  debouncedRender(t) {
    (this.updateTimeout && clearTimeout(this.updateTimeout),
      (this.updateTimeout = setTimeout(() => t(), 100)));
  }
  refreshAfterSave(t) {
    setTimeout(() => t(), 50);
  }
  renderError(t, e) {
    if (!this.renderRoot) return;
    const i = this.lifecycleManager.getServices();
    if (i?.renderer) i.renderer.renderError(t);
    else {
      const i = e ? Fe.localize(e, 'common.error', void 0, 'Error') : 'Error';
      this.renderRoot.innerHTML = `\n        <ha-card>\n          <div class="card-content">\n            <div class="error-message" style="color: var(--error-color); padding: 16px; text-align: center;">\n              <p><strong>${i}:</strong> ${Ue.sanitizeHtml(t)}</p>\n            </div>\n          </div>\n        </ha-card>\n      `;
    }
  }
  cleanup() {
    this.updateTimeout && (clearTimeout(this.updateTimeout), (this.updateTimeout = void 0));
  }
}
let vi = 'A card to manage your inventories';
class bi extends st {
  _config = void 0;
  _hass = void 0;
  _todoLists = [];
  _translations = {};
  lifecycleManager;
  renderingCoordinator;
  constructor() {
    (super(),
      this.attachShadow({ mode: 'open' }),
      (this.lifecycleManager = new yi(this.shadowRoot)),
      (this.renderingCoordinator = new fi(this.lifecycleManager, this.shadowRoot)));
  }
  setConfig(t) {
    if (!t.entity) throw new Error('Entity is required');
    this._config = t;
  }
  set hass(t) {
    const e = this._hass;
    if (((this._hass = t), !e))
      return void this._loadTranslations().then(() => {
        (this._updateTodoLists(), this.render());
      });
    if (e && (e.language !== t.language || e.selectedLanguage !== t.selectedLanguage))
      return void this._loadTranslations().then(() => {
        (this._updateTodoLists(), this.render());
      });
    if ((this._updateTodoLists(), !e)) return void this.render();
    const i = this._config?.entity;
    if (i) {
      this.lifecycleManager.updateDependencies(this._hass, this._config);
      const e = this.lifecycleManager.getServices();
      e &&
        e.state.hasRealEntityChange(t, i) &&
        (e.state.userInteracting ? e.state.debouncedRender() : this.render());
    }
  }
  render() {
    if (
      this._config &&
      this._hass &&
      this.renderRoot &&
      this._translations &&
      0 !== Object.keys(this._translations).length
    ) {
      if (!this.lifecycleManager.isReady()) {
        if (
          !this.lifecycleManager.initialize(
            this._hass,
            this._config,
            () => this.render(),
            () => this._refreshAfterSave(),
            (t, e) => this._updateItemsOnly(t, e),
            () => ({ hass: this._hass, config: this._config, translations: this._translations }),
            this._translations,
          )
        )
          return void this.renderingCoordinator.renderError('Failed to initialize card components');
      }
      this.renderingCoordinator.render(
        this._config,
        this._hass,
        this._todoLists,
        this._translations,
        (t) => Ue.validateInventoryItems(t),
      );
    }
  }
  async _loadTranslations() {
    const t = this._hass?.language || this._hass?.selectedLanguage || 'en';
    try {
      this._translations = await Fe.loadTranslations(t);
    } catch (e) {
      (console.warn('Failed to load translations:', e), (this._translations = {}));
    }
  }
  localize(t, e, i) {
    return Fe.localize(this._translations, t, e, i);
  }
  _refreshAfterSave() {
    this.renderingCoordinator.refreshAfterSave(() => this.render());
  }
  _updateItemsOnly(t, e) {
    this.renderingCoordinator.updateItemsOnly(
      t,
      e,
      this._todoLists,
      this._translations,
      !!this._config?.minimal,
      !!this._config?.grid,
    );
  }
  _updateTodoLists() {
    this._hass && (this._todoLists = Ue.extractTodoLists(this._hass));
  }
  getCardSize() {
    return 4;
  }
  static getConfigElement() {
    return document.createElement('simple-inventory-config-editor');
  }
  static getStubConfig() {
    return { type: 'custom:simple-inventory-card-custom' };
  }
}
(!(async function () {
  try {
    const t = document.documentElement.lang || navigator.language.substring(0, 2) || 'en',
      e = await Fe.loadTranslations(t),
      i = Fe.localize(e, 'card.description', void 0, vi);
    if (i !== vi) {
      vi = i;
      const t = window.customCards?.find((t) => 'simple-inventory-card-custom' === t.type);
      t && (t.description = vi);
    }
  } catch (t) {
    console.warn('Failed to load card description translation:', t);
  }
})(),
  customElements.get('simple-inventory-card-custom') ||
    customElements.define('simple-inventory-card-custom', bi),
  customElements.get('simple-inventory-config-editor') ||
    customElements.define('simple-inventory-config-editor', Be),
  (window.customCards = window.customCards || []));
const xi = {
  type: 'simple-inventory-card-custom',
  name: 'Simple Inventory Card',
  description: vi,
  preview: !0,
  documentationURL: 'https://github.com/blaineventurine/simple-inventory-card-custom',
};
(window.customCards.find((t) => 'simple-inventory-card-custom' === t.type) ||
  window.customCards.push(xi),
  globalThis.setTimeout(() => {
    const t = new Event('custom_card_update', { bubbles: !0, cancelable: !1 });
    document.dispatchEvent(t);
  }, 2e3),
  console.info(
    `%c Simple Inventory Card %c ${t}`,
    'color: steelblue; background: black; font-weight: bold;',
  ));
class _i extends bi {
  setConfig(t) {
    const e = { ...t, minimal: !0, type: t.type || 'custom:simple-inventory-card-custom-minimal' };
    super.setConfig(e);
  }
  static getStubConfig() {
    return { type: 'custom:simple-inventory-card-custom-minimal', minimal: !0 };
  }
}
(customElements.get('simple-inventory-card-custom-minimal') ||
  customElements.define('simple-inventory-card-custom-minimal', _i),
  (window.customCards = window.customCards || []));
const $i = {
  type: 'simple-inventory-card-custom-minimal',
  name: 'Simple Inventory Card Minimal',
  description: 'A minimalist card to manage your inventories',
  preview: !0,
  documentationURL: 'https://github.com/blaineventurine/simple-inventory-card-custom',
};
(window.customCards.find((t) => 'simple-inventory-card-custom-minimal' === t.type) ||
  window.customCards.push($i),
  globalThis.setTimeout(() => {
    const t = new Event('custom_card_update', { bubbles: !0, cancelable: !1 });
    document.dispatchEvent(t);
  }, 2e3),
  console.info(
    `%c Simple Inventory Card Minimal %c ${t}`,
    'color: steelblue; background: black; font-weight: bold;',
  ));
class wi extends bi {
  setConfig(t) {
    const e = {
      ...t,
      grid: !0,
      minimal: !0,
      type: t.type || 'custom:simple-inventory-card-custom-minimal-grid',
    };
    super.setConfig(e);
  }
  static getStubConfig() {
    return { type: 'custom:simple-inventory-card-custom-minimal-grid', grid: !0, minimal: !0 };
  }
}
(customElements.get('simple-inventory-card-custom-minimal-grid') ||
  customElements.define('simple-inventory-card-custom-minimal-grid', wi),
  (window.customCards = window.customCards || []));
const Ei = {
  type: 'simple-inventory-card-custom-minimal-grid',
  name: 'Simple Inventory Card Minimal Grid',
  description: 'A minimalist grid card to manage your inventories',
  preview: !0,
  documentationURL: 'https://github.com/blaineventurine/simple-inventory-card-custom',
};
(window.customCards.find((t) => 'simple-inventory-card-custom-minimal-grid' === t.type) ||
  window.customCards.push(Ei),
  globalThis.setTimeout(() => {
    const t = new Event('custom_card_update', { bubbles: !0, cancelable: !1 });
    document.dispatchEvent(t);
  }, 2e3),
  console.info(
    `%c Simple Inventory Card Minimal Grid %c ${t}`,
    'color: steelblue; background: black; font-weight: bold;',
  ));
export {
  Be as ConfigEditor,
  _i as MinimalInventoryCard,
  wi as MinimalInventoryGridCard,
  bi as SimpleInventoryCard,
};

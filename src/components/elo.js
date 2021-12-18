webpackJsonp([0, 4], [, , , , function(t, e, i) {
  "use strict"

  function s() {
    var t = _.a.mobile || _.a.tablet
    return t ? document.body.classList.add("is-touch") : document.body.classList.remove("is-touch"), t
  }

  function n(t) {
    return t.json()
  }

  function a(t) {
    if (t.status >= 200 && t.status < 300) return t
    var e = new Error(t.statusText)
    throw e.response = t, e
  }

  function o(t) {
    var e = t.path, i = t.method, s = void 0 === i ? "get" : i, o = t.headers, r = void 0 === o ? {} : o, l = t.params,
      c = void 0 === l ? {} : l, d = t.payload, h = t.parseResponse, u = void 0 === h ? n : h
    Object.assign(r, { Accept: "application/json", "Content-Type": "application/json" })
    var p = "https://ijk3xc0nh6.execute-api.us-east-2.amazonaws.com/prod" + e, v = d ? JSON.stringify(d) : null,
      m = v ? { method: s, headers: r, body: v } : { method: s, headers: r }
    if (Object.keys(c).length > 0) {
      var _ = Object.keys(c).map(function(t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(c[t])
      }).join("&")
      p += "?" + _
    }
    return new Promise(function(t, e) {
      f()(p, m).then(a).then(u).then(function(e) {
        var i = e.body
        return t(i)
      }).catch(e)
    })
  }

  function r(t, e) {
    return new Promise(function(i, s) {
      var n = new XMLHttpRequest
      n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function() {
        t.decodeAudioData(n.response, function(t) {
          i(t)
        }, function(t) {
          s(new Error(t))
        })
      }, n.onerror = function(t) {
        s(new Error(t))
      }, n.send()
    })
  }

  function l(t, e, i) {
    var s = t.createBufferSource()
    return s.buffer = i, s.connect(e, 0, 0), s
  }

  function c(t, e) {
    return e / t
  }

  function d(t, e) {
    return t * e
  }

  function h() {
    return !(!window.webkitAudioContext && !window.AudioContext)
  }

  function u(t) {
    var e = t.createOscillator()
    e.frequency.value = 400, e.connect(t.destination), e.start(0), e.stop(0)
  }

  function p() {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50, e = g.c, i = new Float32Array(e), s = Math.PI / 180, n = 0; n < e; n++) {
      var a = 2 * n / e - 1
      i[n] = (3 + t) * a * 20 * s / (Math.PI + t * Math.abs(a))
    }
    return i
  }

  var v = i(100), f = i.n(v), m = i(5), _ = i.n(m), g = i(6)
  e.g = s, e.i = o, e.a = r, e.b = l, e.d = c, e.e = d, e.h = h, e.c = u, e.f = p
}, , function(t, e, i) {
  "use strict"
  i.d(e, "d", function() {
    return s
  }), i.d(e, "e", function() {
    return n
  }), i.d(e, "a", function() {
    return a
  }), i.d(e, "f", function() {
    return o
  }), i.d(e, "g", function() {
    return r
  }), i.d(e, "c", function() {
    return l
  }), i.d(e, "b", function() {
    return c
  }), i.d(e, "h", function() {
    return d
  })
  var s = 180, n = 16, a = 1e4, o = .6, r = .6, l = 44100, c = 20, d = 768
}, function(t, e, i) {
  i(210)
  var s = i(0)(i(142), i(319), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(238)
  var s = i(0)(i(152), i(347), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  "use strict"
  var s = i(2), n = i(128), a = i.n(n), o = i(16)
  e.a = {
    components: { DitherBackground: a.a },
    computed: Object.assign({}, i.i(s.a)({
      isNextCtaTransition: function(t) {
        return t.app.nextCtaTransition
      }, isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }
    }), i.i(s.b)(["isNextCtaTransition", "isGreaterThanTablet"])),
    created: function() {
      this.baseViewCreated()
    },
    mounted: function() {
      var t = this
      !this.isNextCtaTransition && this.isGreaterThanTablet && (this.titleViewListener = i.i(o.a)(this.$refs.sectionTitle.$el), this.titleViewListener.offset(.5 * window.innerHeight), this.titleViewListener.once("enter", function() {
        return t.onTitleEnterViewport()
      }), this.titleViewListener.check())
    },
    methods: {
      baseViewCreated: function() {
      }, onTitleEnterViewport: function() {
        var t = this
        setTimeout(function() {
          t.$refs.sectionTitle.$refs.titleVideo.play()
        }, 100)
      }
    }
  }
}, function(t, e, i) {
  i(220)
  var s = i(0)(i(157), i(329), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(217)
  var s = i(0)(i(158), i(326), null, null)
  t.exports = s.exports
}, , function(t, e, i) {
  i(232)
  var s = i(0)(i(147), i(341), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  "use strict"
  var s = i(101), n = i.n(s)
  window.Promise = window.Promise || n.a
}, function(t, e, i) {
  "use strict"
  var s = i(2), n = i(5), a = i.n(n), o = i(16)
  e.a = {
    props: { killTransition: { type: Boolean, default: !1 } }, data: function() {
      return {
        transitionedIn: !1,
        windowHeight: window.innerHeight,
        bodyBoundingClientRect: {},
        boundingClientRect: {},
        viewListener: null,
        elOffset: .2
      }
    }, computed: Object.assign({}, i.i(s.a)({
      isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }
    }), i.i(s.b)(["isGreaterThanTablet"])), mounted: function() {
      var t = this
      return this.killTransition ? void (this.transitionedIn = !0) : !this.isGreaterThanTablet || a.a.msie ? void (this.transitionedIn = !0) : void setTimeout(function() {
        t.isElVisible()
      }, 200)
    }, beforeDestroy: function() {
      this.viewListener && this.viewListener.off("enter")
    }, methods: {
      isElVisible: function() {
        var t = this
        this.$el.classList.add("transparent"), this.viewListener = i.i(o.a)(this.$el), this.viewListener.offset(window.innerHeight * this.elOffset), this.viewListener.once("enter", function() {
          return t.onEnterViewport()
        }), this.viewListener.check()
      }, onEnterViewport: function() {
        this.transitionedIn = !0, this.transitionIn()
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  var s = i(166), n = i(124), a = (i.n(n), function() {
    if ("undefined" != typeof window) {
      var t = 100, e = ["scroll", "resize", "load"], a = { history: [] }, o = 0, r = {},
        l = i.i(n.throttle)(function() {
          a.history.forEach(function(t) {
            a[t].check()
          })
        }, t)
      e.forEach(function(t) {
        return addEventListener(t, l)
      }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
        new MutationObserver(l).observe(document.body, { attributes: !0, childList: !0, subtree: !0 })
      })
      var c = function(t, e, l) {
        var c = void 0
        if ("string" == typeof t) c = [].slice.call(document.querySelectorAll(t)) else {
          if (t instanceof window.Node) c = [t] else {
            if (!(t instanceof window.NodeList || t instanceof Array)) return
            c = [].slice.call(t)
          }
          t = void 0 === l ? "Node-" + o++ : l
        }
        if (a.history.indexOf(t) > -1) {
          var d = a[t], h = d.validate(e)
          if (i.i(n.isEqual)(h, d.options)) return "Node" === t.substr(0, 4) || t === l ? d.elements.concat(c) : d.elements = c, d
          t += "-" + (r[t] = 1 + ~~r[t])
        }
        return a[t] = i.i(s.a)(c, e, t), a.history.push(t), a[t]
      }
      return c.get = function(t) {
        return a[t]
      }, c.check = function() {
        return l()
      }, c.is = function(t) {
        return s.b.test(t, s.b)
      }, c
    }
  })
  e.a = a()
}, function(t, e, i) {
  i(215)
  var s = i(0)(i(151), i(324), null, null)
  t.exports = s.exports
}, , function(t, e) {
  !function() {
    "use strict"
    "remove" in Element.prototype || (Element.prototype.remove = function() {
      this.parentNode && this.parentNode.removeChild(this)
    })
  }()
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ahhhh-3.aif.e89e1f28.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ambient-3.aif.4aac4285.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/gl-hit-ch-3.aif.ee906e2a.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/glisten-voice-3.aif.f758be64.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/hiss-sweep-3.aif.256c5224.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/spectral-threat-3.aif.fbb0a1d4.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/tank-hit-3.aif.c225df0a.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/unvoiced-3.aif.1b9a9fba.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-1-3.aif.c096385f.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-3-3.aif.0679eca4.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-4-3.aif.07c3b0c0.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-4-6.aif.88526afc.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-dots-3.aif.722d3e4f.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-sibiliance-2-3.aif.fbf88f06.mp3"
}, , function(t, e, i) {
  i(229)
  var s = i(0)(i(149), i(338), null, null)
  t.exports = s.exports
}, , function(t, e, i) {
  "use strict"
  var s = i(2)
  e.a = {
    data: function() {
      return { fullscreenContainer: "soundboard-container" }
    },
    methods: Object.assign({}, i.i(s.c)(["hideSoundboard", "fullscreenClose", "updateSoundboardContext"]), {
      closeFullscreen: function() {
        this.fullscreenClose(), this.hideSoundboard(), this.updateSoundboardContext(0), this.$route.params.soundscapeId && this.$router.push("/sounds")
      }
    })
  }
}, , function(t, e, i) {
  i(222)
  var s = i(0)(i(159), i(331), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(236)
  var s = i(0)(i(161), i(345), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(56), a = i.n(n), o = i(1), r = (i.n(o), i(6))
  e.default = {
    name: "SoundControls",
    props: {
      record: { type: Function, required: !0 },
      stopRecord: { type: Function, required: !0 },
      wipeCanvas: { type: Function, required: !0 }
    },
    computed: Object.assign({}, i.i(s.a)({
      isRecording: function(t) {
        return t.soundboard.isRecording
      }, isSaving: function(t) {
        return t.soundboard.isSaving
      }
    }), i.i(s.b)(["currentSoundscapeId"]), {
      actionText: function() {
        return null !== this.shareUrl ? "Share" : this.recordProgress > -1 ? 100 - this.recordProgress : "Record"
      }, resetText: function() {
        return this.isRecording ? "Cancel" : "Reset"
      }, actionDisabled: function() {
        var t = this.isRecording, e = this.isSaving
        return t || e
      }, displayTextEl: function() {
        return this.$refs.displayTextEl
      }, shareUrl: function() {
        var t = this.currentSoundscapeId
        return null === t ? null : document.location.href + "/" + t
      }
    }),
    watch: {
      isRecording: function(t) {
        var e = this
        if (t) {
          var i = 0
          this.recordInterval = setInterval(function() {
            i += 100, e.recordProgress = (i / r.a * 100).toFixed()
          }, 100)
        } else clearInterval(this.recordInterval), this.recordProgress = -1, this.actionButtonBackground = "transparent", this.displayText = "Transmission Recorded"
      }, displayText: function(t) {
        var e = this
        null !== t && (this.tweenTextIn(), setTimeout(function() {
          e.tweenTextOut()
        }, 2e3))
      }, isSaving: function(t) {
        t && (this.displayText = "Transmission Recorded")
      }
    },
    data: function() {
      return { recordProgress: -1, actionButtonBackground: "transparent", displayText: null }
    },
    mounted: function() {
      this.$route.params.soundscapeId && (this.clipboard = new a.a(this.$refs.actionButton), this.clipboard.on("success", this.confirmCopySuccess), this.clipboard.on("error", function(t) {
        console.error("clipboard error"), console.error(t)
      }))
    },
    methods: Object.assign({}, i.i(s.c)(["fullscreenClose", "clearSoundscape", "setEffects", "updateSoundboardContext"]), {
      confirmCopySuccess: function() {
        this.displayText = "Link Copied", this.$ga.event("soundboard", "shared", null, this.currentSoundscapeId)
      }, handleAction: function() {
        null === this.shareUrl && (this.record(), this.clipboard = new a.a(this.$refs.actionButton), this.clipboard.on("success", this.confirmCopySuccess), this.clipboard.on("error", function(t) {
          console.error("clipboard error"), console.error(t)
        }))
      }, reset: function() {
        this.stopRecord(), this.wipeCanvas(), this.setEffects(), this.currentSoundscapeId && (this.clipboard && this.clipboard.destroy(), this.fullscreenClose(), this.clearSoundscape(), this.$router.push("/sounds"), this.updateSoundboardContext(0), setTimeout(function() {
          window.scrollTo(0, document.body.querySelector("#soundboard-container").offsetTop)
        }, 500))
      }, tweenTextIn: function() {
        o.TweenLite.fromTo(this.displayTextEl, 1, { opacity: 0, y: "+20" }, { opacity: 1, y: "+0" })
      }, tweenTextOut: function() {
        var t = this
        o.TweenLite.to(this.displayTextEl, 1, {
          opacity: 0, y: "-20", onComplete: function() {
            t.displayText = null
          }
        })
      }
    })
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  Object.defineProperty(e, "__esModule", { value: !0 })
  var n = i(2), a = i(1), o = (i.n(a), i(4)), r = i(6), l = i(62)
  e.default = {
    name: "SoundboardEffects", data: function() {
      return { effectsInitialized: !1, delayInitialized: !1, reverbInitialized: !1, fuzzInitialized: !1 }
    }, computed: Object.assign({}, i.i(n.a)({
      audioContext: function(t) {
        return t.soundboard.audioContext
      }, returnNode: function(t) {
        return t.soundboard.returnNode
      }, effects: function(t) {
        return t.soundboard.effects
      }
    }), i.i(n.b)(["soundboardEnvReady"])), watch: {
      soundboardEnvReady: function(t) {
        t && this.init()
      }, effects: {
        handler: function(t) {
          var e = this
          this.effectsInitialized && Object.keys(t).forEach(function(i) {
            return !0 === t[i] ? e.addEffect(i) : e.killEffect(i)
          })
        }, deep: !0
      }
    }, mounted: function() {
      var t = Array.from(document.querySelectorAll(".sound-effect"))
      a.TweenMax.set(t, { opacity: 0, y: "-150" }), this.soundboardEnvReady && this.init()
    }, methods: Object.assign({}, i.i(n.c)(["toggleEffect"]), {
      init: function() {
        var t = this
        return new Promise(function(e, i) {
          Promise.all([t.setupDelay(), t.setupReverb(), t.setupFuzz()]).then(t.transitionIn).then(function() {
            t.effectsInitialized = !0, e()
          }).catch(function(t) {
            return i(new Error(t))
          })
        })
      }, effectCls: function(t) {
        var e
        return e = { "sound-effect": !0 }, s(e, "sound-effect--" + t, !0), s(e, "sound-effect--active", !0 === this.effects[t]), e
      }, killEffect: function(t) {
        "delay" === t ? this.delayMasterNode.gain.value = 0 : "reverb" === t ? this.convolverGain.gain.value = 0 : "fuzz" === t && (this.distortionGain.gain.value = 0)
      }, addEffect: function(t) {
        "delay" === t ? this.delayMasterNode.gain.value = 1 : "reverb" === t ? this.convolverGain.gain.value = 1 : "fuzz" === t && (this.distortionGain.gain.value = 1)
      }, setupDelay: function() {
        var t = this
        return new Promise(function(e, i) {
          var s = t.audioContext, n = t.returnNode
          null !== s && null !== n || i(new Error("missing audio components")), t.delayNode = s.createDelay(r.f), t.feedbackNode = s.createGain(), t.bypassNode = s.createGain(), t.delayMasterNode = s.createGain(), t.delayNode.delayTime.value = r.f, t.feedbackNode.gain.value = r.g, t.bypassNode.gain.value = 1, n.connect(t.delayNode), t.delayNode.connect(t.feedbackNode), t.feedbackNode.connect(t.delayNode), t.delayNode.connect(t.bypassNode), t.bypassNode.connect(t.delayMasterNode), n.connect(t.delayMasterNode), t.delayMasterNode.gain.value = 0, t.delayMasterNode.connect(s.destination), t.delayInitialized = !0, e()
        })
      }, setupReverb: function() {
        var t = this
        return new Promise(function(e, s) {
          var n = t.audioContext, a = t.returnNode
          null !== n && null !== a || s(new Error("missing audio components")), i.i(o.a)(n, l).then(function(i) {
            t.convolverNode = n.createConvolver(), t.convolverGain = n.createGain(), t.convolverNode.buffer = i, t.convolverNode.loop = !1, t.convolverNode.normalize = !0, t.convolverGain.gain.value = 0, a.connect(t.convolverGain), t.convolverGain.connect(t.convolverNode), t.convolverNode.connect(n.destination), t.reverbInitialized = !0, e()
          }).catch(function(t) {
            return s(new Error(t))
          })
        })
      }, setupFuzz: function() {
        var t = this
        return new Promise(function(e, s) {
          var n = t.audioContext, a = t.returnNode
          null !== n && null !== a || s(new Error("missing audio components")), t.distortionGain = n.createGain(), t.distortionNode = n.createWaveShaper(), t.distortionNode.curve = i.i(o.f)(), t.distortionGain.gain.value = 0, a.connect(t.distortionGain), t.distortionGain.connect(t.distortionNode), t.distortionNode.connect(n.destination), t.fuzzInitialized = !0, e()
        })
      }, transitionIn: function() {
        return new Promise(function(t) {
          var e = Array.from(document.querySelectorAll(".sound-effect")).reverse()
          a.TweenMax.staggerTo(e, .8, { y: "0", opacity: 1 }, .2, function() {
            console.log("done"), t()
          })
        })
      }
    })
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
    name: "SoundSelector",
    props: { sounds: { default: [], type: Array } },
    computed: {
      currentSound: function() {
        return this.$store.state.soundboard.currentSound
      }
    },
    data: function() {
      return {}
    },
    methods: {
      prevSound: function() {
        this.$store.dispatch("updateCurrentSound", this.currentSound - 1)
      }, nextSound: function() {
        this.$store.dispatch("updateCurrentSound", this.currentSound + 1)
      }
    }
  }
}, function(t, e, i) {
  "use strict"

  function s(t) {
    if (Array.isArray(t)) {
      for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e]
      return i
    }
    return Array.from(t)
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  var a = i(12), o = (i.n(a), i(1)), r = (i.n(o), i(38)), l = i.n(r), c = i(4), d = i(6), h = function() {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i]
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
      }
    }

    return function(e, i, s) {
      return i && t(e.prototype, i), s && t(e, s), e
    }
  }(), u = function() {
    function t(e) {
      var i = this, o = e.sound, r = void 0 === o ? 0 : o, l = e.start, c = void 0 === l ? [0, 0] : l, h = e.color,
        u = void 0 === h ? "blue" : h, p = e.strokeCap, v = void 0 === p ? "round" : p, f = e.strokeWidth,
        m = void 0 === f ? 1 : f, _ = e.node, g = e.audioContext, y = e.returnNode, w = e.sources,
        C = void 0 === w ? [] : w, b = e.canvasSize, x = e.loop, S = void 0 === x ? "quarter" : x, T = e.timestamp,
        M = void 0 === T ? (new Date).getTime() : T, k = e.timeline, z = void 0 === k ? [] : k
      n(this, t), Object.assign(this, {
        sound: r,
        start: c,
        color: u,
        strokeCap: v,
        strokeWidth: m,
        node: _,
        audioContext: g,
        returnNode: y,
        sources: C,
        canvasSize: b,
        loop: S,
        timestamp: M,
        timeline: z
      }), this.auditioning = !1, this.playing = !1, this.path = new a.Path({
        strokeColor: "white",
        strokeWidth: m,
        strokeCap: v
      }), this.wipe = null, this.wipeAnimation = null, this.loopScales = {
        eighth: .2,
        sixth: .4,
        quarter: .6,
        third: .8,
        half: 1
      }, this.calculateStartPoint(), this.path.moveTo(new (Function.prototype.bind.apply(a.Point, [null].concat(s(this.startPoint))))), this.getDotStartPoint = function(t) {
        return [i.startPoint[0], i.startPoint[1] - d.d * (t || i.loopScales[i.loop])]
      }, this.makeDot = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = i.color,
          s = i.getDotStartPoint, n = t || s(), o = function() {
            var t = new a.Path.Circle({ radius: d.e, fillColor: e, applyMatrix: !1 })
            return t.position = n, t
          }, r = new a.Group([o(), o(), o(), o(), o(), o(), o(), o()])
        return r.children.forEach(function(t, e) {
          t.opacity = 1 - .125 * e
        }), r
      }
    }

    return h(t, [{
      key: "calculateStartPoint", value: function() {
        this.startPoint = [i.i(c.e)(this.canvasSize.x, this.start[0]), i.i(c.e)(this.canvasSize.y, this.start[1])]
      }
    }, {
      key: "recalculatePosition", value: function(t) {
        var e = t.x, i = t.y
        this.canvasSize = {
          x: e,
          y: i
        }, this.calculateStartPoint(), this.loopShape && (this.loopShape.position = new a.Point(this.startPoint), this.dot.position = new a.Point(this.getDotStartPoint())), this.path.position = new a.Point(this.startPoint)
      }
    }, {
      key: "animateDot", value: function() {
        var t = this
        if (this.loop) {
          var e = this.getPlaybackPosition(), i = e.percentage, s = e.plays, n = Math.ceil(360 * i),
            o = n - this.dot.children[0].rotation
          this.dot.children.forEach(function(e, i) {
            var a = n <= 45 && 0 === s ? o * (1 - .1 * i) : o
            e.rotate(a, t.startPoint)
          })
          Number(i.toFixed(2)) <= .04 && s > 0 && this.animateWipe()
        } else if (this.pathOffset || (this.pathOffset = 0, this.dot.bringToFront()), this.dot.position = this.path.getPointAt(this.pathOffset), this.dot.children.forEach(function(e, i) {
          var s = t.path.getPointAt(t.pathOffset - 6 * i)
          null === s && (s = new a.Point(-10, -10)), e.position = s
        }), this.pathRemover || (this.pathRemover = setInterval(function() {
          t.path.removeSegment(0)
        }, 30)), this.pathOffset >= this.path.length) return clearInterval(this.pathRemover), this.pathRemover = null, this.destroy(), cancelAnimationFrame(this.animationFrame)
        this.animationFrame = requestAnimationFrame(function(e) {
          t.animateDot(e)
        })
      }
    }, {
      key: "animateWipe", value: function() {
        var t = this
        if (null === this.wipe) {
          var e = Math.ceil(window.innerWidth, window.innerHeight);
          (this.startPoint[0] <= .2 * window.innerWidth || this.startPoint[1] <= .2 * window.innerHeight || this.startPoint[0] >= .8 * window.innerWidth || this.startPoint[1] >= .8 * window.innerHeight) && (e *= 2), this.wipe = new a.Path.Circle({
            center: this.startPoint,
            radius: e,
            applyMatrix: !1,
            blendMode: "screen"
          }), this.wipe.fillColor = {
            gradient: {
              stops: [["transparent", .1], [this.color, .4], [this.color, .9], ["transparent", 1]],
              radial: !0
            }, origin: this.wipe.position, destination: this.wipe.bounds.rightCenter
          }, this.wipe.width = e, this.wipe.height = e, this.wipe.sendToBack()
        }
        if (null === this.wipeAnimation) {
          this.wipeAnimation = new o.TimelineMax, this.wipe.opacity = 0
          var i = .1, s = 1, n = .4, r = { scale: .1, opacity: 0, colorRadius: .2, blackRadius: .1 }
          this.wipeAnimation.to(r, i, {
            scale: .1, opacity: 0, colorRadius: .2, blackRadius: .1, onUpdate: function() {
              t.wipe.scaling.x = r.scale, t.wipe.scaling.y = r.scale, t.wipe.opacity = r.opacity, t.wipe.fillColor = {
                gradient: {
                  stops: [["transparent", r.blackRadius], [t.color, r.colorRadius], [t.color, .9], ["transparent", 1]],
                  radial: !0
                }, origin: t.wipe.position, destination: t.wipe.bounds.rightCenter
              }
            }
          }).to(r, s, {
            scale: 1, opacity: 1, ease: o.Cubic.easeOut, onUpdate: function() {
              t.wipe.scaling.x = r.scale, t.wipe.scaling.y = r.scale, t.wipe.opacity = r.opacity, t.wipe.fillColor = {
                gradient: {
                  stops: [["transparent", r.blackRadius], [t.color, r.colorRadius], [t.color, .9], ["transparent", 1]],
                  radial: !0
                }, origin: t.wipe.position, destination: t.wipe.bounds.rightCenter
              }
            }
          }).to(r, s - n, {
            blackRadius: .5, colorRadius: .9, delay: n, ease: o.Power2.easeIn, onUpdate: function() {
              t.wipe.fillColor = {
                gradient: {
                  stops: [["transparent", r.blackRadius], [t.color, r.colorRadius], [t.color, .9], ["transparent", 1]],
                  radial: !0
                }, origin: t.wipe.position, destination: t.wipe.bounds.rightCenter
              }
            }
          }, i).to(r, 2, {
            scale: 1.4,
            opacity: 0,
            blackRadius: .8,
            colorRadius: .9,
            ease: o.Cubic.easeInOut,
            onUpdate: function() {
              t.wipe.scaling.x = r.scale, t.wipe.scaling.y = r.scale, t.wipe.opacity = r.opacity, t.wipe.fillColor = {
                gradient: {
                  stops: [["transparent", r.blackRadius], [t.color, r.colorRadius], [t.color, .9], ["transparent", 1]],
                  radial: !0
                }, origin: t.wipe.position, destination: t.wipe.bounds.rightCenter
              }
            },
            onComplete: function() {
              t.wipe.scaling.x = r.scale, t.wipe.scaling.y = r.scale, t.wipe.opacity = r.opacity, t.wipe.fillColor = {
                gradient: {
                  stops: [["transparent", r.blackRadius], [t.color, r.colorRadius], [t.color, .9], ["transparent", 1]],
                  radial: !0
                }, origin: t.wipe.position, destination: t.wipe.bounds.rightCenter
              }
            }
          })
        } else this.wipeAnimation.restart()
      }
    }, {
      key: "stopAnimation", value: function() {
        this.animationFrame && (cancelAnimationFrame(this.animationFrame), this.pathRemover && (clearInterval(this.pathRemover), this.pathRemover = null))
      }
    }, {
      key: "addPoint", value: function(t, e) {
        var s = [i.i(c.e)(this.canvasSize.x, t), i.i(c.e)(this.canvasSize.y, e)]
        this.path.add(new a.Point(s)), this.timeline.push({ coords: [t, e], timestamp: (new Date).getTime() })
      }
    }, {
      key: "drawPath", value: function(t) {
        var e = this, s = 0, n = t[t.length - 1].timestamp
        this.animationInterval = setInterval(function() {
          var o = t.filter(function(t) {
            var e = t.timestamp
            return l()(e, s, s + 10)
          })
          o.length > 0 && o.forEach(function(t) {
            var s = t.coords, o = t.timestamp, r = [i.i(c.e)(e.canvasSize.x, s[0]), i.i(c.e)(e.canvasSize.y, s[1])]
            e.path.add(new a.Point(r)), o === n && e.endPath()
          }), s += 10
        }, 10), setTimeout(function() {
          clearInterval(e.animationInterval)
        }, d.a)
      }
    }, {
      key: "endPath", value: function() {
        this.path.smooth({ type: "continuous" })
        var t = this.path.getPointAt(0)
        this.dot = this.makeDot(t), this.loop = !1, this.play()
      }
    }, {
      key: "makeLoop", value: function() {
        var t = this, e = this.loop, i = this.strokeWidth, s = this.makeDot, n = this.loopScales, r = { value: .1 }
        this.loopShape = new a.Path.Circle({
          center: this.startPoint,
          radius: d.d,
          strokeColor: "white",
          strokeWidth: i,
          applyMatrix: !1
        }), this.dot = s(), this.loopShape.scaling.x = n[e], this.loopShape.scaling.y = n[e], o.TweenMax.to(r, 1, {
          value: n[e],
          onUpdate: function() {
            t.loopShape.scaling.x = r.value, t.loopShape.scaling.y = r.value, t.dot.position = t.getDotStartPoint(r.value)
          },
          onComplete: function() {
            t.loopShape.scaling.x = r.value, t.loopShape.scaling.y = r.value, t.dot.position = t.getDotStartPoint(r.value), t.play()
          }
        })
      }
    }, {
      key: "resizeLoop", value: function() {
        var t = this, e = this.startPoint, i = this.strokeWidth, s = this.makeDot, n = { value: .01 }
        this.loopShape = new a.Path.Circle({
          center: e,
          radius: d.d,
          strokeColor: "white",
          strokeWidth: i,
          applyMatrix: !1
        }), this.dot = s(), this.loopShape.scaling.x = .01, this.loopShape.scaling.y = .01, this.loopResizer = new o.TimelineMax({
          repeat: -1,
          yoyo: !0
        }).to(n, 1, {
          value: 1, onUpdate: function() {
            t.loopShape.scaling.x = n.value, t.loopShape.scaling.y = n.value, t.loopScale = n.value.toFixed(2), t.dot.position = t.getDotStartPoint(t.loopScale)
          }
        }).to(n, 1, {
          value: .1, ease: o.Cubic.easeOut, onUpdate: function() {
            t.loopShape.scaling.x = n.value, t.loopShape.scaling.y = n.value, t.loopScale = n.value.toFixed(2), t.dot.position = t.getDotStartPoint(t.loopScale)
          }
        })
      }
    }, {
      key: "stopAudition", value: function() {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        if (this.loopResizer) {
          this.loopResizer.pause()
          var i = this.loopScale, s = { value: i }, n = void 0
          l()(i, .01, .19) ? (this.loop = "eighth", n = .2) : l()(i, .2, .39) ? (this.loop = "sixth", n = .4) : l()(i, .4, .59) ? (this.loop = "quarter", n = .6) : l()(i, .6, .79) ? (this.loop = "third", n = .8) : l()(i, .8, 1.1) && (this.loop = "half", n = 1)
          var a = this.getAudioNode(this.sources[this.loop])
          this.node = a, o.TweenMax.to(s, .6, {
            value: n, onUpdate: function() {
              t.loopShape.scaling.x = s.value, t.loopShape.scaling.y = s.value, t.dot.position = t.getDotStartPoint(s.value)
            }, onComplete: function() {
              t.loopShape.scaling.x = s.value, t.loopShape.scaling.y = s.value, t.dot.position = t.getDotStartPoint(), e ? t.play() : t.destroy()
            }
          })
        }
      }
    }, {
      key: "play", value: function() {
        this.node.loop = !!this.loop, this.loop && (this.currentTimeAtStart = this.audioContext.currentTime), this.node.start(), this.playing = !0, this.animateDot(), this.animateWipe()
      }
    }, {
      key: "stop", value: function() {
        this.playing && (this.node.stop(), this.playing = !1)
      }
    }, {
      key: "destroy", value: function() {
        this.playing && this.stop(), this.animationFrame && cancelAnimationFrame(this.animationFrame), this.loopShape && this.loopShape.remove(), this.dot && this.dot.remove(), this.path.remove(), this.eraserLine && this.eraserLine.remove()
      }
    }, {
      key: "getPlaybackPosition", value: function() {
        var t = this.audioContext.currentTime - this.currentTimeAtStart, e = this.node.buffer.duration,
          i = Math.floor(t / e), s = t % e
        return { position: s, percentage: s / e, plays: i }
      }
    }, {
      key: "getAudioNode", value: function(t) {
        var e = this.audioContext, s = this.returnNode
        return i.i(c.b)(e, s, t)
      }
    }, {
      key: "getData", value: function() {
        var t = this.timestamp, e = this.start, i = this.color, s = this.sound, n = this.loop, a = this.timeline
        return a.map(function(e) {
          return e.timestamp > 1e4 && (e.timestamp -= t), e
        }), { timestamp: t, start: e, loop: n, color: i, sound: s, timeline: a }
      }
    }]), t
  }()
  e.a = u
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(12), n = i.n(s), a = i(2), o = i(133), r = i.n(o), l = i(129), c = i.n(l), d = i(38), h = i.n(d), u = i(5),
    p = i.n(u), v = i(1), f = (i.n(v), i(37)), m = i(104), _ = i.n(m), g = i(102), y = i.n(g), w = i(103), C = i.n(w),
    b = i(44), x = i(46), S = i(4), T = i(6)
  e.default = {
    name: "Soundboard",
    components: { SoundSelector: _.a, SoundControls: y.a, SoundEffects: C.a },
    mixins: [f.a],
    props: { showSelector: { default: !0, type: Boolean } },
    computed: Object.assign({}, i.i(a.a)({
      audioContext: function(t) {
        return t.soundboard.audioContext
      }, returnNode: function(t) {
        return t.soundboard.returnNode
      }, currentSound: function(t) {
        return t.soundboard.currentSound
      }, isRecording: function(t) {
        return t.soundboard.isRecording
      }, isPlaying: function(t) {
        return t.soundboard.isPlaying
      }, soundscape: function(t) {
        return t.soundboard.soundscape
      }, effects: function(t) {
        return t.soundboard.effects
      }, sounds: function(t) {
        return t.soundboard.sounds
      }
    }), i.i(a.b)(["currentSoundscapeId", "soundboardEnvReady"]), {
      soundscapeId: function() {
        return this.$route.params.soundscapeId
      }, isTouch: function() {
        return p.a.mobile || p.a.tablet
      }
    }),
    watch: {
      soundscapeId: function(t) {
        t && (this.wipeCanvas(), this.setEffects())
      }, effects: {
        handler: function(t) {
          if (this.isRecording) {
            var e = Object.assign({}, t), i = Object.assign({}, { timestamp: (new Date).getTime(), effects: e })
            this.effectsTimeline.push(i)
          }
        }, deep: !0
      }, isPlaying: function(t) {
        var e = this
        if (t) {
          var i = this.soundscape, s = this.audioContext, n = this.returnNode, a = this.getAudioNode,
            o = this.canvasSize, r = this.sounds, l = this.wipeCanvas, c = this.setEffects, d = i.shapes, u = i.effects,
            p = 0
          l(), c(), this.playerInterval = setInterval(function() {
            var t = d.filter(function(t) {
              var e = t.timestamp
              return h()(e, p, p + 10)
            })
            t.length > 0 && t.forEach(function(t) {
              var i = t.sound, l = t.loop, c = t.timeline, d = a(r[i].sources[l || "quarter"]),
                h = new b.a(Object.assign({}, t, { canvasSize: o, node: d, audioContext: s, returnNode: n }))
              e.shapes.push(h), h.loop ? h.makeLoop() : h.drawPath(c)
            })
            var i = u.filter(function(t) {
              var e = t.timestamp
              return h()(e, p, p + 10)
            })
            i.length > 0 && i.forEach(function(t) {
              var i = t.effects
              e.setEffects(i)
            }), p += 10
          }, 10), setTimeout(function() {
            clearInterval(e.playerInterval)
          }, T.a)
        }
      }
    },
    data: function() {
      return {
        soundParams: x.a,
        mouseDown: !1,
        isDrawing: !1,
        currentShape: null,
        shapes: [],
        effectsTimeline: [],
        canvasSize: {},
        loopLength: "quarter",
        auditioning: !1,
        recordStart: null,
        soundscapeReady: !1,
        isEdge: p.a.msedge
      }
    },
    mounted: function() {
      var t = this, e = document.querySelector(".sound-selector"), i = document.querySelector(".sound-controls")
      v.TweenMax.set(e, { y: "+50", opacity: 0 }), v.TweenMax.set(i, {
        y: "+50",
        opacity: 0
      }), this.setupEnv().then(this.initAudio).then(this.initCanvas).then(this.soundscapeInitialized).then(this.transitionIn).then(function() {
        return t.soundscapeId ? t.playSoundscape() : Promise.resolve()
      }).catch(console.error)
    },
    beforeDestroy: function() {
      this.killAudio()
      var t = this.$refs.canvas
      t.removeEventListener("mousedown", this.drawStart), t.removeEventListener("mouseup", this.drawStop), window.removeEventListener("resize", this.resizeCanvas), this.teardownAudioEnvironment()
    },
    methods: Object.assign({}, i.i(a.c)(["setupAudioEnvironment", "teardownAudioEnvironment", "soundboardInitialized", "loadSoundscape", "setRecordingState", "saveRecording", "updateCurrentSound", "setEffects", "playSoundscape", "setBufferSources", "clearSoundscape"]), {
      setupEnv: function() {
        var t = this
        return new Promise(function(e, i) {
          t.soundboardEnvReady ? e() : t.setupAudioEnvironment().then(e).catch(i)
        })
      }, initAudio: function() {
        var t = this
        return new Promise(function(e, i) {
          t.sounds ? e() : r.a.map(t.soundParams, t.generateBuffers).then(function(i) {
            t.setBufferSources(i), e()
          }).catch(i)
        })
      }, generateBuffers: function(t) {
        var e = this
        return new Promise(function(s, n) {
          return c.a.map(t.sources, function(t) {
            return i.i(S.a)(e.audioContext, t)
          }).then(function(e) {
            return s(Object.assign(t, { sources: e }))
          }).catch(n)
        })
      }, getAudioNode: function(t) {
        var e = this.audioContext, s = this.returnNode
        return i.i(S.b)(e, s, t)
      }, getCurrentSound: function() {
        return this.sounds[this.currentSound]
      }, record: function() {
        this.wipeCanvas(), this.setEffects(), this.setRecordingState(!0), this.recordStart = (new Date).getTime(), setTimeout(this.endRecord, T.a), this.$ga.event("soundboard", "record")
      }, stopRecord: function() {
        this.setRecordingState(!1), this.killAudio(), this.killAnimation()
      }, endRecord: function() {
        var t = this.stopRecord, e = this.shapes, i = this.effectsTimeline, s = this.recordStart, n = this.canvasSize
        t()
        var a = e.map(function(t) {
          var e = t.getData()
          return e.timestamp -= s, e
        }), o = i.map(function(t) {
          return t.timestamp -= s, t
        }), r = Object.assign({}, { shapes: a, effects: o, created: s, canvasSize: n })
        this.saveRecording(r), this.recordStart = null
      }, killAudio: function() {
        this.shapes.forEach(function(t) {
          return t.stop()
        })
      }, killAnimation: function() {
        this.shapes.forEach(function(t) {
          return t.stopAnimation()
        })
      }, initCanvas: function() {
        var t = this.$refs.canvas
        this.canvasSize = {
          x: window.innerWidth,
          y: window.innerHeight
        }, n.a.install(window), n.a.setup(t), this.isTouch ? (t.addEventListener("touchstart", this.drawStart), t.addEventListener("touchend", this.drawStop)) : (t.addEventListener("mousedown", this.drawStart), t.addEventListener("mouseup", this.drawStop)), window.addEventListener("resize", this.resizeCanvas)
      }, resizeCanvas: function(t) {
        var e = this, i = t.target, s = i.innerWidth, n = i.innerHeight
        this.canvasSize = { x: s, y: n }, this.shapes.forEach(function(t) {
          return t.recalculatePosition(e.canvasSize)
        })
      }, wipeCanvas: function() {
        this.shapes.forEach(function(t) {
          return t.destroy()
        }), this.currentShape = null, this.playerInterval && clearInterval(this.playerInterval)
      }, exit: function() {
        this.wipeCanvas(), this.playerInterval && clearInterval(this.playerInterval), this.closeFullscreen(), this.clearSoundscape(), setTimeout(function() {
          document.body.style.width = document.body.getBoundingClientRect().width - 1 + "px"
        }, 100)
      }, unlock: function() {
        var t = this.audioContext
        i.i(S.c)(t)
      }, drawStart: function(t) {
        var e = this
        t.preventDefault()
        var s = t.offsetX, n = t.offsetY, a = t.targetTouches, o = void 0, r = void 0
        this.isTouch && (o = a[0].clientX, r = a[0].clientY)
        var l = this.isTouch ? o : s, c = this.isTouch ? r : n, d = this.audioContext, h = this.returnNode,
          u = this.$refs, p = this.getAudioNode, v = this.getCurrentSound, f = this.loopLength, m = this.draw,
          _ = this.canvasSize
        this.startPoint = [l, c], this.mouseDown = (new Date).getTime(), u.canvas.addEventListener(this.isTouch ? "touchmove" : "mousemove", m)
        var g = v(), y = g.sources, w = g.color, C = g.index, x = p(y[f]),
          T = [i.i(S.d)(this.canvasSize.x, l), i.i(S.d)(this.canvasSize.y, c)]
        this.unlock(), this.currentShape = new b.a({
          sound: C,
          color: w,
          start: T,
          node: x,
          canvasSize: _,
          audioContext: d,
          returnNode: h,
          sources: y
        }), this.auditionTimeout = setTimeout(function() {
          e.auditioning = !0, e.currentShape.resizeLoop()
        }, 800)
      }, draw: function(t) {
        var e = t.offsetX, s = t.offsetY, n = t.targetTouches, a = void 0, o = void 0
        this.isTouch && (a = n[0].clientX, o = n[0].clientY)
        var r = this.isTouch ? a : e, l = this.isTouch ? o : s
        this.isDrawing || h()(r, this.startPoint[0] - T.b, this.startPoint[0] + T.b) && h()(l, this.startPoint[1] - T.b, this.startPoint[1] + T.b) || (this.isDrawing = !0), this.isDrawing && (clearTimeout(this.auditionTimeout), this.auditioning && this.endLoopAudition(), this.currentShape.addPoint(i.i(S.d)(this.canvasSize.x, r), i.i(S.d)(this.canvasSize.y, l)))
      }, drawStop: function(t) {
        if (t.preventDefault(), this.$refs.canvas.removeEventListener(this.isTouch ? "touchmove" : "mousemove", this.draw), this.isDrawing) this.isDrawing = !1, this.currentShape.endPath() else {
          (new Date).getTime() - this.mouseDown <= 600 ? (clearTimeout(this.auditionTimeout), this.currentShape.makeLoop()) : this.endLoopAudition(!0)
        }
        this.shapes.push(this.currentShape), this.currentShape = null, this.mouseDown = !1, this.startPoint = null
        var e = this.currentSound === this.sounds.length - 1 ? 0 : this.currentSound + 1
        this.updateCurrentSound(e)
      }, endLoopAudition: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        clearTimeout(this.auditionTimeout), this.auditioning = !1, this.currentShape.stopAudition(t)
      }, transitionIn: function() {
        var t = document.querySelector(".sound-selector"), e = document.querySelector(".sound-controls")
        v.TweenMax.to(t, .4, { y: "0", opacity: 1 }), v.TweenMax.to(e, .6, { y: "0", opacity: 1, delay: .2 })
      }
    })
  }
}, function(t, e, i) {
  "use strict"

  function s() {
    return ["#233ec7", "#23a3e5", "#732177", "#d332e2", "#8f3208", "#d57520", "#4159eb", "#2577dd", "#1c6458", "#1cd5b4", "#2de47a", "#d7a213", "#1b3af5", "#1bc9f5", "#009999", "#b216c1", "#b84511", "#e7a900", "#4b28bb", "#0fd663"][arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0]
  }

  var n = [{ eighth: i(65), sixth: i(64), quarter: i(63), third: i(20), half: i(20) }, {
      eighth: i(68),
      sixth: i(67),
      quarter: i(66),
      third: i(21),
      half: i(21)
    }, { eighth: i(71), sixth: i(70), quarter: i(69), third: i(22), half: i(22) }, {
      eighth: i(74),
      sixth: i(73),
      quarter: i(72),
      third: i(23),
      half: i(23)
    }, { eighth: i(77), sixth: i(76), quarter: i(75), third: i(24), half: i(24) }, {
      eighth: i(80),
      sixth: i(79),
      quarter: i(78),
      third: i(25),
      half: i(25)
    }, { eighth: i(83), sixth: i(82), quarter: i(81), third: i(26), half: i(26) }, {
      eighth: i(86),
      sixth: i(85),
      quarter: i(84),
      third: i(27),
      half: i(27)
    }, { eighth: i(89), sixth: i(88), quarter: i(87), third: i(28), half: i(28) }, {
      eighth: i(92),
      sixth: i(91),
      quarter: i(90),
      third: i(29),
      half: i(29)
    }, { eighth: i(31), sixth: i(31), quarter: i(93), third: i(30), half: i(30) }, {
      eighth: i(96),
      sixth: i(95),
      quarter: i(94),
      third: i(32),
      half: i(32)
    }, { eighth: i(99), sixth: i(98), quarter: i(97), third: i(33), half: i(33) }],
    a = ["big-ahhhh", "big-ambient", "gl-hit-ch", "glisten-voice", "hiss-sweep", "spectral-threat", "tank-hit", "unvoiced", "vocoder1", "vocoder3", "vocoder4", "vox-dots", "vox-sibiliance"],
    o = n.map(function(t, e) {
      return { sources: t, name: a[e], index: e, color: s(e) }
    })
  e.a = o
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e)
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  var o = i(12), r = i.n(o), l = function() {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i]
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
      }
    }

    return function(e, i, s) {
      return i && t(e.prototype, i), s && t(e, s), e
    }
  }(), c = function(t) {
    function e() {
      return s(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }

    return a(e, t), l(e, [{
      key: "setPaths", value: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        this.lineDelayPath = new r.a.Path({
          strokeColor: t.starData.color,
          strokeWidth: 3
        }), this.addChild(this.lineDelayPath), this.lineDelayPath.moveTo(new r.a.Point(r.a.view.size.width - t.drawingGuideBounds.left, t.drawingGuideBounds.top + .5 * t.drawingGuideBounds.height))
      }
    }]), e
  }(r.a.Group)
  e.a = c
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  var n = i(4), a = function() {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i]
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
      }
    }

    return function(e, i, s) {
      return i && t(e.prototype, i), s && t(e, s), e
    }
  }(), o = function() {
    function t(e) {
      s(this, t), this.audioContext = e.audioContext, this.params = e, this.gain = { value: 1 }, this.signalPercentage = 0, this.audioTypeIndex = 0, this.isPlaying = !1, this.audioBuffers = []
    }

    return a(t, [{
      key: "init", value: function() {
        this.generateBuffers()
      }
    }, {
      key: "generateBuffers", value: function() {
        var t = this
        if (!(this.audioBuffers.length > 0)) for (var e = function(e) {
          i.i(n.a)(t.audioContext, t.params.sounds[e]).then(function(i) {
            t.audioBuffers[e] = i
          }).catch()
        }, s = 0; s < this.params.sounds.length; s++) e(s)
      }
    }, {
      key: "scheduler", value: function() {
        if (this.audioBuffers[this.audioTypeIndex]) {
          var t = this.audioContext.createBufferSource()
          t.playbackRate.value = 1 * this.signalPercentage + .5, t.buffer = this.audioBuffers[this.audioTypeIndex], t.connect(this.audioContext.destination), t.start(this.audioContext.currentTime)
        }
      }
    }, {
      key: "kill", value: function() {
        this.params.constantNoise && this.constantOscillator.stop(this.audioContext.currentTime)
      }
    }, {
      key: "typeIndex", set: function(t) {
        this.audioTypeIndex = t
      }
    }, {
      key: "signalYPercentage", set: function(t) {
        this.signalPercentage = t
      }
    }, {
      key: "togglePlay", set: function(t) {
        var e = this
        this.isPlaying = t, this.isPlaying ? this.metronomeInterval = setInterval(function() {
          return e.scheduler()
        }, this.params.intervalRepeat) : clearInterval(this.metronomeInterval)
      }
    }]), t
  }()
  e.a = o
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(12), a = i.n(n), o = i(1), r = (i.n(o), i(47)), l = i(48), c = i(4)
  e.default = {
    props: { starsData: { default: !0, type: Array } },
    computed: Object.assign({}, i.i(s.a)({
      isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }
    }), i.i(s.b)(["isGreaterThanTablet"])),
    data: function() {
      return {
        isMouseDown: !1,
        audioContext: new (window.AudioContext || window.webkitAudioContext),
        simulatedParams: { intensity: 1, speedsimulatedParams: 1 },
        soundParams: { volume: 0 },
        destroyed: !1,
        isStarTransmition: !0,
        canvas: null,
        simulateIncrement: 0,
        position: 0,
        easePosition: 0,
        mousePos: null,
        isTransmitionIncoming: !1,
        movingOnCanvas: !1,
        bgStarsTween: { speed: 4 },
        transmitionsPathGroups: [],
        transmissionsExport: [],
        bgStars: [],
        graphSpeed: 8,
        pathsGroup: null,
        isPlaying: !1,
        intervalRepeat: 150,
        signalYPercentage: .5,
        noteLength: .07,
        metronomeInterval: null,
        currentStar: 0,
        drawingGuideBounds: 0,
        elBounds: 0,
        resetTransmissionsDrawing: !1,
        drawingGuideEl: null
      }
    },
    created: function() {
    },
    mounted: function() {
      this.destroyed = !1, this.canvas || (this.initAudioContext(), this.initPaperView())
    },
    beforeDestroy: function() {
      this.destroyed = !0, this.isTransmitionSimulated = !1, this.onMouseUp({}), this.timeoutStartSimulated && clearTimeout(this.timeoutStartSimulated), this.transmitionDelayed && clearTimeout(this.transmitionDelayed), this.timeoutEndSimulated && clearTimeout(this.timeoutEndSimulated), this.killAudioContext(), this.audioContext.close()
    },
    methods: {
      start: function() {
        var t = this
        this.HorLinePath.opacity = .2, this.resetTransmissionsDrawing = !1, this.isStarTransmition = !0, this.transmitionDelayed = setTimeout(function() {
          return t.simulateTransmition()
        }, 1e3), requestAnimationFrame(this.animate)
      }, initPaperView: function() {
        var t = this
        this.incrementTest = 0, this.canvas = this.$el.querySelector("#greetings-canvas"), a.a.install(window), a.a.setup(this.canvas), this.drawingGuideEl = this.$el.querySelector(".starchat__drawing-guide"), this.drawingGuideBounds = this.drawingGuideEl.getBoundingClientRect(), this.elBounds = this.$el.getBoundingClientRect(), this.bindOnResize = function(e) {
          return t.onResize(e)
        }, this.bindOnMouseDown = function(e) {
          return t.onMouseDown(e)
        }, this.bindOnMouseMove = function(e) {
          return t.onMouseMove(e)
        }, this.bindOnMouseUp = function(e) {
          return t.onMouseUp(e)
        }, window.addEventListener("resize", this.bindOnResize), this.drawingGuideEl.addEventListener("mousedown", this.bindOnMouseDown), this.drawingGuideEl.addEventListener("touchstart", this.bindOnMouseDown), this.drawingGuideEl.addEventListener("mousemove", this.bindOnMouseMove), this.drawingGuideEl.addEventListener("touchmove", this.bindOnMouseMove), window.addEventListener("mouseup", this.bindOnMouseUp), window.addEventListener("touchend", this.bindOnMouseUp), this.mousePos = a.a.view.center.add(new a.a.Point(a.a.view.size.width - this.drawingGuideBounds.left, 100)), this.position = new a.a.Point(a.a.view.size.width - this.drawingGuideBounds.left, a.a.view.center.y), this.easePosition = this.position, this.waveMask = new a.a.Path.Rectangle({
          point: [this.drawingGuideBounds.left, this.drawingGuideBounds.top],
          size: [this.drawingGuideBounds.width, this.drawingGuideBounds.height]
        }), this.HorLinePath = new a.a.Path.Line({
          from: new a.a.Point(0, 100),
          to: new a.a.Point(a.a.view.size.width, 100),
          strokeColor: "#ffffff",
          opacity: .2
        }), this.wavesContainer = new a.a.Group, this.wavesContainer.addChild(this.waveMask), this.wavesContainer.clipped = !0, this.wavesContainer.addChild(this.HorLinePath), this.initBgStars()
      }, initBgStars: function() {
        var t = 30
        this.bgStarCircle = new a.a.Path.Circle({
          center: [0, 0],
          radius: 3,
          opacity: .3,
          fillColor: this.starsData[this.currentStar].color,
          shadowColor: "white",
          shadowBlur: 6,
          shadowOffset: new a.a.Point(0, 0)
        })
        var e = new a.a.Symbol(this.bgStarCircle), i = void 0, s = void 0, n = void 0
        for (i = 0; i < t; i += 1) s = a.a.Point.random().multiply(a.a.view.size), n = e.place(s), n.scale(i / t), this.bgStars.push(n)
      }, resetTransmissions: function() {
        this.timeoutStartSimulated && clearTimeout(this.timeoutStartSimulated), this.transmitionDelayed && clearTimeout(this.transmitionDelayed), this.timeoutEndSimulated && clearTimeout(this.timeoutEndSimulated), this.HorLinePath.opacity = 0, this.resetTransmissionsDrawing = !0, clearInterval(this.metronomeInterval), clearTimeout(this.timeoutEndSimulated), this.isTransmitionSimulated = !1, this.isMouseDown = !1, this.onMouseUp({}), this.transmissionsExport = [], cancelAnimationFrame(this.animateSimulatedTransmition), cancelAnimationFrame(this.animate)
      }, onResize: function() {
        this.drawingGuideBounds = this.drawingGuideEl.getBoundingClientRect(), this.elBounds = this.$el.getBoundingClientRect(), this.waveMask.bounds = new a.a.Rectangle(this.drawingGuideBounds.left, this.drawingGuideBounds.top, this.drawingGuideBounds.width, this.drawingGuideBounds.height)
      }, onMouseDown: function(t) {
        this.isTransmitionIncoming || this.destroyed || this.resetTransmissionsDrawing || this.isStarTransmition && t.isTrusted || (this.$el.classList.add("mouse-down"), this.isMouseDown = !0, this.isTransmitionIncoming = !0, this.mousePos = new a.a.Point(0, .5 * this.drawingGuideBounds.height + (this.elBounds.height - this.drawingGuideBounds.height)), this.position = this.mousePos, this.easePosition = this.position, this.signalYPercentage = .5, this.transmitionStart())
      }, onMouseMove: function(t) {
        if (t.preventDefault && t.preventDefault(), (!this.isStarTransmition || !t.isTrusted) && this.isMouseDown && this.isTransmitionIncoming) {
          var e = this.drawingGuideEl.getBoundingClientRect(), i = 0, s = 0
          if (this.isTransmitionSimulated && t.isTrusted) return
          var n = void 0
          t.touches ? (n = t.touches[0], i = n.clientX - e.left, s = n.clientY - e.top) : (n = t, i = n.offsetX, s = n.offsetY), s >= 0 && s < this.drawingGuideBounds.height && i >= 0 && i < this.drawingGuideBounds.width ? this.movingOnCanvas = !0 : this.movingOnCanvas = !1, i = Math.max(i, 0), i = Math.min(i, e.width), s = Math.max(s, 0), s = Math.min(s, e.height), this.mousePos = new a.a.Point(i, s)
        }
      }, onMouseUp: function(t) {
        var e = this
        this.isTransmitionIncoming && (this.isStarTransmition && t.isTrusted || (this.movingOnCanvas = !1, this.$el.classList.remove("mouse-down"), this.isMouseDown = !1, this.resetTransmissionsDrawing ? (this.position.y = .5 * this.drawingGuideBounds.height, this.transmitionEnd()) : o.TweenMax.to(this.position, .4, {
          y: .5 * this.drawingGuideBounds.height,
          onComplete: function() {
            e.transmitionEnd()
          }
        })))
      }, getCurrentPath: function(t) {
        return t[t.length - 1]
      }, drawPath: function() {
        var t = this.getCurrentPath(this.transmitionsPathGroups)
        if (t) {
          var e = new a.a.Point(-1 * this.graphSpeed, 0)
          t.translate(e)
          var i = new a.a.Point(a.a.view.size.width - this.drawingGuideBounds.left, this.easePosition.y + this.drawingGuideBounds.top)
          if (this.getCurrentPath(this.transmitionsPathGroups)) {
            var s = this.getCurrentPath(this.transmitionsPathGroups).lineDelayPath
            s.lineTo(i), s.segments.length > 500 && s.segments[0].remove(), this.HorLinePath.position = new a.a.Point(a.a.view.center.x, this.position.y + this.drawingGuideBounds.top)
          }
        }
      }, prevStar: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "horizontal"
        this.currentStar > 0 && (this.currentStar--, this.updateStar(0, t))
      }, nextStar: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "horizontal"
        this.currentStar < this.starsData.length - 1 && (this.currentStar++, this.updateStar(1, t))
      }, gotoStar: function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "horizontal"
        this.currentStar = t, this.updateStar(e, i)
      }, updateStar: function(t, e) {
        var i = this, s = this.getCurrentPath(this.transmitionsPathGroups)
        s && (s.lineDelayPath.fillColor = this.starsData[this.currentStar].color), o.TweenMax.to(this.bgStarCircle, 2, { fillColor: this.starsData[this.currentStar].color }), this.bgStarsTween.status = 1, o.TweenMax.killTweensOf(this.bgStarsTween), o.TweenMax.to(this.bgStarsTween, 1, {
          status: 0,
          ease: o.Cubic.easeInOut,
          onUpdate: function() {
            return i.moveBgStars(t, e)
          },
          onComplete: function() {
            return i.moveBgStars(t, e)
          }
        })
      }, moveBgStars: function(t, e, i) {
        for (var s = void 0, n = void 0, o = 0; o < this.bgStars.length; o++) s = this.bgStars[o], n = i || .4 * s.bounds.width * this.bgStarsTween.status, 1 === t ? "horizontal" === e ? s.position.x -= n : s.position.y -= n : "horizontal" === e ? s.position.x += n : s.position.y += n, "horizontal" === e ? s.bounds.left > a.a.view.size.width ? s.position.x = 1 : s.bounds.left < 0 && (s.position.x = a.a.view.size.width) : s.bounds.top > a.a.view.size.height ? s.position.y = s.bounds.height : s.bounds.top < 0 && (s.position.y = a.a.view.size.height)
      }, unlock: function() {
        var t = this.audioContext
        i.i(c.c)(t)
      }, initAudioContext: function() {
        i.i(c.c)(this.audioContext)
        for (var t = [], e = 0; e < this.starsData.length; e++) t.push(this.starsData[e].type)
        this.audioController = new l.a({
          audioContext: this.audioContext,
          noteLength: this.noteLength,
          intervalRepeat: this.intervalRepeat,
          sounds: t
        }), this.audioController.init()
      }, killAudioContext: function() {
        this.audioController.kill()
      }, togglePlay: function(t) {
        this.isPlaying = !this.isPlaying, null !== t && (this.isPlaying = t), this.audioController.typeIndex = this.currentStar, this.audioController.togglePlay = this.isPlaying
      }, simulateTransmition: function() {
        var t = this
        this.destroyed || this.resetTransmissionsDrawing || (this.isTransmitionSimulated = !0, this.onMouseDown({}), this.simulateIncrement = 0, this.simulatedParams.intensity = .2 + .8 * Math.random(), this.simulatedParams.speed = .4 * (.2 + Math.random()), this.animateSimulatedTransmition(), this.timeoutEndSimulated = setTimeout(function() {
          t.isTransmitionSimulated = !1, t.onMouseUp({})
        }, 1300 * Math.random() + 1e3))
      }, transmitionStart: function() {
        this.togglePlay(!0), this.mousePos = new a.a.Point(0, .5 * this.drawingGuideBounds.height), this.position = this.mousePos, this.easePosition = this.position, this.signalYPercentage = .5, this.audioController.signalYPercentage = .5
        var t = Object.assign({}, this.starsData[this.currentStar])
        this.isStarTransmition || (t.color = "#ffffff")
        var e = new r.a
        e.setPaths({
          starData: t,
          drawingGuideBounds: this.drawingGuideBounds
        }), this.transmitionsPathGroups.push(e), this.wavesContainer.addChild(e)
      }, transmitionEnd: function() {
        var t = this
        if (!this.destroyed) {
          this.togglePlay(!1)
          var e = this.getCurrentPath(this.transmitionsPathGroups)
          if (e) {
            var i = 0
            this.resetTransmissionsDrawing || (i = .5, this.addTransmissionToConv()), o.TweenMax.to(e, i, {
              opacity: 0,
              delay: .05,
              onComplete: function() {
                t.isTransmitionIncoming = !1, t.isStarTransmition ? t.$el.classList.remove("users-turn") : t.$el.classList.add("users-turn"), e.remove()
              }
            })
          }
          this.isStarTransmition = !this.isStarTransmition, this.isStarTransmition ? (this.$el.classList.remove("users-turn"), this.transmitionDelayed = setTimeout(function() {
            t.simulateTransmition()
          }, 1e3)) : this.transmitionDelayed = setTimeout(function() {
            t.$el.classList.add("users-turn")
          }, 1e3)
        }
      }, addTransmissionToConv: function() {
        var t = 1
        this.isGreaterThanTablet && (t = .8)
        var e = this.getCurrentPath(this.transmitionsPathGroups), i = e.lineDelayPath.clone()
        i.position = new a.a.Point(.5 * i.bounds.width, .5 * i.bounds.height), i.scale(t, i.bounds.topLeft)
        var s = i.exportSVG({ asString: !0 }),
          n = this.drawingGuideBounds.width > i.bounds.width ? this.drawingGuideBounds.width : i.bounds.width,
          r = this.drawingGuideBounds.height * t
        this.transmissionsExport.push({ svg: s, width: n, height: r, isUser: !this.isStarTransmition }), i.remove()
        var l = this.$refs["transmissions-wrapper"]
        if (l) {
          var c = this.$refs["transmissions-inner"], d = { y: l.scrollTop }
          o.TweenMax.to(d, 1.4, {
            y: c.getBoundingClientRect().height, delay: .2, onUpdate: function() {
              l.scrollTop = d.y
            }, onComplete: function() {
              l.scrollTop = d.y
            }
          })
        }
      }, animateSimulatedTransmition: function() {
        var t = Math.sin(this.simulateIncrement)
        t >= .9 && (this.simulatedParams.intensity = .2 + .8 * Math.random()), t <= -.9 && (this.simulatedParams.speed = .4 * (.2 + Math.random()))
        var e = t * (.5 * this.drawingGuideBounds.height) * this.simulatedParams.intensity
        e += .5 * this.drawingGuideBounds.height
        var i = { offsetX: 0, offsetY: e }
        this.simulateIncrement += this.simulatedParams.speed, this.onMouseMove(i), this.isMouseDown && !this.resetTransmissionsDrawing && requestAnimationFrame(this.animateSimulatedTransmition)
      }, animate: function() {
        this.isMouseDown && (this.position = this.mousePos)
        var t = (this.easePosition.y - this.position.y) / -4
        this.easePosition = this.easePosition.add(t), this.drawPath(), this.signalYPercentage = 1 - this.mousePos.y / this.drawingGuideBounds.height, this.audioController.signalYPercentage = this.signalYPercentage, this.resetTransmissionsDrawing || requestAnimationFrame(this.animate)
      }
    }
  }
}, function(t, e, i) {
  (function(s) {
    var n, a, o, r = void 0 !== t && t.exports && void 0 !== s ? s : this || window
    !function(t) {
      "use strict"
      var e = t.GreenSockGlobals || t, i = function(t) {
          var i, s = t.split("."), n = e
          for (i = 0; i < s.length; i++) n[s[i]] = n = n[s[i]] || {}
          return n
        }, s = i("com.greensock.utils"), n = function t(e) {
          var i = e.nodeType, s = ""
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent
            for (e = e.firstChild; e; e = e.nextSibling) s += t(e)
          } else if (3 === i || 4 === i) return e.nodeValue
          return s
        }, a = document, o = a.defaultView ? a.defaultView.getComputedStyle : function() {
        }, r = /([A-Z])/g, l = function(t, e, i, s) {
          var n
          return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(r, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), s ? n : parseInt(n, 10) || 0
        }, c = function(t) {
          return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        }, d = function(t) {
          var e, i, s, n = [], a = t.length
          for (e = 0; a > e; e++) if (i = t[e], c(i)) for (s = i.length, s = 0; s < i.length; s++) n.push(i[s]) else n.push(i)
          return n
        }, h = /(?:\r|\n|\t\t)/g, u = /(?:\s\s+)/g, p = 55296, v = 56319, f = 56320, m = 127462, _ = 127487, g = 127995,
        y = 127999, w = function(t) {
          return (t.charCodeAt(0) - p << 10) + (t.charCodeAt(1) - f) + 65536
        }, C = a.all && !a.addEventListener,
        b = " style='position:relative;display:inline-block;" + (C ? "*display:inline;*zoom:1;'" : "'"),
        x = function(t, e) {
          t = t || ""
          var i = -1 !== t.indexOf("++"), s = 1
          return i && (t = t.split("++").join("")), function() {
            return "<" + e + b + (t ? " class='" + t + (i ? s++ : "") + "'>" : ">")
          }
        }, S = s.SplitText = e.SplitText = function(t, e) {
          if ("string" == typeof t && (t = S.selector(t)), !t) throw"cannot split a null element."
          this.elements = c(t) ? d(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        }, T = function t(e, i, s) {
          var n = e.nodeType
          if (1 === n || 9 === n || 11 === n) for (e = e.firstChild; e; e = e.nextSibling) t(e, i, s) else (3 === n || 4 === n) && (e.nodeValue = e.nodeValue.split(i).join(s))
        }, M = function(t, e) {
          for (var i = e.length; --i > -1;) t.push(e[i])
        }, k = function(t) {
          var e, i = [], s = t.length
          for (e = 0; e !== s; i.push(t[e++]))
          return i
        }, z = function(t, e, i) {
          for (var s; t && t !== e;) {
            if (s = t._next || t.nextSibling) return s.textContent.charAt(0) === i
            t = t.parentNode || t._parent
          }
          return !1
        }, L = function t(e) {
          var i, s, n = k(e.childNodes), a = n.length
          for (i = 0; a > i; i++) s = n[i], s._isSplit ? t(s) : (i && 3 === s.previousSibling.nodeType ? s.previousSibling.nodeValue += 3 === s.nodeType ? s.nodeValue : s.firstChild.nodeValue : 3 !== s.nodeType && e.insertBefore(s.firstChild, s), e.removeChild(s))
        }, P = function(t, e, i, s, n, r, c) {
          var d, h, u, p, v, f, m, _, g, y, w, C, b = o(t), x = l(t, "paddingLeft", b), S = -999,
            k = l(t, "borderBottomWidth", b) + l(t, "borderTopWidth", b),
            P = l(t, "borderLeftWidth", b) + l(t, "borderRightWidth", b),
            I = l(t, "paddingTop", b) + l(t, "paddingBottom", b), A = l(t, "paddingLeft", b) + l(t, "paddingRight", b),
            E = .2 * l(t, "fontSize"), O = l(t, "textAlign", b, !0), D = [], R = [], B = [], N = e.wordDelimiter || " ",
            j = e.span ? "span" : "div", G = e.type || e.split || "chars,words,lines",
            F = n && -1 !== G.indexOf("lines") ? [] : null, $ = -1 !== G.indexOf("words"), V = -1 !== G.indexOf("chars"),
            q = "absolute" === e.position || !0 === e.absolute, W = e.linesClass, H = -1 !== (W || "").indexOf("++"),
            U = []
          for (F && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), H && (W = W.split("++").join("")), h = t.getElementsByTagName("*"), u = h.length, v = [], d = 0; u > d; d++) v[d] = h[d]
          if (F || q) for (d = 0; u > d; d++) p = v[d], ((f = p.parentNode === t) || q || V && !$) && (C = p.offsetTop, F && f && Math.abs(C - S) > E && ("BR" !== p.nodeName || 0 === d) && (m = [], F.push(m), S = C), q && (p._x = p.offsetLeft, p._y = C, p._w = p.offsetWidth, p._h = p.offsetHeight), F && ((p._isSplit && f || !V && f || $ && f || !$ && p.parentNode.parentNode === t && !p.parentNode._isSplit) && (m.push(p), p._x -= x, z(p, t, N) && (p._wordEnd = !0)), "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === d) && F.push([])))
          for (d = 0; u > d; d++) p = v[d], f = p.parentNode === t, "BR" !== p.nodeName ? (q && (g = p.style, $ || f || (p._x += p.parentNode._x, p._y += p.parentNode._y), g.left = p._x + "px", g.top = p._y + "px", g.position = "absolute", g.display = "block", g.width = p._w + 1 + "px", g.height = p._h + "px"), !$ && V ? p._isSplit ? (p._next = p.nextSibling, p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && U.push(p.nextSibling), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), v.splice(d--, 1), u--) : f || (C = !p.nextSibling && z(p.parentNode, t, N), p.parentNode._parent && p.parentNode._parent.appendChild(p), C && p.parentNode.appendChild(a.createTextNode(" ")), e.span && (p.style.display = "inline"), D.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? R.push(p) : V && !p._isSplit && (e.span && (p.style.display = "inline"), D.push(p))) : F || q ? (p.parentNode && p.parentNode.removeChild(p), v.splice(d--, 1), u--) : $ || t.appendChild(p)
          for (d = U.length; --d > -1;) U[d].parentNode.removeChild(U[d])
          if (F) {
            for (q && (y = a.createElement(j), t.appendChild(y), w = y.offsetWidth + "px", C = y.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(y)), g = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild)
            for (_ = " " === N && (!q || !$ && !V), d = 0; d < F.length; d++) {
              for (m = F[d], y = a.createElement(j), y.style.cssText = "display:block;text-align:" + O + ";position:" + (q ? "absolute;" : "relative;"), W && (y.className = W + (H ? d + 1 : "")), B.push(y), u = m.length, h = 0; u > h; h++) "BR" !== m[h].nodeName && (p = m[h], y.appendChild(p), _ && p._wordEnd && y.appendChild(a.createTextNode(" ")), q && (0 === h && (y.style.top = p._y + "px", y.style.left = x + C + "px"), p.style.top = "0px", C && (p.style.left = p._x - C + "px")))
              0 === u ? y.innerHTML = "&nbsp;" : $ || V || (L(y), T(y, String.fromCharCode(160), " ")), q && (y.style.width = w, y.style.height = p._h + "px"), t.appendChild(y)
            }
            t.style.cssText = g
          }
          q && (c > t.clientHeight && (t.style.height = c - I + "px", t.clientHeight < c && (t.style.height = c + k + "px")), r > t.clientWidth && (t.style.width = r - A + "px", t.clientWidth < r && (t.style.width = r + P + "px"))), M(i, D), M(s, R), M(n, B)
        }, I = function(t, e, i, s) {
          var o, r, l, c, d, f, C, b, x, S = e.span ? "span" : "div", M = e.type || e.split || "chars,words,lines",
            k = -1 !== M.indexOf("chars"), z = "absolute" === e.position || !0 === e.absolute, L = e.wordDelimiter || " ",
            P = " " !== L ? "" : z ? "&#173; " : " ", I = e.span ? "</span>" : "</div>", A = !0,
            E = a.createElement("div"), O = t.parentNode
          for (O.insertBefore(E, t), E.textContent = t.nodeValue, O.removeChild(t), t = E, o = n(t), C = -1 !== o.indexOf("<"), !1 !== e.reduceWhiteSpace && (o = o.replace(u, " ").replace(h, "")), C && (o = o.split("<").join("{{LT}}")), d = o.length, r = (" " === o.charAt(0) ? P : "") + i(), l = 0; d > l; l++) if ((f = o.charAt(l)) === L && o.charAt(l - 1) !== L && l) {
            for (r += A ? I : "", A = !1; o.charAt(l + 1) === L;) r += P, l++
            l === d - 1 ? r += P : ")" !== o.charAt(l + 1) && (r += P + i(), A = !0)
          } else "{" === f && "{{LT}}" === o.substr(l, 6) ? (r += k ? s() + "{{LT}}</" + S + ">" : "{{LT}}", l += 5) : f.charCodeAt(0) >= p && f.charCodeAt(0) <= v || o.charCodeAt(l + 1) >= 65024 && o.charCodeAt(l + 1) <= 65039 ? (b = w(o.substr(l, 2)), x = w(o.substr(l + 2, 2)), c = (m > b || b > _ || m > x || x > _) && (g > x || x > y) ? 2 : 4, r += k && " " !== f ? s() + o.substr(l, c) + "</" + S + ">" : o.substr(l, c), l += c - 1) : r += k && " " !== f ? s() + f + "</" + S + ">" : f
          t.outerHTML = r + (A ? I : ""), C && T(O, "{{LT}}", "<")
        }, A = function t(e, i, s, n) {
          var a, o, r = k(e.childNodes), c = r.length, d = "absolute" === i.position || !0 === i.absolute
          if (3 !== e.nodeType || c > 1) {
            for (i.absolute = !1, a = 0; c > a; a++) o = r[a], (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (d && 3 !== o.nodeType && "inline" === l(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, t(o, i, s, n))
            return i.absolute = d, void (e._isSplit = !0)
          }
          I(e, i, s, n)
        }, E = S.prototype
      E.split = function(t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0
        for (var e, i, s, n = this.elements.length, a = t.span ? "span" : "div", o = x(t.wordsClass, a), r = x(t.charsClass, a); --n > -1;) s = this.elements[n], this._originals[n] = s.innerHTML, e = s.clientHeight, i = s.clientWidth, A(s, t, o, r), P(s, t, this.chars, this.words, this.lines, i, e)
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
      }, E.revert = function() {
        if (!this._originals) throw"revert() call wasn't scoped properly."
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t]
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
      }, S.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery
        return i ? (S.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
      }, S.version = "0.5.8"
    }(r), function(s) {
      "use strict"
      var l = function() {
        return (r.GreenSockGlobals || r)[s]
      }
      void 0 !== t && t.exports ? t.exports = l() : i(353) && (a = [], n = l, void 0 !== (o = "function" == typeof n ? n.apply(e, a) : n) && (t.exports = o))
    }("SplitText")
  }).call(e, i(18))
}, function(t, e, i) {
  "use strict"

  function s() {
    var t = document, e = t.body
    return e || (e = t.createElement("body"), e.fake = !0), e
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    return t.hasAttribute(e)
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    return t.className.indexOf(e) >= 0
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    t.fake && (t.remove(), a.a.style.overflow = e, a.a.offsetHeight)
  }

  var n = i(19), a = (i.n(n), i(117))
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    var e = ""
    return t.fake && (e = n.a.style.overflow, t.style.background = "", t.style.overflow = n.a.style.overflow = "hidden", n.a.appendChild(t)), e
  }

  var n = i(117)
  e.a = s
}, , function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e, i) {
  t.exports = i.p + "static/media/bathhouse-impulse-reverb.wav.fcbf689c.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ahhhh-4.aif.0b9005e5.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ahhhh-6.aif.41c43823.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ahhhh-8.aif.37f242c3.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ambient-4.aif.d60c5f0a.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ambient-6.aif.0e6a25bb.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/big-ambient-8.aif.336fb001.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/gl-hit-ch-4.aif.229d9602.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/gl-hit-ch-6.aif.658649da.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/gl-hit-ch-8.aif.b1359662.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/glisten-voice-4.aif.bf0bf520.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/glisten-voice-6.aif.5ff07567.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/glisten-voice-8.aif.8b0f0272.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/hiss-sweep-4.aif.1e3b00a5.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/hiss-sweep-6.aif.d4fb5d95.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/hiss-sweep-8.aif.e28956bf.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/spectral-threat-4.aif.2a475a29.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/spectral-threat-6.aif.0635f203.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/spectral-threat-8.aif.ada63054.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/tank-hit-4.aif.fcd08dfe.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/tank-hit-6.aif.0524f2ff.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/tank-hit-8.aif.f8680fc4.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/unvoiced-4.aif.064e48ba.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/unvoiced-6.aif.abfe1c23.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/unvoiced-8.aif.e411b272.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-1-4.aif.e770c2ea.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-1-6.aif.b71eec01.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-1-8.aif.1ec8284d.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-3-4.aif.e4d40135.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-3-6.aif.e996ad8f.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-3-8.aif.7136d387.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vocoder-4-4.aif.6be2ec8d.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-dots-4.aif.b75dfd94.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-dots-6.aif.8bcc9e57.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-dots-8.aif.731f89eb.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-sibiliance-2-4.aif.47a0b36d.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-sibiliance-2-6.aif.405f4b02.mp3"
}, function(t, e, i) {
  t.exports = i.p + "static/media/vox-sibiliance-2-8.aif.2401f916.mp3"
}, , , function(t, e, i) {
  i(61)
  var s = i(0)(i(41), i(111), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(59)
  var s = i(0)(i(42), i(109), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(60)
  var s = i(0)(i(43), i(110), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(58)
  var s = i(0)(i(45), i(108), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(57)
  var s = i(0)(i(49), i(107), null, null)
  t.exports = s.exports
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { attrs: { id: "starchat" } }, [i("div", {
        ref: "transmissions-wrapper",
        staticClass: "svg-transmissions__wrapper"
      }, [i("ul", {
        ref: "transmissions-inner",
        staticClass: "svg-transmissions__inner"
      }, t._l(t.transmissionsExport, function(e) {
        return i("li", {
          staticClass: "svg-transmissions__item",
          class: { user: e.isUser }
        }, [i("svg", {
          staticStyle: { "enable-background": "new 0 0 860 600" },
          attrs: {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "xmlns:a": "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",
            x: "0px",
            y: "0px",
            width: "100%",
            height: e.height + "px",
            viewBox: "0 0 " + e.width + " " + e.height,
            "xml:space": "preserve"
          }
        }, [i("g", { domProps: { innerHTML: t._s(e.svg) } })])])
      }))]), t._v(" "), i("canvas", { attrs: { id: "greetings-canvas", resize: "" } }), t._v(" "), t._m(0)])
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "starchat__drawing-guide cursor--draw ignore-theme" }, [i("p", { staticClass: "prompt" }, [t._v("Draw your response")]), t._v(" "), i("p", { staticClass: "incoming" }, [t._v("Transmission incoming")])])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "soundboard__wrapper" }, [i("div", {
        staticClass: "soundboard",
        attrs: { id: "soundboard" }
      }, [t.isEdge ? t._e() : i("div", { staticClass: "soundboard__dither" }), t._v(" "), i("sound-effects"), t._v(" "), i("canvas", {
        ref: "canvas",
        staticClass: "soundboard__canvas",
        attrs: { resize: "" }
      }), t._v(" "), t.showSelector ? i("sound-selector", { attrs: { sounds: t.soundParams } }) : t._e()], 1), t._v(" "), i("sound-controls", {
        attrs: {
          record: t.record,
          stopRecord: t.stopRecord,
          wipeCanvas: t.wipeCanvas
        }
      }), t._v(" "), i("div", { staticClass: "soundboard-landing__button-wrapper soundboard-landing__button-wrapper--close" }, [i("button", {
        staticClass: "soundboard-landing__button soundboard-landing__button--close cursor--close ignore-theme",
        on: { click: t.exit }
      })])], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "soundboard__effects" }, [i("button", {
        class: t.effectCls("delay"),
        attrs: { disabled: !t.delayInitialized },
        on: {
          click: function(e) {
            t.toggleEffect("delay")
          }
        }
      }), t._v(" "), i("button", {
        class: t.effectCls("reverb"),
        attrs: { disabled: !t.reverbInitialized },
        on: {
          click: function(e) {
            t.toggleEffect("reverb")
          }
        }
      }), t._v(" "), i("button", {
        class: t.effectCls("fuzz"),
        attrs: { disabled: !t.fuzzInitialized },
        on: {
          click: function(e) {
            t.toggleEffect("fuzz")
          }
        }
      })])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", {
        staticClass: "sound-selector",
        style: { backgroundColor: t.sounds[t.currentSound].color }
      }, [i("div", { staticClass: "sound-selector__arrow sound-selector__arrow--prev" }, [0 !== t.currentSound ? i("button", {
        staticClass: "arrow arrow__prev",
        on: { click: t.prevSound }
      }) : t._e()]), t._v(" "), i("div", { staticClass: "sound-selector__arrow sound-selector__arrow--next" }, [t.currentSound !== t.sounds.length - 1 ? i("button", {
        staticClass: "arrow arrow__next",
        on: { click: t.nextSound }
      }) : t._e()])])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "sound-controls__wrapper" }, [i("div", {
        ref: "displayTextEl",
        staticClass: "sound-controls__text"
      }, [i("p", [t._v("\n\t\t\t" + t._s(t.displayText) + "\n\t\t")])]), t._v(" "), i("div", { staticClass: "sound-controls" }, [i("button", {
        ref: "actionButton",
        class: {
          "sound-controls__control": !0,
          "sound-controls__control--record": !t.currentSoundscapeId,
          "sound-controls__control--share": t.currentSoundscapeId
        },
        attrs: { disabled: t.actionDisabled, "data-clipboard-text": t.shareUrl },
        on: { click: t.handleAction }
      }, [t.currentSoundscapeId ? t._e() : i("svg", {
        attrs: {
          id: "Layer_1",
          "data-name": "Layer 1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 56 56"
        }
      }, [i("circle", {
        staticClass: "cls-1",
        attrs: { cx: "28", cy: "28", r: "26.5" }
      }), t._v(" "), i("circle", {
        staticClass: "cls-2",
        attrs: { cx: "28", cy: "28", r: "13.5" }
      }), t._v(" "), i("circle", {
        class: { "cls-3": !0, recording: t.isRecording },
        attrs: { cx: "28", cy: "28", r: "26.5" }
      })])]), t._v(" "), i("button", {
        staticClass: "sound-controls__control sound-controls__control--reset",
        on: { click: t.reset }
      })])])
    }, staticRenderFns: []
  }
}, , function(t, e) {
}, function(t, e) {
}, function(t, e, i) {
  "use strict"
  var s = i(36), n = i(2), a = i(165), o = i(164)
  s.a.use(n.d)
  var r = Object.assign({}, o.a, a.a), l = Object.assign({}, o.b, a.b), c = Object.assign({}, o.c, a.c),
    d = Object.assign({}, o.d, a.d), h = new n.d.Store({ state: r, getters: l, mutations: c, actions: d })
  e.a = h
}, function(t, e, i) {
  "use strict"
  i.d(e, "u", function() {
    return s
  }), i.d(e, "x", function() {
    return n
  }), i.d(e, "y", function() {
    return a
  }), i.d(e, "v", function() {
    return o
  }), i.d(e, "A", function() {
    return r
  }), i.d(e, "z", function() {
    return l
  }), i.d(e, "w", function() {
    return c
  }), i.d(e, "B", function() {
    return d
  }), i.d(e, "a", function() {
    return h
  }), i.d(e, "b", function() {
    return u
  }), i.d(e, "c", function() {
    return p
  }), i.d(e, "d", function() {
    return v
  }), i.d(e, "e", function() {
    return f
  }), i.d(e, "f", function() {
    return m
  }), i.d(e, "g", function() {
    return _
  }), i.d(e, "h", function() {
    return g
  }), i.d(e, "i", function() {
    return y
  }), i.d(e, "j", function() {
    return w
  }), i.d(e, "k", function() {
    return C
  }), i.d(e, "n", function() {
    return b
  }), i.d(e, "o", function() {
    return x
  }), i.d(e, "l", function() {
    return S
  }), i.d(e, "m", function() {
    return T
  }), i.d(e, "p", function() {
    return M
  }), i.d(e, "q", function() {
    return k
  }), i.d(e, "r", function() {
    return z
  }), i.d(e, "s", function() {
    return L
  }), i.d(e, "t", function() {
    return P
  })
  var s = "ROUTE_CHANGE", n = "FULLSCREEN_OPEN", a = "FULLSCREEN_CLOSE", o = "SCROLL_CHANGE", r = "VIEWPORT_CHANGE",
    l = "CHANGE_TRANSITION_TYPE", c = "TOGGLE_BG_COLOR", d = "CURRENT_VIDEO", h = "SOUNDBOARD_SET_BUFFER_SOURCES",
    u = "SOUNDBOARD_SHOW", p = "SOUNDBOARD_HIDE", v = "SOUNDBOARD_CONTEXT_UPDATE", f = "SOUNDBOARD_SUPPORTED",
    m = "SOUNDBOARD_ENV_UPDATE", _ = "SOUNDBOARD_ENV_READY", g = "SOUNDBOARD_ENV_CLOSE", y = "SOUNDBOARD_INITIALIZED",
    w = "SOUNDBOARD_SOUND_UPDATE", C = "SOUNDBOARD_RECORDING_UPDATE", b = "SOUNDBOARD_EFFECT_TOGGLE",
    x = "SOUNDBOARD_EFFECTS_SET", S = "SOUNDBOARD_SAVING", T = "SOUNDBOARD_SAVED", M = "SOUNDSCAPE_UPDATE",
    k = "SOUNDSCAPE_REMOVE", z = "SOUNDSCAPE_PLAY", L = "SOUNDSCAPE_FETCHING", P = "SOUNDSCAPE_FETCHED"
}, function(t, e, i) {
  "use strict"
  i.d(e, "a", function() {
    return s
  })
  var s = document.documentElement
}, function(t, e, i) {
  "use strict"

  function s(t) {
    return void 0 !== t.item
  }

  e.a = s
}, function(t, e, i) {
  "use strict"
  i.d(e, "a", function() {
    return a
  })
  var s = !1
  try {
    var n = Object.defineProperty({}, "passive", {
      get: function() {
        s = !0
      }
    })
    window.addEventListener("test", null, n)
  } catch (t) {
  }
  var a = !!s && { passive: !0 }
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    t = i.i(n.a)(t) || t instanceof Array ? t : [t], e = e instanceof Array ? e : [e]
    for (var s = e.length, a = t.length; a--;) for (var o = s; o--;) t[a].removeAttribute(e[o])
  }

  var n = i(118)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    if (t = i.i(n.a)(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e)) for (var s = t.length; s--;) for (var a in e) t[s].setAttribute(a, e[a])
  }

  var n = i(118)
  e.a = s
}, function(t, e, i) {
  t.exports = i.p + "static/media/intro1.21bb03b2.png"
}, , , , , function(t, e, i) {
  i(226)
  var s = i(0)(i(145), i(335), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(218)
  var s = i(0)(i(150), i(327), null, null)
  t.exports = s.exports
}, , , , , , function(t, e) {
}, function(t, e, i) {
  "use strict"
  var s = i(36), n = i(298), a = i.n(n), o = i(352), r = (i.n(o), i(5)), l = i.n(r), c = i(300), d = i.n(c), h = i(163),
    u = i(115)
  i.d(e, "a", function() {
    return p
  }), l.a.msie || l.a.msedge || (window.devicePixelRatio = Math.min(window.devicePixelRatio, 2)), l.a.msie && document.body.classList.add("is-ie"), l.a.msedge && document.body.classList.add("is-ie-edge"), i.i(o.sync)(u.a, h.a), s.a.use(a.a, {
    id: "UA-11792855-15",
    checkDuplicatedScript: !0,
    router: h.a
  })
  var p = new s.a(Object.assign({ router: h.a, store: u.a }, d.a))
}, , , function(t, e, i) {
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
  i(208).polyfill(), i(204), Object.assign = i(292), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
    return e = e || 0, this.indexOf(t, e) === e
  }), Array.from || (Array.from = function() {
    var t = Object.prototype.toString, e = function(e) {
      return "function" == typeof e || "[object Function]" === t.call(e)
    }, i = function(t) {
      var e = Number(t)
      return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
    }, s = Math.pow(2, 53) - 1, n = function(t) {
      var e = i(t)
      return Math.min(Math.max(e, 0), s)
    }
    return function(t) {
      var i = this, s = Object(t)
      if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined")
      var a, o = arguments.length > 1 ? arguments[1] : void 0
      if (void 0 !== o) {
        if (!e(o)) throw new TypeError("Array.from: when provided, the second argument must be a function")
        arguments.length > 2 && (a = arguments[2])
      }
      for (var r, l = n(s.length), c = e(i) ? Object(new i(l)) : new Array(l), d = 0; d < l;) r = s[d], c[d] = o ? void 0 === a ? o(r, d) : o.call(a, r, d) : r, d += 1
      return c.length = l, c
    }
  }()), Object.keys || (Object.keys = function() {
    var t = Object.prototype.hasOwnProperty, e = !{ toString: null }.propertyIsEnumerable("toString"),
      i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      n = i.length
    return function(a) {
      if ("object" !== (void 0 === a ? "undefined" : s(a)) && "function" != typeof a || null === a) throw new TypeError("Object.keys called on non-object")
      var o = []
      for (var r in a) t.call(a, r) && o.push(r)
      if (e) for (var l = 0; l < n; l++) t.call(a, i[l]) && o.push(i[l])
      return o
    }
  }())
}, , , function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
    props: {
      title: { type: String, required: !0 },
      author: { type: String, required: !0 },
      index: { type: Number, required: !0 },
      isOpen: { type: Boolean, required: !0 }
    }, computed: {
      extendedTitle: function() {
        var t = "", e = void 0
        for (e = 0; e < this.headerRepeat; e++) t += "<h3>" + this.author + "</h3><h4>" + this.title + "</h4>"
        return t
      }
    }, data: function() {
      return {
        headerRepeat: 10,
        headerWidth: 0,
        titlePosX: 0,
        scrollProgress: 0,
        accordionItem: null,
        accordionItemTop: null,
        accordionItemRight: null,
        accordionItemBottom: null,
        accordionItemLeft: null,
        accordionItemTopScale: 1,
        accordionItemRightScale: 1,
        accordionItemBottomScale: 1,
        accordionItemLeftScale: 1,
        accordionItemBounds: null
      }
    }, mounted: function() {
      var t = this
      this.accordionItemTopScale = 1, this.accordionItemRightScale = 1, this.accordionItemBottomScale = 1, this.accordionItemLeftScale = 1, this.scrollProgress = 0, this.bindOnScroll = function(e) {
        return t.onScroll(e)
      }, this.accordionItem = this.$el.querySelector(".accordion-item__text"), this.accordionItemBounds = this.accordionItem.getBoundingClientRect(), this.accordionItemTop = this.accordionItem.querySelector(".top"), this.accordionItemRight = this.accordionItem.querySelector(".right"), this.accordionItemBottom = this.accordionItem.querySelector(".bottom"), this.accordionItemLeft = this.accordionItem.querySelector(".left"), this.accordionItem.addEventListener("scroll", this.bindOnScroll)
    }, beforeDestroy: function() {
      this.accordionItem.removeEventListener("scroll", this.bindOnScroll)
    }, methods: {
      onClickAccordion: function() {
        var t = this
        this.isOpen || (setTimeout(function() {
          t.accordionItem.scrollTop = 0
        }, 0), this.accordionItemTopScale = 1, this.accordionItemRightScale = 1, this.accordionItemBottomScale = 1, this.accordionItemLeftScale = 1, this.scrollProgress = 0, this.$ga.event("accordion", "opened", this.author)), this.$parent.onClickAccordion(this.index)
      }, onScroll: function() {
        this.scrollProgress = this.accordionItem.scrollTop / (this.accordionItem.scrollHeight - this.accordionItem.clientHeight)
        var t = [0, .25, .5, .75], e = void 0, i = void 0
        for (this.accordionItemTopScale = 1, this.accordionItemRightScale = 1, this.accordionItemBottomScale = 1, this.accordionItemLeftScale = 1, e = 0; e < t.length; e++) i = t[e], this.scrollProgress >= i && (0 === e && (this.accordionItemTopScale = 1 - Math.min((this.scrollProgress - i) / .25, 1)), 1 === e && (this.accordionItemRightScale = 1 - Math.min((this.scrollProgress - i) / .25, 1)), 2 === e && (this.accordionItemBottomScale = 1 - Math.min((this.scrollProgress - i) / .25, 1)), 3 === e && (this.accordionItemLeftScale = 1 - Math.min((this.scrollProgress - i) / .25, 1)))
      }
    }
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  Object.defineProperty(e, "__esModule", { value: !0 })
  var n = i(4)
  e.default = {
    name: "Annotation",
    props: ["image", "title", "transcription", "wordType", "definition", "type", "link", "id"],
    data: function() {
      return { display: !1, touchListener: null, isTouch: i.i(n.g)(), annotationVisible: !1 }
    },
    computed: {
      annotationCls: function() {
        return s({ annotation: !0, "annotation--open": !0 === this.display }, "annotation--" + this.type, !0)
      }, anchorCls: function() {
        return { annotation__anchor: !0, "annotation__anchor--hover": !0 === this.display }
      }
    },
    beforeDestroy: function() {
      this.annotationVisible = !1
    },
    mounted: function() {
      var t = this
      setTimeout(function() {
        t.annotationVisible = !0
      }, 500)
    },
    watch: {
      display: function(t) {
        this.isTouch && (t ? this.touchListener = window.addEventListener("touchstart", this.handleTouch) : (window.removeEventListener("touchstart", this.handleTouch), this.touchListener = null)), t && this.$ga.event("annotation", "open", this.title)
      }
    },
    methods: {
      show: function() {
        var t = this.$refs.annotation
        t.style.display = "block"
        var e = t.getBoundingClientRect(), i = e.left, s = e.right
        s = window.innerWidth - s, i < 0 ? t.style["margin-left"] = Math.abs(i) + "px" : "/brainwaves" === this.$route.path && "grease" === this.id && 768 === window.innerWidth ? t.style["margin-left"] = "-38px" : "/brainwaves" === this.$route.path && s < 60 ? t.style["margin-left"] = "-" + 2 * (60 - s) + "px" : s < 0 && (t.style["margin-left"] = "-" + Math.abs(i) + "px"), this.display = !0
      }, hide: function() {
        this.$refs.annotation.setAttribute("style", ""), this.display = !1
      }, handleTouch: function(t) {
        var e = this, i = t.target
        return Array.from(i.classList).forEach(function(t) {
          t.includes("share-link") || e.hide()
        }), !0
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(5), a = i.n(n), o = i(1), r = (i.n(o), i(6)), l = i(4), c = i(305), d = i.n(c), h = i(10),
    u = i.n(h), p = i(304), v = i.n(p), f = i(301), m = i.n(f), _ = i(128), g = i.n(_), y = i(309), w = i.n(y),
    C = i(307), b = i.n(C)
  e.default = {
    components: {
      Navigation: d.a,
      Loader: v.a,
      SectionTitle: u.a,
      BgDots: m.a,
      DitherBackground: g.a,
      UpgradeBrowser: w.a,
      RotatePhone: b.a
    }, watch: {
      $route: function(t, e) {
        this.firstPath !== this.$route.path && "NotFound" !== e.name && this.$store.dispatch("routeChange")
      }
    }, computed: Object.assign({}, i.i(s.a)({
      isNextCtaTransition: function(t) {
        return t.app.nextCtaTransition
      }, isRouteDirty: function(t) {
        return t.app.routeDirty
      }, isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }
    }), i.i(s.b)(["isNextCtaTransition", "isRouteDirty", "isGreaterThanTablet"]), {
      showLoader: function() {
        return (!this.isRouteDirty || "/preface" === this.$route.path) && "NotFound" !== this.$route.name
      }
    }), data: function() {
      return { firstPath: window.location.pathname, isIe: a.a.msie, scrollTop: 0 }
    }, created: function() {
      i.i(l.g)(), this.onResizeWindow()
    }, mounted: function() {
      var t = this
      this.bindOnScroll = function(e) {
        return t.onScroll(e)
      }, window.addEventListener("scroll", this.bindOnScroll), window.addEventListener("resize", function() {
        return t.onResizeWindow()
      })
    }, methods: {
      onResizeWindow: function() {
        var t = window.innerWidth > r.h
        this.$store.dispatch("viewportChanges", t)
      }, onScroll: function() {
        var t = window.pageYOffset || document.documentElement.scrollTop
        this.$store.dispatch("scrollChange", t), window.innerHeight + window.scrollY >= document.body.offsetHeight && this.$ga.event("scroll", "bottom", this.$route.path)
      }, beforeLeaveTransition: function(t) {
        var e = this
        this.$refs.bgDots.hide(), this.$refs.ditherBg.killListeners(), t.classList.add("transition-out"), this.$refs.ditherBg.toBlack(), this.isGreaterThanTablet && this.isNextCtaTransition && !a.a.msie && (this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, o.TweenMax.to(this, .4, {
          scrollTop: document.body.scrollHeight - window.innerHeight,
          ease: o.Cubic.easeInOut,
          onUpdate: function() {
            window.scrollTo(0, e.scrollTop)
          },
          onComplete: function() {
            window.scrollTo(0, e.scrollTop)
          }
        }))
      }, leaveTransition: function(t, e) {
        if (!this.isGreaterThanTablet || !this.isNextCtaTransition || a.a.msie) return window.scrollTo(0, 0), void e()
        var i = t.querySelector(".next-page__cta-wrapper")
        document.body.classList.add("nav-no-scroll"), i.style.height = "auto", o.TweenMax.to(i, 1, {
          y: -.5 * window.innerHeight,
          force3D: !0,
          delay: .5,
          ease: o.Cubic.easeInOut
        }), setTimeout(function() {
          window.scrollTo(0, 0), e()
        }, 3200)
      }, enterTransition: function(t, e) {
        this.$refs.bgDots.show(), this.$store.dispatch("isNextCtaTransition", !1), this.$refs.ditherBg.initDOMListeners(), document.body.classList.remove("nav-no-scroll"), e(), this.$refs.ditherBg.lastTriggerYpos = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1)
  i.n(s)
  e.default = {
    data: function() {
      return { dotsOrder: ["1", "2", "3", "4", "5"] }
    }, methods: {
      hide: function() {
        s.TweenMax.to(this.$el, .3, { opacity: 0 })
      }, show: function() {
        var t = this.dotsOrder.map(function(t) {
          return [Math.random(), t]
        }).sort(function(t, e) {
          return t[0] - e[0]
        }).map(function(t) {
          return t[1]
        })
        this.dotsOrder = t, s.TweenMax.to(this.$el, 2, { opacity: 1, delay: .4 })
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(50)), a = i.n(n), o = i(15)
  e.default = {
    props: ["narrowIntro", "narrowSpans", "wideSpans"], mixins: [o.a], mounted: function() {
      this.splittedText = new a.a(this.$el, { type: "words,chars" })
    }, methods: {
      transitionIn: function() {
        if (!this.$el.classList.contains("no-animation")) {
          this.$el.classList.remove("transparent")
          var t = this.$el.querySelectorAll(".preface__text-line"), e = void 0, i = void 0, n = void 0, a = void 0,
            o = void 0, r = void 0, l = void 0
          for (n = 0; n < t.length; n++) for (e = t[n].children, l = .1 * n, a = 0; a < e.length; a++) if (i = e[a].children, e[a].classList.contains("annotation__wrapper")) r = .8, l += .1, s.TweenMax.from(e[a], r, {
            opacity: 0,
            delay: l
          }), l += .24 else for (o = 0; o < i.length; o++) r = .4, s.TweenMax.from(i[o], r, {
            opacity: 0,
            delay: l
          }), l += .04
        }
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
    name: "Carousel",
    props: { images: { type: Array, required: !0 }, captions: { type: Array, required: !1 } },
    computed: {
      carousel: function() {
        return this.$refs.carousel
      }
    },
    data: function() {
      return { currentSlide: 0, slideDirection: 1, engaged: !1 }
    },
    methods: {
      changeSlide: function(t) {
        var e = t.offsetX, i = this.slideDirection, s = this.updateSlideDirection, n = this.currentSlide,
          a = this.images
        this.engaged || (this.engaged = !0, this.$ga.event("slider", "engaged", this.$attrs.name)), s({ offsetX: e })
        var o = void 0
        o = i > 0 ? 0 === n ? 1 : n === a.length - 1 ? 0 : n + 1 : 0 === n ? a.length - 1 : n === a.length - 1 ? a.length - 2 : n - 1, this.$el.querySelector("#caption-" + n).classList.remove("active"), this.$el.querySelector("#caption-" + o).classList.add("active"), this.currentSlide = o
      }, updateSlideDirection: function(t) {
        var e = t.offsetX, i = this.carousel.offsetWidth, s = Math.ceil(e / i * 100)
        this.slideDirection = s >= 50 ? 1 : -1
      }, itemClass: function(t) {
        return { carousel__item: !0, "carousel__item--active": t === this.currentSlide }
      }, dotClass: function(t) {
        return { carousel__dot: !0, "carousel__dot--active": t === this.currentSlide }
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(15))
  e.default = {
    name: "Contributor",
    mixins: [n.a],
    props: {
      image: { type: String, required: !0 },
      name: { type: String, required: !0 },
      description: { type: String }
    },
    methods: {
      transitionIn: function() {
        var t = this
        this.$el.classList.remove("transparent")
        var e = this.$el.classList.contains("right")
        s.TweenMax.from(this.$el, .6, {
          opacity: 0,
          delay: e ? .2 : .1
        }), s.TweenMax.from(this.$el, .8, {
          x: e ? "100" : "-100",
          ease: s.Cubic.easeOut,
          force3D: !0,
          delay: e ? .1 : 0,
          onComplete: function() {
            s.TweenMax.set(t.$el, { clearProps: "transform, opacity" })
          }
        })
      }
    }
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  Object.defineProperty(e, "__esModule", { value: !0 })
  var n = i(7), a = i.n(n)
  e.default = {
    name: "CreditsColumn",
    components: { Annotation: a.a },
    props: {
      contributors: { type: Array, required: !0 },
      offset: { type: String, required: !0 },
      annotation: { type: String }
    },
    computed: {
      columnClass: function() {
        return s({ "contributor-column": !0 }, "contributor-column--offset-" + this.offset, this.offset > -1)
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(15))
  e.default = {
    mixins: [n.a], methods: {
      transitionIn: function() {
        this.$el.classList.remove("transparent")
        var t = this.$el.querySelector(".section-diptych__item-1"),
          e = this.$el.querySelector(".section-diptych__item-2"), i = [t, e]
        s.TweenMax.allFrom(i, .7, { opacity: 0 }, .1), s.TweenMax.allFrom(i, 1, {
          y: 60,
          ease: s.Cubic.easeOut,
          force3D: !0,
          delay: .2
        }, .1)
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(5), a = i.n(n), o = i(16), r = i(296), l = i.n(r), c = i(295), d = i.n(c), h = i(6)
  e.default = {
    data: function() {
      return {
        ditherSpeed: 70,
        canvasWidth: 110,
        canvasHeight: 110,
        gl: null,
        shaderProgram: null,
        squareVertexPositionBuffer: null,
        frameNum: 0,
        onlyEveryNFrames: 1,
        increment: null,
        multiplier: null,
        isWhite: !1,
        lastTriggerYpos: 0,
        isGreaterThanTablet: window.innerWidth > h.h,
        viewListeners: [],
        isIe: a.a.msie,
        isiOS: a.a.ios
      }
    }, computed: Object.assign({}, i.i(s.a)({
      videoToggling: function(t) {
        return t.app.routeDirty
      }
    }), i.i(s.b)(["isNextCtaTransition", "videoToggling"])), created: function() {
      var t = .5
      this.canvasWidth = window.innerHeight * t, this.canvasHeight = window.innerWidth * t
    }, mounted: function() {
      var t = this
      setTimeout(function() {
        t.initDOMListeners()
      }, 100), !this.isGreaterThanTablet || this.isIe || this.isiOS || (this.initGL(), this.initShaders(), this.initBuffers())
    }, beforeDestroy: function() {
      this.killListeners()
    }, methods: {
      killListeners: function() {
        var t = void 0
        for (t = 0; t < this.viewListeners.length; t++) this.viewListeners[t] && (this.viewListeners[t].off("enter"), this.viewListeners[t].off("exit"), this.viewListeners[t] = null)
        this.viewListeners = []
      }, initDOMListeners: function() {
        var t = this
        this.viewListeners = [], this.ditherTriggers = this.$parent.$el.querySelectorAll(".dither-trigger")
        var e = void 0, s = void 0
        document.body.classList.add("black-theme"), document.body.classList.remove("white-theme")
        for (var n = 0; n < this.ditherTriggers.length; n++) e = this.ditherTriggers[n], s = i.i(o.a)(e), e.classList.contains("to-black") ? (s.on("enter", function() {
          return t.triggerToBlack("enter")
        }), s.on("exit", function() {
          return t.triggerToWhite("exit")
        })) : e.classList.contains("to-white") ? (s.on("enter", function() {
          return t.triggerToWhite("enter")
        }), s.on("exit", function() {
          return t.triggerToBlack("exit")
        })) : s.on("enter", function() {
          return t.toggle()
        }), s.check(), this.viewListeners.push(s)
      }, triggerToBlack: function(t) {
        var e = window.pageYOffset || document.documentElement.scrollTop
        "enter" === t ? e > this.lastTriggerYpos && this.toBlack() : "exit" === t && e < this.lastTriggerYpos && this.toBlack(), this.lastTriggerYpos = e
      }, triggerToWhite: function(t) {
        var e = window.pageYOffset || document.documentElement.scrollTop
        "enter" === t ? e > this.lastTriggerYpos && this.toWhite() : "exit" === t && e < this.lastTriggerYpos && this.toWhite(), this.lastTriggerYpos = e
      }, toBlack: function() {
        this.isWhite && (this.isWhite = !0, document.body.classList.add("black-theme"), document.body.classList.remove("white-theme"), !this.isGreaterThanTablet || this.isIe || this.isiOS || this.transitionIn())
      }, toWhite: function() {
        this.isWhite || (this.isWhite = !1, document.body.classList.add("white-theme"), document.body.classList.remove("black-theme"), !this.isGreaterThanTablet || this.isIe || this.isiOS || this.transitionIn())
      }, toggle: function() {
        this.isWhite ? this.toBlack() : this.toWhite()
      }, transitionIn: function() {
        this.lastTriggerYpos = window.pageYOffset || document.documentElement.scrollTop, this.$store.dispatch("toggleBackgroundColor", !this.isWhite), this.frameNum = 0, this.isWhite ? (this.gl.clearColor(1, 1, 1, 1), this.increment = this.gl.viewportWidth) : (this.gl.clearColor(0, 0, 0, 1), this.increment = -1 * this.gl.viewportWidth), this.gl.enable(this.gl.DEPTH_TEST), this.multiplier = .1, this.animate()
      }, initGL: function() {
        this.gl = this.$el.getContext("webgl") || this.$el.getContext("experimental-webgl"), this.gl.viewportWidth = this.$el.width, this.gl.viewportHeight = this.$el.height, this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.enable(this.gl.BLEND)
      }, getShader: function(t, e) {
        var i = void 0
        if ("x-shader/x-fragment" === t) i = this.gl.createShader(this.gl.FRAGMENT_SHADER) else {
          if ("x-shader/x-vertex" !== t) return null
          i = this.gl.createShader(this.gl.VERTEX_SHADER)
        }
        return this.gl.shaderSource(i, e), this.gl.compileShader(i), this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) ? i : null
      }, initShaders: function() {
        var t = this.getShader("x-shader/x-fragment", d.a), e = this.getShader("x-shader/x-vertex", l.a)
        this.shaderProgram = this.gl.createProgram(), this.gl.attachShader(this.shaderProgram, e), this.gl.attachShader(this.shaderProgram, t), this.gl.linkProgram(this.shaderProgram), this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS) || console.warn("LINK_STATUS error: Could not initialize shaders"), this.gl.useProgram(this.shaderProgram), this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition"), this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute), this.shaderProgram.viewPort = this.gl.getUniformLocation(this.shaderProgram, "viewPort"), this.shaderProgram.multiplier = this.gl.getUniformLocation(this.shaderProgram, "uMultiplier"), this.shaderProgram.increment = this.gl.getUniformLocation(this.shaderProgram, "uIncrement")
      }, initBuffers: function() {
        this.squareVertexPositionBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer)
        var t = 1, e = [t, t, 0, -t, t, 0, t, -t, 0, -t, -t, 0]
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(e), this.gl.STATIC_DRAW), this.squareVertexPositionBuffer.itemSize = 3, this.squareVertexPositionBuffer.numItems = 4
      }, drawScene: function() {
        this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BI), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer), this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, this.squareVertexPositionBuffer.itemSize, this.gl.FLOAT, !1, 0, 0), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.squareVertexPositionBuffer.numItems)
      }, animate: function() {
        var t = this
        this.frameNum % this.onlyEveryNFrames == 0 && (this.gl.uniform1i(this.shaderProgram.frameNumUniform, this.frameNum), this.gl.uniform2f(this.shaderProgram.viewPort, this.gl.viewportWidth, this.gl.viewportHeight), this.gl.uniform1f(this.shaderProgram.increment, this.increment), this.gl.uniform1f(this.shaderProgram.multiplier, this.multiplier), this.drawScene(), this.isWhite ? this.increment -= this.ditherSpeed : this.increment += this.ditherSpeed, this.multiplier *= 1.01), this.frameNum++, this.isWhite ? this.increment > -1.2 * this.gl.viewportWidth ? requestAnimationFrame(function() {
          return t.animate()
        }) : this.isWhite = !this.isWhite : this.increment < 1.2 * this.gl.viewportWidth ? requestAnimationFrame(function() {
          return t.animate()
        }) : this.isWhite = !this.isWhite
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(5), a = i.n(n)
  e.default = {
    props: {
      id: { type: String, required: !0 },
      title: { type: String, required: !1 },
      src: { type: String, required: !1 },
      youtubeId: { type: String, required: !1 },
      type: { type: String, required: !1 },
      mobileSrc: { type: String, required: !1 },
      desktopSrc: { type: String, required: !1 },
      poster: { type: String, required: !1 },
      posterMobile: { type: String, required: !1 },
      posterDesktop: { type: String, required: !1 },
      progressClick: { type: Boolean, default: !1 },
      playPauseButton: { type: Boolean, default: !1 },
      bigPlayPauseButton: { type: Boolean, default: !1 },
      autoplay: { type: Boolean, default: !1 },
      customCursor: { type: Boolean, default: !1 },
      clickToMute: { type: Boolean, default: !1 }
    }, data: function() {
      return { isVideoPlaying: !1, displayEmbed: !1, videoDuration: 0, volume: 1, showPoster: !0, engaged: !1 }
    }, computed: Object.assign({}, i.i(s.a)({
      isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }, currentPlayingVideo: function(t) {
        return t.app.currentPlayingVideo
      }
    }), i.i(s.b)(["isGreaterThanTablet"]), {
      videoSrc: function() {
        return this.mobileSrc && this.desktopSrc ? this.isGreaterThanTablet ? this.desktopSrc : this.mobileSrc : this.src
      }, videoPoster: function() {
        return this.posterMobile && this.posterDesktop ? this.isGreaterThanTablet ? this.posterDesktop : this.posterMobile : this.poster
      }, wrapperStyle: function() {
        return !this.showPoster || this.autoplay && "youtube" !== this.type ? {} : { backgroundImage: "url(" + this.videoPoster + ")" }
      }
    }), watch: {
      currentPlayingVideo: function(t) {
        t !== this.id && this.isVideoPlaying && "youtube" !== this.type && (this.clickToMute ? this.toggleMute() : this.onTogglePlayPause())
      }, isVideoPlaying: function(t) {
        t && this.setCurrentVideo(this.id)
      }
    }, mounted: function() {
      this.$refs.nativeVideo && this.getVideoMeta()
    }, methods: Object.assign({}, i.i(s.c)(["setCurrentVideo"]), {
      getVideoMeta: function() {
        var t = this
        this.$refs.nativeVideo.addEventListener("loadedmetadata", function() {
          return t.onVideoMeta()
        })
      }, onVideoMeta: function() {
        this.videoDuration = this.$refs.nativeVideo.duration
      }, onClickVideo: function(t) {
        if ("youtube" !== this.type && (this.showPoster = !1), "youtube" === this.type) this.displayEmbed || (this.displayEmbed = !this.displayEmbed) else if (this.clickToMute && !this.isTouch) this.toggleMute() else if (this.progressClick && this.isVideoPlaying) {
          var e = 0, i = this.$refs.nativeVideo.getBoundingClientRect().width
          if (t.touches) e = t.touches[0].clientX / i else {
            var s = a.a.msie ? t.offsetX : t.layerX
            e = s / i
          }
          e = Math.max(0, e), e = Math.min(1, e), this.$refs.nativeVideo.currentTime = this.videoDuration * e, this.$refs.nativeVideo.play(), this.isVideoPlaying = !0
        } else t.target.classList.contains("video-player__play-pause-btn") || t.target.classList.contains("video-player__big-play-btn") || this.onTogglePlayPause()
      }, toggleMute: function() {
        0 === this.volume ? (this.$refs.nativeVideo.volume = 1, this.volume = 1, this.isVideoPlaying = !0) : (this.$refs.nativeVideo.volume = 0, this.volume = 0, this.isVideoPlaying = !1)
      }, onTogglePlayPause: function() {
        this.isVideoPlaying = !this.isVideoPlaying, this.$refs.nativeVideo && (this.isVideoPlaying ? (this.engaged || (this.engaged = !0, this.$ga.event("video", "play", this.title)), this.$refs.nativeVideo.play()) : this.$refs.nativeVideo.pause())
      }, play: function() {
        this.$refs.nativeVideo && (console.log("play"), this.isVideoPlaying = !0, this.$refs.nativeVideo.play())
      }
    })
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(50)), a = i.n(n), o = i(15)
  e.default = {
    props: ["narrowIntro", "narrowSpans", "wideSpans"], mixins: [o.a], methods: {
      transitionIn: function() {
        this.$el.classList.remove("transparent")
        var t = this.$el.querySelectorAll(".introduction-line__wrapper"), e = void 0, i = void 0
        for (i = 0; i < t.length; i++) e = new a.a(t[i], {
          type: "chars",
          charsClass: "intro__char"
        }), s.TweenMax.staggerFrom(e.chars, .6, { opacity: 0, delay: .1 * i }, .07)
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(1), a = (i.n(n), i(50)), o = i.n(a), r = i(11), l = i.n(r), c = i(7), d = i.n(c)
  e.default = {
    components: { Separator: l.a, Annotation: d.a }, data: function() {
      return {
        scrolledPastLoader: !1,
        clientBoundingRect: null,
        elHeight: 0,
        scrollTop: window.pageYOffset || document.documentElement.scrollTop
      }
    }, computed: Object.assign({}, i.i(s.b)(["isGreaterThanTablet"])), mounted: function() {
      var t = this
      this.elHeight = this.$el.getBoundingClientRect().height, this.bindOnScrollLoader = function(e) {
        return t.onScrollLoader(e)
      }, window.document.addEventListener("scroll", this.bindOnScrollLoader), this.clientBoundingRect = this.$el.getBoundingClientRect(), this.onScrollLoader(), this.isGreaterThanTablet && this.transitionIn()
    }, destroyed: function() {
      window.document.removeEventListener("scroll", this.bindOnScrollLoader)
    }, methods: {
      transitionIn: function() {
        for (var t = [], e = void 0, i = this.$el.querySelectorAll(".loader__intro-text-item"), s = 0, a = 0; a < i.length; a++) s = i[a].getBoundingClientRect().height, i[a].style.height = s + "px", e = new o.a(i[a], { type: "words,chars" }), t.push(e)
        for (var r = 1, l = .02, c = function(e) {
          e > 0 && (r += t[e - 1].chars.length * l + 1), n.TweenMax.staggerFrom(t[e].chars, .1, {
            display: "none",
            delay: r
          }, l, function() {
            t[e].elements[0].classList.add("blink-cursor"), t[e].elements[0].style.height = ""
          })
        }, d = 0; d < t.length; d++) c(d)
      }, onScrollLoader: function() {
        (window.pageYOffset || document.documentElement.scrollTop) > this.clientBoundingRect.top + this.clientBoundingRect.height ? (this.scrolledPastLoader = !0, document.body.querySelector("#navigation").classList.add("visible")) : document.body.classList.contains("nav-no-scroll") || document.body.querySelector("#navigation").classList.remove("visible")
      }, onClickToScroll: function() {
        var t = this
        n.TweenMax.to(this, .6, {
          scrollTop: this.$el.getBoundingClientRect().height + 1,
          ease: n.Cubic.easeInOut,
          onUpdate: function() {
            window.scrollTo(0, t.scrollTop)
          },
          onComplete: function() {
            t.scrolledPastLoader = !0, document.body.querySelector("#navigation").classList.add("visible")
          }
        })
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(5), n = i.n(s), a = i(4)
  e.default = {
    computed: {
      count: function() {
        return this.$store.state.count
      }
    }, data: function() {
      return { navWrapper: null, navCircles: [], isNavOpen: !1, lastScrollTop: 0, isIe: n.a.msie }
    }, mounted: function() {
      this.$el.classList.add("closed")
    }, methods: {
      disallowTouch: function(t) {
        a.g && t.preventDefault()
      }, toggleNav: function() {
        this.$el.classList.toggle("opened"), this.isNavOpen = !this.isNavOpen, this.isNavOpen ? (document.addEventListener("touchmove", this.disallowTouch), this.$ga.event("nav", "click", "open", this.$route.path), this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop, setTimeout(function() {
          document.body.classList.add("nav-no-scroll")
        }, 200)) : (document.removeEventListener("touchmove", this.disallowTouch), this.$ga.event("nav", "click", "closed", this.$route.path), document.body.classList.remove("nav-no-scroll"), window.scrollTo(0, this.lastScrollTop))
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(5), n = i.n(s), a = i(7), o = i.n(a)
  e.default = {
    props: {
      id: { type: Number, required: !0 },
      name: { type: String, required: !0 },
      location: { type: String, required: !0 },
      camera: { type: String, required: !0 },
      bio: { type: String, required: !0 },
      annotation: { type: Object, required: !1 }
    }, components: { Annotation: o.a }, data: function() {
      return { isIe: n.a.msie }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {}
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(1), a = (i.n(n), i(5)), o = i.n(a), r = i(11), l = i.n(r)
  e.default = {
    components: { Separator: l.a },
    props: {
      index: { type: Number, required: !1 },
      title: { type: String, required: !0 },
      titleVideoSrc: { type: String, required: !0 },
      titlePosterSrc: { type: String, required: !0 },
      ctaUrl: { type: String, required: !1 }
    },
    data: function() {
      return { isIe: o.a.msie }
    },
    computed: Object.assign({}, i.i(s.a)({
      isNextCtaTransition: function(t) {
        return t.app.nextCtaTransition
      }, isGreaterThanTablet: function(t) {
        return t.app.isGreaterThanTablet
      }
    }), i.i(s.b)(["isNextCtaTransition", "isGreaterThanTablet"])),
    mounted: function() {
      this.$refs.sectionIndex && n.TweenMax.from(this.$refs.sectionIndex, .7, { opacity: 0 })
    },
    methods: {
      onClickCta: function() {
        var t = this, e = this.$refs.titleVideo
        setTimeout(function() {
          e.setAttribute("src", t.titleVideoSrc)
        }, 500), this.$store.dispatch("isNextCtaTransition", !0), this.$ga.event("cta_next_page", "click", this.title)
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(15))
  e.default = {
    name: "Contributor",
    mixins: [n.a],
    props: { isSectionTitle: { type: Boolean, default: !1 } },
    mounted: function() {
      this.isSectionTitle && (this.$el.classList.add("section-title__separator"), s.TweenMax.from(this.$el, .7, {
        opacity: 0,
        delay: .1
      }), s.TweenMax.from(this.$el, .9, { y: 80, ease: s.Cubic.easeOut, force3D: !0, delay: 0 }))
    },
    methods: {
      transitionIn: function() {
        this.isSectionTitle || (this.$el.classList.remove("transparent"), s.TweenMax.from(this.$el, .7, {
          opacity: 0,
          delay: .1
        }), s.TweenMax.from(this.$el, .9, { y: 80, ease: s.Cubic.easeOut, force3D: !0, delay: 0 }))
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(15))
  e.default = {
    name: "Contributor",
    mixins: [n.a],
    props: { extraDelay: { default: 0, type: Number } },
    methods: {
      transitionIn: function() {
        var t = this
        this.$el.classList.remove("transparent"), s.TweenMax.from(this.$el, .7, {
          opacity: 0,
          delay: .1 + this.extraDelay
        }), s.TweenMax.from(this.$el, .9, {
          y: 80,
          ease: s.Cubic.easeOut,
          force3D: !0,
          delay: 0 + this.extraDelay,
          onComplete: function() {
            s.TweenMax.set(t.$el, { clearProps: "transform, opacity" })
          }
        })
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(37), a = i(8), o = i.n(a), r = i(4), l = this
  e.default = {
    name: "SoundboardLanding",
    components: { Introduction: o.a },
    props: { showActionButton: { type: Boolean, required: !0 } },
    mixins: [n.a],
    computed: Object.assign({}, i.i(s.a)({
      isFullscreen: function(t) {
        return t.app.fullscreen === l.fullscreenContainer
      }, contextScreen: function(t) {
        return t.soundboard.contextScreens.current
      }
    }), {
      buttonCls: function() {
        return {
          "soundboard-landing__button": !0,
          "cursor--start": !0,
          "soundboard-landing__button--next": this.contextScreen <= 2
        }
      }
    }),
    methods: Object.assign({}, i.i(s.c)(["fullscreenTakeover", "showSoundboard", "updateSoundboardContext", "setupAudioEnvironment"]), {
      handleClick: function() {
        var t = this
        if (0 === this.contextScreen) {
          this.fullscreenTakeover(this.fullscreenContainer)
          Array.from(document.querySelectorAll("video")).forEach(function(t) {
            return t.pause()
          }), this.updateSoundboardContext(1), this.$ga.event("soundboard", "activated")
        } else 1 === this.contextScreen ? this.updateSoundboardContext() : 2 === this.contextScreen && this.setupAudioEnvironment().then(function(e) {
          i.i(r.c)(e), t.updateSoundboardContext()
        })
      }
    })
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(15))
  e.default = {
    mixins: [n.a], methods: {
      transitionIn: function() {
        this.$el.classList.remove("transparent")
        var t = this.$el.querySelector(".section-triptych__item-1"),
          e = this.$el.querySelector(".section-triptych__item-2"),
          i = this.$el.querySelector(".section-triptych__item-3"), n = [t, i, e]
        s.TweenMax.allFrom(n, .7, { opacity: 0, delay: .1 }, .1), s.TweenMax.allFrom(n, 1, {
          y: 60,
          ease: s.Cubic.easeOut,
          force3D: !0,
          delay: 0
        }, .1)
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(5), n = i.n(s)
  e.default = {
    data: function() {
      return { dismissed: !1, isIe: n.a.msie }
    }, computed: {
      show: function() {
        return this.isIe && !this.dismissed
      }
    }, methods: {
      dismiss: function() {
        this.dismissed = !0
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  var s = i(36), n = i(350), a = i(6), o = i(115), r = i(316), l = i.n(r), c = i(318), d = i.n(c), h = i(312),
    u = i.n(h), p = i(314), v = i.n(p), f = i(317), m = i.n(f), _ = i(313), g = i.n(_), y = i(310), w = i.n(y),
    C = i(311), b = i.n(C), x = i(315), S = i.n(x)
  s.a.use(n.a), e.a = new n.a({
    mode: "history",
    routes: [{ path: "/", component: l.a, name: "Index" }, {
      path: "/guide",
      component: d.a,
      name: "Styleguide"
    }, { path: "/preface", component: l.a, name: "Preface" }, {
      path: "/greetings",
      component: u.a,
      name: "Greetings"
    }, { path: "/music", component: v.a, name: "Music" }, {
      path: "/brainwaves",
      component: w.a,
      name: "Brainwaves"
    }, { path: "/sounds", component: m.a, name: "Sounds" }, {
      path: "/sounds/:soundscapeId",
      component: m.a,
      name: "Soundscape"
    }, { path: "/images", component: g.a, name: "Images" }, {
      path: "/giving",
      component: b.a,
      name: "Giving"
    }, { path: "*", component: S.a, name: "NotFound" }],
    scrollBehavior: function(t, e) {
      var i = window.innerWidth > a.h, s = { x: 0, y: 0 }
      return e.path.startsWith("/sounds") && t.path.startsWith("/sounds") || o.a.state.app.nextCtaTransition && i ? {} : s
    }
  })
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  var n = i(116)
  i.d(e, "a", function() {
    return o
  }), i.d(e, "b", function() {
    return r
  }), i.d(e, "c", function() {
    return l
  }), i.d(e, "d", function() {
    return c
  })
  var a, o = {
    app: {
      nextCtaTransition: !1,
      backgroundWhite: !1,
      isRouteDirty: !1,
      isGreaterThanTablet: !1,
      fullscreen: null,
      scrollY: 0,
      lastScrollY: null,
      currentPlayingVideo: null
    }
  }, r = {
    isRouteDirty: function(t) {
      return t.app.isRouteDirty
    }, currentScrollY: function(t) {
      return t.app.scrollY
    }, isBackgroundWhite: function(t) {
      return t.app.backgroundWhite
    }, isNextCtaTransition: function(t) {
      return t.app.nextCtaTransition
    }, isGreaterThanTablet: function(t) {
      return t.app.isGreaterThanTablet
    }
  }, l = (a = {}, s(a, n.u, function(t) {
    t.app.isRouteDirty = !0
  }), s(a, n.v, function(t, e) {
    t.app.scrollY = e
  }), s(a, n.w, function(t, e) {
    t.app.backgroundWhite = e
  }), s(a, n.x, function(t, e) {
    var i = t.app
    i.fullscreen = e, i.lastScrollY = i.scrollY, document.body.classList.add("no-scroll")
  }), s(a, n.y, function(t) {
    var e = t.app
    e.fullscreen = null, document.body.classList.remove("no-scroll")
    var i = e.lastScrollY || 0
    window.scrollTo(0, i)
  }), s(a, n.z, function(t, e) {
    t.app.nextCtaTransition = e
  }), s(a, n.A, function(t, e) {
    t.app.isGreaterThanTablet = e
  }), s(a, n.B, function(t, e) {
    t.app.currentPlayingVideo = e
  }), a), c = {
    routeChange: function(t) {
      (0, t.commit)(n.u)
    }, scrollChange: function(t, e) {
      (0, t.commit)(n.v, e)
    }, toggleBackgroundColor: function(t, e) {
      (0, t.commit)(n.w, e)
    }, fullscreenTakeover: function(t, e) {
      (0, t.commit)(n.x, e)
    }, fullscreenClose: function(t) {
      (0, t.commit)(n.y)
    }, isNextCtaTransition: function(t, e) {
      (0, t.commit)(n.z, e)
    }, viewportChanges: function(t, e) {
      (0, t.commit)(n.A, e)
    }, setCurrentVideo: function(t, e) {
      (0, t.commit)(n.B, e)
    }
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  var n = i(4), a = i(116)
  i.d(e, "a", function() {
    return r
  }), i.d(e, "b", function() {
    return l
  }), i.d(e, "c", function() {
    return c
  }), i.d(e, "d", function() {
    return d
  })
  var o, r = {
    soundboard: {
      display: !1,
      audioContext: null,
      returnNode: null,
      currentSound: 0,
      initialized: !1,
      isRecording: !1,
      isPlaying: !1,
      isSaving: !1,
      soundscape: null,
      sounds: null,
      effects: { delay: !1, reverb: !1, fuzz: !1 },
      env: { supported: !0, ready: !1, effects: !0 },
      contextScreens: { options: ["fullscreen-cta", "instructions", "share-intro"], current: 0 }
    }
  }, l = {
    soundboardEnvReady: function(t) {
      var e = t.soundboard, i = e.env
      return i.supported && i.ready
    }, currentSoundscapeId: function(t) {
      var e = t.soundboard
      return e.soundscape ? e.soundscape.id : null
    }, soundboardContextScreen: function(t) {
      var e = t.soundboard, i = e.contextScreens
      return i.current > 0 ? i.options[i.current] : -1
    }
  }, c = (o = {}, s(o, a.a, function(t, e) {
    t.soundboard.sounds = e
  }), s(o, a.b, function(t) {
    t.soundboard.display = !0
  }), s(o, a.c, function(t) {
    t.soundboard.display = !1
  }), s(o, a.d, function(t, e) {
    t.soundboard.contextScreens.current = e
  }), s(o, a.e, function(t) {
    var e = t.soundboard, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
    e.env.supported = i
  }), s(o, a.f, function(t, e) {
    var i = t.soundboard, s = e.audioContext, n = e.returnNode
    Object.assign(i, { audioContext: s, returnNode: n })
  }), s(o, a.g, function(t) {
    t.soundboard.env.ready = !0
  }), s(o, a.h, function(t) {
    var e = t.soundboard
    e.audioContext = null, e.returnNode = null, e.env.initialized = !1, e.env.ready = !1
  }), s(o, a.i, function(t) {
    t.soundboard.initialized = !0
  }), s(o, a.j, function(t, e) {
    t.soundboard.currentSound = e
  }), s(o, a.k, function(t, e) {
    t.soundboard.isRecording = e
  }), s(o, a.l, function(t) {
    t.soundboard.isSaving = !0
  }), s(o, a.m, function(t) {
    t.soundboard.isSaving = !1
  }), s(o, a.n, function(t, e) {
    var i = t.soundboard
    i.effects[e] = !i.effects[e]
  }), s(o, a.o, function(t, e) {
    t.soundboard.effects = e
  }), s(o, a.p, function(t, e) {
    t.soundboard.soundscape = e
  }), s(o, a.q, function(t) {
    t.soundboard.soundscape = null
  }), s(o, a.r, function(t) {
    t.soundboard.isPlaying = !0
  }), s(o, a.s, function(t) {
    t.soundboard.isFetching = !0
  }), s(o, a.t, function(t) {
    t.soundboard.isFetching = !1
  }), o), d = {
    setupAudioEnvironment: function(t) {
      var e = t.commit
      return new Promise(function(t, s) {
        if (i.i(n.h)()) {
          var o = new (window.AudioContext || window.webkitAudioContext), r = o.createChannelMerger(1)
          r.connect(o.destination), e(a.f, { audioContext: o, returnNode: r }), e(a.g), t(o)
        } else e(a.e, !1), s(new Error("web audio not supported"))
      })
    }, teardownAudioEnvironment: function(t) {
      var e = t.commit
      t.state.soundboard.audioContext.close().then(function() {
        e(a.h)
      }).catch(function(t) {
        console.error(t), e(a.h)
      })
    }, setBufferSources: function(t, e) {
      (0, t.commit)(a.a, e)
    }, showSoundboard: function(t) {
      (0, t.commit)(a.b)
    }, hideSoundboard: function(t) {
      (0, t.commit)(a.c)
    }, updateSoundboardContext: function(t) {
      var e = t.commit, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
      e(a.d, i)
    }, soundboardInitialized: function(t) {
      (0, t.commit)(a.i)
    }, updateCurrentSound: function(t, e) {
      (0, t.commit)(a.j, e)
    }, setRecordingState: function(t, e) {
      (0, t.commit)(a.k, e)
    }, saveRecording: function(t, e) {
      var s = t.commit
      return new Promise(function(t, o) {
        s(a.l), i.i(n.i)({ path: "/soundscapes", method: "post", payload: e }).then(function(t) {
          s(a.m), s(a.p, t)
        }).catch(function(t) {
          return o(new Error(t))
        })
      })
    }, toggleEffect: function(t, e) {
      (0, t.commit)(a.n, e)
    }, setEffects: function(t) {
      var e = t.commit,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { delay: !1, reverb: !1, fuzz: !1 }
      e(a.o, i)
    }, clearSoundscape: function(t) {
      (0, t.commit)(a.q)
    }, playSoundscape: function(t) {
      (0, t.commit)(a.r)
    }, fetchSoundscape: function(t, e) {
      var s = t.commit
      return new Promise(function(t, o) {
        s(a.s), i.i(n.i)({ path: "/soundscapes/" + e }).then(function(e) {
          s(a.t), t(e)
        }).catch(function(t) {
          return o(new Error(t))
        })
      })
    }, loadSoundscape: function(t, e) {
      var i = t.dispatch, s = t.commit
      t.state
      return i("fetchSoundscape", e).then(function(t) {
        return s(a.p, t)
      }).catch(function(t) {
        throw new Error(t)
      })
    }
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  var n = i(167), a = i(124)
  i.n(a)
  i.d(e, "a", function() {
    return d
  }), i.d(e, "b", function() {
    return l
  })
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }, r = function() {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i]
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
      }
    }

    return function(e, i, s) {
      return i && t(e.prototype, i), s && t(e, s), e
    }
  }(), l = { offset: { top: 0, right: 0, bottom: 0, left: 0 }, threshold: 0, test: n.a }, c = function() {
    function t(e, i, n) {
      s(this, t), this.options = this.validate(i), this.elements = e, this.selector = n, this.current = [], this.handlers = {
        enter: [],
        exit: []
      }, this.singles = { enter: [], exit: [] }
    }

    return r(t, [{
      key: "check", value: function() {
        var t = this
        return this.elements.forEach(function(e) {
          var i = t.options.test(e, t.options), s = t.current.indexOf(e), n = s > -1, a = i && !n, o = !i && n
          a && (t.current.push(e), t.emit("enter", e)), o && (t.current.splice(s, 1), t.emit("exit", e))
        }), this
      }
    }, {
      key: "on", value: function(t, e) {
        return this.handlers[t].push(e), this
      }
    }, {
      key: "off", value: function(t) {
        return this.handlers[t] = [], this.singles[t] = [], this
      }
    }, {
      key: "once", value: function(t, e) {
        return this.singles[t].unshift(e), this
      }
    }, {
      key: "emit", value: function(t, e) {
        for (; this.singles[t].length;) this.singles[t].pop()(e, this.selector)
        for (var i = this.handlers[t].length; --i > -1;) this.handlers[t][i](e, this.selector)
        return this
      }
    }, {
      key: "validate", value: function(t) {
        var e = this, s = i.i(a.merge)({}, l)
        return "object" !== (void 0 === t ? "undefined" : o(t)) ? s : (Object.keys(s).forEach(function(i) {
          t.hasOwnProperty(i) && (s[i] = e[i].bind({ options: s })(t[i]))
        }), s)
      }
    }, {
      key: "offset", value: function(t) {
        var e = this.options.offset
        if (void 0 === t) return e
        var i = function(t) {
          return "number" == typeof t
        }
        return ["top", "right", "bottom", "left"].forEach(i(t) ? function(i) {
          return e[i] = t
        } : function(s) {
          return i(t[s]) ? e[s] = t[s] : null
        }), e
      }
    }, {
      key: "threshold", value: function(t) {
        var e = this.options.threshold
        return "number" == typeof t && t >= 0 && t <= 1 && (e = t), e
      }
    }, {
      key: "test", value: function(t) {
        var e = this.options.test
        return "function" == typeof t && (e = t), e
      }
    }]), t
  }(), d = function(t, e, i) {
    return new c(t, e, i)
  }
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    var i = t.getBoundingClientRect(), s = i.top, n = i.right, a = i.bottom, o = i.left, r = i.width, l = i.height,
      c = { t: a, r: window.innerWidth - o, b: window.innerHeight - s, l: n },
      d = { x: e.threshold * r, y: e.threshold * l }
    return c.t > e.offset.top + d.y && c.r > e.offset.right + d.x && c.b > e.offset.bottom + d.y && c.l > e.offset.left + d.x
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e, i, s) {
    "insertRule" in t ? t.insertRule(e + "{" + i + "}", s) : t.addRule(e, i, s)
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    i.i(n.a)(t, e) || (t.className += " " + e)
  }

  var n = i(53)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    for (var i in e) {
      var s = ("touchstart" === i || "touchmove" === i) && n.a
      t.addEventListener(i, e[i], s)
    }
  }

  var n = i(119)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s() {
    var t = document, e = i.i(a.a)(), s = i.i(o.a)(e), n = t.createElement("div"), l = !1
    e.appendChild(n)
    try {
      for (var c, d = ["calc(10px)", "-moz-calc(10px)", "-webkit-calc(10px)"], h = 0; h < 3; h++) if (c = d[h], n.style.width = c, 10 === n.offsetWidth) {
        l = c.replace("(10px)", "")
        break
      }
    } catch (t) {
    }
    return e.fake ? i.i(r.a)(e, s) : n.remove(), l
  }

  var n = i(19), a = (i.n(n), i(51)), o = i(55), r = i(54)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    var e = document.createElement("style")
    return t && e.setAttribute("media", t), document.querySelector("head").appendChild(e), e.sheet ? e.sheet : e.styleSheet
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s() {
    return {
      topics: {}, on: function(t, e) {
        this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
      }, off: function(t, e) {
        if (this.topics[t]) for (var i = 0; i < this.topics[t].length; i++) if (this.topics[t][i] === e) {
          this.topics[t].splice(i, 1)
          break
        }
      }, emit: function(t, e) {
        this.topics[t] && this.topics[t].forEach(function(t) {
          t(e)
        })
      }
    }
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s() {
    for (var t, e, i, s = arguments[0] || {}, n = 1, a = arguments.length; n < a; n++) if (null !== (t = arguments[n])) for (e in t) i = t[e], s !== i && void 0 !== i && (s[e] = i)
    return s
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    return t.getAttribute(e)
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    var i = !1
    return /^Webkit/.test(t) ? i = "webkit" + e + "End" : /^O/.test(t) ? i = "o" + e + "End" : t && (i = e.toLowerCase() + "end"), i
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s() {
    var t = window.tnsId
    return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    var i = !1, s = Math.abs(90 - Math.abs(t))
    return s >= 90 - e ? i = "horizontal" : s <= e && (i = "vertical"), i
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    i.i(n.a)(t, "hidden") || i.i(a.a)(t, { hidden: "" })
  }

  var n = i(52), a = i(121)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    return "boolean" == typeof t.complete ? t.complete : "number" == typeof t.naturalWidth ? 0 !== t.naturalWidth : void 0
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e, i, s, n, a, o) {
    function r() {
      a -= l, d += h, t.style[e] = i + d + c + s, a > 0 ? setTimeout(r, l) : o()
    }

    var l = Math.min(a, 10), c = n.indexOf("%") >= 0 ? "%" : "px", n = n.replace(c, ""),
      d = Number(t.style[e].replace(i, "").replace(s, "").replace(c, "")), h = (n - d) / a * l
    setTimeout(r, l)
  }

  e.a = s
}, function(t, e) {
  Object.keys || (Object.keys = function(t) {
    var e = []
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i)
    return e
  })
}, function(t, e, i) {
  "use strict"

  function s() {
    var t, e = document, s = i.i(a.a)(), n = i.i(o.a)(s), l = e.createElement("div"), c = e.createElement("style"),
      d = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"
    return c.type = "text/css", l.className = "tns-mq-test", s.appendChild(c), s.appendChild(l), c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(e.createTextNode(d)), t = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, s.fake ? i.i(r.a)(s, n) : l.remove(), "absolute" === t
  }

  var n = i(19), a = (i.n(n), i(51)), o = i(55), r = i(54)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    i.i(n.a)(t, e) && (t.className = t.className.replace(e, ""))
  }

  var n = i(53)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    for (var i in e) {
      var s = ["touchstart", "touchmove"].indexOf(i) >= 0 && n.a
      t.removeEventListener(i, e[i], s)
    }
  }

  var n = i(119)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e, i) {
    return i && localStorage.setItem(t, e), e
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    i.i(n.a)(t, "hidden") && i.i(a.a)(t, "hidden")
  }

  var n = i(52), a = i(120)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s() {
    var t, e, s = document, n = i.i(a.a)(), l = i.i(o.a)(n), c = s.createElement("div"), d = s.createElement("div")
    return c.style.cssText = "width: 10px", d.style.cssText = "float: left; width: 5.5px; height: 10px;", t = d.cloneNode(!0), c.appendChild(d), c.appendChild(t), n.appendChild(c), e = d.offsetTop !== t.offsetTop, n.fake ? i.i(r.a)(n, l) : c.remove(), e
  }

  var n = i(19), a = (i.n(n), i(51)), o = i(55), r = i(54)
  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t, e) {
    return Math.atan2(t, e) * (180 / Math.PI)
  }

  e.a = s
}, function(t, e, i) {
  "use strict"

  function s(t) {
    for (var e = document.createElement("fakeelement"), i = (t.length, 0); i < t.length; i++) {
      var s = t[i]
      if (void 0 !== e.style[s]) return s
    }
    return !1
  }

  e.a = s
}, function(t, e, i) {
  "use strict"
  var s = i(184), n = (i.n(s), i(19)), a = (i.n(n), i(175)), o = i(172), r = i(188), l = i(179), c = i(171), d = i(190),
    h = i(185), u = i(173), p = i(168), v = i(177), f = i(191), m = i(180), _ = i(53), g = i(169), y = i(186),
    w = i(52), C = i(176), b = i(121), x = i(120), S = i(181), T = i(189), M = i(182), k = i(192), z = i(178),
    L = i(170), P = i(187), I = i(174), A = i(183)
  i.d(e, "a", function() {
    return J
  })
  var E = navigator.userAgent, O = !0, D = localStorage
  try {
    D.tnsApp ? D.tnsApp !== E && (D.tnsApp = E, ["tC", "tSP", "tMQ", "tTf", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
      D.removeItem(t)
    })) : D.tnsApp = E
  } catch (t) {
    O = !1
  }
  var R = document, B = window,
    N = { ENTER: 13, SPACE: 32, PAGEUP: 33, PAGEDOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
    j = i.i(o.a)(D.tC) || i.i(r.a)("tC", i.i(c.a)(), O), G = i.i(o.a)(D.tSP) || i.i(r.a)("tSP", i.i(d.a)(), O),
    F = i.i(o.a)(D.tMQ) || i.i(r.a)("tMQ", i.i(h.a)(), O),
    $ = i.i(o.a)(D.tTf) || i.i(r.a)("tTf", i.i(k.a)(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"]), O),
    V = i.i(o.a)(D.tTDu) || i.i(r.a)("tTDu", i.i(k.a)(["transitionDuration", "WebkitTransitionDuration", "MozTransitionDuration", "OTransitionDuration"]), O),
    q = i.i(o.a)(D.tTDe) || i.i(r.a)("tTDe", i.i(k.a)(["transitionDelay", "WebkitTransitionDelay", "MozTransitionDelay", "OTransitionDelay"]), O),
    W = i.i(o.a)(D.tADu) || i.i(r.a)("tADu", i.i(k.a)(["animationDuration", "WebkitAnimationDuration", "MozAnimationDuration", "OAnimationDuration"]), O),
    H = i.i(o.a)(D.tADe) || i.i(r.a)("tADe", i.i(k.a)(["animationDelay", "WebkitAnimationDelay", "MozAnimationDelay", "OAnimationDelay"]), O),
    U = i.i(o.a)(D.tTE) || i.i(r.a)("tTE", i.i(z.a)(V, "Transition"), O),
    Y = i.i(o.a)(D.tAE) || i.i(r.a)("tAE", i.i(z.a)(W, "Animation"), O)
  F || (G = !1)
  var J = function(t) {
    function e() {
      return B.innerWidth || R.documentElement.clientWidth || R.body.clientWidth
    }

    function s(e) {
      var i = t[e]
      return !i && ce && le.indexOf(e) >= 0 && ce.forEach(function(t) {
        re[t][e] && (i = !0)
      }), i
    }

    function n(e, i) {
      i = i || he
      var s, a = { slideBy: "page", edgePadding: !1, autoHeight: !0 }
      if (!Ut && e in a) s = a[e] else if ("items" === e && n("fixedWidth")) s = Math.floor(oe / (n("fixedWidth") + n("gutter"))) else if ("autoHeight" === e && "outer" === ge) s = !0 else if (s = t[e], ce && le.indexOf(e) >= 0) for (var o = 0, r = ce.length; o < r; o++) {
        var l = ce[o]
        if (!(i >= l)) break
        e in re[l] && (s = re[l][e])
      }
      return "slideBy" === e && "page" === s && (s = n("items")), s
    }

    function o(t) {
      return j ? j + "(" + 100 * t + "% / " + Ie + ")" : 100 * t / Ie + "%"
    }

    function r(t, e, i) {
      var s = ""
      if (t) {
        var n = t
        e && (n += e), s = i ? "margin: 0px " + (oe % (i + e) + e) / 2 + "px" : Zt ? "margin: 0 " + t + "px 0 " + n + "px;" : "padding: " + n + "px 0 " + t + "px 0;"
      } else if (e && !i) {
        var a = Zt ? "right" : "bottom"
        s = "margin-" + a + ": -" + e + "px;"
      }
      return s
    }

    function c(t, e, i) {
      return t ? (t + e) * Ie + "px" : j ? j + "(" + 100 * Ie + "% / " + i + ")" : 100 * Ie / i + "%"
    }

    function d(t, e, i) {
      var s = ""
      if (Zt) {
        if (s = "width:", t) s += t + e + "px" else {
          var n = Ut ? Ie : i
          s += j ? j + "(100% / " + n + ")" : 100 / n + "%"
        }
        s += Xe + ";"
      }
      return s
    }

    function h(t) {
      var e = ""
      if (!1 !== t) {
        e = (Zt ? "padding-" : "margin-") + (Zt ? "right" : "bottom") + ": " + t + "px;"
      }
      return e
    }

    function k(t) {
      t = t || B.event, clearTimeout(ve), ve = setTimeout(function() {
        var i = e()
        he !== i && (he = i, z(), "outer" === ge && qe.emit("outerResized", $t(t)))
      }, 100)
    }

    function z() {
      var t = de, e = Be, s = me, a = Ke
      if (oe = te.clientWidth, Qt = ee.clientWidth, ce && E(), t !== de || Ce) {
        var o = be, l = Me, u = Ce, f = we, m = ye, _ = Ye
        if (me = n("items"), _e = n("slideBy"), Ye = n("disable"), Ke = !!Ye || !!Je && ae <= me, me !== s && (Fe = Ie - me - je, Yi()), Ye !== _ && D(Ye), Ke !== a && (Ke && (Be = Ut ? Pe : 0), O()), t !== de && (xe = n("speed"), we = n("edgePadding"), ye = n("gutter"), Ce = n("fixedWidth"), Ye || Ce === u || ut(), (Me = n("autoHeight")) !== l && (Me || (ee.style.height = ""))), be = !Ke && n("arrowKeys"), be !== o && (be ? i.i(L.a)(R, ii) : i.i(P.a)(R, ii)), ai) {
          var g = fi, y = mi
          fi = !Ke && n("controls"), mi = n("controlsText"), fi !== g && (fi ? i.i(T.a)(_i) : i.i(S.a)(_i)), mi !== y && (hi.innerHTML = mi[0], ui.innerHTML = mi[1])
        }
        if (oi) {
          var w = yi
          yi = !Ke && n("nav"), yi !== w && (yi ? (i.i(T.a)(wi), Ft()) : i.i(S.a)(wi))
        }
        if (li) {
          var C = $i
          $i = !Ke && n("touch"), $i !== C && Ut && ($i ? i.i(L.a)(ie, si) : i.i(P.a)(ie, si))
        }
        if (ci) {
          var b = Hi
          Hi = !Ke && n("mouseDrag"), Hi !== b && Ut && (Hi ? i.i(L.a)(ie, ni) : i.i(P.a)(ie, ni))
        }
        if (ri) {
          var x = zi, M = Ai, k = Bi, z = Ii
          if (Ke ? zi = Ai = Bi = !1 : (zi = n("autoplay"), zi ? (Ai = n("autoplayHoverPause"), Bi = n("autoplayResetOnVisibility")) : Ai = Bi = !1), Ii = n("autoplayText"), Li = n("autoplayTimeout"), zi !== x && (zi ? (Ei && i.i(T.a)(Ei), Oi || bt()) : (Ei && i.i(S.a)(Ei), Oi && xt())), Ai !== M && (Ai ? i.i(L.a)(ie, ti) : i.i(P.a)(ie, ti)), Bi !== k && (Bi ? i.i(L.a)(R, ei) : i.i(P.a)(R, ei)), Ei && Ii !== z) {
            var I = zi ? 1 : 0, A = Ei.innerHTML, B = A.length - z[I].length
            A.substring(B) === z[I] && (Ei.innerHTML = A.substring(0, B) + Ii[I])
          }
        }
        if (!F) {
          Ke || we === f && ye === m || (ee.style.cssText = r(we, ye, Ce)), Ut && Zt && (Ce !== u || ye !== m || me !== s) && (ie.style.width = c(Ce, ye, me))
          var N = d(Ce, ye, me)
          ye !== m && (N += h(ye)), N.length > 0 && (ke.removeRule(i.i(v.a)(ke) - 1), i.i(p.a)(ke, "#" + Ue + " > .tns-item", N, i.i(v.a)(ke))), Ce || Be !== e || vt(0)
        }
        Be !== e && (qe.emit("indexChanged", $t()), vt(0), Ne = Be), me !== s && (tt(), Q(), navigator.msMaxTouchPoints && st())
      }
      Zt || Ye || (it(), jt(), ut()), Ce && we && (Ke || oe <= Ce + ye ? "0px" !== ee.style.margin && (ee.style.margin = "0px") : ee.style.cssText = r(we, ye, Ce)), Q()
    }

    function E() {
      de = 0, ce.forEach(function(t, e) {
        he >= t && (de = e + 1)
      })
    }

    function O() {
      if (Pe) {
        var t = "tns-transparent"
        if (Ke) {
          if (!i.i(_.a)(ne[0], t)) {
            we && (ee.style.margin = "0px")
            for (var e = Pe; e--;) i.i(g.a)(ne[e], t), i.i(g.a)(ne[Ie - e - 1], t)
          }
        } else if (we && !Ce && F && ee.style.margin && (ee.style.margin = ""), i.i(_.a)(ne[0], t)) for (var e = Pe; e--;) i.i(y.a)(ne[e], t), i.i(y.a)(ne[Ie - e - 1], t)
      }
    }

    function D(t) {
      var e = ne.length
      if (t) {
        if (ke.disabled = !0, ie.className = ie.className.replace(He.substring(1), ""), ie.setAttribute("style", ""), Te) for (var s = Pe; s--;) Ut && i.i(S.a)(ne[s]), i.i(S.a)(ne[e - s - 1])
        if (Zt && Ut || (ee.style = ""), !Ut) for (var n = Be; n < Be + ae; n++) {
          var a = ne[n]
          a.style = "", i.i(y.a)(a, Yt), i.i(y.a)(a, Xt)
        }
      } else {
        if (ke.disabled = !1, ie.className += He, Zt || it(), ut(), Te) for (var s = Pe; s--;) Ut && i.i(T.a)(ne[s]), i.i(T.a)(ne[e - s - 1])
        if (!Ut) for (var n = Be; n < Be + ae; n++) {
          var a = ne[n], o = n < Be + me ? Yt : Xt
          a.style.left = 100 * (n - Be) / me + "%", i.i(g.a)(a, o)
        }
      }
    }

    function J() {
      Oi && (xt(), Di = !0)
    }

    function K() {
      !Oi && Di && (bt(), Di = !1)
    }

    function X() {
      if (ze && !Ye) {
        var t = Be, e = Be + me
        for (we && (t -= 1, e += 1); t < e; t++) [].forEach.call(ne[t].querySelectorAll(".tns-lazy-img"), function(t) {
          var e = {}
          e[U] = function(t) {
            t.stopPropagation()
          }, i.i(L.a)(t, e), i.i(_.a)(t, "loaded") || (t.src = i.i(C.a)(t, "data-src"), i.i(g.a)(t, "loaded"))
        })
      }
    }

    function Q() {
      if (Me && !Ye) {
        for (var t = [], e = Be; e < Be + me; e++) [].forEach.call(ne[e].querySelectorAll("img"), function(e) {
          t.push(e)
        })
        0 === t.length ? et() : Z(t)
      }
    }

    function Z(t) {
      t.forEach(function(e, s) {
        i.i(M.a)(e) && t.splice(s, 1)
      }), 0 === t.length ? et() : setTimeout(function() {
        Z(t)
      }, 16)
    }

    function tt() {
      X(), nt(), ct(), Ft(), at()
    }

    function et() {
      for (var t, e = [], i = Be; i < Be + me; i++) e.push(ne[i].offsetHeight)
      t = Math.max.apply(null, e), ee.style.height !== t && (V && dt(xe), ee.style.height = t + "px")
    }

    function it() {
      pe = [0]
      for (var t, e = ne[0].getBoundingClientRect().top, i = 1; i < Ie; i++) t = ne[i].getBoundingClientRect().top, pe.push(t - e)
    }

    function st() {
      te.style.msScrollSnapPointsX = "snapInterval(0%, " + 100 / me + "%)"
    }

    function nt() {
      for (var t = Ie; t--;) {
        var e = ne[t]
        t >= Be && t < Be + me ? i.i(w.a)(e, "tabindex") && (i.i(b.a)(e, { "aria-hidden": "false" }), i.i(x.a)(e, ["tabindex"]), i.i(g.a)(e, di)) : (i.i(w.a)(e, "tabindex") || i.i(b.a)(e, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), i.i(_.a)(e, di) && i.i(y.a)(e, di))
      }
    }

    function at() {
      if (yi && (Si = -1 !== xi ? xi : (Be - je) % ae, xi = -1, Si !== Ti)) {
        var t = gi[Ti], e = gi[Si]
        i.i(b.a)(t, { tabindex: "-1", "aria-selected": "false" }), i.i(b.a)(e, {
          tabindex: "0",
          "aria-selected": "true"
        }), i.i(y.a)(t, Mi), i.i(g.a)(e, Mi)
      }
    }

    function ot(t) {
      return "button" === t.nodeName.toLowerCase()
    }

    function rt(t) {
      return "true" === t.getAttribute("aria-disabled")
    }

    function lt(t, e, i) {
      t ? e.disabled = i : e.setAttribute("aria-disabled", i.toString())
    }

    function ct() {
      if (fi && !Te) {
        var t = pi ? hi.disabled : rt(hi), e = vi ? ui.disabled : rt(ui), i = Be === Ge, s = !Se && Be === Fe
        i && !t && lt(pi, hi, !0), !i && t && lt(pi, hi, !1), s && !e && lt(vi, ui, !0), !s && e && lt(vi, ui, !1)
      }
    }

    function dt(t, e) {
      t = t ? t / 1e3 + "s" : "", e = e || ie, e.style[V] = t, Ut || (e.style[W] = t), Zt || (ee.style[V] = t)
    }

    function ht() {
      var t
      if (Zt) if (Ce) t = -(Ce + ye) * Be + "px" else {
        var e = $ ? Ie : me
        t = 100 * -Be / e + "%"
      } else t = -pe[Be] + "px"
      return t
    }

    function ut(t) {
      t || (t = ht()), ie.style[Oe] = De + t + Re
    }

    function pt(t, e, s, n) {
      for (var a = t, o = t + me; a < o; a++) {
        var r = ne[a]
        n || (r.style.left = 100 * (a - Be) / me + "%"), V && dt(xe, r), Kt && q && (r.style[q] = r.style[H] = Kt * (a - t) / 1e3 + "s"), i.i(y.a)(r, e), i.i(g.a)(r, s), n && Le.push(r)
      }
    }

    function vt(t, e) {
      void 0 === t && (t = xe), V && dt(t), Ji(t, e)
    }

    function ft(t) {
      Ee && Yi(), (Be !== Ne || t) && (qe.emit("indexChanged", $t()), qe.emit("transitionStart", $t()), $e = !0, vt())
    }

    function mt(t) {
      return t.toLowerCase().replace(/-/g, "")
    }

    function _t(t) {
      if (Ut || $e) {
        if (qe.emit("transitionEnd", $t(t)), !Ut && Le.length > 0) for (var e = 0; e < me; e++) {
          var s = Le[e]
          s.style.left = "", V && dt(0, s), Kt && q && (s.style[q] = s.style[H] = ""), i.i(y.a)(s, Jt), i.i(g.a)(s, Xt)
        }
        if (!t || !Ut && t.target.parentNode === ie || t.target === ie && mt(t.propertyName) === mt(Oe)) {
          if (!Ee) {
            var n = Be
            Yi(), Be !== n && (qe.emit("indexChanged", $t()), V && dt(0), ut())
          }
          Q(), "inner" === ge && qe.emit("innerLoaded", $t()), $e = !1, Ti = Si, Ne = Be
        }
      }
    }

    function gt(t) {
      if (!Ke) if ("prev" === t) yt(null, -1) else if ("next" === t) yt(null, 1) else if (!$e) {
        var e = Be % ae, i = 0
        if (!Te && s("edgePadding") && e--, e < 0 && (e += ae), "first" === t) i = -e else if ("last" === t) i = ae - me - e else if ("number" != typeof t && (t = parseInt(t)), !isNaN(t)) {
          var n = t % ae
          n < 0 && (n += ae), !Te && we && (n += 1), i = n - e
        }
        Be += i, Be % ae != Ne % ae && ft()
      }
    }

    function yt(t, e) {
      if (!$e) {
        if (!e) {
          t = t || B.event
          for (var i = t.target || t.srcElement; i !== _i && [hi, ui].indexOf(i) < 0;) i = i.parentNode
          i === hi ? e = -1 : i === ui && (e = 1)
        }
        -1 === e ? Be -= _e : 1 === e && (Se && Be === Fe ? gt(0) : Be += _e), ft()
      }
    }

    function wt(t) {
      if (!$e) {
        t = t || B.event
        for (var e, s = t.target || t.srcElement; s !== wi && !i.i(w.a)(s, "data-nav");) s = s.parentNode
        i.i(w.a)(s, "data-nav") && (e = xi = [].indexOf.call(gi, s), gt(e))
      }
    }

    function Ct(t, e) {
      i.i(b.a)(Ei, { "data-action": t }), Ei.innerHTML = Ri[0] + t + Ri[1] + e
    }

    function bt() {
      Tt(), Ei && Ct("stop", Ii[1]), Oi = !0
    }

    function xt() {
      St(), Ei && Ct("start", Ii[0]), Oi = !1
    }

    function St() {
      Oi = "paused", clearInterval(ki)
    }

    function Tt() {
      !0 !== Oi && (clearInterval(ki), ki = setInterval(function() {
        yt(null, Pi)
      }, Li))
    }

    function Mt() {
      Oi ? xt() : bt()
    }

    function kt() {
      Ni != R.hidden && !1 !== Oi && (R.hidden ? St() : Tt()), Ni = R.hidden
    }

    function zt(t) {
      switch (t = t || B.event, t.keyCode) {
        case N.LEFT:
          yt(null, -1)
          break
        case N.RIGHT:
          yt(null, 1)
      }
    }

    function Lt(t) {
      switch (t = t || B.event, t.keyCode) {
        case N.LEFT:
        case N.UP:
        case N.PAGEUP:
          hi.disabled || yt(null, -1)
          break
        case N.RIGHT:
        case N.DOWN:
        case N.PAGEDOWN:
          ui.disabled || yt(null, 1)
          break
        case N.HOME:
          gt(0)
          break
        case N.END:
          gt(ae - 1)
      }
    }

    function Pt(t) {
      t.focus()
    }

    function It(e) {
      function s(e) {
        return t.navContainer ? e : Ci[e]
      }

      var n = R.activeElement
      if (i.i(w.a)(n, "data-nav")) {
        e = e || B.event
        var a = e.keyCode, o = [].indexOf.call(gi, n), r = Ci.length, l = Ci.indexOf(o)
        switch (t.navContainer && (r = ae, l = o), a) {
          case N.LEFT:
          case N.PAGEUP:
            l > 0 && Pt(gi[s(l - 1)])
            break
          case N.UP:
          case N.HOME:
            l > 0 && Pt(gi[s(0)])
            break
          case N.RIGHT:
          case N.PAGEDOWN:
            l < r - 1 && Pt(gi[s(l + 1)])
            break
          case N.DOWN:
          case N.END:
            l < r - 1 && Pt(gi[s(r - 1)])
            break
          case N.ENTER:
          case N.SPACE:
            xi = o, gt(o)
        }
      }
    }

    function At() {
      vt(0, ie.scrollLeft()), Ne = Be
    }

    function Et(t) {
      return t.target || t.srcElement
    }

    function Ot(t) {
      return t.type.indexOf("touch") >= 0
    }

    function Dt(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function Rt(t) {
      if (Wi = 0, fe = !1, Vi = qi = null, !$e) {
        t = t || B.event
        var e
        Ot(t) ? (e = t.changedTouches[0], qe.emit("touchStart", $t(t))) : (e = t, Dt(t), qe.emit("dragStart", $t(t))), Vi = parseInt(e.clientX), qi = parseInt(e.clientY), ji = parseFloat(ie.style[Oe].replace(De, "").replace(Re, ""))
      }
    }

    function Bt(e) {
      if (!$e && null !== Vi) {
        e = e || B.event
        var s
        if (Ot(e) ? s = e.changedTouches[0] : (s = e, Dt(e)), Gi = parseInt(s.clientX) - Vi, Fi = parseInt(s.clientY) - qi, 0 === Wi && (Wi = i.i(m.a)(i.i(f.a)(Fi, Gi), 15) === t.axis), Wi) {
          Ot(e) ? qe.emit("touchMove", $t(e)) : (Ui || (Ui = !0), qe.emit("dragMove", $t(e))), fe || (fe = !0)
          var n = ji
          if (Zt) if (Ce) n += Gi, n += "px" else {
            var a = $ ? Gi * me * 100 / (Qt * Ie) : 100 * Gi / Qt
            n += a, n += "%"
          } else n += Fi, n += "px"
          $ && dt(0), ie.style[Oe] = De + n + Re
        }
      }
    }

    function Nt(t) {
      if (!$e && fe) {
        t = t || B.event
        var e
        Ot(t) ? (e = t.changedTouches[0], qe.emit("touchEnd", $t(t))) : (e = t, qe.emit("dragEnd", $t(t))), Gi = parseInt(e.clientX) - Vi, Fi = parseInt(e.clientY) - qi
        var s = Boolean(Zt ? Gi : Fi)
        if (Wi = 0, fe = !1, Vi = qi = null, Zt) {
          var n = -Gi * me / Qt
          n = Gi > 0 ? Math.floor(n) : Math.ceil(n), Be += n
        } else {
          var a = -(ji + Fi)
          if (a <= 0) Be = Ge else if (a >= pe[pe.length - 1]) Be = Fe else {
            var o = 0
            do {
              o++, Be = Fi < 0 ? o + 1 : o
            } while (o < Ie && a >= pe[o + 1])
          }
        }
        if (ft(s), Ui) {
          Ui = !1
          var r = Et(t)
          i.i(L.a)(r, {
            click: function t(e) {
              Dt(e), i.i(P.a)(r, { click: t })
            }
          })
        }
      }
    }

    function jt() {
      ee.style.height = pe[Be + me] - pe[Be] + "px"
    }

    function Gt() {
      Ci = []
      for (var t = !Te && we ? Be - 1 : Be, e = t % ae % me; e < ae;) !Te && e + me > ae && (e = ae - me), Ci.push(e), e += me;
      (Te && Ci.length * me < ae || !Te && Ci[0] > 0) && Ci.unshift(0)
    }

    function Ft() {
      yi && !t.navContainer && Ci.indexOf(Be % ae) < 0 && (Gt(), Ci !== bi && (bi.length > 0 && bi.forEach(function(t) {
        i.i(S.a)(gi[t])
      }), Ci.length > 0 && Ci.forEach(function(t) {
        i.i(T.a)(gi[t])
      }), bi = Ci))
    }

    function $t(t) {
      return {
        container: ie,
        slideItems: ne,
        navContainer: wi,
        navItems: gi,
        controlsContainer: _i,
        hasControls: ai,
        prevButton: hi,
        nextButton: ui,
        items: me,
        slideBy: _e,
        cloneCount: Pe,
        slideCount: ae,
        slideCountNew: Ie,
        index: Be,
        indexCached: Ne,
        navCurrentIndex: Si,
        navCurrentIndexCached: Ti,
        visibleNavIndexes: Ci,
        visibleNavIndexesCached: bi,
        event: t || {}
      }
    }

    if (t = i.i(a.a)({
      container: R.querySelector(".slider"),
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      slideBy: 1,
      controls: !0,
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      nav: !0,
      navContainer: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      touch: !0,
      mouseDrag: !1,
      nested: !1,
      freezable: !0,
      onInit: !1
    }, t || {}), ["container", "controlsContainer", "navContainer", "autoplayButton"].forEach(function(e) {
      "string" == typeof t[e] && (t[e] = R.querySelector(t[e]))
    }), t.container && t.container.nodeName && !(t.container.children.length < 2)) {
      if (t.responsive) {
        var Vt = {}, qt = t.responsive
        for (var Wt in qt) {
          var Ht = qt[Wt]
          Vt[Wt] = "number" == typeof Ht ? { items: Ht } : Ht
        }
        t.responsive = Vt, Vt = null, 0 in t.responsive && (t = i.i(a.a)(t, t.responsive[0]), delete t.responsive[0])
      }
      var Ut = "carousel" === t.mode
      if (!Ut) {
        t.axis = "horizontal", t.rewind = !1, t.loop = !0, t.edgePadding = !1
        var Yt = "tns-fadeIn", Jt = "tns-fadeOut", Kt = !1, Xt = t.animateNormal || "tns-normal"
        U && Y && (Yt = t.animateIn || Yt, Jt = t.animateOut || Jt, Kt = t.animateDelay || Kt)
      }
      var Qt, Zt = "horizontal" === t.axis, te = R.createElement("div"), ee = R.createElement("div"), ie = t.container,
        se = ie.parentNode, ne = ie.children, ae = ne.length, oe = se.clientWidth, re = t.responsive, le = [], ce = !1,
        de = 0, he = e()
      if (re) {
        ce = Object.keys(re).map(function(t) {
          return parseInt(t)
        }).sort(function(t, e) {
          return t - e
        }), ce.forEach(function(t) {
          le = le.concat(Object.keys(re[t]))
        })
        var ue = []
        le.forEach(function(t) {
          ue.indexOf(t) < 0 && ue.push(t)
        }), le = ue, E()
      }
      var pe, ve, fe, me = n("items"), _e = "page" === n("slideBy") ? me : n("slideBy"), ge = t.nested,
        ye = n("gutter"), we = n("edgePadding"), Ce = n("fixedWidth"), be = n("arrowKeys"), xe = n("speed"),
        Se = t.rewind, Te = !Se && t.loop, Me = n("autoHeight"), ke = i.i(u.a)(), ze = t.lazyload, Le = [],
        Pe = Te ? 2 * ae : s("edgePadding") ? 1 : 0, Ie = Ut ? ae + 2 * Pe : ae + Pe, Ae = !(!Ce || Te || we),
        Ee = !Ut || !Te, Oe = Zt ? "left" : "top", De = "", Re = "", Be = Ut ? Pe : 0, Ne = Be,
        je = !Te && s("edgePadding") ? 1 : 0, Ge = je, Fe = Ie - me - je, $e = !1, Ve = t.onInit, qe = new I.a,
        We = ie.id, He = " tns-slider tns-" + t.mode, Ue = ie.id || i.i(l.a)(), Ye = n("disable"), Je = t.freezable,
        Ke = !!Ye || !!Je && ae <= me, Xe = "inner" === ge ? " !important" : "", Qe = { click: yt, keydown: Lt },
        Ze = { click: wt, keydown: It }, ti = { mouseover: J, mouseout: K }, ei = { visibilitychange: kt },
        ii = { keydown: zt }, si = { touchstart: Rt, touchmove: Bt, touchend: Nt, touchcancel: Nt },
        ni = { mousedown: Rt, mousemove: Bt, mouseup: Nt, mouseleave: Nt }, ai = s("controls"), oi = s("nav"),
        ri = s("autoplay"), li = s("touch"), ci = s("mouseDrag"), di = "tns-slide-active"
      if (ai) var hi, ui, pi, vi, fi = n("controls"), mi = n("controlsText"), _i = t.controlsContainer
      if (oi) var gi, yi = n("nav"), wi = t.navContainer, Ci = [], bi = Ci, xi = -1, Si = 0, Ti = 0,
        Mi = "tns-nav-active"
      if (ri) var ki, zi = n("autoplay"), Li = n("autoplayTimeout"), Pi = "forward" === t.autoplayDirection ? 1 : -1,
        Ii = n("autoplayText"), Ai = n("autoplayHoverPause"), Ei = t.autoplayButton, Oi = !1, Di = !1,
        Ri = ["<span class='tns-visually-hidden'>", " animation</span>"], Bi = n("autoplayResetOnVisibility"), Ni = !1
      if (li) var ji, Gi, Fi, $i = n("touch"), Vi = null, qi = null, Wi = 0
      if (ci) var Hi = n("mouseDrag"), Ui = !1
      Ke && (fi = yi = $i = Hi = be = zi = Ai = Bi = !1), $ && (Oe = $, De = "translate", De += Zt ? "X(" : "Y(", Re = ")"), function() {
        te.appendChild(ee), se.insertBefore(te, ie), ee.appendChild(ie), Qt = ee.clientWidth
        var e = "tns-outer", a = "tns-inner"
        if (Ut ? Zt && (s("edgePadding") || s("gutter") && !t.fixedWidth) ? e += " tns-ovh" : a += " tns-ovh" : s("gutter") && (e += " tns-ovh"), te.className = e, ee.className = a, ee.id = Ue + "-iw", Me && (ee.className += " tns-ah", ee.style[V] = xe / 1e3 + "s"), "" === ie.id && (ie.id = Ue), He += G ? " tns-subpixel" : " tns-no-subpixel", He += j ? " tns-calc" : " tns-no-calc", Ut && (He += " tns-" + t.axis), ie.className += He, Ut && U) {
          var l = {}
          l[U] = _t, i.i(L.a)(ie, l)
        }
        e = a = null
        for (var u = 0; u < ae; u++) {
          var f = ne[u]
          f.id || (f.id = Ue + "-item" + u), i.i(g.a)(f, "tns-item"), !Ut && Xt && i.i(g.a)(f, Xt), i.i(b.a)(f, {
            "aria-hidden": "true",
            tabindex: "-1"
          })
        }
        if (Te || we) {
          for (var m = R.createDocumentFragment(), _ = R.createDocumentFragment(), w = Pe; w--;) {
            var C = w % ae, T = ne[C].cloneNode(!0)
            if (i.i(x.a)(T, "id"), _.insertBefore(T, _.firstChild), Ut) {
              var M = ne[ae - 1 - C].cloneNode(!0)
              i.i(x.a)(M, "id"), m.appendChild(M)
            }
          }
          ie.insertBefore(m, ie.firstChild), ie.appendChild(_), ne = ie.children
        }
        for (var P = Be; P < Be + me; P++) {
          var f = ne[P]
          i.i(b.a)(f, { "aria-hidden": "false" }), i.i(x.a)(f, ["tabindex"]), i.i(g.a)(f, di), Ut || (f.style.left = 100 * (P - Be) / me + "%", i.i(g.a)(f, Yt), i.i(y.a)(f, Xt))
        }
        if (Ut && Zt) if (G) {
          var I = B.getComputedStyle(ne[0]).fontSize
          I.indexOf("em") > 0 && (I = 16 * parseFloat(I) + "px"), i.i(p.a)(ke, "#" + Ue, "font-size:0;", i.i(v.a)(ke)), i.i(p.a)(ke, "#" + Ue + " > .tns-item", "font-size:" + I + ";", i.i(v.a)(ke))
        } else [].forEach.call(ne, function(t, e) {
          t.style.marginLeft = o(e)
        })
        if (F) {
          var A = r(t.edgePadding, t.gutter, t.fixedWidth)
          i.i(p.a)(ke, "#" + Ue + "-iw", A, i.i(v.a)(ke)), Ut && Zt && (A = "width:" + c(t.fixedWidth, t.gutter, t.items), i.i(p.a)(ke, "#" + Ue, A, i.i(v.a)(ke))), (Zt || t.gutter) && (A = d(t.fixedWidth, t.gutter, t.items) + h(t.gutter), i.i(p.a)(ke, "#" + Ue + " > .tns-item", A, i.i(v.a)(ke)))
        } else if (ee.style.cssText = r(we, ye, Ce), Ut && Zt && (ie.style.width = c(Ce, ye, me)), Zt || ye) {
          var A = d(Ce, ye, me) + h(ye)
          i.i(p.a)(ke, "#" + Ue + " > .tns-item", A, i.i(v.a)(ke))
        }
        if (Zt || Ye || (it(), jt()), re && F && ce.forEach(function(t) {
          var e = re[t], i = "", a = "", o = "", l = "", u = n("items", t), p = n("fixedWidth", t),
            v = n("edgePadding", t), f = n("gutter", t);
          ("edgePadding" in e || "gutter" in e) && (a = "#" + Ue + "-iw{" + r(v, f, p) + "}"), Ut && Zt && ("fixedWidth" in e || "gutter" in e || "items" in e) && (o = "#" + Ue + "{width:" + c(p, f, u) + "}"), ("fixedWidth" in e || s("fixedWidth") && "gutter" in e || !Ut && "items" in e) && (l += d(p, f, u)), "gutter" in e && (l += h(f)), l.length > 0 && (l = "#" + Ue + " > .tns-item{" + l + "}"), i = a + o + l, i.length > 0 && ke.insertRule("@media (min-width: " + t / 16 + "em) {" + i + "}", ke.cssRules.length)
        }), Ut && !Ye && ut(), navigator.msMaxTouchPoints && (i.i(g.a)(te, "ms-touch"), i.i(L.a)(te, { scroll: At }), st()), oi) {
          var E = Ut ? Pe : 0
          if (wi) i.i(b.a)(wi, { "aria-label": "Carousel Pagination" }), gi = wi.children, [].forEach.call(gi, function(t, e) {
            i.i(b.a)(t, { "data-nav": e, tabindex: "-1", "aria-selected": "false", "aria-controls": ne[E + e].id })
          }) else {
            for (var N = "", P = 0; P < ae; P++) N += "<button data-nav=\"" + P + "\" tabindex=\"-1\" aria-selected=\"false\" aria-controls=\"" + ne[E + P].id + "\" hidden type=\"button\"></button>"
            N = "<div class=\"tns-nav\" aria-label=\"Carousel Pagination\">" + N + "</div>", te.insertAdjacentHTML("afterbegin", N), wi = te.querySelector(".tns-nav"), gi = wi.children, Ft()
          }
          if (V) {
            var $ = V.substring(0, V.length - 18).toLowerCase(), A = "transition: all " + xe / 1e3 + "s"
            $ && (A = "-" + $ + "-" + A), i.i(p.a)(ke, "[aria-controls^=" + Ue + "-item]", A, i.i(v.a)(ke))
          }
          i.i(b.a)(gi[0], {
            tabindex: "0",
            "aria-selected": "true"
          }), i.i(g.a)(gi[0], Mi), i.i(L.a)(wi, Ze), yi || i.i(S.a)(wi)
        }
        if (ri) {
          var q = zi ? "stop" : "start"
          Ei ? i.i(b.a)(Ei, { "data-action": q }) : t.autoplayButtonOutput && (ee.insertAdjacentHTML("beforebegin", "<button data-action=\"" + q + "\" type=\"button\">" + Ri[0] + q + Ri[1] + Ii[0] + "</button>"), Ei = te.querySelector("[data-action]")), Ei && i.i(L.a)(Ei, { click: Mt }), zi ? (bt(), Ai && i.i(L.a)(ie, ti), Bi && i.i(L.a)(ie, ei)) : Ei && i.i(S.a)(Ei)
        }
        ai && (_i ? (hi = _i.children[0], ui = _i.children[1], i.i(b.a)(_i, {
          "aria-label": "Carousel Navigation",
          tabindex: "0"
        }), i.i(b.a)(hi, { "data-controls": "prev" }), i.i(b.a)(ui, { "data-controls": "next" }), i.i(b.a)(_i.children, {
          "aria-controls": Ue,
          tabindex: "-1"
        })) : (te.insertAdjacentHTML("afterbegin", "<div class=\"tns-controls\" aria-label=\"Carousel Navigation\" tabindex=\"0\"><button data-controls=\"prev\" tabindex=\"-1\" aria-controls=\"" + Ue + "\" type=\"button\">" + mi[0] + "</button><button data-controls=\"next\" tabindex=\"-1\" aria-controls=\"" + Ue + "\" type=\"button\">" + mi[1] + "</button></div>"), _i = te.querySelector(".tns-controls"), hi = _i.children[0], ui = _i.children[1]), pi = ot(hi), vi = ot(ui), Te || lt(pi, hi, !0), i.i(L.a)(_i, Qe), fi || i.i(S.a)(_i)), $i && i.i(L.a)(ie, si), Hi && i.i(L.a)(ie, ni), be && i.i(L.a)(R, ii), "inner" === ge ? qe.on("outerResized", function() {
          z(), qe.emit("innerLoaded", $t())
        }) : (i.i(L.a)(B, { resize: k }), "outer" === ge && qe.on("innerLoaded", Q)), X(), Q(), O(), qe.on("indexChanged", tt), "function" == typeof Ve && Ve($t()), "inner" === ge && qe.emit("innerLoaded", $t()), Ye && D(!0)
      }()
      var Yi = function() {
        return Te ? function() {
          var t = Ge + _e, e = Fe - _e
          if (we) t += 1, e -= 1 else if (Ce) {
            var i = ye || 0
            oe % (Ce + i) > i && (e -= 1)
          }
          if (Be > e) for (; Be >= t + ae;) Be -= ae else if (Be < t) for (; Be <= e - ae;) Be += ae
        } : function() {
          Be = Math.max(Ge, Math.min(Fe, Be))
        }
      }(), Ji = function() {
        return Ut ? function(t, e) {
          if (e || (e = ht()), Ae && Be === Fe) {
            var s = $ ? -(Ie - me) / Ie * 100 : 100 * -(Ie / me - 1)
            e = Math.max(parseFloat(e), s) + "%"
          }
          V || !t ? (ut(e), 0 === xe && _t()) : i.i(A.a)(ie, Oe, De, Re, e, xe, _t), Zt || jt()
        } : function() {
          Le = []
          var t = {}
          t[U] = t[Y] = _t, i.i(P.a)(ne[Ne], t), i.i(L.a)(ne[Be], t), pt(Ne, Yt, Jt, !0), pt(Be, Xt, Yt), U && Y && 0 !== xe || setTimeout(_t, 0)
        }
      }()
      return {
        getInfo: $t, events: qe, goTo: gt, destroy: function() {
          if (ke.disabled = !0, Te) for (var e = Pe; e--;) ne[0].remove(), ne[ne.length - 1].remove()
          for (var s = ae; s--;) {
            var n = ne[s]
            n.id.indexOf(Ue + "-item") >= 0 && (n.id = ""), n.classList.remove("tns-item")
          }
          if (i.i(x.a)(ne, ["style", "aria-hidden", "tabindex"]), ne = Ue = ae = Ie = Pe = null, fi && (i.i(P.a)(_i, Qe), t.controlsContainer && (i.i(x.a)(_i, ["aria-label", "tabindex"]), i.i(x.a)(_i.children, ["aria-controls", "aria-disabled", "tabindex"])), _i = hi = ui = null), yi && (i.i(P.a)(wi, Ze), t.navContainer && (i.i(x.a)(wi, ["aria-label"]), i.i(x.a)(gi, ["aria-selected", "aria-controls", "tabindex"])), wi = gi = null), zi && (clearInterval(ki), Ei && i.i(P.a)(Ei, { click: Mt }), i.i(P.a)(ie, ti), i.i(P.a)(ie, ei), t.autoplayButton && i.i(x.a)(Ei, ["data-action"])), ie.id = We || "", ie.className = ie.className.replace(He, ""), ie.setAttribute("style", ""), Ut && U) {
            var a = {}
            a[U] = _t, i.i(P.a)(ie, a)
          }
          i.i(P.a)(ie, si), i.i(P.a)(ie, ni), se.insertBefore(ie, te), te.remove(), te = ee = ie = null, i.i(P.a)(R, ii), i.i(P.a)(B, { resize: k })
        }
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(1), n = (i.n(s), i(9)), a = i(10), o = i.n(a), r = i(8), l = i.n(r), c = i(17), d = i.n(c), h = i(11),
    u = i.n(h), p = i(13), v = i.n(p), f = i(299), m = i.n(f), _ = i(35), g = i.n(_), y = i(7), w = i.n(y), C = i(195)
  e.default = {
    mixins: [n.a],
    components: {
      SectionTitle: o.a,
      Introduction: l.a,
      GrVideoPlayer: d.a,
      Contributor: v.a,
      Separator: u.a,
      AccordionItem: m.a,
      Diptych: g.a,
      Annotation: w.a
    },
    data: function() {
      return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop,
        title: "<span>Brain</span><span>waves</span>",
        index: 5,
        titleVideoSrc: "/static/videos/nav/Title_Brainwaves.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Brainwaves.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Giving.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Giving.png",
        nextPageTitle: "<span>Giv</span><span>ing</span>",
        nextPageUrl: "/giving",
        openAccordionIndex: -1,
        isAccordionOpen: !1,
        stories: C.a
      }
    },
    methods: {
      onClickAccordion: function(t) {
        var e = this
        document.body.classList.add("nav-no-scroll")
        var i = !1, s = void 0
        for (s = 0; s < this.stories.length; s++) this.stories[s].isOpen = s === t && !this.stories[s].isOpen, this.stories[s].isOpen && function() {
          i = !0
          var t = e.$refs["accordionItem" + s]
          e.scrollTop = window.pageYOffset || document.documentElement.scrollTop
          var n = t.$el.getBoundingClientRect().top
          if (n += e.scrollTop + 2, -1 !== e.openAccordionIndex && e.openAccordionIndex < s) {
            var a = e.$refs["accordionItem" + e.openAccordionIndex]
            n -= a.$el.getBoundingClientRect().height, n += 1.5 * a.$refs.title.getBoundingClientRect().height
          }
          setTimeout(function() {
            e.animateScroll(n)
          }, 10), e.openAccordionIndex = s
        }()
        !1 === i && (document.body.classList.remove("nav-no-scroll"), this.openAccordionIndex = -1), this.isAccordionOpen = i
      }, animateScroll: function(t) {
        var e = this
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, console.log("scrollTo"), s.TweenMax.to(this, .6, {
          scrollTop: t,
          ease: s.Cubic.easeInOut,
          onStart: function() {
            window.scrollTo(0, e.scrollTop)
          },
          onUpdate: function() {
            window.scrollTo(0, e.scrollTop)
          },
          onComplete: function() {
            window.scrollTo(0, e.scrollTop)
          }
        })
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  var s = [{ isOpen: !1, title: "Aspen Matis", author: "Aspen Matis" }, {
    isOpen: !1,
    title: "Charlie Skelton",
    author: "Charlie Skelton"
  }, { isOpen: !1, title: "Deepak Chopra", author: "Deepak Chopra" }, {
    isOpen: !1,
    title: "Hannah Giorgis",
    author: "Hannah Giorgis"
  }, { isOpen: !1, title: "John Saward", author: "John Saward" }, {
    isOpen: !1,
    title: "Lawrence Krauss",
    author: "Lawrence Krauss"
  }, { isOpen: !1, title: "Musa Okwonga", author: "Musa Okwonga" }, {
    isOpen: !1,
    title: "Dr. Nelly Ben Hayoun",
    author: "Dr. Nelly Ben Hayoun"
  }, { isOpen: !1, title: "Robert Montgomery", author: "Greta Bellamacina" }, {
    isOpen: !1,
    title: "Sara-Kate Astrove",
    author: "Sara-Kate Astrove"
  }, { isOpen: !1, title: "Seth Shostak", author: "Seth Shostak" }, {
    isOpen: !1,
    title: "Shelly Oria",
    author: "Shelly Oria"
  }, { isOpen: !1, title: "Vera Chok", author: "Vera Chok" }]
  e.a = s
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(9), n = i(10), a = i.n(n), o = i(8), r = i.n(o), l = i(11), c = i.n(l), d = i(17), h = i.n(d), u = i(40),
    p = i.n(u), v = i(39), f = i.n(v), m = i(13), _ = i.n(m), g = i(127), y = i.n(g), w = i(303), C = i.n(w), b = i(7),
    x = i.n(b), S = i(242), T = i(275)
  e.default = {
    name: "Epilogue",
    mixins: [s.a],
    components: {
      SectionTitle: a.a,
      Introduction: r.a,
      Separator: c.a,
      GrVideoPlayer: h.a,
      Triptych: p.a,
      SlideInEl: f.a,
      Contributor: _.a,
      BodyCopy: y.a,
      CreditsColumn: C.a,
      Annotation: x.a
    },
    data: function() {
      return {
        title: "<span>GIV</span><span>ING</span>",
        index: 6,
        titleVideoSrc: "/static/videos/nav/Title_Giving.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Giving.png",
        videoPoster: S,
        wtLogo: T,
        contributors: [[{ name: "Albert Bonsfills", title: "Images" }, {
          name: "Aspen Matis",
          title: "Brainwaves"
        }, { name: "Charlie Skelton", title: "Brainwaves" }, {
          name: "Chiara Goia",
          title: "Images"
        }, { name: "Christian Scott Atunde Adjuah", title: "Music" }, {
          name: "David Pescovitz",
          title: "Consultant"
        }, { name: "Deepak Chopra", title: "Brainwaves" }, {
          name: "Dengue Dengue Dengue",
          title: "Music"
        }, { name: "DJ Edu", title: "Music" }, { name: "DJ Juls", title: "Music" }], [{
          name: "DJ Soul Sister",
          title: "Music"
        }, { name: "Fatima Al Qadiri", title: "Music" }, {
          name: "Gilles Peterson",
          title: "Music"
        }, { name: "Greta Bellamacina", title: "Brainwaves" }, {
          name: "Hannah Giorgis",
          title: "Brainwaves"
        }, { name: "John Saward", title: "Brainwaves" }, {
          name: "Jordan Rakei",
          title: "Music"
        }, { name: "Kent Andreasen", title: "Images" }, {
          name: "Lawrence Azerrad",
          title: "Zine"
        }, { name: "Lawrence Krauss", title: "Brainwaves" }], [{ name: "Lefto", title: "Music" }, {
          name: "Luisa DÃ¶rr",
          title: "Images"
        }, { name: "Luzmira Zerpa (of Family Atlantica)", title: "Music" }, {
          name: "Maft Sai (of Studio Lam)",
          title: "Music"
        }, { name: "Musa Okwonga", title: "Brainwaves" }, {
          name: "Nai Palm",
          title: "Music"
        }, {
          name: "Nelly Ben Hayoun",
          title: "Designer",
          annotation: {
            type: "board",
            image: "/static/images/annotations/nelly.jpg",
            title: "Nelly Ben Hayoun",
            wordType: "6 Items",
            link: "https://thegoldenrecord.wetransfer.com/downloads/shl7c1a4y26llpnus20171205103816/latest"
          }
        }, { name: "Nubya Garcia", title: "Music" }, {
          name: "Oneohtrix Point Never",
          title: "Finale"
        }, { name: "Rebecca Roth", title: "Greetings" }], [{
          name: "Robert Montgomery",
          title: "Brainwaves"
        }, { name: "Sara-Kate Astrove", title: "Brainwaves" }, {
          name: "Sasha Arutyunova",
          title: "Images"
        }, { name: "Seth Shostak", title: "Brainwaves" }, {
          name: "Shelly Oria",
          title: "Brainwaves"
        }, { name: "Sophy Hollington", title: "Illustrator" }, {
          name: "Stink Studios",
          title: "Creative Studio"
        }, { name: "S U R V I V E", title: "Band" }, { name: "Vera Chok", title: "Actor" }, {
          name: "Wanda Diaz Merced",
          title: "Astronomer"
        }]]
      }
    },
    methods: {
      trackDonateLink: function() {
        this.$ga.event("external_link", "click", "donate")
      }, trackBottomWt: function() {
        this.$ga.event("external_link", "click", "bottom_wt_lockup")
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(56), n = i.n(s), a = i(5), o = i.n(a), r = i(1), l = (i.n(r), i(209)), c = (i.n(l), i(16)), d = i(193),
    h = i(9), u = i(10), p = i.n(u), v = i(8), f = i.n(v), m = i(11), _ = i.n(m), g = i(17), y = i.n(g), w = i(40),
    C = i.n(w), b = i(35), x = i.n(b), S = i(39), T = i.n(S), M = i(13), k = i.n(M), z = i(106), L = i.n(z), P = i(7),
    I = i.n(P), A = i(4)
  e.default = {
    mixins: [h.a],
    components: {
      SectionTitle: p.a,
      Introduction: f.a,
      Separator: _.a,
      GrVideoPlayer: y.a,
      Diptych: x.a,
      Triptych: C.a,
      SlideInEl: T.a,
      Contributor: k.a,
      StarChat: L.a,
      Annotation: I.a
    },
    data: function() {
      return {
        isIe: o.a.msie,
        isSafari: o.a.safari,
        isAndroid: o.a.android,
        displayBigPlayButton: o.a.safari || o.a.android,
        isTouch: i.i(A.g)(),
        title: "<span>Gree</span><span>tings</span>",
        index: 1,
        titleVideoSrc: "/static/videos/nav/Title_Greetings.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Greetings.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Sounds.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Sounds.png",
        nextPageTitle: "<span>Sounds<span>",
        nextPageUrl: "/sounds",
        stars: [{
          image: "/static/images/greetings/stars/star-1_600.png",
          name: "CH CIGNY",
          desc: "SPECTRAL TYPE S6+/1e = MS6",
          info: "19h 50m 33.92439s",
          type: "/static/sounds/greetings/glockenspiel-g-1.mp3",
          color: "#1cd5b4"
        }, {
          image: "/static/images/greetings/stars/star-2_600.png",
          name: "GAMMA CASSIOPEIA",
          desc: "SPECTRAL TYPE B0.5IVe",
          info: "00h 56m 42.50108s",
          type: "/static/sounds/greetings/contrabass-a.mp3",
          color: "#d57520"
        }, {
          image: "/static/images/greetings/stars/star-3_600.png",
          name: "SPICA",
          desc: "SPECTRAL TYPE B1 III-IV/B2 V",
          info: "13h 25m 11.579s",
          type: "/static/sounds/greetings/harp-003.mp3",
          color: "#582fde"
        }, {
          image: "/static/images/greetings/stars/star-4_600.png",
          name: "RIGEL",
          desc: "SPECTRAL TYPE B9V + B9V",
          info: "05h 14m 32.27210s",
          type: "/static/sounds/greetings/drum-26.mp3",
          color: "#d132e0"
        }, {
          image: "/static/images/greetings/stars/star-5_600.png",
          name: "ex hydrae",
          desc: "SPECTRAL TYPE WHITE DWARF",
          info: "12h 52m 24.20sF",
          type: "/static/sounds/greetings/thum-note.mp3",
          color: "#d7a213"
        }],
        playgroundStarStyle: { backgroundImage: "", top: 0, right: 0, width: 0, height: 0 },
        engaged: !1,
        shareLink: window.location.href + "/#starchat-intro",
        shareCopyPrompt: "",
        greetingsSlider: null,
        touchMovePosY: 0,
        introCurrentStep: 0,
        currentSlideIndex: 0,
        lastScrollTop: 0,
        scrollTop: 0,
        selectedStar: null,
        sliderParams: {
          items: 1,
          nav: !0,
          axis: "vertical",
          slideBy: "page",
          speed: this.isGreaterThanTablet ? 800 : 400
        }
      }
    },
    mounted: function() {
      var t = this
      this.bindHandleResize = function(e) {
        return t.handleResize(e)
      }, window.addEventListener("resize", this.bindHandleResize), "#starchat-intro" === window.location.hash && setTimeout(function() {
        t.scrollTop = window.pageYOffset || document.documentElement.scrollTop
        var e = t.$el.querySelector("#starchat-intro").offsetTop
        r.TweenMax.to(t, .4, {
          scrollTop: e, ease: r.Cubic.easeInOut, delay: .1, onUpdate: function() {
            window.scrollTo(0, t.scrollTop)
          }, onComplete: function() {
            window.scrollTo(0, t.scrollTop)
          }
        })
      }, 1e3), this.isSafari || this.initAutoplayListener()
    },
    beforeDestroy: function() {
      var t = this
      document.body.removeEventListener("touchend", this.bindOnSliderTransitionEnd), document.body.removeEventListener("touchcancel", this.bindOnSliderTransitionEnd), window.removeEventListener("resize", this.bindHandleResize), this.$refs["tiny-slider"].removeEventListener("touchmove", this.bindHandleScroll)
      var e = document.querySelectorAll(".star-image")
      Array.from(e).forEach(function(e) {
        e.removeEventListener("click", t.bindSelectStar)
      }), this.killSlider(), document.body.classList.remove("no-scroll"), this.isSafari || this.autoplayListener.off("enter")
    },
    updated: function() {
      if (2 !== this.introCurrentStep || this.greetingsSlider || this.initSlider(), this.introCurrentStep >= 1) {
        Array.from(document.querySelectorAll("video")).forEach(function(t) {
          return t.pause()
        }), 1 === this.introCurrentStep && (this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop, document.body.classList.add("no-scroll")), 4 === this.introCurrentStep && this.$refs.starchat.start(), this.introCurrentStep >= 4 && (this.clipboard = new n.a(this.$refs.shareButton), this.clipboard.on("success", this.confirmCopySuccess), this.clipboard.on("error", function(t) {
          console.error("clipboard error"), console.error(t)
        }))
      } else document.body.classList.remove("no-scroll"), window.scrollTo(0, this.lastScrollTop)
    },
    methods: {
      initAutoplayListener: function() {
        var t = this
        this.isTouch || (this.autoplayListener = i.i(c.a)(this.$refs.wandaVideo.$el), this.autoplayListener.once("enter", function() {
          t.$refs.wandaVideo.play()
        }), this.autoplayListener.check())
      }, starchatIntroClick: function() {
        this.engaged || (this.$ga.event("starchat", "active"), this.engaged = !0), this.introCurrentStep += 1, this.introCurrentStep >= 2 && this.unlockWebAudio()
      }, unlockWebAudio: function() {
        this.$refs.starchat.unlock()
      }, initSlider: function() {
        var t = this
        this.isGreaterThanTablet && (this.sliderParams.axis = "horizontal", this.sliderParams.edgePadding = .22 * this.$el.getBoundingClientRect().width), this.sliderParams.container = this.$refs["tiny-slider"], this.greetingsSlider = i.i(d.a)(this.sliderParams), this.greetingsSlider.events.on("touchStart", function(e) {
          return t.onSliderTransitionStart(e.event)
        }), this.greetingsSlider.events.on("touchMove", function(e) {
          return t.onSliderTransitionMove(e.event)
        }), this.bindOnSliderTransitionEnd = function(e) {
          return t.onSliderTransitionEnd(e)
        }, document.body.addEventListener("touchend", this.bindOnSliderTransitionEnd), document.body.addEventListener("touchcancel", this.bindOnSliderTransitionEnd), this.greetingsSlider.events.on("indexChanged", function() {
          return t.onSlideChange()
        }), this.$el.querySelector(".tiny-slider__wrapper").classList.add("active"), this.bindHandleScroll = function(e) {
          return t.handleScroll(e)
        }, this.$refs["tiny-slider"].addEventListener("touchmove", this.bindHandleScroll), this.bindSelectStar = function(e) {
          return t.selectStar(e)
        }
        var e = document.querySelectorAll(".star-image")
        Array.from(e).forEach(function(e) {
          e.addEventListener("click", t.bindSelectStar)
        }), 0 !== this.currentSlideIndex && this.greetingsSlider.goTo(this.currentSlideIndex)
      }, killSlider: function() {
        var t = this
        if (this.greetingsSlider) {
          var e = document.querySelectorAll(".star-image")
          Array.from(e).forEach(function(e) {
            e.removeEventListener("click", t.bindSelectStar)
          }), this.greetingsSlider.destroy(), this.$refs["tiny-slider"].removeEventListener("touchmove", this.bindHandleScroll)
        }
      }, handleScroll: function(t) {
        return t.preventDefault(), !1
      }, handleResize: function() {
        this.greetingsSlider && (this.greetingsSlider.destroy(), this.$refs["tiny-slider"].removeEventListener("touchmove", this.bindHandleScroll), this.initSlider())
      }, onSliderTransitionStart: function(t) {
        this.touchMovePosY = t.touches[0].clientY, this.$refs["tiny-slider"].classList.add("transitioning")
      }, onSliderTransitionMove: function(t) {
        t.touches[0].clientY - this.touchMovePosY > 0 ? this.$refs.starchat.moveBgStars(0, "vertical", 1) : this.$refs.starchat.moveBgStars(1, "vertical", 1), this.touchMovePosY = t.touches[0].clientY
      }, onSliderTransitionEnd: function() {
        this.$refs["tiny-slider"].classList.remove("transitioning")
      }, onSlideChange: function() {
        this.onSliderTransitionEnd()
        var t = this.isGreaterThanTablet ? "horizontal" : "vertical", e = this.greetingsSlider.getInfo()
        e.navCurrentIndex < this.currentSlideIndex && (this.currentSlideIndex !== this.stars.length - 1 || 0 !== e.navCurrentIndex) || e.navCurrentIndex === this.stars.length - 1 && 0 === this.currentSlideIndex ? this.$refs.starchat.gotoStar(e.navCurrentIndex, 0, t) : this.$refs.starchat.gotoStar(e.navCurrentIndex, 1, t), this.currentSlideIndex = e.navCurrentIndex
      }, onBackArrow: function() {
        this.introCurrentStep >= 2 && (this.killSlider(), delete this.greetingsSlider), this.introCurrentStep >= 3 && (this.$refs.starchat.resetTransmissions(), this.playgroundStarStyle = {
          top: 0,
          right: 0,
          bottom: 0,
          backgroundImage: ""
        }, 4 === this.introCurrentStep && (this.introCurrentStep -= 1)), this.introCurrentStep -= 1
      }, confirmCopySuccess: function() {
        var t = this
        this.shareCopyPrompt = "Link Copied", setTimeout(function() {
          t.shareCopyPrompt = ""
        }, 2e3)
      }, onCloseStarchat: function() {
        this.introCurrentStep >= 3 && this.$refs.starchat.resetTransmissions(), this.introCurrentStep = 0, this.playgroundStarStyle = {
          top: 0,
          right: 0,
          bottom: 0,
          backgroundImage: ""
        }, this.killSlider(), delete this.greetingsSlider
      }, onSliderPrev: function() {
        this.greetingsSlider.goTo("prev")
      }, onSliderNext: function() {
        this.greetingsSlider.goTo("next")
      }, selectStar: function() {
        var t = this, e = this.greetingsSlider.getInfo(), i = e.slideItems[e.index],
          s = i.querySelector(".star-image").getBoundingClientRect()
        this.isGreaterThanTablet ? this.playgroundStarStyle.top = s.top + "px" : this.playgroundStarStyle.top = "", this.playgroundStarStyle.right = s.right - s.width + "px", this.playgroundStarStyle.width = s.width + "px", this.playgroundStarStyle.height = s.height + "px", this.playgroundStarStyle.backgroundImage = "url(" + this.stars[this.currentSlideIndex].image + ")", this.introCurrentStep = 3, setTimeout(function() {
          return t.transitionInLastStep()
        }, 100)
      }, transitionInLastStep: function() {
        this.introCurrentStep = 4
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(16), n = i(10), a = i.n(n), o = i(8), r = i.n(o), l = i(9), c = i(35), d = i.n(c), h = i(11), u = i.n(h),
    p = i(302), v = i.n(p), f = i(13), m = i.n(f), _ = i(306), g = i.n(_), y = i(7), w = i.n(y), C = i(122), b = i(244),
    x = i(243), S = [i(267), i(268), i(269), i(270), i(271)], T = [i(272), i(273)],
    M = [i(246), i(247), i(248), i(249), i(250)], k = [i(245)], z = [i(256), i(257), i(258), i(259), i(260)],
    L = [i(261)], P = [i(262), i(263), i(264), i(265), i(266)], I = [i(251), i(252), i(253), i(254), i(255)]
  e.default = {
    name: "Images",
    mixins: [l.a],
    components: {
      SectionTitle: a.a,
      Introduction: r.a,
      Carousel: v.a,
      Diptych: d.a,
      Separator: u.a,
      Contributor: m.a,
      PhotographerLabel: g.a,
      Annotation: w.a
    },
    data: function() {
      return {
        title: "<span>Ima</span><span>ges</span>",
        index: 4,
        titleVideoSrc: "/static/videos/nav/Title_Images.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Images.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Brainwaves.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Brainwaves.png",
        nextPageTitle: "<span>Brain</span><span>waves</span>",
        nextPageUrl: "/brainwaves",
        introImg1: C,
        introImg2: b,
        blinkLogo: x,
        photographers: [{
          id: 0,
          name: "Luisa DÃ¶rr",
          location: "Bahia, Brazil",
          camera: "iphone 7 Plus",
          bio: "Hope, determination and goodwill mean a lot, but we have a hard time explaining them. For me, a person who relates to the world through photography, it is easier to synthesize emotional words through imagery.",
          images: P,
          floaters: T,
          annotation: {
            type: "board",
            image: "/static/images/annotations/luisaDorr.jpg",
            title: "Luisa DÃ¶rr",
            wordType: "6 Items",
            link: "https://thegoldenrecord.wetransfer.com/downloads/stph9lzcs4drm0ccr20171205135652/latest"
          }
        }, {
          id: 1,
          name: "Kent Andreasen",
          location: "Various, Cape of South Africa",
          camera: "Mamiya RB67",
          bio: "I set out not knowing what I would come up with. This was my chance to present work reflecting the place I came from. It became a commentary on how, as a species, we impose ourselves on vast areas with determination.",
          images: M,
          floaters: k,
          annotation: {
            type: "board",
            image: "/static/images/annotations/kentAndreason.jpg",
            title: "Kent Andreasen",
            wordType: "6 Items",
            link: "https://thegoldenrecord.wetransfer.com/downloads/sona1r3wrglbp46lr20171205151901/latest"
          }
        }, {
          id: 2,
          name: "Sasha Arutyunova",
          location: "New York, New York",
          camera: "Canon 5D Mark III",
          bio: "",
          images: I,
          floaters: [],
          annotation: {
            type: "board",
            image: "/static/images/annotations/sasha.jpg",
            title: "Sasha Arutyunova",
            wordType: "6 Items",
            link: "https://thegoldenrecord.wetransfer.com/downloads/sahw46j9mul0khvqz20171205152331/latest"
          }
        }, {
          id: 3,
          name: "Albert Bonsfills",
          location: "Tokyo, Japan",
          camera: "Nikon D5",
          bio: "Welcome to the future, bathed in grayscale. We left behind the green of our grandparentsâ€™ trees, we can only see the blue sky on our little screen. Most of us would like to talk about it; would like to change it.",
          images: z,
          floaters: [],
          annotation: {
            type: "board",
            image: "/static/images/annotations/albertBonsfills.jpg",
            title: "Albert Bonsfills",
            wordType: "6 Items",
            link: "https://thegoldenrecord.wetransfer.com/downloads/s6dm6gfoprzdotajz20171205151759/latest"
          }
        }, {
          id: 4,
          name: "Chiara Goia",
          location: "Stromboli, Italy",
          camera: "Nikon D800",
          bio: "Hope is a reconnection with nature in which we pause, paying attention to the small details that make life possible. Being humble allows us to accept the transformation we are a part of, reminding us of the impermanence of life.",
          images: S,
          floaters: L,
          annotation: {
            type: "board",
            image: "/static/images/annotations/goia.png",
            title: "Chiara Goia",
            link: "https://thegoldenrecord.wetransfer.com/downloads/szwmafqwrw3d87avr20171205151643/latest"
          }
        }]
      }
    },
    mounted: function() {
      var t = this
      this.imagesViewportTriggers = this.$el.querySelectorAll(".images-viewport-trigger")
      var e = 0, n = void 0, a = void 0
      for (e = 0; e < this.imagesViewportTriggers.length; e++) n = this.imagesViewportTriggers[e], a = i.i(s.a)(n), a.offset(.2 * window.innerHeight), a.once("enter", function(e) {
        return t.transitionInImages(e)
      })
    },
    methods: {
      transitionInImages: function(t) {
        t.classList.add("transition-viewport")
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(1), a = (i.n(n), i(5)), o = i.n(a), r = i(16), l = i(9), c = i(10), d = i.n(c), h = i(8),
    u = i.n(h), p = i(11), v = i.n(p), f = i(17), m = i.n(f), _ = i(35), g = i.n(_), y = i(40), w = i.n(y), C = i(39),
    b = i.n(C), x = i(13), S = i.n(x), T = i(7), M = i.n(T)
  e.default = {
    mixins: [l.a],
    components: {
      SectionTitle: d.a,
      Introduction: u.a,
      Separator: v.a,
      GrVideoPlayer: m.a,
      Diptych: g.a,
      Triptych: w.a,
      SlideInEl: b.a,
      Contributor: S.a,
      Annotation: M.a
    },
    data: function() {
      return {
        title: "Music",
        index: 3,
        titleVideoSrc: "/static/videos/nav/Title_Music.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Music.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Images.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Images.png",
        currentCuePoint: 0,
        halfGlobeHeight: 0,
        windowHeight: 0,
        halfWindowHeight: 0,
        maxGlobeY: 0,
        mixcloudTheme: "&light=0",
        globeYTranslate: { transform: "translate3d(0, 0, 0)", webkitTransform: "translate3d(0, 0, 0)" },
        nextPageTitle: "<span>Ima</span><span>ges</span>",
        nextPageUrl: "/images",
        firstComponentEnter: !0,
        globeYPos: 0,
        videosCuePoints: [2, 5, 6.8, 8.3, 10, 12],
        isIe: o.a.msie
      }
    },
    computed: Object.assign({}, i.i(s.b)(["currentScrollY", "isBackgroundWhite"])),
    watch: {
      isBackgroundWhite: function() {
        this.isIe || this.hideShowVideo()
      }
    },
    mounted: function() {
      var t = this
      if (!this.isIe) {
        for (var e = this.$el.querySelectorAll(".section-triptych__music"), s = void 0, n = function(n) {
          s = i.i(r.a)(e[n]), s.offset(.5 * window.innerHeight), s.on("enter", function() {
            return t.continentEnterViewport(n)
          }), s.check()
        }, a = 0; a < e.length; a++) n(a)
        this.halfGlobeHeight = this.$refs.videoGlobe.getBoundingClientRect().height, this.windowHeight = window.innerHeight, this.halfWindowHeight = .5 * window.innerHeight, this.maxGlobeY = this.$refs["triptychs-wrapper"].getBoundingClientRect().height - 1 * window.innerHeight, this.animateVideo(), this.$refs.videoGlobe.play()
      }
    },
    beforeDestroy: function() {
      this.isIe || cancelAnimationFrame(this.animateVideo)
    },
    methods: {
      hideShowVideo: function() {
        n.TweenMax.to(this.$refs.videoWrapper, .3, { opacity: 0 }), n.TweenMax.to(this.$refs.videoWrapper, .6, {
          opacity: 1,
          delay: .6
        })
      }, continentEnterViewport: function(t) {
        if (this.$refs.videoGlobe) {
          this.firstComponentEnter && (this.firstComponentEnter = !1, this.$refs.videoGlobe.pause(), this.$refs.videoGlobe.currentTime = 0), this.currentCuePoint = this.videosCuePoints[t]
          var e = Math.abs(this.currentCuePoint - this.$refs.videoGlobe.currentTime)
          this.$refs.videoGlobe.pause(), n.TweenMax.killTweensOf(this.$refs.videoGlobe), n.TweenMax.to(this.$refs.videoGlobe, e, {
            currentTime: this.currentCuePoint,
            ease: n.Power0.easeNone
          })
        }
      }, animateVideo: function() {
        var t = 0
        if (this.$refs.videoWrapper) {
          t = this.$refs["triptychs-wrapper"].getBoundingClientRect().top, t < 0 ? (this.globeYTranslate = { transform: "" }, Math.abs(t) > this.maxGlobeY && (this.globeYTranslate = { transform: "translate3d(0, " + (this.maxGlobeY + t) + "px, 0)" })) : this.globeYTranslate = { transform: "translate3d(0, " + t + "px, 0)" }, requestAnimationFrame(this.animateVideo)
        }
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(8), n = i.n(s), a = i(9)
  e.default = { name: "NotFound", mixins: [a.a], components: { Introduction: n.a } }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(9), n = i(10), a = i.n(n), o = i(8), r = i.n(o), l = i(17), c = i.n(l), d = i(39), h = i.n(d), u = i(127),
    p = i.n(u), v = i(13), f = i.n(v), m = i(7), _ = i.n(m), g = i(122), y = i(274)
  e.default = {
    mixins: [s.a],
    components: {
      SectionTitle: a.a,
      Introduction: r.a,
      GrVideoPlayer: c.a,
      SlideInEl: h.a,
      BodyCopy: p.a,
      Contributor: f.a,
      Annotation: _.a
    },
    data: function() {
      return {
        title: "<span>Pre</span><span>face<span>",
        index: 0,
        nextPageTitle: "<span>Gree</span><span>tings<span>",
        nextPageUrl: "/greetings",
        titleVideoSrc: "/static/videos/nav/Title_Preface.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Preface.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Greetings.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Greetings.png",
        annotationImg: g,
        wtBoardImg: y
      }
    }
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(2), n = i(1), a = (i.n(n), i(5)), o = i.n(a), r = i(16), l = i(9), c = i(10), d = i.n(c), h = i(8),
    u = i.n(h), p = i(17), v = i.n(p), f = i(11), m = i.n(f), _ = i(13), g = i.n(_), y = i(308), w = i.n(y), C = i(35),
    b = i.n(C), x = i(105), S = i.n(x), T = i(7), M = i.n(T), k = i(276), z = i(278), L = i(277), P = i(279),
    I = i(241)
  e.default = {
    mixins: [l.a],
    components: {
      SectionTitle: d.a,
      Introduction: u.a,
      GrVideoPlayer: v.a,
      Diptych: b.a,
      Separator: m.a,
      Contributor: g.a,
      Soundboard: S.a,
      SoundboardLanding: w.a,
      Annotation: M.a
    },
    data: function() {
      return {
        title: "Sounds",
        index: 2,
        nextPageTitle: "<span>Music<span>",
        nextPageUrl: "/music",
        titleVideoSrc: "/static/videos/nav/Title_Sounds.mp4",
        titlePosterSrc: "/static/videos/nav/Title_Sounds.png",
        nextTitleVideoSrc: "/static/videos/nav/Title_Music.mp4",
        nextTitlePosterSrc: "/static/videos/nav/Title_Music.png",
        poster: k,
        mobilePoster: z,
        videoSrc: L,
        mobileVideoSrc: P,
        surviveImage: I,
        fullscreenContainer: "soundboard-container",
        isIe: o.a.msie
      }
    },
    computed: Object.assign({}, i.i(s.a)({
      fullscreenEl: function(t) {
        return t.app.fullscreen
      }, soundboardHidden: function(t) {
        return t.soundboard.contextScreens.current >= 0
      }, contextScreen: function(t) {
        return t.soundboard.contextScreens.current
      }
    }), i.i(s.b)(["currentSoundscapeId"]), {
      soundscapeId: function() {
        return this.$route.params.soundscapeId
      }, isFullscreen: function() {
        return this.fullscreenEl === this.fullscreenContainer
      }, showActionButton: function() {
        return 2 === this.contextScreen && null !== this.currentSoundscapeId || this.contextScreen > -1
      }, soundboardContainerCls: function() {
        return { "soundboard-container": !0, fullscreen: this.isFullscreen }
      }
    }),
    mounted: function() {
      var t = this
      void 0 !== this.soundscapeId ? (this.fullscreenTakeover(this.fullscreenContainer), this.updateSoundboardContext(2), this.currentSoundscapeId !== this.soundscapeId && (this.loadSoundscape(this.soundscapeId), this.$ga.event("soundboard", "received", null, this.soundscapeId))) : this.updateSoundboardContext(0)
      var e = this.$el.querySelector(".text-box")
      e.classList.add("transparent")
      var s = i.i(r.a)(e)
      s.offset(.2 * window.innerHeight), s.once("enter", function(e) {
        return t.onEnterViewport(e)
      })
      var n = this.$el.querySelector(".video-player")
      n.classList.add("transparent")
      var a = i.i(r.a)(n)
      a.offset(.2 * window.innerHeight), a.once("enter", function(e) {
        return t.onEnterViewport(e)
      })
      var o = this.$el.querySelector(".soundboard-container")
      o.classList.add("transparent")
      var l = i.i(r.a)(o)
      l.offset(.2 * window.innerHeight), l.once("enter", function(e) {
        return t.onEnterViewport(e)
      })
    },
    watch: {
      soundscapeId: function(t) {
        void 0 !== t && (this.updateSoundboardContext(2), this.currentSoundscapeId !== t && this.loadSoundscape(t))
      }
    },
    methods: Object.assign({}, i.i(s.c)(["fullscreenTakeover", "updateSoundboardContext", "loadSoundscape"]), {
      onEnterViewport: function(t) {
        t.classList.remove("transparent"), n.TweenMax.from(t, .7, {
          opacity: 0,
          delay: .1
        }), n.TweenMax.from(t, .9, {
          y: 80, ease: n.Cubic.easeOut, force3D: !0, delay: 0, onComplete: function() {
            n.TweenMax.set(t, { clearProps: "transform, opacity, zIndex" })
          }
        })
      }
    })
  }
}, function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(9), n = i(10), a = i.n(n), o = i(8), r = i.n(o), l = i(11), c = i.n(l), d = i(17), h = i.n(d), u = i(40),
    p = i.n(u), v = i(13), f = i.n(v)
  e.default = {
    mixins: [s.a],
    components: {
      SectionTitle: a.a,
      Introduction: r.a,
      Separator: c.a,
      GrVideoPlayer: h.a,
      Triptych: p.a,
      Contributor: f.a
    },
    data: function() {
      return { title: "Music", index: 2 }
    }
  }
}, , , , , , function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e) {
}, function(t, e, i) {
  t.exports = i.p + "static/media/survive-avatar.a6a20a22.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/VOYAGER-3.3834a7eb.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/blink-logo.3ca43e71.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/intro2.0b2b5aca.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/1.7b63067d.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt1.11096623.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt2.fff6dc27.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt3.8551d5b0.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt4.3c9797af.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt5.b68472c1.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/01.d597e5bf.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/02.f8521bc0.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/03.bd6efa7b.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/04.b01e2131.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/05.e6837cdf.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/Bonsfills_Final_04.459d1bd6.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/Bonsfills_Final_06.0868c778.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/Bonsfills_Final_07.b63b8e27.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/Bonsfills_Final_08.86629907.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/Bonsfills_Final_09.73c79a78.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/1.6845a5b0.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/01.9f06d067.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/02.d2d0ff85.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/03.1f219c25.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/04.e46b8576.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/05.f0e2cb71.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/01.c04a0747.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/02.889001f6.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/03.f0aa86b3.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/04.fff41499.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/05.bde0a44f.jpg"
}, function(t, e, i) {
  t.exports = i.p + "static/media/1.0ddba260.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/2.b5e63a27.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/wt-board.92a3fdc6.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/we-transfer-logo.a870984c.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/waveform-desktop-poster.0e161f45.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/waveform-desktop.164c80e7.mp4"
}, function(t, e, i) {
  t.exports = i.p + "static/media/waveform-mobile-poster.5a42d4b7.png"
}, function(t, e, i) {
  t.exports = i.p + "static/media/waveform-mobile.e4d80158.mp4"
}, , , , , , , , , , , , , , , , function(t, e) {
  t.exports = "\n\t#ifdef GL_ES\n\tprecision highp float;\n\t#endif\n\n\t// uniform vec4 uColour;\n\n\tuniform int frameNum;\n\n\tuniform vec2 viewPort; /* width and height in px */\n\tuniform float uMultiplier;\n\tuniform float uIncrement;\n\n\tvoid main(void) {\n\t  // Seems to be no bitshifting in WebGL, hence /4.0 rather than >>2\n\t  // float checkerBoard = mod(mod(floor(gl_FragCoord.x/4.0), 2.0) + mod(floor(gl_FragCoord.y/4.0), 2.0), 2.0);\n\n\t  // Simplified version of the previous line\n\t  // float checkerBoard = mod(floor(gl_FragCoord.x/4.0) + floor(gl_FragCoord.y/4.0), 2.0);\n\n\t  // Dithered gradient - if either of the 2 prime numbers are too small, you'll get obvious patterning\n\t  // (Not sure how small exactly you can get away with - or even if you need to worry about going too high or low)\n\t  // (Or even if you have to use primes - 1000.0 and 750.0 seem as good as 1093.0 and 727.0\n\t  // The 100.0, 200.0, etc added to gl_FragCoord are just to get rid of a barely noticeable cluster when both x and y\n\t  // coords are very small - if they make any difference to performance, then they should be gotten rid of, as the\n\t  // visible difference they make is minimal\n\t  float pseudoRandom = mod(mod((gl_FragCoord.x) * (gl_FragCoord.y), 1093.0) *\n\t\t\t\t\t\t\t   mod((gl_FragCoord.x) * (gl_FragCoord.y), 727.0), viewPort.x);\n\n\t  // float checkerBoard = float(256.0 < pseudoRandom); // consistent pattern\n\t  float checkerBoard = float(gl_FragCoord.x < pseudoRandom + uIncrement); // gradient using increment\n\t  // float checkerBoard = float(gl_FragCoord.x < pseudoRandom * uMultiplier); // gradient using multiplier\n\n\t  gl_FragColor = vec4(checkerBoard, checkerBoard, checkerBoard, 1.0);\n\n\t}\n"
}, function(t, e) {
  t.exports = "\n\t\t/* No matrix/3D/etc manipulation is being done, so this\n\t\t** vertex shader really just pushes out what it gets in.\n\t\t** The only change is that we take in a 3-element vector\n\t\t** and push out a 4 element one.\n\t\t**\n\t\t** TBH as this is 2D, and a single pair of triangles to make a rectangle,\n\t\t** we could probably just have a 2-element input vector.  I suspect it's\n\t\t** worth keeping the 3rd element just in case we ever want to do z-index\n\t\t** style manipulations for overlaying.\n\t\t**\n\t\t** Not quite sure why we need a 4-element output matrix?\n\t\t*/\n\n\t\tattribute vec3 aVertexPosition;\n\n\t\tvoid main(void) {\n\t\t  /*\n\t\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\t\t*/\n\t\tgl_Position = vec4(aVertexPosition, 1.0);\n\t\t}\n"
}, , , function(t, e, i) {
  i(228)
  var s = i(0)(i(141), i(337), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(224)
  var s = i(0)(i(143), i(333), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(235)
  var s = i(0)(i(144), i(344), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(240)
  var s = i(0)(i(146), i(349), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(230)
  var s = i(0)(i(148), i(339), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(237)
  var s = i(0)(i(153), i(346), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(212)
  var s = i(0)(i(154), i(321), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(211)
  var s = i(0)(i(155), i(320), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(231)
  var s = i(0)(i(156), i(340), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(216)
  var s = i(0)(i(160), i(325), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(214)
  var s = i(0)(i(162), i(323), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(213)
  var s = i(0)(i(194), i(322), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(225)
  var s = i(0)(i(196), i(334), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(233)
  var s = i(0)(i(197), i(342), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(223)
  var s = i(0)(i(198), i(332), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(227)
  var s = i(0)(i(199), i(336), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(234)
  var s = i(0)(i(200), i(343), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(221)
  var s = i(0)(i(201), i(330), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(239)
  var s = i(0)(i(202), i(348), null, null)
  t.exports = s.exports
}, function(t, e, i) {
  i(219)
  var s = i(0)(i(203), i(328), null, null)
  t.exports = s.exports
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("span", {
        staticClass: "annotation__wrapper",
        on: { touchstart: t.show, mouseleave: t.hide, blur: t.hide }
      }, [i("span", {
        ref: "anchor",
        class: t.anchorCls,
        on: { mouseenter: t.show, focus: t.show, blur: t.hide }
      }, [t._t("default")], 2), t._v(" "), t.annotationVisible ? i("div", {
        ref: "annotation",
        class: t.annotationCls
      }, ["image" === t.type ? i("img", {
        staticClass: "annotation__image",
        attrs: { src: t.image }
      }) : t._e(), t._v(" "), "definition" === t.type ? i("div", { staticClass: "annotation__text" }, [i("div", { staticClass: "annotation__headline" }, [t.title ? i("h1", { staticClass: "annotation__title heading" }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), t.transcription ? i("h2", { staticClass: "annotation__transcription" }, [t._v("/" + t._s(t.transcription) + "/")]) : t._e()]), t._v(" "), t.wordType ? i("p", { staticClass: "annotation__word-type" }, [t._v("\n\t\t\t\t" + t._s(t.wordType) + ".\n\t\t\t")]) : t._e(), t._v(" "), t.definition ? i("p", { staticClass: "annotation__definition" }, [t._v("\n\t\t\t\t" + t._s(t.definition) + "\n\t\t\t")]) : t._e()]) : t._e(), t._v(" "), "board" === t.type ? i("div", { staticClass: "annotation__text board-text" }, [i("img", {
        staticClass: "annotation__image",
        attrs: { src: t.image }
      }), t._v(" "), i("div", { staticClass: "text-container" }, [i("div", { staticClass: "info" }, [i("h1", { staticClass: "annotation__title" }, [t._v(t._s(t.title))]), t._v(" "), i("p", { staticClass: "annotation__word-type" }, [t._v("\n\t\t\t\t\t\t" + t._s(t.wordType) + "\n\t\t\t\t\t")])]), t._v(" "), i("div", { staticClass: "share" }, [i("a", {
        staticClass: "share-link",
        attrs: { href: t.link, target: "_blank" }
      }, [i("h2", { staticClass: "share-link" }, [t._v("Share")])])])])]) : t._e()]) : t._e()])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "photographer-label" }, [i("div", { staticClass: "photographer-label__header" }, [i("p", [t._v("\n\t\t\t" + t._s(t.name) + "\n\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t" + t._s(t.location) + "\n\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t" + t._s(t.camera) + "\n\t\t")])]), t._v(" "), t.isIe ? i("div", { staticClass: "photographer-label__bio" }, [i("p", [t._v("\n\t\t\t" + t._s(t.bio) + "\n\t\t")])]) : i("div", { staticClass: "photographer-label__bio" }, [0 === t.id ? i("p", [t._v("\n\t\t\tHope, determination and goodwill mean a lot, but we have a hard time explaining them. For\n\n\t\t\t"), i("annotation", t._b({}, "annotation", t.annotation, !1), [i("a", [t._v("me,")])]), t._v("\n\n\t\t\ta person who relates to the world through photography, it is easier to synthesize emotional words through imagery.\n\t\t")], 1) : t._e(), t._v(" "), 1 === t.id ? i("p", [t._v("\n\t\t\tI set out not knowing what I would come up with. This was my chance to present work reflecting the place\n\t\t\t"), i("annotation", t._b({}, "annotation", t.annotation, !1), [i("a", [t._v("I")])]), t._v("\n\t\t\tcame from. It became a commentary on how, as a species, we impose ourselves on vast areas with determination.\n\t\t")], 1) : t._e(), t._v(" "), 2 === t.id ? i("p", [t._v("\n\t\t\tThe experience of\n\n\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/newYork.jpg",
          title: "New York",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/si50ghh7pp03mavw020171206184725/latest"
        }
      }, [i("a", [t._v("New York")])]), t._v("\n\n\t\t\tis a city synonymous with determination. Whether it propels a\n\t\t\t"), i("annotation", t._b({}, "annotation", t.annotation, !1), [i("a", [t._v("person")])]), t._v("\n\t\t\t closer to their dream or plummets them away from it, its perception will remain one of hope, ambition and endless possibility.\n\t\t")], 1) : t._e(), t._v(" "), 3 === t.id ? i("p", [i("annotation", t._b({}, "annotation", t.annotation, !1), [i("a", [t._v("Welcome")])]), t._v("\n\t\t\t to the future, bathed in grayscale. We left behind the green of our grandparentsâ€™ trees, we can only see the blue sky on our little screen. Most of us would like to talk about it; would like to change it.\n\t\t")], 1) : t._e(), t._v(" "), 4 === t.id ? i("p", [t._v("\n\t\t\tHope is a reconnection with nature in which we pause, paying attention to the small details that make life possible. Being humble allows us to accept the transformation we are a part of, reminding us of the impermanence of\n\t\t\t"), i("annotation", t._b({}, "annotation", t.annotation, !1), [i("a", [t._v("life")]), t._v(".\n\t\t\t")])], 1) : t._e()])])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("nav", {
        staticClass: "nav-wrapper",
        attrs: { role: "navigation", id: "navigation" }
      }, [i("div", {
        staticClass: "nav__overlay",
        on: { click: t.toggleNav }
      }), t._v(" "), i("div", {
        staticClass: "nav-circle",
        on: { click: t.toggleNav }
      }, [i("div", { staticClass: "pale-blue-dot cursor--open" }), t._v(" "), i("div", { staticClass: "nav-circle__wrapper" }, [i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/preface" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-preface.png", alt: "Preface" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M363.9,252.6l-7-4.3c-2.4-1.5-3.1-3.8-1.9-5.7c1.2-2,3.5-2.4,5.9-0.9l5.4,3.4l2.6-4.1l1.6,1L363.9,252.6z\n\t\t\t\t\t\t\t\t M360.3,243.3c-1.7-1-3-0.9-3.7,0.3c-0.7,1.2-0.3,2.4,1.4,3.4l5.1,3.2l2.3-3.7L360.3,243.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M340.3,231.8l1.4-3.9l1.8,0.7l-1.3,3.5c-0.3,0.9-0.1,1.3,0.8,1.6l7,2.6l1.7-4.7l1.8,0.7l-4.3,11.8l-8.1-3\n\t\t\t\t\t\t\t\tc-2.4-0.9-3.5-2.8-2.8-4.7c0.5-1.5,2-2.1,3.2-2.1l-0.1,0C340.1,233.8,339.9,233,340.3,231.8z M340.3,236.7\n\t\t\t\t\t\t\t\tc-0.5,1.3,0.2,2.3,1.8,2.9l6,2.2l1.4-3.9l-6-2.2C341.9,235.1,340.7,235.5,340.3,236.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M321.2,226.1l0.2-1.7l12.9,1.7l-1.6,12.5l-12.7-1.7l0.2-1.7l10.8,1.4l0.5-3.5l-9.7-1.3l0.2-1.7l9.7,1.3\n\t\t\t\t\t\t\t\tl0.5-3.9L321.2,226.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M315.6,236.9l-12.4,1l-0.1-1.7l10.5-0.9l-0.3-3.9l-9.3,0.8l-0.1-1.7l9.3-0.8l-0.4-5.3l1.9-0.2L315.6,236.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M287.9,232.3l8.3-2.4l0.8-3.6l2.1-0.6l-3.3,14l-2.4,0.7l-10.2-10.2l2.1-0.6L287.9,232.3z M289.3,233.7l4.9,5\n\t\t\t\t\t\t\t\tl1.6-6.9L289.3,233.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M282,237.7c1.8,3.3,0.5,7.1-4,9.6c-4.4,2.4-7.2,1-8.2-0.2l1.9-1c0.8,0.8,2.6,1.4,5.3-0.1l0.3-0.2\n\t\t\t\t\t\t\t\tc3.2-1.8,4.2-4.6,2.9-7s-4.3-3.1-7.5-1.4l-0.3,0.2c-2.8,1.5-3.2,3.3-3,4.4l-1.9,1c-0.5-1.5-0.2-4.6,4.2-7\n\t\t\t\t\t\t\t\tC276.3,233.4,280.2,234.4,282,237.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M251.6,253.4l-1.1-1.3l9.7-8.6l8.4,9.4l-9.6,8.5l-1.1-1.3l8.1-7.2l-2.4-2.7l-7.3,6.5l-1.1-1.3l7.3-6.5l-2.6-3\n\t\t\t\t\t\t\t\tL251.6,253.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M242,274.7c4.8,2.3,4.8,6,3.9,7.8c-1,2-3.8,4.4-8.6,2.1c-4.8-2.3-4.8-6-3.9-7.8\n\t\t\t\t\t\t\t\tC234.4,274.8,237.2,272.4,242,274.7z M237.7,282.8c3.7,1.8,6.7,1.5,7.8-0.7c0.9-1.9-0.5-3.9-3.9-5.5c-3.7-1.8-6.8-1.5-7.8,0.7\n\t\t\t\t\t\t\t\tC232.9,279.2,234.4,281.2,237.7,282.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M237.8,306.9l-0.3,8.3c-0.1,2.8-1.8,4.6-4.1,4.5c-2.3-0.1-3.8-1.9-3.7-4.7l0.3-6.4l-4.9-0.2l0.1-1.9\n\t\t\t\t\t\t\t\tL237.8,306.9z M231.4,314.6c-0.1,2,0.7,3,2.1,3.1s2.2-0.9,2.3-2.9l0.2-6l-4.4-0.2L231.4,314.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M231.5,337.5l-4.1,0.7l-0.3-1.9l3.7-0.7c1-0.2,1.2-0.6,1-1.6l-1.3-7.3l-4.9,0.9l-0.3-1.9l12.4-2.2l1.5,8.5\n\t\t\t\t\t\t\t\tc0.5,2.5-0.7,4.5-2.7,4.8c-1.6,0.3-2.8-0.6-3.4-1.7l0,0.1C233.3,336.7,232.8,337.3,231.5,337.5z M235.8,335.1\n\t\t\t\t\t\t\t\tc1.3-0.2,1.9-1.3,1.6-3l-1.1-6.3l-4.1,0.7l1.1,6.3C233.6,334.5,234.6,335.3,235.8,335.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M236.1,356.9l-1.6,0.6l-5-12l11.6-4.8l4.9,11.8l-1.6,0.6l-4.2-10l-3.3,1.4l3.8,9l-1.6,0.6l-3.8-9l-3.7,1.5\n\t\t\t\t\t\t\t\tL236.1,356.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M248.3,356.3l7.1,10.2l-1.4,1l-6-8.6l-3.2,2.2l5.3,7.7l-1.4,1l-5.3-7.7l-4.3,3l-1.1-1.6L248.3,356.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M258.2,382.5l-6.2-6l-3.5,1.1l-1.5-1.5l13.8-4.2l1.8,1.7l-3.7,14l-1.6-1.5L258.2,382.5z M258.7,380.7l1.8-6.8\n\t\t\t\t\t\t\t\tl-6.7,2.1L258.7,380.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M265.8,384.9c1.9-3.2,5.9-4,10.3-1.3c4.3,2.6,4.5,5.7,3.9,7.2l-1.8-1.1c0.3-1.1-0.1-2.9-2.8-4.5l-0.3-0.2\n\t\t\t\t\t\t\t\tc-3.1-1.9-6.1-1.3-7.6,1c-1.4,2.4-0.5,5.3,2.6,7.2l0.3,0.2c2.7,1.6,4.5,1.1,5.3,0.4l1.8,1.1c-1.1,1.2-3.9,2.5-8.2-0.1\n\t\t\t\t\t\t\t\tC264.9,392,263.8,388.1,265.8,384.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M294.6,403.4l-0.5,1.6l-12.3-4.1l4-12l12.1,4l-0.5,1.6l-10.3-3.4l-1.1,3.4l9.3,3.1l-0.5,1.6l-9.3-3.1\n\t\t\t\t\t\t\t\tl-1.3,3.8L294.6,403.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M317.9,401.1c-0.4-5.3,2.8-7.2,4.8-7.4c2.2-0.2,5.7,1.1,6.2,6.4c0.4,5.3-2.8,7.2-4.8,7.3\n\t\t\t\t\t\t\t\tC321.8,407.6,318.3,406.3,317.9,401.1z M327,400.7c-0.3-4.1-2.1-6.6-4.5-6.4c-2.1,0.2-3.1,2.4-2.8,6.1c0.3,4.1,2.1,6.6,4.5,6.4\n\t\t\t\t\t\t\t\tC326.3,406.6,327.3,404.4,327,400.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M347.8,388.6l7.3-3.8c2.5-1.3,4.8-0.8,5.9,1.3c1.1,2.1,0.2,4.2-2.3,5.6l-5.7,3l2.3,4.3l-1.7,0.9L347.8,388.6z\n\t\t\t\t\t\t\t\t M357.7,390.2c1.8-0.9,2.3-2.1,1.6-3.3s-1.9-1.5-3.6-0.6l-5.4,2.8l2,3.9L357.7,390.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M377.5,378.6l2.7,3.2l-1.5,1.2l-2.4-2.9c-0.6-0.7-1.1-0.7-1.8-0.1l-5.7,4.8l3.2,3.8l-1.5,1.2l-8.1-9.6\n\t\t\t\t\t\t\t\tl6.6-5.6c2-1.7,4.2-1.7,5.5-0.1c1,1.2,0.9,2.8,0.2,3.8l0.1,0C375.9,377.5,376.7,377.7,377.5,378.6z M373.2,376.2\n\t\t\t\t\t\t\t\tc-0.9-1-2.1-1-3.4,0.1l-4.9,4.1l2.7,3.2l4.9-4.1C373.8,378.4,374.1,377.1,373.2,376.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M392,364.9l1.3,1l-7.9,10.3l-10-7.6l7.8-10.2l1.3,1l-6.6,8.7l2.8,2.2l5.9-7.8l1.3,1l-5.9,7.8l3.2,2.4\n\t\t\t\t\t\t\t\tL392,364.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M385.3,354.7l5.3-11.2l1.5,0.7l-4.5,9.5l3.6,1.7l4-8.4l1.5,0.7l-4,8.4l4.8,2.3l-0.8,1.7L385.3,354.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M403.1,333l-2.1,8.4l2.7,2.5l-0.5,2.1l-10.6-9.8l0.6-2.4l13.9-3.8l-0.5,2.2L403.1,333z M401.2,333.5l-6.8,1.8\n\t\t\t\t\t\t\t\tl5.2,4.8L401.2,333.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M401.4,325.2c-3.7-0.1-6.4-3.1-6.3-8.2c0.1-5,2.7-6.7,4.3-7l0,2.2c-1.1,0.3-2.5,1.5-2.5,4.7l0,0.4\n\t\t\t\t\t\t\t\tc-0.1,3.7,1.9,6,4.7,6c2.8,0.1,4.8-2.2,4.9-5.8l0-0.4c0.1-3.1-1.3-4.4-2.4-4.8l0-2.2c1.6,0.3,4.1,2.1,4,7.1\n\t\t\t\t\t\t\t\tC407.9,322.3,405.1,325.2,401.4,325.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M402.9,291l1.7-0.3l2.6,12.7l-12.3,2.6l-2.6-12.5l1.7-0.3l2.2,10.6l3.5-0.7l-2-9.6l1.7-0.3l2,9.6l3.9-0.8\n\t\t\t\t\t\t\t\tL402.9,291z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M389.2,272c-4.4,3.1-7.6,1.2-8.8-0.5c-1.3-1.8-1.9-5.5,2.4-8.5c4.4-3.1,7.6-1.2,8.7,0.5\n\t\t\t\t\t\t\t\tC392.9,265.3,393.5,269,389.2,272z M384.3,264.3c-3.4,2.3-4.6,5.1-3.3,7.1c1.2,1.7,3.7,1.5,6.7-0.6c3.4-2.4,4.7-5.1,3.3-7.1\n\t\t\t\t\t\t\t\tC389.8,261.9,387.4,262.2,384.3,264.3z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "323.5", cy: "400.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "385.5", cy: "268.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "239.5", cy: "280.1", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/greetings" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-greetings.png", alt: "Greetings" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M237.9,220.6c2.6,2.7,2.3,6.8-1.5,10.4c-3.3,3.1-6.4,3.5-8.3,2l1.6-1.5c0.9,0.6,2.8,1,5.5-1.6l0.3-0.2\n\t\t\t\t\t \t\t\tc2.6-2.5,3.2-5.5,1.1-7.7c-2.1-2.2-5-1.9-7.7,0.7l-0.3,0.2c-2.7,2.6-3.2,4.9-2,6l0.2,0.2l4.2-4l1.2,1.2l-4.5,4.3\n\t\t\t\t\t \t\t\tc-0.7,0.7-1.5,0.7-2.2,0l-3.4-3.6l1.4-1.3l1.1,1.2c0-1,0.4-2.9,2.9-5.3C231.3,218,235.3,217.9,237.9,220.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M213.8,244.4l-3.3-2.5l1.2-1.5l3,2.3c0.8,0.6,1.2,0.5,1.8-0.3l4.5-5.9l-4-3l1.2-1.5l10,7.6l-5.2,6.9\n\t\t\t\t\t \t\t\tc-1.6,2.1-3.8,2.5-5.4,1.3c-1.3-1-1.4-2.5-1-3.6l0,0.1C215.7,245.1,214.8,245.1,213.8,244.4z M218.5,245.8\n\t\t\t\t\t \t\t\tc1.1,0.8,2.3,0.5,3.3-0.9l3.9-5.1l-3.3-2.5l-3.8,5.1C217.4,243.8,217.5,245.1,218.5,245.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M202.1,259.5l-1.5-0.8l6.3-11.3l11,6.1l-6.2,11.2l-1.5-0.8l5.3-9.5l-3.1-1.7l-4.8,8.5l-1.5-0.8l4.8-8.5\n\t\t\t\t\t \t\t\tl-3.5-1.9L202.1,259.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M195.4,276.6l-1.6-0.6l4.6-12.1l11.8,4.4l-4.5,12l-1.6-0.6l3.8-10.2l-3.3-1.3l-3.5,9.2l-1.6-0.6l3.5-9.2\n\t\t\t\t\t \t\t\tl-3.7-1.4L195.4,276.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M201.9,288.4l1.3-6l1.7,0.4l-3.1,13.8l-1.7-0.4l1.3-6l-10.6-2.4l0.4-1.9L201.9,288.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M201.5,300.1l-0.2,1.9l-12.5-1.5l0.2-1.9L201.5,300.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M200.5,320.6l-12.6-0.1l0-2.7l10.7-9l-10.6-0.1l0-1.9l12.6,0.1l0,2.7l-10.7,9l10.6,0.1L200.5,320.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M194.5,325.4c3.7-0.6,6.9,2.1,7.7,7.2c0.7,4.5-0.9,7.2-3.2,7.9l-0.3-2.1c1-0.3,2.4-1.7,1.8-5.4l-0.1-0.4\n\t\t\t\t\t \t\t\tc-0.5-3.6-2.6-5.8-5.7-5.3c-3,0.5-4.4,3-3.8,6.7l0.1,0.4c0.6,3.7,2.1,5.4,3.7,5.1l0.3,0l-0.9-5.7l1.7-0.3l0.9,6.1\n\t\t\t\t\t \t\t\tc0.1,1-0.3,1.6-1.3,1.7l-4.9,0.7l-0.3-1.9l1.6-0.2c-0.9-0.6-2.2-2-2.7-5.5C188.5,329.2,190.7,326,194.5,325.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M195.7,345.7l0.6,2.1c-1.2,0.5-2.1,1.9-1.1,5.1l0.1,0.3c1,3.2,2.2,3.8,3.1,3.5c0.9-0.3,1.3-1,0.9-3.1\n\t\t\t\t\t \t\t\tl-0.6-3.1c-0.6-3.5-0.1-5,2-5.6c1.8-0.6,4,0.6,5.3,4.8c1.3,4.1,0.4,6.7-1.8,7.6l-0.6-2.1c1.1-0.6,1.7-2.2,0.9-4.9l-0.1-0.3\n\t\t\t\t\t \t\t\tc-0.8-2.6-2-3.5-2.9-3.2c-0.9,0.3-1.2,1-0.8,3.3l0.5,3c0.6,3.1-0.1,4.8-2.1,5.5c-2.2,0.7-4.2-0.9-5.4-5\n\t\t\t\t\t \t\t\tC192.3,348.9,193.2,346.5,195.7,345.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M204.7,378.3l1.9,0.2l8.7-5l-1-1.7l0.2-0.1l3.2,2.2l-10.2,5.9l-0.8,1.7l-0.1,0.1l-1.9-3.3L204.7,378.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M222.8,394.2c2.7-2.6,6.8-2.2,10.4,1.5c3.1,3.3,3.4,6.4,2,8.3l-1.5-1.6c0.6-0.9,1-2.8-1.6-5.5l-0.2-0.3\n\t\t\t\t\t \t\t\tc-2.5-2.6-5.5-3.2-7.7-1.1c-2.2,2.1-1.9,5,0.7,7.7l0.2,0.3c2.6,2.7,4.8,3.2,6,2l0.2-0.2l-4-4.2l1.2-1.2l4.3,4.5\n\t\t\t\t\t \t\t\tc0.7,0.7,0.7,1.5,0,2.2l-3.6,3.4l-1.3-1.4l1.2-1.1c-1,0-2.9-0.4-5.3-2.9C220.1,400.7,220,396.8,222.8,394.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M246.4,418.3l-2.5,3.3l-1.5-1.2l2.3-3c0.6-0.8,0.5-1.2-0.3-1.8l-5.9-4.5l-3,4l-1.5-1.2l7.6-10l6.9,5.2\n\t\t\t\t\t \t\t\tc2,1.6,2.5,3.8,1.3,5.4c-1,1.3-2.5,1.4-3.6,1l0.1,0C247.2,416.5,247.2,417.3,246.4,418.3z M247.9,413.6c0.8-1.1,0.5-2.3-0.9-3.3\n\t\t\t\t\t \t\t\tl-5.1-3.9l-2.5,3.3l5.1,3.9C245.8,414.7,247.1,414.6,247.9,413.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M261.5,430l-0.8,1.5l-11.3-6.3l6.1-11l11.2,6.2l-0.8,1.5l-9.5-5.3l-1.7,3.1l8.5,4.8l-0.8,1.5l-8.5-4.8\n\t\t\t\t\t \t\t\tl-1.9,3.5L261.5,430z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M278.6,436.9l-0.6,1.6l-12.1-4.6l4.5-11.8l12,4.6l-0.6,1.6l-10.2-3.9l-1.3,3.3l9.2,3.5l-0.6,1.6l-9.2-3.5\n\t\t\t\t\t \t\t\tl-1.4,3.7L278.6,436.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M290.4,430.4l-6-1.3l0.4-1.7l13.8,3.1l-0.4,1.6l-6-1.3l-2.4,10.6L288,441L290.4,430.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M302.1,430.8l1.9,0.2l-1.5,12.5l-1.9-0.2L302.1,430.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M322.6,431.9l-0.2,12.6l-2.7,0l-8.9-10.7l-0.1,10.6l-1.9,0l0.2-12.6l2.7,0l8.9,10.7l0.1-10.6L322.6,431.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M327.4,437.9c-0.6-3.7,2.1-6.9,7.2-7.6c4.5-0.7,7.2,0.9,7.9,3.2l-2.1,0.3c-0.3-1-1.7-2.4-5.4-1.9l-0.4,0.1\n\t\t\t\t\t \t\t\tc-3.6,0.5-5.8,2.6-5.3,5.6s3,4.4,6.7,3.8l0.4-0.1c3.7-0.5,5.4-2.1,5.1-3.7l0-0.3l-5.8,0.9l-0.2-1.7l6.1-0.9c1-0.1,1.6,0.3,1.7,1.3\n\t\t\t\t\t \t\t\tl0.7,4.9l-1.9,0.3l-0.2-1.6c-0.6,0.8-2,2.1-5.5,2.7C331.2,443.9,327.9,441.7,327.4,437.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M347.7,436.8l2.1-0.6c0.5,1.2,1.9,2.1,5.1,1.1l0.3-0.1c3.2-1,3.8-2.2,3.5-3.1c-0.3-0.9-1-1.3-3.1-0.9\n\t\t\t\t\t \t\t\tl-3.1,0.5c-3.5,0.6-5,0.1-5.6-2c-0.6-1.8,0.6-4,4.8-5.3c4.1-1.3,6.7-0.4,7.6,1.8l-2.1,0.6c-0.6-1.1-2.2-1.7-4.9-0.9l-0.3,0.1\n\t\t\t\t\t \t\t\tc-2.6,0.8-3.5,2-3.2,2.9c0.3,0.9,1,1.2,3.3,0.8l3-0.5c3.1-0.6,4.8,0.1,5.5,2.1c0.7,2.2-0.9,4.2-5,5.4\n\t\t\t\t\t \t\t\tC350.9,440.2,348.5,439.2,347.7,436.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M380.3,427.8l0.2-1.9l-5-8.7l-1.7,1l-0.1-0.2l2.3-3.1l5.9,10.2l1.7,0.8l0.1,0.1l-3.3,1.9L380.3,427.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M396.2,409.8c-2.6-2.7-2.2-6.8,1.5-10.4c3.3-3.1,6.4-3.4,8.3-1.9l-1.6,1.5c-0.9-0.6-2.8-1-5.5,1.6l-0.3,0.2\n\t\t\t\t\t \t\t\tc-2.6,2.5-3.2,5.5-1.1,7.7c2.1,2.2,5,1.9,7.7-0.7l0.3-0.2c2.7-2.6,3.2-4.8,2.1-6l-0.2-0.2l-4.2,4l-1.2-1.2l4.5-4.3\n\t\t\t\t\t \t\t\tc0.7-0.7,1.5-0.7,2.2,0.1l3.4,3.6l-1.4,1.3l-1.1-1.2c0,1-0.4,2.9-3,5.3C402.8,412.5,398.9,412.6,396.2,409.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M420.5,386.3l3.3,2.6l-1.2,1.5l-3-2.3c-0.8-0.6-1.2-0.5-1.8,0.3l-4.5,5.9l4,3.1l-1.2,1.5l-10-7.7l5.3-6.9\n\t\t\t\t\t \t\t\tc1.6-2,3.8-2.5,5.4-1.3c1.3,1,1.4,2.5,1,3.6l0-0.1C418.6,385.5,419.5,385.5,420.5,386.3z M415.8,384.8c-1.1-0.8-2.3-0.5-3.3,0.9\n\t\t\t\t\t \t\t\tl-3.9,5.1l3.3,2.6l3.9-5.1C416.9,386.8,416.8,385.5,415.8,384.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M432.2,371.2l1.5,0.8l-6.3,11.3l-11-6.1l6.2-11.2l1.5,0.8l-5.3,9.5l3.1,1.7l4.8-8.5l1.5,0.8l-4.8,8.5l3.5,1.9\n\t\t\t\t\t \t\t\tL432.2,371.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M439.1,354.1l1.6,0.6l-4.6,12.1l-11.8-4.5l4.6-11.9l1.6,0.6l-3.9,10.2l3.3,1.3l3.5-9.1l1.6,0.6l-3.5,9.1\n\t\t\t\t\t \t\t\tl3.7,1.4L439.1,354.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M432.7,342.3l-1.4,6l-1.6-0.4l3.2-13.8l1.6,0.4l-1.4,6l10.6,2.4l-0.4,1.9L432.7,342.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M433.1,330.6l0.2-1.9l12.5,1.6l-0.2,1.9L433.1,330.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M434.2,310.1l12.6,0.2l0,2.7l-10.7,8.9l10.6,0.2l0,1.9l-12.6-0.2l0-2.7l10.7-8.9l-10.6-0.2L434.2,310.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M440.3,305.3c-3.7,0.5-6.9-2.1-7.6-7.2c-0.7-4.5,0.9-7.2,3.2-7.9l0.3,2.1c-1,0.3-2.4,1.7-1.9,5.4l0.1,0.4\n\t\t\t\t\t \t\t\tc0.5,3.6,2.6,5.8,5.6,5.3c3-0.4,4.4-3,3.9-6.7l-0.1-0.4c-0.5-3.7-2.1-5.4-3.7-5.2l-0.3,0l0.8,5.8l-1.7,0.2l-0.9-6.1\n\t\t\t\t\t \t\t\tc-0.1-1,0.3-1.6,1.3-1.7l4.9-0.7l0.3,1.9l-1.6,0.2c0.8,0.6,2.1,2.1,2.6,5.5C446.3,301.5,444.1,304.8,440.3,305.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M439.2,285l-0.6-2.1c1.2-0.5,2.1-1.9,1.1-5.1l-0.1-0.3c-1-3.2-2.2-3.8-3.1-3.5c-0.9,0.3-1.3,1-0.9,3.1\n\t\t\t\t\t \t\t\tl0.5,3.1c0.6,3.5,0.1,5-2.1,5.6c-1.8,0.5-4-0.6-5.2-4.8c-1.3-4.2-0.4-6.7,1.8-7.6l0.6,2.1c-1.1,0.6-1.7,2.2-0.9,4.9l0.1,0.3\n\t\t\t\t\t \t\t\tc0.8,2.6,2,3.5,2.9,3.2c0.9-0.3,1.2-1,0.8-3.3l-0.5-3c-0.6-3.1,0.1-4.9,2.1-5.5c2.2-0.7,4.2,0.9,5.4,5\n\t\t\t\t\t \t\t\tC442.7,281.8,441.7,284.2,439.2,285z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M430.4,252.4l-1.9-0.2l-8.7,5l0.9,1.7l-0.2,0.1l-3.1-2.3l10.2-5.9l0.8-1.7l0.1-0.1l1.9,3.3L430.4,252.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M412.4,236.4c-2.8,2.6-6.8,2.2-10.4-1.6c-3.1-3.3-3.4-6.4-1.9-8.3l1.5,1.6c-0.6,0.8-1,2.8,1.5,5.5l0.2,0.3\n\t\t\t\t\t \t\t\tc2.5,2.6,5.4,3.3,7.7,1.2c2.2-2.1,1.9-5-0.7-7.7l-0.2-0.3c-2.6-2.7-4.8-3.2-6-2.1l-0.2,0.2l4,4.2l-1.2,1.2l-4.3-4.5\n\t\t\t\t\t \t\t\tc-0.7-0.7-0.7-1.5,0.1-2.2l3.6-3.4l1.3,1.4l-1.2,1.1c1,0,2.9,0.5,5.3,3C415.1,229.8,415.2,233.8,412.4,236.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M388.9,212.1l2.6-3.3l1.5,1.2l-2.3,3c-0.6,0.8-0.5,1.2,0.3,1.8l5.9,4.5l3.1-4l1.5,1.2l-7.7,10l-6.8-5.3\n\t\t\t\t\t \t\t\tc-2-1.6-2.5-3.8-1.3-5.4c1-1.3,2.5-1.4,3.6-1l-0.1,0C388.1,213.9,388.1,213.1,388.9,212.1z M387.4,216.8c-0.8,1.1-0.5,2.3,0.8,3.3\n\t\t\t\t\t \t\t\tl5,3.9l2.6-3.3l-5-3.9C389.5,215.7,388.2,215.8,387.4,216.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M373.9,200.3l0.8-1.5l11.3,6.3l-6.2,11l-11.2-6.3l0.8-1.5l9.5,5.3l1.7-3.1l-8.5-4.8l0.8-1.5l8.5,4.8l1.9-3.5\n\t\t\t\t\t \t\t\tL373.9,200.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M356.8,193.4l0.6-1.6l12.1,4.7l-4.6,11.8l-11.9-4.6l0.6-1.6l10.1,3.9l1.3-3.3l-9.1-3.5l0.6-1.6l9.1,3.5\n\t\t\t\t\t \t\t\tl1.4-3.7L356.8,193.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M345,199.8l6,1.4l-0.4,1.6l-13.8-3.2l0.4-1.6l6,1.4l2.5-10.6l1.9,0.4L345,199.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M333.3,199.3l-1.9-0.2l1.6-12.5l1.9,0.2L333.3,199.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M312.8,198.1l0.2-12.6l2.7,0l8.9,10.8l0.2-10.6l1.9,0l-0.2,12.6l-2.7,0l-8.9-10.8l-0.2,10.6L312.8,198.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M308.1,192c0.5,3.7-2.1,6.9-7.3,7.6c-4.5,0.6-7.2-0.9-7.9-3.2l2.1-0.3c0.3,1,1.7,2.4,5.4,1.9l0.4-0.1\n\t\t\t\t\t \t\t\tc3.6-0.5,5.8-2.6,5.4-5.6s-2.9-4.4-6.6-3.9l-0.4,0.1c-3.7,0.5-5.4,2.1-5.2,3.7l0,0.3l5.8-0.8l0.2,1.7l-6.1,0.9\n\t\t\t\t\t \t\t\tc-1,0.1-1.6-0.3-1.7-1.3l-0.7-4.9l1.9-0.3l0.2,1.6c0.6-0.8,2.1-2.1,5.5-2.6C304.3,186,307.5,188.3,308.1,192z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M287.8,193l-2.1,0.6c-0.5-1.2-1.9-2.1-5.1-1.1l-0.3,0.1c-3.2,1-3.8,2.2-3.5,3.1c0.3,0.9,1,1.3,3.1,0.9\n\t\t\t\t\t \t\t\tl3.1-0.5c3.5-0.6,5-0.1,5.6,2.1c0.5,1.8-0.6,4-4.8,5.2c-4.2,1.3-6.7,0.4-7.6-1.8l2.1-0.6c0.6,1.1,2.2,1.7,4.9,0.9l0.3-0.1\n\t\t\t\t\t \t\t\tc2.6-0.8,3.5-2,3.2-2.9c-0.3-0.9-0.9-1.2-3.3-0.8l-3,0.5c-3.1,0.5-4.8-0.1-5.5-2.1c-0.7-2.2,0.9-4.2,5-5.4\n\t\t\t\t\t \t\t\tC284.5,189.6,286.9,190.6,287.8,193z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M255.1,201.8l-0.2,1.9l4.9,8.7l1.7-0.9l0.1,0.2l-2.3,3.1l-5.8-10.3l-1.7-0.8l-0.1-0.1l3.3-1.9L255.1,201.8z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "378.5", cy: "421.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "211.5", cy: "376.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "256.5", cy: "208.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "423.5", cy: "254.1", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/sounds" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-sounds.png", alt: "Sounds" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M216.2,188.8l-1.6,1.4c-0.9-0.9-2.5-1.2-5.1,1l-0.3,0.2c-2.5,2.2-2.6,3.6-2,4.2c0.6,0.7,1.4,0.8,3.2-0.4\n\t\t\t\t\t \t\t\tl2.6-1.7c2.9-2,4.5-2.1,6-0.4c1.2,1.4,1,3.9-2.3,6.7s-6,3.1-7.7,1.4l1.6-1.4c1,0.8,2.7,0.7,4.8-1.2l0.3-0.2c2.1-1.8,2.4-3.2,1.8-4\n\t\t\t\t\t \t\t\tc-0.6-0.7-1.4-0.7-3.4,0.6l-2.5,1.7c-2.6,1.8-4.5,1.9-5.9,0.3c-1.5-1.8-0.8-4.2,2.4-7C211.9,186.9,214.5,186.8,216.2,188.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M205.1,201.3c3.1,2.8,2.3,7.1-0.9,10.5c-3.1,3.4-7.3,4.5-10.4,1.6c-3.1-2.8-2.3-7.1,0.9-10.5\n\t\t\t\t\t \t\t\tC197.9,199.6,202.1,198.5,205.1,201.3z M195.9,204.3c-2.3,2.4-3,5.6-0.7,7.8c2.3,2.1,5.4,1.2,7.7-1.2l0.2-0.3\n\t\t\t\t\t \t\t\tc2.3-2.4,3-5.6,0.7-7.8c-2.3-2.1-5.4-1.2-7.7,1.2L195.9,204.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M191,215.9l5.7,4.2l-1.1,1.6l-5.6-4.1c-2.3-1.7-4.3-1.2-6,1.1l-0.2,0.3c-1.7,2.3-1.5,4.4,0.7,6l5.6,4.1\n\t\t\t\t\t \t\t\tl-1.1,1.6l-5.7-4.2c-2.8-2.1-3.2-5.2-0.7-8.6C185.1,214.2,188.2,213.8,191,215.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M180,245.7l-10.9-6.3l1.3-2.3l13.7-2.6l-9.2-5.3l1-1.7l10.9,6.3l-1.3,2.3l-13.7,2.6l9.2,5.3L180,245.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M178.1,249.3l-3,7c-1.7,3.9-4.9,5.5-8.6,4c-3.6-1.6-4.7-5.1-3-9l3-7L178.1,249.3z M165.2,251.7\n\t\t\t\t\t \t\t\tc-1.4,3.2-0.7,5.6,2.1,6.8c2.8,1.2,5,0.1,6.4-3.2l2.1-5l-8.5-3.6L165.2,251.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M163.5,262.3l-0.6,2.1c-1.3-0.3-2.8,0.4-3.7,3.6l-0.1,0.3c-1,3.2-0.3,4.4,0.6,4.6c0.9,0.3,1.6-0.1,2.5-2.1\n\t\t\t\t\t \t\t\tl1.3-2.8c1.4-3.2,2.7-4.2,4.8-3.5c1.8,0.5,2.9,2.7,1.7,6.9c-1.3,4.2-3.4,5.8-5.8,5.3l0.6-2.1c1.3,0.2,2.6-0.9,3.5-3.6l0.1-0.3\n\t\t\t\t\t \t\t\tc0.8-2.6,0.3-4-0.6-4.3c-0.9-0.3-1.5,0.1-2.5,2.3l-1.2,2.8c-1.3,2.9-2.8,4-4.8,3.4c-2.2-0.7-2.9-3.1-1.7-7.2\n\t\t\t\t\t \t\t\tC158.8,263.1,160.9,261.6,163.5,262.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M153.5,290.5c3.5,4.2,5.8,6.9,8.5,7.3c1.5,0.2,2.5-0.4,2.6-1.8c0.1-1.1-0.4-2-1.3-2.1\n\t\t\t\t\t \t\t\tc-0.7-0.1-1.2,0.2-1.6,0.7l-1.2-1.5c0.6-0.7,1.5-1,2.4-0.9c1.6,0.2,2.6,1.8,2.3,4c-0.3,2.3-1.6,3.6-3.4,3.4\n\t\t\t\t\t \t\t\tc-2.7-0.4-5-3.4-8.3-7.9l-0.9,6.6l-1.2,0.5l-0.2,0l1-7.9L153.5,290.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M154.3,314.8l0.1,2.2c-1.3,0.2-2.5,1.3-2.4,4.6l0,0.4c0.1,3.3,1.2,4.2,2.1,4.2c0.9,0,1.5-0.6,1.7-2.7l0.3-3.1\n\t\t\t\t\t \t\t\tc0.3-3.5,1.2-4.8,3.4-4.9c1.9-0.1,3.7,1.6,3.8,6c0.1,4.3-1.3,6.6-3.7,6.9l-0.1-2.2c1.2-0.3,2.2-1.7,2.1-4.5l0-0.4\n\t\t\t\t\t \t\t\tc-0.1-2.8-1-3.9-2-3.9c-0.9,0-1.4,0.6-1.6,3l-0.3,3c-0.3,3.1-1.4,4.7-3.5,4.7c-2.3,0.1-3.8-2-3.9-6.3\n\t\t\t\t\t \t\t\tC150.1,317,151.7,314.9,154.3,314.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M157.2,331.3c4.1-0.6,6.9,2.7,7.6,7.2c0.7,4.6-1.1,8.5-5.2,9.1c-4.1,0.6-6.9-2.7-7.6-7.2\n\t\t\t\t\t \t\t\tC151.3,335.8,153.1,331.9,157.2,331.3z M153.7,340.3c0.5,3.3,2.5,5.8,5.6,5.4c3.1-0.5,4.3-3.5,3.8-6.8l-0.1-0.4\n\t\t\t\t\t \t\t\tc-0.5-3.3-2.5-5.8-5.6-5.4c-3.1,0.5-4.3,3.5-3.8,6.8L153.7,340.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M159.7,351.5l6.9-1.8l0.5,1.9l-6.7,1.8c-2.7,0.7-3.6,2.6-2.9,5.3l0.1,0.3c0.7,2.7,2.5,3.9,5.2,3.2l6.7-1.8\n\t\t\t\t\t \t\t\tl0.5,1.9l-6.9,1.8c-3.3,0.9-6.1-0.7-7.2-4.8C154.7,355.1,156.3,352.4,159.7,351.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M176.1,378.7l-11.7,4.6l-1-2.5l6.5-12.3l-9.8,3.9l-0.7-1.8l11.7-4.6l1,2.5l-6.5,12.3l9.8-3.9L176.1,378.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M177.8,382.4l3.6,6.8c2,3.7,1.2,7.3-2.2,9.2c-3.5,1.9-6.9,0.5-8.9-3.2l-3.6-6.8L177.8,382.4z M171.6,394\n\t\t\t\t\t \t\t\tc1.7,3.1,3.9,4.1,6.6,2.6c2.7-1.4,3.2-3.9,1.5-6.9l-2.5-4.8l-8.1,4.3L171.6,394z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M178.8,402l1.2,1.8c-1,0.8-1.4,2.4,0.5,5.2l0.2,0.3c1.9,2.8,3.3,2.9,4,2.4c0.8-0.5,0.9-1.3-0.1-3.2l-1.4-2.8\n\t\t\t\t\t \t\t\tc-1.6-3.1-1.6-4.7,0.3-6c1.5-1.1,4-0.6,6.4,3c2.5,3.6,2.4,6.3,0.5,7.8l-1.2-1.8c0.9-0.9,1-2.6-0.6-4.9l-0.2-0.3\n\t\t\t\t\t \t\t\tc-1.6-2.3-2.9-2.8-3.8-2.2c-0.8,0.5-0.9,1.3,0.2,3.4l1.4,2.7c1.5,2.8,1.4,4.7-0.4,5.8c-1.9,1.3-4.2,0.4-6.7-3.2\n\t\t\t\t\t \t\t\tC176.5,406.1,176.7,403.5,178.8,402z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M194.6,427.4c5.4-0.1,9-0.2,11-2.1c1.1-1.1,1.2-2.2,0.3-3.2c-0.8-0.8-1.8-0.9-2.4-0.3\n\t\t\t\t\t \t\t\tc-0.5,0.5-0.6,1.1-0.5,1.7l-1.9-0.1c-0.1-0.9,0.2-1.8,0.8-2.4c1.2-1.1,3-0.9,4.5,0.7c1.6,1.7,1.8,3.5,0.5,4.7\n\t\t\t\t\t \t\t\tc-1.9,1.9-5.7,1.8-11.3,1.6l4.6,4.8l-0.4,1.2l-0.1,0.1l-5.5-5.8L194.6,427.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M214,441.9l1.7,1.3c-0.7,1.1-0.6,2.7,2.1,4.7l0.3,0.2c2.7,2,4,1.7,4.6,1c0.5-0.7,0.4-1.6-1.1-3l-2.2-2.1\n\t\t\t\t\t \t\t\tc-2.6-2.4-3-4-1.7-5.7c1.1-1.5,3.6-1.8,7.1,0.8c3.5,2.6,4.3,5.2,3,7.2l-1.7-1.3c0.6-1.1,0.1-2.8-2.2-4.5l-0.3-0.2\n\t\t\t\t\t \t\t\tc-2.2-1.6-3.7-1.7-4.3-0.9c-0.6,0.8-0.4,1.5,1.3,3.1l2.2,2.1c2.3,2.2,2.8,4,1.5,5.7c-1.4,1.9-3.9,1.7-7.3-0.9\n\t\t\t\t\t \t\t\tC213.1,446.5,212.5,444,214,441.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M228.7,449.9c2.1-3.6,6.4-3.7,10.4-1.4c4,2.3,6,6.2,3.9,9.8c-2.1,3.6-6.4,3.7-10.4,1.4\n\t\t\t\t\t \t\t\tC228.6,457.4,226.6,453.5,228.7,449.9z M233.6,458.3c2.9,1.7,6.1,1.7,7.7-1s0-5.6-2.9-7.2l-0.3-0.2c-2.9-1.7-6.1-1.7-7.7,1\n\t\t\t\t\t \t\t\tc-1.6,2.7,0,5.6,2.9,7.2L233.6,458.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M246,460.6l2.8-6.5l1.8,0.8l-2.8,6.3c-1.1,2.6-0.3,4.4,2.4,5.6l0.3,0.1c2.6,1.1,4.6,0.5,5.7-2.1l2.8-6.3\n\t\t\t\t\t \t\t\tl1.8,0.8l-2.8,6.5c-1.4,3.2-4.4,4.3-8.3,2.6C245.7,466.7,244.6,463.8,246,460.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M277.5,464.8l-3.7,12l-2.5-0.8l-5.5-12.8l-3.1,10.1l-1.8-0.6l3.7-12l2.5,0.8l5.5,12.8l3.1-10.1L277.5,464.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M281.5,465.7l7.5,1.4c4.2,0.8,6.5,3.6,5.8,7.5c-0.7,3.9-3.9,5.7-8.1,4.9l-7.5-1.4L281.5,465.7z M286.7,477.8\n\t\t\t\t\t \t\t\tc3.5,0.6,5.6-0.5,6.2-3.5c0.6-3-1-4.9-4.5-5.5l-5.3-1l-1.7,9.1L286.7,477.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M297.4,477.2l2.2,0.2c0,1.3,1,2.6,4.3,2.9l0.4,0c3.3,0.2,4.3-0.7,4.4-1.6c0.1-0.9-0.5-1.6-2.5-2l-3-0.6\n\t\t\t\t\t \t\t\tc-3.5-0.7-4.7-1.7-4.5-3.9c0.1-1.9,2-3.5,6.4-3.2c4.3,0.3,6.4,2,6.4,4.4l-2.2-0.2c-0.1-1.3-1.4-2.4-4.2-2.6l-0.4,0\n\t\t\t\t\t \t\t\tc-2.7-0.2-4,0.6-4.1,1.6c-0.1,0.9,0.5,1.5,2.8,1.9l3,0.6c3.1,0.6,4.5,1.8,4.3,3.9c-0.2,2.3-2.4,3.5-6.6,3.2\n\t\t\t\t\t \t\t\tC299.2,481.5,297.3,479.8,297.4,477.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M327.1,480.7c3.3-4.3,5.5-7.2,5.3-9.9c-0.1-1.5-0.9-2.3-2.3-2.2c-1.1,0.1-1.8,0.8-1.7,1.7\n\t\t\t\t\t \t\t\tc0.1,0.7,0.4,1.2,1,1.4l-1.3,1.5c-0.8-0.5-1.3-1.2-1.4-2.1c-0.1-1.6,1.2-2.9,3.4-3.1c2.3-0.2,3.9,0.8,4,2.5\n\t\t\t\t\t \t\t\tc0.2,2.7-2.2,5.6-5.9,9.8l6.7-0.6l0.7,1.1l0,0.2l-8,0.7L327.1,480.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M350.6,474.6l2.1-0.5c0.4,1.2,1.8,2.2,5,1.3l0.3-0.1c3.2-0.8,3.9-2.1,3.6-2.9c-0.2-0.9-0.9-1.3-3-1l-3.1,0.4\n\t\t\t\t\t \t\t\tc-3.5,0.5-5-0.1-5.5-2.3c-0.5-1.8,0.8-3.9,5-5c4.2-1.1,6.7-0.1,7.5,2.1l-2.1,0.5c-0.5-1.2-2.1-1.8-4.9-1.1l-0.3,0.1\n\t\t\t\t\t \t\t\tc-2.7,0.7-3.6,1.8-3.3,2.8c0.2,0.9,0.9,1.3,3.3,0.9l3-0.4c3.1-0.4,4.8,0.3,5.4,2.3c0.6,2.2-1.1,4.1-5.2,5.2\n\t\t\t\t\t \t\t\tC353.7,478.2,351.3,477.1,350.6,474.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M366.1,468.2c-1.5-3.9,1.1-7.4,5.4-9c4.3-1.7,8.5-0.8,10,3.1c1.5,3.9-1.1,7.4-5.4,9\n\t\t\t\t\t \t\t\tC371.8,472.9,367.6,472.1,366.1,468.2z M375.7,469.6c3.1-1.2,5.1-3.7,4-6.7c-1.1-2.9-4.4-3.5-7.5-2.3l-0.3,0.1\n\t\t\t\t\t \t\t\tc-3.1,1.2-5.1,3.7-4,6.7c1.1,2.9,4.4,3.5,7.4,2.3L375.7,469.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M385.2,461.3l-3.3-6.3l1.7-0.9l3.2,6.1c1.3,2.5,3.3,3,5.8,1.6l0.3-0.2c2.5-1.3,3.3-3.3,2-5.7l-3.2-6.1\n\t\t\t\t\t \t\t\tl1.7-0.9l3.3,6.3c1.6,3.1,0.6,6.1-3.1,8.1C389.8,465.3,386.8,464.4,385.2,461.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M408.1,439.3l7.1,10.4l-2.2,1.5l-13.4-3.7l5.9,8.8l-1.6,1.1l-7.1-10.4l2.2-1.5l13.5,3.7l-5.9-8.8L408.1,439.3\n\t\t\t\t\t \t\t\tz" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M411.4,436.8l5.8-5c3.2-2.8,6.9-2.8,9.4,0.2c2.6,3,2,6.6-1.2,9.4l-5.8,5L411.4,436.8z M424,440.3\n\t\t\t\t\t \t\t\tc2.7-2.3,3.1-4.7,1.1-7c-2-2.3-4.5-2.2-7.1,0.1l-4.1,3.5l6,7L424,440.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M430.3,431.5l1.5-1.6c1,0.8,2.7,0.9,4.9-1.6l0.2-0.3c2.3-2.5,2.1-3.8,1.5-4.4c-0.7-0.6-1.5-0.6-3.1,0.8\n\t\t\t\t\t \t\t\tl-2.4,2c-2.7,2.3-4.3,2.6-5.9,1c-1.4-1.3-1.5-3.8,1.5-6.9c3-3.2,5.6-3.7,7.5-2.3l-1.5,1.6c-1.1-0.7-2.8-0.4-4.7,1.7l-0.2,0.3\n\t\t\t\t\t \t\t\tc-1.9,2-2,3.5-1.3,4.2c0.7,0.6,1.4,0.6,3.3-1l2.3-1.9c2.4-2,4.2-2.3,5.8-0.9c1.7,1.6,1.3,4.1-1.6,7.2\n\t\t\t\t\t \t\t\tC434.8,432.8,432.2,433.2,430.3,431.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M451.5,410.5c-1.3-5.3-2.2-8.8-4.4-10.3c-1.3-0.9-2.4-0.7-3.1,0.4c-0.6,0.9-0.5,1.9,0.3,2.4\n\t\t\t\t\t \t\t\tc0.6,0.4,1.2,0.4,1.8,0.1l0.4,1.9c-0.9,0.3-1.8,0.2-2.5-0.3c-1.4-0.9-1.5-2.7-0.3-4.6c1.3-2,3-2.6,4.5-1.6c2.2,1.5,3,5.2,4,10.7\n\t\t\t\t\t \t\t\tl3.7-5.6l1.3,0.1l0.1,0.1l-4.4,6.7L451.5,410.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M461.5,388.4l0.9-2c1.2,0.4,2.8,0,4.2-3.1l0.1-0.3c1.4-3.1,0.8-4.3,0-4.7c-0.8-0.4-1.6-0.1-2.7,1.7l-1.6,2.7\n\t\t\t\t\t \t\t\tc-1.8,3-3.2,3.8-5.2,2.9c-1.7-0.8-2.6-3.1-0.8-7c1.8-4,4.1-5.3,6.4-4.5l-0.9,2c-1.2-0.3-2.7,0.6-3.9,3.1l-0.1,0.3\n\t\t\t\t\t \t\t\tc-1.1,2.5-0.8,4,0.1,4.4c0.9,0.4,1.5,0.1,2.8-2l1.5-2.6c1.6-2.7,3.3-3.6,5.2-2.7c2.1,0.9,2.5,3.4,0.8,7.3\n\t\t\t\t\t \t\t\tC466.2,388.2,463.9,389.4,461.5,388.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M466.1,372.3c-4-1.3-5.1-5.4-3.7-9.8c1.4-4.4,4.7-7.2,8.7-5.9s5.1,5.4,3.7,9.8\n\t\t\t\t\t \t\t\tC473.4,370.7,470.1,373.5,466.1,372.3z M473.2,365.7c1-3.2,0.3-6.3-2.7-7.3c-3-0.9-5.4,1.3-6.4,4.4l-0.1,0.3\n\t\t\t\t\t \t\t\tc-1,3.2-0.3,6.3,2.7,7.3c3,0.9,5.4-1.3,6.4-4.4L473.2,365.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M472.7,353l-7-1.3l0.4-1.9l6.8,1.3c2.8,0.5,4.4-0.7,4.9-3.5l0.1-0.4c0.5-2.8-0.5-4.6-3.3-5.1l-6.8-1.3\n\t\t\t\t\t \t\t\tl0.4-1.9l7,1.3c3.4,0.7,5.2,3.3,4.4,7.5C478.7,351.9,476.1,353.6,472.7,353z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M469.7,321.4l12.6,1l-0.2,2.7l-11.2,8.2l10.6,0.8l-0.1,1.9l-12.6-1l0.2-2.7l11.2-8.2l-10.6-0.8L469.7,321.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M469.8,317.3l-0.3-7.7c-0.2-4.2,2.1-7.1,6-7.3s6.4,2.5,6.6,6.8l0.3,7.7L469.8,317.3z M480.4,309.6\n\t\t\t\t\t \t\t\tc-0.1-3.5-1.8-5.4-4.8-5.2c-3.1,0.1-4.5,2.1-4.4,5.6l0.2,5.4l9.2-0.4L480.4,309.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M477.5,299.2l-0.3-2.1c1.3-0.3,2.3-1.5,1.8-4.8l-0.1-0.4c-0.5-3.3-1.6-4.1-2.5-3.9c-0.9,0.1-1.4,0.8-1.4,2.9\n\t\t\t\t\t \t\t\tl0.1,3.1c0.1,3.5-0.7,4.9-2.9,5.2c-1.9,0.3-3.8-1.2-4.5-5.5s0.6-6.7,2.9-7.3l0.3,2.1c-1.2,0.4-2,1.9-1.6,4.7l0.1,0.4\n\t\t\t\t\t \t\t\tc0.4,2.7,1.4,3.8,2.4,3.6c0.9-0.1,1.3-0.8,1.3-3.2l-0.1-3c-0.1-3.2,0.8-4.8,2.9-5.1c2.3-0.3,4,1.5,4.6,5.8\n\t\t\t\t\t \t\t\tC481.4,296.6,480,298.8,477.5,299.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M474.4,269.5c-4.9-2.3-8.2-3.8-10.8-3c-1.5,0.5-2.1,1.4-1.6,2.7c0.3,1.1,1.2,1.6,2.1,1.3\n\t\t\t\t\t \t\t\tc0.7-0.2,1-0.7,1.2-1.3l1.7,0.9c-0.3,0.9-0.9,1.5-1.8,1.8c-1.6,0.5-3.1-0.5-3.8-2.6c-0.7-2.2-0.1-4,1.6-4.5\n\t\t\t\t\t \t\t\tc2.6-0.8,5.9,0.9,10.9,3.6l-2-6.4l0.9-0.9l0.2,0l2.4,7.6L474.4,269.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M463.3,247.9l-1-1.9c1.1-0.7,1.7-2.2,0.2-5.2l-0.2-0.3c-1.5-3-2.9-3.3-3.7-2.9c-0.8,0.4-1.1,1.2-0.3,3.2\n\t\t\t\t\t \t\t\tl1.1,2.9c1.2,3.3,1,4.9-1,5.9c-1.7,0.9-4,0.1-6-3.8c-2-3.9-1.6-6.5,0.4-7.8l1,1.9c-1,0.8-1.3,2.5,0,5l0.2,0.3\n\t\t\t\t\t \t\t\tc1.3,2.4,2.6,3.1,3.5,2.6c0.8-0.4,1-1.2,0.2-3.4l-1.1-2.8c-1.1-3-0.8-4.8,1.1-5.8c2.1-1.1,4.3,0.2,6.2,4\n\t\t\t\t\t \t\t\tC466.1,244.1,465.6,246.6,463.3,247.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M453.6,234.2c-3.5,2.3-7.4,0.6-10-3.3c-2.6-3.8-2.7-8.1,0.8-10.5c3.5-2.3,7.4-0.6,10,3.3\n\t\t\t\t\t \t\t\tC457,227.6,457.1,231.9,453.6,234.2z M452.9,224.5c-1.8-2.8-4.8-4.2-7.4-2.4c-2.6,1.8-2.4,5-0.6,7.8l0.2,0.3\n\t\t\t\t\t \t\t\tc1.8,2.8,4.8,4.2,7.4,2.4c2.6-1.8,2.4-5,0.6-7.8L452.9,224.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M442.7,217.1l-5.4,4.6l-1.3-1.5l5.3-4.5c2.1-1.8,2.2-3.9,0.3-6.1l-0.2-0.3c-1.8-2.2-3.9-2.5-6-0.6l-5.3,4.5\n\t\t\t\t\t \t\t\tl-1.3-1.5l5.4-4.6c2.6-2.2,5.8-2,8.6,1.3C445.6,211.7,445.3,214.8,442.7,217.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M416.1,199.6l8.6-9.2l1.9,1.8l-0.6,13.9l7.2-7.7l1.4,1.3l-8.6,9.2l-1.9-1.8l0.6-13.9l-7.2,7.7L416.1,199.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M413,197l-6.2-4.6c-3.4-2.5-4.3-6.1-1.9-9.3c2.4-3.2,6-3.4,9.4-0.9l6.2,4.6L413,197z M413.6,183.9\n\t\t\t\t\t \t\t\tc-2.8-2.1-5.3-2-7.1,0.5c-1.8,2.5-1.2,4.8,1.6,6.9l4.3,3.2l5.5-7.4L413.6,183.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M403.7,179.7l-1.9-1.1c0.5-1.2,0.3-2.8-2.6-4.5l-0.3-0.2c-2.9-1.7-4.2-1.3-4.6-0.5c-0.5,0.8-0.3,1.6,1.4,2.9\n\t\t\t\t\t \t\t\tl2.5,1.9c2.8,2.1,3.4,3.6,2.3,5.5c-0.9,1.6-3.3,2.2-7.1,0.1c-3.7-2.2-4.9-4.6-3.8-6.8l1.9,1.1c-0.4,1.2,0.3,2.8,2.7,4.2l0.3,0.2\n\t\t\t\t\t \t\t\tc2.4,1.4,3.8,1.2,4.3,0.4c0.5-0.8,0.2-1.5-1.7-3l-2.4-1.8c-2.5-1.9-3.2-3.6-2.2-5.4c1.2-2,3.7-2.2,7.4,0\n\t\t\t\t\t \t\t\tC404,175,404.9,177.4,403.7,179.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M378.6,163.5c-4.9,2.4-8.1,4.1-9,6.6c-0.5,1.4-0.2,2.5,1.1,3c1,0.4,2,0.1,2.3-0.8c0.2-0.6,0.1-1.2-0.3-1.8\n\t\t\t\t\t \t\t\tl1.8-0.8c0.5,0.8,0.6,1.7,0.3,2.5c-0.6,1.5-2.3,2.1-4.4,1.3c-2.2-0.8-3.2-2.4-2.5-4.1c1-2.5,4.4-4.1,9.6-6.3l-6.2-2.4l-0.2-1.3\n\t\t\t\t\t \t\t\tl0.1-0.2l7.5,2.8L378.6,163.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M354.8,158.8l-2.1-0.4c0.1-1.3-0.7-2.7-3.9-3.4l-0.4-0.1c-3.3-0.7-4.4,0.2-4.6,1c-0.2,0.9,0.3,1.6,2.3,2.3\n\t\t\t\t\t \t\t\tl2.9,1c3.4,1.1,4.4,2.3,4,4.5c-0.4,1.8-2.4,3.2-6.7,2.4c-4.3-0.8-6.1-2.8-5.8-5.2l2.1,0.4c0,1.3,1.1,2.5,3.9,3.1l0.4,0.1\n\t\t\t\t\t \t\t\tc2.7,0.5,4-0.1,4.2-1.1c0.2-0.9-0.3-1.5-2.5-2.3l-2.9-0.9c-3-1-4.2-2.4-3.8-4.4c0.5-2.3,2.8-3.2,7-2.4\n\t\t\t\t\t \t\t\tC353.5,154.2,355.2,156.2,354.8,158.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M338,157.8c-0.3,4.2-4.2,6.2-8.8,5.8c-4.6-0.4-8-3-7.7-7.1c0.3-4.2,4.2-6.2,8.8-5.8\n\t\t\t\t\t \t\t\tC334.9,151.1,338.4,153.7,338,157.8z M330,152.3c-3.3-0.3-6.3,1.1-6.5,4.3c-0.3,3.1,2.4,5,5.7,5.3l0.4,0c3.3,0.3,6.3-1.1,6.5-4.3\n\t\t\t\t\t \t\t\tc0.3-3.1-2.4-5-5.7-5.3L330,152.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M317.8,155.6l0.2,7.1l-1.9,0.1l-0.2-6.9c-0.1-2.8-1.7-4.1-4.5-4l-0.4,0c-2.8,0.1-4.4,1.5-4.3,4.3l0.2,6.9\n\t\t\t\t\t \t\t\tl-1.9,0.1l-0.2-7.1c-0.1-3.5,2.1-5.8,6.3-5.9C315.4,150,317.7,152.2,317.8,155.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M287.6,165.4l-1.8-12.5l2.6-0.4l10.5,9.2l-1.5-10.5l1.9-0.3l1.8,12.5l-2.6,0.4l-10.5-9.2l1.5,10.5\n\t\t\t\t\t \t\t\tL287.6,165.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M283.6,166.2l-7.4,2c-4.1,1.1-7.4-0.5-8.4-4.3c-1-3.8,1.1-6.8,5.2-7.9l7.4-2L283.6,166.2z M273.7,157.6\n\t\t\t\t\t \t\t\tc-3.4,0.9-4.8,2.9-4.1,5.8s3,4,6.4,3.1l5.2-1.4l-2.4-8.9L273.7,157.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M264.2,162.8l-2,0.8c-0.6-1.2-2-1.9-5.1-0.7l-0.3,0.1c-3.1,1.2-3.6,2.5-3.3,3.3c0.3,0.9,1.1,1.2,3.1,0.7\n\t\t\t\t\t \t\t\tl3-0.8c3.4-0.9,5-0.4,5.7,1.6c0.7,1.7-0.3,4-4.4,5.6c-4,1.6-6.7,0.9-7.7-1.3l2-0.8c0.7,1.1,2.3,1.5,4.9,0.5l0.3-0.1\n\t\t\t\t\t \t\t\tc2.6-1,3.4-2.2,3-3.2c-0.3-0.9-1-1.1-3.4-0.6l-2.9,0.7c-3.1,0.8-4.8,0.3-5.6-1.7c-0.8-2.2,0.6-4.2,4.6-5.8\n\t\t\t\t\t \t\t\tC260.8,159.6,263.2,160.3,264.2,162.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M235.9,172.3c-1.2,5.3-1.9,8.9-0.5,11.2c0.8,1.3,1.8,1.7,3,1c1-0.6,1.3-1.5,0.8-2.3c-0.3-0.6-0.9-0.9-1.6-0.9\n\t\t\t\t\t \t\t\tl0.5-1.9c0.9,0.1,1.7,0.6,2.1,1.3c0.8,1.4,0.2,3.1-1.7,4.2c-2,1.2-3.8,1-4.7-0.6c-1.4-2.3-0.4-6,1.1-11.4l-5.7,3.4l-1.1-0.7\n\t\t\t\t\t \t\t\tl-0.1-0.1l6.9-4.1L235.9,172.3z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "330.5", cy: "475.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "201.5", cy: "427.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "157.5", cy: "295.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "234.5", cy: "179.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "372.5", cy: "166.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "449.5", cy: "404.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "468.5", cy: "267.3", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/music" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-music.png", alt: "Music" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M190.8,173.9l-8-9.8l1.5-1.2l7,8.6l-2.8-12.1l1.9-1.6l11.3,5.1l-7-8.6l1.5-1.2l8,9.8l-2.5,2l-11.2-5.1l2.7,12\n\t\t\t\t\t \t\t\tL190.8,173.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M182.6,171.9l5,5l-1.4,1.4l-4.9-4.9c-2-2-4.1-1.8-6.1,0.2l-0.3,0.3c-2,2-2.1,4.1-0.1,6.1l4.9,4.9l-1.4,1.4\n\t\t\t\t\t \t\t\tl-5-5c-2.5-2.4-2.4-5.6,0.6-8.6C177,169.4,180.1,169.5,182.6,171.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M169.6,183.2l-1.4,1.7c-1.1-0.7-2.7-0.7-4.8,1.9l-0.2,0.3c-2.1,2.6-1.9,3.9-1.3,4.5c0.7,0.6,1.5,0.5,3.1-0.9\n\t\t\t\t\t \t\t\tl2.3-2.1c2.6-2.4,4.1-2.8,5.8-1.4c1.4,1.2,1.7,3.7-1.1,7c-2.8,3.3-5.4,4-7.4,2.7l1.4-1.7c1.1,0.6,2.8,0.2,4.6-2l0.2-0.3\n\t\t\t\t\t \t\t\tc1.8-2.1,1.9-3.6,1.1-4.2c-0.7-0.6-1.5-0.5-3.2,1.2l-2.2,2.1c-2.3,2.2-4.1,2.6-5.7,1.2c-1.8-1.5-1.5-4,1.2-7.3\n\t\t\t\t\t \t\t\tC165,182.1,167.5,181.6,169.6,183.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M165.2,202.3l-1.1,1.6l-10.2-7.5l1.1-1.6L165.2,202.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M156.3,203.5c3.2,2,3.9,6,1.1,10.3c-2.7,4.2-5.8,4.3-7.3,3.7l1.2-1.8c1.1,0.4,2.9,0,4.6-2.7l0.2-0.3\n\t\t\t\t\t \t\t\tc2-3.1,1.5-6.1-0.8-7.6c-2.3-1.5-5.3-0.6-7.2,2.4l-0.2,0.3c-1.7,2.7-1.2,4.4-0.5,5.3l-1.2,1.8c-1.2-1.1-2.4-3.9,0.3-8.2\n\t\t\t\t\t \t\t\tC149.3,202.6,153.2,201.5,156.3,203.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M136.6,229.5l0.2,2.2c-1-0.6-2.9-0.6-3.8,1.2c-0.6,1.4,0,2.9,1.9,3.7c2,0.9,3.6,0.3,4.7-2.2l0.4,0.2\n\t\t\t\t\t \t\t\tc-0.6,1.9,0.1,3.5,1.6,4.2c1.1,0.6,2.5,0.5,3.1-0.9c0.4-1,0.2-1.9-0.7-2.3c-0.4-0.2-0.7-0.3-1.2-0.1l-0.4-1.9\n\t\t\t\t\t \t\t\tc0.4-0.1,1.1-0.1,1.6,0.2c1,0.5,2.2,1.8,1.1,4.4c-0.9,1.9-2.4,2.9-4.2,2.2c-1.6-0.7-2.3-2.7-1.7-4.4c-1,2.3-2.9,3.3-5,2.3\n\t\t\t\t\t \t\t\tc-2.5-1.1-2.5-3.8-1.7-5.6C133.4,230.8,134.9,229.5,136.6,229.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M132,274.7l-12.2-3.3l0.5-1.9l10.8,2.9l-9.3-8.2l0.6-2.4l12.1-2.5l-10.7-2.9l0.5-1.9l12.2,3.3l-0.8,3.1\n\t\t\t\t\t \t\t\tl-12,2.4l9.2,8.1L132,274.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M124.2,277.9l7,1.1l-0.3,1.9l-6.8-1.1c-2.8-0.4-4.4,0.9-4.8,3.7l-0.1,0.4c-0.4,2.8,0.7,4.6,3.4,5l6.8,1.1\n\t\t\t\t\t \t\t\tl-0.3,1.9l-7-1.1c-3.4-0.5-5.3-3.2-4.6-7.3C118.2,279.1,120.8,277.4,124.2,277.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M120.2,294.7l-0.1,2.2c-1.3,0-2.6,1-2.8,4.3l0,0.4c-0.2,3.3,0.7,4.3,1.6,4.4c0.9,0.1,1.5-0.5,1.9-2.6l0.6-3\n\t\t\t\t\t \t\t\tc0.7-3.5,1.7-4.7,3.9-4.5c1.9,0.1,3.5,2,3.2,6.3c-0.3,4.3-2,6.4-4.4,6.5l0.1-2.2c1.3-0.1,2.4-1.5,2.6-4.3l0-0.4\n\t\t\t\t\t \t\t\tc0.2-2.7-0.6-4-1.6-4.1c-0.9-0.1-1.5,0.5-1.9,2.8l-0.6,3c-0.6,3.1-1.8,4.5-3.9,4.3c-2.3-0.2-3.6-2.3-3.3-6.6\n\t\t\t\t\t \t\t\tC115.8,296.5,117.6,294.6,120.2,294.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M127.8,312.7l0,1.9l-12.6-0.1l0-1.9L127.8,312.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M121.4,319c3.7-0.2,6.6,2.6,6.9,7.7c0.3,5-2.2,6.9-3.7,7.3l-0.1-2.2c1.1-0.3,2.4-1.7,2.2-4.9l0-0.4\n\t\t\t\t\t \t\t\tc-0.2-3.6-2.4-5.8-5.1-5.7c-2.8,0.2-4.6,2.6-4.4,6.2l0,0.4c0.2,3.1,1.6,4.3,2.7,4.6l0.1,2.2c-1.6-0.2-4.3-1.8-4.5-6.8\n\t\t\t\t\t \t\t\tC115.1,322.3,117.7,319.2,121.4,319z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M120.6,351.5l1.5,1.6c-1.1,0.1-2.7,1.3-2.3,3.2c0.3,1.5,1.7,2.4,3.7,1.9c2.1-0.4,3.1-1.9,2.5-4.6l0.4-0.1\n\t\t\t\t\t \t\t\tc0.6,1.9,2.1,2.7,3.7,2.5c1.2-0.2,2.3-1.1,2-2.5c-0.2-1.1-1-1.7-1.9-1.5c-0.4,0.1-0.7,0.2-1,0.6l-1.4-1.3c0.3-0.3,0.8-0.7,1.4-0.8\n\t\t\t\t\t \t\t\tc1.1-0.2,2.9,0.2,3.4,2.9c0.4,2-0.2,3.8-2.1,4.2c-1.8,0.4-3.4-0.8-3.9-2.5c0.6,2.5-0.4,4.3-2.7,4.8c-2.6,0.6-4.3-1.6-4.7-3.6\n\t\t\t\t\t \t\t\tC118.8,354.5,119.3,352.5,120.6,351.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M143.4,390.9l-11.8,4.5l-0.7-1.8l10.4-4l-12.4-1.2L128,386l8.4-9.1l-10.4,3.9l-0.7-1.8l11.8-4.5l1.2,3l-8.3,9\n\t\t\t\t\t \t\t\tl12.2,1.2L143.4,390.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M138.9,398.1l6.3-3.2l0.9,1.7l-6.2,3.1c-2.5,1.3-3,3.3-1.7,5.8l0.2,0.3c1.3,2.5,3.2,3.3,5.7,2.1l6.2-3.1\n\t\t\t\t\t \t\t\tl0.9,1.7l-6.3,3.2c-3.1,1.6-6.1,0.5-8-3.3C134.8,402.5,135.8,399.6,138.9,398.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M145.5,414l1.1,1.8c-1,0.8-1.5,2.3,0.2,5.2l0.2,0.3c1.8,2.8,3.1,3.1,3.9,2.6c0.8-0.5,1-1.3,0.1-3.2l-1.3-2.8\n\t\t\t\t\t \t\t\tc-1.5-3.2-1.3-4.8,0.5-6c1.6-1,4-0.4,6.3,3.3c2.3,3.7,2.1,6.4,0.2,7.8l-1.1-1.8c1-0.8,1.1-2.6-0.4-5l-0.2-0.3\n\t\t\t\t\t \t\t\tc-1.5-2.3-2.8-2.9-3.7-2.4c-0.8,0.5-0.9,1.2,0.1,3.4l1.3,2.7c1.3,2.9,1.1,4.7-0.6,5.8c-2,1.2-4.3,0.2-6.5-3.5\n\t\t\t\t\t \t\t\tC143,418,143.3,415.4,145.5,414z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M162.2,424.1l1.1,1.6l-10.3,7.3l-1.1-1.6L162.2,424.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M160.7,433c2.9-2.4,6.9-1.8,10.1,2.2c3.2,3.9,2.3,6.9,1.3,8.1l-1.4-1.7c0.7-0.9,0.9-2.8-1.1-5.2l-0.2-0.3\n\t\t\t\t\t \t\t\tc-2.3-2.8-5.3-3.3-7.5-1.6c-2.1,1.7-2.3,4.8,0,7.6l0.2,0.3c2,2.4,3.8,2.5,4.9,2.1l1.4,1.7c-1.4,0.8-4.5,1-7.7-2.9\n\t\t\t\t\t \t\t\tC157.5,439.3,157.8,435.3,160.7,433z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M179.1,459.9l2.1,0.4c-0.9,0.7-1.5,2.6,0,4c1.1,1,2.8,0.9,4.1-0.6c1.5-1.6,1.4-3.3-0.6-5.2l0.3-0.3\n\t\t\t\t\t \t\t\tc1.6,1.2,3.3,1,4.5-0.2c0.9-0.9,1.2-2.2,0.1-3.2c-0.8-0.7-1.8-0.8-2.4-0.1c-0.3,0.3-0.5,0.6-0.4,1.1l-1.9-0.3c0-0.4,0.3-1,0.6-1.5\n\t\t\t\t\t \t\t\tc0.8-0.8,2.4-1.5,4.5,0.3c1.5,1.4,2,3.2,0.8,4.6c-1.2,1.3-3.2,1.3-4.7,0.3c1.9,1.7,2.2,3.7,0.6,5.5c-1.8,2-4.4,1.2-5.9-0.1\n\t\t\t\t\t \t\t\tC179.4,463.3,178.6,461.4,179.1,459.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M220.6,478.4l-6.9,10.5l-1.6-1.1l6.1-9.3l-10.7,6.3l-2.1-1.4l1.5-12.3l-6.1,9.3l-1.6-1.1l6.9-10.5l2.7,1.8\n\t\t\t\t\t \t\t\tl-1.5,12.2l10.6-6.2L220.6,478.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M221.2,486.8l3.3-6.3l1.7,0.9l-3.2,6.1c-1.3,2.5-0.5,4.4,2,5.7l0.3,0.2c2.5,1.3,4.5,0.8,5.8-1.7l3.2-6.1\n\t\t\t\t\t \t\t\tl1.7,0.9l-3.3,6.3c-1.6,3.1-4.6,4-8.4,2.1C220.5,492.8,219.6,489.9,221.2,486.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M235.8,495.8l2,0.8c-0.4,1.2,0.1,2.8,3.2,4.1l0.3,0.1c3.1,1.3,4.3,0.7,4.7-0.1c0.3-0.8,0-1.6-1.8-2.7\n\t\t\t\t\t \t\t\tl-2.7-1.5c-3.1-1.7-3.9-3.1-3-5.1c0.7-1.7,3-2.7,7-1c4,1.6,5.4,3.9,4.7,6.2l-2-0.8c0.3-1.2-0.6-2.7-3.2-3.8l-0.3-0.1\n\t\t\t\t\t \t\t\tc-2.5-1-4-0.7-4.4,0.2c-0.4,0.9,0,1.5,2.1,2.7l2.6,1.5c2.8,1.5,3.7,3.1,2.9,5.1c-0.9,2.1-3.3,2.6-7.3,1\n\t\t\t\t\t \t\t\tC236.2,500.6,234.9,498.3,235.8,495.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M255.4,494.3l1.8,0.6l-4.1,11.9l-1.8-0.6L255.4,494.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M259.2,502.4c1-3.6,4.5-5.5,9.5-4.2c4.9,1.3,5.9,4.3,5.8,5.8l-2.1-0.6c0-1.1-0.9-2.8-3.9-3.6l-0.3-0.1\n\t\t\t\t\t \t\t\tc-3.5-1-6.3,0.4-7,3.1c-0.7,2.7,1,5.2,4.5,6.2l0.3,0.1c3,0.8,4.6-0.2,5.2-1.1l2.1,0.6c-0.7,1.4-3,3.5-7.9,2.2\n\t\t\t\t\t \t\t\tC260.4,509.4,258.3,506,259.2,502.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M289.9,513.4l2-0.9c-0.3,1.1,0.3,3,2.3,3.2c1.5,0.2,2.8-0.9,3-2.9c0.2-2.2-0.8-3.5-3.5-3.8l0.1-0.4\n\t\t\t\t\t \t\t\tc2,0,3.2-1.2,3.5-2.8c0.2-1.2-0.3-2.5-1.8-2.7c-1.1-0.1-1.9,0.4-2,1.3c0,0.4,0,0.8,0.3,1.1l-1.7,0.9c-0.2-0.4-0.4-1-0.3-1.6\n\t\t\t\t\t \t\t\tc0.1-1.1,1.1-2.7,3.8-2.4c2.1,0.2,3.5,1.4,3.3,3.3c-0.2,1.8-1.8,3-3.6,3c2.5,0.3,4,1.7,3.7,4.1c-0.3,2.7-2.9,3.5-4.8,3.3\n\t\t\t\t\t \t\t\tC292.1,516,290.5,515,289.9,513.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M334.4,504.2l0.6,12.6l-1.9,0.1l-0.5-11.1l-5,11.4l-2.5,0.1l-6-10.8l0.5,11.1l-1.9,0.1l-0.6-12.6l3.2-0.1\n\t\t\t\t\t \t\t\tl6,10.7l5-11.2L334.4,504.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M339.8,510.6l-1.1-7l1.9-0.3l1,6.8c0.4,2.8,2.2,3.9,5,3.5l0.4-0.1c2.8-0.4,4.2-2,3.7-4.8l-1-6.8l1.9-0.3\n\t\t\t\t\t \t\t\tl1.1,7c0.5,3.4-1.4,6-5.6,6.6C342.8,515.9,340.4,514,339.8,510.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M357,509.3l2.1-0.5c0.4,1.2,1.7,2.2,5,1.5l0.4-0.1c3.3-0.7,3.9-1.9,3.7-2.8c-0.2-0.9-0.9-1.3-3-1.1l-3.1,0.3\n\t\t\t\t\t \t\t\tc-3.5,0.4-5-0.3-5.4-2.5c-0.4-1.8,0.9-3.9,5.1-4.9c4.2-1,6.7,0.1,7.5,2.4l-2.1,0.5c-0.5-1.2-2.1-1.9-4.8-1.2l-0.4,0.1\n\t\t\t\t\t \t\t\tc-2.7,0.6-3.7,1.7-3.4,2.7c0.2,0.9,0.9,1.3,3.2,1l3-0.3c3.1-0.3,4.8,0.5,5.3,2.5c0.5,2.3-1.2,4.1-5.4,5\n\t\t\t\t\t \t\t\tC359.9,512.9,357.6,511.8,357,509.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M371.9,496.7l1.8-0.6l3.7,12.1l-1.8,0.6L371.9,496.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M379.7,500.9c-1.3-3.5,0.5-7.1,5.3-8.9c4.7-1.8,7.3,0,8.1,1.4l-2,0.8c-0.6-0.9-2.3-1.7-5.3-0.6l-0.3,0.1\n\t\t\t\t\t \t\t\tc-3.4,1.3-4.8,4-3.9,6.6c1,2.6,3.8,3.7,7.3,2.4l0.3-0.1c2.9-1.1,3.6-2.8,3.6-4l2-0.8c0.3,1.6-0.4,4.6-5.2,6.4\n\t\t\t\t\t \t\t\tC384.8,506,381.1,504.4,379.7,500.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M411.1,492l1.1-1.9c0.4,1.1,2,2.2,3.8,1.3c1.4-0.8,1.8-2.3,0.8-4.1c-1.1-1.9-2.7-2.4-5.1-1l-0.2-0.4\n\t\t\t\t\t \t\t\tc1.6-1.1,2-2.8,1.2-4.3c-0.6-1.1-1.7-1.9-3-1.1c-1,0.5-1.3,1.4-0.8,2.3c0.2,0.3,0.4,0.6,0.9,0.7l-0.8,1.7\n\t\t\t\t\t \t\t\tc-0.4-0.2-0.9-0.6-1.2-1.1c-0.6-1-0.7-2.8,1.7-4.2c1.8-1,3.7-0.9,4.6,0.8c0.9,1.6,0.2,3.5-1.2,4.5c2.2-1.3,4.3-0.9,5.4,1.1\n\t\t\t\t\t \t\t\tc1.3,2.4-0.3,4.6-2,5.5C414.4,492.8,412.4,492.9,411.1,492z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M441.8,458.4l7.8,9.9l-1.5,1.2l-6.9-8.7l2.6,12.2l-2,1.6l-11.2-5.2l6.9,8.7l-1.5,1.2l-7.8-9.9l2.5-2l11.1,5.2\n\t\t\t\t\t \t\t\tl-2.6-12L441.8,458.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M450,460.5l-5-5.1l1.4-1.3l4.8,4.9c2,2,4,1.9,6.1-0.1l0.3-0.3c2-2,2.2-4.1,0.2-6.1l-4.8-4.9l1.4-1.3l5,5.1\n\t\t\t\t\t \t\t\tc2.4,2.5,2.3,5.7-0.7,8.6C455.5,463.1,452.4,463,450,460.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M463.1,449.4l1.4-1.6c1.1,0.7,2.7,0.8,4.9-1.8l0.2-0.3c2.2-2.5,2-3.9,1.3-4.5c-0.7-0.6-1.5-0.5-3.1,0.9\n\t\t\t\t\t \t\t\tl-2.3,2.1c-2.6,2.4-4.2,2.7-5.8,1.3c-1.4-1.2-1.6-3.7,1.2-7s5.4-3.9,7.4-2.6l-1.4,1.6c-1.1-0.7-2.8-0.2-4.6,1.9l-0.2,0.3\n\t\t\t\t\t \t\t\tc-1.8,2.1-1.9,3.6-1.2,4.2c0.7,0.6,1.5,0.5,3.2-1.1l2.2-2c2.3-2.1,4.1-2.5,5.7-1.1c1.8,1.5,1.5,4-1.3,7.3\n\t\t\t\t\t \t\t\tC467.7,450.6,465.2,451.1,463.1,449.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M467.8,430.4l1.2-1.5l10.1,7.6l-1.2,1.5L467.8,430.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M476.7,429.2c-3.1-2.1-3.8-6-1-10.3c2.8-4.2,5.9-4.3,7.4-3.6l-1.2,1.8c-1.1-0.4-2.9,0-4.7,2.6L477,420\n\t\t\t\t\t \t\t\tc-2,3.1-1.6,6.1,0.7,7.6c2.3,1.5,5.3,0.7,7.3-2.3l0.2-0.3c1.7-2.6,1.3-4.4,0.6-5.3l1.2-1.8c1.1,1.1,2.3,4-0.4,8.2\n\t\t\t\t\t \t\t\tC483.7,430.3,479.8,431.3,476.7,429.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M496.8,403.6l-0.2-2.2c0.9,0.6,2.9,0.6,3.8-1.2c0.7-1.4,0.1-2.9-1.8-3.8c-2-0.9-3.6-0.4-4.8,2.2l-0.4-0.2\n\t\t\t\t\t \t\t\tc0.7-1.9-0.1-3.5-1.5-4.2c-1.1-0.6-2.5-0.5-3.1,0.9c-0.5,1-0.2,1.9,0.6,2.3c0.4,0.2,0.7,0.3,1.2,0.1l0.3,1.9\n\t\t\t\t\t \t\t\tc-0.4,0.1-1.1,0.1-1.6-0.2c-1-0.5-2.2-1.9-1-4.4c0.9-1.9,2.4-2.9,4.2-2.1c1.6,0.8,2.2,2.7,1.7,4.4c1-2.3,2.9-3.2,5-2.2\n\t\t\t\t\t \t\t\tc2.4,1.1,2.4,3.9,1.6,5.6C500,402.3,498.4,403.6,496.8,403.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M502.1,358.5l12.1,3.4l-0.5,1.9l-10.7-3l9.2,8.4l-0.7,2.4l-12.2,2.3l10.6,3l-0.5,1.9l-12.1-3.4l0.9-3.1\n\t\t\t\t\t \t\t\tl12.1-2.3l-9.1-8.3L502.1,358.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M509.9,355.3l-7-1.2l0.3-1.9l6.8,1.2c2.8,0.5,4.4-0.8,4.9-3.6l0.1-0.4c0.5-2.8-0.6-4.6-3.4-5.1l-6.8-1.2\n\t\t\t\t\t \t\t\tl0.3-1.9l7,1.2c3.4,0.6,5.2,3.2,4.5,7.4C515.9,354.2,513.3,355.9,509.9,355.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M514.1,338.7l0.2-2.2c1.3,0,2.6-1,2.9-4.3l0-0.4c0.3-3.3-0.7-4.3-1.5-4.4c-0.9-0.1-1.6,0.4-2,2.5l-0.6,3\n\t\t\t\t\t \t\t\tc-0.7,3.5-1.8,4.6-4,4.5c-1.9-0.2-3.5-2.1-3.1-6.4c0.4-4.3,2.1-6.4,4.5-6.4l-0.2,2.2c-1.3,0.1-2.4,1.4-2.6,4.2l0,0.4\n\t\t\t\t\t \t\t\tc-0.2,2.7,0.5,4,1.5,4.1c0.9,0.1,1.5-0.4,2-2.8l0.6-2.9c0.6-3.1,1.9-4.5,4-4.3c2.3,0.2,3.5,2.4,3.2,6.7\n\t\t\t\t\t \t\t\tC518.5,336.9,516.8,338.8,514.1,338.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M506.8,320.5l0-1.9l12.6,0.3l0,1.9L506.8,320.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M513.3,314.4c-3.7,0.2-6.6-2.7-6.8-7.8c-0.2-5,2.3-6.9,3.8-7.2l0.1,2.2c-1.1,0.3-2.4,1.7-2.2,4.8l0,0.4\n\t\t\t\t\t \t\t\tc0.2,3.7,2.3,5.8,5,5.7c2.8-0.1,4.7-2.5,4.5-6.1l0-0.4c-0.1-3.1-1.6-4.3-2.7-4.6l-0.1-2.2c1.6,0.2,4.2,1.9,4.4,6.9\n\t\t\t\t\t \t\t\tC519.6,311.2,517,314.2,513.3,314.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M514.6,281.8l-1.5-1.6c1.1-0.1,2.8-1.2,2.4-3.2c-0.3-1.5-1.7-2.4-3.7-2c-2.1,0.4-3.1,1.8-2.6,4.5l-0.4,0.1\n\t\t\t\t\t \t\t\tc-0.6-1.9-2.1-2.7-3.7-2.5c-1.2,0.2-2.3,1-2,2.5c0.2,1.1,1,1.7,1.9,1.5c0.4-0.1,0.7-0.2,1-0.6l1.4,1.3c-0.3,0.3-0.8,0.7-1.4,0.8\n\t\t\t\t\t \t\t\tc-1.1,0.2-2.9-0.2-3.4-3c-0.4-2,0.3-3.8,2.2-4.2c1.8-0.3,3.4,0.9,3.9,2.6c-0.5-2.5,0.5-4.3,2.8-4.8c2.6-0.5,4.2,1.7,4.6,3.6\n\t\t\t\t\t \t\t\tC516.4,278.9,515.9,280.8,514.6,281.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M492.4,242.1l11.8-4.3l0.7,1.8l-10.5,3.8l12.4,1.4l0.9,2.4l-8.5,9l10.4-3.8l0.7,1.8l-11.8,4.3l-1.1-3l8.5-8.9\n\t\t\t\t\t \t\t\tl-12.2-1.4L492.4,242.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M497,235l-6.4,3.1l-0.8-1.7l6.2-3c2.5-1.2,3.1-3.2,1.8-5.8l-0.2-0.3c-1.2-2.6-3.2-3.4-5.7-2.1l-6.2,3\n\t\t\t\t\t \t\t\tl-0.8-1.7l6.4-3.1c3.1-1.5,6.1-0.4,8,3.4C501.1,230.6,500.1,233.5,497,235z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M490.6,219l-1.1-1.9c1-0.8,1.6-2.3-0.2-5.2l-0.2-0.3c-1.7-2.9-3.1-3.1-3.8-2.7c-0.8,0.5-1,1.3-0.1,3.2\n\t\t\t\t\t \t\t\tl1.3,2.8c1.4,3.2,1.3,4.8-0.6,5.9c-1.6,1-4,0.4-6.2-3.4c-2.2-3.7-2-6.4-0.1-7.8l1.1,1.9c-1,0.8-1.1,2.6,0.3,5l0.2,0.3\n\t\t\t\t\t \t\t\tc1.4,2.4,2.8,2.9,3.6,2.4c0.8-0.5,0.9-1.2,0-3.4l-1.2-2.7c-1.3-2.9-1.1-4.7,0.7-5.8c2-1.2,4.3-0.1,6.5,3.6\n\t\t\t\t\t \t\t\tC493.2,215,492.8,217.6,490.6,219z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M474,208.6l-1.1-1.6l10.4-7.1l1.1,1.6L474,208.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M475.7,199.8c-2.9,2.3-6.9,1.7-10.1-2.3c-3.1-4-2.2-6.9-1.1-8.1l1.3,1.7c-0.7,0.9-0.9,2.8,1,5.2l0.2,0.3\n\t\t\t\t\t \t\t\tc2.3,2.9,5.3,3.4,7.4,1.7c2.2-1.7,2.3-4.8,0.1-7.6l-0.2-0.3c-2-2.5-3.8-2.6-4.9-2.2l-1.3-1.7c1.4-0.7,4.5-1,7.6,3\n\t\t\t\t\t \t\t\tC479,193.5,478.7,197.5,475.7,199.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M457.7,172.6l-2.1-0.5c0.9-0.7,1.5-2.6,0.1-4c-1.1-1.1-2.7-1-4.1,0.5c-1.5,1.6-1.5,3.3,0.6,5.2l-0.3,0.3\n\t\t\t\t\t \t\t\tc-1.6-1.2-3.3-1-4.5,0.1c-0.9,0.9-1.3,2.2-0.2,3.2c0.8,0.8,1.8,0.8,2.4,0.1c0.3-0.3,0.5-0.6,0.4-1.1l1.9,0.3c0,0.4-0.3,1-0.7,1.4\n\t\t\t\t\t \t\t\tc-0.8,0.8-2.4,1.5-4.5-0.4c-1.5-1.4-2-3.2-0.7-4.6c1.2-1.3,3.3-1.3,4.7-0.2c-1.9-1.7-2.2-3.8-0.5-5.5c1.8-2,4.4-1.1,5.9,0.2\n\t\t\t\t\t \t\t\tC457.5,169.2,458.2,171.1,457.7,172.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M416.5,153.5l7.1-10.4l1.6,1.1l-6.2,9.2l10.8-6.1l2.1,1.4l-1.6,12.3l6.2-9.2l1.6,1.1l-7.1,10.4l-2.7-1.8\n\t\t\t\t\t \t\t\tl1.6-12.2l-10.7,6L416.5,153.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M416,145.1l-3.4,6.2l-1.7-0.9l3.3-6.1c1.3-2.5,0.6-4.4-1.9-5.8l-0.3-0.2c-2.5-1.3-4.5-0.9-5.9,1.6l-3.3,6.1\n\t\t\t\t\t \t\t\tl-1.7-0.9l3.4-6.2c1.6-3,4.7-3.9,8.4-1.9C416.8,139,417.6,142,416,145.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M401.5,135.8l-2-0.9c0.4-1.2-0.1-2.8-3.2-4.1l-0.3-0.1c-3.1-1.3-4.3-0.7-4.7,0.1c-0.4,0.8-0.1,1.6,1.8,2.7\n\t\t\t\t\t \t\t\tl2.7,1.6c3.1,1.8,3.8,3.2,3,5.2c-0.7,1.7-3,2.6-7,0.9c-4-1.7-5.4-4-4.6-6.3l2,0.9c-0.3,1.2,0.6,2.7,3.2,3.8l0.3,0.1\n\t\t\t\t\t \t\t\tc2.5,1.1,4,0.8,4.4-0.2c0.4-0.9,0.1-1.5-2-2.7l-2.6-1.5c-2.7-1.6-3.6-3.2-2.8-5.1c0.9-2.1,3.4-2.6,7.3-0.9\n\t\t\t\t\t \t\t\tC401.2,131.1,402.4,133.4,401.5,135.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M381.9,137.1l-1.8-0.6l4.2-11.9l1.8,0.6L381.9,137.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M378.2,129c-1,3.6-4.6,5.4-9.5,4c-4.8-1.4-5.8-4.3-5.7-5.9l2.1,0.6c0,1.1,0.9,2.8,3.9,3.7l0.3,0.1\n\t\t\t\t\t \t\t\tc3.5,1,6.3-0.3,7-3s-0.9-5.2-4.4-6.2l-0.3-0.1c-3-0.9-4.6,0.1-5.2,1.1l-2.1-0.6c0.7-1.4,3.1-3.4,7.9-2\n\t\t\t\t\t \t\t\tC377.1,121.9,379.2,125.4,378.2,129z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M347.7,117.4l-2,0.9c0.3-1.1-0.3-3-2.3-3.3c-1.5-0.2-2.8,0.8-3.1,2.9c-0.3,2.2,0.7,3.5,3.5,3.9l-0.1,0.4\n\t\t\t\t\t \t\t\tc-2-0.1-3.3,1.1-3.6,2.7c-0.2,1.2,0.2,2.5,1.8,2.7c1.1,0.1,1.9-0.4,2-1.3c0.1-0.4,0-0.8-0.3-1.1l1.7-0.9c0.2,0.4,0.4,1,0.3,1.6\n\t\t\t\t\t \t\t\tc-0.1,1.1-1.1,2.7-3.9,2.3c-2.1-0.3-3.5-1.5-3.3-3.4c0.2-1.8,1.9-2.9,3.7-2.9c-2.5-0.3-4-1.8-3.7-4.1c0.3-2.7,2.9-3.5,4.9-3.2\n\t\t\t\t\t \t\t\tC345.5,114.8,347.1,115.9,347.7,117.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M303.1,126l-0.4-12.6l1.9-0.1l0.3,11.1l5.2-11.3l2.5-0.1l5.9,10.9l-0.3-11.1l1.9-0.1l0.4,12.6l-3.2,0.1\n\t\t\t\t\t \t\t\tl-5.8-10.8l-5.1,11.2L303.1,126z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M297.7,119.5l1,7l-1.9,0.3l-0.9-6.8c-0.4-2.8-2.1-3.9-4.9-3.5l-0.4,0c-2.8,0.4-4.2,1.9-3.8,4.7l0.9,6.8\n\t\t\t\t\t \t\t\tl-1.9,0.3l-1-7c-0.5-3.4,1.5-5.9,5.7-6.5C294.8,114.1,297.3,116.1,297.7,119.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M280.5,120.5l-2.1,0.5c-0.4-1.2-1.7-2.2-5-1.5l-0.4,0.1c-3.3,0.7-3.9,1.9-3.7,2.8c0.2,0.9,0.9,1.3,3,1.1\n\t\t\t\t\t \t\t\tl3.1-0.3c3.5-0.4,5,0.3,5.4,2.5c0.4,1.8-0.9,3.9-5.2,4.9c-4.2,1-6.7-0.1-7.5-2.4l2.1-0.5c0.5,1.2,2.1,1.9,4.8,1.2l0.4-0.1\n\t\t\t\t\t \t\t\tc2.7-0.6,3.7-1.7,3.4-2.7c-0.2-0.9-0.9-1.3-3.2-1l-3,0.3c-3.1,0.3-4.8-0.5-5.3-2.5c-0.5-2.3,1.2-4.1,5.4-5\n\t\t\t\t\t \t\t\tC277.6,116.8,279.9,118,280.5,120.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M265.5,133l-1.9,0.5l-3.5-12.1l1.9-0.5L265.5,133z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M257.7,128.6c1.3,3.5-0.6,7.1-5.4,8.8c-4.7,1.7-7.3-0.1-8.1-1.5l2-0.7c0.6,0.9,2.3,1.8,5.3,0.7l0.3-0.1\n\t\t\t\t\t \t\t\tc3.4-1.2,4.9-3.9,4-6.5c-0.9-2.6-3.8-3.7-7.2-2.5l-0.3,0.1c-3,1.1-3.7,2.8-3.6,3.9l-2,0.7c-0.3-1.6,0.5-4.6,5.2-6.3\n\t\t\t\t\t \t\t\tC252.7,123.5,256.4,125.1,257.7,128.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M226.2,137.1l-1.1,1.9c-0.4-1.1-2-2.3-3.7-1.3c-1.4,0.7-1.8,2.3-0.8,4.1c1,1.9,2.7,2.4,5.1,1.1l0.2,0.4\n\t\t\t\t\t \t\t\tc-1.6,1.1-2,2.8-1.3,4.3c0.5,1.1,1.7,1.9,3,1.2c1-0.5,1.3-1.4,0.9-2.3c-0.2-0.3-0.4-0.6-0.9-0.8l0.9-1.7c0.4,0.2,0.9,0.6,1.2,1.1\n\t\t\t\t\t \t\t\tc0.5,1,0.7,2.8-1.8,4.1c-1.8,1-3.7,0.9-4.6-0.8c-0.9-1.6-0.2-3.5,1.3-4.5c-2.2,1.2-4.3,0.9-5.4-1.2c-1.3-2.4,0.3-4.5,2.1-5.5\n\t\t\t\t\t \t\t\tC222.9,136.2,224.9,136.1,226.2,137.1z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "509.5", cy: "278.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "494.5", cy: "397.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "412.5", cy: "486.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "294.5", cy: "510.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "185.5", cy: "459.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "125.5", cy: "355.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "138.5", cy: "235.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "224.5", cy: "144.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "450.5", cy: "173.3", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "342.5", cy: "121.3", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/images" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-images.png", alt: "Images" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M236.4,106.8l-1.8,0.7l-4.5-11.8l1.8-0.7L236.4,106.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M214,116.6l-5.3-11.4l1.7-0.8l4.7,10.1l0.3-12.4l2.3-1.1l9.7,7.7l-4.7-10l1.7-0.8l5.3,11.4l-2.9,1.4l-9.6-7.7\n\t\t\t\t\t\t\t\tl-0.3,12.3L214,116.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M195.6,116.3l7.5-4.3l-0.1-3.7l1.9-1.1l0.2,14.4l-2.1,1.2l-12.4-7.4l1.9-1.1L195.6,116.3z M197.3,117.3l6,3.6\n\t\t\t\t\t\t\t\tl-0.2-7L197.3,117.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M191.7,122.2c2.2,3.1,1.2,7.1-3.1,10c-3.7,2.6-6.9,2.4-8.5,0.7l1.8-1.2c0.7,0.7,2.6,1.4,5.6-0.7l0.3-0.2\n\t\t\t\t\t\t\t\tc3-2.1,4-4.9,2.3-7.4c-1.7-2.5-4.6-2.6-7.7-0.5l-0.3,0.2c-3.1,2.1-3.9,4.3-3,5.6l0.2,0.3l4.8-3.3l1,1.4l-5.1,3.5\n\t\t\t\t\t\t\t\tc-0.8,0.6-1.6,0.4-2.1-0.4l-2.8-4.1l1.6-1.1l0.9,1.3c0.1-1,0.9-2.8,3.7-4.8C185.6,118.6,189.5,119.1,191.7,122.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M161.7,139.1l-1.1-1.3l10-8.3l8,9.7l-9.9,8.1l-1.1-1.3l8.4-6.9l-2.3-2.8l-7.6,6.2l-1.1-1.3l7.6-6.2l-2.5-3.1\n\t\t\t\t\t\t\t\tL161.7,139.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M160.4,143.4l-1.6,1.5c-1-0.8-2.6-1-5,1.3l-0.3,0.2c-2.4,2.3-2.4,3.7-1.8,4.3c0.6,0.7,1.5,0.7,3.2-0.6\n\t\t\t\t\t\t\t\tl2.5-1.9c2.8-2.1,4.4-2.3,5.9-0.7c1.3,1.4,1.2,3.8-1.9,6.8s-5.8,3.4-7.6,1.8l1.6-1.5c1,0.8,2.7,0.5,4.8-1.4l0.3-0.2\n\t\t\t\t\t\t\t\tc2-1.9,2.2-3.4,1.6-4.1c-0.6-0.7-1.4-0.7-3.3,0.8l-2.4,1.8c-2.5,1.9-4.4,2.1-5.8,0.6c-1.6-1.7-1.1-4.1,2-7.1\n\t\t\t\t\t\t\t\tC156,141.8,158.6,141.6,160.4,143.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M132.7,167.2l0.6,1.7l1.6,1.3l3.4-4.2l0.4,0.3l3.5,10.3l-1.3,0.5l-6.2-5l-1.5,1.9l-0.8-0.6l1.5-1.9l-1.6-1.3\n\t\t\t\t\t\t\t\tl-1.8-0.2l-0.1-0.1l2.2-2.7L132.7,167.2z M135.6,170.8l5.4,4.3l-2.6-7.7L135.6,170.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M128.8,193.7l-1,1.6l-10.6-6.8l1-1.6L128.8,193.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M116.4,214.8l-11-6.1l0.9-1.7l9.7,5.4l-7-10.2l1.2-2.2l12.4,0.6l-9.7-5.4l0.9-1.7l11,6.1l-1.6,2.8l-12.3-0.6\n\t\t\t\t\t\t\t\tl7,10.1L116.4,214.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M101.4,225.3l3.5-7.9l-2.2-2.9l0.9-2l8.7,11.5l-1,2.3l-14.4,1.3l0.9-2L101.4,225.3z M103.3,225.2l7-0.6\n\t\t\t\t\t\t\t\tL106,219L103.3,225.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M101.7,232.4c3.6,1.3,5.1,5.1,3.4,9.9c-1.5,4.3-4.1,6-6.5,5.5l0.7-2c1,0.2,2.9-0.4,4.1-3.9l0.1-0.3\n\t\t\t\t\t\t\t\tc1.2-3.4,0.4-6.3-2.5-7.3c-2.9-1-5.3,0.6-6.5,4.1l-0.1,0.3c-1.2,3.5-0.6,5.8,0.9,6.3l0.3,0.1l1.9-5.5l1.6,0.6l-2.1,5.9\n\t\t\t\t\t\t\t\tc-0.3,0.9-1,1.3-1.9,0.9l-4.7-1.6l0.6-1.8l1.5,0.5c-0.5-0.9-0.9-2.8,0.2-6.1C94.6,233,98.1,231.2,101.7,232.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M87.3,263.6l-1.6-0.4l3.3-12.6l12.2,3.2l-3.2,12.4l-1.6-0.4l2.7-10.5l-3.4-0.9l-2.5,9.5l-1.6-0.4l2.5-9.5\n\t\t\t\t\t\t\t\tl-3.8-1L87.3,263.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M88.8,267.9l-0.4,2.1c-1.3-0.1-2.7,0.7-3.3,4l-0.1,0.4c-0.6,3.3,0.3,4.4,1.1,4.5c0.9,0.2,1.6-0.3,2.2-2.3\n\t\t\t\t\t\t\t\tl0.9-3c1-3.4,2.2-4.4,4.4-4.1c1.8,0.3,3.2,2.4,2.5,6.6c-0.8,4.3-2.7,6.1-5.1,5.9l0.4-2.1c1.3,0,2.5-1.2,3-4l0.1-0.4\n\t\t\t\t\t\t\t\tc0.5-2.7-0.1-4-1.1-4.2c-0.9-0.2-1.5,0.3-2.2,2.6l-0.9,2.9c-0.9,3-2.3,4.3-4.4,3.9c-2.3-0.4-3.3-2.7-2.5-6.9\n\t\t\t\t\t\t\t\tC84.2,269.2,86.2,267.5,88.8,267.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M80.3,303.5l1.5,1.1l2,0.1l0.3-5.4l0.5,0l8.9,6.2l-0.8,1.2l-8-0.4l-0.1,2.5l-1-0.1l0.1-2.5l-2-0.1l-1.6,0.9\n\t\t\t\t\t\t\t\tl-0.2,0l0.2-3.5L80.3,303.5z M84.8,304.7l6.9,0.4l-6.7-4.7L84.8,304.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M92.7,327.2l0.1,1.9l-12.6,0.7l-0.1-1.9L92.7,327.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M95.1,351.6l-12.5,1.5l-0.2-1.9l11.1-1.4l-11.7-4.1l-0.3-2.5l10.3-6.8l-11,1.3l-0.2-1.9l12.5-1.5l0.4,3.2\n\t\t\t\t\t\t\t\tl-10.3,6.8l11.6,4.1L95.1,351.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M89.1,368.9l-1.8-8.4l-3.5-1.1l-0.4-2.1l13.8,4.2l0.5,2.4l-10.8,9.5l-0.5-2.2L89.1,368.9z M90.6,367.6\n\t\t\t\t\t\t\t\tl5.3-4.6l-6.7-2L90.6,367.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M93.5,374.4c3.6-1.1,7.1,1.1,8.6,6.1c1.3,4.3,0.2,7.3-2,8.3l-0.6-2.1c0.9-0.5,2.1-2,1.1-5.6l-0.1-0.3\n\t\t\t\t\t\t\t\tc-1-3.5-3.4-5.3-6.3-4.5c-2.9,0.9-3.9,3.6-2.9,7.1l0.1,0.3c1.1,3.6,2.9,5,4.4,4.6l0.3-0.1l-1.7-5.6l1.6-0.5l1.8,5.9\n\t\t\t\t\t\t\t\tc0.3,0.9-0.1,1.6-1,1.9l-4.7,1.4l-0.6-1.8l1.6-0.5c-0.9-0.4-2.4-1.7-3.4-5C88.2,379.1,89.9,375.5,93.5,374.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M100.2,408.1l-1.6,0.6l-4.7-12.1l11.7-4.6l4.6,11.9l-1.6,0.6l-3.9-10.1l-3.3,1.3l3.6,9.1l-1.6,0.6l-3.6-9.1\n\t\t\t\t\t\t\t\tl-3.7,1.4L100.2,408.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M103.9,410.7l0.9,1.9c-1.1,0.7-1.8,2.2-0.3,5.2l0.2,0.3c1.5,3,2.8,3.4,3.6,3c0.8-0.4,1.1-1.2,0.4-3.2l-1-2.9\n\t\t\t\t\t\t\t\tc-1.1-3.4-0.8-4.9,1.2-5.9c1.7-0.8,4,0,5.9,3.9c1.9,3.9,1.4,6.6-0.6,7.8l-0.9-1.9c1-0.7,1.3-2.4,0.1-5l-0.2-0.3\n\t\t\t\t\t\t\t\tc-1.2-2.5-2.5-3.2-3.4-2.8c-0.8,0.4-1.1,1.1-0.3,3.4l1,2.8c1,3,0.6,4.8-1.3,5.7c-2.1,1-4.2-0.3-6.1-4.2\n\t\t\t\t\t\t\t\tC101,414.4,101.6,411.9,103.9,410.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M117.9,444.5l1.8,0l1.7-1.1l-2.9-4.5l0.5-0.3l10.9-0.2l0,1.4l-6.7,4.4l1.3,2.1l-0.8,0.5l-1.3-2.1l-1.7,1.1\n\t\t\t\t\t\t\t\tl-0.8,1.6l-0.2,0.1l-1.9-3L117.9,444.5z M122.2,442.8l5.8-3.8l-8.2,0.1L122.2,442.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M141.9,456.4l1.2,1.5l-9.8,7.9l-1.2-1.5L141.9,456.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M158.2,474.7l-9.2,8.6l-1.3-1.4l8.2-7.6l-11.9,3.5l-1.7-1.8l4.3-11.6l-8.1,7.5l-1.3-1.4l9.2-8.6l2.2,2.4\n\t\t\t\t\t\t\t\tl-4.3,11.5l11.8-3.5L158.2,474.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M163.5,492.3l-6.4-5.8l-3.5,1.2l-1.6-1.4l13.6-4.7l1.8,1.7l-3.2,14.1l-1.7-1.5L163.5,492.3z M163.9,490.4\n\t\t\t\t\t\t\t\tl1.6-6.9l-6.6,2.3L163.9,490.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M170.4,494.2c2.3-3,6.4-3.3,10.5-0.2c3.6,2.7,4.4,5.8,3.2,7.9l-1.7-1.3c0.5-0.9,0.5-2.9-2.4-5.1l-0.3-0.2\n\t\t\t\t\t\t\t\tc-2.9-2.2-5.9-2.3-7.8,0.1c-1.9,2.4-1.1,5.2,1.9,7.5l0.3,0.2c3,2.3,5.3,2.4,6.3,1.1l0.2-0.3l-4.6-3.5l1-1.3l4.9,3.8\n\t\t\t\t\t\t\t\tc0.8,0.6,0.9,1.4,0.3,2.1l-3,3.9l-1.5-1.2l1-1.3c-1,0.2-3,0-5.7-2.1C168.8,501.1,168.1,497.2,170.4,494.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M195.6,517.5l-0.9,1.4l-10.9-7l6.8-10.6l10.8,6.9l-0.9,1.4l-9.2-5.9l-1.9,3l8.2,5.3l-0.9,1.4l-8.2-5.3\n\t\t\t\t\t\t\t\tl-2.1,3.3L195.6,517.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M200.1,517.4l1.9,1c-0.5,1.2-0.2,2.8,2.8,4.4l0.3,0.2c2.9,1.6,4.2,1.1,4.7,0.3c0.4-0.8,0.2-1.6-1.5-2.8\n\t\t\t\t\t\t\t\tl-2.5-1.8c-2.9-2-3.5-3.5-2.5-5.4c0.9-1.6,3.3-2.3,7.1-0.3c3.8,2.1,5,4.5,4.1,6.7l-1.9-1c0.4-1.2-0.4-2.8-2.8-4.1l-0.3-0.2\n\t\t\t\t\t\t\t\tc-2.4-1.3-3.9-1.1-4.4-0.2c-0.4,0.8-0.2,1.5,1.8,2.9l2.5,1.7c2.6,1.8,3.3,3.5,2.3,5.4c-1.1,2-3.6,2.3-7.4,0.2\n\t\t\t\t\t\t\t\tC199.9,522.1,198.9,519.7,200.1,517.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M231.2,536.5l1.5-1.1l0.7-1.9l-5-1.9l0.2-0.5l8.7-6.5l0.9,1.1l-2.9,7.5l2.3,0.9l-0.4,0.9l-2.3-0.9l-0.7,1.9\n\t\t\t\t\t\t\t\tl0.3,1.7l-0.1,0.2l-3.3-1.3L231.2,536.5z M233.8,532.6l2.5-6.4l-6.6,4.9L233.8,532.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M257.7,532.1l1.9,0.5l-3.3,12.2l-1.9-0.5L257.7,532.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M281.6,537.4l-2.4,12.4l-1.9-0.4l2.2-10.9l-7.6,9.9l-2.5-0.5l-3.3-11.9l-2.1,10.9l-1.9-0.4l2.4-12.4l3.2,0.6\n\t\t\t\t\t\t\t\tl3.2,11.8l7.5-9.7L281.6,537.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M296.2,548.5l-8.6-0.9l-2.1,3l-2.1-0.2l8.3-11.8l2.5,0.3l5.7,13.3l-2.2-0.2L296.2,548.5z M295.5,546.7\n\t\t\t\t\t\t\t\tl-2.7-6.5l-4,5.8L295.5,546.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M302.9,546c0.1-3.8,3.2-6.4,8.4-6.3c4.5,0.1,7,2.1,7.3,4.5l-2.2,0c-0.2-1-1.3-2.7-5-2.7l-0.4,0\n\t\t\t\t\t\t\t\tc-3.6-0.1-6.1,1.6-6.2,4.7c-0.1,3.1,2.2,4.8,5.9,4.9l0.4,0c3.7,0.1,5.7-1.2,5.7-2.8l0-0.3l-5.8-0.1l0-1.7l6.2,0.1\n\t\t\t\t\t\t\t\tc1,0,1.5,0.6,1.5,1.6l-0.1,4.9l-1.9,0l0-1.6c-0.7,0.7-2.4,1.8-5.9,1.7C305.7,552.5,302.8,549.8,302.9,546z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M337,550l0.1,1.7l-13,0.8l-0.7-12.6l12.8-0.8l0.1,1.7l-10.9,0.6l0.2,3.6l9.8-0.6l0.1,1.7l-9.8,0.6l0.2,4\n\t\t\t\t\t\t\t\tL337,550z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M340.6,547.3l2.1-0.3c0.3,1.3,1.5,2.4,4.8,1.9l0.4,0c3.3-0.5,4.1-1.6,4-2.5c-0.1-0.9-0.8-1.4-2.9-1.4l-3.1,0\n\t\t\t\t\t\t\t\tc-3.5,0-4.9-0.7-5.2-2.9c-0.3-1.9,1.3-3.8,5.6-4.4c4.3-0.6,6.7,0.7,7.2,3l-2.1,0.3c-0.4-1.2-1.9-2-4.7-1.7l-0.4,0\n\t\t\t\t\t\t\t\tc-2.7,0.4-3.8,1.4-3.7,2.4c0.1,0.9,0.7,1.4,3.1,1.3l3,0c3.2,0,4.8,0.9,5.1,3c0.3,2.3-1.6,4-5.8,4.5\n\t\t\t\t\t\t\t\tC343.3,551.2,341,549.9,340.6,547.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M377,544.4l0.6-1.7l-0.5-1.9l-5.2,1.4l-0.1-0.5l3.2-10.4l1.4,0.4l2.1,7.7l2.4-0.6l0.3,1l-2.4,0.6l0.5,1.9\n\t\t\t\t\t\t\t\tl1.3,1.2l0,0.2l-3.4,0.9L377,544.4z M376.8,539.8l-1.8-6.7l-2.5,7.8L376.8,539.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M395.8,525.4l1.8-0.7l4.5,11.8l-1.8,0.7L395.8,525.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M418.3,515.6l5.3,11.4l-1.7,0.8l-4.7-10.1l-0.3,12.4l-2.3,1l-9.7-7.7l4.6,10l-1.7,0.8l-5.3-11.4l2.9-1.4\n\t\t\t\t\t\t\t\tl9.6,7.7l0.3-12.3L418.3,515.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M436.6,516l-7.5,4.3l0.1,3.7l-1.9,1.1l-0.2-14.4l2.2-1.2l12.4,7.4l-1.9,1.1L436.6,516z M435,515l-6-3.7l0.2,7\n\t\t\t\t\t\t\t\tL435,515z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M440.6,510c-2.2-3.1-1.1-7.1,3.1-10c3.7-2.6,6.9-2.4,8.5-0.6l-1.8,1.2c-0.7-0.7-2.6-1.4-5.6,0.7l-0.3,0.2\n\t\t\t\t\t\t\t\tc-3,2.1-4,4.9-2.3,7.4c1.7,2.5,4.6,2.6,7.7,0.5l0.3-0.2c3.1-2.1,3.9-4.3,3-5.6l-0.2-0.3l-4.8,3.3l-1-1.4l5.1-3.5\n\t\t\t\t\t\t\t\tc0.8-0.6,1.6-0.4,2.1,0.4l2.8,4.1l-1.6,1.1l-0.9-1.3c-0.1,1-0.9,2.8-3.7,4.8C446.6,513.7,442.7,513.1,440.6,510z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M470.6,493.3l1.1,1.3l-10,8.2l-8-9.7l9.9-8.1l1.1,1.3l-8.4,6.9l2.3,2.8l7.6-6.2l1.1,1.3l-7.6,6.2l2.5,3.1\n\t\t\t\t\t\t\t\tL470.6,493.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M471.9,488.9l1.6-1.5c1,0.8,2.6,1,5-1.3l0.3-0.2c2.4-2.3,2.4-3.7,1.8-4.3c-0.6-0.7-1.5-0.7-3.2,0.6l-2.5,1.9\n\t\t\t\t\t\t\t\tc-2.8,2.1-4.4,2.3-5.9,0.7c-1.3-1.4-1.2-3.8,1.9-6.8s5.8-3.4,7.6-1.8l-1.6,1.5c-1-0.8-2.7-0.5-4.8,1.4l-0.3,0.2\n\t\t\t\t\t\t\t\tc-2,1.9-2.3,3.3-1.6,4.1c0.6,0.7,1.4,0.7,3.3-0.8l2.4-1.8c2.5-1.9,4.4-2.1,5.8-0.6c1.6,1.7,1.1,4.1-2.1,7.1\n\t\t\t\t\t\t\t\tC476.3,490.6,473.7,490.8,471.9,488.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M499.6,465.2l-0.5-1.7l-1.6-1.3l-3.4,4.2l-0.4-0.3l-3.5-10.3l1.3-0.5l6.2,5l1.6-1.9l0.8,0.6l-1.6,1.9l1.6,1.3\n\t\t\t\t\t\t\t\tl1.8,0.2l0.1,0.1l-2.2,2.7L499.6,465.2z M496.7,461.6l-5.4-4.3l2.6,7.8L496.7,461.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M503.6,438.7l1-1.6l10.6,6.9l-1,1.6L503.6,438.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M516.1,417.6l11,6.2l-0.9,1.7l-9.7-5.4l7,10.3l-1.2,2.2l-12.4-0.6l9.7,5.4l-0.9,1.7l-11-6.1l1.6-2.8l12.3,0.6\n\t\t\t\t\t\t\t\tl-6.9-10.1L516.1,417.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M531.2,407.2l-3.5,7.9l2.2,2.9l-0.9,2l-8.6-11.6l1-2.3l14.4-1.3l-0.9,2L531.2,407.2z M529.2,407.3l-7,0.6\n\t\t\t\t\t\t\t\tl4.3,5.6L529.2,407.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M530.9,400c-3.6-1.3-5.1-5.1-3.4-9.9c1.5-4.3,4.1-6,6.5-5.5l-0.7,2c-1-0.2-2.9,0.4-4.2,3.9l-0.1,0.3\n\t\t\t\t\t\t\t\tc-1.2,3.4-0.4,6.3,2.5,7.3c2.9,1,5.3-0.6,6.5-4.1l0.1-0.3c1.2-3.5,0.6-5.8-0.9-6.3l-0.3-0.1l-1.9,5.5l-1.6-0.6l2.1-5.9\n\t\t\t\t\t\t\t\tc0.3-0.9,1-1.3,2-0.9l4.7,1.6l-0.6,1.8l-1.5-0.5c0.5,0.9,0.9,2.8-0.2,6.1C537.9,399.5,534.4,401.3,530.9,400z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M545.3,368.8l1.6,0.4l-3.3,12.5l-12.2-3.2l3.3-12.4l1.6,0.4l-2.8,10.5l3.4,0.9l2.5-9.5l1.6,0.4l-2.5,9.5\n\t\t\t\t\t\t\t\tl3.8,1L545.3,368.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M543.8,364.6l0.4-2.1c1.3,0.1,2.7-0.7,3.3-4l0.1-0.4c0.6-3.3-0.2-4.4-1.1-4.5c-0.9-0.2-1.6,0.3-2.2,2.3\n\t\t\t\t\t\t\t\tl-0.9,3c-1.1,3.4-2.2,4.4-4.4,4c-1.8-0.3-3.2-2.4-2.5-6.7s2.7-6.1,5.1-5.9l-0.4,2.1c-1.3,0-2.5,1.2-3,3.9l-0.1,0.4\n\t\t\t\t\t\t\t\tc-0.5,2.7,0.1,4,1.1,4.2c0.9,0.2,1.5-0.3,2.2-2.6l0.9-2.9c0.9-3,2.3-4.3,4.4-3.9c2.3,0.4,3.3,2.7,2.5,7\n\t\t\t\t\t\t\t\tC548.4,363.3,546.4,365,543.8,364.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M552.4,329.1l-1.5-1.1l-2-0.1l-0.3,5.4l-0.5,0l-8.9-6.3l0.8-1.2l8,0.4l0.1-2.5l1,0.1l-0.1,2.5l2,0.1l1.6-0.9\n\t\t\t\t\t\t\t\tl0.2,0l-0.2,3.5L552.4,329.1z M547.9,327.8l-6.9-0.4l6.7,4.8L547.9,327.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M540,305.3l-0.1-1.9l12.6-0.7l0.1,1.9L540,305.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M537.7,280.9l12.5-1.5l0.2,1.9l-11.1,1.3l11.7,4.2l0.3,2.5l-10.3,6.8l11-1.3l0.2,1.9l-12.5,1.5l-0.4-3.2\n\t\t\t\t\t\t\t\tl10.3-6.7l-11.6-4.1L537.7,280.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M543.7,263.6l1.8,8.4l3.5,1.1l0.4,2.1l-13.8-4.2l-0.5-2.4L546,259l0.5,2.2L543.7,263.6z M542.2,264.9\n\t\t\t\t\t\t\t\tl-5.3,4.6l6.7,2L542.2,264.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M539.3,258c-3.6,1.1-7.1-1.1-8.6-6.1c-1.3-4.3-0.1-7.3,2-8.3l0.6,2.1c-0.9,0.5-2.1,2-1.1,5.6l0.1,0.3\n\t\t\t\t\t\t\t\tc1,3.5,3.4,5.4,6.3,4.5c2.9-0.9,3.9-3.6,2.9-7.1l-0.1-0.3c-1.1-3.6-2.9-5-4.4-4.6l-0.3,0.1l1.7,5.6l-1.6,0.5l-1.8-6\n\t\t\t\t\t\t\t\tc-0.3-0.9,0.1-1.6,1-1.9l4.7-1.4l0.5,1.8l-1.6,0.5c0.9,0.4,2.4,1.7,3.4,5.1C544.7,253.4,542.9,257,539.3,258z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M532.7,224.3l1.6-0.6l4.7,12.1l-11.8,4.6l-4.6-11.9l1.6-0.6l3.9,10.1l3.3-1.3l-3.5-9.1l1.6-0.6l3.5,9.1\n\t\t\t\t\t\t\t\tl3.7-1.4L532.7,224.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M529,221.7l-0.9-1.9c1.1-0.7,1.8-2.2,0.3-5.2l-0.2-0.3c-1.4-3-2.8-3.4-3.6-3c-0.8,0.4-1.1,1.2-0.4,3.2l1,2.9\n\t\t\t\t\t\t\t\tc1.1,3.4,0.8,4.9-1.2,5.9c-1.7,0.8-4,0-5.9-3.9c-1.9-3.9-1.4-6.6,0.7-7.8l0.9,1.9c-1,0.7-1.3,2.4-0.1,5l0.2,0.3\n\t\t\t\t\t\t\t\tc1.2,2.5,2.5,3.2,3.4,2.8c0.8-0.4,1.1-1.1,0.3-3.4l-1-2.8c-1-3-0.6-4.8,1.3-5.7c2.1-1,4.2,0.3,6.1,4.2\n\t\t\t\t\t\t\t\tC531.9,218,531.3,220.5,529,221.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M515.1,188l-1.8,0l-1.7,1.1l2.9,4.5l-0.5,0.3l-10.9,0.1l0-1.4l6.7-4.4l-1.3-2.1l0.8-0.5l1.3,2.1l1.7-1.1\n\t\t\t\t\t\t\t\tl0.8-1.6l0.2-0.1l1.9,3L515.1,188z M510.7,189.6l-5.8,3.7l8.2-0.1L510.7,189.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M491.1,176l-1.2-1.5l9.8-7.9l1.2,1.5L491.1,176z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M474.9,157.6l9.2-8.6l1.3,1.4l-8.2,7.6l11.9-3.5l1.7,1.8l-4.4,11.6l8.1-7.5l1.3,1.4l-9.2,8.6l-2.2-2.4\n\t\t\t\t\t\t\t\tl4.3-11.5l-11.8,3.5L474.9,157.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M469.6,140.1l6.4,5.8l3.5-1.2l1.6,1.4l-13.7,4.6l-1.8-1.7l3.2-14.1l1.7,1.5L469.6,140.1z M469.2,141.9\n\t\t\t\t\t\t\t\tl-1.6,6.8l6.6-2.3L469.2,141.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M462.7,138.1c-2.3,3-6.4,3.3-10.5,0.1c-3.6-2.8-4.4-5.8-3.2-7.9l1.7,1.3c-0.5,0.9-0.5,2.9,2.4,5.1l0.3,0.2\n\t\t\t\t\t\t\t\tc2.9,2.2,5.9,2.3,7.8-0.1s1.1-5.2-1.9-7.5l-0.3-0.2c-3-2.3-5.3-2.4-6.3-1.1l-0.2,0.3l4.6,3.5l-1,1.3l-4.9-3.8\n\t\t\t\t\t\t\t\tc-0.8-0.6-0.9-1.4-0.3-2.1l3-3.9l1.5,1.2l-1,1.3c1-0.2,3,0,5.7,2.1C464.4,131.2,465,135.1,462.7,138.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M437.5,114.8l0.9-1.4l10.9,7l-6.8,10.6l-10.8-6.9l0.9-1.4l9.1,5.9l1.9-3l-8.2-5.3l0.9-1.4l8.2,5.3l2.1-3.3\n\t\t\t\t\t\t\t\tL437.5,114.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M433,114.8l-1.9-1c0.5-1.2,0.2-2.8-2.8-4.4l-0.3-0.2c-2.9-1.6-4.2-1.1-4.7-0.4c-0.4,0.8-0.2,1.6,1.5,2.8\n\t\t\t\t\t\t\t\tl2.5,1.8c2.9,2.1,3.5,3.5,2.5,5.4c-0.9,1.6-3.3,2.3-7.1,0.3c-3.8-2.1-5-4.5-4-6.7l1.9,1c-0.4,1.2,0.3,2.8,2.8,4.1l0.3,0.2\n\t\t\t\t\t\t\t\tc2.4,1.3,3.9,1.1,4.3,0.2c0.4-0.8,0.2-1.5-1.8-2.9l-2.5-1.7c-2.6-1.8-3.3-3.5-2.3-5.4c1.1-2,3.6-2.3,7.4-0.2\n\t\t\t\t\t\t\t\tC433.2,110.1,434.2,112.5,433,114.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M401.9,95.7l-1.5,1.1l-0.7,1.9l5,2l-0.2,0.5l-8.7,6.5l-0.9-1.1l2.9-7.5l-2.3-0.9l0.4-0.9l2.3,0.9l0.7-1.9\n\t\t\t\t\t\t\t\tl-0.3-1.7l0.1-0.2l3.3,1.3L401.9,95.7z M399.4,99.5l-2.5,6.4l6.6-4.8L399.4,99.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M375.5,100l-1.9-0.5l3.3-12.2l1.9,0.5L375.5,100z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M351.6,94.7l2.5-12.4l1.9,0.4l-2.2,10.9l7.6-9.8l2.5,0.5l3.3,11.9l2.2-10.9l1.9,0.4l-2.5,12.4l-3.2-0.6\n\t\t\t\t\t\t\t\tl-3.2-11.9l-7.5,9.7L351.6,94.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M337,83.5l8.6,0.9l2.1-3l2.1,0.2l-8.3,11.8l-2.5-0.3l-5.6-13.3l2.2,0.2L337,83.5z M337.8,85.3l2.7,6.5l4-5.8\n\t\t\t\t\t\t\t\tL337.8,85.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M330.3,86c-0.1,3.8-3.3,6.4-8.4,6.3c-4.5-0.1-7-2.1-7.3-4.5l2.2,0.1c0.2,1,1.3,2.7,5,2.7l0.4,0\n\t\t\t\t\t\t\t\tc3.6,0.1,6.1-1.6,6.2-4.6c0.1-3.1-2.2-4.8-5.9-4.9l-0.4,0c-3.7-0.1-5.7,1.2-5.7,2.8l0,0.3l5.8,0.1l0,1.7l-6.2-0.2\n\t\t\t\t\t\t\t\tc-1,0-1.5-0.6-1.5-1.6l0.1-4.9l1.9,0l0,1.6c0.7-0.7,2.4-1.8,5.9-1.7C327.6,79.5,330.4,82.2,330.3,86z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M296.2,81.9l-0.1-1.7l13-0.7l0.7,12.6L297,92.8l-0.1-1.7l10.9-0.6l-0.2-3.6l-9.8,0.6l-0.1-1.7l9.8-0.6l-0.2-4\n\t\t\t\t\t\t\t\tL296.2,81.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M292.6,84.6l-2.1,0.3c-0.3-1.3-1.5-2.4-4.8-1.9l-0.4,0c-3.3,0.4-4.1,1.6-4,2.5c0.1,0.9,0.8,1.4,2.9,1.4l3.1,0\n\t\t\t\t\t\t\t\tc3.5,0,4.9,0.7,5.2,2.9c0.2,1.9-1.3,3.8-5.6,4.4c-4.3,0.6-6.7-0.7-7.2-3l2.1-0.3c0.4,1.2,1.9,2,4.7,1.7l0.4,0\n\t\t\t\t\t\t\t\tc2.7-0.4,3.8-1.4,3.7-2.4c-0.1-0.9-0.7-1.4-3.1-1.3l-3,0c-3.2,0-4.8-0.9-5-3c-0.3-2.3,1.6-4,5.8-4.5\n\t\t\t\t\t\t\t\tC290,80.7,292.2,82.1,292.6,84.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M256.2,87.5l-0.6,1.7l0.5,1.9l5.2-1.4l0.1,0.5l-3.2,10.4l-1.4-0.4l-2-7.7l-2.4,0.6l-0.3-1l2.4-0.6l-0.5-1.9\n\t\t\t\t\t\t\t\tl-1.3-1.2l0-0.2l3.4-0.9L256.2,87.5z M256.4,92.1l1.8,6.7l2.5-7.8L256.4,92.1z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "122.5", cy: "442.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "233.5", cy: "531.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "376.5", cy: "538.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "495.5", cy: "461.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "546.5", cy: "328.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "510.5", cy: "190.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "398.5", cy: "101.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "256.5", cy: "93.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "85.5", cy: "304.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "136.5", cy: "172.1", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/brainwaves" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-brainwaves.png", alt: "Brainwaves" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M313.9,55.4l-8.9,0.3c-2.3,0.1-4-1.1-4.1-3.2c0-1.4,0.9-2.5,1.9-2.9c-1.3-0.3-2.4-1.3-2.4-2.9\n\t\t\t\t\t\t\t\tc-0.1-2.1,1.7-3.5,4-3.6l9.1-0.3L313.9,55.4z M304.8,44.8c-1.6,0.1-2.5,0.7-2.5,2c0,1.2,1,1.9,2.6,1.8l6.8-0.2l-0.1-3.9\n\t\t\t\t\t\t\t\tL304.8,44.8z M305.1,50.3c-1.5,0-2.3,0.8-2.3,1.9c0,1.2,0.9,1.8,2.4,1.7l6.6-0.2l-0.1-3.7L305.1,50.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M283.2,49l-0.4-4.2l1.9-0.2l0.4,3.7c0.1,1,0.5,1.2,1.5,1.1l7.4-0.7l-0.5-5l1.9-0.2l1.3,12.5L288,57\n\t\t\t\t\t\t\t\tc-2.6,0.3-4.4-1-4.6-3c-0.2-1.6,0.8-2.8,2-3.2l-0.1,0C283.9,50.9,283.3,50.3,283.2,49z M285.3,53.4c0.1,1.3,1.2,2,2.9,1.8l6.3-0.6\n\t\t\t\t\t\t\t\tl-0.4-4.2l-6.3,0.6C286,51.3,285.1,52.2,285.3,53.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M267.3,50.5l8.5-1.4l1.2-3.5l2.1-0.4l-4.8,13.6l-2.5,0.4l-9-11.3l2.2-0.4L267.3,50.5z M268.5,52l4.4,5.5\n\t\t\t\t\t\t\t\tl2.3-6.7L268.5,52z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M262,61.1l-1.9,0.4l-2.7-12.3l1.9-0.4L262,61.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M242.2,66.1L239,53.9l2.6-0.7l11.5,7.9l-2.8-10.2l1.9-0.5l3.3,12.2l-2.6,0.7l-11.5-7.9l2.8,10.2L242.2,66.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M219.3,74l-0.2-13.3l2.5-0.9l7,8.9l-0.2-11.3l2.5-0.9l8.3,10.4l-1.9,0.7l-7.1-9l0.2,11.5l-2.5,0.9l-7.1-9.1\n\t\t\t\t\t\t\t\tl0.2,11.5L219.3,74z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M203.7,70.7l7.9-3.5l0.3-3.7l2-0.9L212.5,77l-2.3,1l-11.5-8.7l2-0.9L203.7,70.7z M205.2,71.9l5.6,4.3l0.6-7\n\t\t\t\t\t\t\t\tL205.2,71.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M189.6,88.3l0.5-14.4l2.3-1.2l12,8l-2,1l-10.5-7l-0.4,12.6L189.6,88.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M170.4,87.1l-0.9-1.4l11.1-6.7l6.5,10.8l-11,6.6l-0.9-1.4l9.3-5.6l-1.8-3.1l-8.4,5.1l-0.9-1.4l8.4-5.1l-2-3.4\n\t\t\t\t\t\t\t\tL170.4,87.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M168.8,90.9l-1.8,1.2c-0.8-1-2.4-1.4-5.2,0.5l-0.3,0.2c-2.8,1.9-2.9,3.3-2.4,4c0.5,0.8,1.3,0.9,3.2-0.1\n\t\t\t\t\t\t\t\tl2.7-1.4c3.1-1.6,4.7-1.6,6,0.2c1.1,1.5,0.6,4-3,6.5c-3.6,2.5-6.3,2.4-7.8,0.6l1.8-1.2c0.9,0.9,2.6,0.9,4.9-0.7l0.3-0.2\n\t\t\t\t\t\t\t\tc2.3-1.6,2.7-3,2.2-3.8c-0.5-0.8-1.3-0.9-3.4,0.3l-2.7,1.4c-2.8,1.5-4.6,1.4-5.8-0.3c-1.3-1.9-0.4-4.2,3.1-6.7\n\t\t\t\t\t\t\t\tC164.7,88.6,167.3,88.8,168.8,90.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M143.1,107.8l-0.8,1.9c-1.2-1.4-2.7-1.5-3.9-0.5c-1.4,1.2-1.4,2.9,0.1,4.6c1.5,1.7,3.4,2.1,4.9,0.8\n\t\t\t\t\t\t\t\tc0.7-0.6,1.2-1.5,1.3-2.4l0.8-0.1l3.5,5.2l-4.6,4l-1.1-0.8l4.4-3.8l-2.4-3.7c0,0.8-0.7,1.9-1.5,2.6c-2.1,1.8-4.6,1.7-6.3-0.2\n\t\t\t\t\t\t\t\tc-1.8-2.1-1.5-4.6,0.7-6.5C139.7,107.4,141.7,107,143.1,107.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M130.4,133.5l-6.1,6.5c-1.6,1.7-3.6,2-5.1,0.6c-1.1-1-1.1-2.4-0.7-3.4c-1.1,0.7-2.6,0.7-3.8-0.3\n\t\t\t\t\t\t\t\tc-1.5-1.4-1.3-3.7,0.3-5.3l6.2-6.7L130.4,133.5z M116.4,132.4c-1.1,1.2-1.3,2.3-0.3,3.2c0.9,0.8,2,0.7,3.1-0.5l4.7-5l-2.8-2.6\n\t\t\t\t\t\t\t\tL116.4,132.4z M120.6,136c-1,1.1-1.1,2.2-0.2,3c0.8,0.8,1.9,0.6,2.9-0.5l4.5-4.8l-2.7-2.5L120.6,136z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M104.1,150.7l-3.2-2.7l1.2-1.5l2.9,2.4c0.8,0.6,1.2,0.5,1.8-0.2l4.7-5.7l-3.9-3.2l1.2-1.5l9.7,8l-5.5,6.7\n\t\t\t\t\t\t\t\tc-1.6,2-3.9,2.4-5.4,1.1c-1.2-1-1.4-2.6-0.9-3.7l0,0.1C105.9,151.5,105.1,151.5,104.1,150.7z M108.8,152.3c1,0.9,2.2,0.6,3.3-0.8\n\t\t\t\t\t\t\t\tl4-4.9l-3.2-2.7l-4,4.9C107.8,150.2,107.8,151.5,108.8,152.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M94,162.9l5-7l-1.6-3.3l1.2-1.7l6.2,13l-1.4,2L89,164.3l1.3-1.8L94,162.9z M95.9,163.2l7,0.8l-3.1-6.3\n\t\t\t\t\t\t\t\tL95.9,163.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M97.8,174.2l-1,1.6L86.1,169l1-1.6L97.8,174.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M87.3,191.7l-10.9-6.3l1.3-2.3l13.7-2.6l-9.2-5.3l1-1.7l10.9,6.3l-1.3,2.3L79,184.7l9.2,5.3L87.3,191.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M76.6,213.5l-9.5-9.3l1.2-2.4l11.2,1.3l-8.1-7.8l1.2-2.4l13.2,1.5l-0.9,1.8l-11.4-1.3l8.3,7.9l-1.1,2.4\n\t\t\t\t\t\t\t\tl-11.4-1.4l8.3,8L76.6,213.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M63.2,222.2l3.1-8l-2.4-2.8l0.8-2l9.2,11.1l-0.9,2.3l-14.3,2l0.8-2.1L63.2,222.2z M65.1,221.9l7-0.9l-4.5-5.4\n\t\t\t\t\t\t\t\tL65.1,221.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M65.7,244.6L55.8,234l0.8-2.5l14.1-2.8l-0.7,2.1l-12.4,2.4l8.7,9.2L65.7,244.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M51.3,257.3l-1.6-0.4l3.1-12.6l12.2,3l-3.1,12.4l-1.6-0.4l2.6-10.6l-3.5-0.9l-2.4,9.5l-1.6-0.4l2.3-9.5\n\t\t\t\t\t\t\t\tl-3.8-1L51.3,257.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M52.9,261.1l-0.4,2.1c-1.3-0.1-2.7,0.7-3.3,4l-0.1,0.4c-0.6,3.3,0.2,4.4,1.1,4.5c0.9,0.2,1.6-0.3,2.2-2.3\n\t\t\t\t\t\t\t\tl0.9-3c1.1-3.4,2.2-4.4,4.4-4c1.8,0.3,3.2,2.4,2.5,6.6c-0.8,4.3-2.7,6.1-5.1,5.9l0.4-2.1c1.3,0,2.5-1.2,3-4l0.1-0.4\n\t\t\t\t\t\t\t\tc0.5-2.7-0.1-4-1.1-4.2c-0.9-0.2-1.5,0.3-2.2,2.6l-0.9,2.9c-0.9,3-2.3,4.3-4.4,3.9c-2.3-0.4-3.3-2.7-2.5-6.9\n\t\t\t\t\t\t\t\tC48.3,262.4,50.3,260.7,52.9,261.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M46.6,291.2l0.8,1.9c-1.8-0.1-3,0.8-3.1,2.4c-0.1,1.8,1.1,3,3.4,3.2c2.3,0.2,3.8-0.9,4-2.9\n\t\t\t\t\t\t\t\tc0.1-1-0.2-1.9-0.8-2.6l0.4-0.6l6.1,1.2l-0.5,6.1l-1.3,0.2l0.4-5.8l-4.3-0.9c0.5,0.5,0.9,1.8,0.8,3c-0.2,2.8-2.1,4.5-4.6,4.3\n\t\t\t\t\t\t\t\tc-2.7-0.2-4.3-2.2-4.1-5.1C43.9,293.4,45.1,291.6,46.6,291.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M55.8,318.4l0.3,8.9c0.1,2.3-1.1,4-3.2,4.1c-1.4,0-2.5-0.9-2.9-1.9c-0.3,1.3-1.3,2.4-2.9,2.4\n\t\t\t\t\t\t\t\tc-2.1,0.1-3.5-1.7-3.6-4l-0.3-9.1L55.8,318.4z M45.1,327.5c0.1,1.6,0.7,2.5,2,2.5c1.2,0,1.9-1,1.8-2.6l-0.2-6.8l-3.8,0.1\n\t\t\t\t\t\t\t\tL45.1,327.5z M50.7,327.1c0,1.5,0.8,2.3,1.9,2.3c1.2,0,1.8-0.9,1.7-2.4l-0.2-6.6l-3.7,0.1L50.7,327.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M49.3,349.1l-4.2,0.4l-0.2-1.9l3.7-0.4c1-0.1,1.2-0.5,1.1-1.5l-0.7-7.4l-5,0.5l-0.2-1.9l12.5-1.2l0.9,8.6\n\t\t\t\t\t\t\t\tc0.3,2.6-1,4.4-3,4.6c-1.6,0.2-2.8-0.8-3.2-2l0,0.1C51.2,348.4,50.6,349,49.3,349.1z M53.8,347c1.3-0.1,2-1.2,1.8-2.9l-0.6-6.3\n\t\t\t\t\t\t\t\tl-4.2,0.4l0.6,6.3C51.6,346.2,52.5,347.1,53.8,347z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M50.9,365l-1.4-8.5l-3.5-1.2l-0.4-2.1l13.6,4.8l0.4,2.5l-11.3,9l-0.4-2.2L50.9,365z M52.4,363.8l5.5-4.4\n\t\t\t\t\t\t\t\tl-6.6-2.3L52.4,363.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M61.5,370.2l0.4,1.9l-12.3,2.7l-0.4-1.9L61.5,370.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M66.4,390l-12.2,3.3l-0.7-2.6l7.9-11.5L51.2,382l-0.5-1.9l12.2-3.3l0.7,2.6l-7.9,11.5l10.2-2.7L66.4,390z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M74.3,413.1L61,413.2l-0.9-2.5l8.9-7l-11.3,0.2l-0.9-2.5l10.4-8.3l0.7,1.9l-9,7.1l11.5-0.2l0.9,2.5l-9.1,7.1\n\t\t\t\t\t\t\t\tl11.5-0.2L74.3,413.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M71,428.6l-3.5-7.9l-3.7-0.3l-0.9-2l14.4,1.3l1,2.3l-8.7,11.5l-0.9-2L71,428.6z M72.2,427.1l4.3-5.6l-7-0.6\n\t\t\t\t\t\t\t\tL72.2,427.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M88.6,442.7l-14.4-0.5l-1.2-2.3l8-12l1,2l-7,10.5l12.6,0.4L88.6,442.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M87.4,461.9l-1.4,0.9l-6.7-11.1l10.8-6.5l6.6,11l-1.5,0.9l-5.6-9.3l-3.1,1.8l5.1,8.4l-1.4,0.9l-5.1-8.4\n\t\t\t\t\t\t\t\tl-3.4,2L87.4,461.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M91.2,463.5l1.2,1.8c-1,0.8-1.4,2.4,0.5,5.2l0.2,0.3c1.9,2.8,3.3,2.9,4,2.4c0.8-0.5,0.9-1.3-0.1-3.2l-1.4-2.7\n\t\t\t\t\t\t\t\tc-1.6-3.1-1.6-4.7,0.2-6c1.5-1.1,4-0.6,6.5,3c2.5,3.6,2.4,6.3,0.6,7.8l-1.2-1.8c0.9-0.9,0.9-2.6-0.7-4.9l-0.2-0.3\n\t\t\t\t\t\t\t\tc-1.6-2.3-3-2.7-3.8-2.2c-0.8,0.5-0.9,1.3,0.3,3.4l1.4,2.7c1.5,2.8,1.4,4.7-0.3,5.9c-1.9,1.3-4.2,0.4-6.7-3.1\n\t\t\t\t\t\t\t\tC88.9,467.6,89.1,465,91.2,463.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M108.1,489.2l1.9,0.8c-1.4,1.2-1.5,2.7-0.5,3.9c1.2,1.4,2.9,1.4,4.6-0.1c1.7-1.5,2.1-3.4,0.8-4.9\n\t\t\t\t\t\t\t\tc-0.6-0.7-1.5-1.2-2.4-1.3l-0.1-0.8l5.2-3.5l4,4.6l-0.8,1.1l-3.8-4.4l-3.7,2.4c0.8,0,1.9,0.7,2.6,1.6c1.8,2.1,1.7,4.6-0.2,6.3\n\t\t\t\t\t\t\t\tc-2.1,1.8-4.6,1.5-6.5-0.7C107.7,492.6,107.3,490.6,108.1,489.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M133.8,501.9l6.5,6.1c1.7,1.6,2,3.6,0.6,5.2c-1,1.1-2.4,1.1-3.4,0.7c0.7,1.1,0.7,2.6-0.3,3.8\n\t\t\t\t\t\t\t\tc-1.4,1.5-3.7,1.3-5.3-0.3l-6.7-6.3L133.8,501.9z M132.7,515.9c1.2,1.1,2.3,1.3,3.2,0.3c0.8-0.9,0.7-2-0.5-3.1l-5-4.7l-2.6,2.8\n\t\t\t\t\t\t\t\tL132.7,515.9z M136.4,511.7c1.1,1,2.2,1.1,3,0.2c0.8-0.8,0.6-1.9-0.5-2.9l-4.8-4.5l-2.5,2.7L136.4,511.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M150.9,528.2l-2.7,3.2l-1.5-1.2l2.4-2.9c0.6-0.8,0.5-1.2-0.2-1.8l-5.7-4.7l-3.2,3.9l-1.5-1.2l8-9.7l6.7,5.5\n\t\t\t\t\t\t\t\tc2,1.6,2.4,3.9,1.1,5.4c-1,1.2-2.6,1.4-3.7,0.9l0.1,0C151.7,526.4,151.7,527.2,150.9,528.2z M152.6,523.5c0.9-1,0.6-2.2-0.7-3.3\n\t\t\t\t\t\t\t\tl-4.9-4l-2.7,3.2l4.9,4C150.5,524.5,151.8,524.5,152.6,523.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M163.2,538.3l-7-5l-3.3,1.6l-1.7-1.2l13-6.2l2,1.4l-1.6,14.3l-1.8-1.3L163.2,538.3z M163.4,536.4l0.8-7\n\t\t\t\t\t\t\t\tl-6.3,3.1L163.4,536.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M174.5,534.5l1.6,1l-6.8,10.6l-1.6-1L174.5,534.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M191.9,545.1l-6.3,10.9l-2.3-1.3l-2.6-13.7l-5.3,9.2l-1.7-1l6.3-10.9l2.3,1.3l2.6,13.7l5.3-9.2L191.9,545.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M213.8,555.8l-9.3,9.5l-2.4-1.2l1.4-11.2l-7.9,8.1l-2.4-1.2l1.5-13.2l1.8,0.9l-1.4,11.4l8-8.3l2.4,1.1\n\t\t\t\t\t\t\t\tl-1.4,11.4l8-8.3L213.8,555.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M222.4,569.1l-8-3.1l-2.8,2.4l-2-0.8l11.1-9.2l2.3,0.9l2,14.3l-2.1-0.8L222.4,569.1z M222.2,567.2l-0.9-7\n\t\t\t\t\t\t\t\tl-5.4,4.5L222.2,567.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M244.8,566.7l-10.6,9.9l-2.5-0.8l-2.8-14.1l2.1,0.7l2.4,12.4l9.2-8.7L244.8,566.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M257.6,581.1l-0.4,1.6l-12.6-3.1l3-12.2l12.4,3.1l-0.4,1.6l-10.6-2.6l-0.9,3.5l9.5,2.3l-0.4,1.6l-9.5-2.3\n\t\t\t\t\t\t\t\tl-1,3.8L257.6,581.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M261.4,579.5l2.1,0.4c-0.1,1.3,0.7,2.7,4,3.3l0.4,0.1c3.3,0.6,4.4-0.2,4.5-1.1c0.2-0.9-0.3-1.6-2.3-2.2\n\t\t\t\t\t\t\t\tl-3-0.9c-3.4-1.1-4.4-2.2-4-4.4c0.3-1.8,2.4-3.2,6.6-2.5c4.3,0.8,6.1,2.7,5.9,5.1l-2.1-0.4c0-1.3-1.2-2.5-4-3l-0.4-0.1\n\t\t\t\t\t\t\t\tc-2.7-0.5-4,0.1-4.2,1.1c-0.2,0.9,0.3,1.5,2.6,2.2l2.9,0.9c3,0.9,4.3,2.3,3.9,4.4c-0.4,2.3-2.7,3.3-6.9,2.5\n\t\t\t\t\t\t\t\tC262.7,584,261,582,261.4,579.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M291.5,585.8l1.9-0.8c-0.1,1.8,0.8,3,2.4,3.1c1.8,0.1,3-1.1,3.2-3.3c0.2-2.3-0.9-3.8-2.9-4\n\t\t\t\t\t\t\t\tc-1-0.1-1.9,0.2-2.6,0.8l-0.6-0.4l1.2-6.1l6.1,0.5l0.2,1.3l-5.8-0.4l-0.9,4.3c0.5-0.5,1.8-0.9,3-0.8c2.8,0.2,4.5,2.1,4.3,4.6\n\t\t\t\t\t\t\t\tc-0.2,2.7-2.2,4.3-5.1,4.1C293.6,588.4,291.9,587.3,291.5,585.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M318.7,576.6l8.9-0.3c2.3-0.1,4,1.1,4.1,3.2c0,1.4-0.9,2.5-1.9,2.9c1.3,0.3,2.4,1.3,2.4,2.9\n\t\t\t\t\t\t\t\tc0.1,2.1-1.7,3.5-4,3.6l-9.1,0.3L318.7,576.6z M327.4,581.7c1.5,0,2.3-0.8,2.3-1.9c0-1.2-0.9-1.8-2.4-1.7l-6.6,0.2l0.1,3.7\n\t\t\t\t\t\t\t\tL327.4,581.7z M327.8,587.2c1.6-0.1,2.5-0.7,2.5-2c0-1.2-1-1.9-2.6-1.8l-6.8,0.2l0.1,3.8L327.8,587.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M349.4,583l0.4,4.2l-1.9,0.2l-0.4-3.7c-0.1-1-0.5-1.2-1.5-1.1l-7.4,0.7l0.5,5l-1.9,0.2l-1.2-12.5l8.6-0.9\n\t\t\t\t\t\t\t\tc2.6-0.3,4.4,1,4.6,3c0.2,1.6-0.8,2.8-2,3.2l0.1,0C348.7,581.2,349.3,581.8,349.4,583z M347.3,578.6c-0.1-1.3-1.2-2-2.9-1.8\n\t\t\t\t\t\t\t\tl-6.3,0.6l0.4,4.2l6.3-0.6C346.5,580.8,347.4,579.8,347.3,578.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M365.2,581.5l-8.5,1.4l-1.2,3.5l-2.1,0.4l4.8-13.6l2.4-0.4l9,11.3l-2.2,0.4L365.2,581.5z M364,580l-4.4-5.5\n\t\t\t\t\t\t\t\tl-2.3,6.6L364,580z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M370.5,570.9l1.9-0.4l2.7,12.3l-1.9,0.4L370.5,570.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M390.3,565.9l3.3,12.2l-2.6,0.7l-11.5-7.9l2.7,10.2l-1.9,0.5l-3.3-12.2l2.6-0.7l11.5,7.9l-2.7-10.2\n\t\t\t\t\t\t\t\tL390.3,565.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M413.3,558.1l0.1,13.3l-2.5,0.9l-7-8.9l0.2,11.3l-2.5,0.9l-8.3-10.4l1.9-0.7l7.1,9l-0.2-11.5l2.5-0.9l7.1,9.1\n\t\t\t\t\t\t\t\tl-0.2-11.5L413.3,558.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M428.9,561.4l-7.9,3.5l-0.3,3.7l-2,0.9L420,555l2.3-1l11.5,8.7l-2,0.9L428.9,561.4z M427.3,560.2l-5.6-4.3\n\t\t\t\t\t\t\t\tl-0.6,7L427.3,560.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M443,543.8l-0.5,14.4l-2.3,1.2l-12-8l2-1l10.5,7l0.4-12.6L443,543.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M462.2,545l0.9,1.5l-11.1,6.7l-6.5-10.8l11-6.6l0.9,1.4l-9.3,5.6l1.8,3.1l8.4-5l0.9,1.5l-8.4,5l2,3.4\n\t\t\t\t\t\t\t\tL462.2,545z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M463.8,541.2l1.8-1.2c0.8,1,2.4,1.4,5.2-0.5l0.3-0.2c2.8-1.9,2.9-3.3,2.4-4c-0.5-0.8-1.3-0.9-3.2,0.1\n\t\t\t\t\t\t\t\tl-2.7,1.4c-3.1,1.6-4.7,1.6-6-0.2c-1.1-1.5-0.6-4,3-6.4c3.6-2.5,6.3-2.4,7.8-0.6l-1.8,1.2c-0.9-0.9-2.6-0.9-4.9,0.7l-0.3,0.2\n\t\t\t\t\t\t\t\tc-2.3,1.6-2.7,3-2.2,3.8c0.5,0.8,1.3,0.9,3.4-0.2l2.7-1.4c2.8-1.5,4.6-1.4,5.8,0.4c1.3,1.9,0.4,4.2-3.1,6.7\n\t\t\t\t\t\t\t\tC467.9,543.5,465.3,543.3,463.8,541.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M489.5,524.4l0.8-1.9c1.2,1.4,2.7,1.5,3.9,0.5c1.4-1.2,1.4-2.9-0.1-4.6c-1.5-1.7-3.4-2.1-4.9-0.8\n\t\t\t\t\t\t\t\tc-0.7,0.6-1.2,1.5-1.3,2.4l-0.8,0.1l-3.5-5.2l4.6-4l1.1,0.8l-4.4,3.8l2.4,3.7c0-0.8,0.7-1.9,1.6-2.6c2.1-1.8,4.6-1.7,6.3,0.2\n\t\t\t\t\t\t\t\tc1.8,2.1,1.5,4.6-0.7,6.5C492.9,524.7,490.8,525.1,489.5,524.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M502.2,498.6l6.1-6.5c1.6-1.7,3.6-2,5.2-0.6c1.1,1,1.1,2.4,0.7,3.4c1.1-0.7,2.6-0.7,3.8,0.3\n\t\t\t\t\t\t\t\tc1.5,1.4,1.3,3.7-0.3,5.3l-6.3,6.7L502.2,498.6z M512,496.1c1-1.1,1.1-2.2,0.2-3c-0.8-0.8-1.9-0.6-2.9,0.5l-4.5,4.8l2.7,2.5\n\t\t\t\t\t\t\t\tL512,496.1z M516.2,499.7c1.1-1.2,1.3-2.3,0.3-3.2c-0.9-0.8-2-0.7-3.1,0.5l-4.7,5l2.8,2.6L516.2,499.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M528.5,481.5l3.2,2.7l-1.2,1.5l-2.9-2.4c-0.8-0.6-1.2-0.5-1.8,0.2l-4.7,5.7l3.9,3.2l-1.2,1.5l-9.7-8l5.5-6.7\n\t\t\t\t\t\t\t\tc1.6-2,3.9-2.4,5.4-1.1c1.2,1,1.4,2.6,0.9,3.7l0-0.1C526.7,480.7,527.5,480.7,528.5,481.5z M523.8,479.8c-1-0.9-2.2-0.6-3.3,0.7\n\t\t\t\t\t\t\t\tl-4,4.9l3.2,2.7l4-4.9C524.8,481.9,524.8,480.6,523.8,479.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M538.6,469.2l-5,7l1.6,3.3l-1.2,1.7l-6.2-13l1.4-2l14.3,1.6l-1.3,1.8L538.6,469.2z M536.7,469l-7-0.8l3.1,6.3\n\t\t\t\t\t\t\t\tL536.7,469z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M534.8,458l1-1.6l10.6,6.8l-1,1.6L534.8,458z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M545.4,440.5l10.9,6.3l-1.3,2.3l-13.7,2.5l9.2,5.3l-1,1.7l-10.9-6.3l1.3-2.3l13.7-2.5l-9.2-5.3L545.4,440.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M556.1,418.6l9.5,9.3l-1.2,2.4l-11.2-1.4l8.1,7.9l-1.2,2.4l-13.2-1.5l0.9-1.8l11.4,1.4l-8.3-8l1.1-2.4\n\t\t\t\t\t\t\t\tl11.4,1.4l-8.3-8L556.1,418.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M569.4,410l-3.1,8l2.4,2.8l-0.8,2l-9.2-11.1l0.9-2.3l14.3-2l-0.8,2.1L569.4,410z M567.5,410.2l-7,0.9l4.5,5.4\n\t\t\t\t\t\t\t\tL567.5,410.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M567,387.6l9.9,10.6l-0.8,2.5l-14.1,2.8l0.7-2.1l12.4-2.4l-8.7-9.2L567,387.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M581.4,374.8l1.6,0.4l-3.1,12.6l-12.2-3l3.1-12.4l1.6,0.4l-2.6,10.6l3.5,0.9l2.4-9.5l1.6,0.4l-2.4,9.5l3.8,1\n\t\t\t\t\t\t\t\tL581.4,374.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M579.8,371l0.4-2.1c1.3,0.1,2.7-0.7,3.3-4l0.1-0.4c0.6-3.3-0.2-4.4-1.1-4.5c-0.9-0.2-1.6,0.3-2.2,2.3l-0.9,3\n\t\t\t\t\t\t\t\tc-1.1,3.4-2.2,4.4-4.4,4.1c-1.8-0.3-3.2-2.4-2.5-6.6c0.8-4.3,2.7-6.1,5.1-5.9l-0.4,2.1c-1.3,0-2.5,1.2-3,4l-0.1,0.4\n\t\t\t\t\t\t\t\tc-0.5,2.7,0.1,4,1.1,4.2c0.9,0.2,1.5-0.3,2.2-2.6l0.9-2.9c0.9-3,2.3-4.3,4.4-3.9c2.3,0.4,3.3,2.7,2.5,6.9\n\t\t\t\t\t\t\t\tC584.3,369.7,582.4,371.4,579.8,371z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M586.1,340.9l-0.8-1.9c1.8,0.1,3-0.8,3.1-2.4c0.1-1.8-1.1-3-3.3-3.2c-2.3-0.2-3.8,0.9-4,2.9\n\t\t\t\t\t\t\t\tc-0.1,1,0.2,1.9,0.8,2.6l-0.4,0.6l-6.1-1.2l0.5-6.1l1.3-0.2l-0.4,5.8l4.3,0.9c-0.5-0.5-0.9-1.8-0.8-3c0.2-2.8,2.1-4.5,4.6-4.3\n\t\t\t\t\t\t\t\tc2.7,0.2,4.3,2.2,4.1,5.1C588.8,338.8,587.6,340.5,586.1,340.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M577,313.8l-0.3-8.9c-0.1-2.3,1.1-4,3.2-4.1c1.4,0,2.5,0.9,2.9,1.9c0.3-1.3,1.3-2.4,2.9-2.4\n\t\t\t\t\t\t\t\tc2.1-0.1,3.5,1.7,3.6,4l0.3,9.1L577,313.8z M582,305c0-1.5-0.8-2.3-1.9-2.3c-1.2,0-1.8,0.9-1.7,2.4l0.2,6.6l3.7-0.1L582,305z\n\t\t\t\t\t\t\t\t M587.6,304.7c-0.1-1.6-0.7-2.5-2-2.5c-1.2,0-1.9,1-1.8,2.6l0.2,6.8l3.9-0.1L587.6,304.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M583.4,283.1l4.2-0.4l0.2,1.9l-3.7,0.4c-1,0.1-1.2,0.5-1.1,1.5l0.7,7.4l5-0.5l0.2,1.9l-12.5,1.2l-0.8-8.6\n\t\t\t\t\t\t\t\tc-0.3-2.6,1-4.4,3-4.6c1.6-0.2,2.8,0.8,3.2,2l0-0.1C581.5,283.8,582.1,283.2,583.4,283.1z M578.9,285.2c-1.3,0.1-2,1.2-1.8,2.9\n\t\t\t\t\t\t\t\tl0.6,6.3l4.2-0.4l-0.6-6.3C581.1,285.9,580.2,285,578.9,285.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M581.9,267.2l1.4,8.5l3.5,1.2l0.4,2.1l-13.6-4.8l-0.4-2.4l11.3-9l0.4,2.2L581.9,267.2z M580.4,268.4l-5.5,4.4\n\t\t\t\t\t\t\t\tl6.6,2.3L580.4,268.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M571.3,261.9l-0.4-1.9l12.3-2.7l0.4,1.9L571.3,261.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M566.3,242.1l12.2-3.3l0.7,2.6l-7.9,11.5l10.2-2.7l0.5,1.9l-12.2,3.3l-0.7-2.6l7.9-11.5l-10.2,2.7\n\t\t\t\t\t\t\t\tL566.3,242.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M558.4,219.1l13.3-0.1l0.9,2.5l-8.9,7l11.3-0.2l0.9,2.5l-10.4,8.3l-0.7-1.9l9-7.1l-11.5,0.2l-0.9-2.5l9.1-7.1\n\t\t\t\t\t\t\t\tl-11.5,0.2L558.4,219.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M561.8,203.6l3.5,7.9l3.7,0.3l0.9,2l-14.4-1.3l-1-2.3l8.7-11.5l0.9,2L561.8,203.6z M560.6,205.1l-4.3,5.6\n\t\t\t\t\t\t\t\tl7,0.6L560.6,205.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M544.2,189.4l14.4,0.5l1.2,2.3l-8,12l-1-2l7-10.5l-12.6-0.4L544.2,189.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M545.4,170.2l1.4-0.9l6.7,11.1l-10.8,6.5l-6.6-11l1.4-0.9l5.6,9.3l3.1-1.8l-5-8.4l1.4-0.9l5,8.4l3.4-2\n\t\t\t\t\t\t\t\tL545.4,170.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M541.6,168.7l-1.2-1.8c1-0.8,1.4-2.4-0.5-5.2l-0.2-0.3c-1.9-2.8-3.3-2.9-4-2.4c-0.8,0.5-0.9,1.3,0.1,3.2\n\t\t\t\t\t\t\t\tl1.4,2.7c1.6,3.1,1.6,4.7-0.2,6c-1.5,1.1-4,0.6-6.4-3c-2.5-3.6-2.4-6.3-0.6-7.8l1.2,1.8c-0.9,0.9-0.9,2.6,0.7,4.9l0.2,0.3\n\t\t\t\t\t\t\t\tc1.6,2.3,3,2.8,3.8,2.2c0.8-0.5,0.9-1.3-0.2-3.4l-1.4-2.7c-1.5-2.8-1.4-4.7,0.4-5.8c1.9-1.3,4.2-0.4,6.7,3.1\n\t\t\t\t\t\t\t\tC543.9,164.5,543.7,167.1,541.6,168.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M524.8,142.9l-1.9-0.8c1.4-1.2,1.5-2.7,0.5-3.9c-1.2-1.4-2.9-1.4-4.6,0.1c-1.7,1.5-2.1,3.4-0.8,4.9\n\t\t\t\t\t\t\t\tc0.6,0.7,1.5,1.2,2.4,1.3l0.1,0.8l-5.2,3.5l-4-4.6l0.8-1.1l3.8,4.4l3.7-2.4c-0.8,0-1.9-0.7-2.6-1.6c-1.8-2.1-1.7-4.6,0.2-6.3\n\t\t\t\t\t\t\t\tc2.1-1.8,4.6-1.5,6.5,0.7C525.1,139.5,525.5,141.6,524.8,142.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M499.1,130.2l-6.5-6.1c-1.7-1.6-2-3.6-0.6-5.1c1-1,2.4-1.1,3.4-0.7c-0.7-1.1-0.7-2.6,0.3-3.8\n\t\t\t\t\t\t\t\tc1.4-1.5,3.7-1.3,5.3,0.3l6.7,6.3L499.1,130.2z M496.5,120.4c-1.1-1-2.2-1.1-3-0.2c-0.8,0.8-0.6,1.9,0.5,2.9l4.8,4.5l2.5-2.7\n\t\t\t\t\t\t\t\tL496.5,120.4z M500.2,116.3c-1.2-1.1-2.3-1.3-3.2-0.3c-0.8,0.9-0.7,2,0.5,3.1l5,4.7l2.6-2.8L500.2,116.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M481.9,103.9l2.7-3.2l1.5,1.2l-2.4,2.9c-0.6,0.8-0.5,1.2,0.2,1.8l5.7,4.7l3.2-3.9l1.5,1.2l-8,9.7l-6.7-5.5\n\t\t\t\t\t\t\t\tc-2-1.6-2.4-3.9-1.1-5.4c1-1.2,2.6-1.4,3.7-0.9l-0.1,0C481.1,105.7,481.1,104.9,481.9,103.9z M480.2,108.6c-0.9,1-0.6,2.2,0.7,3.3\n\t\t\t\t\t\t\t\tl4.9,4l2.7-3.2l-4.9-4C482.3,107.6,481,107.6,480.2,108.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M469.6,93.8l7,5l3.3-1.6l1.7,1.2l-13,6.2l-2-1.4l1.6-14.3l1.8,1.3L469.6,93.8z M469.4,95.7l-0.8,7l6.3-3.1\n\t\t\t\t\t\t\t\tL469.4,95.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M458.4,97.6l-1.6-1l6.8-10.6l1.6,1L458.4,97.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M440.9,87l6.3-10.9l2.3,1.3l2.6,13.7l5.3-9.2l1.7,1l-6.3,10.9l-2.3-1.3l-2.6-13.7l-5.3,9.2L440.9,87z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M419.1,76.3l9.3-9.5l2.4,1.2l-1.4,11.2l7.9-8.1l2.4,1.2l-1.5,13.2l-1.8-0.9l1.4-11.4l-8,8.3l-2.4-1.1\n\t\t\t\t\t\t\t\tl1.4-11.4l-8,8.3L419.1,76.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M410.4,63l8,3.1l2.8-2.4l2,0.8l-11.1,9.2l-2.3-0.9l-2-14.3l2.1,0.8L410.4,63z M410.7,64.9l0.9,7l5.4-4.5\n\t\t\t\t\t\t\t\tL410.7,64.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M388,65.4l10.6-9.9l2.5,0.8l2.8,14.1l-2.1-0.7l-2.4-12.4l-9.2,8.7L388,65.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M375.3,51l0.4-1.6l12.6,3.1l-3,12.2l-12.4-3.1l0.4-1.6l10.6,2.6l0.9-3.5l-9.5-2.4l0.4-1.6l9.5,2.4l1-3.8\n\t\t\t\t\t\t\t\tL375.3,51z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M371.5,52.6l-2.1-0.4c0.1-1.3-0.7-2.7-4-3.3l-0.4-0.1c-3.3-0.6-4.4,0.2-4.5,1.1c-0.2,0.9,0.3,1.6,2.3,2.2\n\t\t\t\t\t\t\t\tl3,0.9c3.4,1.1,4.4,2.2,4,4.4c-0.3,1.8-2.4,3.2-6.7,2.5c-4.3-0.8-6.1-2.7-5.9-5.1l2.1,0.4c0,1.3,1.2,2.5,3.9,3l0.4,0.1\n\t\t\t\t\t\t\t\tc2.7,0.5,4-0.1,4.2-1.1c0.2-0.9-0.3-1.5-2.6-2.2l-2.9-0.9c-3-0.9-4.3-2.3-3.9-4.4c0.4-2.3,2.7-3.3,6.9-2.5\n\t\t\t\t\t\t\t\tC370.2,48,371.9,50,371.5,52.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M341.4,46.3l-1.9,0.8c0.1-1.8-0.8-3-2.4-3.1c-1.8-0.1-3,1.1-3.2,3.3c-0.2,2.3,0.9,3.8,2.9,4\n\t\t\t\t\t\t\t\tc1,0.1,1.9-0.2,2.6-0.8l0.6,0.4l-1.2,6.1l-6.1-0.5l-0.2-1.3l5.8,0.4l0.9-4.3c-0.5,0.5-1.8,0.9-3,0.8c-2.8-0.2-4.5-2.1-4.3-4.6\n\t\t\t\t\t\t\t\tc0.2-2.7,2.2-4.3,5.1-4.1C339.3,43.6,341,44.8,341.4,46.3z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "489.5", cy: "518.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "581.5", cy: "336.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "296.5", cy: "582.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "113.5", cy: "490.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "50.5", cy: "296.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "517.5", cy: "142.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "336.5", cy: "50.1", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "141.5", cy: "114.1", r: "13" }
      })])])]), t._v(" "), i("router-link", {
        staticClass: "cursor--select",
        attrs: { to: { path: "/giving" } }
      }, [t.isIe ? i("img", {
        staticClass: "nav-circle_svg-item",
        attrs: { src: "/static/images/nav/nav-donations.png", alt: "Donations" }
      }) : i("svg", {
        staticClass: "nav-circle_svg-item",
        staticStyle: { "enable-background": "new 0 0 632 632" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 632 632",
          "xml:space": "preserve"
        }
      }, [i("g", [i("path", {
        staticClass: "st0",
        attrs: { d: "M361.2,19.1c-0.5,3.8-3.9,6-9,5.4c-4.5-0.6-6.7-2.8-6.8-5.2l2.1,0.3c0.1,1,1,2.8,4.7,3.2l0.4,0\n\t\t\t\t\t \t\tc3.6,0.4,6.3-1,6.6-4c0.4-3-1.7-5-5.4-5.5l-0.4,0c-3.7-0.5-5.8,0.6-6,2.2l0,0.3l5.8,0.7l-0.2,1.7l-6.2-0.8c-1-0.1-1.5-0.7-1.3-1.7\n\t\t\t\t\t \t\tl0.6-4.9l1.9,0.2l-0.2,1.6c0.8-0.7,2.5-1.5,6-1.1C359.1,12.3,361.7,15.4,361.2,19.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M340.9,23.1L339,23l1-12.6l1.9,0.2L340.9,23.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M319.8,22l7.6-12.3l2.6,0.1l6.5,12.9l-2.2-0.1l-5.6-11.3L322,22.1L319.8,22z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M317.3,22.1l-1.9,0l0-12.6l1.9,0L317.3,22.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M297.3,22.6l-0.5-12.6l2.7-0.1l9.5,10.2l-0.4-10.6l1.9-0.1l0.5,12.6l-2.7,0.1L298.8,12l0.4,10.6L297.3,22.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M293.4,16.6c0.4,3.8-2.4,6.8-7.5,7.3c-4.5,0.5-7.2-1.2-7.8-3.5l2.1-0.2c0.3,1,1.6,2.5,5.3,2.1l0.4,0\n\t\t\t\t\t \t\tc3.6-0.4,5.9-2.4,5.6-5.4c-0.3-3-2.8-4.5-6.5-4.1l-0.4,0c-3.7,0.4-5.5,1.9-5.3,3.5l0,0.3l5.8-0.6l0.2,1.7l-6.2,0.6\n\t\t\t\t\t \t\tc-1,0.1-1.6-0.4-1.7-1.4l-0.5-4.9l1.9-0.2l0.2,1.6c0.6-0.8,2.1-2.1,5.6-2.4C289.8,10.4,293,12.8,293.4,16.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M251.5,20.8c-0.5-2.6,1.3-4.9,3.8-5.4c3.1-0.6,5.5,1.7,6.3,5.5c0.9,4.3-0.8,7.3-3.9,8\n\t\t\t\t\t \t\tc-1.6,0.3-2.9,0.1-3.7-0.7l1.4-1.3c0.4,0.9,1.3,1.7,2.4,1.5c2-0.4,2.7-2.6,2.1-6.6c-0.5,1.2-1.6,2.1-3.1,2.4\n\t\t\t\t\t \t\tC254.1,24.7,252,23.4,251.5,20.8z M253.3,20.4c0.4,2.1,1.9,3.2,3.7,2.8c1.4-0.3,2.3-1.2,2.6-2.6c-0.6-3-2.4-4.9-4.3-4.5\n\t\t\t\t\t \t\tC253.6,16.5,252.8,18.2,253.3,20.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M236.5,26.5c1.1,3.6-1.1,7.1-6,8.6c-4.3,1.3-7.3,0.2-8.3-2l2.1-0.6c0.5,0.9,2,2.1,5.6,1l0.3-0.1\n\t\t\t\t\t \t\tc3.5-1.1,5.3-3.4,4.4-6.4c-0.9-2.9-3.6-3.9-7.2-2.8l-0.3,0.1c-3.6,1.1-5,2.9-4.5,4.5l0.1,0.3l5.6-1.7l0.5,1.6l-5.9,1.8\n\t\t\t\t\t \t\tc-0.9,0.3-1.6-0.1-1.9-1l-1.4-4.7l1.8-0.6l0.5,1.6c0.4-0.9,1.7-2.4,5-3.4C231.9,21.2,235.4,22.9,236.5,26.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M219.6,38.5l-1.8,0.6l-4.2-11.9l1.8-0.6L219.6,38.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M199.9,46.1l1.9-14.3l2.4-1l11.1,9.1l-2.1,0.8l-9.7-8l-1.6,12.6L199.9,46.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M197.6,47.2l-1.8,0.8l-5.1-11.5l1.8-0.8L197.6,47.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M179.6,55.8L174,44.5l2.4-1.2l12.8,5.5l-4.7-9.5l1.7-0.9l5.6,11.3l-2.4,1.2l-12.8-5.5l4.7,9.5L179.6,55.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M173.6,51.8c1.9,3.3,0.5,7.2-3.9,9.7c-3.9,2.3-7,1.8-8.5-0.1l1.9-1.1c0.7,0.8,2.5,1.6,5.7-0.2L169,60\n\t\t\t\t\t \t\tc3.2-1.8,4.4-4.5,2.9-7.2c-1.5-2.7-4.4-3-7.6-1.1l-0.3,0.2c-3.2,1.9-4.2,3.9-3.4,5.3l0.2,0.3l5-2.9l0.8,1.5l-5.4,3.1\n\t\t\t\t\t \t\tc-0.9,0.5-1.6,0.3-2.1-0.6l-2.5-4.3l1.7-1l0.8,1.4c0.2-1,1.1-2.7,4.1-4.5C167.9,47.7,171.7,48.6,173.6,51.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M137,72.7c-1.6-2.2-0.8-5,1.3-6.5c2.5-1.8,5.8-0.7,8,2.5c2.5,3.5,2.3,7-0.3,8.9c-1.3,0.9-2.6,1.2-3.7,0.8\n\t\t\t\t\t \t\tl0.7-1.7c0.7,0.7,1.9,1.1,2.8,0.4c1.7-1.2,1.4-3.5-0.8-6.9c0,1.3-0.7,2.5-1.9,3.4C140.9,75.2,138.6,74.9,137,72.7z M138.5,71.6\n\t\t\t\t\t \t\tc1.2,1.8,3,2.2,4.6,1.1c1.1-0.8,1.6-2.1,1.3-3.4c-1.8-2.5-4.2-3.5-5.8-2.4C137.1,67.9,137.1,69.7,138.5,71.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M125.6,84c2.5,2.9,1.9,6.9-2,10.3c-3.4,3-6.6,3.1-8.4,1.5l1.6-1.4c0.8,0.6,2.7,1.1,5.5-1.3l0.3-0.2\n\t\t\t\t\t \t\tc2.8-2.4,3.5-5.3,1.5-7.6c-2-2.3-4.9-2.1-7.7,0.3l-0.3,0.2c-2.8,2.4-3.4,4.7-2.3,5.9L114,92l4.4-3.8l1.1,1.3l-4.7,4.1\n\t\t\t\t\t \t\tc-0.7,0.6-1.5,0.6-2.2-0.2l-3.2-3.7l1.5-1.3l1.1,1.2c0-1,0.6-2.9,3.2-5.2C119.2,81,123.1,81.1,125.6,84z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M115,101.8l-1.4,1.3l-8.6-9.2l1.4-1.3L115,101.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M100,116.7L96,102.8l1.8-1.9l13.9,3.8l-1.5,1.6L98,103l3.6,12.1L100,116.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M98.4,118.6l-1.3,1.4l-9.4-8.4l1.3-1.4L98.4,118.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M85.4,133.8l-9.7-8l1.7-2.1l13.9-0.2l-8.1-6.8l1.2-1.5l9.7,8l-1.7,2.1l-13.9,0.2l8.1,6.8L85.4,133.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M78.3,132.7c3.1,2.2,3.4,6.3,0.4,10.5c-2.7,3.7-5.7,4.5-7.8,3.4l1.3-1.7c0.9,0.4,2.9,0.5,5.1-2.5l0.2-0.3\n\t\t\t\t\t \t\tc2.1-2.9,2.2-6-0.3-7.8c-2.5-1.8-5.2-1-7.4,2l-0.2,0.3c-2.2,3-2.3,5.3-1,6.3l0.3,0.2l3.4-4.7l1.4,1l-3.7,5\n\t\t\t\t\t \t\tc-0.6,0.8-1.3,0.9-2.1,0.3l-4-2.9l1.1-1.6l1.3,1c-0.2-1-0.1-3,2-5.8C71.4,131.2,75.2,130.4,78.3,132.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M53.4,166.6c-2.3-1.4-2.8-4.2-1.5-6.5c1.6-2.7,5-3,8.4-1c3.7,2.2,4.9,5.5,3.3,8.2c-0.8,1.4-1.9,2.2-3,2.3\n\t\t\t\t\t \t\tl0-1.9c0.9,0.3,2.1,0.2,2.7-0.8c1-1.8-0.1-3.7-3.5-5.9c0.6,1.2,0.4,2.6-0.3,3.9C58,167.4,55.7,168,53.4,166.6z M54.2,165\n\t\t\t\t\t \t\tc1.9,1.1,3.6,0.7,4.6-0.9c0.7-1.2,0.6-2.6-0.2-3.7c-2.7-1.6-5.2-1.5-6.2,0.2C51.5,162.2,52.3,163.9,54.2,165z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M47.6,181.6c3.4,1.6,4.6,5.5,2.4,10.2c-1.9,4.1-4.7,5.5-7,4.8l0.9-2c1,0.3,2.9-0.1,4.5-3.5l0.2-0.3\n\t\t\t\t\t \t\tc1.5-3.3,1-6.3-1.8-7.6s-5.3,0-6.9,3.4l-0.2,0.3c-1.6,3.4-1.2,5.7,0.3,6.3l0.3,0.1l2.5-5.3l1.5,0.7l-2.6,5.6\n\t\t\t\t\t \t\tc-0.4,0.9-1.1,1.2-2,0.7l-4.5-2.1l0.8-1.7l1.5,0.7c-0.4-0.9-0.7-2.9,0.8-6C40.5,181.5,44.2,180,47.6,181.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M45.2,202.1l-0.7,1.8l-11.6-4.8l0.7-1.8L45.2,202.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M37.6,221.9l-9.4-11l0.9-2.5l14.2-2.2l-0.8,2.1l-12.5,1.9l8.2,9.6L37.6,221.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M36.9,224.4l-0.6,1.8l-12-3.9l0.6-1.8L36.9,224.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M31.1,243.8L19,240.4l0.7-2.6l12.6-5.9l-10.2-2.9l0.5-1.9l12.1,3.4l-0.7,2.6l-12.6,5.9l10.2,2.9L31.1,243.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M24.2,245.6c3.7,0.8,5.7,4.4,4.6,9.4c-1,4.4-3.4,6.4-5.8,6.3l0.5-2.1c1,0,2.8-0.7,3.6-4.4l0.1-0.4\n\t\t\t\t\t \t\tc0.8-3.6-0.4-6.3-3.4-7c-3-0.6-5.2,1.2-6,4.9l-0.1,0.4c-0.8,3.6,0.1,5.8,1.7,6.1l0.3,0.1l1.2-5.7l1.7,0.4l-1.3,6.1\n\t\t\t\t\t \t\tc-0.2,1-0.8,1.4-1.8,1.2l-4.8-1l0.4-1.9l1.6,0.3c-0.6-0.8-1.3-2.7-0.6-6.1C17.2,247.1,20.5,244.8,24.2,245.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M15.2,286.8c-2.7-0.3-4.3-2.7-4-5.3c0.4-3.1,3.3-4.7,7.2-4.3c4.3,0.5,6.7,3,6.4,6.2c-0.2,1.6-0.8,2.7-1.8,3.3\n\t\t\t\t\t \t\tl-0.8-1.7c1-0.1,2-0.7,2.2-1.8c0.2-2-1.7-3.4-5.6-4c1,0.9,1.4,2.2,1.3,3.7C19.7,285.5,17.8,287.1,15.2,286.8z M15.3,284.9\n\t\t\t\t\t \t\tc2.1,0.2,3.6-0.8,3.8-2.7c0.2-1.4-0.5-2.6-1.7-3.3c-3.1-0.3-5.4,0.8-5.6,2.7C11.7,283.4,13.1,284.7,15.3,284.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M15.9,302.8c3.8,0.1,6.4,3.2,6.3,8.4c-0.1,4.5-2.1,7-4.5,7.3l0-2.2c1-0.2,2.7-1.3,2.7-5l0-0.4\n\t\t\t\t\t \t\tc0.1-3.6-1.6-6.1-4.7-6.2s-4.8,2.2-4.9,5.9l0,0.4c-0.1,3.7,1.2,5.7,2.8,5.7l0.3,0l0.1-5.8l1.7,0l-0.1,6.2c0,1-0.6,1.5-1.6,1.5\n\t\t\t\t\t \t\tl-4.9-0.1l0-1.9l1.6,0c-0.7-0.7-1.8-2.4-1.7-5.8C9.4,305.5,12.2,302.7,15.9,302.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M22.1,322.5l0,1.9l-12.6,0.3l0-1.9L22.1,322.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M23.2,343.7l-13-6.2l-0.2-2.6l12.1-7.8l0.1,2.2L11.6,336l11.4,5.4L23.2,343.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M23.5,346.2l0.2,1.9l-12.5,1.3l-0.2-1.9L23.5,346.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M26.2,366l-12.5,1.8l-0.4-2.6l9.1-10.5L12,356.2l-0.3-1.9l12.5-1.8l0.4,2.6l-9.1,10.5l10.5-1.5L26.2,366z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M20.5,370.5c3.7-0.8,7,1.7,8,6.7c0.9,4.4-0.4,7.2-2.7,8.1l-0.4-2.1c1-0.4,2.3-1.8,1.5-5.5l-0.1-0.4\n\t\t\t\t\t \t\tc-0.8-3.6-3-5.6-5.9-5c-3,0.6-4.2,3.2-3.4,6.9l0.1,0.4c0.8,3.6,2.5,5.2,4,4.9l0.3-0.1l-1.2-5.7l1.7-0.3l1.3,6.1\n\t\t\t\t\t \t\tc0.2,1-0.2,1.6-1.2,1.8l-4.8,1l-0.4-1.9l1.6-0.3c-0.9-0.5-2.3-1.9-3-5.3C14.8,374.6,16.8,371.3,20.5,370.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M29.1,411.7c-2.6,0.8-5-0.7-5.8-3.2c-0.9-3,1.1-5.7,4.9-6.9c4.1-1.3,7.4,0,8.3,3c0.5,1.5,0.4,2.8-0.3,3.8\n\t\t\t\t\t \t\tl-1.4-1.2c0.9-0.5,1.6-1.5,1.2-2.5c-0.6-1.9-2.9-2.4-6.8-1.4c1.3,0.4,2.2,1.4,2.7,2.8C32.8,408.7,31.7,410.9,29.1,411.7z M28.5,410\n\t\t\t\t\t \t\tc2.1-0.6,3-2.2,2.4-4c-0.4-1.3-1.5-2.2-2.9-2.3c-2.9,0.9-4.6,2.9-4,4.8C24.6,410.1,26.4,410.7,28.5,410z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M36.4,426c3.5-1.5,7.2,0.3,9.2,5.1c1.8,4.2,1,7.2-1.1,8.5l-0.8-2c0.9-0.6,1.9-2.3,0.5-5.7l-0.1-0.3\n\t\t\t\t\t \t\tc-1.4-3.3-4-4.9-6.8-3.8c-2.8,1.2-3.5,4-2.1,7.4l0.1,0.3c1.5,3.4,3.4,4.7,4.9,4l0.3-0.1l-2.3-5.4l1.6-0.7l2.4,5.7\n\t\t\t\t\t \t\tc0.4,0.9,0.1,1.6-0.8,2l-4.5,1.9l-0.8-1.8l1.5-0.6c-1-0.3-2.6-1.4-3.9-4.6C31.5,431.2,32.9,427.5,36.4,426z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M50,441.6l0.8,1.7l-11.4,5.4l-0.8-1.7L50,441.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M59.6,460.4L45.2,460l-1.2-2.3l7.9-12l1,2l-7,10.5l12.6,0.3L59.6,460.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M61,462.5l1,1.7L51,470.5l-1-1.7L61,462.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M71.4,479.6l-10.7,6.7l-1.4-2.3l4.1-13.3l-8.9,5.7l-1-1.6l10.7-6.7l1.4,2.3l-4.1,13.3l8.9-5.7L71.4,479.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M68,486c3.1-2.2,7.1-1.3,10.1,2.9c2.7,3.7,2.5,6.8,0.8,8.5l-1.3-1.8c0.7-0.8,1.4-2.6-0.8-5.6l-0.2-0.3\n\t\t\t\t\t \t\tc-2.1-2.9-5-3.9-7.5-2.1c-2.5,1.8-2.5,4.7-0.4,7.7l0.2,0.3c2.2,3,4.4,3.8,5.7,2.9l0.3-0.2l-3.4-4.7l1.4-1l3.6,5\n\t\t\t\t\t \t\tc0.6,0.8,0.5,1.6-0.3,2.1l-4,2.9l-1.1-1.6l1.3-1c-1-0.1-2.8-0.8-4.9-3.7C64.5,492.1,65,488.2,68,486z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M92.6,520.2c-2,1.8-4.9,1.3-6.6-0.6c-2.1-2.3-1.3-5.6,1.7-8.2c3.3-2.9,6.8-3,8.8-0.6c1.1,1.2,1.5,2.4,1.2,3.6\n\t\t\t\t\t \t\tl-1.8-0.5c0.6-0.8,0.9-2,0.1-2.8c-1.3-1.5-3.6-1-6.7,1.5c1.3-0.2,2.6,0.4,3.6,1.5C94.7,516,94.6,518.4,92.6,520.2z M91.3,518.9\n\t\t\t\t\t \t\tc1.6-1.4,1.8-3.2,0.6-4.6c-0.9-1.1-2.2-1.4-3.6-0.9c-2.3,2.1-3,4.5-1.7,6C87.8,520.6,89.6,520.4,91.3,518.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M105,530.3c2.6-2.8,6.7-2.6,10.5,0.9c3.3,3.1,3.8,6.2,2.4,8.2l-1.6-1.5c0.6-0.9,0.8-2.8-1.9-5.4l-0.3-0.2\n\t\t\t\t\t \t\tc-2.6-2.5-5.6-2.9-7.7-0.7c-2.1,2.2-1.6,5.1,1.1,7.6l0.3,0.2c2.7,2.5,5,2.9,6.1,1.7l0.2-0.2l-4.2-4l1.2-1.2l4.5,4.2\n\t\t\t\t\t \t\tc0.7,0.7,0.7,1.4,0.1,2.2l-3.4,3.6l-1.4-1.3l1.1-1.2c-1,0.1-2.9-0.3-5.5-2.7C102.7,537,102.4,533.1,105,530.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M123.8,539l1.5,1.3l-8.2,9.6l-1.5-1.3L123.8,539z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M140.2,552.4l-13.4,5.5l-2.1-1.6l2.4-14.2l1.7,1.4l-2.1,12.4l11.7-4.8L140.2,552.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M142.3,553.8l1.6,1.1l-7.4,10.2l-1.6-1.1L142.3,553.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M158.8,565.1l-7,10.5l-2.2-1.5l-1.7-13.8l-5.9,8.8l-1.6-1.1l7-10.5l2.2,1.5l1.7,13.8l5.9-8.8L158.8,565.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M158.3,572.3c1.9-3.3,5.9-4,10.4-1.5c3.9,2.3,5.1,5.2,4.2,7.4l-1.9-1.1c0.3-1,0.2-2.9-3-4.8l-0.3-0.2\n\t\t\t\t\t \t\tc-3.1-1.8-6.1-1.6-7.7,1.1c-1.5,2.6-0.4,5.3,2.8,7.2l0.3,0.2c3.2,1.9,5.5,1.7,6.3,0.3l0.2-0.3l-5-2.9l0.8-1.5l5.4,3.1\n\t\t\t\t\t \t\tc0.9,0.5,1.1,1.2,0.6,2.1l-2.5,4.3l-1.7-1l0.8-1.4c-1,0.3-2.9,0.4-5.9-1.3C157.6,579.3,156.4,575.6,158.3,572.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M194.7,593.5c-1.1,2.4-3.9,3.2-6.3,2.1c-2.8-1.3-3.5-4.6-1.8-8.2c1.8-3.9,5-5.5,7.8-4.2\n\t\t\t\t\t \t\tc1.5,0.7,2.3,1.6,2.6,2.8l-1.9,0.2c0.2-0.9,0-2.1-1-2.6c-1.8-0.8-3.7,0.5-5.5,4.1c1.1-0.7,2.5-0.7,3.9-0.1\n\t\t\t\t\t \t\tC194.9,588.9,195.8,591.1,194.7,593.5z M193,592.8c0.9-2,0.4-3.7-1.4-4.5c-1.3-0.6-2.6-0.4-3.6,0.6c-1.3,2.8-0.9,5.4,0.8,6.2\n\t\t\t\t\t \t\tC190.4,595.8,192.1,594.9,193,592.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M210.2,597.7c1.2-3.6,5-5.1,9.9-3.4c4.3,1.5,6,4.1,5.5,6.5l-2-0.7c0.1-1-0.4-2.9-3.9-4.1l-0.3-0.1\n\t\t\t\t\t \t\tc-3.4-1.2-6.3-0.4-7.3,2.5c-1,2.9,0.6,5.3,4.1,6.5l0.3,0.1c3.5,1.2,5.8,0.6,6.3-0.9l0.1-0.3l-5.5-1.9l0.6-1.6l5.9,2\n\t\t\t\t\t \t\tc0.9,0.3,1.3,1,0.9,1.9l-1.6,4.7l-1.8-0.6l0.5-1.5c-0.9,0.5-2.8,1-6.1-0.2C210.8,604.8,208.9,601.3,210.2,597.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M231.1,598.1l1.8,0.5l-3.5,12.1l-1.8-0.5L231.1,598.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M251.6,603.6l-10,10.5l-2.5-0.7l-3.6-13.9l2.1,0.6l3.1,12.2l8.7-9.2L251.6,603.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M254.1,604l1.9,0.4l-2.6,12.3l-1.9-0.4L254.1,604z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M273.8,607.7l-2.1,12.4l-2.6-0.5l-7.1-12l-1.8,10.4l-1.9-0.3l2.1-12.4l2.6,0.5l7.1,12l1.8-10.4L273.8,607.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M276.3,614.4c0.4-3.8,3.8-6.1,8.9-5.6c4.5,0.5,6.8,2.7,6.9,5.1l-2.1-0.2c-0.1-1-1-2.8-4.7-3.2l-0.4,0\n\t\t\t\t\t \t\tc-3.6-0.4-6.3,1.1-6.6,4.1c-0.3,3,1.8,5,5.5,5.4l0.4,0c3.7,0.4,5.7-0.7,5.9-2.3l0-0.3l-5.8-0.6l0.2-1.7l6.2,0.7\n\t\t\t\t\t \t\tc1,0.1,1.5,0.7,1.4,1.7l-0.5,4.9l-1.9-0.2l0.2-1.6c-0.8,0.7-2.5,1.6-6,1.2C278.4,621.2,275.9,618.2,276.3,614.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M318.1,619.1c0,2.7-2.3,4.5-4.9,4.5c-3.1,0-5.1-2.8-5-6.8c0-4.3,2.3-7,5.5-7c1.6,0,2.8,0.5,3.5,1.5l-1.6,1\n\t\t\t\t\t \t\tc-0.2-1-0.9-2-2-2c-2,0-3.2,2-3.4,6c0.8-1.1,2-1.7,3.5-1.7C316.4,614.7,318.1,616.4,318.1,619.1z M316.3,619.1\n\t\t\t\t\t \t\tc0-2.2-1.2-3.5-3.1-3.5c-1.4,0-2.5,0.7-3.1,2c0,3.1,1.3,5.3,3.3,5.3C315.1,622.9,316.3,621.4,316.3,619.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M334,616.7c-0.3-3.8,2.5-6.7,7.7-7.2c4.5-0.4,7.1,1.3,7.7,3.7l-2.2,0.2c-0.3-1-1.6-2.5-5.2-2.2l-0.4,0\n\t\t\t\t\t \t\tc-3.6,0.3-5.9,2.2-5.7,5.3c0.3,3,2.7,4.6,6.4,4.3l0.4,0c3.7-0.3,5.5-1.8,5.4-3.4l0-0.3l-5.8,0.5l-0.1-1.7l6.2-0.5\n\t\t\t\t\t \t\tc1-0.1,1.6,0.4,1.7,1.4l0.4,4.9l-1.9,0.2l-0.1-1.6c-0.6,0.8-2.2,2-5.6,2.3C337.4,622.9,334.3,620.4,334,616.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M353,608.5l1.9-0.2l1.6,12.5l-1.9,0.2L353,608.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M373.9,605.2l-4.8,13.6l-2.6,0.4l-9-11.2l2.2-0.4l7.9,9.9l4.2-11.9L373.9,605.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M376.3,604.6l1.9-0.4l2.6,12.3l-1.9,0.4L376.3,604.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M395.8,599.9l3.1,12.2l-2.6,0.7l-11.4-8l2.6,10.3l-1.9,0.5l-3.1-12.2l2.6-0.7l11.4,8l-2.6-10.3L395.8,599.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M400.8,605c-1.2-3.6,1-7.1,5.9-8.7c4.3-1.4,7.3-0.3,8.3,1.8l-2.1,0.7c-0.5-0.9-2.1-2.1-5.6-1L407,598\n\t\t\t\t\t \t\tc-3.5,1.1-5.3,3.5-4.3,6.4c0.9,2.9,3.6,3.9,7.2,2.7l0.3-0.1c3.5-1.1,5-3,4.5-4.5l-0.1-0.3l-5.5,1.8l-0.5-1.6l5.9-1.9\n\t\t\t\t\t \t\tc0.9-0.3,1.6,0,1.9,1l1.5,4.7l-1.8,0.6l-0.5-1.6c-0.4,0.9-1.7,2.5-5,3.5C405.5,610.3,402,608.6,400.8,605z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M440.9,592.2c1.1,2.5-0.2,5.1-2.6,6.1c-2.9,1.2-5.8-0.5-7.3-4.1c-1.7-4-0.7-7.3,2.2-8.6\n\t\t\t\t\t \t\tc1.5-0.6,2.8-0.7,3.8-0.1l-1.1,1.5c-0.5-0.8-1.6-1.4-2.6-1c-1.9,0.8-2.1,3.1-0.7,6.9c0.3-1.3,1.2-2.4,2.6-2.9\n\t\t\t\t\t \t\tC437.6,588.9,439.9,589.7,440.9,592.2z M439.3,593c-0.9-2-2.5-2.7-4.2-2c-1.3,0.6-2,1.7-2,3.1c1.2,2.8,3.4,4.3,5.1,3.5\n\t\t\t\t\t \t\tC439.8,596.9,440.2,595.1,439.3,593z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M454.4,583.5c-1.8-3.3-0.4-7.2,4.1-9.7c4-2.2,7.1-1.7,8.5,0.2l-1.9,1c-0.7-0.8-2.4-1.7-5.7,0.1l-0.3,0.2\n\t\t\t\t\t \t\tc-3.2,1.8-4.5,4.5-3,7.1s4.3,3.1,7.6,1.3l0.3-0.2c3.3-1.8,4.3-3.9,3.5-5.3l-0.2-0.3l-5.1,2.8l-0.8-1.5l5.4-3\n\t\t\t\t\t \t\tc0.9-0.5,1.6-0.3,2.1,0.6l2.4,4.3l-1.7,0.9l-0.8-1.4c-0.2,1-1.2,2.7-4.2,4.4C460,587.8,456.2,586.8,454.4,583.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M468.5,568.3l1.6-1l6.5,10.8l-1.6,1L468.5,568.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M486.2,556.9l1.1,14.4l-2.2,1.5l-12.8-6.6l1.8-1.2l11.2,5.8l-1-12.6L486.2,556.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M488.2,555.3l1.6-1.1l7.4,10.2l-1.6,1.1L488.2,555.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M504.1,543.1l7.8,9.9l-2.1,1.6l-13.7-2.7l6.6,8.3l-1.5,1.2l-7.8-9.9l2.1-1.6l13.7,2.7l-6.6-8.3L504.1,543.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M510.8,545.8c-2.5-2.8-2-6.9,1.8-10.3c3.4-3,6.5-3.2,8.4-1.7l-1.6,1.4c-0.8-0.6-2.7-1.1-5.5,1.4l-0.3,0.2\n\t\t\t\t\t \t\tc-2.7,2.4-3.4,5.4-1.4,7.6s4.9,2,7.7-0.4l0.3-0.2c2.8-2.5,3.3-4.7,2.2-5.9l-0.2-0.2l-4.3,3.9l-1.1-1.3l4.6-4.1\n\t\t\t\t\t \t\tc0.7-0.7,1.5-0.6,2.2,0.1l3.3,3.7l-1.4,1.3l-1.1-1.2c0,1-0.5,2.9-3.1,5.2C517.3,548.7,513.3,548.6,510.8,545.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M542.3,517.8c2,1.8,1.8,4.7,0.1,6.6c-2.1,2.3-5.5,1.9-8.4-0.8c-3.2-2.9-3.7-6.4-1.5-8.7\n\t\t\t\t\t \t\tc1.1-1.2,2.3-1.7,3.4-1.6l-0.3,1.8c-0.8-0.5-2.1-0.6-2.8,0.2c-1.4,1.5-0.6,3.7,2.2,6.6c-0.3-1.3,0.1-2.6,1.1-3.7\n\t\t\t\t\t \t\tC537.9,516.2,540.3,516,542.3,517.8z M541.1,519.2c-1.6-1.5-3.4-1.5-4.7-0.1c-1,1-1.2,2.4-0.6,3.6c2.3,2.1,4.8,2.5,6.1,1.1\n\t\t\t\t\t \t\tC543.1,522.6,542.8,520.8,541.1,519.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M551.1,504.4c-3-2.3-3.3-6.4-0.2-10.5c2.7-3.6,5.8-4.4,7.9-3.3l-1.3,1.7c-0.9-0.5-2.9-0.5-5.1,2.4l-0.2,0.3\n\t\t\t\t\t \t\tc-2.2,2.9-2.3,5.9,0.1,7.8c2.4,1.8,5.2,1.1,7.5-1.9l0.2-0.3c2.2-3,2.4-5.3,1.1-6.3l-0.3-0.2l-3.5,4.6l-1.3-1l3.8-4.9\n\t\t\t\t\t \t\tc0.6-0.8,1.4-0.9,2.1-0.3l3.9,3l-1.2,1.5l-1.3-1c0.2,1,0,3-2.1,5.7C558,506.1,554.1,506.7,551.1,504.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M557.8,484.8l1.1-1.6l10.4,7.2l-1.1,1.6L557.8,484.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M569.3,467.1l6.9,12.7l-1.4,2.2l-14.4-0.9l1.2-1.9l12.6,0.8l-6-11.1L569.3,467.1z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M570.5,464.9l1-1.7l10.9,6.3l-1,1.7L570.5,464.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M580,447.3l11.2,5.8l-1.2,2.4l-13.6,3.1l9.4,4.9l-0.9,1.7l-11.2-5.8l1.2-2.4l13.6-3.1l-9.4-4.9L580,447.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M587.2,447c-3.4-1.5-4.6-5.5-2.5-10.2c1.9-4.1,4.6-5.6,6.9-5l-0.9,2c-1-0.2-2.9,0.1-4.5,3.5l-0.1,0.3\n\t\t\t\t\t \t\tc-1.5,3.3-0.9,6.3,1.9,7.5c2.8,1.2,5.3-0.1,6.8-3.5l0.1-0.3c1.5-3.4,1.1-5.7-0.4-6.3l-0.3-0.1l-2.4,5.3l-1.5-0.7l2.5-5.7\n\t\t\t\t\t \t\tc0.4-0.9,1.1-1.2,2-0.8l4.5,2l-0.8,1.8l-1.5-0.7c0.4,0.9,0.7,2.9-0.7,6C594.3,447,590.7,448.6,587.2,447z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M604.5,408.6c2.5,0.9,3.6,3.6,2.8,6c-1,3-4.2,3.9-8,2.7c-4.1-1.4-6-4.4-4.9-7.4c0.5-1.5,1.4-2.5,2.5-2.8\n\t\t\t\t\t \t\tl0.4,1.8c-1-0.1-2.1,0.2-2.5,1.3c-0.7,1.9,0.9,3.6,4.7,5.1c-0.8-1.1-1-2.5-0.5-3.9C599.9,408.9,602,407.8,604.5,408.6z M604,410.4\n\t\t\t\t\t \t\tc-2-0.7-3.7,0-4.3,1.8c-0.4,1.3-0.1,2.6,1,3.6c2.9,1,5.4,0.4,6-1.5C607.3,412.6,606.2,411.1,604,410.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M607.2,392.5c-3.7-0.9-5.6-4.5-4.4-9.5c1-4.4,3.5-6.4,5.9-6.2l-0.5,2.1c-1,0-2.9,0.7-3.7,4.3l-0.1,0.4\n\t\t\t\t\t \t\tc-0.8,3.5,0.3,6.3,3.3,7c3,0.7,5.2-1.1,6-4.8l0.1-0.4c0.8-3.6,0-5.8-1.6-6.2l-0.3-0.1l-1.3,5.7l-1.6-0.4l1.4-6\n\t\t\t\t\t \t\tc0.2-1,0.9-1.4,1.8-1.1l4.8,1.1l-0.4,1.9l-1.6-0.4c0.6,0.8,1.2,2.7,0.4,6.1C614.2,391.2,610.9,393.4,607.2,392.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M605.4,371.9l0.4-1.9l12.4,2.3l-0.4,1.9L605.4,371.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M608.7,351l11.4,8.8l-0.4,2.6l-13.5,5l0.3-2.2l11.8-4.4l-10-7.7L608.7,351z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M608.9,348.5l0.2-1.9l12.5,1.3l-0.2,1.9L608.9,348.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M610.5,328.6l12.6,0.8l-0.2,2.7l-11.2,8.4l10.6,0.7l-0.1,1.9l-12.6-0.8l0.2-2.7l11.2-8.4l-10.6-0.7\n\t\t\t\t\t \t\tL610.5,328.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M617,325.4c-3.8,0-6.5-3.1-6.5-8.3c0-4.5,1.9-7,4.3-7.3l0,2.2c-1,0.2-2.6,1.3-2.6,5l0,0.4\n\t\t\t\t\t \t\tc0,3.6,1.7,6.1,4.8,6.1c3.1,0,4.8-2.3,4.8-6l0-0.4c0-3.7-1.3-5.6-2.9-5.6l-0.3,0l0,5.8l-1.7,0l0-6.2c0-1,0.5-1.5,1.5-1.5l4.9,0\n\t\t\t\t\t \t\tl0,1.9l-1.6,0c0.8,0.7,1.8,2.3,1.8,5.8C623.4,322.5,620.7,325.4,617,325.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M617.2,283.2c2.7-0.3,4.7,1.8,5,4.4c0.3,3.1-2.3,5.3-6.2,5.7c-4.3,0.4-7.2-1.6-7.5-4.7\n\t\t\t\t\t \t\tc-0.1-1.6,0.2-2.8,1.1-3.6l1.1,1.5c-0.9,0.3-1.8,1.1-1.7,2.2c0.2,2,2.3,2.9,6.3,2.7c-1.2-0.6-1.9-1.8-2-3.3\n\t\t\t\t\t \t\tC613,285.4,614.5,283.5,617.2,283.2z M617.4,285c-2.2,0.2-3.4,1.5-3.2,3.4c0.1,1.4,1,2.4,2.3,2.9c3.1-0.3,5.1-1.9,4.9-3.8\n\t\t\t\t\t \t\tC621.3,285.8,619.7,284.8,617.4,285z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M613.1,267.7c-3.7,0.7-6.9-1.8-7.9-6.9c-0.9-4.5,0.6-7.2,2.9-8l0.4,2.1c-1,0.4-2.3,1.8-1.6,5.4l0.1,0.4\n\t\t\t\t\t \t\tc0.7,3.6,2.8,5.7,5.9,5.1c3-0.6,4.3-3.1,3.6-6.8l-0.1-0.4c-0.7-3.7-2.4-5.3-3.9-5l-0.3,0.1l1.1,5.7l-1.7,0.3l-1.2-6.1\n\t\t\t\t\t \t\tc-0.2-1,0.2-1.6,1.2-1.8l4.8-0.9l0.4,1.9l-1.6,0.3c0.9,0.5,2.2,2,2.9,5.4C618.9,263.7,616.8,267,613.1,267.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M603,249.7l-0.4-1.9l12.3-2.9l0.4,1.9L603,249.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M597.5,229.2l14,3.4l0.7,2.5L602,245.3l-0.6-2.1l9-8.8l-12.3-2.9L597.5,229.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M596.7,226.9l-0.6-1.8l12-3.9l0.6,1.8L596.7,226.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M590,208l11.8-4.4l0.9,2.5l-6.8,12.2l9.9-3.7l0.7,1.8l-11.8,4.4l-0.9-2.5l6.8-12.2l-9.9,3.7L590,208z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M594.6,202.5c-3.5,1.5-7.2-0.2-9.3-4.9c-1.8-4.2-1.1-7.2,1-8.5l0.9,2c-0.9,0.6-1.9,2.3-0.4,5.7l0.1,0.3\n\t\t\t\t\t \t\tc1.5,3.3,4,4.9,6.8,3.6c2.8-1.2,3.5-4,1.9-7.5l-0.1-0.3c-1.5-3.4-3.5-4.6-5-4l-0.3,0.1l2.3,5.3l-1.5,0.7l-2.5-5.7\n\t\t\t\t\t \t\tc-0.4-0.9-0.1-1.6,0.8-2l4.5-2l0.8,1.8l-1.5,0.7c1,0.3,2.6,1.4,4,4.6C599.3,197.2,598,201,594.6,202.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M577.7,163.9c2.3-1.3,5.1-0.3,6.3,2c1.5,2.7,0.1,5.8-3.3,7.7c-3.8,2.1-7.2,1.5-8.8-1.3\n\t\t\t\t\t \t\tc-0.8-1.4-0.9-2.7-0.5-3.7l1.6,0.9c-0.7,0.6-1.2,1.8-0.7,2.7c1,1.8,3.3,1.8,6.9-0.1c-1.3-0.1-2.5-0.9-3.2-2.2\n\t\t\t\t\t \t\tC574.8,167.5,575.4,165.2,577.7,163.9z M578.6,165.5c-1.9,1.1-2.5,2.8-1.5,4.4c0.7,1.2,1.9,1.8,3.3,1.7c2.7-1.5,3.9-3.8,3-5.5\n\t\t\t\t\t \t\tC582.5,164.6,580.6,164.4,578.6,165.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M567.7,151.4c-3.1,2.2-7.1,1.2-10-3.1c-2.6-3.7-2.4-6.9-0.7-8.5l1.2,1.8c-0.7,0.7-1.4,2.6,0.7,5.6l0.2,0.3\n\t\t\t\t\t \t\tc2.1,3,4.9,4,7.4,2.3c2.5-1.7,2.6-4.6,0.5-7.7l-0.2-0.3c-2.1-3.1-4.3-3.9-5.6-3l-0.3,0.2l3.3,4.8l-1.4,1l-3.5-5.1\n\t\t\t\t\t \t\tc-0.6-0.8-0.4-1.6,0.4-2.1l4.1-2.8l1.1,1.6l-1.3,0.9c1,0.1,2.8,0.9,4.8,3.7C571.4,145.3,570.8,149.2,567.7,151.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M551.1,139l-1.2-1.5l10-7.6l1.2,1.5L551.1,139z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M537.9,122.5l14.2-2.6l1.7,2l-5.3,13.4l-1.4-1.7l4.7-11.7l-12.4,2.3L537.9,122.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M536.1,120.7l-1.3-1.4l9.4-8.4l1.3,1.4L536.1,120.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M522.4,106.2l9-8.8l1.9,1.9l-1.3,13.9l7.6-7.4l1.3,1.4l-9,8.8L530,114l1.3-13.9l-7.6,7.4L522.4,106.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M524.3,99.2c-2.5,2.8-6.6,2.7-10.5-0.8c-3.4-3.1-3.9-6.1-2.5-8.1l1.6,1.5c-0.5,0.9-0.8,2.8,2,5.3l0.3,0.2\n\t\t\t\t\t \t\tc2.7,2.4,5.7,2.8,7.7,0.6c2.1-2.3,1.5-5.1-1.2-7.6l-0.3-0.2c-2.8-2.5-5.1-2.8-6.1-1.6l-0.2,0.2l4.3,3.9l-1.1,1.3l-4.6-4.2\n\t\t\t\t\t \t\tc-0.7-0.7-0.8-1.4-0.1-2.2l3.3-3.6l1.4,1.3l-1.1,1.2c1-0.1,3,0.2,5.5,2.6C526.5,92.5,526.9,96.4,524.3,99.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M493.2,70.8c1.6-2.2,4.5-2.3,6.6-0.8c2.5,1.9,2.4,5.3,0.1,8.4c-2.6,3.5-6,4.3-8.5,2.4c-1.3-1-2-2.1-1.9-3.2\n\t\t\t\t\t \t\tl1.9,0.2c-0.4,0.9-0.4,2.1,0.5,2.8c1.6,1.2,3.7,0.3,6.3-2.9c-1.3,0.4-2.6,0.2-3.8-0.7C492,75.3,491.6,72.9,493.2,70.8z M494.7,71.8\n\t\t\t\t\t \t\tc-1.3,1.7-1.1,3.5,0.4,4.7c1.1,0.8,2.5,0.9,3.7,0.2c1.8-2.5,2-5,0.5-6.2C497.8,69.4,496,70,494.7,71.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M479,63.5c-2,3.2-6,3.9-10.4,1.3c-3.9-2.3-5-5.3-4.1-7.5l1.8,1.1c-0.4,1-0.2,2.9,3,4.9l0.3,0.2\n\t\t\t\t\t \t\tc3.1,1.9,6.1,1.7,7.7-0.9c1.6-2.6,0.5-5.3-2.7-7.2l-0.3-0.2c-3.2-1.9-5.5-1.8-6.3-0.4l-0.2,0.3l5,3l-0.9,1.4l-5.3-3.2\n\t\t\t\t\t \t\tc-0.8-0.5-1-1.3-0.5-2.1l2.5-4.2l1.6,1l-0.8,1.4c1-0.3,2.9-0.3,5.9,1.4C479.9,56.4,480.9,60.2,479,63.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M458.8,58.9l-1.7-0.9l6-11l1.7,0.9L458.8,58.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M440,49.2l11.9-8.2l2.4,1.2l0.6,14.4l-2-1l-0.5-12.6l-10.4,7.2L440,49.2z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M437.6,48.3l-1.8-0.8L441,36l1.8,0.8L437.6,48.3z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M419.2,40.6l4.7-11.7l2.5,1l4.5,13.2l3.9-9.8l1.8,0.7l-4.7,11.7l-2.5-1l-4.5-13.2l-3.9,9.8L419.2,40.6z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M418.1,33.5c-1.2,3.6-5,5.2-9.9,3.6c-4.3-1.4-6-4-5.6-6.4l2.1,0.7c-0.1,1,0.4,2.9,4,4.1l0.3,0.1\n\t\t\t\t\t \t\tc3.5,1.1,6.3,0.3,7.3-2.6c1-2.9-0.7-5.3-4.2-6.4l-0.3-0.1c-3.5-1.2-5.8-0.5-6.3,1l-0.1,0.3l5.5,1.8l-0.5,1.6l-5.9-1.9\n\t\t\t\t\t \t\tc-0.9-0.3-1.3-1-1-1.9l1.5-4.7l1.8,0.6l-0.5,1.6c0.9-0.5,2.8-1,6.1,0.1C417.4,26.5,419.3,29.9,418.1,33.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M377.8,20.1c0.6-2.6,3.2-4,5.7-3.4c3,0.7,4.4,3.8,3.5,7.7c-1,4.2-3.7,6.4-6.8,5.7c-1.6-0.4-2.6-1.1-3.1-2.2\n\t\t\t\t\t \t\tl1.8-0.6c0,1,0.5,2.1,1.6,2.3c2,0.4,3.5-1.3,4.6-5.2c-1,0.9-2.3,1.2-3.8,0.9C378.5,24.7,377.2,22.7,377.8,20.1z M379.6,20.5\n\t\t\t\t\t \t\tc-0.5,2.1,0.4,3.7,2.2,4.1c1.4,0.3,2.6-0.2,3.4-1.3c0.7-3-0.2-5.4-2.1-5.9C381.5,17,380.1,18.3,379.6,20.5z" }
      })]), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "313.5", cy: "616.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "191.5", cy: "589.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "435.5", cy: "592.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "537.5", cy: "519.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "615.5", cy: "288.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "600.5", cy: "412.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "90.5", cy: "515.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "29.5", cy: "406.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "17.5", cy: "282.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "57.5", cy: "163.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "141.5", cy: "71.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "256.5", cy: "22.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "577.5", cy: "169.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "495.5", cy: "75.5", r: "13" }
      }), t._v(" "), i("circle", {
        staticClass: "st1",
        attrs: { cx: "381.5", cy: "23.5", r: "13" }
      })])])], 1)]), t._v(" "), i("a", {
        staticClass: "wetransfer-logo",
        attrs: { href: "https://wetransfer.com/", target: "_blank" }
      })])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--brainwaves" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("video", {
        staticClass: "brainwaves__video-intro mobile-hidden",
        attrs: { src: "/static/videos/brainwaves/water.mp4", autoplay: "", playsinline: "", loop: "" }
      }), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("An")]), t._v(" "), i("span", [t._v(" electrical")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" impulse")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of ")]), t._v(" "), i("span", [t._v("the ")]), t._v(" "), i("span", [t._v("mind. ")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤˜")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("Evidence ")]), t._v(" "), i("span", [t._v("of ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("consciousness")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("and ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v(" creativity,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤™ ")]), t._v(" "), i("span", [t._v(" encapsulating ")]), t._v(" "), i("span", { staticClass: "mobile-hidden" }, [t._v("our")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("our")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "contains-annotation" }, [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/7.ideasandfeelings_optimized.gif"
        }
      }, [i("a", [t._v("ideas")])])], 1)]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" and "), i("strong", [t._v("feelings.")])])])])]), t._v(" "), i("diptych", { staticClass: "section-item three-quarter" }, [i("img", {
        staticClass: "section-diptych__item-1",
        attrs: { slot: "diptych-item-1", src: "/static/images/brainwaves/brainwaves-diptych.jpg" },
        slot: "diptych-item-1"
      }), t._v(" "), i("div", {
        staticClass: "section-diptych__item-2",
        attrs: { slot: "diptych-item-2" },
        slot: "diptych-item-2"
      }, [i("p", {}, [t._v("\n\t\t\t\t\t\tCollected below are 500 words from 13 human minds, all prompted by the phrase: â€œand somehow, somewhere, the record arrivesâ€¦â€\n\t\t\t\t\t")])])]), t._v(" "), i("separator", { staticClass: "section-item three-quarter center" }), t._v(" "), i("div", {
        staticClass: "accordion-wrapper",
        class: { open: t.isAccordionOpen }
      }, [i("accordion-item", t._b({
        ref: "accordionItem0",
        attrs: { index: 0 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[0], !1), [i("p", [t._v("\n\t\t\t\t\t\tThe little girl who first played the Golden Record lived on Hall, a tiny planet where sunlight is eternal and dust does not exist. (Hate was extinct.) In a valley on the planet's lilac plain, a field (of reality) known for its radical openness, she had noticed the distant pinpoints of bright gold. But they were not possible as moons.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIn her eyes, they appeared to be falling. Hall has twin suns, and the atmosphere of paired light creates white skies and no nighttime, yet â€“ amazed by these distant pricks of yellow nothingness â€“ she felt her whole world was suddenly vulnerable to darkness. Her pupils adjusted; two spheres of metallic flecks went black in her vision and hit the endless day, the hazy light of eternity, corrupted.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tShe found them in the flower field without seeking them out.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe lights had not been lights. They rested, soulless, on twiggy metal limbs in the blossoms. Tarnished lost spiders of inflated scale, in pinkish silence â€“ the girl had discovered the Earthlingsâ€™ gifts.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tShe listened to a childâ€™s laughter and to\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          id: "bach",
          definition: "German composer Johann Sebastian Bach (1685 to 1750). His music was under appreciated until the 1820s, when Wagner, Mendelssohn and others championed his work anew. He was Bach in the game (sorry)."
        }
      }, [i("a", [t._v("Bach")]), t._v(",\n\t\t\t\t\t\t")]), t._v("\n\t\t\t\t\t\t notes like encrypted messages played in a vibration she understood without language. She saw deep in the Record one image of the creatures destroying each other to consume each other, eating flesh named â€œmeatâ€ and killing off whole species. Imagining unsteady beings, she began to fear for Hallâ€™s future.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tShe saw the humans as possessing the distinction: the only species on its planet that has to work hard to remember its own instincts. This musicâ€™s unknown word was yearning. Implicit stories of childhood and violent rain seduced her; she was connected, rather than repulsed.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tA new vibrancy communicated scientific measurements, secrets of hunger; she felt the insight that on Earth a\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "One of three species of birds of prey referred to in the USA as the chickenhawk, despite the fact these birds very seldom go after chickens."
        }
      }, [i("a", [t._v("red-tailed hawk")])]), t._v("\n\n\t\t\t\t\t\t always knows his home and a hundred thousand simple fish can unify and swim in perfect sync, never forgetting their connection to all others. She thought she was that red-tailed hawk.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBut Hall was perfect. There was no famine, no dearth. All children on her planet were everyoneâ€™s to nourish, not the exclusive responsibility of partnered adults, sometimes at war on Earth. The topography was luminous, an expression of unerring interconnection, and the girl lived with her eyes open â€“ sleep had gone extinct with the discovery of the collective soul. These children could see through flowers. Friendly with the lilac and milk poppy, she lived with plants wholly freed of time, seasonless and deathless.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIn the incomprehensible music of the Golden Record, the girl felt the very personal growth pains of human beings spending their lifetimes buying their time, as if it had not ever truly been theirs. Working to death, for life. On her planet, no money existed to create the belief that some people were worth less than pearls â€“ some, more than.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tNow, the girl was awake to the impact of stories of separation â€“ a mythology of differences that was devastating this distant society â€“ and thus, hitting our whole universe. She cried without understanding.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThat evening, her mother explained to her that the concept of Earth was not a new thought. She was not the only child who faced it. Hall knew of Earthlingsâ€™ plight. The very clean reason the beings of Hall â€“ and all so-called â€œaliens,\" of all Life's planets â€“ had not ever landed on the Earthlingsâ€™ world was because human beings were an illness; they were inflamed, attacking themselves. As a species, creating their sickness. On all scales, the concept of a species against itself was unnatural, unconscious.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tPerhaps the lost Earthling lifeform had already dissolved itself with the fire of irreversible warring war, an ancient loss, the distant Blue Planetâ€™s blank mass-suicide; perhaps otherwiseâ€”\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIn the sky of the world (and in her) dual, distinct pathways became visible like new lines of thought, connections in a neural network: now, hers. A secret message, and addendum to the hour-long recording.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tShe would exit Hall, as so few do â€“ go to Earthlings and bring the beings a new record of love, for harmonyâ€™s creation. She would inspire conscious youth, generate a new and harmonious awareness of the self, the body, and the cosmos â€“ and the connection of the three.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tEarth already existed, if it was not gone. The first path â€“ hers to track â€“ emerged: for Earth.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem1",
        attrs: { index: 1 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[1], !1), [i("p", [t._v("\n\t\t\t\t\t\tAnd somehow, somewhere, the record arrives on the surface of a planet whose name, if it could pronounced by a human tongue, which it canâ€™t, would sound not unlike the tiny sigh of wonder a fish emits when it gazes down on a forest from the claws of an eagle.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFor convenience we will refer to the planet as â€œMatt Lattanziâ€ after Olivia Newton-Johnâ€™s ex-husband Matt Lattanzi who played Brad in\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          id: "grease",
          type: "definition",
          definition: "The derisory follow-up to the generation defining Grease (1978). While the original boasts a Rotten Tomatoes score of 75, the sequel manages a paltry 32."
        }
      }, [i("a", [t._v("Grease 2")])]), t._v("\n\n\t\t\t\t\t\tto no particular acclaim.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe atmosphere of Matt Lattanzi is sulphurous and bitter, like Germany but warmer. Voyager will be the seventeenth interstellar probe to land on the planet, and the first to be noticed by anything other than a pebble.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThere are, by some estimates, upwards of 100 million informational probes flying about the universe at any one time, most of which thud pointlessly into asteroids or are eaten by disinterested suns. The least lucky ones smash into each other, combining their messages of hope and goodwill into a fruitless jumble of space clutter.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBy great good fortune, Carl Saganâ€™s valiant probe has a soft landing on the surface of Matt Lattanzi, during a period of intelligent inhabitation. We find it bobbing softly, like a weary turtle, in the shallows of an electric blue, mile-wide, self-aware puddle. Mere moments before Voyager plops into it, the animate fluid had fountained out into a crater from the infected (for want of a better word) armpit (for want of a better word) of a vast kedgeree-coloured entity which weâ€™ll call\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/9.OliviaNewton-John_optimized.gif"
        }
      }, [i("a", [t._v("Olivia Newton-John")])]), t._v("\n\n\t\t\t\t\t\tfor convenience.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tNoisily discharging several million gallons of cognizant pus makes Olivia Newton-John feel a good deal happier and it heads off to play tennis, which exists in almost exactly the same form on Matt Lattanzi as it did on earth before the catastrophe, except that on Matt Lattanzi only one of the players is allowed a racket, and both are nude.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBack at the crater, the curious puddle sends out jelly tendrils to explore the satellite, which itâ€™s hoping might be a friend, because itâ€™s never easy making friends when youâ€™re a puddle, and soon enough it winkles out the golden discs. Instinctively, the puddle forms itself into a gelatinous needle and turntable, and spins the discs at what seems like a suitable speed. The taut skin of the puddle vibrates like a giant speaker and out into the fetid air of the planet fly the opening chords of\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "The track, first recorded in 1958, has been covered by The Beatles, Jimmy Hendrix, John Denver and Judas Priest among others. It was also used in Back to the Future."
        }
      }, [i("a", [t._v("Johnny B. Goode")])]), t._v("\n\n\t\t\t\t\t\t.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe searing guitar clatters round the valleys of Matt Lattanzi like a lens cap in a wardrobe. And in an instant, the puddle knows. From each delirious twang, etched anciently into gold, the puddle sucks an infinity of knowledge. In through Chuckâ€™s fingertips and out through his guitar strings pass a world of information â€“ far more than Carl Sagan could ever have imagined.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tEvery note bears the imprint of the musicianâ€™s past, and harbours everything he would become. Within a bar and a half, the clever blue jelly knows one thing above all. It knows that if those golden discs had been pressed in 2017 rather than 1977, they would never have contained the music of a serial sex offender.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem2",
        attrs: { index: 2 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[2], !1), [i("p", [t._v("\n\t\t\t\t\t\tAn extraterrestrial intelligence would be a consciousness that evolved along different lines from human beings. We already have other species of consciousness here on Earth, such as dolphins. Learning their click language has not progressed very far, and they show no signs of curiosity about our language, so alien dolphins might not be curious about us, even if they happen to chance upon the Voyagerâ€™s Golden Record.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAn E.T. wanting to get back to us seems like a long shot, and if Voyager is discovered 44,000 years from now, with a return phone call that takes a few light years, the Earth may be a ball of ice or a boiling cauldron by then (both states have existed in the past).\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tSo from the perspective of computational odds, I am afraid that the Golden Record wasnâ€™t like Carl Saganâ€™s message in a bottle thrown into the ocean but a grain of sand thrown into the ocean. The odds are extremely, almost infinitely, unfavorable.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tYet there is another way of viewing the outcome.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHere on Earth we are going through a cycle that takes thousands of years to repeat; the cycle between believing that consciousness is the foundation of reality and the opposite belief, that matter and the physical world are the basis of reality.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAt this moment, materialism or physicalism â€“ choose your term â€“ is in the ascendant thanks to the enormous advance of science and technology. There are outliers though; a motley crew of saints, sages, mystics, artists, and isolated visionaries who keep the torch lit for consciousness-based reality.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOn the one hand, the believers in consciousness are hobbled, because when people think of a cosmic mind that created the universe, the word â€œGodâ€ throws in a monkey wrench. But there is another stream of culture that testifies to the validity of enlightenment instead of God.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tStripped of any religious terminology and, at the other end, anti-religious inclinations, the whole point of all agendas that aim at enlightenment is to prove, one person at a time, that higher states of consciousness exist, that a conscious universe is likely, and that cosmic mind doesnâ€™t imply God, but something far more revolutionary â€“ the experience that reality is consciousness.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHaving spent a few decades writing about this hypothesis, I have a sense of how difficult it is to turn accepted assumptions around. It would be so much easier if E.T. did it for us. A species of consciousness somewhere in deep space could already accept that cosmic consciousness is real. If so, they should be able to communicate with us disregarding time and space. Crossing many light years would be instantaneous.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tCommunication between paired electrons is instantaneous already, thanks to the established quantum principle of nonlocality. Two electrons separated by light years can respond instantly to any change of state experienced by one or the other. Letâ€™s extend nonlocality to alien beings.\nThey would be here already, because in the domain of cosmic consciousness, dimensions donâ€™t exist. Here, there, and everywhere are the same, just as before and after, cause and effect, and all kinds of binary choice dissolve once you explore beyond the boundaries of the visible universe.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThis isnâ€™t woo. Theorists working on hypotheses like quantum gravity, the multiverse, superstrings, and the quantum vacuum state use advanced mathematics as a means of quantifying exactly the possibilities Iâ€™m mentioning.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tE.T. would give them a very useful shortcut too, if, instead of mathematics and abstract models that more and more donâ€™t match reality â€“ just ask Stephen Hawking â€“ an alien species of consciousness may be the witnesses to cosmic consciousness. For them, cosmic consciousness could be an everyday experience. Why not?\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tCenturies of human beings believed that Jesus, the Buddha, Lao Tzu and Vasistha were embodiments of higher consciousness. If we had listened to the motley crew instead of treating them like anomalies, we wouldnâ€™t need aliens to teach us things we already should know. But any old teleport in a storm . . .\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem3",
        attrs: { index: 3 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[3], !1), [i("p", [t._v("\n\t\t\t\t\t\tThe disc hit Alina in her back while she was polishing the stalagmites Fryenz had imported from Mercury, to dress up the grotto heâ€™d made for her after the twinsâ€™ birth.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œFor you,â€ heâ€™d whispered, carrying her down past the falling sediment so the rock couldnâ€™t hit her swollen torso. Had the children already returned from the other side of the planet? They werenâ€™t due back for seven years. How could they possibly have come back so soon? And with enough energy to be tossing paraphernalia around in the one part of their dwelling Alina forbade them from entering? She still had 75 billion square feet left to clean. And now she would have to do it with some sort of golden metal lodged into her outer membrane. Great.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œDonâ€™t you two ever calm down?!â€ she yelled toward the cavernâ€™s opening. Sure, Alina hadnâ€™t yet caught sight of Tizraleh and Mekliya, but she knew they had to be behind this. â€œAt least come yank this thing out before it hits my inner membrane! I donâ€™t have time to clean up any spilled placenta today.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBut the two never appeared. Alinaâ€™s voice rang hollow in the grotto, reverberating in circles around her until the disc began to chime back. She didnâ€™t recognize the sounds. They echoed through her membranes, at once tender and sharp. The notes sank deep into the recesses of her body, penetrating flesh and wrapping themselves around bone. Where had they come from?\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFor hours, Alina lay trembling as the disc turned her body into an unwitting symphony. Each time the notes shifted sharply, she exhaled. â€œIt must be over now.â€ But the disc kept spinning, each new song a perplexing vibration.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWhen Fryenz found her, Alina greeted him in jagged whispers. The notes overtook her voice before she could explain what was happening, and Fryenz ran to her fading form. Immediately, he knew.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHe had known these sounds once. Eons before heâ€™d escaped from his own planet to build a life here with Alina. The noises were terrifying then, a reminder that he was alone there, that he had no-one to share their beauty with. But now, as Alina lay in front of him, he knew he could tell her their story.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWithin seconds, Fryenz had unlodged the disc from Alinaâ€™s body and patched over her wound with his own membrane. As she gathered her breath, he alternated between stroking her forehead and cradling the strange golden object that had punctuated their quiet life.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œAlina, I have to tell you something,â€ he whispered. By the time she asked what he meant, Fryenz had already begun to sing. Each note crisper than the last, his voice rang high and clear in every chamber of their planet. The words were foreign at first, but the longer Alina listened, the more she heard.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFryenz had always been a stranger to this planet, but sheâ€™d never known of his past. As he sang, she heard continents and constellations, rivers and roads. Suddenly Alina knew. The disc had come to bring him home.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem4",
        attrs: { index: 4 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[4], !1), [i("p", [t._v("\n\t\t\t\t\t\tThe spaceship looked like beer cans welded to a big cereal bowl. He ran out of fuel in the year 2030 and thatâ€™s when he came alive. It had not been 2030 for a long time. He would scream for hundreds of years but it didnâ€™t make a sound. He thought maybe he was only talking to himself and this made him angry. He was moving very fast.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œCome get me,â€ he said this all the time. â€œWhen will I get there?â€ There was no one for millions of miles but he was trying to talk to them. There was no end to the universe, just an always, a terminally alone, something eternal and yet nonexistent simultaneously. This is where he was, he could never come back, he had been here for a long, long time and he had no fuel. â€œCome get me,â€ but no-one was looking for him.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe entire cast of "), i("i", [t._v("Dawsonâ€™s Creek")]), t._v(" had been dead for thousands of years, so were their families and their children and the maids who cleaned their toilets. The houses they grew up in were paved over; he didn't know this but it was true, he had been in the sky for so long. The universe is filled with the broken remnants of wild ideas.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tSometimes he screamed until he sounded like a father trying to fix the internet and sometimes he was as quiet as a father sitting on a toilet. He waited and hoped he could hear someone screaming.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tMany people had died since he was up there â€“ all his architects and his operators and all their friends and all the women they tried to impress standing next to "), i("i", [t._v("hors d'oeuvres")]), t._v(" at shitty parties talking about the robot god they were piloting through space. They were all dead but the robot was still there and now he was alive and he knew he was alive, he could feel that he was alive because he could feel he was alone. He was afraid he would be alive forever.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHe only heard sounds from inside himself, things on a disc he was carrying. They were sounds from Earth but he didnâ€™t know that; there were words but he couldnâ€™t understand. The songs sounded like crying and the animals sounded like war. The hellos all sounded like your mother trying to wake you up for school. He tried to talk to them but they didnâ€™t answer him.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOnly one sound spoke back to him. It played for three minutes and the spaceship would wait and dream of hearing it again; it was his only friend. The man making the sounds was Blind Willie Johnson, it was a song that sounded like something someone carved in the wall of a jail cell in purgatory. It didnâ€™t have words but the spaceship understood it, he wanted to die next to this song and this thought made him feel safe, it sounded like it someone who had been lost for a long, long time.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem5",
        attrs: { index: 5 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[5], !1), [i("p", [t._v("\n\t\t\t\t\t\tSeen in the reflection of the 21st century, the Golden Record is a quaint anachronism. There is a natural human propensity to assume that the way things are is the way they will always be. So, writers on clay tablets, parchment,\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "A parchment made from calf skin, from the French word â€œveauâ€."
        }
      }, [i("a", [t._v("vellum")])]), t._v("\n\t\t\t\t\t\tand then paper may have assumed these successive technologies would always be the medium of choice for recording written messages.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIn the 20th Century, a great leap was made in the analogue storage of information, as Edison made the first recording of a human voice, and ultimately even visual images could be so stored.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHowever, given that the dominance of analogue records lasted less than a century here on Earthâ€“ a brief instant in cosmic time â€“ with the benefit of hindsight, it is now reasonable to assume that any civilization capable of discovering and intercepting the Voyager spacecraft would have long ago discovered the advantages of digital storage of information (audiophiles notwithstanding).\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWhat then might we expect would be the first reaction of an alien civilization to the discovery of Voyager and our Golden Record? Surely a detailed examination of the Record itself would be far down the list of responses to such an astounding discovery.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe response would likely be the same as our own: awe and wonder at the fact that they are not alone in the universe, that perhaps the cosmos is alive with intelligence. If they are anything like us, the second response could easily be fear that this alien probe might be first of many, with intent that could easily not be benevolent. After all, if the history of human civilization is any guide, most often, when two previously disparate civilizations come into kontakt, harmony is not the norm.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThis fear might quickly subside if the Record is decoded. Not because of the benign nature of the message it contains, but because of the ancient technology used to generate it. The Golden Record would be no more threatening than the\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "Discovered in 1799, the Rosetta Stone was the breakthrough in understanding Egyptian hieroglyphs."
        }
      }, [i("a", [t._v("Rosetta Stone")])]), t._v("\n\n\t\t\t\t\t\twas. It would be a guide to the past, of an ancient civilization, whose messages would reveal more about the curious proclivities of biped creatures who once walked this Earth than they would about the other mysteries of the cosmos.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tGiven the size and scope of our galaxy, the likelihood of discovery of the Golden Record is remote indeed, just as the timescale over which such a discovery might occur is vast. If such a fortunate accident were to occur in the future, it will be in the distant future.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tTwo possibilities then arise. Either human intelligence will persist in some form, in which case the arrival of Voyager is far more likely to be preceded by the reception of other, far more advanced evidence of our existence.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBut equally likely, on the cosmic timescales of interest here â€“ as the Earth becomes uninhabitable, either due to human intervention, or as our planet is swallowed by the sun â€“ whatever intelligent civilization dominates our planet in the centuries or millennia to come, will itself disappear.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAfter all, extinction is the norm in biology, not the exception. In this case, the Golden Record may one day find itself as a cherished ancient relic in an alien museum, viewed by beings who will wonder what dramas, loves, hopes, and dreams dominated the lives of primitive beings on a once-existing pale blue dot.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem6",
        attrs: { index: 6 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[6], !1), [i("p", [t._v("\n\t\t\t\t\t\tForty years ago, hearts surging with hope, the Americans sent a probe into space, containing a compilation of sounds representing the best of human civilization.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tTwo days ago, a small white envelope appeared upon the doorstep of NASA. It was addressed, in slender calligraphy, to\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "The 39th US President who served from 1977 to 1981. Although remembered as â€œa below-average presidentâ€ according to Wikipedia, he has rebuilt his reputation with a whole host of important work since he was kicked out of the Oval Office."
        }
      }, [i("a", [t._v("Jimmy Carter")]), t._v(",\n\t\t\t\t\t\t")]), t._v("\n\n\t\t\t\t\t\twho was President when the probe ventured out into the cosmos.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tPresident Carter, now venturing into his mid-90s, was asleep on his porch when a member of the US Secret Service walked up his lawn and whispered that he should probably wake up. Startled, yet intrigued, the President listened as the soldier read out the letter.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œDear President,\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œI am writing on behalf of Oritara, a small but extremely distinguished world around 94 million light years from yours. Your probe reached us through a wormhole, which on Earth I believe you refer to as a mailbox.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œI hope you will excuse this somewhat primitive form of communication, and that you instead find it pleasingly traditional. We had considered sending an electronic message, but Admiral Larugera thought this would be a significantly classier touch.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œI must thank you for your submission of the Voyager Golden Record, which I presume your planet wishes us to\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "For further reading on how record labels work, try Lizzy Goodmanâ€™s superlative oral history Meet Me In the Bathroom, and/or John Nivenâ€™s riotous novel Kill Your Friends."
        }
      }, [i("a", [t._v("release on our label")]), t._v(".\n\t\t\t\t\t\t")]), t._v("\n\n\n\t\t\t\t\t\tFollowing a great many listens, we must sadly decline your work. We consider that this effort, whilst it displays great promise, is incomplete.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œWe were very moved by the inclusion of certain sounds, particularly the birdsong and the Stravinsky, and very amused by others â€“ our\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/8.dogs_optimized.gif"
        }
      }, [i("a", [t._v("dogs")]), t._v(",\n\t\t\t\t\t\t")]), t._v("\n\n\t\t\t\t\t\tas it turns out, sound very similar to yours. Unfortunately, however, there were aspects of your submission that we found less impressive.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œGiven the turbulent history of your civilization, we expected a far darker record. Where, for example, were the screams as those two bombs descended over Japan in 1945? Where were the sounds of splashing as thousands of sick slaves were thrown into the Atlantic? Where was the laughter of the missionaries as they burned the last of the Mayansâ€™ literature?\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œAt Oritara Records, we pride ourselves not only on the creativity of the artists we sign to our label, but on their authenticity. We encourage civilizations who send us their sounds to be truthful about themselves â€“ not just to show us the beauty of all that they are, but their brutality too. It is only through this honesty that we can advance as an intergalactic community.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œIt is our belief, at present, that the Voyager Golden Record is merely a demo. Perhaps that is fitting, as your species has some way to go; at present, given its severe ethnic divisions, we consider it to be neither mixed nor mastered.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œPlease feel free to submit further sounds as your storytelling matures, and please take this criticism in the constructive manner in which it was intended.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œWith warmest wishes,\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOrdan the Temperate\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œP.S. You have seen the return address on the reverse of the envelope. In the interests of goodwill, we include a fee for postage.â€\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem7",
        attrs: { index: 7 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[7], !1), [i("p", [t._v("\n\t\t\t\t\t\tSomewhere,  far away on Planet Beta.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tA government official is on the top of the hill chewing a herb she found on the ground.\nShe is not allowed to smoke; her manager would not allow it. â€œBilly,â€ she said, â€œyou donâ€™t smoke, and you donâ€™t drink.â€ She is right. She is the type of official who would rather watch the landscape instead of drinking the water of the lake. She is usually found on the top of the hill, behind the concrete wall of Planet Beta Bureau.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIt is one of those early mornings, and she is gently caressing a horse, on the top of the hill.\nSpotted ginger and white, a beautiful breed. While embracing the deep silence of the mountains, she suddenly sees a very bright light in the sky. She is not alone in having seen it â€“ not a light but a ball of fire.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThis fireball turns the horse wild. It breaks away â€“ snorting, blowing and squealing. It forces Billy to retreat to the Bureau. As she leaves the site, she feels an unusual pain on her face, some sort of burnt skin.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAll she can remember after that is the rumblings below the hills, a small earthquake and lots and lots of smoke.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWe hear an unhurried voice over a radio. â€œIC notification to all section chiefs, this is a notification of activation. At 0400 Planet Beta east time, we were notified of a building collapse at building 239. Cause unusual object of one meter diameterâ€¦â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œRescue A activate for hasty forward deployment. Search B, C, D, Rescue B, C, D, DUCT and Haz-Mat assemble at the DOB, your captains will be briefing you. The EOC will serve as ICP. Logistics and Finance section chiefs are activating at this timeâ€¦â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œâ€¦ This is believed to be bio-hazardousâ€¦â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe picture zooms out, handheld. We can now see the lake on which all buildings are built on Planet Beta. A large plume of smoke is coming out of one of them.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWeâ€™re speeding across the water with the Disaster Assistance and Rescue Team (DART). Operators are wearing bio-hazard suits. We arrive at the site, get out of the water-jeep and watch the operators get their equipment together. They start shouting orders to each other, but we canâ€™t really see what theyâ€™re referring to.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tMeanwhile, we meet Dr Sophie Jonhs, Programme Executive at Plan Beta Astrobiology Headquarters. She is picking up a red phone.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œHey Sophie, this is the IC over at College Station in plan Beta east zone, we need to activate the mutual aid plan. We have a building collapse caused by an unknown object which landed a few hours ago. Iâ€™ll need a few biohazard rehab units.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tNow, we see women and their orange helmets running in an organized way on wooden docks.\nThere is an unknown object, the size of a small asteroid. There is deep and heavy smoke, and fire around it.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWe suddenly hear a very strange noise coming out of 50 air raid sirens held by members of the DART. Shift over, the DART contamination team is now evacuating, they secured the zone.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIt is 12. Everybody leaves apart from Dr Jonhs and her team. They make their way inside the building and they finally get to the capsule...\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tNow. We stop breathing. They are opening up a small hatchâ€¦\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tSilence. Again. We wait, and we sweat.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFinally we hear something.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tEeeekkk...\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tA few dozen insects burst out. ONas eight centimeters long, they are running and jumping on Sophie and her teamâ€™s orange suits, on our suit too. What horror, they squirt gas at each other.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAs we all run away, Sophie calls on the radio: â€œFalse alarm, nothing to report here. These are simply cockroaches.\"\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem8",
        attrs: { index: 8 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[8], !1), [i("p", [t._v("\n\t\t\t\t\t\tYEAR OF THE PROPAGANDA-CORRUPTED PLEBISCITES\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\nYou are beside me, winter trees, a comrade to the world, a home, the TV is playing war, we hope for peaceful sunlight. A whole heart of blood, resting on a whole heart of blood.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe children are dressed in black, they are throwing petrol bombs at the embassies, throwing electric flowers into the graveyards of capitalism.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe philosopher is counting the slow candles of the icebergs, noting how many summers we have left. She is brilliant in her sunlight hat. Her chest is a pyramid.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe president has retreated to the golf club, he rules in half sentences. Coughing up the\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "Arguably the dullest decade of the 20th Century."
        }
      }, [i("a", [t._v("1950s")])]), t._v("\n\n\t\t\t\t\t\t his mind is a puddle where broken dreams sit on the rooftops of abandoned libraries.\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tNew weddings and empty churches, the minarets talk to the dawn before the sun lights up the city. The priests are whirling like dervishes in circles, they pinball off the walls, singing silence.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tDiana and the swan ride an open-topped red London bus, the trumpets beside them play rave music, LSD trips to the sound brass of bands. CCTV diamonds for\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "A pre-paid smartcard used by Londoners on buses, trains and the London Underground."
        }
      }, [i("a", [t._v("Oyster cards.")])])], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tGod is bored of us now. She sides with the animals and the weather and they watch our digital alien rampage, with cool sad eyes.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem9",
        attrs: { index: 9 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[9], !1), [i("p", [t._v("\n\t\t\t\t\t\tWhen the Voyager arrived â€“ somehow, somewhere â€“ it was embraced by a nebula of gases. Purple, pink and yellow, the gases were tendril shaped, with fingers, and they appeared to have mouths and eyes. They coiled their ghost-like, celestial bodies around the spacecraft in a way that was loving and went in for the prize â€“ the Golden Record.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tIntuitively, the gases knew what to do. Like luminous DJs, they activated the record, spinning around it, transforming its vibrations into electrical signals.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe first movement of Bachâ€™s "), i("i", [t._v("Brandenburg Concerto No. 2")]), t._v(" played, amplified across the cosmos. Glistening, the record ran its course, delivering one hour of sound. Musical messages from Beethoven and Chuck Berry. Hellos from Earthâ€™s children. The brainwaves of Ann Druyan, thinking of Earthâ€™s history, civilizations and problems, and how it felt to fall in love. To that noise, the gases did a swirly dance.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFor each â€œSound of Earthâ€ the Golden Record produced, the gases changed form, altering their groove. â€œMother and Childâ€ inspired a tender ballet. They pulsed to the rhythm of the â€œHeartbeat.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOther members of the interstellar community joined in â€“ rocky objects, liquids too â€“ embodying each creature as its greeting played from the record, as though performing a little show. Neon plasma transformed into frogs at the sound of croaks and ribbits. Chirping crickets made dust particles buzz. Cosmic rays darted around the magnetic field to the gentle tune of â€œRain.â€ And when â€œEarthquakesâ€ played, space quaked.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAs each track ended, its energy was released, integrating like waves into the cosmic ocean. Once the final sound died out, the Golden Record exploded in a fiery pop. A wave of gas and dust swept up its remnants, and a bright new star emerged in its place.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBillions of years before, the sun had turned red and enveloped the Earth. Yet the Voyager remained, floating through darkness, waiting to be found. And once found, it was lost in one hour, along with all it preserved.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tBut somehow, somewhere, somebody still remembers the child that was shot into space, Earthâ€™s messenger and loyal correspondent. Manufactured for a long, strange journey, the Voyager met hurricanes on Jupiter, volcanoes on the planetâ€™s fifth moon. It saw snowball fights in Saturnâ€™s rings. Neptune was windy, and blue. There was water, spouting from the geysers of Enceladus, resting beneath the icy surface of Europa. And there was life out there â€“ microbial life, beginnings.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOrphaned after Earthâ€™s end, the Voyager drifted, frozen in time â€“ the year 1977 â€“ though its Morse Code message was timeless â€“ "), i("i", [t._v("per aspera ad astra")]), t._v(". Through hardships to the stars.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe Voyager's purpose was simple â€“  to discover, to be known. To carry evidence of existence. Humanity, distilled. Triumph and hardship, and a promise of something more. Somehow, somewhereâ€¦\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tMaybe weâ€™re always there, in the place to which weâ€™re headed. Maybe weâ€™ve been there before. Made of stardust, we flicker then fade, voyaging through hardships to the stars.\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem10",
        attrs: { index: 10 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[10], !1), [i("p", [t._v("\n\t\t\t\t\t\tRaax, who had stared at the output from the robo-comparator for over an hour, finally spoke.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œItâ€™s there. Itâ€™s definitely there. ONas 0.12 light-years out.â€ He leaned into the screen. â€œItâ€™s on a hyperbolic trajectory.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œHyperbolic?â€ The resonant voice of Arburokaan, the team leader, barreled from across the room. â€œMaybe an interstellar asteroid â€¦?â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œThat would fit,â€ Raax replied, shifting on his hydro-saddle. He picked up an input microphone. â€œDefinitely worth confirming,â€ he noted dryly. â€œGiving the coordinates to the Space Array duty operators now.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tArburokaan grunted. Interstellar asteroids were uncommon, but not unheard of. They almost never posed any danger to the colonies, but were interesting to some of the astronomers. It would take the space array only minutes to image the object with microarcsecond resolution. Maybe that would show enough detail to satisfy the scientists, and, not incidentally, garner their continued support for Space Reconnaissance.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tRaax, who had wandered out of the room, came back holding a tumbler of hot jinya. â€œSo?â€ Arburokaan asked.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œIâ€™ll bring it right up,â€ Raax answered obsequiously. He climbed into his hydro-saddle, and a high-res image of the asteroid rapidly filled the screen. Raaxâ€™s eye narrowed.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œThatâ€™s no asteroid,â€ the team leader said softly.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe image showed a cluster of metal boxes, fronted by a large, curved dish. The whole thing was only meters across, and the dish was pitted and worn after millennia of colliding with interstellar dust particles. The apparatus had clearly come a long way.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tRaax awaited instructions. He knew their solar system had a phalanx of robot patrollers, stationed near every planet and beyond. Was it worth the cost to actuate one?\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tArburokaan pondered the trade-off. â€œOK, it might be useful to get a close-up look. Notify a patrol.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tRaax did as he was told.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tFour months passed before the retrieved space object was brought to a brightly lit cleanroom. Raax watched as a small group of engineers pored over the device, prying open the instruments in hopes of understanding their purpose.\n\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tOne of the engineers offered his opinion to no-one in particular. â€œPretty primitive, honestly. Iâ€™m surprised it ever worked long enough to get out of its own solar system.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œIs there anything that looks like a message?â€ Raax asked him.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tâ€œHard to tell. There are some funny things bolted on the side that I donâ€™t understand, but that doesnâ€™t mean much,â€ the engineer replied.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tRaax pressed him. â€œWell, is it worth keeping?â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tThe engineer turned and looked at Raax, and threw up some of his hands. â€œProbably not. In the past hundred millennia, weâ€™ve retrieved a few thousand of these things. I guess we could put it on ice, just in case some future historians want a look.â€\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tTwo days later, Raax watched his discovery being dollied into an underground vault. It was packed in a utilitarian humbaar crate, with orange lettering on the side reading â€œTâ€™attokâ€ â€“ text they had found on the probe.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tHe left the vault, giving a backward glance to the piled-up retrievals. One, near the bottom, in faded lettering, read â€œVoyager.â€\n\t\t\t\t\t")])]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem11",
        attrs: { index: 11 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[11], !1), [i("p", [t._v("\n\t\t\t\t\t\tAnnD says What the fuck but she says it many times like "), i("i", [t._v("whatthefuckwhatthefuckwhatthefuck")]), t._v(" and also she says it angry. We've been broken up for 115 days but she called me right after the guy from the trade show called her. She said "), i("i", [t._v("Ferris, I think maybe NASA is coming to arrest my brother?")]), t._v(" I said nothing about that not making sense; I ran over to her house fast before she wouldn't need me anymore.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tI say Alien which I haven't called her in so long and I say it soft and slow like, "), i("i", [t._v("Alien... Alien... Alien...")]), t._v(" That nickname actually started as a joke after one of her brother's drunk space-lectures in the kitchen. I never liked the guy. Second week of AnnD and me dating he cornered me outside her room saying "), i("i", [t._v("You think because you're a girl I don't see your game?")]), t._v(" Somehow he knew "), i("i", [t._v("girl")]), t._v(" was the worst thing he could call me. Assholes are often intuitive.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tSo AnnD is saying "), i("i", [t._v("whatthefuck")]), t._v(" and I'm saying "), i("i", [t._v("Alien;")]), t._v(" we're standing there by the silver fence outside her house for maybe a solid minute, exchanging syllables. I know AnnD and I know if I give up first it's trouble. So I keep going, pacing my aliens, arguably writing some sort of music. Finally I win. AnnD says "), i("i", [t._v("What?!")]), t._v(" And I say "), i("i", [t._v("Nothing, just calm down and talk to me normal")]), t._v(". AnnD looks at me and I look at AnnD and I can tell the tears are coming and then they come. I hold her face. "), i("i", [t._v("What, baby,")]), t._v(" I whisper, "), i("i", [t._v("what?")])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tAnnD tells me maybe her brother stole a record from a spacecraft a decade ago when he worked at the launch site. I chuckle because I'm an idiot who always chuckles at the wrong moment and mostly that's why AnnD stopped being my girlfriend. She says "), i("i", [t._v("Ferris")]), t._v(" and she means "), i("i", [t._v("This is serious. ")])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tShe tries to convince me by saying things about this record â€“ it's supposed to survive like a billion years and explain our planet to other planets using brainwaves and music â€“ and I stop her and say "), i("i", [t._v("Baby, you know this is just G having one of his episodes, right?")]), t._v(" G is short for Gliese, which isn't her brother's real name but it's what he goes by.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tI say "), i("i", [t._v("Whatever he sold, it wasn't the real thing. He probably got desperate for money, made a fake for a buck. She says I don't know, the guy on the phone said he had it authenticated. He'd thought it was a joke, was going to sell the thing for a small profit. He sounded freaked out and kept saying â€œthis is just a courtesy call.â€")])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tI imagine big uniformed men knocking us over on their way to the Cornells' main door, searching for the guy who sold a golden disc engraved with all of Earth's sounds. Humanity wanted to give the galaxy a gift but some\n\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "1. a quick, sharp, sudden movement. 2. a contemptibly foolish person. 3. a delicious sort of marinade popular in the Caribbean."
        }
      }, [i("a", [t._v("jerk")])]), t._v("\n\n\t\t\t\t\t\tremoved it from its aluminum wrapper before it even left our world!\n\t\t\t\t\t")], 1), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tI almost chuckle again but I catch myself. AnnD's eyes are sadder than maybe any other time the whole 55 months I've known her. I try to think fast how to rise to this second chance she's giving me, how to be someone who says the words she needs to hear. I touch her shoulder like we're buddies, like I'm not at all up most nights counting my mistakes.\n\t\t\t\t\t")]), t._v(" "), i("p", [i("i", [t._v("Listen to me,")]), t._v(" I tell her, "), i("i", [t._v("there is no way in hell he actually did this, okay?")]), t._v(" And I don't know if it's my confident tone or what, but it works. I can see her face relaxing. "), i("i", [t._v("You really think?")]), t._v(" she says, and I say "), i("i", [t._v("I don't think, I know. There's a golden record on its way to the future as we speak!")]), t._v(" AnnD smiles. She says "), i("i", [t._v("They made two of them so that would have been true anyway. I just got scared that G's in real trouble.")]), t._v(" I shake my head no with conviction and pull her close.\n\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\tWhen her head rests on my chest, my view changes. In the distance I see her brother talking to some man, handing the stranger a round object that shines like\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "definition",
          definition: "A popular sci-fi trope; in Star Wars, Luke Skywalkerâ€™s home planet Tatooine boasts twin suns."
        }
      }, [i("a", [t._v("two suns.")])])], 1)]), t._v(" "), i("accordion-item", t._b({
        ref: "accordionItem12",
        attrs: { index: 12 },
        on: { click: t.onClickAccordion }
      }, "accordion-item", t.stories[12], !1), [i("p", [t._v("\n\t\t\t\t\tThereâ€™s dancin! A-wrigglin and a-gigglin! Outright, head back, organs out laughin!  The food and precious rocks saved up over the past generation are laid out on every front porch. Waves of oohs and ahs â€“ and squeaks! â€“ lick and lap. Fingers are sticky from illicit tasting. Eyes shine in celebration.\n\t\t\t\t\t"), i("i", [t._v("A  million,  gazillion  eyes.")])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tBibi   shrieks   at   the   next   image   which   flashes   up   above   them,\n\n\t\t\t\t\t"), i("ul", [i("li", [t._v(" - What  is   "), i("i", [t._v("that")]), t._v("?!  Can  eat  or  not?!")]), t._v(" "), i("li", [t._v(" - Can-not!")])])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tBi persists,\n\n\t\t\t\t\t"), i("ul", [i("li", [t._v(" - Can eat?")]), t._v(" "), i("li", [t._v(" - Can-NOT!")])])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tJaguh   bellows.    Bibi   is   sweet   but    they   canâ€™t   afford   to   lose   another   limb   due   to   lack   of   focus,   but iiiiiiit    "), i("i", [t._v("should")]), t._v("   be   Okey.   The   hi-de-hi   swing   jive   is   complicated   and   a   serious   matter.   Jaguh   had been   practising   for   decades.   Now   was   their   time   to   add   to   the   annals.    "), i("i", [t._v("Hee,   hee,   annals")]), t._v(".\n\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tThe   sky   shimmers   in   time   to   the   music.   Itâ€™s   all   very   clever   but   Gracieâ€™s   head   hurts   slightly.   Sarah The   Fever   notices   and   shoots   G   a   smile   to   distract   them,\n\n\t\t\t\t\t"), i("ul", [i("li", [t._v(" - Remember   the   time   when   I   brought   you   tea   and   scrambled   eggs   in   bed?   And   I   sat   down to  keep  you  company.  You  looked  so  surprised!  And  slightly  embarrassed,   ha!   And  then, on   your   way   out,   you   got   that   message   from   the   paper   and   I   made   you   take   off   your gear,   sit   back   down   and   â€“")]), t._v(" "), i("li", [t._v(" - Itâ€™s   the   chord   progressions.   I   canâ€™t   â€“   Iâ€™m   trying   to   remember   what   we   learned   about sub-chromatic   harmonies   in   eighths...")])]), t._v(" "), i("i", [t._v("Aiya, friends, la!")])]), t._v(" "), i("p", [t._v("And the moons wheeled on.")]), t._v(" "), i("p", [t._v("\n\t\t\t\tAh   Goo   was   excited.   What   are   the   chances?   Tonight   of   all   nights!   Emboldened   by   events,   theyâ€™d made   plans   to   collect   The   Little   One   â€“   theyâ€™d   just   met!   â€“   for   a   morning   walk   along   the   shore.   A\n5am   wake   up   call   and   an   extra   helmet   and   slow   driving   for   safety.   Ah   Goo   had   told   The   Little One   that   their   dentist   friend   would   be   there,   and   sometimes,   teacher   Smith,   too,   to   take   in   the cool   air   for   an   hour.\n\t\t\t\t")]), t._v(" "), i("ul", [i("li", [t._v(" - Cold?! ")])]), t._v(" "), i("p", [t._v("\n\t\t\t\tThe   Little   One   exclaimed   in   mock   horror,   pleased   and   afraid   of   her   new   friends.   What   happens after   beginnings?\n\t\t\t\t")]), t._v(" "), i("ul", [i("li", [t._v("- No,   la,   not   cold.   We    don    get   cold   here.")]), t._v(" "), i("li", [t._v("- Sure   or   not? ")]), t._v(" "), i("li", [t._v("- Sure-sure! ")])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tYou   know,   things   from   the   past   resonate.   Fear   doesnâ€™t   ever   go   away.   Making   friends   with bedfellas,   sharing   the   duvet,   treading   new   ground   ainâ€™t   no   overnight   thing   but   the   curious   eye or   finger   or   mind   declares   the   possibility   of   openings.\n\n\t\t\t\t\t"), i("ul", [i("li", [t._v("- Can   eat?")]), t._v(" "), i("li", [t._v("- Dunno... see   la")])])]), t._v(" "), i("p", [t._v("\n\t\t\t\t\tVarious   alarms   were   set   for   five.   The   art   of   the   evening   watered   seeds   and   kept   moving   in mysterious,   secret   ways,   through   souls.   They   never   did   work   out   what   the   record   was,   what   it was   for,   what   had   been   made   and   lost   in   getting   it   there,   but   it   had   been   a   glorious   bash anyway.\n\t\t\t\t")]), t._v(" "), i("p", [t._v("And Bibi kept asking.")])])], 1), t._v(" "), t._m(0)], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta dither-trigger to-white",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "static-tofu__wrapper" }, [i("img", {
        staticClass: "static-tofu",
        attrs: { src: "/static/images/brainwaves/static-tofu.png", alt: "" }
      })])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return t.show ? i("div", {
        staticClass: "upgrade-browser",
        on: { click: t.dismiss }
      }, [i("p", [t._v("\n\t\tSome elements of this site are not supported by this browser.\n\t\tFor an optimum viewing experience, please switch to the most recent version of Edge, Safari, Firefox, or Chrome.\n\t")]), t._v(" "), i("img", { attrs: { src: "/static/images/x_out.svg" } })]) : t._e()
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", {
        class: {
          "video-player": !0,
          "cursor--play": t.customCursor && !t.isVideoPlaying,
          "cursor--pause": t.customCursor && t.isVideoPlaying
        }, style: t.wrapperStyle, on: { click: t.onClickVideo }
      }, ["youtube" != t.type ? i("video", {
        ref: "nativeVideo",
        staticClass: "video-player-box",
        style: t.showPoster && !t.autoplay ? { visibility: "hidden" } : {},
        attrs: {
          width: "100%",
          height: "100%",
          poster: t.videoPoster,
          playsinline: "",
          "webkit-playsinline": "",
          preload: ""
        }
      }, [i("source", {
        attrs: {
          src: t.videoSrc,
          type: "video/mp4"
        }
      })]) : t._e(), t._v(" "), "youtube" === t.type && t.displayEmbed ? i("iframe", {
        staticClass: "video-player-box",
        attrs: {
          width: "560",
          height: "315",
          src: "https://www.youtube.com/embed/" + t.youtubeId + "?rel=0&modestbranding=1&controls=0&showinfo=1&autoplay=" + t.autoplay,
          frameborder: "0",
          allowfullscreen: ""
        }
      }) : t._e(), t._v(" "), "youtube" !== t.type || t.displayEmbed ? t._e() : i("button", { staticClass: "video-player__big-play-btn" }), t._v(" "), "youtube" !== t.type && !t.isVideoPlaying && t.bigPlayPauseButton ? i("button", {
        staticClass: "video-player__big-play-btn",
        on: {
          click: function(e) {
            e.preventDefault(), t.onTogglePlayPause(e)
          }
        }
      }) : t._e(), t._v(" "), t.playPauseButton ? i("button", {
        staticClass: "video-player__play-pause-btn",
        class: {
          "video-playing": t.isVideoPlaying,
          "cursor--play": t.customCursor && !t.isVideoPlaying,
          "cursor--pause": t.customCursor && t.isVideoPlaying
        },
        on: {
          click: function(e) {
            e.preventDefault(), t.onTogglePlayPause(e)
          }
        }
      }) : t._e()])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", {
        staticClass: "soundboard-landing cursor--start",
        on: { click: t.handleClick }
      }, [0 === t.contextScreen ? i("introduction", {
        staticClass: "section-item full-width heading--m soundboard-intro soundboard-intro--fs",
        attrs: { killTransition: !0 }
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Tap, ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" press,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("and")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤€")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v(" Draw")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [i("strong", [t._v("s")])]), t._v(" "), i("span", [i("strong", [t._v("o")])]), t._v(" "), i("span", [i("strong", [t._v("u")])]), t._v(" "), i("span", [i("strong", [t._v("n")])]), t._v(" "), i("span", [i("strong", [t._v("d")])]), t._v(" "), i("span", [i("strong", [t._v("s")])])])])]) : t._e(), t._v(" "), 1 === t.contextScreen ? i("introduction", {
        staticClass: "section-item full-width heading--m soundboard-intro soundboard-intro--instructions",
        attrs: { killTransition: !0 }
      }, [i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("ADD")]), t._v(" "), i("span", [t._v(" filters")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤ ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤¡")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤¢")]), t._v(" "), i("span", [t._v("and ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("c")]), t._v(" "), i("span", [t._v("h")]), t._v(" "), i("span", [t._v("a")]), t._v(" "), i("span", [t._v("n")]), t._v(" "), i("span", [t._v("g")]), t._v(" "), i("span", [t._v("e")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("the next")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤£")]), t._v(" "), i("strong", [t._v("s")]), t._v(" "), i("strong", [t._v("o")]), t._v(" "), i("strong", [t._v("u")]), t._v(" "), i("strong", [t._v("n")]), t._v(" "), i("strong", [t._v("d")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤¤")])])])]) : t._e(), t._v(" "), 2 === t.contextScreen ? i("div", { staticClass: "soundboard-share-intro" }, [t._m(0), t._v(" "), i("div", { staticClass: "soundboard-share-intro__lockup" }, [i("svg", {
        staticStyle: { "enable-background": "new 0 0 801.1 1068" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 801.1 1068",
          "xml:space": "preserve"
        }
      }, [i("g", [i("circle", {
        staticClass: "st0",
        attrs: { cx: "12.7", cy: "652.5", r: "12.7" }
      }), t._v(" "), i("circle", {
        staticClass: "st0",
        attrs: { cx: "788.3", cy: "652.5", r: "12.7" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "60.8,403.9 91.1,450.9 35.3,446.6 27.7,459.3 77,488.8 81.5,481.2 38.2,455.3 94.4,459.6 100.3,449.8\n\t\t\t\t\t69.6,402.1 113.2,428.2 117.7,420.7 68.4,391.2 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "207.3,338.8 202.5,332.7 162.8,363.8 151.7,349.6 186.9,322.1 182.1,316 146.9,343.5 136.9,330.7\n\t\t\t\t\t176,300.2 171.2,294.1 125.3,330.1 160.7,375.3 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M269.9,280.8l13.8-3c9.4-2.1,12.8-0.4,14.2,3.6c1.3,3.8-1.1,9.6-15.5,14.6l-1.6,0.5c-14.4,5-20.8,1.3-23.3-4.1\n\t\t\t\t\tl-9.3,3.3c4.2,11.1,15.4,15.1,36,7.9c18.5-6.5,25.4-15.6,21.9-25.6c-3.2-9.1-11.2-11.7-25.3-8.6l-13.4,2.9c-10.7,2.3-13.8,1-15.2-3\n\t\t\t\t\tc-1.5-4.3,2.3-9.8,14.2-13.9l1.5-0.5c12.1-4.2,19.6-2,22.5,3.1l9.3-3.3c-4.5-10-16.3-13.4-35-6.9c-18.7,6.5-23.6,16.7-20.8,24.8\n\t\t\t\t\tC247.3,282,254.2,284.2,269.9,280.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M426.1,266.5c-0.1-9.6-6.9-14.7-21.2-16.3l-13.6-1.5c-10.8-1.2-13.4-3.5-13.5-7.7c0-4.5,5.3-8.5,17.9-8.6\n\t\t\t\t\tl1.6,0c12.8-0.1,19.3,4.4,20.3,10.1l9.8-0.1c-1.1-10.9-11.2-17.9-31-17.7c-19.8,0.2-27.7,8.3-27.7,16.8\n\t\t\t\t\tc0.1,10.1,5.9,14.4,21.9,16.2l14.1,1.6c9.6,1,12.3,3.7,12.3,7.9c0,4-4.1,8.7-19.4,8.9l-1.6,0c-15.3,0.2-20.1-5.5-20.7-11.4\n\t\t\t\t\tl-9.8,0.1c0.5,11.9,9.7,19.2,31.6,19C416.8,283.5,426.2,277.1,426.1,266.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M497.7,280.7l37.3,12.4l3,16.5l9.7,3.2l-12.2-64.6l-10.7-3.6L476.2,289l9.3,3.1L497.7,280.7z M527.7,252.9\n\t\t\t\t\tl5.8,31.6l-29.3-9.7L527.7,252.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M619.1,359.3c12.5,9.8,21.4,10.6,26,9.8l-4.6,5.9l6.9,5.4l13.9-17.7c2.8-3.6,2.4-7-1.2-9.8l-22.3-17.5\n\t\t\t\t\tl-4.8,6.1l20.9,16.4l-0.9,1.2c-4.6,5.8-15.1,5.2-28.5-5.3l-1.3-1c-13.4-10.5-16.8-23.2-8.2-34.1c8.6-11,22.3-10.2,35.4,0l1.3,1\n\t\t\t\t\tc13.3,10.4,12.9,19.4,10.7,23.6l7.7,6.1c5.4-9.6,2-23.4-14.3-36.2c-18.5-14.5-37.2-13.6-47.9,0\n\t\t\t\t\tC597.4,326.7,600.1,344.5,619.1,359.3z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "686.1,425.9 717.4,476.2 724,472.1 697.3,429.3 712.7,419.7 736.3,457.6 742.8,453.6 719.2,415.7\n\t\t\t\t\t733,407.1 759.2,449.1 765.8,445.1 734.9,395.5 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "126.6,967.8 174,1003.2 178.6,997 138.3,966.9 149.1,952.4 184.8,979.1 189.4,973 153.7,946.2\n\t\t\t\t\t163.4,933.2 203.1,962.9 207.7,956.7 161,921.8 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M280.7,990.3l-48.4,44.5l9.3,3.1l12.3-11.4l37.3,12.4l3,16.5l9.7,3.2l-12.3-64.6L280.7,990.3z M260.2,1020.4\n\t\t\t\t\tl23.5-21.9l5.8,31.6L260.2,1020.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M432.3,1026.1c0-9.2-7.9-15.8-19.7-15.8l-39.4,0.2l0.3,57.5l8.8,0l-0.1-22.9l33.9-0.1c4.4,0,6.2,1.3,6.2,5.7\n\t\t\t\t\tl0.1,17.2l8.8,0l-0.1-19.1c0-5.7-2.4-8.7-8.7-8.7H422C427.3,1038.3,432.3,1033.3,432.3,1026.1z M411.2,1037.2l-29.1,0.1l-0.1-19.1\n\t\t\t\t\tl29.1-0.1c7.7,0,12.2,3.3,12.3,9.5C423.4,1033.3,418.9,1037.2,411.2,1037.2z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "543.9,982.6 482.4,1002.5 484.8,1009.9 511.4,1001.3 526.7,1048.6 535.1,1045.9 519.7,998.6\n\t\t\t\t\t546.2,989.9 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "635.6,925.2 650.3,945 613,972.7 598.3,952.9 591.3,958.2 625.5,1004.3 632.5,999.1 617.6,978.9\n\t\t\t\t\t654.9,951.2 669.9,971.4 676.9,966.1 642.7,920 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M382.1,42.8h39.3l8,14.7h10.2L407.6,0h-11.3l-32,57.4h9.8L382.1,42.8z M401.8,6.9L417.2,35h-30.9L401.8,6.9z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "242.7,637.6 242.7,629.9 186,629.9 186,687.4 194.7,687.4 194.7,663.3 237.3,663.3 237.3,655.6\n\t\t\t\t\t194.7,655.6 194.7,637.6 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M353.9,645.7c0-9.2-7.9-15.8-19.6-15.8h-39.4v57.4h8.8v-22.9h33.9c4.4,0,6.2,1.3,6.2,5.7v17.2h8.8v-19.1\n\t\t\t\t\tc0-5.7-2.4-8.7-8.6-8.7h-0.3C348.8,657.9,353.9,653,353.9,645.7z M332.7,656.7h-29v-19.1h29c7.7,0,12.2,3.4,12.2,9.5\n\t\t\t\t\tC344.9,652.9,340.4,656.7,332.7,656.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M444,629.1c-21.1,0-37.7,10.5-37.7,29.5c0,19,16.7,29.5,37.7,29.5c21,0,37.7-10.5,37.7-29.5\n\t\t\t\t\tC481.7,639.6,465,629.1,444,629.1z M444.8,680.5h-1.6c-15.1,0-28-7.5-28-21.8c0-14.4,12.9-21.8,28-21.8h1.6c15.1,0,28,7.5,28,21.8\n\t\t\t\t\tC472.8,673,459.9,680.5,444.8,680.5z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "606.4,687.4 615.2,687.4 615.2,629.9 600.4,629.9 575.6,680 550.6,629.9 535.8,629.9 535.8,687.4\n\t\t\t\t\t544.6,687.4 544.6,636.9 569.8,687.4 581.2,687.4 606.4,636.6 \t" }
      })])])])]) : t._e(), t._v(" "), 0 !== t.contextScreen ? i("div", { staticClass: "soundboard-landing__button-wrapper soundboard-landing__button-wrapper--close" }, [i("button", {
        staticClass: "soundboard-landing__button soundboard-landing__button--close cursor--close ignore-theme",
        on: {
          click: function(e) {
            e.stopPropagation(), t.closeFullscreen(e)
          }
        }
      })]) : t._e(), t._v(" "), t.showActionButton ? i("div", { staticClass: "soundboard-landing__button-wrapper" }, [i("button", {
        class: t.buttonCls,
        on: {
          click: function(e) {
            e.stopPropagation(), t.handleClick(e)
          }
        }
      })]) : t._e()], 1)
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "soundboard-share-intro__text" }, [i("p", [t._v("\n\t\t\t\tTHIS TRANSMISSION CONTAINS A SOUNDSCAPE CREATED IN THE TRADITION OF THE GOLDEN RECORD.\n\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\tTHE GOLDEN RECORD IS AN ARTIFACT LAUNCHED INTO SPACE BY NASA IN 1977. THE ORIGINAL CONTAINED\n\t\t\t\tA SOUND POEM THAT WOVE TOGETHER SOUNDS OF NATURE AND HUMANS TO EXPLAIN OUR EXISTENCE TO EXTRATERRESTRIALS.\n\t\t\t\tFOURTY YEARS LATER, WEâ€™RE CELEBRATING THE ARTISTIC LEGACY OF THE ORIGINAL.\n\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\tTurn on your sound\n\t\t\t")])])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      t._self._c
      return t._m(0)
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "section-separator" }, [i("hr", { staticClass: "section-separator__horizontal" }), t._v(" "), i("hr", { staticClass: "section-separator__vertical" })])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return !t.isGreaterThanTablet || t.isIe || t.isiOS ? i("div", { attrs: { id: "dither-bg__fallback" } }) : i("canvas", {
        attrs: {
          id: "dither-bg",
          width: t.canvasWidth,
          height: t.canvasHeight
        }
      })
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container container--styleguide" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Ideas ")]), i("span", [t._v("and ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("emotions")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v(" ï¨")]), i("span", [t._v(" through ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("rhythm")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("melody, ")]), i("span", [t._v("harmony, ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("and ")]), i("span", [t._v("color.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Gilles ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item left" }, [i("strong", [t._v("Peterson "), i("span", { staticClass: "glyph" }, [t._v("ï‚¤")])])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("explores ")]), i("span", [t._v("the ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item single-word" }, [i("span", [t._v("d")]), i("span", [t._v("i")]), i("span", [t._v("v")]), i("span", [t._v("e")]), i("span", [t._v("r")]), i("span", [t._v("s")]), i("span", [t._v("i")]), i("span", [t._v("t")]), i("span", [t._v("y")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of todayâ€™s global")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" music.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("ï‚‘")]), t._v(" "), i("strong", [t._v("Continents. ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("ï‚‘")]), t._v(" "), i("strong", [t._v("Mixes.")])])])]), t._v(" "), i("separator", { staticClass: "section-item three-quarter vertical" }), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music" }, [i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\tOverview of the artist creating the regional mix, their influences or unique qualities, or creative process. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.\n\t\t")]), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FLeMellotron%2Fmochi-records-young-pulse-atn%2F",
          frameborder: "0"
        }
      })])], 1), t._v(" "), i("separator", { staticClass: "section-item three-quarter center styleguide__video-separator--top" }), t._v(" "), i("gr-video-player", {
        staticClass: "section-item full-video",
        attrs: { src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" }
      }), t._v(" "), i("separator", { staticClass: "section-item three-quarter top styleguide__video-separator--bottom" }), t._v(" "), i("triptych", { staticClass: "section-item half-width right section-triptych__greetings" }, [i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\tShort description of what this star is saying to her curabitur arcu erat, accumsan id imperdiet et, porttitor at. Pellentesque in ipsum id orci porta.\n\t\t")]), t._v(" "), i("img", {
        staticClass: "section-triptych__item-3 section-triptych__image",
        attrs: {
          slot: "triptych-item-3",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg",
          alt: ""
        },
        slot: "triptych-item-3"
      })], 1), t._v(" "), i("img", {
        staticClass: "static-dither",
        attrs: { src: "/static/images/stati-dither.png", alt: "" }
      }), t._v(" "), i("div", { staticClass: "section-item full-width-extended section-contributor__contributor-wrapper" }, [i("contributor", {
        staticClass: "right sounds_contributor light__theme",
        attrs: {
          image: "https://yt3.ggpht.com/-HM7xbaMa5iI/AAAAAAAAAAI/AAAAAAAAAAA/6dMcPIcKHus/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
          name: "Gilles Peterson",
          description: "A DJ, record label owner, producer, and record collector. His global radio platform, Worldwide FM, is in its second year, exploring and tying together the shape-shifting diversity of global music."
        }
      })], 1)], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return t.ctaUrl ? i("router-link", {
        class: {
          "section-title": !t.isGreaterThanTablet || t.isIe,
          "next-page__cta-wrapper": t.isGreaterThanTablet && !t.isIe,
          "cursor--next": t.isGreaterThanTablet && !t.isIe
        }, attrs: { to: { path: t.ctaUrl } }, nativeOn: {
          click: function(e) {
            t.onClickCta(e)
          }
        }
      }, [t.isGreaterThanTablet && !t.isIe ? i("video", {
        ref: "titleVideo",
        staticClass: "next-page__cta-video",
        attrs: { alt: "Greetings", poster: t.titlePosterSrc, width: "1600", height: "750", preload: "", autoplay: "" }
      }) : i("h1", {
        staticClass: "section-title__title section-title__title-cta",
        domProps: { innerHTML: t._s(t.title) }
      })]) : i("div", { staticClass: "section-title" }, [i("em", {
        ref: "sectionIndex",
        staticClass: "section-title__index"
      }, [t._v(t._s(t.index))]), t._v(" "), t.isGreaterThanTablet && !t.isIe ? i("video", {
        ref: "titleVideo",
        staticClass: "title-page__video",
        attrs: {
          alt: "Greetings",
          src: t.titleVideoSrc,
          poster: t.titlePosterSrc,
          width: "1600",
          height: "750",
          preload: "",
          playslinline: ""
        }
      }) : i("h1", {
        staticClass: "section-title__title",
        domProps: { innerHTML: t._s(t.title) }
      }), t._v(" "), i("separator", {
        staticClass: "section-item three-quarter bottom separator",
        attrs: { isSectionTitle: !0 }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--preface" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("somewhere ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("out ")]), i("span", [t._v("there,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("in Â»deepÂ« space, ")]), i("span", { staticClass: "glyph" }, [t._v("î¤…")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("beyond")]), i("span", [t._v("the")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("l")]), i("strong", [t._v("i")]), i("strong", [t._v("m")]), i("strong", [t._v("i")]), i("strong", [t._v("t")]), i("strong", [t._v("s")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify mobile-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("beyond")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" the ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("limits")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of time ")]), i("span", { staticClass: "glyph" }, [t._v("î¤†")]), t._v(" itself,")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("is "), i("strong", [t._v("this")]), t._v(".")]), t._v(" "), i("span", [t._v(".")]), t._v(" "), i("span"), t._v(" "), i("span", [t._v(".")]), t._v(" "), i("span"), t._v(" "), i("span", [t._v(".")]), t._v(" "), i("span"), t._v(" "), i("span"), t._v(" "), i("span", [t._v(".")]), t._v(" "), i("span"), t._v(" "), i("span"), t._v(" "), i("span"), t._v(" "), i("span", [t._v(".")]), t._v(" "), i("span")])])]), t._v(" "), i("div", { staticClass: "preface__images-wrapper" }, [i("div", { staticClass: "preface__image-item preface__image-text" }, [i("slide-in-el", { staticClass: " section-item col-5 marg-left-col-1" }, [i("img", {
        staticClass: "preface__image",
        attrs: { src: "/static/images/preface/sequence-1.gif", alt: "" }
      })]), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper section-item col-4 marg-left-col-1" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tA spacecraft called Voyager\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tOne of a twin pair\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line center" }, [t._v("\n\t\t\t\t\t\tlaunched in 1977 â€“\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tdestined to be\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tthe first human-made object\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tto enter\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/1-Intstellar_optimized.gif"
        }
      }, [i("a", [t._v("interstellar")])]), t._v("\n\t\t\t\t\t\t space.\n\t\t\t\t\t")], 1)])], 1), t._v(" "), i("div", { staticClass: "preface__image-item preface__image-text" }, [i("slide-in-el", { staticClass: "section-item col-5 marg-right-col-2" }, [i("img", {
        staticClass: "preface__image ",
        attrs: { src: "/static/images/preface/sequence-2.gif", alt: "" }
      })]), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper section-item col-4 marg-left-col-2" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tOnboard this vessel is a\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tGolden Record. In its grooves\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tlie a\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\trepresentation of humanity,\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tcreated in the event\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tthat intelligent life\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tmay receive it.\n\t\t\t\t\t")])])], 1), t._v(" "), i("div", { staticClass: "preface__image-item" }, [i("slide-in-el", { staticClass: "section-item col-5 marg-left-col-1" }, [i("img", {
        staticClass: "preface__image ",
        attrs: { src: "/static/images/preface/sequence-3.gif", alt: "" }
      })])], 1), t._v(" "), i("div", { staticClass: "preface__image-item dither-trigger to-white" }, [i("slide-in-el", { staticClass: "section-item col-6 marg-right-col-1" }, [i("img", {
        staticClass: "preface__image ",
        attrs: { src: "/static/images/preface/sequence-5.gif", alt: "" }
      })])], 1), t._v(" "), i("div", { staticClass: "preface__image-item" }, [i("slide-in-el", { staticClass: "section-item col-5 marg-left-col-1" }, [i("img", {
        staticClass: "preface__image ",
        attrs: { src: "/static/images/preface/sequence-4.gif", alt: "" }
      })])], 1), t._v(" "), i("div", {
        staticClass: "preface__image-item preface__image-text",
        style: { "margin-bottom": "20px" }
      }, [i("slide-in-el", { staticClass: "section-item col-5 marg-right-col-2" }, [i("img", {
        staticClass: "preface__image ",
        attrs: { src: "/static/images/preface/sequence-6.gif", alt: "" }
      })]), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper section-item col-4 marg-left-col-2" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tCurated by a team led\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tby\n\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/carlSagan.jpg",
          title: "Carl Sagan",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/sdnsz13avwt9yovlc20171204233426/latest"
        }
      }, [i("a", [t._v("Carl Sagan")])]), t._v("\n\t\t\t\t\t\tin 1977,\n\t\t\t\t\t")], 1), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tthis disc is a\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tvision of our world:\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tour sounds, our science,\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line center" }, [t._v("\n\t\t\t\t\t\tour images, our music,\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tour thoughts and feelings.\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\tOur grandest ideas,\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line center" }, [t._v("\n\t\t\t\t\t\tour greatest achievements,\n\t\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\t\tour deepest emotions.\n\t\t\t\t\t")])])], 1), t._v(" "), i("div", { staticClass: "preface__image-item full-width" }, [i("slide-in-el", [i("img", {
        staticClass: "preface__image",
        attrs: { src: "/static/images/preface/sequence-7.gif", alt: "" }
      })])], 1), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper section-item col-4 marg-left-col-2 last" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\tA Message from Earth\n\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line right" }, [t._v("\n\t\t\t\t\tis a collection of new work\n\t\t\t\t")]), t._v(" "), i("p", { staticClass: "preface__text-line center" }, [t._v("\n\t\t\t\t\tinspired by that story.\n\t\t\t\t")])])], 1), t._v(" "), i("div", { staticClass: "section-item full-width-extended section-contributor__contributor-wrapper" }, [i("contributor", {
        staticClass: "right section-item col-8 marg-left-col-1 sounds_contributor light__theme",
        attrs: {
          image: "/static/images/contributors/sophy-avatar.jpg",
          name: "Sophy Hollington",
          description: "An illustrator, artist, printmaker, and guitarist. Most of Sophyâ€™s commercial work takes the form of relief prints, created using the lengthy process of lino-cutting."
        }
      })], 1)], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      return (t._self._c || e)("div", [t._t("default")], 2)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--images" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("div", { staticClass: "images-intro" }, [i("div", { staticClass: "images-intro__bg images-viewport-trigger" }, [i("div", { staticClass: "images-intro__bg-item--wrapper" }, [i("div", { staticClass: "images-intro__bg-item" }, [i("img", { attrs: { src: t.introImg1 } })])]), t._v(" "), i("div", { staticClass: "images-intro__bg-item--wrapper" }, [i("div", { staticClass: "images-intro__bg-item" }, [i("img", { attrs: { src: t.introImg2 } })])])]), t._v(" "), i("div", { staticClass: "section-item" }, [i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("A")]), t._v(" "), i("span", [t._v(" representation")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of ")]), t._v(" "), i("span", [t._v("an ")]), t._v(" "), i("span", [t._v("external ")]), t._v(" "), i("span", [t._v("form,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("produced ")]), t._v(" "), i("span", [t._v("by ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("light ")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤š")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("or ")]), t._v(" "), i("span", [t._v("other ")]), t._v(" "), i("span", [t._v("radiation.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("A ")]), t._v(" "), i("span", [t._v("token ")]), t._v(" "), i("span", [t._v("from")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("a ")]), t._v(" "), i("strong", [t._v("moment ")]), t._v(" "), i("span", [t._v("in ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("time;")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("a ")]), t._v(" "), i("span", [t._v("way ")]), t._v(" "), i("span", [t._v("to ")]), t._v(" "), i("span", [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/6.remember_optimized.gif"
        }
      }, [i("a", [t._v("remember")])])], 1)])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤‘")]), t._v(" "), i("span", [t._v("and ")]), t._v(" "), i("span", [t._v("share ")]), t._v(" "), i("span", [t._v("our ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", { staticClass: "contains-annotation" }, [i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/stories.jpg",
          title: "Stories",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/s4xgtd8jk4cd9rzgd20171206190206/latest"
        }
      }, [i("a", [t._v("stories.")])])], 1)])])])], 1)]), t._v(" "), i("separator", { staticClass: "section-item three-quarter vertical greetings__video-separator--top" }), t._v(" "), i("diptych", { staticClass: "section-item three-quarter" }, [i("img", {
        staticClass: "section-diptych__item-1",
        attrs: { slot: "diptych-item-1", src: "/static/images/images/images-diptych.jpg" },
        slot: "diptych-item-1"
      }), t._v(" "), i("div", {
        staticClass: "section-diptych__item-2",
        attrs: { slot: "diptych-item-2" },
        slot: "diptych-item-2"
      }, [i("p", {}, [t._v("\n\t\t\t\t\tFive photographers â€“ each curating a series of five photographs â€“ offer up their own portraits of hope, determination, and goodwill from around the world.\n\t\t\t\t")])])]), t._v(" "), i("div", { staticClass: "section-item full-width image-carousels" }, [i("div", [i("div", { staticClass: "carousel-container carousel-container--right" }, [i("carousel", t._b({}, "carousel", t.photographers[0], !1), [i("p", {
        staticClass: "carousel__caption active",
        attrs: { id: "caption-0" }
      }, [t._v("\n\t\t\t\t\t\t\tLucas lives on JeribucaÃ§u beach, a place only reachable after a trek across the Atlantic Forest. He works at his fatherâ€™s restaurant, hoping to preserve\n\n\t\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/bahia.jpg",
          title: "Bahia",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/s072enb8nwb7gjcyy20171206032706/latest"
        }
      }, [i("a", [t._v("Bahia")])]), t._v("\n\n\t\t\t\t\t\t\tas it is, by continuing the traditional customs of fishing and cooking.\n\t\t\t\t\t\t")], 1), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-1" }
      }, [t._v("\n\t\t\t\t\t\t\tStefania plays at the JeribucaÃ§u river. She plays nonstop outdoors until lunch or dinner time. Being a child here is the real thing, in spite of the things that donâ€™t work properly (like education, politics, and public safety).\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-2" }
      }, [t._v("\n\t\t\t\t\t\t\tGuilherme was raised on a farm, where he became fascinated with horses. He always dreamed of having his own one day. He bought his first horse at the age of 16, paid for through labor at the farm.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-3" }
      }, [t._v("\n\t\t\t\t\t\t\tMaria is a mother of three kids. She is only 29, giving birth to her first child when she was 13. Unlike other young moms, she decided to go back to school and empower herself to give a better life to her family.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-4" }
      }, [t._v("\n\t\t\t\t\t\t\tMangrove forests are ecosystems that keep the equilibrium in marine environments, providing abundant fish, clean water, and beneficial plants. The roots of these trees are full of oysters, a good sign of the water health.\n\t\t\t\t\t\t")])]), t._v(" "), i("photographer-label", t._b({}, "photographer-label", t.photographers[0], !1))], 1), t._v(" "), i("div", { class: "floaters floaters--0 images-viewport-trigger" }, t._l(t.photographers[0].floaters, function(t) {
        return i("div", { staticClass: "floater" }, [i("div", { staticClass: "floater--inner" }, [i("img", { attrs: { src: t } })])])
      }))]), t._v(" "), i("div", [i("div", { staticClass: "carousel-container carousel-container--left" }, [i("carousel", t._b({}, "carousel", t.photographers[1], !1), [i("p", {
        staticClass: "carousel__caption active",
        attrs: { id: "caption-0" }
      }, [t._v("\n\t\t\t\t\t\t\tA trailer no longer in use frames up fertile farmlands, just outside the town of Cookhouse in the Eastern Cape. Showing humansâ€™ indisputable mark on the land as if the trailer were a picture frame in a gallery.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-1" }
      }, [t._v("\n\t\t\t\t\t\t\tA rock stands in resistance to the onshore breezes in the coastal town of Plettenberg Bay. What drew me to this is the rebellious nature of the marijuana leaf haphazardly sprayed on the rock. Why do we do have these urges?\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-2" }
      }, [t._v("\n\t\t\t\t\t\t\tA thin orange rope demarcates an area for maintenance and rehabilitation after a devastating fire in the Knysna area of the Western Cape. A sobering reminder of the power of nature.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-3" }
      }, [t._v("\n\t\t\t\t\t\t\tThe windmill is a symbol of fertile lands in these Karoo areas. Used to pump water from deep in the ground in an otherwise barren landscape, these creations are sold by the people of Cradock to make an income for their families.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-4" }
      }, [t._v("\n\t\t\t\t\t\t\tThe superman logo sits pinned up on a quiet road just outside Sutherland. Like a mast of defiance, someone leaves their mark in the middle of nowhere where it will have very little significance.\n\n\t\t\t\t\t\t")])]), t._v(" "), i("photographer-label", t._b({}, "photographer-label", t.photographers[1], !1))], 1), t._v(" "), i("div", { class: "floaters floaters--1 images-viewport-trigger" }, t._l(t.photographers[1].floaters, function(t) {
        return i("div", { staticClass: "floater" }, [i("div", { staticClass: "floater--inner" }, [i("img", { attrs: { src: t } })])])
      }))]), t._v(" "), i("div", { staticClass: "dither-trigger to-white" }, [i("div", { staticClass: "carousel-container carousel-container--right" }, [i("carousel", t._b({}, "carousel", t.photographers[2], !1), [i("p", {
        staticClass: "carousel__caption active",
        attrs: { id: "caption-0" }
      }, [t._v("\n\t\t\t\t\t\t\tRock climbers bouldering at dusk, Central Park\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-1" }
      }, [t._v("\n\t\t\t\t\t\t\tYoung ice skater at the LeFrak Center at Lakeside, Prospect Park\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-2" }
      }, [t._v("\n\t\t\t\t\t\t\tPlaying basketball, Prospect Park Parade Grounds\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-3" }
      }, [t._v("\n\t\t\t\t\t\t\tGeorge Washington Bridge, birdâ€™s eye view\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-4" }
      }, [t._v("\n\t\t\t\t\t\t\tWatching the sunset from the Meatpacking District, Manhattan\n\t\t\t\t\t\t")])]), t._v(" "), i("photographer-label", t._b({}, "photographer-label", t.photographers[2], !1))], 1), t._v(" "), i("div", { class: "floaters floaters--2 images-viewport-trigger" }, t._l(t.photographers[2].floaters, function(t) {
        return i("div", { staticClass: "floater" }, [i("div", { staticClass: "floater--inner" }, [i("img", { attrs: { src: t } })])])
      }))]), t._v(" "), i("div", [i("div", { staticClass: "carousel-container carousel-container--left" }, [i("carousel", t._b({}, "carousel", t.photographers[3], !1), [i("p", {
        staticClass: "carousel__caption active",
        attrs: { id: "caption-0" }
      }, [t._v("\n\t\t\t\t\t\t\tA giant screen reflects on the floor in Shibuya, Tokyo.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-1" }
      }, [t._v("\n\t\t\t\t\t\t\tA girl sits down on the floor in front of Shinjuku Subway Station.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-2" }
      }, [t._v("\n\t\t\t\t\t\t\tA leather briefcase between a man and a woman in Ginza, Tokyo.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-3" }
      }, [t._v("\n\t\t\t\t\t\t\tA salary man runs on the stairs of a bridge nearby Ginza district in Tokyo.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-4" }
      }, [t._v("\n\t\t\t\t\t\t\tâ€‹Ikebana arrangement. Ikebana is counted as one of the three classical Japanese arts of refinement, along with koÌ„doÌ„ for incense appreciation and chadoÌ„ for tea and the tea ceremony.\n\t\t\t\t\t\t")])]), t._v(" "), i("photographer-label", t._b({}, "photographer-label", t.photographers[3], !1))], 1), t._v(" "), i("div", { class: "floaters floaters--3 images-viewport-trigger" }, t._l(t.photographers[3].floaters, function(t) {
        return i("div", { staticClass: "floater" }, [i("div", { staticClass: "floater--inner" }, [i("img", { attrs: { src: t } })])])
      }))]), t._v(" "), i("div", [i("div", { staticClass: "carousel-container carousel-container--right" }, [i("carousel", t._b({}, "carousel", t.photographers[4], !1), [i("p", {
        staticClass: "carousel__caption active",
        attrs: { id: "caption-0" }
      }, [t._v("\n\t\t\t\t\t\t\tA close up of a prickly pear's leaf in the early morning, after a stormy night. Prickly pear is the most common plant in the village of Ginostra in Stromboli, Italy.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-1" }
      }, [t._v("\n\t\t\t\t\t\t\tA white glass pebble among volcanic pebbles, found in the early morning on the beach of Fico Grande. All beaches in Stromboli are covered in black sand and dark grey volcanic stones and pebbles.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-2" }
      }, [t._v("\n\t\t\t\t\t\t\tThe shadow of Stromboli reflects on the sea through the smoke of the volcano. In the bottom you can spot the village of Stromboli and the tiny island of Strombolicchio, which is said to have been part of the very first crater.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-3" }
      }, [t._v("\n\t\t\t\t\t\t\tStromboli is one of the most active volcanoes in the world, with persistent explosive activities. It is also one of the few volcanoes in the world where the activity can be observed from a higher perspective.\n\t\t\t\t\t\t")]), t._v(" "), i("p", {
        staticClass: "carousel__caption",
        attrs: { id: "caption-4" }
      }, [t._v("\n\t\t\t\t\t\t\tReflection of the sky on sea water between rocks at sunrise on the beach of Piscita.\n\t\t\t\t\t\t")])]), t._v(" "), i("photographer-label", t._b({}, "photographer-label", t.photographers[4], !1))], 1)])])], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { attrs: { id: "app" } }, [i("upgrade-browser"), t._v(" "), i("navigation", { class: { visible: t.isRouteDirty } }), t._v(" "), t.showLoader ? i("div", [i("loader")], 1) : t._e(), t._v(" "), i("rotate-phone"), t._v(" "), i("bg-dots", { ref: "bgDots" }), t._v(" "), i("dither-background", { ref: "ditherBg" }), t._v(" "), i("transition", {
        attrs: {
          mode: "out-in",
          css: !1
        }, on: { "before-leave": t.beforeLeaveTransition, enter: t.enterTransition, leave: t.leaveTransition }
      }, [i("router-view", { ref: "currentView" })], 1)], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--epilogue" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m outro-text" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("The ")]), t._v("free\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tand generous "), i("span", { staticClass: "mobile-hidden" }, [t._v("transfer")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\ttransfer\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤— ")]), t._v("of possession "), i("span", { staticClass: "mobile-hidden" }, [t._v("from")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tfrom\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tone to another.\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center mobile-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tWe do so to"), i("strong", [t._v(" support,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tWe do so to\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("support,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify mobile-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/10.champion_optimized.gif"
        }
      }, [i("a", [t._v("champion")]), t._v(",\n\t\t\t\t\t\t")])], 1), t._v(" "), i("span", [t._v("and ")]), t._v(" "), i("span", [t._v("embolden.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("champion, ")]), t._v(" "), i("span", [t._v("and ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("e")]), i("span", [t._v("m")]), i("span", [t._v("b")]), i("span", [t._v("o")]), i("span", [t._v("l")]), i("span", [t._v("d")]), i("span", [t._v("e")]), i("span", [t._v("n")]), i("span", [t._v(".")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tA Message\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tfrom Earth "), i("span", { staticClass: "glyph" }, [t._v("î¤")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right mobile-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("is a gift")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("to any who find")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v(" it")]), t._v(".\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\tis a gift to any who\n\t\t\t\t")])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right desktop-hidden" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("find")]), i("strong", [t._v(" it")]), t._v(".\n\t\t\t\t")])])]), t._v(" "), i("slide-in-el", { staticClass: "section-item video-container three-quarter" }, [i("gr-video-player", {
        attrs: {
          type: "youtube",
          youtubeId: "p5cPuGAH8rU",
          poster: t.videoPoster,
          customCursor: "",
          bigPlayPauseButton: "",
          autoplay: ""
        }
      })], 1), t._v(" "), i("div", { staticClass: "friends" }, [i("div", { staticClass: "friends__inner" }, [i("slide-in-el", { staticClass: "friends__glyph-text preface__images-wrapper" }, [i("introduction", { staticClass: "heading--xl col-7 marg-right-col-1" }, [i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Fri")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤•")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤›")]), t._v(" "), i("strong", [t._v("Ends")])])])]), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper body-copy preface__text-wrapper col-6 no-animation" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\t\tWe are supporting three organizations to further their explorations at home and in the\n\n\t\t\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/beyondCosmos.jpg",
          title: "Beyond Cosmos",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/s159ryrqxixho1fmh20171204232503/latest"
        }
      }, [i("a", [t._v("great beyond,")])]), t._v("\n\n\t\t\t\t\t\t\tand would be humbled if you do the same.\n\n\t\t\t\t\t\t")], 1)])], 1), t._v(" "), i("div", { staticClass: "friends__list-wrapper" }, [i("slide-in-el", { staticClass: "friend" }, [i("div", {
        staticClass: "friend__image friend__image--left",
        staticStyle: { "background-image": "url('/static/images/contributors/seti-avatar.jpg')" },
        attrs: { extraDelay: 0 }
      }), t._v(" "), i("div", {
        staticClass: "friend__blurb",
        attrs: { extraDelay: .1 }
      }, [i("p", [t._v("\n\t\t\t\t\t\t\t\tSETI\n\t\t\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\t\t\tThe SETI Instituteâ€™s mission is to explore, understand and explain the origin and nature of life in the universe and the evolution of intelligence. As a nonprofit organization, its programs include scientific research, STEM education and public outreach.\n\t\t\t\t\t\t\t")])])]), t._v(" "), i("slide-in-el", { staticClass: "friend right-aligned" }, [i("div", {
        staticClass: "friend__image",
        staticStyle: { "background-image": "url('/static/images/contributors/sagan-avatar.jpg')" }
      }), t._v(" "), i("div", {
        staticClass: "friend__blurb",
        attrs: { extraDelay: .1 }
      }, [i("p", [t._v("\n\t\t\t\t\t\t\t\tThe Carl Sagan Institute\n\t\t\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\t\t\tCSI for life in the universe: The Carl Sagan Institute (CSI) explores how we can figure out if a planet and moon can host life and how we could find it. It brings together experts and students from a wide range of scientific disciplines to build a forensic toolkit for the search for life in our solar system, and beyond.\n\t\t\t\t\t\t\t")])])]), t._v(" "), i("slide-in-el", { staticClass: "friend" }, [i("div", {
        staticClass: "friend__image friend__image--left",
        staticStyle: { "background-image": "url('/static/images/contributors/borders-avatar.jpg')" }
      }), t._v(" "), i("div", {
        staticClass: "friend__blurb",
        attrs: { extraDelay: .1 }
      }, [i("p", [t._v("\n\t\t\t\t\t\t\t\tAstronomers Without Borders\n\t\t\t\t\t\t\t")]), t._v(" "), i("p", [t._v("\n\t\t\t\t\t\t\t\tWe all share the same sky.  Astronomers Without Borders brings the world together to promote understanding and STEM education through their shared passion for astronomy.  Through community-based projects, they make it possible for everyone to enjoy the wonders of the universe.\n\t\t\t\t\t\t\t")])])])], 1)], 1), t._v(" "), i("div", { staticClass: "bg-image bg-image__friends" })]), t._v(" "), i("div", { staticClass: "credits dither-trigger to-white" }, [i("div", { staticClass: "credits__inner" }, [i("slide-in-el", { staticClass: "credits__glyph-text preface__images-wrapper" }, [i("introduction", { staticClass: "heading--xl col-7 marg-right-col-1" }, [i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Cre")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤–")]), t._v(" "), i("strong", [t._v("dits")])])])]), t._v(" "), i("body-copy", { staticClass: "preface__text-wrapper body-copy preface__text-wrapper col-6 no-animation" }, [i("p", { staticClass: "preface__text-line left" }, [t._v("\n\t\t\t\t\t\t\tIn 2017, the team at Ozma Records released the Golden Record on vinyl for the first time on earth.\n\t\t\t\t\t\t\tYou can preorder their 3xLP box set\n\t\t\t\t\t\t\t"), i("a", {
        attrs: {
          href: "http://www.ozmarecords.com/shop",
          target: "_blank"
        }
      }, [t._v("here")]), t._v(".\n\t\t\t\t\t\t")])])], 1), t._v(" "), i("div", { staticClass: "credits__columns" }, [i("slide-in-el", {
        staticClass: "credits-column-wrapper",
        attrs: { extraDelay: .3 }
      }, [i("credits-column", {
        attrs: {
          contributors: t.contributors[0],
          offset: "2"
        }
      })], 1), t._v(" "), i("slide-in-el", {
        staticClass: "credits-column-wrapper",
        attrs: { extraDelay: .4 }
      }, [i("credits-column", {
        attrs: {
          contributors: t.contributors[1],
          offset: "3"
        }
      })], 1), t._v(" "), i("slide-in-el", {
        staticClass: "credits-column-wrapper",
        attrs: { extraDelay: .2 }
      }, [i("credits-column", {
        attrs: {
          contributors: t.contributors[2],
          offset: "1"
        }
      })], 1), t._v(" "), i("slide-in-el", {
        staticClass: "credits-column-wrapper",
        attrs: { extraDelay: .1 }
      }, [i("credits-column", {
        attrs: {
          contributors: t.contributors[3],
          offset: "0"
        }
      })], 1)], 1)], 1), t._v(" "), i("div", { staticClass: "bg-image bg-image__credits" })]), t._v(" "), i("div", { staticClass: "wt-footer" }, [i("a", {
        staticClass: "wetransfer-logo",
        attrs: { href: "https://wetransfer.com/", target: "_blank" },
        on: { click: t.trackBottomWt }
      })])], 1)])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      return (t._self._c || e)("div", { staticClass: "body-copy" }, [t._t("default")], 2)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--music" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Sounds ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("combined")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v(" î¤‡")]), i("span", [t._v(" to")]), i("span", [t._v(" produce")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" beauty")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of")]), i("span", [t._v(" form,")]), i("span", [t._v(" harmony,")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" and")]), i("span", [t._v(" emotion.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("A")]), i("strong", [t._v(" language")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤Š")]), i("span", [t._v(" beyond")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" language.")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("A")]), i("span", [t._v(" way")]), i("span", [t._v(" to")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v(" understand.")])])])]), t._v(" "), i("separator", { staticClass: "section-item three-quarter vertical greetings__video-separator--top music__video-separator--top" }), t._v(" "), i("diptych", { staticClass: "section-item three-quarter" }, [i("img", {
        staticClass: "section-diptych__item-1",
        attrs: { slot: "diptych-item-1", src: "/static/images/music/music-diptych.jpg" },
        slot: "diptych-item-1"
      }), t._v(" "), i("div", {
        staticClass: "section-diptych__item-2",
        attrs: { slot: "diptych-item-2" },
        slot: "diptych-item-2"
      }, [i("p", {}, [t._v("\n\t\t\t\t\tRenowned DJ\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/gillesPeterson.jpg",
          title: "Gilles Peterson",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/sk5tnfi936h07ss6g20171205102224/latest"
        }
      }, [i("a", [t._v("Gilles Peterson")])]), t._v("\n\t\t\t\t\t explores the diverse music of our planet. Join Gilles and 12 friends as they enjoy conversation and mixes from around the world.\n\t\t\t\t")], 1)])]), t._v(" "), i("div", {
        ref: "triptychs-wrapper",
        staticClass: "section-music__triptych-wrapper"
      }, [t.isIe ? t._e() : i("div", {
        ref: "videoWrapper",
        staticClass: "music__globe-video--wrapper"
      }, [t.isGreaterThanTablet ? i("video", {
        ref: "videoGlobe",
        staticClass: "music__globe-video",
        style: t.globeYTranslate,
        attrs: { src: "/static/videos/music/globe.mp4", playsinline: "", preload: "" }
      }) : i("video", {
        ref: "videoGlobe",
        staticClass: "music__globe-video",
        style: t.globeYTranslate,
        attrs: { src: "/static/videos/music/globe-mobile.mp4", playsinline: "", preload: "" }
      })]), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-left-col-1" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("AUST")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("RALIA")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [i("span", { staticClass: "glyph" }, [t._v("î¤‹")]), t._v(" NEW")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [t._v("ZEA")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [t._v("LAND")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-nai-palm",
          title: "Nai Palm Interview",
          autoplay: "",
          poster: "https://img.youtube.com/vi/0qKuR9jyDiI/maxresdefault.jpg",
          type: "youtube",
          youtubeId: "0qKuR9jyDiI",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/naiPalm.jpg",
          title: "Nai Palm",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/sbv1fdtwybaelq5sg20171204233257/latest"
        }
      }, [i("a", [t._v("Nai Palm")])]), t._v("\n\t\t\t\t\t is lead singer of Hiatus Kaiyote â€“ and a solo artist in her own right â€“ who was born in Australia. Nai Palm explores her childhood in Melbourne and the surrounding countryside,\n\t\t\t\t\t the musical\n\n\t\t\t\t\t "), i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/3.meltipngpot_optimized.gif"
        }
      }, [i("a", [t._v("melting pot")])]), t._v("\n\t\t\t\t\t of her home city, and the importance of the sometimes overlooked musical traditions of the aboriginal communities.\n\t\t\t\t")], 1), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-australiaoceania-jordan-rakei%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-australiaoceania-jordan-rakei%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-right-col-1" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("KUW")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("AIT")]), i("span", { staticClass: "glyph" }, [t._v("î¤Œ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [t._v("THAI")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤")]), t._v(" "), i("span", { staticClass: "outline" }, [t._v("LAND")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-fatima",
          title: "Fatima Al Qadiri Interview",
          youtubeId: "VU8TH1h7fWE",
          autoplay: "",
          poster: "https://img.youtube.com/vi/VU8TH1h7fWE/maxresdefault.jpg",
          type: "youtube",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\t\tFatima Al Qadiri is an electronic music producer raised in Kuwait. Fatima explores her childhood in Kuwait: the music of her parents, the local folk traditions, the vastness of the Asian continent, and what she hopes people get from her music.\n\t\t\t\t")]), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-asia-maft-sai%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-asia-maft-sai%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-left-col-1" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("ACC")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("RA")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤Ž")]), i("span", { staticClass: "outline" }, [t._v(" NAI")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [t._v(" ROBI")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-juls",
          title: "DJ Juls Interview",
          youtubeId: "ISFa6dgEthw",
          autoplay: "",
          poster: "https://img.youtube.com/vi/ISFa6dgEthw/maxresdefault.jpg",
          type: "youtube",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\t\tDJ Juls is an\n\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/afrobeat.jpg",
          title: "Afrobeats",
          wordType: "5 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/sa1heuumnevzcjtft20171130153527/latest"
        }
      }, [i("a", [t._v("afrobeats")])]), t._v("\n\n\t\t\t\t\t producer who splits his time between Accra, Ghana and London, UK. He explores his childhood in Accra, how he experienced music growing up, how he got into music production and where he hopes to take his career, also reflecting on the role Africa as a continent has played in his art.\n\t\t\t\t")], 1), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-africa-dj-edu%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-africa-dj-edu%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-right-col-1 dither-trigger to-white" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("ENG")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("LAND ")]), i("span", { staticClass: "glyph" }, [t._v("î¤")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "outline" }, [t._v("BEL")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤‘")]), t._v(" "), i("span", { staticClass: "outline" }, [t._v("GIUM")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-nubya",
          title: "Nubya Garcia Interview",
          youtubeId: "GmqZvoN1R50",
          autoplay: "",
          poster: "/static/images/music/nubya-garcia-poster.png",
          type: "youtube",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\t\tNubya Garcia is a\n\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/4.Saxophonist_optimized.gif"
        }
      }, [i("a", [t._v("saxophonist")])]), t._v("\n\n\t\t\t\t\temerging as part of a new generation of\n\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/ukJazz.jpg",
          title: "UK Jazz",
          wordType: "4 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/smwdsm3vvtyojchi120171130153339/latest"
        }
      }, [i("a", [t._v("London jazz")])]), t._v("\n\n\t\t\t\t\tmusicians. Nubya explores her childhood in Camden, London, and how club culture and the diversity of the city itself shaped her music.\n\t\t\t\t")], 1), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-europe-lefto%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-europe-lefto%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-left-col-1" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("VENEZ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("UELA")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("â†“")]), i("span", { staticClass: "outline" }, [t._v("LIMA")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-luzmira",
          title: "Luzmira Zerpa Interview",
          youtubeId: "bDKHNYAMONI",
          autoplay: "",
          poster: "https://img.youtube.com/vi/bDKHNYAMONI/maxresdefault.jpg",
          type: "youtube",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\t\tLuzmira Zerpa â€“ lead singer of Family Atlantica â€“ was raised in the mountains of\n\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/venezuelanMusic.jpg",
          title: "Venezuelan Music",
          wordType: "4 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/s5zkj5axeo47jssyt20171130153441/latest"
        }
      }, [i("a", [t._v("Venezuela")]), t._v(".\n\t\t\t\t\t")]), t._v("\n\n\t\t\t\t\t Luzmira explores the local musical traditions of her childhood and the rich variety of musical influences that are found within Venezuela and elsewhere in South America.\n\t\t\t\t")], 1), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-south-america-dengue-dengue-dengue%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-south-america-dengue-dengue-dengue%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("triptych", { staticClass: "section-item full-width section-triptych__music marg-right-col-1" }, [i("introduction", {
        staticClass: "section-triptych__bg-decorator heading--xl",
        attrs: { slot: "triptych__bg-decorator" },
        slot: "triptych__bg-decorator"
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("UNITED")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("STATES")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", {}, [t._v("â†‘")]), i("span", [t._v("OF")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("AME")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("RICA")])])])]), t._v(" "), i("gr-video-player", {
        staticClass: "section-triptych__item-1",
        attrs: {
          slot: "triptych-item-1",
          id: "music-christian-scott",
          title: "Christian Scott Interview",
          youtubeId: "bD5r1eSckQM",
          autoplay: "",
          poster: "https://img.youtube.com/vi/bD5r1eSckQM/maxresdefault.jpg",
          type: "youtube",
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\t\tChristian explores his childhood in New Orleans, Louisiana â€“ the birthplace of jazz â€“ looking at the unique confluence of cultures found there, the historical events that shaped the city, whilst also outlining his mission to bring people closer together through music.\n\t\t\t\t")]), t._v(" "), i("div", {
        staticClass: "section-triptych__item-3 mixcloud__embed",
        attrs: { slot: "triptych-item-3" },
        slot: "triptych-item-3"
      }, [t.isGreaterThanTablet ? i("div", { staticClass: "mixcloud__large" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "120",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-north-america-dj-soul-sister%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })]) : i("div", { staticClass: "mixcloud__small" }, [i("iframe", {
        attrs: {
          width: "100%",
          height: "60",
          src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2Fworldwidefm%2Fwetransfer-golden-record-north-america-dj-soul-sister%2F" + t.mixcloudTheme,
          frameborder: "0"
        }
      })])])], 1), t._v(" "), i("div", { staticClass: "section-item full-width-extended section-contributor__contributor-wrapper" }, [i("contributor", {
        staticClass: "right section-item col-8 marg-left-col-1 sounds_contributor light__theme",
        attrs: {
          image: "/static/images/contributors/gilles-avatar.jpg",
          name: "Gilles Peterson",
          description: "A DJ, record label owner, producer, and record collector. His global radio platform, Worldwide FM, now in its second year, explores and ties together the shape-shifting diversity of global music."
        }
      })], 1)], 1)], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", {
        staticClass: "accordion-item__wrapper",
        class: { open: t.isOpen, "cursor--read": !t.isOpen }
      }, [i("div", {
        ref: "title",
        staticClass: "accordion-item__title heading--l",
        class: { "cursor--close--black": t.isOpen },
        domProps: { innerHTML: t._s(t.extendedTitle) },
        on: { click: t.onClickAccordion }
      }), t._v(" "), i("div", { staticClass: "accordion-item__progress-bar-wrapper" }, [i("span", { staticClass: "accordion-item__progress-bar-overlay" }), t._v(" "), i("span", {
        staticClass: "accordion-item__progress-bar top",
        style: { transform: "scaleX(" + t.accordionItemTopScale + ")" }
      }), t._v(" "), i("span", {
        staticClass: "accordion-item__progress-bar right",
        style: { transform: "scaleY(" + t.accordionItemRightScale + ")" }
      }), t._v(" "), i("span", {
        staticClass: "accordion-item__progress-bar bottom",
        style: { transform: "scaleX(" + t.accordionItemBottomScale + ")" }
      }), t._v(" "), i("span", {
        staticClass: "accordion-item__progress-bar left",
        style: { transform: "scaleY(" + t.accordionItemLeftScale + ")" }
      })]), t._v(" "), i("div", { staticClass: "accordion-item__text" }, [t._t("default")], 2), t._v(" "), i("button", {
        staticClass: "accordion-item__close-btn cursor--close--black",
        on: { click: t.onClickAccordion }
      })])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      return (t._self._c || e)("div", { staticClass: "section-diptych" }, [t._t("diptych-item-1"), t._v(" "), t._t("diptych-item-2")], 2)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { class: t.columnClass }, [i("ul", t._l(t.contributors, function(e) {
        return i("li", [e.annotation ? i("p", { staticClass: "contributor-column__title" }, [i("annotation", t._b({}, "annotation", e.annotation, !1), [i("a", [t._v(t._s(e.name))])])], 1) : i("p", { staticClass: "contributor-column__title" }, [t._v("\n\t\t\t\t" + t._s(e.name) + "\n\t\t\t")]), t._v(" "), i("p", [t._v(t._s(e.title))])])
      }))])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      t._self._c
      return t._m(0)
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "rotate-phone" }, [i("p", [t._v("\n\t\tPlease rotate your device for an optimum viewing experience.\n\t")]), t._v(" "), i("p", { staticClass: "glyph" }, [t._v("\n\t\tî¤ž\n\t")])])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "section-contributor styleguide_contributor light__theme" }, [t._m(0), t._v(" "), i("img", {
        staticClass: "section-contributor__picture",
        attrs: { src: t.image, alt: "" }
      }), t._v(" "), i("h4", { staticClass: "section-contributor__name heading--s" }, [t._v("\n\t\t" + t._s(t.name) + "\n\t")]), t._v(" "), i("p", { staticClass: "section-contributor__description" }, [t._v("\n\t\t" + t._s(t.description) + "\n\t\t"), t._t("default")], 2)])
    }, staticRenderFns: [function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "section-contributor__header" }, [i("em", [t._v("contributor")])])
    }]
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--greetings" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/2.Polite_optimized.gif"
        }
      }, [i("a", [t._v("Polite")])])], 1), i("span", [t._v("words ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("or signs of ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("welcome. ")]), t._v(" "), i("span", { staticClass: "glyph" }, [t._v("î¤ˆ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("An")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v(" Expression")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of")]), i("span", [t._v("goodwill,")]), i("span", [t._v("an")])]), t._v(" "), i("span", { staticClass: "introduction-line__item mobile-hidden" }, [i("span", [t._v(" embrace")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("e")]), i("span", [t._v("m")]), i("span", [t._v("b")]), i("span", [t._v("r")]), i("span", [t._v("a")]), i("span", [t._v("c")]), i("span", [t._v("e")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("showing")]), t._v(" "), i("span", [t._v(" we")]), t._v(" "), i("span", [t._v(" mean")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤‰")]), i("span", [t._v(" no ")]), i("strong", [t._v("harm.")])])])]), t._v(" "), i("diptych", { staticClass: "section-item three-quarter" }, [i("img", {
        staticClass: "section-diptych__item-1",
        attrs: { slot: "diptych-item-1", src: "/static/images/greetings/greetings-diptych.jpg" },
        slot: "diptych-item-1"
      }), t._v(" "), i("div", {
        staticClass: "section-diptych__item-2",
        attrs: { slot: "diptych-item-2" },
        slot: "diptych-item-2"
      }, [i("p", {}, [t._v("\n\t\t\t\t\tWanda Diaz Merced, a blind astronomer, maps the sky via sound. Listen with her as she explores different ways of approaching greetings across the universe.\n\t\t\t\t")])])]), t._v(" "), i("separator", { staticClass: "section-item three-quarter center greetings__video-separator--top" }), t._v(" "), i("gr-video-player", {
        ref: "wandaVideo",
        staticClass: "section-item full-video",
        attrs: {
          id: "wanda-monologue",
          title: "Wanda Greetings",
          mobileSrc: "/static/videos/greetings/greetings-main-video-mobile.mp4",
          desktopSrc: "/static/videos/greetings/greetings-main-video-desktop.mp4",
          posterMobile: "/static/images/greetings/greetings-main-video-poster-mobile.jpg",
          posterDesktop: "/static/images/greetings/greetings-main-video-poster-desktop.png",
          playPauseButton: t.isTouch,
          bigPlayPauseButton: t.isTouch,
          autoplay: !t.isTouch,
          customCursor: ""
        }
      }), t._v(" "), i("separator", { staticClass: "section-item three-quarter top greetings__video-separator--bottom" }), t._v(" "), i("triptych", { staticClass: "section-item half-width left section-triptych__greetings" }, [i("gr-video-player", {
        staticClass: "section-triptych__item-1 cursor--select ignore-theme",
        attrs: {
          slot: "triptych-item-1",
          id: "star-sound-1",
          title: "Star 1",
          progressClick: "",
          mobileSrc: "/static/videos/greetings/StarSound01.mp4",
          desktopSrc: "/static/videos/greetings/StarSound01.mp4",
          posterMobile: "/static/images/greetings/Star1poster.png",
          posterDesktop: "/static/images/greetings/Star1poster.png",
          playPauseButton: !0,
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\tSolar flares are giant explosions on the sun, and X-class flares are the largest among them. Listen here to how sound fluctuates as an increase of energy from a solar magnetic storm is measured by a constellation of satellites orbiting earth at different distances from the ground.\n\t\t\t")]), t._v(" "), i("img", {
        staticClass: "section-triptych__item-3 section-triptych__image",
        attrs: { slot: "triptych-item-3", src: "/static/images/greetings/star-1.jpg", alt: "" },
        slot: "triptych-item-3"
      })], 1), t._v(" "), i("triptych", { staticClass: "section-item half-width right section-triptych__greetings" }, [i("gr-video-player", {
        staticClass: "section-triptych__item-1 cursor--select ignore-theme",
        attrs: {
          slot: "triptych-item-1",
          id: "star-sound-2",
          title: "Star 2",
          progressClick: "",
          mobileSrc: "/static/videos/greetings/StarSound02.mp4",
          desktopSrc: "/static/videos/greetings/StarSound02.mp4",
          posterMobile: "/static/images/greetings/Star2poster.png",
          posterDesktop: "/static/images/greetings/Star2poster.png",
          playPauseButton: !0,
          customCursor: ""
        },
        slot: "triptych-item-1"
      }), t._v(" "), i("p", {
        staticClass: "section-triptych__item-2 section-triptych__text",
        attrs: { slot: "triptych-item-2" },
        slot: "triptych-item-2"
      }, [t._v("\n\t\t\t\tGamma Cassiopeia is the star at center of the â€œWâ€ shape in the north constellation of Cassiopeia, and sighted people can see it with the naked eye. Listen here to how its brilliance varies over time, with changes in sound indicating changes in temperature.\n\t\t\t")]), t._v(" "), i("img", {
        staticClass: "section-triptych__item-3 section-triptych__image",
        attrs: { slot: "triptych-item-3", src: "/static/images/greetings/star-2.jpg", alt: "" },
        slot: "triptych-item-3"
      })], 1), t._v(" "), t.isIe ? t._e() : i("slide-in-el", {
        staticClass: "section-item full-width section-greetings__starchat-wrapper",
        class: { fullscreen: t.introCurrentStep >= 1 },
        attrs: { id: "starchat-intro" }
      }, [i("div", {
        ref: "starchatEl",
        class: { "section-greetings__starchat": !0, "cursor--start": 0 === t.introCurrentStep }
      }, [t.introCurrentStep > 3 ? i("button", {
        staticClass: "section-greetings__starchat__back-arrow-btn cursor--prev ignore-theme",
        on: { click: t.onBackArrow }
      }) : t._e(), t._v(" "), t.introCurrentStep > 3 && !t.isGreaterThanTablet ? i("h4", { staticClass: "section-greetings__starchat__title heading--s" }, [t._v(t._s(t.stars[t.currentSlideIndex].name))]) : t._e(), t._v(" "), t.introCurrentStep > 3 && t.isGreaterThanTablet ? i("h4", { staticClass: "section-greetings__starchat__title heading--s" }, [t._v("YOUR chat with " + t._s(t.stars[t.currentSlideIndex].name))]) : t._e(), t._v(" "), t.introCurrentStep > 0 ? i("button", {
        staticClass: "section-greetings__starchat__close-btn cursor--close ignore-theme",
        on: { click: t.onCloseStarchat }
      }) : t._e(), t._v(" "), 0 === t.introCurrentStep ? i("div", {
        staticClass: "section-greetings__intro-wrapper cursor--start ignore-theme",
        on: { click: t.starchatIntroClick }
      }, [i("introduction", {
        staticClass: "section-item three-quarter heading--m",
        attrs: { killTransition: !0 }
      }, [i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [t._v("\n\t\t\t\t\t\t\t\""), i("strong", [t._v("There")]), i("span", [t._v(" are")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" greetings")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("from the ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [i("strong", [t._v("stars")]), t._v(" to us,")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤")]), i("span", [t._v(" and from us")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("to ")]), i("span", [i("strong", [t._v("them")]), t._v("\"")]), i("span", { staticClass: "glyph" }, [t._v("î¤‘")])])]), t._v(" "), i("button", { staticClass: "section-greetings__starchat__fullscreen-btn cursor--start ignore-theme" })])], 1) : t._e(), t._v(" "), 1 === t.introCurrentStep ? i("div", {
        staticClass: "section-greetings__intro-wrapper cursor--start ignore-theme",
        on: { click: t.starchatIntroClick }
      }, [i("introduction", {
        staticClass: "section-item three-quarter heading--m",
        attrs: { killTransition: !0 }
      }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [i("strong", [t._v("Listen")])])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("and respond ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤„ ")]), i("span", [i("strong", [t._v("to ")])])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [i("strong", [t._v("S")])]), t._v(" "), i("span", [i("strong", [t._v("T")])]), t._v(" "), i("span", [i("strong", [t._v("A")])]), t._v(" "), i("span", [i("strong", [t._v("R")])]), t._v(" "), i("span", [i("strong", [t._v("S")])])])]), t._v(" "), i("button", { staticClass: "section-greetings__starchat__next-btn" })])], 1) : t._e(), t._v(" "), i("div", {
        staticClass: "tiny-slider__wrapper",
        class: { visible: t.introCurrentStep >= 2, offset: t.introCurrentStep >= 3 }
      }, [i("button", {
        staticClass: "tiny-slider__prev-btn cursor--prev ignore-theme",
        on: { click: t.onSliderPrev }
      }), t._v(" "), i("ul", { ref: "tiny-slider", staticClass: "tiny-slider" }, t._l(t.stars, function(e, s) {
        return i("li", { staticClass: "tiny-slider__item-wrapper" }, [i("div", { staticClass: "tiny-slider__item" }, [i("div", {
          staticClass: "star-image",
          class: { hidden: s === t.currentSlideIndex && t.introCurrentStep >= 3, "cursor--select ignore-theme": !0 },
          style: { "background-image": "url(" + e.image + ")" },
          attrs: { alt: e.name }
        }), t._v(" "), i("h4", { staticClass: "heading--s" }, [t._v(t._s(e.name))]), t._v(" "), i("p", [t._v(t._s(e.desc))]), t._v(" "), i("p", [t._v(t._s(e.info))])])])
      })), t._v(" "), i("button", {
        staticClass: "tiny-slider__next-btn cursor--next ignore-theme",
        on: { click: t.onSliderNext }
      })]), t._v(" "), t.introCurrentStep >= 1 ? i("div", {}, [i("div", {
        staticClass: "starchat-playground__wrapper",
        class: { active: t.introCurrentStep >= 3 }
      }, [i("div", {
        ref: "starchat-selected-star-img",
        staticClass: "star-image__selected",
        class: { selected: 4 === t.introCurrentStep },
        style: t.playgroundStarStyle,
        attrs: { alt: t.stars[t.currentSlideIndex].name }
      })]), t._v(" "), i("star-chat", {
        ref: "starchat",
        class: { active: t.introCurrentStep >= 3 },
        attrs: { starsData: t.stars }
      }), t._v(" "), t.introCurrentStep >= 4 ? i("button", {
        ref: "shareButton",
        staticClass: "section-greetings__starchat__share-btn cursor--share ignore-theme",
        attrs: { "data-clipboard-text": t.shareLink }
      }) : t._e(), t._v(" "), t.introCurrentStep >= 4 ? i("p", { staticClass: "section-greetings__starchat__share-prompt" }, [t._v(t._s(t.shareCopyPrompt))]) : t._e()], 1) : t._e()])]), t._v(" "), i("div", { staticClass: "section-item full-width__extended section-contributor__contributor-wrapper dither-trigger to-white" }, [i("contributor", {
        staticClass: "right section-item col-6 greetings_contributor light__theme",
        attrs: { image: "/static/images/contributors/wanda-avatar.jpg", name: "Wanda Diaz-Merced" }
      }, [t._v("\n\t\t\t\tAn astronomer who listens to stars. After losing her sight in adulthood, she developed\n\n\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/sonification.jpg",
          title: "Sonification",
          wordType: "7 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/sdqbmomo1qz5cpgg720171206003436/latest"
        }
      }, [i("a", [t._v("sonification")])]), t._v("\n\n\t\t\t\tâ€” a way to turn large sets of data into audible sound.\n\t\t\t")], 1), t._v(" "), i("contributor", {
        staticClass: "left section-item col-6 greetings_contributor light__theme",
        attrs: {
          image: "/static/images/contributors/rebecca-avatar.jpg",
          name: "Rebecca Roth",
          description: "Imaging Coordinator at NASA. Passionate about sharing the images NASA captures every day, she started the NASA Goddard Instagram account to bring the public into the fold."
        }
      })], 1)], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--not-found" }, [i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("\"Houston...")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-lin__item" }, [i("span", [t._v("we have")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("a ")]), t._v(" "), i("strong", [t._v("problem\"")])])])]), t._v(" "), i("p", { staticClass: "section-item three-quarter" }, [i("router-link", { attrs: { to: "/" } }, [t._v("\n\t\t\t\tBack to earth\n\t\t\t")])], 1), t._v(" "), i("img", { attrs: { src: "/static/images/404.png" } })], 1)])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "bg-dots__wrapper" }, [i("div", {
        staticClass: "bg-dots__item bg-dots__item-1",
        class: "bg-dots__order-" + t.dotsOrder[0]
      }), t._v(" "), i("div", {
        staticClass: "bg-dots__item bg-dots__item-2",
        class: "bg-dots__order-" + t.dotsOrder[1]
      }), t._v(" "), i("div", {
        staticClass: "bg-dots__item bg-dots__item-3",
        class: "bg-dots__order-" + t.dotsOrder[2]
      }), t._v(" "), i("div", {
        staticClass: "bg-dots__item bg-dots__item-4",
        class: "bg-dots__order-" + t.dotsOrder[3]
      }), t._v(" "), i("div", {
        staticClass: "bg-dots__item bg-dots__item-5",
        class: "bg-dots__order-" + t.dotsOrder[4]
      })])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      return (t._self._c || e)("div", { staticClass: "section-triptych" }, [t._t("triptych__bg-decorator"), t._v(" "), t._t("triptych-item-1"), t._v(" "), t._t("triptych-item-2"), t._v(" "), t._t("triptych-item-3")], 2)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "loader section-item full-width" }, [i("div", { staticClass: "wetransfer-logo" }), t._v(" "), i("div", { staticClass: "loader__intro-wrapper" }, [i("div", { staticClass: "loader__lockup-wrapper" }, [i("div", { staticClass: "loader__lockup" }, [i("svg", {
        staticStyle: { "enable-background": "new 0 0 801.1 1068" },
        attrs: {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 801.1 1068",
          "xml:space": "preserve"
        }
      }, [i("g", [i("circle", {
        staticClass: "st0",
        attrs: { cx: "12.7", cy: "652.5", r: "12.7" }
      }), t._v(" "), i("circle", {
        staticClass: "st0",
        attrs: { cx: "788.3", cy: "652.5", r: "12.7" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "60.8,403.9 91.1,450.9 35.3,446.6 27.7,459.3 77,488.8 81.5,481.2 38.2,455.3 94.4,459.6 100.3,449.8\n\t\t\t\t\t\t69.6,402.1 113.2,428.2 117.7,420.7 68.4,391.2 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "207.3,338.8 202.5,332.7 162.8,363.8 151.7,349.6 186.9,322.1 182.1,316 146.9,343.5 136.9,330.7\n\t\t\t\t\t\t176,300.2 171.2,294.1 125.3,330.1 160.7,375.3 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M269.9,280.8l13.8-3c9.4-2.1,12.8-0.4,14.2,3.6c1.3,3.8-1.1,9.6-15.5,14.6l-1.6,0.5c-14.4,5-20.8,1.3-23.3-4.1\n\t\t\t\t\t\tl-9.3,3.3c4.2,11.1,15.4,15.1,36,7.9c18.5-6.5,25.4-15.6,21.9-25.6c-3.2-9.1-11.2-11.7-25.3-8.6l-13.4,2.9c-10.7,2.3-13.8,1-15.2-3\n\t\t\t\t\t\tc-1.5-4.3,2.3-9.8,14.2-13.9l1.5-0.5c12.1-4.2,19.6-2,22.5,3.1l9.3-3.3c-4.5-10-16.3-13.4-35-6.9c-18.7,6.5-23.6,16.7-20.8,24.8\n\t\t\t\t\t\tC247.3,282,254.2,284.2,269.9,280.8z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M426.1,266.5c-0.1-9.6-6.9-14.7-21.2-16.3l-13.6-1.5c-10.8-1.2-13.4-3.5-13.5-7.7c0-4.5,5.3-8.5,17.9-8.6\n\t\t\t\t\t\tl1.6,0c12.8-0.1,19.3,4.4,20.3,10.1l9.8-0.1c-1.1-10.9-11.2-17.9-31-17.7c-19.8,0.2-27.7,8.3-27.7,16.8\n\t\t\t\t\t\tc0.1,10.1,5.9,14.4,21.9,16.2l14.1,1.6c9.6,1,12.3,3.7,12.3,7.9c0,4-4.1,8.7-19.4,8.9l-1.6,0c-15.3,0.2-20.1-5.5-20.7-11.4\n\t\t\t\t\t\tl-9.8,0.1c0.5,11.9,9.7,19.2,31.6,19C416.8,283.5,426.2,277.1,426.1,266.5z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M497.7,280.7l37.3,12.4l3,16.5l9.7,3.2l-12.2-64.6l-10.7-3.6L476.2,289l9.3,3.1L497.7,280.7z M527.7,252.9\n\t\t\t\t\t\tl5.8,31.6l-29.3-9.7L527.7,252.9z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M619.1,359.3c12.5,9.8,21.4,10.6,26,9.8l-4.6,5.9l6.9,5.4l13.9-17.7c2.8-3.6,2.4-7-1.2-9.8l-22.3-17.5\n\t\t\t\t\t\tl-4.8,6.1l20.9,16.4l-0.9,1.2c-4.6,5.8-15.1,5.2-28.5-5.3l-1.3-1c-13.4-10.5-16.8-23.2-8.2-34.1c8.6-11,22.3-10.2,35.4,0l1.3,1\n\t\t\t\t\t\tc13.3,10.4,12.9,19.4,10.7,23.6l7.7,6.1c5.4-9.6,2-23.4-14.3-36.2c-18.5-14.5-37.2-13.6-47.9,0\n\t\t\t\t\t\tC597.4,326.7,600.1,344.5,619.1,359.3z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "686.1,425.9 717.4,476.2 724,472.1 697.3,429.3 712.7,419.7 736.3,457.6 742.8,453.6 719.2,415.7\n\t\t\t\t\t\t733,407.1 759.2,449.1 765.8,445.1 734.9,395.5 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "126.6,967.8 174,1003.2 178.6,997 138.3,966.9 149.1,952.4 184.8,979.1 189.4,973 153.7,946.2\n\t\t\t\t\t\t163.4,933.2 203.1,962.9 207.7,956.7 161,921.8 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M280.7,990.3l-48.4,44.5l9.3,3.1l12.3-11.4l37.3,12.4l3,16.5l9.7,3.2l-12.3-64.6L280.7,990.3z M260.2,1020.4\n\t\t\t\t\t\tl23.5-21.9l5.8,31.6L260.2,1020.4z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M432.3,1026.1c0-9.2-7.9-15.8-19.7-15.8l-39.4,0.2l0.3,57.5l8.8,0l-0.1-22.9l33.9-0.1c4.4,0,6.2,1.3,6.2,5.7\n\t\t\t\t\t\tl0.1,17.2l8.8,0l-0.1-19.1c0-5.7-2.4-8.7-8.7-8.7H422C427.3,1038.3,432.3,1033.3,432.3,1026.1z M411.2,1037.2l-29.1,0.1l-0.1-19.1\n\t\t\t\t\t\tl29.1-0.1c7.7,0,12.2,3.3,12.3,9.5C423.4,1033.3,418.9,1037.2,411.2,1037.2z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "543.9,982.6 482.4,1002.5 484.8,1009.9 511.4,1001.3 526.7,1048.6 535.1,1045.9 519.7,998.6\n\t\t\t\t\t\t546.2,989.9 \t" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "635.6,925.2 650.3,945 613,972.7 598.3,952.9 591.3,958.2 625.5,1004.3 632.5,999.1 617.6,978.9\n\t\t\t\t\t\t654.9,951.2 669.9,971.4 676.9,966.1 642.7,920 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M382.1,42.8h39.3l8,14.7h10.2L407.6,0h-11.3l-32,57.4h9.8L382.1,42.8z M401.8,6.9L417.2,35h-30.9L401.8,6.9z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "242.7,637.6 242.7,629.9 186,629.9 186,687.4 194.7,687.4 194.7,663.3 237.3,663.3 237.3,655.6\n\t\t\t\t\t\t194.7,655.6 194.7,637.6 \t" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M353.9,645.7c0-9.2-7.9-15.8-19.6-15.8h-39.4v57.4h8.8v-22.9h33.9c4.4,0,6.2,1.3,6.2,5.7v17.2h8.8v-19.1\n\t\t\t\t\t\tc0-5.7-2.4-8.7-8.6-8.7h-0.3C348.8,657.9,353.9,653,353.9,645.7z M332.7,656.7h-29v-19.1h29c7.7,0,12.2,3.4,12.2,9.5\n\t\t\t\t\t\tC344.9,652.9,340.4,656.7,332.7,656.7z" }
      }), t._v(" "), i("path", {
        staticClass: "st0",
        attrs: { d: "M444,629.1c-21.1,0-37.7,10.5-37.7,29.5c0,19,16.7,29.5,37.7,29.5c21,0,37.7-10.5,37.7-29.5\n\t\t\t\t\t\tC481.7,639.6,465,629.1,444,629.1z M444.8,680.5h-1.6c-15.1,0-28-7.5-28-21.8c0-14.4,12.9-21.8,28-21.8h1.6c15.1,0,28,7.5,28,21.8\n\t\t\t\t\t\tC472.8,673,459.9,680.5,444.8,680.5z" }
      }), t._v(" "), i("polygon", {
        staticClass: "st0",
        attrs: { points: "606.4,687.4 615.2,687.4 615.2,629.9 600.4,629.9 575.6,680 550.6,629.9 535.8,629.9 535.8,687.4\n\t\t\t\t\t\t544.6,687.4 544.6,636.9 569.8,687.4 581.2,687.4 606.4,636.6 \t" }
      })])])])]), t._v(" "), i("div", { staticClass: "loader__intro-text" }, [i("p", { staticClass: "loader__intro-text-item" }, [t._v("A Message from Earth is a celebration of the Voyager Golden Record in its 40th year.")]), t._v(" "), i("p", { staticClass: "loader__intro-text-item" }, [t._v("It was a gift sent from our world into deep space for whatever might find it.")]), t._v(" "), i("p", { staticClass: "loader__intro-text-item" }, [i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/0.dazzled_optimized.gif"
        }
      }, [i("a", [t._v("Dazzled")])]), t._v("\n\t\t\t\tby that audacity, we present new ideas from  40 cultural luminaries inspired by the original.\n\t\t\t\tTogether, these amazing minds offer a collage of the contemporary human experience.\n\t\t\t")], 1), t._v(" "), i("p", { staticClass: "loader__intro-text-item" }, [t._v("We hope it inspires selfless acts of cultural diplomacy in the years ahead.")])]), t._v(" "), i("div", { staticClass: "video-globe-loader" }, [t.isGreaterThanTablet ? i("video", {
        ref: "videoGlobe",
        staticClass: "music__globe-video",
        attrs: { src: "/static/videos/music/globe.mp4", playsinline: "", preload: "", autoplay: "" }
      }) : i("video", {
        ref: "videoGlobe",
        staticClass: "music__globe-video",
        attrs: { src: "/static/videos/music/globe-mobile.mp4", playsinline: "", preload: "", autoplay: "" }
      })])]), t._v(" "), i("div", {
        staticClass: "loader__click-to-scroll",
        on: { click: t.onClickToScroll }
      }, [i("separator", {
        staticClass: "loader__vertical-separator vertical cursor--next",
        attrs: { killTransition: !0 }
      })], 1)])
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement
      return (t._self._c || e)("h2", { staticClass: "section-introduction" }, [t._t("default")], 2)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "container__wrapper" }, [i("div", { staticClass: "container container--sounds" }, [i("section-title", {
        ref: "sectionTitle",
        staticClass: "section-item heading--xxl",
        attrs: { title: t.title, index: t.index, titleVideoSrc: t.titleVideoSrc, titlePosterSrc: t.titlePosterSrc }
      }), t._v(" "), i("introduction", { staticClass: "section-item three-quarter heading--m" }, [i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("Vibrations")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v(" traveling")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤”")]), t._v(" "), i("span", [t._v(" through ")]), t._v(" "), i("span", [t._v(" space;")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("heard")]), i("span", [t._v(" when ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("reaching")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper justify" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("a ")]), i("span", [t._v("person's ")]), t._v(" "), i("span", { staticClass: "contains-annotation" }, [i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/ear.jpg",
          title: "Ear",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/srqdbkczcpxbynd1z20171206003449/latest"
        }
      }, [i("a", [t._v("ear.")])])], 1)])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("A ")]), i("span", [t._v("primary ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("element")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper left" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("of ")]), i("span", [t._v("communication, ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper center" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("a ")]), i("span", [t._v("connection ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("span", [t._v("to ")]), i("span", [t._v("our ")]), i("span", [t._v("world ")])])]), t._v(" "), i("span", { staticClass: "introduction-line__wrapper right" }, [i("span", { staticClass: "introduction-line__item" }, [i("span", { staticClass: "glyph" }, [t._v("î¤„ ")]), i("span", [t._v("and ")]), i("span", [t._v("to ")]), i("span", [t._v(" each ")])]), t._v(" "), i("span", { staticClass: "introduction-line__item" }, [i("strong", [t._v("other.")])])])]), t._v(" "), i("separator", { staticClass: "section-item three-quarter vertical greetings__video-separator--top" }), t._v(" "), i("diptych", { staticClass: "section-item three-quarter" }, [i("img", {
        staticClass: "section-diptych__item-1",
        attrs: { slot: "diptych-item-1", src: "/static/images/sounds/sounds-diptych.jpg" },
        slot: "diptych-item-1"
      }), t._v(" "), i("div", {
        staticClass: "section-diptych__item-2",
        attrs: { slot: "diptych-item-2" },
        slot: "diptych-item-2"
      }, [i("p", [t._v("\n\t\t\t\t\tExperimental synth band  "), i("pre", [t._v("S U R V I V E")]), t._v("  creates music for a modern earth. As a unique member of humankind, explore and reimagine sounds from their catalog.\n\t\t\t\t")])])]), t._v(" "), i("div", { staticClass: "section-item full-width soundboard-introduction" }, [i("gr-video-player", {
        staticClass: "cursor--select",
        attrs: {
          id: "survive-soundscape",
          progressClick: "",
          mobileSrc: t.mobileVideoSrc,
          desktopSrc: t.videoSrc,
          posterMobile: t.mobilePoster,
          posterDesktop: t.poster,
          playPauseButton: !0,
          title: "Survive Soundscape"
        }
      }), t._v(" "), i("div", { staticClass: "text-box" }, [i("p", [t._v("\n\t\t\t\t\tS U R V I V E created this catalog of sounds to represent what the human imagination perceives as distant and otherworldly.\n\t\t\t\t\tThe sounds were created using digital and analog synthesis as well as a variety of digital signal and audio processing\n\n\t\t\t\t\t"), i("annotation", {
        attrs: {
          type: "image",
          image: "/static/images/annotations/gif/5.algorithm_optimized.gif"
        }
      }, [i("a", [t._v("algorithms")]), t._v(".\n\t\t\t\t\t")])], 1)])], 1), t._v(" "), t.isIe ? t._e() : i("div", { staticClass: "section-item full-width" }, [i("div", {
        class: t.soundboardContainerCls,
        attrs: { id: t.fullscreenContainer }
      }, [t.soundboardHidden ? i("soundboard-landing", { attrs: { showActionButton: t.showActionButton } }) : i("soundboard")], 1)]), t._v(" "), i("div", { staticClass: "section-item full-width-extended section-contributor__contributor-wrapper dither-trigger to-white" }, [i("contributor", {
        staticClass: "right section-item col-8 marg-left-col-1 sounds_contributor light__theme",
        attrs: { image: t.surviveImage, name: "Survive" }
      }, [t._v("\n\t\t\t\t4-piece instrumental band S U R V I V E creates multi-layered synth compositions in the tradition of electronic music\n\t\t\t\t"), i("annotation", {
        attrs: {
          type: "board",
          image: "/static/images/annotations/horrorScore.jpg",
          title: "Horror Score",
          wordType: "6 Items",
          link: "https://thegoldenrecord.wetransfer.com/downloads/s69i5q4vg2m7z3tae20171204233158/latest"
        }
      }, [i("a", [t._v("progenitors.")])]), t._v("\n\n\t\t\t\tDetailed sound design techniques give their songs a rawness and depth.\n\t\t\t")], 1)], 1)], 1), t._v(" "), i("section-title", {
        staticClass: "section-item heading--xxl next-page__cta",
        attrs: {
          title: t.nextPageTitle,
          ctaUrl: t.nextPageUrl,
          titleVideoSrc: t.nextTitleVideoSrc,
          titlePosterSrc: t.nextTitlePosterSrc
        }
      })], 1)
    }, staticRenderFns: []
  }
}, function(t, e) {
  t.exports = {
    render: function() {
      var t = this, e = t.$createElement, i = t._self._c || e
      return i("div", { staticClass: "carousel--wrapper" }, [i("div", {
        ref: "carousel",
        class: {
          carousel: !0,
          "ignore-theme": !0,
          "cursor--prev": t.slideDirection < 0,
          "cursor--next": t.slideDirection > 0
        },
        on: { click: t.changeSlide, mousemove: t.updateSlideDirection }
      }, t._l(t.images, function(e, s) {
        return i("div", { class: t.itemClass(s) }, [i("img", { staticClass: "carousel__image", attrs: { src: e } })])
      })), t._v(" "), i("div", { staticClass: "carousel__caption-container" }, [t._t("default"), t._v(" "), i("p")], 2), t._v(" "), i("div", { staticClass: "carousel__dots" }, t._l(t.images, function(e, s) {
        return i("div", { class: t.dotClass(s) })
      }))])
    }, staticRenderFns: []
  }
}, , , , , , , , , , , , , , , , , , , , , function(t, e) {
}, , function(t, e, i) {
  "use strict"
  Object.defineProperty(e, "__esModule", { value: !0 })
  var s = i(139), n = (i.n(s), i(138)), a = (i.n(n), i(14), i(135))
  a.a.$mount("#app")
}], [372])
//# sourceMappingURL=client.089ee750.js.map
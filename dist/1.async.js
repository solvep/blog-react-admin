(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    YmWs: function(e, t, r) {
      'use strict';
      var a = r('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a(r('d6i3')),
        u = a(r('k63P')),
        c = {
          namespace: 'error',
          state: { error: '', isloading: !1 },
          effects: {
            query: n.default.mark(function e(t, r) {
              var a, c, o;
              return n.default.wrap(function(e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.payload),
                        (c = r.call),
                        (o = r.put),
                        (e.next = 4),
                        c(u.default, a.code)
                      );
                    case 4:
                      return (e.next = 6), o({ type: 'trigger', payload: a.code });
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            trigger: function(e, t) {
              return { error: t.payload };
            },
          },
        };
      t.default = c;
    },
    k63P: function(e, t, r) {
      'use strict';
      var a = r('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = o);
      var n = a(r('d6i3')),
        u = a(r('1l/V')),
        c = a(r('t3Un'));
      function o(e) {
        return i.apply(this, arguments);
      }
      function i() {
        return (
          (i = (0, u.default)(
            n.default.mark(function e(t) {
              return n.default.wrap(function(e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, c.default)('/api/'.concat(t)));
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          i.apply(this, arguments)
        );
      }
    },
  },
]);

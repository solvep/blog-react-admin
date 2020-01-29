(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    BOD2: function(e, t, a) {
      e.exports = {
        container: 'antd-pro-layouts-user-layout-container',
        lang: 'antd-pro-layouts-user-layout-lang',
        content: 'antd-pro-layouts-user-layout-content',
        top: 'antd-pro-layouts-user-layout-top',
        header: 'antd-pro-layouts-user-layout-header',
        logo: 'antd-pro-layouts-user-layout-logo',
        title: 'antd-pro-layouts-user-layout-title',
        desc: 'antd-pro-layouts-user-layout-desc',
      };
    },
    jH8a: function(e, t, a) {
      'use strict';
      var l = a('tAuX'),
        u = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = u(a('2Taf')),
        n = u(a('vZ4D')),
        o = u(a('l4Ni')),
        d = u(a('ujKo')),
        s = u(a('MhPg'));
      a('Pwec');
      var f = u(a('CtXQ')),
        c = l(a('q1tI')),
        i = a('LLXN'),
        p = u(a('wY1l')),
        m = u(a('ggcP')),
        y = u(a('bfXr')),
        g = u(a('BOD2')),
        h = u(a('mxmt')),
        v = [
          { key: 'help', title: (0, i.formatMessage)({ id: 'layout.user.link.help' }), href: '' },
          {
            key: 'privacy',
            title: (0, i.formatMessage)({ id: 'layout.user.link.privacy' }),
            href: '',
          },
          { key: 'terms', title: (0, i.formatMessage)({ id: 'layout.user.link.terms' }), href: '' },
        ],
        E = c.default.createElement(
          c.Fragment,
          null,
          'Copyright ',
          c.default.createElement(f.default, { type: 'copyright' }),
          ' 2018 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1'
        ),
        k = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, o.default)(this, (0, d.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, s.default)(t, e),
            (0, n.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return c.default.createElement(
                    'div',
                    { className: g.default.container },
                    c.default.createElement(
                      'div',
                      { className: g.default.lang },
                      c.default.createElement(y.default, null)
                    ),
                    c.default.createElement(
                      'div',
                      { className: g.default.content },
                      c.default.createElement(
                        'div',
                        { className: g.default.top },
                        c.default.createElement(
                          'div',
                          { className: g.default.header },
                          c.default.createElement(
                            p.default,
                            { to: '/' },
                            c.default.createElement('img', {
                              alt: 'logo',
                              className: g.default.logo,
                              src: h.default,
                            }),
                            c.default.createElement(
                              'span',
                              { className: g.default.title },
                              'Ant Design'
                            )
                          )
                        ),
                        c.default.createElement(
                          'div',
                          { className: g.default.desc },
                          'Ant Design \u662f\u897f\u6e56\u533a\u6700\u5177\u5f71\u54cd\u529b\u7684 Web \u8bbe\u8ba1\u89c4\u8303'
                        )
                      ),
                      e
                    ),
                    c.default.createElement(m.default, { links: v, copyright: E })
                  );
                },
              },
            ]),
            t
          );
        })(c.default.PureComponent),
        N = k;
      t.default = N;
    },
  },
]);

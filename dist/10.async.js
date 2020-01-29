(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    't/hC': function(e, t, a) {
      'use strict';
      var l = a('g09b'),
        n = a('tAuX');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('14J3');
      var r = l(a('BMrR'));
      a('jCWc');
      var d = l(a('kPKH'));
      a('Mwp2');
      var u = l(a('VXEj'));
      a('Telt');
      var c,
        s,
        o = l(a('Tckk')),
        f = l(a('2Taf')),
        i = l(a('vZ4D')),
        p = l(a('l4Ni')),
        m = l(a('ujKo')),
        v = l(a('MhPg')),
        E = n(a('q1tI')),
        g = l(a('wd/R')),
        h = a('MuoO'),
        k = l(a('zHco')),
        w = l(a('wnz0')),
        C = ((c = (0, h.connect)(function(e) {
          var t = e.user,
            a = e.activities,
            l = e.loading;
          return {
            currentUser: t.currentUser,
            activities: a,
            currentUserLoading: l.effects['user/fetchCurrent'],
          };
        })),
        c(
          (s = (function(e) {
            function t() {
              return (
                (0, f.default)(this, t),
                (0, p.default)(this, (0, m.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, v.default)(t, e),
              (0, i.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'user/fetchCurrent' });
                  },
                },
                { key: 'componentWillUnmount', value: function() {} },
                {
                  key: 'renderActivities',
                  value: function() {
                    var e = this.props.activities.list;
                    return e.map(function(e) {
                      var t = e.template.split(/@\{([^{}]*)\}/gi).map(function(t) {
                        return e[t]
                          ? E.default.createElement(
                              'a',
                              { href: e[t].link, key: e[t].name },
                              e[t].name
                            )
                          : t;
                      });
                      return E.default.createElement(
                        u.default.Item,
                        { key: e.id },
                        E.default.createElement(u.default.Item.Meta, {
                          avatar: E.default.createElement(o.default, { src: e.user.avatar }),
                          title: E.default.createElement(
                            'span',
                            null,
                            E.default.createElement(
                              'a',
                              { className: w.default.username },
                              e.user.name
                            ),
                            '\xa0',
                            E.default.createElement('span', { className: w.default.event }, t)
                          ),
                          description: E.default.createElement(
                            'span',
                            { className: w.default.datetime, title: e.updatedAt },
                            (0, g.default)(e.updatedAt).fromNow()
                          ),
                        })
                      );
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.currentUser,
                      a = e.currentUserLoading,
                      l =
                        t && Object.keys(t).length
                          ? E.default.createElement(
                              'div',
                              { className: w.default.pageHeaderContent },
                              E.default.createElement(
                                'div',
                                { className: w.default.avatar },
                                E.default.createElement(o.default, { size: 'large', src: t.avatar })
                              ),
                              E.default.createElement(
                                'div',
                                { className: w.default.content },
                                E.default.createElement(
                                  'div',
                                  { className: w.default.contentTitle },
                                  '\u65e9\u5b89\uff0c',
                                  t.name,
                                  '\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01'
                                ),
                                E.default.createElement('div', null, t.title, ' |', t.group)
                              )
                            )
                          : null,
                      n = E.default.createElement(
                        'div',
                        { className: w.default.extraContent },
                        E.default.createElement(
                          'div',
                          { className: w.default.statItem },
                          E.default.createElement('p', null, '\u9879\u76ee\u6570'),
                          E.default.createElement('p', null, '56')
                        ),
                        E.default.createElement(
                          'div',
                          { className: w.default.statItem },
                          E.default.createElement('p', null, '\u56e2\u961f\u5185\u6392\u540d'),
                          E.default.createElement(
                            'p',
                            null,
                            '8',
                            E.default.createElement('span', null, ' / 24')
                          )
                        ),
                        E.default.createElement(
                          'div',
                          { className: w.default.statItem },
                          E.default.createElement('p', null, '\u9879\u76ee\u8bbf\u95ee'),
                          E.default.createElement('p', null, '2,223')
                        )
                      );
                    return E.default.createElement(
                      k.default,
                      { loading: a, content: l, extraContent: n },
                      E.default.createElement(
                        r.default,
                        { gutter: 24 },
                        E.default.createElement(
                          d.default,
                          { xl: 16, lg: 24, md: 24, sm: 24, xs: 24 },
                          '\u5185\u5bb9'
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(E.PureComponent))
        ) || s),
        b = C;
      t.default = b;
    },
    wnz0: function(e, t, a) {
      e.exports = {
        pageHeaderContent: 'antd-pro-pages-dashboard-workplace-pageHeaderContent',
        avatar: 'antd-pro-pages-dashboard-workplace-avatar',
        content: 'antd-pro-pages-dashboard-workplace-content',
        contentTitle: 'antd-pro-pages-dashboard-workplace-contentTitle',
        extraContent: 'antd-pro-pages-dashboard-workplace-extraContent',
        statItem: 'antd-pro-pages-dashboard-workplace-statItem',
        datetime: 'antd-pro-pages-dashboard-workplace-datetime',
        activeCard: 'antd-pro-pages-dashboard-workplace-activeCard',
      };
    },
  },
]);

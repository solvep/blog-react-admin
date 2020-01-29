(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    dzOB: function(e, a, t) {
      'use strict';
      var r = t('g09b'),
        s = t('tAuX');
      Object.defineProperty(a, '__esModule', { value: !0 }), (a.default = void 0), t('5NDa');
      var l = r(t('5rEg')),
        n = r(t('2Taf')),
        i = r(t('vZ4D')),
        u = r(t('l4Ni')),
        d = r(t('ujKo')),
        c = r(t('MhPg'));
      t('DZo9');
      var f = r(t('8z0m'));
      t('+L6B');
      var o = r(t('2/Rp'));
      t('OaEy');
      var m = r(t('2fM7'));
      t('y8nQ');
      var p,
        g,
        v,
        b,
        w = r(t('Vl3Y')),
        E = s(t('q1tI')),
        h = t('LLXN'),
        M = t('MuoO'),
        y = r(t('gJV7')),
        V = w.default.Item,
        k = (m.default.Option,
        function(e) {
          var a = e.avatar;
          return E.default.createElement(
            E.Fragment,
            null,
            E.default.createElement('div', { className: y.default.avatar_title }, 'Avatar'),
            E.default.createElement(
              'div',
              { className: y.default.avatar },
              E.default.createElement('img', { src: a, alt: 'avatar' })
            ),
            E.default.createElement(
              f.default,
              { fileList: [] },
              E.default.createElement(
                'div',
                { className: y.default.button_view },
                E.default.createElement(
                  o.default,
                  { icon: 'upload' },
                  E.default.createElement(h.FormattedMessage, {
                    id: 'app.settings.basic.avatar',
                    defaultMessage: 'Change avatar',
                  })
                )
              )
            )
          );
        }),
        N = ((p = (0, M.connect)(function(e) {
          var a = e.user;
          return { currentUser: a.currentUser };
        })),
        (g = w.default.create()),
        p(
          (v =
            g(
              ((b = (function(e) {
                function a() {
                  var e, t;
                  (0, n.default)(this, a);
                  for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
                    s[l] = arguments[l];
                  return (
                    (t = (0, u.default)(
                      this,
                      (e = (0, d.default)(a)).call.apply(e, [this].concat(s))
                    )),
                    (t.setBaseInfo = function() {
                      var e = t.props,
                        a = e.currentUser,
                        r = e.form;
                      Object.keys(r.getFieldsValue()).forEach(function(e) {
                        var t = {};
                        (t[e] = a[e] || null), r.setFieldsValue(t);
                      });
                    }),
                    (t.getViewDom = function(e) {
                      t.view = e;
                    }),
                    t
                  );
                }
                return (
                  (0, c.default)(a, e),
                  (0, i.default)(a, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        this.setBaseInfo();
                      },
                    },
                    {
                      key: 'getAvatarURL',
                      value: function() {
                        var e = this.props.currentUser;
                        if (e.avatar) return e.avatar;
                        var a =
                          'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
                        return a;
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props.form.getFieldDecorator;
                        return E.default.createElement(
                          'div',
                          { className: y.default.baseView, ref: this.getViewDom },
                          E.default.createElement(
                            'div',
                            { className: y.default.left },
                            E.default.createElement(
                              w.default,
                              {
                                layout: 'vertical',
                                onSubmit: this.handleSubmit,
                                hideRequiredMark: !0,
                              },
                              E.default.createElement(
                                V,
                                { label: (0, h.formatMessage)({ id: 'app.settings.basic.email' }) },
                                e('email', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: (0, h.formatMessage)(
                                        { id: 'app.settings.basic.email-message' },
                                        {}
                                      ),
                                    },
                                  ],
                                })(E.default.createElement(l.default, null))
                              ),
                              E.default.createElement(
                                V,
                                {
                                  label: (0, h.formatMessage)({
                                    id: 'app.settings.basic.nickname',
                                  }),
                                },
                                e('name', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: (0, h.formatMessage)(
                                        { id: 'app.settings.basic.nickname-message' },
                                        {}
                                      ),
                                    },
                                  ],
                                })(E.default.createElement(l.default, null))
                              ),
                              E.default.createElement(
                                V,
                                {
                                  label: (0, h.formatMessage)({ id: 'app.settings.basic.profile' }),
                                },
                                e('profile', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: (0, h.formatMessage)(
                                        { id: 'app.settings.basic.profile-message' },
                                        {}
                                      ),
                                    },
                                  ],
                                })(
                                  E.default.createElement(l.default.TextArea, {
                                    placeholder: (0, h.formatMessage)({
                                      id: 'app.settings.basic.profile-placeholder',
                                    }),
                                    rows: 4,
                                  })
                                )
                              ),
                              E.default.createElement(
                                o.default,
                                { type: 'primary' },
                                E.default.createElement(h.FormattedMessage, {
                                  id: 'app.settings.basic.update',
                                  defaultMessage: 'Update Information',
                                })
                              )
                            )
                          ),
                          E.default.createElement(
                            'div',
                            { className: y.default.right },
                            E.default.createElement(k, { avatar: this.getAvatarURL() })
                          )
                        );
                      },
                    },
                  ]),
                  a
                );
              })(E.Component)),
              (v = b))
            ) || v)
        ) || v),
        _ = N;
      a.default = _;
    },
    gJV7: function(e, a, t) {
      e.exports = {
        baseView: 'antd-pro-pages-account-settings-base-view-baseView',
        left: 'antd-pro-pages-account-settings-base-view-left',
        right: 'antd-pro-pages-account-settings-base-view-right',
        avatar_title: 'antd-pro-pages-account-settings-base-view-avatar_title',
        avatar: 'antd-pro-pages-account-settings-base-view-avatar',
        button_view: 'antd-pro-pages-account-settings-base-view-button_view',
      };
    },
  },
]);

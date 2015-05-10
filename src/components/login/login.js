Login = {};

Login.view = function (ctrl) {
  return m('.middle-box .text-center .loginscreen .animated .fadeInDown', [
    m('div',[
        m('div',[
          // m('h1.logo-name',"TR+")
          m('a',{href: 'price.html'}, [
          m('img.tripRockrLogo', {src: 'http://i.imgur.com/qGtEqY2.png' })
          ])
        ]),
        m('h3',"Welcome to TripRockr"),
        m('p',"Login in. To see it in action."),
        m("form.m-t[role='form']",[
          m('.form-group',[
            m("input.form-control[type='email'][placeholder='Username'][required='']")
          ]),
          m('.form-group',[
            m("input.form-control[placeholder='Password'][required=''][type='password']")
          ]),
          m('button.btn.btn-primary.block.full-width.m-b','Login'),
          m('a.btn.btn-sm.btn-white.btn-block',{href:"register.html" },'Create an account')
        ]),
        m('p.m-t',"TripRockr.com © 2015 ")
    ])
  ])
};

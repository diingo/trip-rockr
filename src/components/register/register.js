Register = {};

Register.view = function (ctrl) {
  return m('.middle-box .text-center .loginscreen .animated .fadeInDown',[
    m('div',[
      m('h1.logo-name','TR+')
    ]),
    m('h3', 'Register to TripRockr'),
    m('p',"Create account to see it in action"),
    m("form.m-t[role='form'][action='login.html']",[
      m('.form-group',[
        m("input.form-control[placeholder='Name'][required='']"),
      ]),
      m('.form-group',[
        m("input.form-control[placeholder='Email'][required='']")
      ]),
      m('.form-group',[
        m("input.form-control[placeholder='Password'][required='']")
      ]),
      m('.form-group',[
        m('div.checkbox i-checks',[
          m(".form-group", [
            m(".checkbox.i-checks", [m("label", [" ",m("input[type='checkbox']"),m("i")," Agree to the terms and policy "])])
          ]),
        ])
      ]),
      m("button.btn .btn-primary block full-width m-b[type='submit']", 'Register'),
      m('p.text-muted .text-center',"Already have an account?"),
      m('a.btn .btn-sm .btn-white .btn-block', {href: 'login.html'}, "Login"),
      m('p.m-t', "Trip-Rockr © 2015")
    ])
  ]);

};

Price = {};

Price.view = function (ctrl) {
  return m('#wrapper',[
    buttonSignUp(),
    iconPrice(),
    budgetTimeSlider()
  ]);
};

function iconPrice() {
  return m('.text-center .animated .fadeInDown', [
    // m("h1", ["TripRockr",m("sub", [m("small", "your trip rocks!")])])
    m(".intro-heading", "Let's rock your trip!")
  ]);
}

function buttonSignUp() {
  return m(".container .top-buffer", [
    m(".col-md-3", [
      m('img.pull-right.tripRockrLogo', {src: 'http://i.imgur.com/qGtEqY2.png' })
    ]),
    m(".col-md-3 .pull-right", [

       m("a.btn.btn-w-m.btn-default.full-width[type='button']",{href: 'login.html'}, "Login")
    ]),
    m(".col-md-3 .pull-right", [

      m('a.btn.btn-primary.block.full-width.m-b',{href: 'register.html'},'Sign up'),
    ]),
  ]);
}

function budgetTimeSlider() {
return m(".container .area-buffer", [
    m(".col-lg-10", [
      m(".ibox.float-e-margins", [
        m(".ibox-content", [
          m("input.form-control[placeholder='Find a trip...'][required=''][type='email']"),
          m(".m-b-sm", [
            m("small", [m("strong", "Budget : ")," $"])
          ]),
          m("[id='ionrange_1']"),
          m(".m-b-sm.m-t", [
            m("small", [m("strong", "Vacation Time:")," (Weeks) "])
          ]),
          m("[id='ionrange_2']")
        ])
      ])
    ]),
    m(".col-lg-2", [
      m('a',{href:"add-pois.html"},[
        m("a.btn.btn-w-m.btn-warning.search-button[type='button']", "Search me"),
      ]),
      m("a.btn.btn-w-m.btn-warning.fetch-button[type='button']", "Go fetch")
    ]),
  ])

}

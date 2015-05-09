Dashboard = {}

Dashboard.view = function (ctrl) {
  return m('#wrapper',[
      m(".wrapper.wrapper-content",
        [
          searchBar(),
          bannerView(),
          graph(),
          map()
        ]
      )
    ]
  )
}

function map () {
  return m(".row.m-t-lg", [
    m(".col-lg-12", [
      m(".ibox-content", [
        m("h2", "Word map"),
        m("small", "This is simple example of map"),
        m("[id='world-map']", {style: {"height": " 300px"}})
      ])
    ])
  ])
}

function graph () {
  return m(".row", [
    m(".col-lg-12", [
      m(".ibox.float-e-margins", [
        m(".ibox-title", [
          m("h5", "Orders"),
          m(".pull-right", [
            m(".btn-group", [
              m("button.btn.btn-xs.btn-white.active[type='button']", "Today"),
              m("button.btn.btn-xs.btn-white[type='button']", "Monthly"),
              m("button.btn.btn-xs.btn-white[type='button']", "Annual")
            ])
          ])
        ]),
        m(".ibox-content", [
          m(".row", [
            m(".col-lg-9", [
              m(".flot-chart", [
                m(".flot-chart-content[id='flot-dashboard-chart']")
              ])
            ]),
            m(".col-lg-3", [
              m("ul.stat-list", [
                m("li", [
                  m("h2.no-margins", "2,346"),
                  m("small", "Total orders in period"),
                  m(".stat-percent", ["48% ",m("i.fa.fa-level-up.text-navy")]),
                  m(".progress.progress-mini", [
                    m(".progress-bar", {style: {"width": " 48%"}})
                  ])
                ]),
                m("li", [
                  m("h2.no-margins.", "4,422"),
                  m("small", "Orders in last month"),
                  m(".stat-percent", ["60% ",m("i.fa.fa-level-down.text-navy")]),
                  m(".progress.progress-mini", [
                    m(".progress-bar", {style: {"width": " 60%"}})
                  ])
                ]),
                m("li", [
                  m("h2.no-margins.", "9,180"),
                  m("small", "Monthly income from orders"),
                  m(".stat-percent", ["22% ",m("i.fa.fa-bolt.text-navy")]),
                  m(".progress.progress-mini", [
                    m(".progress-bar", {style: {"width": " 22%"}})
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}

function searchBar () {
  return m("nav.navbar.navbar-static-top.white-bg[role='navigation']", {style: {"margin-bottom": 0}},
      ["\n",m(".navbar-header", [
      m("a.navbar-minimalize.minimalize-styl-2.btn.btn-primary.[href='#']", [m("i.fa.fa-bars")," "]),
      m("form.navbar-form-custom[action='search_results.html'][role='search']", [
        m(".form-group", [
          m("input.form-control[id='top-search'][name='top-search'][placeholder='Search for your trips'][type='text']")
        ])
      ])
    ])
  ])
}

function bannerView () {
    return m(".wrapper.wrapper-content", [
      m(".row", [
        m(".col-lg-3", [
          m(".ibox.float-e-margins", [
            m(".ibox-title", [
              m("span.label.label-success.pull-right", "Monthly"),
              m("h5", "Trips")
            ]),
            m(".ibox-content", [
              m("h1.no-margins", "40 886,200"),
              m(".stat-percent.font-bold.text-success", ["98% ",m("i.fa.fa-bolt")]),
              m("small", "Total income")
            ])
          ])
        ]),
        m(".col-lg-3", [
          m(".ibox.float-e-margins", [
            m(".ibox-title", [
              m("span.label.label-info.pull-right", "Annual"),
              m("h5", "Likes")
            ]),
            m(".ibox-content", [
              m("h1.no-margins", "275,800"),
              m(".stat-percent.font-bold.text-info", ["20% ",m("i.fa.fa-level-up")]),
              m("small", "New orders")
            ])
          ])
        ]),
        m(".col-lg-3", [
          m(".ibox.float-e-margins", [
            m(".ibox-title", [
              m("span.label.label-primary.pull-right", "Today"),
              m("h5", "POIs")
            ]),
            m(".ibox-content", [
              m("h1.no-margins", "106,120"),
              m(".stat-percent.font-bold.text-navy", ["44% ",m("i.fa.fa-level-up")]),
              m("small", "New visits")
            ])
          ])
        ]),
        m(".col-lg-3", [
          m(".ibox.float-e-margins", [
            m(".ibox-title", [
              m("span.label.label-danger.pull-right", "Low value"),
              m("h5", "Cost")
            ]),
            m(".ibox-content", [
              m("h1.no-margins", "80,600"),
              m(".stat-percent.font-bold.text-danger", ["38% ",m("i.fa.fa-level-down")]),
              m("small", "In first month")
            ])
          ])
        ])
      ])
    ])
}



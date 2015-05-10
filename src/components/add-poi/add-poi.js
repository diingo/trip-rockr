AddPOI = {}

AddPOI.model = function () {}
AddPOI.controller = function () {
  var ctrl = this
  // ctrl.itineraries = m.prop()
  // ctrl.pois        = m.prop()
  // //////
  // // trip id is hard coded atm
  // /////
  // var edges = m.request({ url: 'http://api.triprockr.com/itinerary/trip/huuwwa', method: 'GET' })
  // .then(function(response) {
  //   ctrl.itineraries( response.results )
  //   return getFullItins(response.results)
  // }).then(function(fullItins) {
  //   ctrl.pois( getPOIs(fullItins) )
  // })

  // ctrl.selectedItineraryId = m.prop(null)
}


AddPOI.view = function (ctrl) {
  return m('#wrapper', [
    POIList(),
    POISelect()
  ])
}

function POISelect () {
  return m('#page-wrapper.gray-bg', [
  ])
}
// m(".ibox.", [
//       m(".ibox-title", [
//         m("h5", "Nestable custom theme list")
//       ]),
//       m(".ibox-content", [
//         m("p.m-b-lg", "\n                                Each list you can customize by standard css styles. Each element is responsive so you can add to it any other element to improve functionality of list.\n                            "),
//         m(".dd[id='nestable2']", [
//           m("ol.dd-list", [
//             m("li.dd-item[data-id='1']", [
//               m(".dd-handle", [
//                 m("span.label.label-info", [m("i.fa.fa-users")]),
//                 " Cras ornare tristique.\n                                        "
//               ]),
//               m("ol.dd-list", [
//                 m("li.dd-item[data-id='2']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 12:00 pm "),
//                     m("span.label.label-info", [m("i.fa.fa-cog")]),
//                     " Vivamus vestibulum nulla nec ante.\n                                                "
//                   ])
//                 ]),
//                 m("li.dd-item[data-id='3']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 11:00 pm "),
//                     m("span.label.label-info", [m("i.fa.fa-bolt")]),
//                     " Nunc dignissim risus id metus.\n                                                "
//                   ])
//                 ]),
//                 m("li.dd-item[data-id='4']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 11:00 pm "),
//                     m("span.label.label-info", [m("i.fa.fa-laptop")]),
//                     " Vestibulum commodo\n                                                "
//                   ])
//                 ])
//               ])
//             ]),
//             m("li.dd-item[data-id='5']", [
//               m(".dd-handle", [
//                 m("span.label.label-warning", [m("i.fa.fa-users")]),
//                 " Integer vitae libero.\n                                        "
//               ]),
//               m("ol.dd-list", [
//                 m("li.dd-item[data-id='6']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 15:00 pm "),
//                     m("span.label.label-warning", [m("i.fa.fa-users")]),
//                     " Nam convallis pellentesque nisl.\n                                                "
//                   ])
//                 ]),
//                 m("li.dd-item[data-id='7']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 16:00 pm "),
//                     m("span.label.label-warning", [m("i.fa.fa-bomb")]),
//                     " Vivamus molestie gravida turpis\n                                                "
//                   ])
//                 ]),
//                 m("li.dd-item[data-id='8']", [
//                   m(".dd-handle", [
//                     m("span.pull-right", " 21:00 pm "),
//                     m("span.label.label-warning", [m("i.fa.fa-child")]),
//                     " Ut aliquam sollicitudin leo.\n                                                "
//                   ])
//                 ])
//               ])
//             ])
//           ])
//         ]),
//         m(".m-t-md", [
//           m("h5", "Serialised Output")
//         ]),
//         m("textarea.form-control[id='nestable2-output']")
//       ])
//     ])

function POIList () {
  return m("nav.navbar-default.navbar-static-side[role='navigation']", [
    m(".sidebar-collapse", [
      m("ul.nav[id='side-menu']", [
        m("li.nav-header", [
          m(".dropdown.profile-element", [
            " ",
            m("span", [
              m("img.img-circle[alt='image'][src='img/profile_small.jpg']")
            ]),
            m("a.dropdown-toggle[data-toggle='dropdown'][href='#']", [
              m("span.clear", [" ",m("span.block.m-t-xs", [
                  " ",
                  m("strong.font-bold", "David Williams")
                ])," ",m("span.text-muted.text-xs.block", ["Art Director ",m("b.caret")])," "]),
              " "
            ]),
            m("ul.dropdown-menu.animated.fadeInRight.m-t-xs", [
              m("li", [m("a[href='profile.html']", "Profile")]),
              m("li", [m("a[href='contacts.html']", "Contacts")]),
              m("li", [m("a[href='mailbox.html']", "Mailbox")]),
              m("li.divider"),
              m("li", [m("a[href='login.html']", "Logout")])
            ])
          ]),
          m(".logo-element", "\n                        IN+\n                    ")
        ]),
        m("li", [
          m("a[href='css_animation.html']", [m("i.fa.fa-magic")," ",m("span.nav-label", "CSS Animations "),m("span.label.label-info.pull-right", "62")])
        ]),
        m("li.landing_link", [
          m("a[href='Landing_page/index.html'][target='_blank']", [m("i.fa.fa-star")," ",m("span.nav-label", "Landing Page")," ",m("span.label.label-warning.pull-right", "NEW")])
        ]),
        m("li.special_link", [
          m("a[href='package.html']", [m("i.fa.fa-database")," ",m("span.nav-label", "Package")])
        ])
      ])
    ])
  ])
}


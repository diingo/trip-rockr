Trip = {}

Trip.view = function (ctrl) {
  return m('#wrapper', [
    m('.wrapper.wrapper-content.animated.fadeInRight', [
      tripHeader(),
      timeline()
    ])
  ])
}

function tripHeader() {
  return m(".row", [
    m(".col-lg-12", [
      m(".jumbotron", [
        m("h1", "Trip"),
        m("p", "My Fun Trip")
      ])
    ])
  ])
}

function timeline() {
  return m(".ibox-content[id='ibox-content']", [
    m(".vertical-container.dark-timeline.center-orientation[id='vertical-timeline']", [
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.navy-bg", [
          m("i.fa.fa-briefcase")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Meeting"),
          m("p", "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.\n                                    "),
          m("a.btn.btn-sm.btn-primary[href='#']", " More info"),
          m("span.vertical-date", [
            "\n                                        Today ",
            m("br"),
            m("small", "Dec 24")
          ])
        ])
      ]),
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.blue-bg", [
          m("i.fa.fa-file-text")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Send documents to Mike"),
          m("p", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."),
          m("a.btn.btn-sm.btn-success[href='#']", " Download document "),
          m("span.vertical-date", [
            "\n                                        Today ",
            m("br"),
            m("small", "Dec 24")
          ])
        ])
      ]),
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.lazur-bg", [
          m("i.fa.fa-coffee")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Coffee Break"),
          m("p", "Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. "),
          m("a.btn.btn-sm.btn-info[href='#']", "Read more"),
          m("span.vertical-date", [" Yesterday ",m("br"),m("small", "Dec 23")])
        ])
      ]),
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.yellow-bg", [
          m("i.fa.fa-phone")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Phone with Jeronimo"),
          m("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut."),
          m("span.vertical-date", ["Yesterday ",m("br"),m("small", "Dec 23")])
        ])
      ]),
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.lazur-bg", [
          m("i.fa.fa-user-md")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Go to the doctor dr Smith"),
          m("p", "Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "),
          m("span.vertical-date", ["Yesterday ",m("br"),m("small", "Dec 23")])
        ])
      ]),
      m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.navy-bg", [
          m("i.fa.fa-comments")
        ]),
        m(".vertical-timeline-content", [
          m("h2", "Chat with Monica and Sandra"),
          m("p", "Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "),
          m("span.vertical-date", ["Yesterday ",m("br"),m("small", "Dec 23")])
        ])
      ])
    ])
  ])
}
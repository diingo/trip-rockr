POIs = {}
POIs.model = function (attrs) {
  this.description = m.prop("")
  this.date = m.prop("")
}

POIs.controller = function (options) {
  var ctrl = this
  ctrl.pois = options.pois
}

POIs.view = function (ctrl) {
  return m('.pois', [
    ctrl.pois().map(function (poi, idx) {
      return m(".vertical-timeline-block", [
        m(".vertical-timeline-icon.navy-bg", [
          m("i.fa.fa-briefcase")
        ]),
        m(".vertical-timeline-content", [
          m("h2", poi.name),
          m("p", poi.description + "\n"),
          m("a.btn.btn-sm.btn-primary[href='#']", " More info"),
          m("span.vertical-date", [
            "\n Today ",
            m("br"),
            m("small", poi.createdDate)
          ])
        ])
      ])
    })
  ])
}
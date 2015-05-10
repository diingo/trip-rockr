AddPOI = {}

AddPOI.model = function () {}
AddPOI.controller = function () {
  var ctrl = this
  ctrl.selectedVenue = m.prop(null)
  ctrl.venueData = m.request({
    url: 'http://api.triprockr.com/Yelp',
    method: 'GET',
    data: {
      searchTerm: 'restaurants',
      location: 'austin,tx',
      radius: 3500
    }
  })

}

AddPOI.view = function (ctrl) {
  return m('#wrapper.row', [
    POIList(ctrl),
    POISelect(ctrl),
    m('#map-canvas', { config: googleMap.papp(ctrl) })
  ])
}

function POIList (ctrl) {
    return  m(".poi-list.col-lg-3", [
        m(".ibox-title", [
          m("h5", "Points of Interests")
        ]),
        m(".ibox-content", [
          m("p.m-b-lg", m.trust("\nUse the map to add <span class='font-bold text-info'>points of interests</span> to your itineraries.\n")),
          m(".dd[id='nestable2']", [
            m("ol.dd-list", [
              m("li.dd-item[data-id='1']", [
                m(".dd-handle", [
                  m("span.label.label-info", [m("i.fa.fa-users")]),
                  " Cras ornare tristique.\n                                        "
                ]),
                m("ol.dd-list", [
                  m("li.dd-item[data-id='2']", [
                    m(".dd-handle", [
                      m("span.pull-right", " 12:00 pm "),
                      m("span.label.label-info", [m("i.fa.fa-cog")]),
                      " Vivamus vestibulum nulla nec ante.\n                                                "
                    ])
                  ])
                ])
              ]),
              m("li.dd-item[data-id='5']", [
                m(".dd-handle", [
                  m("span.label.label-warning", [m("i.fa.fa-users")]),
                  " Integer vitae libero.\n                                        "
                ]),
                m("ol.dd-list", [
                  m("li.dd-item[data-id='6']", [
                    m(".dd-handle", [
                      m("span.pull-right", " 15:00 pm "),
                      m("span.label.label-warning", [m("i.fa.fa-users")]),
                      " Nam convallis pellentesque nisl.\n                                                "
                    ])
                  ]),
                  m("li.dd-item[data-id='7']", [
                    m(".dd-handle", [
                      m("span.pull-right", " 16:00 pm "),
                      m("span.label.label-warning", [m("i.fa.fa-bomb")]),
                      " Vivamus molestie gravida turpis\n                                                "
                    ])
                  ]),
                ])
              ])
            ])
          ])
        ])
      ])
}


function POISelect(ctrl) {
  var venue = ctrl.selectedVenue()

  return m(".map-overlay-select.col-lg-4", [
    m(".ibox", [
      m(".ibox-content", [
        m("h3", "To-do"),
        m("p.small", [m("i.fa.fa-hand-o-up")," Drag task between list"]),

        m("ul.sortable-list.connectList.agile-list.ui-sortable", [
          venue ? [
            m("li.success-element", [
              m('h5', venue.name),
              venue.snippet_text,
              m(".agile-detail", [
                m("a.pull-right.btn.btn-primary[href='#']", {}, "Add"),
                m("i.fa.fa-phone"),
                venue.display_phone
              ])
            ])
          ] : null
        ])
      ])
    ])
  ])
}


function googleMap (ctrl, elem, hasInitialized, context) {
  if (hasInitialized) return

  var mapOptions = {
    center: { lat: 30.27658, lng: -97.73182},
    zoom: 12,
    panControl: false,
    zoomControl: true,
    scaleControl: true
  };
  var map = new google.maps.Map(elem, mapOptions)
  context.markers = ctrl.venueData().businesses.map(makeMarker)

  function makeMarker (venue) {
    var coord = venue.location.coordinate
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(coord.latitude, coord.longitude),
      map: map,
      title: venue.name
    })
    google.maps.event.addListener(marker, 'click', function () {
      ctrl.selectedVenue(venue)
      m.redraw()
    })
    return marker
  }
}



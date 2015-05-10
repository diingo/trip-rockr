AddPOI = {}

AddPOI.model = function () {}
AddPOI.controller = function () {
  var ctrl = this
  ctrl.selectedVenue = m.prop(null)
  ctrl.recommendedPlan = m.prop(null)
  ctrl.myPlan = m.prop(null)

  // TODO change the doactively API to triprockr - was not working due to Cross origin
  var edges = m.request({ url: 'http://api.doactively.com/v1/FourSquareData/recommendedVenues?ll=30.25,97.75&near=Austin,%20TX&query=coffee&section=topPicks%20&limit=7&offset=20&radius=250&pricePoints=2,3', method: 'GET' })
  .then(function(response) {
    // console.log("add-poi resp: ", response.response)
    ctrl.recommendedPlan = response.response.groups[0].items.map(function(item) { return item.venue })
  })

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


function myPlan () {
  return m("li.dd-item[data-id='1']", [
    m(".dd-handle", [
      m("span.label.label-info", [m("i.fa.fa-users")]),
      "My Plans\n"
    ]),
    ctrl.recommendedPlan.map(function(poi, idx) {
      return m("ol.dd-list", [
        m("li.dd-item[data-id='6']", [
          m(".dd-handle", [
            m("span.pull-right", " 15:00 pm "),
            m("span.label.label-warning", [m("i.fa.fa-users")]), poi.name +
            "\n"
          ])
        ])
      ])
    })
  ])
}

function recommendedPlan (ctrl, options) {
  return m('.recommendedPlan', [
    m("li.dd-item[data-id='5']", [
      m(".dd-handle", [
        m("span.label.label-warning", [m("i.fa.fa-users")]),
        "Recommended Plans\n"
      ]),
      ctrl.recommendedPlan.map(function(poi, idx) {
        return m("ol.dd-list", [
          m("li.dd-item[data-id='6']", [
            m(".dd-handle", [
              m("span.pull-right", " 15:00 pm "),
              m("span.label.label-warning", [m("i.fa.fa-users")]), poi.name +
              "\n"
            ])
          ])
        ])
      })
    ])
  ])
}

function POIList (ctrl) {
    return  m(".poi-list.col-lg-3", [
        m(".ibox-title", [
          m("h5", "Points of Interests")
        ]),
        m(".ibox-content", [
          m("p.m-b-lg", m.trust("\nUse the map to add <span class='font-bold text-info'>points of interests</span> to your trip plan.\n")),
          m(".dd[id='nestable2']", [
            m("ol.dd-list", [
              myPlan(ctrl),
              recommendedPlan(ctrl)
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
        // m("h3", "To-do"),

        m("ul.sortable-list.connectList.agile-list.ui-sortable", [
          venue ? [
            m("li.success-element", [
              m('h5', venue.name),
              venue.snippet_text,
              m(".agile-detail", [
                m("a.pull-right.btn.btn-primary[href='#']", {}, "+"),
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



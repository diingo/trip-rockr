AddPOI = {}

AddPOI.model = function () {}
AddPOI.controller = function () {
  var ctrl = this
  ctrl.trip = m.request({
    method: 'GET',
    // url: 'http://api.triprockr.com/trips/Q5AgDV'
    url: 'http://api.triprockr.com/trips/huuwwa'
  })
  ctrl.plans = Plan.findByTripId('huuwwa')
  ctrl.selectedVenue = m.prop(null)

  // TODO change the doactively API to triprockr - was not working due to Cross origin
  // var edges = m.request({ url: 'http://api.doactively.com/v1/FourSquareData/recommendedVenues?ll=30.25,97.75&near=Austin,%20TX&query=coffee&section=topPicks%20&limit=7&offset=20&radius=250&pricePoints=2,3', method: 'GET' })
  // .then(function(response) {
  //   // console.log("add-poi resp: ", response.response)
  //   ctrl.recommendedPlanPOIs(
  //     response.response.groups[0].items.map(function(item) { return item.venue })
  //   )
  // })

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
      m("p.m-b-lg", m.trust("\nUse the map to add <span class='font-bold text-info'>points of interests</span> to your trip plan.\n")),
      m(".dd[id='nestable2']", [
        m("ol.dd-list", [
          ctrl.plans().map( planListView.papp(ctrl) )
          // recommendedPlanPOIs(ctrl)
        ])
      ])
    ])
  ])
}

function planListView (ctrl, plan) {
  console.log("Showing planZ", plan)
  return m("li.dd-item[data-id='1']", [
    m(".dd-handle", [
      m("span.label.label-info", [m("i.fa.fa-users")]),
      plan.name, "\n"
    ]),
    plan.pois.map(function(poi, idx) {
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

function recommendedPlanPOIs (ctrl, options) {
  return m('.recommendedPlanPOIs', [
    m("li.dd-item[data-id='5']", [
      m(".dd-handle", [
        m("span.label.label-warning", [m("i.fa.fa-users")]),
        "Recommended Plans\n"
      ]),
      ctrl.recommendedPlanPOIs().map(function(poi, idx) {
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


                m("i.fa.fa-phone"),
                venue.display_phone
              ]),
              m('br'),
              ctrl.plans().map(function(plan) {
                return m("a.pull-right.btn.btn-primary[href='#']", {
                  onclick: Plan.addVenueAsPOI.papp(plan.id, venue)
                }, "+ " + plan.name)
              }),
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



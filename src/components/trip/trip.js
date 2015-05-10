Trip = {}

Trip.model = function () {}
Trip.controller = function () {
  var ctrl = this
  ctrl.itineraries = m.prop()
  ctrl.pois        = m.prop()
  //////
  // trip id is hard coded atm
  /////
  var edges = m.request({ url: 'http://api.triprockr.com/trips/huuwwa/itinerary', method: 'GET' })
  .then(function(response) {
    ctrl.itineraries( response.results )
    return getFullItins(response.results)
  }).then(function(fullItins) {
    ctrl.pois( getPOIs(fullItins) )
  })

  ctrl.selectedItineraryId = m.prop(null)
}


Trip.view = function (ctrl) {
  return m('#wrapper', [
    m('.wrapper.wrapper-content.animated.fadeInRight', [
      tripHeader(),
      chooseItinerary(ctrl),
      timeline(ctrl)
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

function chooseItinerary(ctrl) {
  return m(".text-center.float-e-margins.p-md", [
    ctrl.itineraries().map(function(itin) {
      console.log("itin, ", itin)
      return m("a.btn.btn-xs.btn-primary[href='#'][id='lightVersion']", {
        onclick: ctrl.selectedItineraryId.papp(itin.id)
      }, itin.name)
    })
  ])
}

function timeline(ctrl) {
  return m(".ibox-content[id='ibox-content']", [
    m(".vertical-container.dark-timeline.center-orientation[id='vertical-timeline']", [
      m.component(POIs, {
        pois: ctrl.pois().filter( hasItinId(ctrl.selectedItineraryId()) )
      })
    ])
  ])
}
function hasItinId (id) {
  if (! id) {
    return identity
  }
  return function (poi) {
    return poi.itineraryPOIs.map(getProp('itineraryId')).indexOf(id) >= 0
  }
}


function getPOIs(fullItins) {
  var pois = fullItins.map(function(itin) {
      return itin.results
  })
  return pois.reduce(Array.concat)
}

function getFullItins(itineraries) {
  return m.sync(itineraries.map(function(itin) {
    console.log('itin: ', itin)
    return m.request({
      url: "http://api.triprockr.com/poi/itinerary/" + itin.id,
      method: 'GET'
    })
  }))
}

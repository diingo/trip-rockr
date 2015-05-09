Trip = {}

Trip.model = function () {}
Trip.controller = function () {
  var ctrl = this
  var trip = m.request({ url: 'http://api.triprockr.com/itinerary/trip/huuwwa', method: 'GET' }).then(function(response) {
    ctrl.partialItineraries = response.results
    return response.results
  }).then(function(partialItins) {
    return getFullItins(partialItins)
  }).then(function(fullItins) {
    ctrl.itineraries = fullItins
    window.check = fullItins
    ctrl.pois = m.prop(getPOIs(fullItins))
  })
}

function getPOIs(fullItins) {
  var pois = fullItins.map(function(itin) {
      return itin.results
  })
  return pois.reduce(Array.concat)
}

function getFullItins(itineraries) {
  return m.sync(itineraries.map(function(itin) {
    return m.request({
      url: 'http://api.triprockr.com/poi/itinerary/AjSYGo',
      method: 'GET'
    })
  }))
}

Trip.view = function (ctrl) {
  return m('#wrapper', [
    m('.wrapper.wrapper-content.animated.fadeInRight', [
      tripHeader(),
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

function timeline(ctrl) {
  return m(".ibox-content[id='ibox-content']", [
    m(".vertical-container.dark-timeline.center-orientation[id='vertical-timeline']", [
      m.component(POIs, { pois: ctrl.pois })
    ])
  ])
}
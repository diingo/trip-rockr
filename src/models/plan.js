(function (){

  window.Plan = {}

  Plan.findByTripId = function (tripId) {
    return m.request({
      method: 'GET',
      url: 'http://api.triprockr.com/trips/' +tripId+ '/itinerary?'
    })
    .then(function(response) {
      var plans = response.results
      return plans.map(attachPlanPOIs)
    })
  }

  function attachPlanPOIs(plan) {
    plan.pois = plan.itineraryPOIs.map(getProp('poi'))
    return plan
  }

  Plan.addVenueAsPOI = function (planId, venue) {
    m.request({
      method: 'POST',
      url: 'http://api.triprockr.com/poi/itinerary/' + planId,
      data: {
        name: venue.name,
        geoLoc: venue.location.coordinate
      }
    })
  }

  // Plan.findByTripId = function (tripId) {
  //   return m.request({
  //     method: 'GET',
  //     url: 'http://api.triprockr.com/trips/' +tripId+ '/itinerary'
  //   })
  //   .then(function(response) {
  //     var plans = response.results
  //     return m.sync( plans.map(attachPlanPOIs) )
  //   })
  // }

  // function attachPlanPOIs(plan) {
  //   // console.log('plan: ', plan)
  //   return m.request({
  //     url: "http://api.triprockr.com/poi/itinerary/" + plan.id,
  //     method: 'GET'
  //   })
  //   .then(function (response) {
  //     plan.pois = response.results
  //     return plan
  //   })
  // }

})()

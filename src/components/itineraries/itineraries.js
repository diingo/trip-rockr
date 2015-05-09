Itineraries = {}

Itineraries.model = function () {
  this.name  = m.prop('[Your name]')
  this.email = m.prop('[Your email]')
};

Itineraries.controller = function () {
  var ctrl = this
  ctrl.itineraries = m.prop( [new Itineraries.model()] )

  ctrl.add = function () {
    var newModel = new Itineraries.model()
    ctrl.itineraries().push(newModel)
  }
  ctrl.remove = function (idx) {
    ctrl.itineraries().splice(idx, 1)
  }
}

Itineraries.view = function (ctrl) {

  return m('.itineraries', [
    m('h3', 'Please enter your contact information:'),
    ctrl.itineraries().map(function (contact, idx) {
      return m('fieldset', [
        m('legend', "Attendee #" + (idx+1)),
        m('label', "Name:"),
        m('input[type=text]', { value: contact.name(), onchange: m.withAttr('value', contact.name) }),
        m('br'),
        m('label', "Email:"),
        m('input[type=text]', { value: contact.email(), onchange: m.withAttr('value', contact.email) }),
        removeAnchor(ctrl, idx)
      ])
    }),
    m('a', { onclick: ctrl.add, href:'#' }, 'Add another attendee')
  ])
}

function removeAnchor (ctrl, idx) {
  if (ctrl.itineraries().length >= 2) {
    return m('a', { onclick: ctrl.remove.papp(idx), href:'#' }, 'remove')
  }
}

m.viewModelMap = function(vmAttrs) {
  var map = {}
  return function(key) {
    if (!map[key]) {
      map[key] = {}
      for (var prop in vmAttrs) map[key][prop] = m.prop(vmAttrs[prop]())
    }
    return map[key]
  }
}

// http://stackoverflow.com/questions/23687701/how-would-i-bind-keypresses-for-an-app
m.onEnter = function(callback) {
  return function(e) {
    // ensure cross browser compatibility
    var key = e.which || e.keyCode;
    if (key === 13) {
      callback(e)
    }
    else m.redraw.strategy("none")
  }
}

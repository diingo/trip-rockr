window.getProp = function (query) {
  var segments = query.split('.')
  return function (obj) {
    var result = obj
    for (var i=0; i < segments.length; i++) {
      result = result[segments[i]]
      if (typeof result === 'function') result = result()
    }
    return result
  }
}

window.merge = function (target) {
  var sources = Array.prototype.slice.call(arguments, 1)
  for (var i=0; i < sources.length; i++) {
    var source = sources[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) target[prop] = source[prop]
    }
  }
  return target
}

window.doAll = function () {
  var functions = arguments
  return function () {
    var results = []
    for (var i=0; i < functions.length; i++) {
      results.push( functions[i].apply(null, arguments) )
    }
    return results
  }
}

window.identity = function (x) { return x }

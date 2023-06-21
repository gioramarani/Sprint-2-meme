
  
 function makeRandomWord(length = 6) {
    var txt = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz'
  
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
  
    return txt
  }
  

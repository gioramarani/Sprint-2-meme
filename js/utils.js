const gWords = ['hello', 'there', 'whoever', 'you', 'are', 'love', 'is', 'the', 'only', 'way', 'but', 'also', 'chocholate', 'is', 'nice', 'chocholate', 'will', 'always', 'be', 'there', 'for', 'you']
 
 
 function makeRandomWord(length = 5) {
    var txt = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz'
  
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
  
    return txt
  }
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  function getRandomStringFromArray(array) {
    // Get a random index within the array length
    const randomIndex = Math.floor(Math.random() * array.length);
  
    // Return the element at the random index
    return array[randomIndex];
  }

  function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
    
  }
  
  function loadFromStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
  }
  
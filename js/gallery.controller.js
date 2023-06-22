'use strict'




function renderGallery(imgs) {
    var elGallery = document.querySelector('.gallery')
    console.log(imgs)

    var strHTMLs = imgs.map(img => {
          return  `<img src=${img.url} class="img${img.id}" onclick="onImgSelect(${img.id})">`
    })
    // console.log(img)
    elGallery.innerHTML = strHTMLs.join('')
}

function renderSavedMemeGallery(memesObject){
    console.log(memesObject)
    const imgs = []
    for(var x=0; x< memesObject.length; x++){
        var img = memesObject[x].display
        console.log(memesObject[x].display)
        imgs.push(img)
        console.log(imgs)
    }
    var elSavedMemeGallery = document.querySelector('.saved-memes')

    var strHTMLs = imgs.map(img => {
        return  `<img src=${img} class="img${img.id}" onclick="onImgSelect(${img.id})">`
  })
  console.log(img)
//   elSavedMemeGallery.innerHTML = strHTMLs.join('')
  elSavedMemeGallery.innerHTML = strHTMLs.join('')
}
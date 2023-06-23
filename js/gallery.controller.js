'use strict'

const gSavedMemesService = []
const gSavedImgs = []
const gMemeIdx = []

function renderGallery(imgs) {
    var elGallery = document.querySelector('.gallery')
    console.log(imgs)

    var strHTMLs = imgs.map(img => {
          return  `<img src=${img.url} class="img${img.id}" onclick="onImgSelect(${img.id}, 'fromGallery')">`
    })
    // console.log(img)
    elGallery.innerHTML = strHTMLs.join('')
}

function renderSavedMemeGallery(memesObject){
    console.log(memesObject)
    
    for(var x=0; x< memesObject.length; x++){
        var img = memesObject[x].display
        var service = memesObject[x].service
        console.log(memesObject[x].display)
        console.log(memesObject[x].service)
        gSavedImgs.push(img)
        gSavedMemesService.push(service)
        gMemeIdx.push(x)
        console.log(gSavedImgs)
        console.log(gSavedMemesService)
    }
    var elSavedMemeGallery = document.querySelector('.saved-memes')

    var strHTMLs = memesObject.map(memeObject => {
        return  `<img src=${memeObject.display} class="img${memeObject.service}" onclick="onImgSelect(${memeObject.service.selectedId}, 'fromStorage')">`
  })

//     var strHTMLs = gSavedImgs.map(img => {
//         return  `<img src=${img} class="img${img.id}" onclick="onImgSelect(${img.id})">`
//   })
  console.log(img)
//   elSavedMemeGallery.innerHTML = strHTMLs.join('')
  elSavedMemeGallery.innerHTML = strHTMLs.join('')
}
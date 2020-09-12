// const itemList = items.resdivts

//nest image in div to fix quality ==>> go css line 46

const container = document.getElementById("items-container")

// test function
const etsyFunction = items.results
  .map((item) => {
    // const itemList = items.results
    // const container = document.getElementById("items-container")
    console.log(item.Images)
    return `<div class="cells">
  <img class="images" src="${item.Images[0].url_fullxfull}" />
  <h1>${item.title}</h1>
  <p>${item.Shop.shop_name}</p>
  <p class="rating">★★★★★<span> (${item.views})</span></p>
  <p class="price">$${item.price}</p>
  </div>`
    // return (container.innerHTML = items.map(item))
  })
  .join("")
container.innerHTML = etsyFunction

// original function, decent looking grid

// const etsyFunction = items.results
//   .map((item) => {
//     // const itemList = items.results
//     // const container = document.getElementById("items-container")
//     console.log(item.Images)
//     return `<div class="cells">
//   <img class="images" src="${item.Images[0].url_170x135}" />
//   <h1>${item.title}</h1>
//   <p>${item.Shop.shop_name}</p>
//   <p class="rating">★★★★★<span></span></p>
//   <p class="price">$${item.price}</p>
//   </div>`
//     // return (container.innerHTML = items.map(item))
//   })
//   .join("")
// container.innerHTML = etsyFunction

// function makeRows(rows, cols) {
//   container.style.setProperty("--grid-rows", rows)
//   container.style.setProperty("--grid-cols", cols)
//   for (b = 0; b < rows * cols; b++) {
//     let box = document.createElement("div")
//     box.innerText = b + 1
//     container.appendChild(box).className = "item"
//     console.log(box)
//   }
// }
// makeRows(5, 5)

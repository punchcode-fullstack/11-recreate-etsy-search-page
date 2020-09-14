//Grid java (Jesse)

const container = document.getElementById("items-container")

// test function
const etsyFunction = items.results
  .map((item) => {
    // const itemList = items.results
    // const container = document.getElementById("items-container")
    console.log(item)
    return `<div class="cells">
    <a href="#"><div class="favIcon hidden">
    <i class="fa fa-heart-o"></i>
    </div></a>
    <a href="${item.url}" target="_blank">
  <img class="images" src="${item.Images[0].url_fullxfull}" />
  <h1>${item.title}</h1>
  <p>${item.Shop.shop_name}</p>
  <p class="rating">★★★★★<span> (${item.views})</span></p>
  <p class="price">$${item.price}</p></a>
  </div>`
    // return (container.innerHTML = items.map(item))
  })
  .join("")
container.innerHTML = etsyFunction

// this function is for displaying the heart icon over images

// document.querySelector(".cells").addEventListener("mouseover", function (e) {
//   // let cells = e.target.className.includes("cells")
//   let favIcon = e.target.className.includes("favIcon")
//   if (favIcon === true) {
//     document.querySelector(".favIcon").className.toggle("hidden")
//   }
// })
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

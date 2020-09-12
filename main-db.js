document.getElementById("column-1").addEventListener("mouseover", function (e) {
  let selection = e.target.getAttribute("href")
  console.log(selection)
  const hasHide = document
    .getElementById(selection)
    .classList.contains("hidecol")

  document.querySelectorAll(".col-2").forEach(function (el) {
    console.log(el)
    el.classList.remove("hidecol")
  })
  if (!hasHide) {
    document.getElementById(selection).classList.add("hidecol")
  }
})

document.getElementById("test").addEventListener("mouseenter", function (e) {
  let selection = e.target.getAttribute("href")
  document.getElementById(selection).style.display = "flex"
})

// document.getElementById("test").addEventListener(mousem, function (e) {
//   let selection = e.target.getAttribute("href")
//   document.getElementById(selection).style.display = "flex"
// })

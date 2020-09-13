// for section products
const html = items.results
  .map((item) => {
    return `
    <div class= "products">
          <img src= ${unescape(item.Images[0].url_170x135)}/>
          <h4>${item.title}</h4>
        <div class= "card">
        <p>Ad by ${item.Shop.shop_name}</p>
        <p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> (${
          item.views
        })</p>
        <p class= "price">$${
          item.price
        } <span id="free">FREE shipping</span></p>
        </div>
    </div>
    `;
  })
  .join("");

document.querySelector("#products").innerHTML = html;

// for serch bar
const input = document.querySelector(".searchinput");
const btn = document.querySelector(".searchbtn");
const xbtn = document.querySelector(".xbtn");

input.addEventListener("focus", function () {
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
  xbtn.classList.toggle("active");
});

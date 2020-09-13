const html = items.results
  .map((item) => {
    return `
    <div class= "products">
          <img src= ${unescape(item.Images[0].url_170x135)}/>
        <h4>${item.title}</h4>
        <div class= "board">
        <p>${item.Shop.shop_name}</p>
        <p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>(${
          item.views
        })</p>
        <p class= "price">$${item.price}<span id="shipping"> FREE shipping</span></p>
        
        </div>
    </div>
    `;
  })
  .join("");

document.querySelector("#products").innerHTML = html;



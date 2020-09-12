const etsyItems = items.results
  .map((item) => {
    return `<div class="boxes">
      <img src="${item.Images[0].url_170x135}" />
      <div class="overlay">
      <i id="heart" class="fa fa-heart"></i>
      </div>
    <p class="title">${item.title}<p>
    <p class="shop">${item.Shop.shop_name}</p>
    <p class="views">⭑⭑⭑⭑⭑ (${item.views})</p>
    <p class="price">$${item.price}</p>
    </div>`;
  })
  .join("");
console.log(etsyItems);

document.querySelector("#items-container").innerHTML = `${etsyItems}`;

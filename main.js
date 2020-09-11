const html = items.results.map(item => {
    return `
    <div class= "products">
          <img src= ${unescape(item.Images[0].url_170x135)}/>
        <h4>${item.title}</h4>
        <div class= "desc">
        <p>${item.Shop.shop_name}</p>
        <p>Views (${item.views})</p>
        <p class= "price">$${item.price}</p>
        </div>
    </div>
    `
}).join('')

document.querySelector("#products").innerHTML = html


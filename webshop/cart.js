
function cartRender() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let output = "";
  
    products.forEach(product => {
      output += `
              <div class="col">
                <div class="card shadow-sm">
                  <img class="card-img-products" src="${product.image}"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title><br>
                    <p class="center-align"> ${product.title}</p>
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button id="order" product="${product.id}" type="button" class="btn btn-sm btn-outline-secondary order-btn">Add to cart</button>
                      </div>
                      <div>$ ${product.price} </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
    });
  
    document.getElementById("cart").innerHTML = output;
  }
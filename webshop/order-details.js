orderDetailsRender();

function orderDetailsRender(){ 
let products = JSON.parse(localStorage.getItem('products')) || [];
    let output = "";
    let totalPrice = 0;

        products.forEach(product => {
            output += `
          <div class="col">
            <div class="card shadow-sm">
              <img class="card-img-products" src="${product.image}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title><br>
              <p class="center-align"> ${product.title}</p>
  
              <div class="card-body">
                Quantity:
                <input id="quantity" product="${product.id}" type="number" class="form-control text-center" value="${product.quantity}">
                </div>
              
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button data-product-id="${product.id}" type="button" class="btn btn-outline-danger delete-btn">Delete</button>
                  </div>
                  <div>$ ${product.price} </div>
                </div>
              </div>
            </div>
          </div>
        `;
            totalPrice += Number(product.price);
        });
        document.getElementById("totalPrice").innerHTML = "Total price: $" + totalPrice;
    } 


function orderDetailsRender() {
    const products = JSON.parse(localStorage.getItem('products'));
    let output = `
                  <div class="card row-col-4 center-align col-md-4">
                      <h3 class="card-header">Product details</h3>
  
                      <img src="${product.image}" class="d-block user-select-none" width="100%" height="auto" alt="product">
                      <rect width="100%" height="auto" fill="#868e96"></rect>
  
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item" id="product">
                              <h6>${product.title}</h6>
                          </li>
                          <li class="list-group-item" id="description">${product.description}</li>
                          <li class="list-group-item" id="category"> ${product.category}</li>
                          <li class="list-group-item" id="price"> $ ${product.price}</li>
  
                      </ul>
  
                      <div class="card-footer text-muted" id="company">
                          PIGGIES SHOP
                      </div>
                      `;

    document.getElementById("order-info").innerHTML = output;
}

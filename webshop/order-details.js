orderDetailsRender();

function orderDetailsRender() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);

    let output = ""
    products.forEach(product => {
        output += `
                  <div class="card row-col-4 center-align">
                      <h5 class="card-header">Product details</h5>
    
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item" id="product">
                              <h6>${product.title}</h6>
                          </li>
                          <li class="list-group-item" id="category"> ${product.category}</li>
                          <li class="list-group-item" id="quantity">Quantity: ${product.quantity}</li>
                          <li class="list-group-item" id="price"> $ ${product.price} / pc</li>
                          <li class="list-group-item" id="total">Total $ ${product.price * product.quantity}</li>

  
                      </ul>
                      
                      `;
    });

    document.getElementById("order-info").innerHTML = output;
    document.getElementById("totalPrice").innerHTML = "Total order amount: $ " + totalPrice;
    localStorage.clear();
}

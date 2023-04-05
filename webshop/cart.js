function cartRender() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity,0).toFixed(2);
    let output = "";

    if (products.length > 0) {
        products.forEach(product => {
            output += `
          <div class="col">
            <div class="card shadow-sm">
              <img class="card-img-products" src="${product.image}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title><br>
              <p class="center-align"> ${product.title}</p>
  
              <div class="card-body">
                Quantity:
                <input id="quantity-${product.id}" data-product-id="${product.id}" type="number" class="form-control text-center" value="${product.quantity}">
                </div>
              
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button data-product-id="${product.id}" type="button" class="btn btn-outline-danger delete-btn">Delete</button>
                  </div>
                  <div>$ ${product.price} </div>
                  <div>Total $ ${product.price * product.quantity} </div>
                </div>
              </div>
            </div>
          </div>
        `;
        });
    } else {
        output = "Your cart is empty";
    }

    document.getElementById("cartHTML").innerHTML = output;
    document.getElementById("totalPrice").innerHTML = "Total amount: $ " + totalPrice;

    const deleteButtons = Array.from(document.querySelectorAll('.delete-btn'));

    if (deleteButtons.length > 0) {
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = button.getAttribute('data-product-id');
                console.log(productId)
                let products = JSON.parse(localStorage.getItem('products')) || [];
                const updatedProducts = products.filter(product => product.id !== parseInt(productId));
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                cartRender();
            });
        });

        document.querySelectorAll('.card-body input[type="number"]').forEach(input => {
            input.addEventListener("change", function(event) {
                const productId = event.target.getAttribute('data-product-id');
                const quantity = parseInt(event.target.value);
                let products = JSON.parse(localStorage.getItem('products')) || [];
        
                const productToUpdate = products.find(product => product.id === parseInt(productId));
                if (productToUpdate) {
                    productToUpdate.quantity = quantity;
                    localStorage.setItem('products', JSON.stringify(products));
                    cartRender();
                }
            });
        });        
    }
}

document.getElementById("continueBtn").addEventListener('click', function () {
    if (localStorage !== null){
        open("order.html", "_self");
    } else{
        alert("Cart is empty!");
    }
});

document.getElementById("clearBtn").addEventListener('click', function () {
    localStorage.clear();
    cartRender();
});

cartRender();

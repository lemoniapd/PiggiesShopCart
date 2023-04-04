function cartRender() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let output = "";
    let totalPrice = 0;

    if (products.length > 0) {
        console.log(products);
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
    } else {
        output = "Your cart is empty";
    }

    document.getElementById("cartHTML").innerHTML = output;
    document.getElementById("totalPrice").innerHTML = "Total price: $ " + totalPrice;

    const deleteButtons = document.querySelectorAll('.delete-btn');

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
        document.getElementById("quantity").addEventListener("change", function(){
            //skriv kod för ändring
            //se till att koden även uppdaterar localStorage med antal
        })
    }
}

document.getElementById("continueBtn").addEventListener('click', function () {
    open("order.html", "_self")
});

document.getElementById("clearBtn").addEventListener('click', function () {
    localStorage.clear();
    cartRender();
});

cartRender();

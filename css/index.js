

// var productName = document.getElementById("productName");
// console.log(productName);

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var productList = [];


function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCat.value,
        desc: productDesc.value,

    }
    // productList.push(product)
      console.log(product);


}
var productName = document.getElementById("productName");
var producPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var productList;
var mainBtn = document.getElementById("mainBtn");
var mainIndex;


if (localStorage.getItem("List") != null) {
    productList = JSON.parse(localStorage.getItem("List"));
    console.log(productList);

    displayProduct(productList);
} else {
    productList = [];

}

function addProduct() {



    if (mainBtn.innerText == "Update") {
        //by3ml update
        productList.splice(mainIndex,1,productList[i]);
        mainBtn.innerHTML = "Add Product"

    } else {

        if (validateProductName() && validationProductPrice() && validationProductCat() == true) {



            var product = {
                name: productName.value,
                price: producPrice.value,
                category: productCat.value,
                desc: productDesc.value
            };


        }

    }
    productList.push(product);
    setToLocalStorage();
    displayProduct(productList);   //invock desplayproduct
    clearForm()  //invock clear form  //حطيتها هناعلشان يعمل  كلير للفورم بعدميضيف البرودكت عندي




}


// clear
function clearForm() {
    productName.value = "";
    producPrice.value = "";
    productCat.value = "";
    productDesc.value = "";


}



// part 10 week8 session 1//
// اديتها براميتر ليست عشان اي ليست اديهالها تعمل عليها لوب
function displayProduct(list) {
    var cartona = ` `;
    for (var i = 0; i < list.length; i++) {
        // console.log(productList[i]);

        cartona += ` <tr>
        <td>${i} </td>
        <td>${list[i].newName ? list[i].newName : list[i].name}</td>  
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td><button class="btn btn-warning" onclick="getProductData(${i})">update</button></td>
        <td><button class="btn btn-danger " onclick="deleteProduct(${i})">Delete</button></td>
    </tr>
`
    }
    document.getElementById("tableData").innerHTML = cartona;

}



function deleteProduct(index) {
    productList.splice(index, 1);
    displayProduct(productList); //عشان اعرض البردكت ليست بعد التعديل
    //localStorage.setItem("List", JSON.stringify(productList));  //عشان امسح من اللوكال ستورج
    setToLocalStorage();


}

function setToLocalStorage() {

    localStorage.setItem("List", JSON.stringify(productList));


}

function getProductData(index) {
    console.log(productList[index]);
    productName.value = productList[index].name;
    producPrice.value = productList[index].price;
    productCat.value = productList[index].category;
    productDesc.value = productList[index].desc;
    mainBtn.innerText = ("Update");
    mainIndex=index;
    console.log(mainIndex);
}

function search(searchKey) {
    var searchList = [];
    // var searchKey=document.getElementById("inpVa").value;
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchKey.toLowerCase())) {
            // productList[i].newName = productList.name.replace(searchKey, `<span class="text-danger fw-bold">${searchKey}</span>`);
            searchList.push(productList[i]);
        }


    }
    displayProduct(searchList);


}


//validation




function validateProductName() {

    var regex = /^[A-Z][a-z]{2,8}$/;

    if (regex.test(productName.value) == true) {
        document.getElementById("name-validation").classList.replace("d-block", "d-none");

        return true
    } else {
        document.getElementById("name-validation").classList.replace("d-none", "d-block");
        return false
    }

}



function validationProductPrice() {
    var regex = /^[1-9][0-9]{3}$|10000$/;

    if (regex.test(producPrice.value) == true) {

        document.getElementById("price-Validation").classList.replace("d-block", "d-none");
        return true

    } else {
        document.getElementById("price-Validation").classList.replace("d-none", "d-block");
        return false


    }
}


function validationProductCat() {
    var regex = /^Mobile|mobile|tv|TV|laptop|Laptop$/
    if (regex.test(productCat.value) == true) {
        return true

    } else {
        return false
    }

}




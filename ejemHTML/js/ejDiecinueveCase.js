function productPrice() {
    // var productName = document.getElementById('productName').value;
    var productName = parseInt(document.getElementById('productName').value);
    var price = 0;

    // switch (productName.toUpperCase()) {
    switch (true) {
        case (productName>1 && productName<3):
            price = 2000;
            break;
        case(productName==4):
            price = 1600;
            break;
        case (productName>4):
            price = 3100;
            break;
        default:
            alert("Invalid product name");
            break;
    }
    document.getElementById('result').innerHTML = Intl.NumberFormat().format(price);
}
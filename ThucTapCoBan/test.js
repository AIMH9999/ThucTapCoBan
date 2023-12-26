// TEST CODE
document.querySelector('.addProductButton').addEventListener('click', addProduct);

function addProduct() {

    var id = document.getElementById('idAddProductTb').value;
    var name = document.getElementById('nameAddProductTb').value;
    var idCategory = document.getElementById('idCategoryAddProductTb').value;
    var priceInput = document.getElementById('priceInputAddProductTb').value;
    var priceOutput = document.getElementById('priceOutputAddProductTb').innerText;

    if (!id || !name || !idCategory || !priceInput || !priceOutput) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
        return;
    }

    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            var product = data;

            product[id] = {
                name: name,
                idCategory: idCategory,
                priceInput: parseFloat(priceInput),
                priceOutput: parseFloat(priceOutput)
            };

            displayProducts();

            var jsonString = JSON.stringify(product, null, 2);
            var blob = new Blob([jsonString], { type: "application/json" });

            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'product.json';


            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
        })
        .catch(error => console.error('Lỗi:', error));
}

function displayProducts() {

}

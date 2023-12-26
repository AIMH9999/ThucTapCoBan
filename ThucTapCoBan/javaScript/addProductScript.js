var displayPriceOutput = () => {
    var priceInput = document.querySelector("#priceInputAddProductTb").value;
    priceInput = parseFloat(priceInput);
    if (!isNaN(priceInput)) {
        var priceOutput = document.querySelector("#priceOutputAddProductTb");
        priceOutput.textContent = (priceInput + priceInput * 40 / 100).toString();
    }
}

document.querySelector('.addProductButton').addEventListener('click', addProduct);

function addProduct() {
    var id = document.getElementById("idAddProductTb").value;
    var name = document.getElementById("nameAddProductTb").value;
    var idCategory = document.getElementById("idCategoryAddProductTb").value;
    var priceInput = document.getElementById("priceInputAddProductTb").value;
    var priceOutput = document.getElementById('priceOutputAddProductTb').innerText;

    if (!id || !name || !idCategory || !priceInput || !priceOutput) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
        return;
    }
    fetch('./json/product.json')
        .then(response => response.json())
        .then(data => {
            var product = data;
            if (Object.keys(product).includes(id)) {
                alert('ID sản phẩm đã tồn tại.');
                return;
            }
            var check = true;
            Object.keys(data).forEach(key => {
                var eachProduct = data[key];
                if (eachProduct.name == name) {
                    check = false;
                }
            });
            if (!check) {
                alert('Tên sản phẩm đã tồn tại.');
                return;
            }
            product[id] = {
                name: name,
                idCategory: idCategory,
                priceInput: parseFloat(priceInput),
                priceOutput: parseFloat(priceOutput)
            };
            var jsonString = JSON.stringify(product, null, 2);
            var blob = new Blob([jsonString], { type: "application/json" });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'product.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            fetch('./json/productInventory.json')
                .then(response => response.json())
                .then(data => {
                    var productInventory = data;
                    productInventory[id] = {
                        name: name,
                        idCategory: idCategory,
                        priceInput: parseFloat(priceInput),
                        quantity: 0,
                        priceOutput: 0
                    };
                    jsonString = JSON.stringify(productInventory, null, 2);
                    blob = new Blob([jsonString], { type: "application/json" });
                    a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'productInventory.json';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                })
        })

}


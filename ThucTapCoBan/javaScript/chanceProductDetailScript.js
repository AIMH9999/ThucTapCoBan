var displayDetailOutput = () => {
    fetch('./json/product.json')
        .then(response => response.json())
        .then(data => {
            var id = document.querySelector("#idChanceProductTb").value;
            var product = data[id];
            var nameTextBox = document.querySelector("#nameChanceProductTb");
            var idCategoryTextBox = document.querySelector("#idCategoryChanceProductTb");
            var priceInputTextBox = document.querySelector("#priceInputChanceProductTb");
            nameTextBox.value = product.name;
            idCategoryTextBox.value = product.idCategory;
            priceInputTextBox.value = product.priceInput;
            displayPriceOutput();
        })

}
var displayPriceOutput = () => {
    var priceInput = document.querySelector("#priceInputChanceProductTb").value;
    priceInput = parseFloat(priceInput);
    var priceOutput = document.querySelector("#priceOutputChanceProductTb");
    priceOutput.textContent = (priceInput + priceInput * 40 / 100).toString();

}

function chanceProduct() {
    var id = document.getElementById("idChanceProductTb").value;
    var name = document.getElementById("nameChanceProductTb").value;
    var idCategory = document.getElementById("idCategoryChanceProductTb").value;
    var priceInput = document.getElementById("priceInputChanceProductTb").value;
    var priceOutput = document.getElementById('priceOutputChanceProductTb').innerText;
    if (!id || !name || !idCategory || !priceInput || !priceOutput) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
        return;
    }
    fetch('./json/product.json')
        .then(response => response.json())
        .then(data => {
            var product = data;
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
        })
}
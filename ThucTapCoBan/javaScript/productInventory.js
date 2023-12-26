document.addEventListener("DOMContentLoaded", function () {
    fetch('./json/productInventory.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".tableProductInventory");
            Object.keys(data).forEach(key => {
                var productId = key;
                var product = data[key];
                var tr = document.createElement("tr");
                tr.setAttribute("class", "ProductInventoryDataCell");
                var idTd = document.createElement("td");
                idTd.setAttribute("class", "idProductInventoryDataCell");
                idTd.textContent = productId;
                tr.appendChild(idTd);
                Object.keys(product).forEach(prop => {
                    var td = document.createElement("td");
                    td.setAttribute("class", prop + "ProductInventoryDataCell");
                    td.textContent = product[prop];
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
});
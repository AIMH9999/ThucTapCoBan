document.addEventListener("DOMContentLoaded", function () {
    fetch('./json/product.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".table");
            Object.keys(data).forEach(key => {
                var productId = key;
                var product = data[key];
                var tr = document.createElement("tr");
                tr.setAttribute("class", "dataCell");
                var idTd = document.createElement("td");
                idTd.setAttribute("class", "idDataCell");
                idTd.textContent = productId;
                tr.appendChild(idTd);
                Object.keys(product).forEach(prop => {
                    var td = document.createElement("td");
                    td.setAttribute("class", prop + "DataCell");
                    td.textContent = product[prop];
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
});

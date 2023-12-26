document.addEventListener("DOMContentLoaded", function () {
    fetch('./json/AllReceiptDetail.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".allReceiptDetailTable");
            Object.keys(data).forEach(key => {
                var receiptId = key;
                var receipt = data[key];
                var tr = document.createElement("tr");
                tr.setAttribute("class", "AllReceiptDataCell");
                var idTd = document.createElement("td");
                idTd.setAttribute("class", "idAllReceiptDetailDataCell");
                idTd.textContent = receiptId;
                tr.appendChild(idTd);
                Object.keys(receipt).forEach(prop => {
                    var td = document.createElement("td");
                    td.setAttribute("class", prop + "AllReceiptDetailDataCell");
                    td.textContent = receipt[prop];
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
});
var isPopupShown = false;
document.addEventListener("DOMContentLoaded", function () {
    fetch('./json/receipt.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".receiptTable");
            Object.keys(data).forEach(key => {
                var productId = key;
                var product = data[key];
                var tr = document.createElement("tr");
                tr.setAttribute("class", "ReceiptDataCell");
                var idTd = document.createElement("td");
                idTd.setAttribute("class", "idReceiptDataCell");
                idTd.setAttribute("onclick", "showPopupReceiptDetail(\"" + key + "\")");
                idTd.textContent = productId;
                tr.appendChild(idTd);
                Object.keys(product).forEach(prop => {
                    var td = document.createElement("td");
                    td.setAttribute("class", prop + "ReceiptDataCell");
                    td.textContent = product[prop];
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
});

function showPopupReceiptDetail(content) {
    if (isPopupShown) {
        return;
    }
    isPopupShown = true
    var allReceiptButton = document.querySelector(".allReceiptButton");
    allReceiptButton.style.display = "none";
    fetch('./json/AllReceiptDetail.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".allReceiptDetailTable");
            Object.keys(data).forEach(key => {
                if (data[key].idReceipt === content) {
                    document.querySelector(".headAllReceiptDetailLabel").innerHTML = content;
                    var receiptId = key;
                    var receipt = data[key];
                    var tr = document.createElement("tr");
                    tr.setAttribute("class", "dataCell");
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
                }
            });
            var popup = document.getElementById('popupReceiptDetail');
            popup.style.display = 'block';

        })
}
function showPopupSearchReceipt() {
    isPopupShown = true
    var allReceiptButton = document.querySelector(".allReceiptButton");
    allReceiptButton.style.display = "none";
    var popup = document.getElementById('popupSearchReceipt');
    popup.style.display = 'block';

}

function displaySearchReceipt() {

    var searchReceiptTb = document.querySelector("#searchReceiptTb").value;


    fetch('./json/receipt.json')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(key => {
                if (data[key].createdAt.includes(searchReceiptTb) && searchReceiptTb.length >= 10) {
                    var id = key;
                    document.querySelector(".headAllReceiptDetailLabel").innerHTML = searchReceiptTb;
                    fetch('./json/AllReceiptDetail.json')
                        .then(response => response.json())
                        .then(data => {
                            var table = document.querySelector(".allReceiptDetailTable");
                            Object.keys(data).forEach(key => {
                                if (data[key].idReceipt == id) {
                                    var popup = document.getElementById('popupSearchReceipt');
                                    popup.style.display = 'none';
                                    var popup = document.getElementById('popupReceiptDetail');
                                    popup.style.display = 'block';
                                    var receiptId = key;
                                    var receipt = data[key];
                                    var tr = document.createElement("tr");
                                    tr.setAttribute("class", "dataCell");
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
                                }
                            });
                        })
                }
            });
        })
    fetch('./json/AllReceiptDetail.json')
        .then(response => response.json())
        .then(data => {
            var table = document.querySelector(".allReceiptDetailTable");
            Object.keys(data).forEach(key => {
                if (data[key].idReceipt === searchReceiptTb) {
                    document.querySelector(".headAllReceiptDetailLabel").innerHTML = searchReceiptTb;
                    var popup = document.getElementById('popupSearchReceipt');
                    popup.style.display = 'none';
                    var popup = document.getElementById('popupReceiptDetail');
                    popup.style.display = 'block';
                    var receiptId = key;
                    var receipt = data[key];
                    var tr = document.createElement("tr");
                    tr.setAttribute("class", "dataCell");
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
                }
            });
        })
}
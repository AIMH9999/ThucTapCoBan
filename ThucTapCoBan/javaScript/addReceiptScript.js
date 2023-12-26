var displayCreatedAt = () => {
    var idAddReceipt = document.querySelector("#idAddReceiptTb").value;
    var createdAt = document.querySelector("#createAtAddReceiptTb");
    if (!isNaN(idAddReceipt)) {
        let timeCreate = new Date()
        createdAt.textContent = timeCreate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).replace(", ", " ")
    }
}
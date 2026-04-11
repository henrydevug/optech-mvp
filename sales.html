<script>
let stock = JSON.parse(localStorage.getItem("stock")) || [];
let sales = JSON.parse(localStorage.getItem("sales")) || [];

// =====================
// 💰 RECORD SALE
// =====================
function addSale(productName, qty, price) {
  qty = Number(qty);
  price = Number(price);

  let item = stock.find(p => p.name === productName);

  if (!item) {
    alert("Product not found in stock!");
    return;
  }

  if (item.quantity < qty) {
    alert("Not enough stock!");
    return;
  }

  const total = qty * price;
  const profit = (price - item.buyingPrice) * qty;

  item.quantity -= qty;

  const receipt = {
    product: productName,
    quantity: qty,
    sellingPrice: price,
    total,
    profit,
    date: new Date().toLocaleDateString()
  };

  sales.push(receipt);

  localStorage.setItem("stock", JSON.stringify(stock));
  localStorage.setItem("sales", JSON.stringify(sales));
  localStorage.setItem("lastReceipt", JSON.stringify(receipt));

  document.getElementById("saleQty").value = "";
  document.getElementById("salePrice").value = "";

  loadProducts();
  loadTotals();
  loadReceipt();
}

// =====================
// 📊 TODAY TOTALS
// =====================
function loadTotals() {
  const sales = JSON.parse(localStorage.getItem("sales")) || [];
  const today = new Date().toLocaleDateString();

  let totalSales = 0;
  let totalProfit = 0;

  sales.forEach(s => {
    if (s.date === today) {
      totalSales += s.total;
      totalProfit += s.profit;
    }
  });

  document.getElementById("todaySales").innerText =
    `Sales: UGX ${totalSales}`;

  document.getElementById("todayProfit").innerText =
    `Profit: UGX ${totalProfit}`;
}

// =====================
// 🧾 LAST RECEIPT
// =====================
function loadReceipt() {
  const receipt = JSON.parse(localStorage.getItem("lastReceipt"));
  if (!receipt) return;

  document.getElementById("receiptBox").innerHTML = `
    <div class="receipt">
      <p><strong>Product:</strong> ${receipt.product}</p>
      <p><strong>Qty:</strong> ${receipt.quantity}</p>
      <p><strong>Price:</strong> UGX ${receipt.sellingPrice}</p>
      <p><strong>Total:</strong> UGX ${receipt.total}</p>
      <p><strong>Profit:</strong> UGX ${receipt.profit}</p>
      <p><strong>Date:</strong> ${receipt.date}</p>
    </div>
  `;
}

// =====================
// 🚀 INIT
// =====================
loadProducts();
loadTotals();
loadReceipt();
</script>

let sales = JSON.parse(localStorage.getItem("sales")) || [];
let stock = JSON.parse(localStorage.getItem("stock")) || [];

// =====================
// 💰 ADD SALE
// =====================
function addSale() {
  let customer = prompt("Customer name:");
  let item = prompt("Item sold:");
  let amount = prompt("Amount (UGX):");

  if (!customer || !item || !amount) return;

  amount = Number(amount);

  sales.push({
    id: "TXN-" + Date.now(),
    customer,
    item,
    amount,
    date: new Date().toISOString().split("T")[0]
  });

  save();
  render();
}

// =====================
// 📦 ADD STOCK
// =====================
function addStock() {
  let name = prompt("Item name:");
  let qty = prompt("Quantity:");

  if (!name || !qty) return;

  stock.push({
    name,
    qty: Number(qty)
  });

  save();
  render();
}

// =====================
// 💾 SAVE DATA
// =====================
function save() {
  localStorage.setItem("sales", JSON.stringify(sales));
  localStorage.setItem("stock", JSON.stringify(stock));
}

// =====================
// 📊 TOTAL SALES
// =====================
function totalSales() {
  return sales.reduce((sum, s) => sum + s.amount, 0);
}

// =====================
// 📅 TODAY SALES
// =====================
function todaySales() {
  const today = new Date().toISOString().split("T")[0];

  return sales
    .filter(s => s.date === today)
    .reduce((sum, s) => sum + s.amount, 0);
}

// =====================
// 📈 TODAY PROFIT
// MVP margin estimate 30%
// =====================
function todayProfit() {
  return todaySales() * 0.3;
}

// =====================
// ⚠ LOW STOCK ALERTS
// =====================
function lowStockCount() {
  return stock.filter(s => s.qty <= 5).length;
}

// =====================
// 🧠 RENDER ALL PAGES
// =====================
function render() {

  // DASHBOARD
  let salesCard = document.getElementById("today-sales");
  let profitCard = document.getElementById("today-profit");
  let lowStockCard = document.getElementById("low-stock-alerts");

  if (salesCard) {
    salesCard.innerText = "UGX " + todaySales().toLocaleString();
  }

  if (profitCard) {
    profitCard.innerText = "UGX " + todayProfit().toLocaleString();
  }

  if (lowStockCard) {
    lowStockCard.innerText = lowStockCount() + " Items";
  }

  // SALES PAGE
  let salesList = document.getElementById("sales-list");
  if (salesList) {
    salesList.innerHTML = "";

    sales.forEach(s => {
      let div = document.createElement("div");
      div.className = "row";
      div.innerHTML = `
        <span>${s.id}</span>
        <span>${s.customer}</span>
        <span>${s.item}</span>
        <span>UGX ${s.amount.toLocaleString()}</span>
      `;
      salesList.appendChild(div);
    });
  }

  // STOCK PAGE
  let stockList = document.getElementById("stock-list");
  if (stockList) {
    stockList.innerHTML = "";

    stock.forEach(s => {
      let div = document.createElement("div");
      div.className = "row";

      let status = s.qty <= 5 ? "⚠ LOW" : "OK";

      div.innerHTML = `
        <span>${s.name}</span>
        <span>${s.qty}</span>
        <span>${status}</span>
      `;
      stockList.appendChild(div);
    });
  }

  // REPORTS
  let report = document.getElementById("report-sales");
  if (report) {
    report.innerText = "UGX " + totalSales().toLocaleString();
  }
}

// INIT
window.onload = render;

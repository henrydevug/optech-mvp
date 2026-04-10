// ===============================
// OP-TECH BUSINESS SYSTEM CORE
// ===============================

// Load data or create empty system
let sales = JSON.parse(localStorage.getItem("sales")) || [];
let stock = JSON.parse(localStorage.getItem("stock")) || [
  { name: "Default Item", qty: 50 }
];

// ===============================
// 💰 ADD SALE
// ===============================
function addSale() {
  const name = prompt("Customer name:");
  const item = prompt("Item sold:");
  const amount = prompt("Amount (UGX):");

  if (!name || !item || !amount) return;

  const sale = {
    id: "TXN-" + Date.now(),
    name,
    item,
    amount: Number(amount),
    date: new Date().toLocaleString()
  };

  sales.push(sale);
  localStorage.setItem("sales", JSON.stringify(sales));

  alert("Sale added successfully ✅");
  updateDashboard();
}

// ===============================
// 📦 UPDATE STOCK (reduce item)
// ===============================
function updateStock(itemName, qtySold) {
  stock = stock.map(item => {
    if (item.name === itemName) {
      return { ...item, qty: item.qty - qtySold };
    }
    return item;
  });

  localStorage.setItem("stock", JSON.stringify(stock));
}

// ===============================
// ➕ ADD STOCK ITEM
// ===============================
function addStockItem() {
  const name = prompt("Item name:");
  const qty = prompt("Quantity:");

  if (!name || !qty) return;

  stock.push({
    name,
    qty: Number(qty)
  });

  localStorage.setItem("stock", JSON.stringify(stock));
  alert("Stock added 📦");
  updateDashboard();
}

// ===============================
// 📊 CALCULATE TOTAL SALES
// ===============================
function getTotalSales() {
  return sales.reduce((sum, s) => sum + s.amount, 0);
}

// ===============================
// 🧠 DASHBOARD UPDATER
// ===============================
function updateDashboard() {
  const balanceEl = document.getElementById("balance");

  if (balanceEl) {
    balanceEl.innerText = "UGX " + getTotalSales().toLocaleString();
  }

  renderSales();
  renderStock();
}

// ===============================
// 💰 RENDER SALES TABLE
// ===============================
function renderSales() {
  const container = document.getElementById("transaction-list");
  if (!container) return;

  container.innerHTML = "";

  sales.forEach(s => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span>${s.id}</span>
      <span>${s.name}</span>
      <span>UGX ${s.amount}</span>
      <span>${s.item}</span>
      <span>OK</span>
    `;
    container.appendChild(row);
  });
}

// ===============================
// 📦 RENDER STOCK
// ===============================
function renderStock() {
  const container = document.getElementById("stock-list");
  if (!container) return;

  container.innerHTML = "";

  stock.forEach(i => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span>${i.name}</span>
      <span>${i.qty}</span>
      <span>${i.qty < 10 ? "LOW ⚠️" : "OK"}</span>
    `;
    container.appendChild(row);
  });
}

// ===============================
// 🚀 INIT SYSTEM
// ===============================
window.onload = function () {
  updateDashboard();
};

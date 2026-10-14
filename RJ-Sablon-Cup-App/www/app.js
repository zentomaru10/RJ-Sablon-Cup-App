const $ = (s) => document.querySelector(s);
const rp = (n) =>
  (n < 0 ? "-" : "") + "Rp" + Math.abs(Math.round(n)).toLocaleString("id-ID");
const dt = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
};
const S = {
  tab: "home",
  page: null,
  filter: "Semua",
  q: "",
  fin: "in",
  period: "Bulan",
  logged: false,
  theme: "light",
  bonus: {
    min: 2,
    tiers: [
      [5000000, 5],
      [2500000, 3],
      [1000000, 2],
    ],
  },
  bper: "30",
  auth: { email: "rj@sabloncup.id", pass: "12345678" },
  biz: { name: "RJ Sablon Cup", owner: "RJ", wa: "", addr: "" },
  cat: {
    in: ["Pembayaran pesanan", "Lainnya"],
    out: ["Pembelian cup", "Pembelian tinta", "Biaya operasional", "Lainnya"],
    mat: ["Cup", "Tinta", "Lainnya"],
    unit: ["pcs", "botol", "lusin", "pak"],
  },
  ck: "in",
  sheet: null,
  orders: [
    {
      id: "RJ-001",
      d: dt(2),
      cust: "Kedai Berkah",
      qty: 2000,
      size: "16 oz",
      price: 850,
      paid: 500000,
      status: "Produksi",
      hpp: { Cup: 900000, Tinta: 150000, Produksi: 200000, Lain: 50000 },
    },
    {
      id: "RJ-002",
      d: dt(5),
      cust: "Warung Maju",
      qty: 1000,
      size: "14 oz",
      price: 1500,
      paid: 0,
      status: "Diproses",
      hpp: { Cup: 500000, Tinta: 90000, Produksi: 120000, Lain: 20000 },
    },
    {
      id: "RJ-003",
      d: dt(9),
      cust: "Teh Ndandap",
      qty: 1000,
      size: "12 oz",
      price: 900,
      paid: 900000,
      status: "Selesai",
      hpp: { Cup: 420000, Tinta: 80000, Produksi: 100000, Lain: 0 },
    },
    {
      id: "RJ-004",
      d: dt(14),
      cust: "Es Teh Mbak Ayu",
      qty: 3000,
      size: "16 oz",
      price: 800,
      paid: 1200000,
      status: "Baru",
      hpp: { Cup: 1350000, Tinta: 200000, Produksi: 250000, Lain: 30000 },
    },
    {
      id: "RJ-005",
      d: dt(20),
      cust: "Kedai Berkah",
      qty: 3000,
      size: "16 oz",
      price: 850,
      paid: 2550000,
      status: "Selesai",
      hpp: { Cup: 1350000, Tinta: 200000, Produksi: 250000, Lain: 30000 },
    },
    {
      id: "RJ-006",
      d: dt(25),
      cust: "Warung Maju",
      qty: 2000,
      size: "14 oz",
      price: 1200,
      paid: 2400000,
      status: "Selesai",
      hpp: { Cup: 1000000, Tinta: 150000, Produksi: 200000, Lain: 0 },
    },
    {
      id: "RJ-007",
      d: dt(12),
      cust: "Teh Ndandap",
      qty: 2000,
      size: "12 oz",
      price: 900,
      paid: 1800000,
      status: "Selesai",
      hpp: { Cup: 840000, Tinta: 150000, Produksi: 200000, Lain: 0 },
    },
  ],
  tx: [
    { t: "in", n: "DP Kedai Berkah", v: 500000, d: "02 Okt" },
    { t: "in", n: "Pelunasan RJ-003", v: 1200000, d: "01 Okt" },
    { t: "in", n: "Order Kopi Tuku", v: 3800000, d: "28 Sep" },
    { t: "in", n: "Order Boba Kita", v: 4500000, d: "20 Sep" },
    { t: "in", n: "Order Dapur Mama", v: 5500000, d: "12 Sep" },
    { t: "out", n: "Pembelian Cup 16 oz", v: 800000, d: "02 Okt" },
    { t: "out", n: "Pembelian Tinta", v: 150000, d: "01 Okt" },
    { t: "out", n: "Biaya Operasional", v: 250000, d: "30 Sep" },
    { t: "out", n: "Pembelian Cup 14 oz", v: 2100000, d: "18 Sep" },
    { t: "out", n: "Listrik & Sewa", v: 3450000, d: "05 Sep" },
  ],
  stock: [
    { n: "Cup 12 oz", q: 5000, u: "pcs", min: 1000 },
    { n: "Cup 14 oz", q: 3000, u: "pcs", min: 1000 },
    { n: "Cup 16 oz", q: 7500, u: "pcs", min: 1000 },
    { n: "Tinta Hitam", q: 5, u: "botol", min: 2 },
    { n: "Tinta Putih", q: 3, u: "botol", min: 2 },
  ],
  custs: [
    { n: "Kedai Berkah", wa: "0812-3456-7001" },
    { n: "Warung Maju", wa: "0812-3456-7002" },
    { n: "Teh Ndandap", wa: "0812-3456-7003" },
    { n: "Es Teh Mbak Ayu", wa: "0812-3456-7004" },
  ],
};
const KEY = "rjsc.v1",
  PERS = [
    "orders",
    "tx",
    "stock",
    "custs",
    "cat",
    "biz",
    "auth",
    "logged",
    "theme",
    "bonus",
    "bper",
  ];
const dump = () => {
  const d = {};
  PERS.forEach((k) => (d[k] = S[k]));
  return d;
};
const DEMO = JSON.stringify({
  orders: S.orders,
  tx: S.tx,
  stock: S.stock,
  custs: S.custs,
});
const EMPTY = () => ({
  orders: [],
  tx: [],
  custs: [],
  stock: S.stock.map((x) => ({ ...x, q: 0 })),
});
let d0 = null;
try {
  d0 = JSON.parse(localStorage.getItem(KEY));
} catch (e) {}
if (d0) PERS.forEach((k) => k in d0 && (S[k] = d0[k]));
else Object.assign(S, EMPTY());
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(dump()));
  } catch (e) {}
}
const esc = (t) =>
  String(t)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
const P = {
  edit: "M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4",
  trash: "M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",
  gift: "M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  home: "M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  orders: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  fin: "M3 7a2 2 0 0 1 2-2h13v4M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-1zM16 14h2",
  report: "M5 20V10M12 20V4M19 20v-7",
  plus: "M12 5v14M5 12h14",
  in: "M17 7L7 17M7 9v8h8",
  out: "M7 17L17 7M9 7h8v8",
  box: "M3 7l9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10",
  users:
    "M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20 20v-1a4 4 0 0 0-3-3.9M15 5.2a3 3 0 0 1 0 5.6",
  bell: "M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4",
  sliders: "M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1M15 4v4M7 10v4M17 16v4",
  dollar: "M12 3v18M16 7.5H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8",
  back: "M15 5l-7 7 7 7",
  cup: "M6 4h12l-1.5 16h-9zM6.5 9h11",
};
const ic = (n, z = 22) =>
  `<svg width="${z}" height="${z}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;
const Q = [
  ["plus", "Pesanan", "addOrder()"],
  ["in", "Pemasukan", "addTx('in')"],
  ["out", "Pengeluaran", "addTx('out')"],
  ["box", "Stok", "go('home','stok')"],
  ["dollar", "Piutang", "go('home','piutang')"],
  ["users", "Pelanggan", "go('home','cust')"],
  ["report", "Laporan", "go('report')"],
  ["gift", "Bonus", "go('home','bonus')"],
];
const tot = (o) => o.qty * o.price,
  sisa = (o) => tot(o) - o.paid,
  hpp = (o) => Object.values(o.hpp).reduce((a, b) => a + b, 0);
const sumTx = (t) => S.tx.filter((x) => x.t === t).reduce((a, b) => a + b.v, 0);
const piutang = () => S.orders.reduce((a, o) => a + sisa(o), 0);
const badge = (s) => `<span class="badge s-${s.split(" ")[0]}">${s}</span>`;
const payBadge = (o) => (sisa(o) > 0 ? badge("Belum Lunas") : badge("Lunas"));
function toast(m) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = m;
  $("#app").append(t);
  setTimeout(() => t.remove(), 2000);
}
function go(t, p = null) {
  S.tab = t;
  S.page = p;
  render();
}
function open(h) {
  S.sheet = h;
  render();
}
function close() {
  S.sheet = null;
  render();
}

function login() {
  return `<div class="login"><div class="logo">${ic("cup", 30)}</div><h1>${esc(S.biz.name)}</h1><p class="mut" style="color:rgba(255,255,255,.8);margin-bottom:28px">Catat pesanan, uang masuk, dan stok cup dari satu aplikasi.</p>
<label style="color:rgba(255,255,255,.8)">Email</label><input id="em" value="${esc(S.auth.email)}" aria-label="Email"><label style="color:rgba(255,255,255,.8)">Kata sandi</label><input id="pw" type="password" placeholder="Kata sandi awal: 12345678" aria-label="Kata sandi">
<button class="btn" onclick="doLogin()">Masuk</button></div>`;
}

function doLogin() {
  if (
    $("#em").value.trim() === S.auth.email &&
    $("#pw").value === S.auth.pass
  ) {
    S.logged = true;
    render();
  } else toast("Email atau kata sandi salah");
}
function home() {
  const aktif = S.orders.filter((o) => o.status !== "Selesai").length,
    bl = S.orders.filter((o) => sisa(o) > 0).length,
    i = sumTx("in"),
    o = sumTx("out");
  const low = S.stock.filter((s) => s.q <= s.min);
  return `<div class="top"><div><p class="mut">Selamat datang kembali</p><h1>Halo, ${esc(S.biz.owner)}</h1></div><div style="display:flex;gap:8px"><button class="av tg" onclick="toggleTheme(event)" aria-label="Ganti tema">${ic(isDark() ? "sun" : "moon", 20)}</button><button class="av" onclick="go('home','set')" aria-label="Pengaturan">${esc((S.biz.owner || "R")[0])}</button></div></div>
<div class="cols"><div><div class="hero"><p class="mut">Saldo saat ini</p><p class="big">${rp(i - o)}</p><div class="row"><div class="pill"><span class="mut">Pemasukan</span><b>${rp(i)}</b></div><div class="pill"><span class="mut">Pengeluaran</span><b>${rp(o)}</b></div></div></div>
<div class="grid"><div class="card"><span class="mut">Laba</span><b class="n" style="color:var(--ink)">${rp(i - o)}</b></div><button class="card" style="text-align:left" onclick="go('home','piutang')"><span class="mut">Total piutang</span><b class="n" style="color:var(--ink)">${rp(piutang())}</b></button>
<button class="card" style="text-align:left" onclick="go('orders')"><span class="mut">Pesanan aktif</span><b class="n">${aktif}</b></button><button class="card" style="text-align:left" onclick="S.filter='Belum Lunas';go('orders')"><span class="mut">Belum lunas</span><b class="n">${bl}</b></button></div>
<h2>Pesanan terbaru <a href="#" onclick="go('orders');return false">Lihat semua</a></h2>${S.orders.slice(0, 3).map(orderItem).join("") || '<p class="mut" style="text-align:center;padding:18px">Belum ada pesanan. Tekan menu Pesanan untuk mulai.</p>'}</div><div><h2>Menu</h2><div class="qa card" style="padding:16px 6px;row-gap:16px">${Q.map(([i, t, f]) => `<button onclick="${f}"><i>${ic(i)}</i>${t}</button>`).join("")}</div>
${low.length ? `<h2>Perlu perhatian</h2>` + low.map((s) => `<div class="item"><span class="ic">${ic("bell", 18)}</span><div class="l"><b>Stok menipis</b><span class="mut">${s.n} tersisa ${s.q.toLocaleString("id-ID")} ${s.u}</span></div></div>`).join("") : ""}
${S.orders
  .filter((o) => sisa(o) > 0)
  .slice(0, 1)
  .map(
    (o) =>
      `<div class="item"><span class="ic">${ic("bell", 18)}</span><div class="l"><b>Pembayaran belum lunas</b><span class="mut">${o.cust} masih punya sisa ${rp(sisa(o))}</span></div></div>`,
  )
  .join("")}
</div></div>`;
}

function orderItem(o) {
  return `<button class="item" onclick="detail('${o.id}')"><div class="l"><b>${o.cust}</b><span class="mut">${o.id} · ${o.qty.toLocaleString("id-ID")} cup ${o.size}</span></div><div class="r">${rp(tot(o))}<br>${badge(o.status)}</div></button>`;
}

function orders() {
  const F = ["Semua", "Baru", "Diproses", "Produksi", "Selesai", "Belum Lunas"];
  const l = S.orders.filter(
    (o) =>
      (S.filter === "Semua" ||
        (S.filter === "Belum Lunas" ? sisa(o) > 0 : o.status === S.filter)) &&
      (o.cust + o.id).toLowerCase().includes(S.q.toLowerCase()),
  );
  return `<div class="top"><h1>Pesanan</h1></div><input placeholder="Cari pesanan atau pelanggan…" value="${S.q}" oninput="S.q=this.value;keep(this)" aria-label="Cari" style="margin-top:0">
<div class="chips">${F.map((f) => `<button class="${f === S.filter ? "on" : ""}" onclick="S.filter='${f}';render()">${f}</button>`).join("")}</div>
${L(l.map(orderItem).join("") || '<p class="mut" style="text-align:center;padding:30px">Belum ada pesanan di filter ini. Tekan + untuk menambah.</p>')}
<button class="fab" onclick="addOrder()" aria-label="Tambah pesanan">+</button>`;
}
function keep(el) {
  render();
  const n = $("input[aria-label=Cari]");
  n.focus();
  n.setSelectionRange(99, 99);
}

function detail(id) {
  const o = S.orders.find((x) => x.id === id),
    h = hpp(o);
  open(`<h1>${o.id}</h1><p class="mut" style="margin-bottom:12px">${o.cust} · ${o.qty.toLocaleString("id-ID")} cup ${o.size}</p>
<div class="kv"><span>Total</span><b>${rp(tot(o))}</b></div><div class="kv"><span>Pembayaran</span><b>${rp(o.paid)}</b></div><div class="kv"><span>Sisa</span><b style="color:var(--ink)">${rp(sisa(o))}</b></div>
<div class="bar"><i style="width:${(o.paid / tot(o)) * 100}%"></i></div>
<div style="margin:12px 0">${badge(o.status)} ${payBadge(o)}</div>
<h2 style="margin-top:10px">Biaya & keuntungan</h2>${Object.entries(o.hpp)
    .map(
      ([k, v]) =>
        `<div class="kv"><span>Biaya ${k.toLowerCase()}</span><span>${rp(v)}</span></div>`,
    )
    .join("")}
<div class="kv"><span>Total HPP</span><b>${rp(h)}</b></div><div class="kv t"><span>Estimasi laba</span><span style="color:var(--ink)">${rp(tot(o) - h)}</span></div>
<label>Ubah status</label><select onchange="setStatus('${o.id}',this.value)">${["Baru", "Menunggu DP", "Diproses", "Produksi", "Selesai"].map((s) => `<option ${s.startsWith(o.status) ? "selected" : ""}>${s}</option>`).join("")}</select>
${sisa(o) > 0 ? `<label>Tambah pembayaran (Rp)</label><input id="pay" type="number" inputmode="numeric" placeholder="${sisa(o)}"><button class="btn" onclick="pay('${o.id}')">Simpan pembayaran</button>` : ""}<div style="display:flex;gap:8px;margin-top:14px"><button class="btn alt" onclick="addOrder('${o.id}')">${ic("edit", 18)} Edit</button><button class="btn alt" onclick="delOrder('${o.id}')">${ic("trash", 18)} Hapus</button></div>`);
}
function setStatus(id, s) {
  S.orders.find((o) => o.id === id).status =
    s.split(" ")[0] === "Menunggu" ? "Menunggu DP" : s;
  toast("Status diperbarui");
  render();
  detail(id);
}
function pay(id) {
  const o = S.orders.find((x) => x.id === id),
    v = Math.min(+$("#pay").value || 0, sisa(o));
  if (v <= 0) return toast("Isi nominal pembayaran");
  o.paid += v;
  S.tx.unshift({ t: "in", n: `Pembayaran ${id}`, v, d: "Hari ini" });
  toast("Pembayaran tersimpan");
  close();
}

function addOrder(id) {
  const o = id ? S.orders.find((x) => x.id === id) : null;
  open(`<h1 style="margin-bottom:12px">${o ? "Edit pesanan " + o.id : "Tambah pesanan"}</h1>
<label>Nama pelanggan</label><input id="c" list="cl" value="${o ? esc(o.cust) : ""}" placeholder="Mis. Kedai Berkah"><datalist id="cl">${S.custs.map((c) => `<option value="${esc(c.n)}">`).join("")}</datalist>
<label>Ukuran cup</label><select id="z">${["12 oz", "14 oz", "16 oz"].map((z) => `<option ${z === (o ? o.size : "16 oz") ? "selected" : ""}>${z}</option>`).join("")}</select>
<label>Jumlah</label><input id="q" type="number" inputmode="numeric" value="${o ? o.qty : 2000}" oninput="calc()"><label>Harga per cup (Rp)</label><input id="p" type="number" inputmode="numeric" value="${o ? o.price : 850}" oninput="calc()">
<div class="card" style="margin-bottom:12px"><span class="mut">Total otomatis</span><b class="n" id="tt">${rp(o ? tot(o) : 1700000)}</b></div>
<label>${o ? "Total dibayar (Rp)" : "DP (Rp)"}</label><input id="dp" type="number" inputmode="numeric" value="${o ? o.paid : 500000}">
<label>Tanggal</label><input id="dt" type="date" value="${o ? o.d || td() : td()}">
<button class="btn" onclick="saveOrder('${id || ""}')">${o ? "Simpan perubahan" : "Simpan pesanan"}</button>`);
}
const td = () => new Date().toISOString().slice(0, 10);
function calc() {
  $("#tt").textContent = rp($("#q").value * $("#p").value);
}
function saveOrder(id) {
  const c = $("#c").value.trim();
  if (!c) return toast("Isi nama pelanggan");
  const q = +$("#q").value,
    p = +$("#p").value,
    dp = +$("#dp").value || 0,
    d = $("#dt").value || td();
  if (!q || !p) return toast("Jumlah dan harga wajib diisi");
  if (!S.custs.find((x) => x.n === c)) S.custs.push({ n: c, wa: "-" });
  if (id) {
    const o = S.orders.find((x) => x.id === id);
    Object.assign(o, {
      cust: c,
      size: $("#z").value,
      qty: q,
      price: p,
      paid: Math.min(dp, q * p),
      d,
    });
    toast("Pesanan diperbarui");
    S.sheet = null;
    render();
    return;
  }
  const n = Math.max(0, ...S.orders.map((o) => +o.id.slice(3))) + 1,
    nid = "RJ-" + String(n).padStart(3, "0");
  S.orders.unshift({
    id: nid,
    d,
    cust: c,
    qty: q,
    size: $("#z").value,
    price: p,
    paid: dp,
    status: dp ? "Diproses" : "Baru",
    hpp: { Cup: q * 450, Tinta: q * 75, Produksi: q * 100, Lain: 0 },
  });
  if (dp) S.tx.unshift({ t: "in", n: `DP ${c}`, v: dp, d: "Hari ini" });
  toast(nid + " tersimpan");
  S.sheet = null;
  go("orders");
}
function delOrder(id) {
  if (delOrder.k !== id) {
    delOrder.k = id;
    return toast("Tekan Hapus sekali lagi");
  }
  delOrder.k = null;
  S.orders = S.orders.filter((o) => o.id !== id);
  S.sheet = null;
  toast("Pesanan dihapus");
  render();
}
function finance() {
  const l = S.tx.filter((x) => x.t === S.fin);
  return `<div class="top"><h1>Keuangan</h1></div><div class="seg"><button class="${S.fin === "in" ? "on" : ""}" onclick="S.fin='in';render()">Pemasukan</button><button class="${S.fin === "out" ? "on" : ""}" onclick="S.fin='out';render()">Pengeluaran</button></div>
<div class="card" style="margin-bottom:14px"><span class="mut">Total ${S.fin === "in" ? "pemasukan" : "pengeluaran"}</span><b class="n" style="color:var(--ink)">${rp(sumTx(S.fin))}</b></div>
${L(l.map((x) => `<button class="item" onclick="txForm(${S.tx.indexOf(x)})"><div class="l"><b>${esc(x.n)}</b><span class="mut">${x.d}</span></div><div class="r" style="color:var(--ink)">${x.t === "in" ? "+" : "-"}${rp(x.v).replace("-", "")}</div></button>`).join(""))}
<button class="fab" onclick="addTx('${S.fin}')" aria-label="Tambah transaksi">+</button>`;
}
function addTx(t) {
  const cats = S.cat[t];
  open(`<h1 style="margin-bottom:12px">Tambah ${t === "in" ? "pemasukan" : "pengeluaran"}</h1><label>Nominal (Rp)</label><input id="v" type="number" inputmode="numeric" placeholder="0">
<label>Kategori</label><select id="k">${cats.map((c) => `<option>${c}</option>`).join("")}</select>
${t === "in" ? `<label>Pesanan (opsional)</label><select id="o"><option value="">Tanpa pesanan</option>${S.orders.map((o) => `<option>${o.id}</option>`).join("")}</select>` : ""}
<label>Metode</label><select><option>Tunai</option><option>Transfer</option><option>QRIS</option></select><button class="btn" onclick="saveTx('${t}')">Simpan</button>`);
}
function saveTx(t) {
  const v = +$("#v").value;
  if (!v) return toast("Isi nominal");
  const k = $("#k").value,
    o = $("#o") && $("#o").value;
  S.tx.unshift({ t, n: o ? `Pembayaran ${o}` : k, v, d: "Hari ini" });
  if (o) {
    const x = S.orders.find((a) => a.id === o);
    x.paid += Math.min(v, sisa(x));
  }
  toast("Tersimpan");
  S.sheet = null;
  go("fin");
}

function report() {
  const P =
    {
      Hari: [[1, 0.2]],
      Minggu: [
        [2.1, 0.8],
        [3.4, 1.1],
        [2.6, 1.5],
        [4.2, 0.9],
      ],
      Bulan: [
        [3.8, 1.2],
        [4.5, 2.1],
        [5.5, 2.5],
        [1.7, 0.95],
      ],
      Tahun: [
        [18, 7],
        [22, 9],
        [26, 11],
        [31, 12],
      ],
    }[S.period] || [];
  const k =
      S.period === "Bulan"
        ? 1
        : S.period === "Tahun"
          ? 6
          : S.period === "Minggu"
            ? 0.5
            : 0.1,
    i = sumTx("in") * k,
    o = sumTx("out") * k,
    mx = Math.max(...P.flat());
  return `<div class="top"><h1>Laporan</h1></div><div class="chips">${["Hari", "Minggu", "Bulan", "Tahun"].map((p) => `<button class="${p === S.period ? "on" : ""}" onclick="S.period='${p}';render()">${p === "Hari" ? "Hari ini" : p + " ini"}</button>`).join("")}</div>
<div class="card"><b>Pemasukan vs pengeluaran</b><div class="chart">${P.map((d, j) => `<div><div class="pair"><i style="height:${(d[0] / mx) * 100}%;background:var(--c)"></i><i style="height:${(d[1] / mx) * 100}%;background:var(--m)"></i></div><span class="mut">${S.period === "Tahun" ? "Q" + (j + 1) : "M" + (j + 1)}</span></div>`).join("")}</div>
<p class="mut" style="margin-top:10px"><span class="dot" style="background:var(--c)"></span>Pemasukan <span class="dot" style="background:var(--m);margin-left:10px"></span>Pengeluaran</p></div>
<div class="two"><div><h2>Laporan keuangan</h2><div class="card"><div class="kv"><span>Pemasukan</span><b>${rp(i)}</b></div><div class="kv"><span>Pengeluaran</span><b>${rp(o)}</b></div><div class="kv t"><span>Laba</span><span style="color:var(--ink)">${rp(i - o)}</span></div></div></div><div><h2>Laporan pesanan</h2><div class="card"><div class="kv"><span>Total pesanan</span><b>${Math.round(32 * k) || 3}</b></div><div class="kv"><span>Selesai</span><b>${Math.round(24 * k) || 2}</b></div><div class="kv"><span>Produksi</span><b>${Math.round(5 * k) || 1}</b></div><div class="kv"><span>Belum diproses</span><b>${Math.round(3 * k) || 0}</b></div></div></div></div>`;
}

function backTop(t, to) {
  return `<div class="top"><div style="display:flex;align-items:center"><button class="back" onclick="go('home',${to ? `'${to}'` : "null"})" aria-label="Kembali">${ic("back")}</button><h1>${t}</h1></div></div>`;
}
function piutangP() {
  return (
    backTop("Piutang") +
    `<div class="hero"><p class="mut">Total piutang</p><p class="big" style="margin-bottom:0">${rp(piutang())}</p></div><h2>Daftar pelanggan</h2>` +
    L(
      S.orders
        .filter((o) => sisa(o) > 0)
        .map(
          (o) =>
            `<button class="item" onclick="detail('${o.id}')" style="display:block"><div style="display:flex;justify-content:space-between"><b>${o.cust}</b>${payBadge(o)}</div><div class="kv" style="margin-top:6px"><span class="mut">Total ${rp(tot(o))}</span><span class="mut">Bayar ${rp(o.paid)}</span></div><div class="bar"><i style="width:${(o.paid / tot(o)) * 100}%"></i></div><b style="color:var(--ink);display:block;margin-top:8px">Sisa ${rp(sisa(o))}</b></button>`,
        )
        .join("") || '<p class="mut">Semua pesanan sudah lunas</p>',
    )
  );
}
function stokP() {
  return (
    backTop("Stok") +
    L(
      S.stock
        .map(
          (s, i) =>
            `<button class="item" onclick="stokNew(${i})"><div class="l"><b>${esc(s.n)}</b><span class="mut">${s.k ? s.k + " · " : ""}${s.q <= s.min ? "Menipis, segera beli" : "Aman"}</span></div><div class="r">${s.q.toLocaleString("id-ID")} ${s.u}</div></button>`,
        )
        .join(""),
    ) +
    `<div class="qa card" style="grid-template-columns:1fr 1fr;margin-top:10px;padding:14px"><button onclick="stokForm(1)"><i>${ic("in")}</i>Stok masuk</button><button onclick="stokForm(-1)"><i>${ic("out")}</i>Stok keluar</button></div><button class="btn alt" style="margin-top:10px" onclick="stokNew()">Tambah bahan baru</button>`
  );
}
function stokForm(d) {
  open(`<h1 style="margin-bottom:12px">Stok ${d > 0 ? "masuk" : "keluar"}</h1><label>Bahan</label><select id="b">${S.stock.map((s, i) => `<option value="${i}">${s.n}</option>`).join("")}</select><label>Jumlah</label><input id="j" type="number" inputmode="numeric" placeholder="0">
${d > 0 ? '<label>Catat sebagai pengeluaran (Rp, opsional)</label><input id="h" type="number" inputmode="numeric" placeholder="0">' : ""}<button class="btn" onclick="stokSave(${d})">Simpan</button>`);
}
function stokSave(d) {
  const s = S.stock[$("#b").value],
    j = +$("#j").value;
  if (!j) return toast("Isi jumlah");
  s.q = Math.max(0, s.q + d * j);
  const h = +($("#h") && $("#h").value);
  if (h) S.tx.unshift({ t: "out", n: "Pembelian " + s.n, v: h, d: "Hari ini" });
  toast("Stok diperbarui");
  S.sheet = null;
  go("home", "stok");
}
const SET = [
  ["Profil usaha", "prof"],
  ["Tampilan", "theme"],
  ["Kategori transaksi", "cat:in"],
  ["Kategori bahan", "cat:mat"],
  ["Satuan", "cat:unit"],
  ["Pelanggan", "cust"],
  ["Backup data", "bak"],
  ["Keamanan", "sec"],
  ["Tentang aplikasi", "abt"],
];
function setP() {
  return (
    backTop("Pengaturan") +
    `<div class="card" style="margin-bottom:14px"><b>${esc(S.biz.name)}</b><br><span class="mut">${esc(S.biz.owner)}${S.biz.wa ? " · " + esc(S.biz.wa) : ""}</span></div>` +
    SET.map(
      ([t, k]) =>
        `<button class="item" onclick="goSet('${k}')"><div class="l"><b>${t}</b></div><span class="mut">›</span></button>`,
    ).join("") +
    `<button class="btn alt" style="margin-top:8px" onclick="S.logged=false;S.sheet=null;go('home')">Keluar</button>`
  );
}
function goSet(k) {
  if (k === "cust") return go("home", "cust");
  if (k.startsWith("cat:")) {
    S.ck = k.slice(4);
    return go("home", "catp");
  }
  const f = { prof, bak, sec, abt, theme: themeSheet }[k];
  f();
}
const CT = {
  in: "Kategori transaksi",
  out: "Kategori transaksi",
  mat: "Kategori bahan",
  unit: "Satuan",
};
function catP() {
  const k = S.ck,
    l = S.cat[k],
    tx = k === "in" || k === "out";
  return (
    backTop(CT[k], "set") +
    (tx
      ? `<div class="seg"><button class="${k === "in" ? "on" : ""}" onclick="S.ck='in';render()">Pemasukan</button><button class="${k === "out" ? "on" : ""}" onclick="S.ck='out';render()">Pengeluaran</button></div>`
      : "") +
    `<div style="display:flex;gap:8px"><input id="nc" placeholder="Nama baru" aria-label="Nama baru" style="margin:0"><button class="btn" style="width:auto;padding:0 20px" onclick="addCat()">Tambah</button></div><h2>${l.length} item</h2>` +
    l
      .map(
        (c, i) =>
          `<div class="item"><div class="l"><b>${esc(c)}</b></div><button class="mut" onclick="catEdit(${i})" style="margin-right:14px">Ubah</button><button class="mut" onclick="delCat(${i})" aria-label="Hapus ${esc(c)}">Hapus</button></div>`,
      )
      .join("")
  );
}
function addCat() {
  const v = $("#nc").value.trim(),
    l = S.cat[S.ck];
  if (!v) return toast("Isi nama dulu");
  if (l.includes(v)) return toast("Nama sudah ada");
  l.push(v);
  toast("Ditambahkan");
  render();
}
function delCat(i) {
  S.cat[S.ck].splice(i, 1);
  toast("Dihapus");
  render();
}
function prof() {
  const b = S.biz;
  open(
    `<h1 style="margin-bottom:12px">Profil usaha</h1><label>Nama usaha</label><input id="bn" value="${esc(b.name)}"><label>Nama pemilik</label><input id="bo" value="${esc(b.owner)}"><label>Nomor WhatsApp</label><input id="bw" inputmode="tel" value="${esc(b.wa)}"><label>Alamat</label><textarea id="ba" rows="2">${esc(b.addr)}</textarea><button class="btn" onclick="saveProf()">Simpan profil</button>`,
  );
}
function saveProf() {
  S.biz = {
    name: $("#bn").value.trim() || "RJ Sablon Cup",
    owner: $("#bo").value.trim() || "RJ",
    wa: $("#bw").value.trim(),
    addr: $("#ba").value.trim(),
  };
  toast("Profil disimpan");
  S.sheet = null;
  render();
}
function bak() {
  open(
    `<h1 style="margin-bottom:6px">Backup data</h1><p class="mut" style="margin-bottom:12px">Data tersimpan otomatis di browser ini. Salin kode di bawah sebagai cadangan, atau tempel kode lama untuk memulihkan.</p><textarea id="bj" rows="7" style="font:12px monospace">${esc(JSON.stringify(dump()))}</textarea><button class="btn" onclick="copyBak()">Salin cadangan</button><button class="btn alt" style="margin-top:8px" onclick="restore()">Pulihkan dari kode</button><button class="btn alt" style="margin-top:8px" onclick="resetAll()">Kosongkan semua data</button><button class="btn alt" style="margin-top:8px" onclick="loadDemo()">Muat data contoh</button>`,
  );
}
function copyBak() {
  const t = $("#bj");
  t.select();
  try {
    navigator.clipboard.writeText(t.value).then(
      () => toast("Cadangan disalin"),
      () => toast("Salin manual dari kotak"),
    );
  } catch (e) {
    toast("Salin manual dari kotak");
  }
}
function restore() {
  try {
    const d = JSON.parse($("#bj").value);
    if (!d.orders || !d.tx) throw 0;
    PERS.forEach((k) => k in d && (S[k] = d[k]));
    S.sheet = null;
    render();
    toast("Data dipulihkan");
  } catch (e) {
    toast("Kode cadangan tidak valid");
  }
}
function resetAll() {
  if (!resetAll.s) {
    resetAll.s = 1;
    return toast("Tekan sekali lagi untuk mengosongkan");
  }
  resetAll.s = 0;
  Object.assign(S, EMPTY());
  S.sheet = null;
  render();
  toast("Data dikosongkan");
}
function loadDemo() {
  Object.assign(S, JSON.parse(DEMO));
  S.sheet = null;
  render();
  toast("Data contoh dimuat");
}
function sec() {
  open(
    `<h1 style="margin-bottom:12px">Keamanan</h1><label>Email masuk</label><input id="se" value="${esc(S.auth.email)}"><label>Kata sandi baru</label><input id="sp" type="password" placeholder="Kosongkan jika tidak diganti"><button class="btn" onclick="saveSec()">Simpan</button>`,
  );
}
function saveSec() {
  const e = $("#se").value.trim(),
    p = $("#sp").value;
  if (p && p.length < 6) return toast("Kata sandi minimal 6 karakter");
  if (e) S.auth.email = e;
  if (p) S.auth.pass = p;
  toast("Keamanan diperbarui");
  S.sheet = null;
  render();
}
function abt() {
  open(
    `<h1>RJ Sablon Cup</h1><p class="mut" style="margin:6px 0 14px">Versi 1.0 · Pencatatan usaha sablon cup</p><div class="kv"><span>Pemilik</span><b>${esc(S.biz.owner)}</b></div><div class="kv"><span>Penyimpanan</span><b>Lokal di perangkat</b></div><div class="kv"><span>Total pesanan</span><b>${S.orders.length}</b></div>`,
  );
}

function txForm(i) {
  const x = S.tx[i];
  open(
    `<h1 style="margin-bottom:12px">Edit ${x.t === "in" ? "pemasukan" : "pengeluaran"}</h1><label>Keterangan</label><input id="tn" value="${esc(x.n)}"><label>Nominal (Rp)</label><input id="tv" type="number" inputmode="numeric" value="${x.v}"><label>Tanggal</label><input id="td2" value="${esc(x.d)}"><button class="btn" onclick="txSave(${i})">Simpan perubahan</button><button class="btn alt" style="margin-top:8px" onclick="txDel(${i})">${ic("trash", 18)} Hapus</button>`,
  );
}
function txSave(i) {
  const v = +$("#tv").value;
  if (!v) return toast("Isi nominal");
  Object.assign(S.tx[i], {
    n: $("#tn").value.trim() || S.tx[i].n,
    v,
    d: $("#td2").value.trim() || S.tx[i].d,
  });
  S.sheet = null;
  toast("Transaksi diperbarui");
  render();
}
function txDel(i) {
  if (txDel.k !== i) {
    txDel.k = i;
    return toast("Tekan Hapus sekali lagi");
  }
  txDel.k = null;
  S.tx.splice(i, 1);
  S.sheet = null;
  toast("Transaksi dihapus");
  render();
}
function custP() {
  return (
    backTop("Pelanggan", "set") +
    `<button class="btn" style="margin-bottom:14px" onclick="custForm(-1)">${ic("plus", 18)} Tambah pelanggan</button>` +
    L(
      S.custs
        .map((c, i) => {
          const os = S.orders.filter((o) => o.cust === c.n);
          return `<button class="item" onclick="custForm(${i})"><div class="av" style="width:42px;height:42px;display:grid;place-items:center;background:var(--c);color:#fff;border-radius:14px">${esc(c.n[0])}</div><div class="l"><b>${esc(c.n)}</b><span class="mut">${esc(c.wa)}</span></div><div class="r">${os.length} pesanan<br><span class="mut">Sisa ${rp(os.reduce((a, o) => a + sisa(o), 0))}</span></div></button>`;
        })
        .join(""),
    )
  );
}
function custForm(i) {
  const c = i >= 0 ? S.custs[i] : { n: "", wa: "" };
  open(
    `<h1 style="margin-bottom:12px">${i >= 0 ? "Edit pelanggan" : "Pelanggan baru"}</h1><label>Nama</label><input id="cn" value="${esc(c.n)}"><label>Nomor WhatsApp</label><input id="cw" inputmode="tel" value="${esc(c.wa === "-" ? "" : c.wa)}"><button class="btn" onclick="custSave(${i})">Simpan</button>${i >= 0 ? `<button class="btn alt" style="margin-top:8px" onclick="custDel(${i})">${ic("trash", 18)} Hapus</button>` : ""}`,
  );
}
function custSave(i) {
  const n = $("#cn").value.trim(),
    w = $("#cw").value.trim() || "-";
  if (!n) return toast("Isi nama");
  if (S.custs.some((x, j) => j !== i && x.n === n))
    return toast("Nama sudah ada");
  if (i >= 0) {
    const old = S.custs[i].n;
    S.orders.forEach((o) => {
      if (o.cust === old) o.cust = n;
    });
    S.custs[i] = { n, wa: w };
  } else S.custs.push({ n, wa: w });
  S.sheet = null;
  toast("Pelanggan disimpan");
  render();
}
function custDel(i) {
  const c = S.custs[i];
  if (S.orders.some((o) => o.cust === c.n))
    return toast("Masih punya pesanan, tidak bisa dihapus");
  if (custDel.k !== i) {
    custDel.k = i;
    return toast("Tekan Hapus sekali lagi");
  }
  custDel.k = null;
  S.custs.splice(i, 1);
  S.sheet = null;
  toast("Pelanggan dihapus");
  render();
}
function stokNew(i = -1) {
  const s =
    i >= 0
      ? S.stock[i]
      : { n: "", k: S.cat.mat[0], u: S.cat.unit[0], q: 0, min: 0 };
  const sel = (l, v) =>
    l
      .map((c) => `<option ${c === v ? "selected" : ""}>${esc(c)}</option>`)
      .join("");
  open(
    `<h1 style="margin-bottom:12px">${i >= 0 ? "Edit bahan" : "Bahan baru"}</h1><label>Nama bahan</label><input id="sn" value="${esc(s.n)}"><label>Kategori</label><select id="sk">${sel(S.cat.mat, s.k)}</select><label>Satuan</label><select id="su">${sel(S.cat.unit, s.u)}</select><label>Stok</label><input id="sq" type="number" inputmode="numeric" value="${s.q}"><label>Batas stok menipis</label><input id="sm" type="number" inputmode="numeric" value="${s.min}"><button class="btn" onclick="stokNewSave(${i})">Simpan bahan</button>${i >= 0 ? `<button class="btn alt" style="margin-top:8px" onclick="stokDel(${i})">${ic("trash", 18)} Hapus</button>` : ""}`,
  );
}
function stokNewSave(i) {
  const n = $("#sn").value.trim();
  if (!n) return toast("Isi nama bahan");
  const o = {
    n,
    k: $("#sk").value,
    u: $("#su").value,
    q: +$("#sq").value || 0,
    min: +$("#sm").value || 0,
  };
  i >= 0 ? (S.stock[i] = o) : S.stock.push(o);
  toast("Bahan disimpan");
  S.sheet = null;
  go("home", "stok");
}
function stokDel(i) {
  if (stokDel.k !== i) {
    stokDel.k = i;
    return toast("Tekan Hapus sekali lagi");
  }
  stokDel.k = null;
  S.stock.splice(i, 1);
  S.sheet = null;
  toast("Bahan dihapus");
  go("home", "stok");
}
function catEdit(i) {
  open(
    `<h1 style="margin-bottom:12px">Ubah nama</h1><input id="ce" value="${esc(S.cat[S.ck][i])}" aria-label="Nama"><button class="btn" onclick="catSave(${i})">Simpan</button>`,
  );
}
function catSave(i) {
  const v = $("#ce").value.trim();
  if (!v) return toast("Isi nama");
  S.cat[S.ck][i] = v;
  S.sheet = null;
  toast("Nama diubah");
  render();
}
/* ===== Bonus pelanggan teraktif ===== */
const BP = { 30: "30 hari", 90: "90 hari", 365: "1 tahun", all: "Semua" };
function bonusData() {
  const lim = S.bper === "all" ? 0 : Date.now() - +S.bper * 864e5,
    m = {};
  S.orders.forEach((o) => {
    if (lim && new Date((o.d || td()) + "T00:00:00") < lim) return;
    const r = m[o.cust] || (m[o.cust] = { n: o.cust, c: 0, paid: 0 });
    r.c++;
    r.paid += o.paid;
  });
  const tier = (v) => {
    const t = [...S.bonus.tiers]
      .sort((a, b) => b[0] - a[0])
      .find((t) => v >= t[0]);
    return t ? t[1] : 0;
  };
  return Object.values(m)
    .map((r) => {
      const q = r.c >= S.bonus.min,
        pc = q ? tier(r.paid) : 0;
      return { ...r, q, pc, bonus: (r.paid * pc) / 100 };
    })
    .sort((a, b) => b.paid - a.paid);
}
function bonusP() {
  const B = bonusData(),
    tb = B.reduce((a, x) => a + x.bonus, 0);
  return (
    backTop("Bonus Pelanggan") +
    `<div class="chips">${Object.entries(BP)
      .map(
        ([k, v]) =>
          `<button class="${S.bper === k ? "on" : ""}" onclick="S.bper='${k}';render()">${v}</button>`,
      )
      .join("")}</div>
<div class="hero"><p class="mut">Total bonus periode ini</p><p class="big" style="margin-bottom:0">${rp(tb)}</p></div>
<p class="mut" style="margin:12px 2px">Dihitung dari total pembayaran pelanggan, minimal ${S.bonus.min} pesanan. ${S.bonus.tiers
      .slice()
      .sort((a, b) => b[0] - a[0])
      .map((t) => "Mulai " + rp(t[0]) + " = " + t[1] + "%")
      .join(" · ")}</p>
<button class="btn alt" onclick="bonusRule()">${ic("sliders", 18)} Atur aturan bonus</button><h2>Pelanggan teraktif</h2>` +
    L(
      B.map(
        (x, i) =>
          `<button class="item" onclick="bonusPay(${i})"><span class="ic" style="font-weight:800">${i + 1}</span><div class="l"><b>${esc(x.n)}</b><span class="mut">${x.c} pesanan · dibayar ${rp(x.paid)}</span></div><div class="r">${x.pc ? rp(x.bonus) : "-"}<br><span class="badge ${x.pc ? "s-Lunas" : "s-Baru"}">${x.q ? (x.pc ? x.pc + "%" : "Belum capai target") : "Min. " + S.bonus.min + " pesanan"}</span></div></button>`,
      ).join("") || '<p class="mut">Belum ada pesanan pada periode ini.</p>',
    )
  );
}
function bonusPay(i) {
  const x = bonusData()[i];
  open(
    `<h1>${esc(x.n)}</h1><p class="mut" style="margin:4px 0 12px">Peringkat ${i + 1} · ${BP[S.bper]}</p><div class="kv"><span>Jumlah pesanan</span><b>${x.c}</b></div><div class="kv"><span>Total dibayar</span><b>${rp(x.paid)}</b></div><div class="kv"><span>Persen bonus</span><b>${x.pc}%</b></div><div class="kv t"><span>Bonus</span><span>${rp(x.bonus)}</span></div>${x.bonus > 0 ? `<button class="btn" style="margin-top:14px" onclick="bonusTx(${i})">Catat sebagai pengeluaran</button>` : ""}`,
  );
}
function bonusTx(i) {
  const x = bonusData()[i];
  S.tx.unshift({
    t: "out",
    n: "Bonus " + x.n,
    v: Math.round(x.bonus),
    d: "Hari ini",
  });
  S.sheet = null;
  toast("Bonus dicatat di pengeluaran");
  render();
}
function bonusRule() {
  const t = S.bonus.tiers;
  open(
    `<h1 style="margin-bottom:12px">Aturan bonus</h1><label>Minimal jumlah pesanan</label><input id="bm" type="number" value="${S.bonus.min}">${t.map((x, i) => `<label>Tingkat ${i + 1}: total bayar minimal (Rp) dan bonus (%)</label><div style="display:flex;gap:8px"><input id="bt${i}" type="number" value="${x[0]}"><input id="bp${i}" type="number" step="0.5" value="${x[1]}" style="max-width:90px"></div>`).join("")}<button class="btn" onclick="bonusSave()">Simpan aturan</button>`,
  );
}
function bonusSave() {
  S.bonus.min = Math.max(1, +$("#bm").value || 1);
  S.bonus.tiers = S.bonus.tiers.map((x, i) => [
    +$("#bt" + i).value || 0,
    +$("#bp" + i).value || 0,
  ]);
  S.sheet = null;
  toast("Aturan disimpan");
  render();
}
const L = (h) => `<div class="list">${h}</div>`;
const SB = [
  ["home", null, "home", "Beranda"],
  ["orders", null, "orders", "Pesanan"],
  ["fin", null, "fin", "Keuangan"],
  ["report", null, "report", "Laporan"],
  "Lainnya",
  ["home", "stok", "box", "Stok"],
  ["home", "piutang", "dollar", "Piutang"],
  ["home", "cust", "users", "Pelanggan"],
  ["home", "bonus", "gift", "Bonus"],
  ["home", "set", "sliders", "Pengaturan"],
];
function side() {
  return (
    `<aside><div class="brand"><span class="logo">${ic("cup", 20)}</span>${esc(S.biz.name)}</div>` +
    SB.map((x) =>
      typeof x === "string"
        ? `<small>${x}</small>`
        : `<button class="${(S.page ? x[1] === S.page || (S.page === "catp" && x[1] === "set") : !x[1] && S.tab === x[0]) ? "on" : ""}" onclick="go('${x[0]}',${x[1] ? `'${x[1]}'` : "null"})">${ic(x[2], 20)}${x[3]}</button>`,
    ).join("") +
    `<div class="me"><span class="av" style="display:grid;place-items:center">${esc((S.biz.owner || "R")[0])}</span><div><b>${esc(S.biz.owner)}</b><br><span class="mut">Pemilik</span></div></div></aside>`
  );
}
const isDark = () =>
  S.theme === "auto"
    ? matchMedia("(prefers-color-scheme: dark)").matches
    : S.theme === "dark";
function applyTheme() {
  const r = document.documentElement;
  S.theme === "auto"
    ? r.removeAttribute("data-theme")
    : r.setAttribute("data-theme", S.theme);
  const m = document.querySelector("meta[name=theme-color]");
  if (m) m.content = isDark() ? "#0A1220" : "#0A5CD6";
}
function themeChange(fn, ev) {
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (document.startViewTransition && !rm) {
    const b =
        ev && ev.currentTarget && ev.currentTarget.getBoundingClientRect
          ? ev.currentTarget.getBoundingClientRect()
          : null,
      x = b ? b.left + b.width / 2 : innerWidth - 40,
      y = b ? b.top + b.height / 2 : 40,
      r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(() => fn());
    t.ready
      .then(() =>
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${r}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        ),
      )
      .catch(() => {});
  } else {
    const r = document.documentElement;
    r.classList.add("tt");
    fn();
    setTimeout(() => r.classList.remove("tt"), 600);
  }
}
function toggleTheme(ev) {
  themeChange(() => {
    S.theme = isDark() ? "light" : "dark";
    render();
  }, ev);
}
function setTheme(t, ev) {
  themeChange(() => {
    S.theme = t;
    S.sheet = null;
    render();
  }, ev);
  toast("Tema " + { light: "terang", dark: "gelap", auto: "otomatis" }[t]);
}
function themeSheet() {
  open(
    `<h1 style="margin-bottom:12px">Tampilan</h1>` +
      [
        ["light", "Terang", "Latar putih, nyaman dipakai siang hari"],
        ["dark", "Gelap", "Hemat baterai dan nyaman di tempat redup"],
        ["auto", "Otomatis", "Ikuti pengaturan perangkat"],
      ]
        .map(
          ([k, t, d]) =>
            `<button class="item" onclick="setTheme('${k}',event)"><span class="ic">${ic(k === "dark" ? "moon" : "sun", 18)}</span><div class="l"><b>${t}</b><span class="mut">${d}</span></div>${S.theme === k ? '<span class="badge s-Baru">Aktif</span>' : ""}</button>`,
        )
        .join(""),
  );
}
function render() {
  applyTheme();
  save();
  const a = $("#app");
  if (!S.logged) {
    a.innerHTML = login();
    return;
  }
  const pages = {
      piutang: piutangP,
      stok: stokP,
      cust: custP,
      set: setP,
      catp: catP,
      bonus: bonusP,
    },
    V = { home, orders, fin: finance, report };
  const body = (S.page ? pages[S.page] : V[S.tab])();
  const sc = document.querySelector("main");
  const y = sc ? sc.scrollTop : 0;
  const N = [
    ["home", ic("home"), "Beranda"],
    ["orders", ic("orders"), "Pesanan"],
    ["fin", ic("fin"), "Keuangan"],
    ["report", ic("report"), "Laporan"],
  ];
  a.innerHTML =
    side() +
    `<main><div class="wrap">${body}</div></main><nav>${N.map((n) => `<button class="${S.tab === n[0] && !S.page ? "on" : ""}" onclick="go('${n[0]}')"><span>${n[1]}</span>${n[2]}</button>`).join("")}</nav>` +
    (S.sheet
      ? `<div class="sheet-bg" onclick="if(event.target===this)close()"><div class="sheet">${S.sheet}</div></div>`
      : "");
  if (y) document.querySelector("main").scrollTop = y;
}
render();
if ("serviceWorker" in navigator && location.protocol !== "file:")
  navigator.serviceWorker.register("sw.js").catch(() => {});

const dataPengajuan = [
    {
        id: 1,
        nama: "Cahyo Putra",
        hp: "08123456789",
        kampus: "Telkom University Purwokerto",
        jurusan: "Sistem Informasi",
        mulai: "1 Januari 2026",
        selesai: "1 April 2026",
        durasi: "3 Bulan",
        status: "Menunggu",
        cv: "/file/cv1.pdf",
        surat: "/file/surat1.pdf"
    },
    {
        id: 2,
        nama: "Bunga Melati",
        hp: "08234567890",
        kampus: "Unsoed",
        jurusan: "Informatika",
        mulai: "5 Januari 2026",
        selesai: "5 April 2026",
        durasi: "3 Bulan",
        status: "Ditolak",
        cv: "/file/cv2.pdf",
        surat: "/file/surat2.pdf"
    },
    {
        id: 3,
        nama: "Setya Natasha",
        hp: "08575432011",
        kampus: "Telkom University Purwokerto",
        jurusan: "Teknik Informatika",
        mulai: "19 Januari 2026",
        selesai: "3 April 2026",
        durasi: "2 Bulan 3 Hari",
        status: "Menunggu",
        cv: "/file/cv3.pdf",
        surat: "/file/surat3.pdf"
    }
];
const tableBody = document.getElementById("pengajuanTable");

function renderTable() {
    tableBody.innerHTML = "";

    dataPengajuan.forEach((d, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${d.nama}</td>
      <td>${d.mulai}</td>
      <td>
        <button class="btn btn-gray" onclick="openBukti(${d.id})">
          Lihat Bukti
        </button>
      </td>
      <td>${renderStatus(d)}</td>
    `;

        tableBody.appendChild(tr);
    });
}
function openBukti(id) {
    const d = getById(id);
    if (!d) return;

    document.getElementById("b-nama").value = d.nama;
    document.getElementById("b-hp").value = d.hp;
    document.getElementById("b-kampus").value = d.kampus;
    document.getElementById("b-jurusan").value = d.jurusan;
    document.getElementById("b-mulai").value = d.mulai;
    document.getElementById("b-selesai").value = d.selesai;
    document.getElementById("b-durasi").value = d.durasi;

    document.getElementById("b-cv").href = d.cv;
    document.getElementById("b-surat").href = d.surat;

    document.getElementById("buktiModal").classList.add("show");
}

function closeBukti() {
    document.getElementById("buktiModal").classList.remove("show");
}

function renderStatus(d) {
    if (d.status === "Menunggu") {
        return `
      <button class="btn btn-outline" onclick="openStatus(${d.id})">
        Menunggu
      </button>
    `;
    }

    if (d.status === "Diterima") {
        return `<span class="badge green">Diterima</span>`;
    }

    if (d.status === "Ditolak") {
        return `<span class="badge red">Ditolak</span>`;
    }

    if (d.status === "Mengundurkan Diri") {
        return `<span class="badge gray">Mengundurkan Diri</span>`;
    }
}
function getById(id) {
    return dataPengajuan.find(d => d.id === id);
}
function openBukti(id) {
    const d = getById(id);
    if (!d) return;

    document.getElementById("b-nama").value = d.nama;
    document.getElementById("b-hp").value = d.hp;
    document.getElementById("b-kampus").value = d.kampus;
    document.getElementById("b-jurusan").value = d.jurusan;
    document.getElementById("b-mulai").value = d.mulai;
    document.getElementById("b-selesai").value = d.selesai;
    document.getElementById("b-durasi").value = d.durasi;

    document.getElementById("b-cv").href = d.cv;
    document.getElementById("b-surat").href = d.surat;

    document.getElementById("buktiModal").classList.add("show");
}

function closeBukti() {
    document.getElementById("buktiModal").classList.remove("show");
}
let currentId = null;

function openStatus(id) {
    const d = getById(id);
    if (!d) return;

    currentId = id;

    statusNama.innerText = d.nama;
    statusHp.innerText = d.hp;
    statusUniv.innerText = d.kampus;
    statusTanggal.innerText = `${d.mulai} - ${d.selesai}`;
    statusDurasi.innerText = d.durasi;

    document.getElementById("statusModal").classList.add("show");
}

function setStatus(status) {
    const d = getById(currentId);
    if (!d) return;

    d.status = status;
    closeModal("statusModal");
    renderTable();
}

function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}
renderTable();

let pendingStatus = null;

function setStatus(status) {

  if (status === "Ditolak" || status === "Mengundurkan Diri") {
    pendingStatus = status;

    document.getElementById("reasonTitle").innerText =
      `Alasan ${status}`;

    document.getElementById("reasonText").value = "";

    document.getElementById("reasonModal")
      .classList.add("show");

    return;
  }

  applyStatus(status);
}

function submitReason() {
  const reason = document.getElementById("reasonText").value.trim();

  if (!reason) {
    alert("Alasan wajib diisi");
    return;
  }

  const d = getById(currentId);
  d.status = pendingStatus;
  d.reason = reason;

  closeModal("reasonModal");
  closeModal("statusModal");

  renderTable();
}

function applyStatus(status) {
  const d = getById(currentId);
  d.status = status;

  closeModal("statusModal");
  renderTable();
}

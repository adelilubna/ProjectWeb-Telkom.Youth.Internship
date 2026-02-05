<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TelShip - Pengajuan Magang</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="pengajuan.css">
</head>

<body>

    <div class="app">

        <!-- SIDEBAR -->
        <aside class="sidebar">

            <div class="sidebar-header">
                <h2>Tel<span>Ship</span></h2>
            </div>

            <nav class="sidebar-menu">

                <a href="/intern/dashboard/dashboard.html" class="nav-item">
                    <span>🏠︎</span><span class="label">Dashboard</span>
                </a>

                <a href="/intern/profile/profile.html" class="nav-item">
                    <span>👤</span><span class="label">Profil</span>
                </a>

                <a href="/intern/status/status.html" class="nav-item">
                    <span>✔</span><span class="label">Status</span>
                </a>

                <a href="#" class="nav-item active">
                    <span>✚</span><span class="label">Pengajuan</span>
                </a>

                <a href="/intern/login/login.html" class="nav-item logout">
                    <span>➜]</span><span class="label">Keluar</span>
                </a>

            </nav>

        </aside>

        <div class="content">

            <!-- TOPBAR -->
            <header class="topbar">

                <div class="topbar-left">
                    <button class="menu-btn" id="menuToggle">☰</button>
                    <img src="/images/logo.png" class="logo">
                </div>

                <div class="topbar-right">
                    <span class="notif">🔔</span>
                    <img src="/images/profil.user.jpg" class="avatar">
                    <span class="username">User</span>
                </div>

            </header>

            <main class="main-content">

                <h1 class="page-title">Pengajuan Magang</h1>

                <section class="form-card">

                    <div class="form-header">
                        <span>📄</span>
                        <strong>Filling Form</strong>
                    </div>

                    <form class="pengajuan-form">

                        <div class="form-row">
                            <label>Tanggal Surat Magang</label>
                            <input type="date">
                        </div>

                        <div class="form-row">
                            <label>Nama</label>
                            <input type="text">
                        </div>

                        <div class="form-row">
                            <label>No Hp</label>
                            <input type="text">
                        </div>

                        <div class="form-row">
                            <label>Asal Perguruan Tinggi</label>
                            <input type="text">
                        </div>

                        <div class="form-row">
                            <label>Jurusan</label>
                            <input type="text">
                        </div>

                        <div class="form-row">
                            <label>Tanggal Mulai</label>
                            <input type="date" id="tanggalMulai">
                        </div>

                        <div class="form-row">
                            <label>Tanggal Selesai</label>
                            <input type="date" id="tanggalSelesai">
                        </div>

                        <div class="form-row">
                            <label></label>

                            <div class="durasi-wrapper">
                                <div class="durasi-info" id="durasiMagang">Durasi magang akan dihitung otomatis
                                </div>
                            </div>
                        </div>

                        <div class="form-row file-row">
                            <label>CV</label>
                            <input type="file">
                        </div>

                        <div class="form-row file-row">
                            <label>Surat Pernyataan</label>
                            <input type="file">
                        </div>


                        <div class="form-action">
                            <button type="submit" class="btn-submit">Submit</button>
                        </div>

                    </form>

                </section>

            </main>

        </div>

    </div>

    <script>

        const tanggalMulai = document.getElementById("tanggalMulai");
        const tanggalSelesai = document.getElementById("tanggalSelesai");
        const durasiMagang = document.getElementById("durasiMagang");


        function hitungDurasi() {

            if (!tanggalMulai.value || !tanggalSelesai.value) {
                durasiMagang.textContent = "Durasi magang akan dihitung otomatis";
                return;
            }

            const start = new Date(tanggalMulai.value);
            const end = new Date(tanggalSelesai.value);

            if (end < start) {
                durasiMagang.textContent = "Tanggal tidak valid";
                return;
            }

            const selisihHari =
                Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

            const bulan = Math.floor(selisihHari / 30);
            const hari = selisihHari % 30;

            let hasil = "";

            if (bulan > 0) hasil += bulan + " bulan ";
            if (hari > 0) hasil += hari + " hari";

            durasiMagang.textContent =
                "Durasi Magang: " + hasil.trim();

        }


        tanggalMulai.addEventListener("change", hitungDurasi);
        tanggalSelesai.addEventListener("change", hitungDurasi);

    </script>

</body>

</html>
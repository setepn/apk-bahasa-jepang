<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f7f6f2">
    <title>Kotoba — Belajar Bahasa Jepang</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div class="app-shell">
        <aside class="sidebar" id="sidebar" aria-label="Navigasi utama">
            <a class="brand" href="#" data-view-link="dashboard" aria-label="Kotoba, beranda">
                <span class="brand-mark">こ</span>
                <span class="brand-name">kotoba<span>.</span><small>RUANG BELAJAR JEPANG</small></span>
            </a>

            <div class="nav-label">MENU</div>
            <nav class="main-nav">
                <button class="nav-item active" data-view-link="dashboard"><span class="nav-icon">⌂</span>Beranda</button>
                <button class="nav-item" data-view-link="belajar"><span class="nav-icon">▤</span>Materi belajar</button>
                <button class="nav-item" data-view-link="kosakata"><span class="nav-icon">あ</span>Kosakata</button>
                <button class="nav-item" data-view-link="latihan"><span class="nav-icon">✳</span>Latihan</button>
                <button class="nav-item" data-view-link="menulis"><span class="nav-icon">✎</span>Latihan menulis</button>
                <button class="nav-item" data-view-link="progres"><span class="nav-icon">▥</span>Progres saya</button>
            </nav>

            <div class="sidebar-bottom">
                <div class="sidebar-note">
                    <span class="note-spark">✦</span>
                    <strong>Langkah kecil,<br>kemajuan besar.</strong>
                    <p>Belajar 10 menit hari ini sudah cukup.</p>
                    <button class="note-link" data-view-link="latihan">Mulai sesi <span>→</span></button>
                </div>
                <div class="profile">
                    <div class="avatar">学</div>
                    <div><strong>Pelajar Jepang</strong><span>Level pemula</span></div>
                    <span class="profile-dots">···</span>
                </div>
            </div>
        </aside>

        <main class="main-area">
            <header class="topbar">
                <div class="breadcrumbs"><span>Ruang belajar</span><b>/</b><strong id="page-crumb">Beranda</strong></div>
                <div class="topbar-right">
                    <div class="streak"><span>♨</span><strong id="streak-count">0</strong><small>hari beruntun</small></div>
                    <button class="mobile-menu" id="mobile-menu" aria-label="Buka menu">☰</button>
                </div>
            </header>

            <section class="page-view active" id="view-dashboard">
                <div class="welcome-row">
                    <div>
                        <div class="eyebrow"><span></span> <span id="date-mood">HARI YANG PRODUKTIF</span></div>
                        <h1>こんにちは, semangat belajar! <span>✦</span></h1>
                        <p class="lead">Sedikit demi sedikit, lama-lama jadi bisa. Yuk lanjutkan perjalananmu hari ini.</p>
                    </div>
                    <div class="date-chip"><span>◷</span><span id="today-date">HARI INI</span></div>
                </div>

                <div class="hero-card">
                    <div class="hero-copy">
                        <div class="hero-tag"><span>✦</span> PERJALANAN JLPT <span class="tag-divider">·</span> <span id="hero-unit-count">16 UNIT</span></div>
                        <h2>Belajar dari N5<br>hingga N1.</h2>
                        <p>Naik level bertahap dari dasar hingga kemampuan lanjutan. Jadikan setiap hari sebagai langkah menuju JLPT.</p>
                        <button class="button button-light" data-view-link="belajar">Lanjutkan belajar <span>→</span></button>
                    </div>
                    <div class="hero-art" aria-hidden="true">
                        <div class="sun"></div><div class="hero-kanji">あ</div>
                        <div class="hero-leaf leaf-one">❋</div><div class="hero-leaf leaf-two">❋</div>
                        <div class="hero-caption">日本語<br><small>nihongo · bahasa Jepang</small></div>
                    </div>
                    <div class="hero-index"><span id="hero-word-count">240+ KATA</span></div>
                </div>

                <div class="level-track">
                    <div class="section-heading level-heading">
                        <div><div class="eyebrow">JALUR LEVEL</div><h2>JLPT N5 sampai N1</h2></div>
                        <span class="muted">5 level utama</span>
                    </div>
                    <div class="level-grid" id="level-grid"></div>
                    <div class="level-detail" id="level-detail"></div>
                </div>

                <div class="mission-panel">
                    <div class="section-heading mission-heading">
                        <div><div class="eyebrow">MISI HARI INI</div><h2>Challenge pendek yang bikin semangat</h2></div>
                        <span class="muted">3 tugas</span>
                    </div>
                    <div class="mission-grid" id="mission-grid"></div>
                </div>

                <div class="section-heading">
                    <div><div class="eyebrow">RUTINITAS KECIL</div><h2>Target harianmu</h2></div>
                    <span class="muted" id="goal-caption">0 dari 3 selesai</span>
                </div>
                <div class="stats-grid">
                    <article class="stat-card goal-card" data-goal="lesson">
                        <div class="stat-top"><span class="stat-icon peach">▤</span><span class="goal-check">○</span></div>
                        <strong>1 pelajaran</strong><p>Belajar materi baru</p><div class="mini-progress"><span id="goal-lesson-bar"></span></div>
                    </article>
                    <article class="stat-card goal-card" data-goal="words">
                        <div class="stat-top"><span class="stat-icon lavender">あ</span><span class="goal-check">○</span></div>
                        <strong>5 kosakata</strong><p>Tambah kata baru</p><div class="mini-progress"><span id="goal-words-bar"></span></div>
                    </article>
                    <article class="stat-card goal-card" data-goal="quiz">
                        <div class="stat-top"><span class="stat-icon mint">✳</span><span class="goal-check">○</span></div>
                        <strong>1 latihan</strong><p>Asah ingatanmu</p><div class="mini-progress"><span id="goal-quiz-bar"></span></div>
                    </article>
                </div>

                <div class="section-heading lesson-heading">
                    <div><div class="eyebrow">DIBUAT UNTUKMU</div><h2>Lanjutkan perjalanan</h2></div>
                    <button class="text-button" data-view-link="belajar">Lihat semua materi <span>→</span></button>
                </div>
                <div class="lesson-grid" id="dashboard-lessons"></div>
            </section>

            <section class="page-view" id="view-belajar">
                <div class="page-intro"><div class="eyebrow">KURIKULUM BERTAHAP · <span id="curriculum-unit-count">16 UNIT</span></div><h1>Materi belajar</h1><p>Belajar dari huruf dasar hingga percakapan, kanji, dan tata bahasa sehari-hari.</p></div>
                <div class="curriculum-list" id="curriculum-list"></div>
                <div class="lesson-stage hidden" id="lesson-stage"></div>
            </section>

            <section class="page-view" id="view-kosakata">
                <div class="page-intro"><div class="eyebrow">KAMUS MINI · <span id="vocab-total-count">LEBIH DARI 240 KATA</span></div><h1>Kosakata pilihan</h1><p>Dengar pelafalan, cari kata, lalu kelompokkan berdasarkan tema untuk membantu mengingatnya.</p></div>
                <div class="vocab-toolbar"><label class="search-box"><span>⌕</span><input id="vocab-search" type="search" placeholder="Cari kata atau artinya..." aria-label="Cari kosakata"></label><div class="filter-pills" id="vocab-filters"></div></div>
                <div class="vocab-grid" id="vocab-grid"></div>
                <p class="empty-state hidden" id="vocab-empty">Belum ada kosakata yang cocok. Coba kata lain, ya.</p>
                <div class="vocab-pagination" id="vocab-pagination"></div>
            </section>

            <section class="page-view" id="view-latihan">
                <div class="page-intro"><div class="eyebrow">CEK PEMAHAMAN</div><h1>Latihan singkat</h1><p>Pilih jawaban yang paling tepat. Kamu pasti bisa!</p></div>
                <div class="quiz-wrap">
                    <div class="quiz-card">
                        <div class="quiz-top"><span class="quiz-label">KOSAKATA · TATA BAHASA · KANJI</span><span id="quiz-counter">PERTANYAAN 1 / 28</span></div>
                        <div class="quiz-progress"><span id="quiz-progress-bar"></span></div>
                        <div class="quiz-content" id="quiz-content"></div>
                        <div class="quiz-feedback hidden" id="quiz-feedback"></div>
                        <button class="button button-primary quiz-next hidden" id="quiz-next">Pertanyaan berikutnya <span>→</span></button>
                    </div>
                    <div class="quiz-aside"><span class="aside-flower">✿</span><h3>Belajar tanpa buru-buru.</h3><p>Setiap jawaban adalah kesempatan untuk mengingat lebih baik. Semangat!</p></div>
                </div>
            </section>

            <section class="page-view" id="view-menulis">
                <div class="page-intro"><div class="eyebrow">LATIHAN AKTIF · KOSAKATA</div><h1>Latihan menulis</h1><p>Tebak kosakata dari artinya, lalu tulis dalam kana. Romaji hanya ditampilkan setelah jawaban benar.</p></div>
                <div class="writing-level-picker" role="group" aria-label="Pilih tingkat latihan menulis">
                    <span class="eyebrow">PILIH TINGKAT JLPT</span>
                    <div class="writing-level-options" id="writing-level-options"></div>
                    <p id="writing-level-description"></p>
                </div>
                <div class="writing-card">
                    <div class="quiz-top"><span class="quiz-label">TULIS DALAM HIRAGANA ATAU KATAKANA</span><span id="writing-counter">SOAL 1 / 10</span></div>
                    <div class="quiz-progress"><span id="writing-progress-bar"></span></div>
                    <div class="writing-content" id="writing-content"></div>
                    <div class="writing-feedback hidden" id="writing-feedback" role="status"></div>
                    <div class="writing-actions" id="writing-actions"></div>
                </div>
                <p class="writing-best-score" id="writing-best-score"></p>
            </section>

            <section class="page-view" id="view-progres">
                <div class="page-intro"><div class="eyebrow">PERJALANANMU</div><h1>Progres belajar</h1><p>Semua langkah kecilmu tercatat di sini.</p></div>
                <div class="progress-summary">
                    <article class="progress-highlight"><span class="highlight-icon">✦</span><div class="eyebrow">TOTAL POIN</div><strong id="total-points">0</strong><p>Poin dari latihan dan belajar</p></article>
                    <article class="progress-highlight"><span class="highlight-icon">♨</span><div class="eyebrow">STREAK TERKINI</div><strong><span id="progress-streak">0</span> <small>hari</small></strong><p>Terus jaga kebiasaan baikmu</p></article>
                    <article class="progress-highlight"><span class="highlight-icon">✓</span><div class="eyebrow">MATERI SELESAI</div><strong id="completed-lessons">0</strong><p>Pelajaran yang sudah kamu tuntaskan</p></article>
                </div>
                <div class="achievement-panel">
                    <div class="section-heading"><div><div class="eyebrow">PENCAPAIAN</div><h2>Badge yang kamu kumpulkan</h2></div></div>
                    <div class="achievement-grid" id="achievement-grid"></div>
                </div>
                <div class="progress-panel"><div class="section-heading"><div><div class="eyebrow">KONSISTENSI</div><h2>Target hari ini</h2></div><div class="progress-actions"><span class="muted" id="progress-goal-caption">0 dari 3 selesai</span><button class="text-button danger-button" type="button" data-reset-progress>Reset progres</button></div></div><div class="weekly-grid" id="weekly-grid"></div><div class="progress-footnote">Progres disimpan otomatis di perangkat ini.</div></div>
            </section>
        </main>
    </div>
</body>
</html>

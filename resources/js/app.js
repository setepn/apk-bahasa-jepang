import './bootstrap';

const STORAGE_KEY = 'kotoba-learning-state-v1';

const vocabulary = [
    { japanese: 'おはようございます', romaji: 'ohayou gozaimasu', meaning: 'Selamat pagi (sopan)', category: 'Salam' },
    { japanese: 'こんにちは', romaji: 'konnichiwa', meaning: 'Halo / selamat siang', category: 'Salam' },
    { japanese: 'こんばんは', romaji: 'konbanwa', meaning: 'Selamat malam', category: 'Salam' },
    { japanese: 'おやすみなさい', romaji: 'oyasuminasai', meaning: 'Selamat tidur', category: 'Salam' },
    { japanese: 'ありがとう', romaji: 'arigatou', meaning: 'Terima kasih', category: 'Salam' },
    { japanese: 'ありがとうございます', romaji: 'arigatou gozaimasu', meaning: 'Terima kasih (sopan)', category: 'Salam' },
    { japanese: 'すみません', romaji: 'sumimasen', meaning: 'Permisi / maaf', category: 'Salam' },
    { japanese: 'ごめんなさい', romaji: 'gomennasai', meaning: 'Maaf', category: 'Salam' },
    { japanese: 'さようなら', romaji: 'sayounara', meaning: 'Selamat tinggal', category: 'Salam' },
    { japanese: 'はじめまして', romaji: 'hajimemashite', meaning: 'Salam kenal', category: 'Salam' },
    { japanese: 'わたし', romaji: 'watashi', meaning: 'Saya', category: 'Perkenalan' },
    { japanese: 'なまえ', romaji: 'namae', meaning: 'Nama', category: 'Perkenalan' },
    { japanese: 'ともだち', romaji: 'tomodachi', meaning: 'Teman', category: 'Perkenalan' },
    { japanese: 'せんせい', romaji: 'sensei', meaning: 'Guru', category: 'Perkenalan' },
    { japanese: 'がくせい', romaji: 'gakusei', meaning: 'Pelajar / mahasiswa', category: 'Perkenalan' },
    { japanese: 'みず', romaji: 'mizu', meaning: 'Air', category: 'Sehari-hari' },
    { japanese: 'ほん', romaji: 'hon', meaning: 'Buku', category: 'Sehari-hari' },
    { japanese: 'ねこ', romaji: 'neko', meaning: 'Kucing', category: 'Sehari-hari' },
    { japanese: 'いぬ', romaji: 'inu', meaning: 'Anjing', category: 'Sehari-hari' },
    { japanese: 'でんわ', romaji: 'denwa', meaning: 'Telepon', category: 'Sehari-hari' },
    { japanese: 'かばん', romaji: 'kaban', meaning: 'Tas', category: 'Sehari-hari' },
    { japanese: 'えき', romaji: 'eki', meaning: 'Stasiun', category: 'Tempat' },
    { japanese: 'がっこう', romaji: 'gakkou', meaning: 'Sekolah', category: 'Tempat' },
    { japanese: 'いえ', romaji: 'ie', meaning: 'Rumah', category: 'Tempat' },
    { japanese: 'みせ', romaji: 'mise', meaning: 'Toko', category: 'Tempat' },
    { japanese: 'にほん', romaji: 'nihon', meaning: 'Jepang', category: 'Tempat' },
    { japanese: 'ごはん', romaji: 'gohan', meaning: 'Nasi / makanan', category: 'Makanan' },
    { japanese: 'おちゃ', romaji: 'ocha', meaning: 'Teh hijau', category: 'Makanan' },
    { japanese: 'りんご', romaji: 'ringo', meaning: 'Apel', category: 'Makanan' },
    { japanese: 'すし', romaji: 'sushi', meaning: 'Sushi', category: 'Makanan' },
    { japanese: 'さかな', romaji: 'sakana', meaning: 'Ikan', category: 'Makanan' },
    { japanese: 'たまご', romaji: 'tamago', meaning: 'Telur', category: 'Makanan' },
    { japanese: 'にく', romaji: 'niku', meaning: 'Daging', category: 'Makanan' },
    { japanese: 'やさい', romaji: 'yasai', meaning: 'Sayuran', category: 'Makanan' },
    { japanese: 'おいしい', romaji: 'oishii', meaning: 'Enak', category: 'Makanan' },
    { japanese: 'いち', romaji: 'ichi', meaning: 'Satu', category: 'Angka' },
    { japanese: 'に', romaji: 'ni', meaning: 'Dua', category: 'Angka' },
    { japanese: 'さん', romaji: 'san', meaning: 'Tiga', category: 'Angka' },
    { japanese: 'よん', romaji: 'yon', meaning: 'Empat', category: 'Angka' },
    { japanese: 'ご', romaji: 'go', meaning: 'Lima', category: 'Angka' },
    { japanese: 'ろく', romaji: 'roku', meaning: 'Enam', category: 'Angka' },
    { japanese: 'なな', romaji: 'nana', meaning: 'Tujuh', category: 'Angka' },
    { japanese: 'はち', romaji: 'hachi', meaning: 'Delapan', category: 'Angka' },
    { japanese: 'きゅう', romaji: 'kyuu', meaning: 'Sembilan', category: 'Angka' },
    { japanese: 'じゅう', romaji: 'juu', meaning: 'Sepuluh', category: 'Angka' },
    { japanese: 'たべる', romaji: 'taberu', meaning: 'Makan', category: 'Kata kerja' },
    { japanese: 'のむ', romaji: 'nomu', meaning: 'Minum', category: 'Kata kerja' },
    { japanese: 'いく', romaji: 'iku', meaning: 'Pergi', category: 'Kata kerja' },
    { japanese: 'くる', romaji: 'kuru', meaning: 'Datang', category: 'Kata kerja' },
    { japanese: 'みる', romaji: 'miru', meaning: 'Melihat / menonton', category: 'Kata kerja' },
    { japanese: 'きく', romaji: 'kiku', meaning: 'Mendengar / bertanya', category: 'Kata kerja' },
    { japanese: 'よむ', romaji: 'yomu', meaning: 'Membaca', category: 'Kata kerja' },
    { japanese: 'はなす', romaji: 'hanasu', meaning: 'Berbicara', category: 'Kata kerja' },
    { japanese: 'おおきい', romaji: 'ookii', meaning: 'Besar', category: 'Kata sifat' },
    { japanese: 'ちいさい', romaji: 'chiisai', meaning: 'Kecil', category: 'Kata sifat' },
    { japanese: 'あたらしい', romaji: 'atarashii', meaning: 'Baru', category: 'Kata sifat' },
    { japanese: 'たのしい', romaji: 'tanoshii', meaning: 'Menyenangkan', category: 'Kata sifat' },
    { japanese: 'かわいい', romaji: 'kawaii', meaning: 'Lucu / imut', category: 'Kata sifat' },
    { japanese: 'きょう', romaji: 'kyou', meaning: 'Hari ini', category: 'Waktu' },
    { japanese: 'あした', romaji: 'ashita', meaning: 'Besok', category: 'Waktu' },
    { japanese: 'きのう', romaji: 'kinou', meaning: 'Kemarin', category: 'Waktu' },
    { japanese: 'おとうさん', romaji: 'otousan', meaning: 'Ayah', category: 'Keluarga' },
    { japanese: 'おかあさん', romaji: 'okaasan', meaning: 'Ibu', category: 'Keluarga' },
    { japanese: 'おにいさん', romaji: 'oniisan', meaning: 'Kakak laki-laki', category: 'Keluarga' },
    { japanese: 'おねえさん', romaji: 'oneesan', meaning: 'Kakak perempuan', category: 'Keluarga' },
    { japanese: 'あめ', romaji: 'ame', meaning: 'Hujan', category: 'Cuaca' },
    { japanese: 'はれ', romaji: 'hare', meaning: 'Cerah', category: 'Cuaca' },
    { japanese: 'ゆき', romaji: 'yuki', meaning: 'Salju', category: 'Cuaca' },
    { japanese: 'くるま', romaji: 'kuruma', meaning: 'Mobil', category: 'Transportasi' },
    { japanese: 'でんしゃ', romaji: 'densha', meaning: 'Kereta', category: 'Transportasi' },
    { japanese: 'あるく', romaji: 'aruku', meaning: 'Berjalan kaki', category: 'Kata kerja' },
    { japanese: 'かう', romaji: 'kau', meaning: 'Membeli', category: 'Kata kerja' },
    { japanese: 'べんきょうする', romaji: 'benkyou suru', meaning: 'Belajar', category: 'Kata kerja' },
    { japanese: 'はやい', romaji: 'hayai', meaning: 'Cepat / awal', category: 'Kata sifat' },
    { japanese: 'おそい', romaji: 'osoi', meaning: 'Lambat / larut', category: 'Kata sifat' },
    { japanese: 'やさしい', romaji: 'yasashii', meaning: 'Baik hati / mudah', category: 'Kata sifat' },
    { japanese: 'はは', romaji: 'haha', meaning: 'Ibu sendiri', category: 'Keluarga' },
    { japanese: 'ちち', romaji: 'chichi', meaning: 'Ayah sendiri', category: 'Keluarga' },
    { japanese: 'きょうだい', romaji: 'kyoudai', meaning: 'Saudara kandung', category: 'Keluarga' },
    { japanese: 'いもうと', romaji: 'imouto', meaning: 'Adik perempuan', category: 'Keluarga' },
    { japanese: 'おとうと', romaji: 'otouto', meaning: 'Adik laki-laki', category: 'Keluarga' },
    { japanese: 'かぞく', romaji: 'kazoku', meaning: 'Keluarga', category: 'Keluarga' },
    { japanese: 'あさ', romaji: 'asa', meaning: 'Pagi', category: 'Waktu' },
    { japanese: 'ひる', romaji: 'hiru', meaning: 'Siang', category: 'Waktu' },
    { japanese: 'よる', romaji: 'yoru', meaning: 'Malam', category: 'Waktu' },
    { japanese: 'まいにち', romaji: 'mainichi', meaning: 'Setiap hari', category: 'Waktu' },
    { japanese: 'げつようび', romaji: 'getsuyoubi', meaning: 'Hari Senin', category: 'Waktu' },
    { japanese: 'かようび', romaji: 'kayoubi', meaning: 'Hari Selasa', category: 'Waktu' },
    { japanese: 'すいようび', romaji: 'suiyoubi', meaning: 'Hari Rabu', category: 'Waktu' },
    { japanese: 'もくようび', romaji: 'mokuyoubi', meaning: 'Hari Kamis', category: 'Waktu' },
    { japanese: 'きんようび', romaji: 'kinyoubi', meaning: 'Hari Jumat', category: 'Waktu' },
    { japanese: 'どようび', romaji: 'doyoubi', meaning: 'Hari Sabtu', category: 'Waktu' },
    { japanese: 'にちようび', romaji: 'nichiyoubi', meaning: 'Hari Minggu', category: 'Waktu' },
    { japanese: 'あたま', romaji: 'atama', meaning: 'Kepala', category: 'Tubuh' },
    { japanese: 'め', romaji: 'me', meaning: 'Mata', category: 'Tubuh' },
    { japanese: 'みみ', romaji: 'mimi', meaning: 'Telinga', category: 'Tubuh' },
    { japanese: 'くち', romaji: 'kuchi', meaning: 'Mulut', category: 'Tubuh' },
    { japanese: 'て', romaji: 'te', meaning: 'Tangan', category: 'Tubuh' },
    { japanese: 'あし', romaji: 'ashi', meaning: 'Kaki', category: 'Tubuh' },
    { japanese: 'あお', romaji: 'ao', meaning: 'Biru', category: 'Warna' },
    { japanese: 'あか', romaji: 'aka', meaning: 'Merah', category: 'Warna' },
    { japanese: 'しろ', romaji: 'shiro', meaning: 'Putih', category: 'Warna' },
    { japanese: 'くろ', romaji: 'kuro', meaning: 'Hitam', category: 'Warna' },
    { japanese: 'きいろ', romaji: 'kiiro', meaning: 'Kuning', category: 'Warna' },
    { japanese: 'みどり', romaji: 'midori', meaning: 'Hijau', category: 'Warna' },
    { japanese: 'まち', romaji: 'machi', meaning: 'Kota', category: 'Tempat' },
    { japanese: 'こうえん', romaji: 'kouen', meaning: 'Taman', category: 'Tempat' },
    { japanese: 'びょういん', romaji: 'byouin', meaning: 'Rumah sakit', category: 'Tempat' },
    { japanese: 'としょかん', romaji: 'toshokan', meaning: 'Perpustakaan', category: 'Tempat' },
    { japanese: 'くうこう', romaji: 'kuukou', meaning: 'Bandara', category: 'Tempat' },
    { japanese: 'ひこうき', romaji: 'hikouki', meaning: 'Pesawat', category: 'Transportasi' },
    { japanese: 'じてんしゃ', romaji: 'jitensha', meaning: 'Sepeda', category: 'Transportasi' },
    { japanese: 'ちかてつ', romaji: 'chikatetsu', meaning: 'Kereta bawah tanah', category: 'Transportasi' },
    { japanese: 'みぎ', romaji: 'migi', meaning: 'Kanan', category: 'Arah' },
    { japanese: 'ひだり', romaji: 'hidari', meaning: 'Kiri', category: 'Arah' },
    { japanese: 'まっすぐ', romaji: 'massugu', meaning: 'Lurus', category: 'Arah' },
    { japanese: 'とおい', romaji: 'tooi', meaning: 'Jauh', category: 'Arah' },
    { japanese: 'ちかい', romaji: 'chikai', meaning: 'Dekat', category: 'Arah' },
    { japanese: 'あつい', romaji: 'atsui', meaning: 'Panas (cuaca atau benda)', category: 'Cuaca' },
    { japanese: 'さむい', romaji: 'samui', meaning: 'Dingin (cuaca)', category: 'Cuaca' },
    { japanese: 'くもり', romaji: 'kumori', meaning: 'Berawan', category: 'Cuaca' },
    { japanese: 'かぜ', romaji: 'kaze', meaning: 'Angin', category: 'Cuaca' },
    { japanese: 'あさごはん', romaji: 'asagohan', meaning: 'Sarapan', category: 'Makanan' },
    { japanese: 'ひるごはん', romaji: 'hirugohan', meaning: 'Makan siang', category: 'Makanan' },
    { japanese: 'ばんごはん', romaji: 'bangohan', meaning: 'Makan malam', category: 'Makanan' },
    { japanese: 'パン', romaji: 'pan', meaning: 'Roti', category: 'Makanan' },
    { japanese: 'くだもの', romaji: 'kudamono', meaning: 'Buah-buahan', category: 'Makanan' },
    { japanese: 'コーヒー', romaji: 'koohii', meaning: 'Kopi', category: 'Makanan' },
    { japanese: 'おねがいします', romaji: 'onegaishimasu', meaning: 'Tolong / mohon', category: 'Salam' },
    { japanese: 'だいじょうぶ', romaji: 'daijoubu', meaning: 'Tidak apa-apa / baik-baik saja', category: 'Salam' },
    { japanese: 'わかります', romaji: 'wakarimasu', meaning: 'Mengerti', category: 'Kata kerja' },
    { japanese: 'まちます', romaji: 'machimasu', meaning: 'Menunggu', category: 'Kata kerja' },
    { japanese: 'かきます', romaji: 'kakimasu', meaning: 'Menulis', category: 'Kata kerja' },
    { japanese: 'ねます', romaji: 'nemasu', meaning: 'Tidur', category: 'Kata kerja' },
    { japanese: 'おきます', romaji: 'okimasu', meaning: 'Bangun tidur', category: 'Kata kerja' },
    { japanese: 'すき', romaji: 'suki', meaning: 'Suka', category: 'Kata sifat' },
    { japanese: 'きらい', romaji: 'kirai', meaning: 'Tidak suka', category: 'Kata sifat' },
    { japanese: 'しずか', romaji: 'shizuka', meaning: 'Tenang / sepi', category: 'Kata sifat' },
    { japanese: 'にぎやか', romaji: 'nigiyaka', meaning: 'Ramai / meriah', category: 'Kata sifat' },
    { japanese: 'べんり', romaji: 'benri', meaning: 'Praktis / nyaman', category: 'Kata sifat' },
    { japanese: 'いくら', romaji: 'ikura', meaning: 'Berapa harganya?', category: 'Belanja' },
    { japanese: 'これ', romaji: 'kore', meaning: 'Ini', category: 'Belanja' },
    { japanese: 'それ', romaji: 'sore', meaning: 'Itu (dekat lawan bicara)', category: 'Belanja' },
    { japanese: 'ください', romaji: 'kudasai', meaning: 'Tolong berikan / saya minta', category: 'Belanja' },
    { japanese: 'たかい', romaji: 'takai', meaning: 'Mahal / tinggi', category: 'Belanja' },
    { japanese: 'やすい', romaji: 'yasui', meaning: 'Murah', category: 'Belanja' },
    { japanese: 'あれ', romaji: 'are', meaning: 'Benda itu (jauh dari pembicara dan lawan bicara)', category: 'Belanja' },
    { japanese: 'どれ', romaji: 'dore', meaning: 'Yang mana?', category: 'Belanja' },
    { japanese: 'ふく', romaji: 'fuku', meaning: 'Pakaian', category: 'Belanja' },
    { japanese: 'おかね', romaji: 'okane', meaning: 'Uang', category: 'Belanja' },
    { japanese: 'レジ', romaji: 'reji', meaning: 'Kasir / mesin kasir', category: 'Belanja' },
    { japanese: 'サイズ', romaji: 'saizu', meaning: 'Ukuran', category: 'Belanja' },
    { japanese: 'ちいさめ', romaji: 'chiisame', meaning: 'Agak kecil', category: 'Belanja' },
    { japanese: 'エプロン', romaji: 'epuron', meaning: 'Celemek', category: 'Pakaian' },
    { japanese: 'ぼうし', romaji: 'boushi', meaning: 'Topi', category: 'Pakaian' },
    { japanese: 'くつ', romaji: 'kutsu', meaning: 'Sepatu', category: 'Pakaian' },
    { japanese: 'シャツ', romaji: 'shatsu', meaning: 'Kemeja', category: 'Pakaian' },
    { japanese: 'ズボン', romaji: 'zubon', meaning: 'Celana panjang', category: 'Pakaian' },
    { japanese: 'ドア', romaji: 'doa', meaning: 'Pintu', category: 'Sehari-hari' },
    { japanese: 'まど', romaji: 'mado', meaning: 'Jendela', category: 'Sehari-hari' },
    { japanese: 'つくえ', romaji: 'tsukue', meaning: 'Meja', category: 'Sehari-hari' },
    { japanese: 'いす', romaji: 'isu', meaning: 'Kursi', category: 'Sehari-hari' },
    { japanese: 'とけい', romaji: 'tokei', meaning: 'Jam / arloji', category: 'Sehari-hari' },
    { japanese: 'じしょ', romaji: 'jisho', meaning: 'Kamus', category: 'Pendidikan' },
    { japanese: 'しゅくだい', romaji: 'shukudai', meaning: 'Pekerjaan rumah', category: 'Pendidikan' },
    { japanese: 'しつもん', romaji: 'shitsumon', meaning: 'Pertanyaan', category: 'Pendidikan' },
    { japanese: 'こたえ', romaji: 'kotae', meaning: 'Jawaban', category: 'Pendidikan' },
    { japanese: 'もんだい', romaji: 'mondai', meaning: 'Soal / masalah', category: 'Pendidikan' },
    { japanese: 'かいしゃ', romaji: 'kaisha', meaning: 'Perusahaan / kantor', category: 'Pekerjaan' },
    { japanese: 'しごと', romaji: 'shigoto', meaning: 'Pekerjaan', category: 'Pekerjaan' },
    { japanese: 'しゃいん', romaji: 'shain', meaning: 'Karyawan perusahaan', category: 'Pekerjaan' },
    { japanese: 'はたらく', romaji: 'hataraku', meaning: 'Bekerja', category: 'Pekerjaan' },
    { japanese: 'かんじ', romaji: 'kanji', meaning: 'Huruf kanji', category: 'Pendidikan' },
    { japanese: 'ことば', romaji: 'kotoba', meaning: 'Kata / bahasa', category: 'Pendidikan' },
    { japanese: 'はな', romaji: 'hana', meaning: 'Bunga', category: 'Alam' },
    { japanese: 'き', romaji: 'ki', meaning: 'Pohon', category: 'Alam' },
    { japanese: 'そら', romaji: 'sora', meaning: 'Langit', category: 'Alam' },
    { japanese: 'うみ', romaji: 'umi', meaning: 'Laut', category: 'Alam' },
    { japanese: 'やま', romaji: 'yama', meaning: 'Gunung', category: 'Alam' },
    { japanese: 'かわ', romaji: 'kawa', meaning: 'Sungai', category: 'Alam' },
    { japanese: 'あたたかい', romaji: 'atatakai', meaning: 'Hangat', category: 'Cuaca' },
    { japanese: 'すずしい', romaji: 'suzushii', meaning: 'Sejuk', category: 'Cuaca' },
    { japanese: 'てんき', romaji: 'tenki', meaning: 'Cuaca', category: 'Cuaca' },
    { japanese: 'きぶん', romaji: 'kibun', meaning: 'Perasaan / suasana hati', category: 'Kesehatan' },
    { japanese: 'いたい', romaji: 'itai', meaning: 'Sakit / nyeri', category: 'Kesehatan' },
    { japanese: 'くすり', romaji: 'kusuri', meaning: 'Obat', category: 'Kesehatan' },
    { japanese: 'びょうき', romaji: 'byouki', meaning: 'Sakit / penyakit', category: 'Kesehatan' },
    { japanese: 'げんき', romaji: 'genki', meaning: 'Sehat / bersemangat', category: 'Kesehatan' },
    { japanese: 'りょうり', romaji: 'ryouri', meaning: 'Masakan', category: 'Makanan' },
    { japanese: 'やきにく', romaji: 'yakiniku', meaning: 'Daging panggang Jepang', category: 'Makanan' },
    { japanese: 'ラーメン', romaji: 'raamen', meaning: 'Mi ramen', category: 'Makanan' },
    { japanese: 'みそしる', romaji: 'misoshiru', meaning: 'Sup miso', category: 'Makanan' },
    { japanese: 'あまい', romaji: 'amai', meaning: 'Manis', category: 'Makanan' },
    { japanese: 'からい', romaji: 'karai', meaning: 'Pedas', category: 'Makanan' },
    { japanese: 'しょっぱい', romaji: 'shoppai', meaning: 'Asin', category: 'Makanan' },
    { japanese: 'にがい', romaji: 'nigai', meaning: 'Pahit', category: 'Makanan' },
    { japanese: 'ききます', romaji: 'kikimasu', meaning: 'Mendengarkan / bertanya (bentuk sopan)', category: 'Kata kerja' },
    { japanese: 'おしえます', romaji: 'oshiemasu', meaning: 'Mengajar / memberi tahu', category: 'Kata kerja' },
    { japanese: 'つくります', romaji: 'tsukurimasu', meaning: 'Membuat', category: 'Kata kerja' },
    { japanese: 'あいます', romaji: 'aimasu', meaning: 'Bertemu', category: 'Kata kerja' },
    { japanese: 'かえります', romaji: 'kaerimasu', meaning: 'Pulang', category: 'Kata kerja' },
    { japanese: 'すわります', romaji: 'suwarimasu', meaning: 'Duduk', category: 'Kata kerja' },
    { japanese: 'たちます', romaji: 'tachimasu', meaning: 'Berdiri', category: 'Kata kerja' },
    { japanese: 'あけます', romaji: 'akemasu', meaning: 'Membuka', category: 'Kata kerja' },
    { japanese: 'しめます', romaji: 'shimemasu', meaning: 'Menutup', category: 'Kata kerja' },
    { japanese: 'おもしろい', romaji: 'omoshiroi', meaning: 'Menarik / lucu', category: 'Kata sifat' },
    { japanese: 'むずかしい', romaji: 'muzukashii', meaning: 'Sulit', category: 'Kata sifat' },
    { japanese: 'かんたん', romaji: 'kantan', meaning: 'Mudah / sederhana', category: 'Kata sifat' },
    { japanese: 'あかるい', romaji: 'akarui', meaning: 'Terang / ceria', category: 'Kata sifat' },
    { japanese: 'くらい', romaji: 'kurai', meaning: 'Gelap', category: 'Kata sifat' },
    { japanese: 'とても', romaji: 'totemo', meaning: 'Sangat', category: 'Keterangan' },
    { japanese: 'すこし', romaji: 'sukoshi', meaning: 'Sedikit', category: 'Keterangan' },
    { japanese: 'たくさん', romaji: 'takusan', meaning: 'Banyak', category: 'Keterangan' },
    { japanese: 'いつも', romaji: 'itsumo', meaning: 'Selalu', category: 'Keterangan' },
    { japanese: 'ときどき', romaji: 'tokidoki', meaning: 'Kadang-kadang', category: 'Keterangan' },
    { japanese: 'ゆっくり', romaji: 'yukkuri', meaning: 'Perlahan-lahan', category: 'Keterangan' },
    { japanese: 'いっしょに', romaji: 'isshoni', meaning: 'Bersama-sama', category: 'Keterangan' },
    { japanese: 'すぐ', romaji: 'sugu', meaning: 'Segera / langsung', category: 'Keterangan' },
    { japanese: 'こちら', romaji: 'kochira', meaning: 'Sebelah sini (bentuk sopan)', category: 'Arah' },
    { japanese: 'そちら', romaji: 'sochira', meaning: 'Sebelah situ (bentuk sopan)', category: 'Arah' },
    { japanese: 'あちら', romaji: 'achira', meaning: 'Sebelah sana (bentuk sopan)', category: 'Arah' },
    { japanese: 'ちず', romaji: 'chizu', meaning: 'Peta', category: 'Perjalanan' },
    { japanese: 'ホテル', romaji: 'hoteru', meaning: 'Hotel', category: 'Perjalanan' },
    { japanese: 'りょこう', romaji: 'ryokou', meaning: 'Perjalanan / wisata', category: 'Perjalanan' },
    { japanese: 'よやく', romaji: 'yoyaku', meaning: 'Reservasi / pemesanan', category: 'Perjalanan' },
    { japanese: 'きっぷ', romaji: 'kippu', meaning: 'Tiket', category: 'Perjalanan' },
    { japanese: 'パスポート', romaji: 'pasupooto', meaning: 'Paspor', category: 'Perjalanan' },
    { japanese: 'しゃしん', romaji: 'shashin', meaning: 'Foto', category: 'Sehari-hari' },
    { japanese: 'おんがく', romaji: 'ongaku', meaning: 'Musik', category: 'Hobi' },
    { japanese: 'えいが', romaji: 'eiga', meaning: 'Film', category: 'Hobi' },
    { japanese: 'うた', romaji: 'uta', meaning: 'Lagu', category: 'Hobi' },
    { japanese: 'スポーツ', romaji: 'supootsu', meaning: 'Olahraga', category: 'Hobi' },
    { japanese: 'よく', romaji: 'yoku', meaning: 'Sering / dengan baik', category: 'Keterangan' },
    { japanese: 'そして', romaji: 'soshite', meaning: 'Lalu / dan kemudian', category: 'Keterangan' },
    { japanese: 'でも', romaji: 'demo', meaning: 'Tetapi', category: 'Keterangan' },
    { japanese: 'だから', romaji: 'dakara', meaning: 'Karena itu', category: 'Keterangan' },
    { japanese: 'なぜ', romaji: 'naze', meaning: 'Mengapa', category: 'Pertanyaan' },
    { japanese: 'どうして', romaji: 'doushite', meaning: 'Mengapa / bagaimana bisa', category: 'Pertanyaan' },
    { japanese: 'いつ', romaji: 'itsu', meaning: 'Kapan', category: 'Pertanyaan' },
    { japanese: 'どこ', romaji: 'doko', meaning: 'Di mana', category: 'Pertanyaan' },
    { japanese: 'だれ', romaji: 'dare', meaning: 'Siapa', category: 'Pertanyaan' },
    { japanese: 'なに', romaji: 'nani', meaning: 'Apa', category: 'Pertanyaan' },
];

function buildKanaCards(rows) {
    return rows.flatMap(([kana, sounds, row]) => Array.from(kana).map((character, index) => ({
        japanese: character,
        romaji: sounds[index],
        meaning: `Bunyi “${sounds[index]}” dari baris ${row}.`,
    })));
}

const hiraganaRows = [
    ['あいうえお', ['a', 'i', 'u', 'e', 'o'], 'vokal'],
    ['かきくけこ', ['ka', 'ki', 'ku', 'ke', 'ko'], 'K'],
    ['さしすせそ', ['sa', 'shi', 'su', 'se', 'so'], 'S'],
    ['たちつてと', ['ta', 'chi', 'tsu', 'te', 'to'], 'T'],
    ['なにぬねの', ['na', 'ni', 'nu', 'ne', 'no'], 'N'],
    ['はひふへほ', ['ha', 'hi', 'fu', 'he', 'ho'], 'H'],
    ['まみむめも', ['ma', 'mi', 'mu', 'me', 'mo'], 'M'],
    ['やゆよ', ['ya', 'yu', 'yo'], 'Y'],
    ['らりるれろ', ['ra', 'ri', 'ru', 're', 'ro'], 'R'],
    ['わをん', ['wa', 'wo', 'n'], 'W dan N'],
];
const katakanaRows = [
    ['アイウエオ', ['a', 'i', 'u', 'e', 'o'], 'vokal'],
    ['カキクケコ', ['ka', 'ki', 'ku', 'ke', 'ko'], 'K'],
    ['サシスセソ', ['sa', 'shi', 'su', 'se', 'so'], 'S'],
    ['タチツテト', ['ta', 'chi', 'tsu', 'te', 'to'], 'T'],
    ['ナニヌネノ', ['na', 'ni', 'nu', 'ne', 'no'], 'N'],
    ['ハヒフヘホ', ['ha', 'hi', 'fu', 'he', 'ho'], 'H'],
    ['マミムメモ', ['ma', 'mi', 'mu', 'me', 'mo'], 'M'],
    ['ヤユヨ', ['ya', 'yu', 'yo'], 'Y'],
    ['ラリルレロ', ['ra', 'ri', 'ru', 're', 'ro'], 'R'],
    ['ワヲン', ['wa', 'wo', 'n'], 'W dan N'],
];

function buildSoundCards(rows, notation) {
    return rows.flatMap(([characters, sounds, rule]) => {
        const kana = Array.from(characters);
        const moras = [];
        kana.forEach((character) => {
            if ('ゃゅょャュョ'.includes(character) && moras.length > 0) {
                moras[moras.length - 1] += character;
            } else {
                moras.push(character);
            }
        });
        return moras.map((character, index) => ({
            japanese: character,
            romaji: sounds[index],
            meaning: `Bunyi ${sounds[index]}${rule ? ` (${rule})` : ''} pada ${notation}.`,
        }));
    });
}

const voicedHiragana = [
    ['がぎぐげご', ['ga', 'gi', 'gu', 'ge', 'go'], 'tenten pada baris K'],
    ['ざじずぜぞ', ['za', 'ji', 'zu', 'ze', 'zo'], 'tenten pada baris S'],
    ['だぢづでど', ['da', 'ji', 'zu', 'de', 'do'], 'tenten pada baris T; ぢ dan づ jarang'],
    ['ばびぶべぼ', ['ba', 'bi', 'bu', 'be', 'bo'], 'tenten pada baris H'],
    ['ぱぴぷぺぽ', ['pa', 'pi', 'pu', 'pe', 'po'], 'maru pada baris H'],
];
const voicedKatakana = [
    ['ガギグゲゴ', ['ga', 'gi', 'gu', 'ge', 'go'], 'tenten pada baris K'],
    ['ザジズゼゾ', ['za', 'ji', 'zu', 'ze', 'zo'], 'tenten pada baris S'],
    ['ダヂヅデド', ['da', 'ji', 'zu', 'de', 'do'], 'tenten pada baris T'],
    ['バビブベボ', ['ba', 'bi', 'bu', 'be', 'bo'], 'tenten pada baris H'],
    ['パピプペポ', ['pa', 'pi', 'pu', 'pe', 'po'], 'maru pada baris H'],
];
const smallYoon = [
    ['きゃきゅきょ', ['kya', 'kyu', 'kyo'], 'gabungan KI + ya kecil'],
    ['しゃしゅしょ', ['sha', 'shu', 'sho'], 'gabungan SHI + ya kecil'],
    ['ちゃちゅちょ', ['cha', 'chu', 'cho'], 'gabungan CHI + ya kecil'],
    ['にゃにゅにょ', ['nya', 'nyu', 'nyo'], 'gabungan NI + ya kecil'],
    ['ひゃひゅひょ', ['hya', 'hyu', 'hyo'], 'gabungan HI + ya kecil'],
    ['みゃみゅみょ', ['mya', 'myu', 'myo'], 'gabungan MI + ya kecil'],
    ['りゃりゅりょ', ['rya', 'ryu', 'ryo'], 'gabungan RI + ya kecil'],
    ['ぎゃぎゅぎょ', ['gya', 'gyu', 'gyo'], 'gabungan GI + ya kecil'],
    ['じゃじゅじょ', ['ja', 'ju', 'jo'], 'gabungan JI + ya kecil'],
    ['びゃびゅびょ', ['bya', 'byu', 'byo'], 'gabungan BI + ya kecil'],
    ['ぴゃぴゅぴょ', ['pya', 'pyu', 'pyo'], 'gabungan PI + ya kecil'],
];

const jlptLevels = [
    { level: 'N5', title: 'Dasar', focus: 'Hiragana, kata sehari-hari', description: 'Mulai dari huruf dasar, salam, angka, dan kosakata untuk kehidupan sehari-hari.', target: 'Memahami kalimat sederhana', key: 'n5', practice: '5 materi dasar' },
    { level: 'N4', title: 'Pengenalan', focus: 'Percakapan dasar', description: 'Membaca kalimat sederhana, tata bahasa dasar, dan situasi rutin di sekolah dan kerja.', target: 'Berkomunikasi dalam konteks umum', key: 'n4', practice: '6 materi umum' },
    { level: 'N3', title: 'Menengah', focus: 'Konversasi lisan', description: 'Memperluas kosakata, memahami teks pendek, dan memakai bentuk yang lebih variatif.', target: 'Menguasai bahasa sehari-hari', key: 'n3', practice: '5 materi menengah' },
    { level: 'N2', title: 'Lanjutan', focus: 'Teks dan opini', description: 'Menyerap bacaan lebih panjang, ekspresi formal, serta kemampuan menulis dan menganalisis.', target: 'Memahami artikel dan diskusi', key: 'n2', practice: '4 materi lanjutan' },
    { level: 'N1', title: 'Mahir', focus: 'Akademik dan formal', description: 'Menjelajah bacaan kompleks, sejarah, opini, dan kemampuan bahasa yang sangat luas.', target: 'Bertahan di konteks profesional', key: 'n1', practice: '4 rangkaian intensif' },
];

const levelPracticeBank = {
    N5: [
        { japanese: 'おはようございます', prompt: 'Kata ini paling umum dipakai untuk menyapa pada waktu?', answer: 'Pagi hari', options: ['Pagi hari', 'Siang hari', 'Malam hari', 'Saat berpisah'] },
        { japanese: 'いち', prompt: 'Apa arti いち?', answer: 'Satu', options: ['Dua', 'Tiga', 'Satu', 'Lima'] },
        { japanese: 'ねこ', prompt: 'Apa arti kata ini?', answer: 'Kucing', options: ['Kucing', 'Air', 'Teman', 'Apel'] },
    ],
    N4: [
        { japanese: 'わたしは がくせいです。', prompt: 'Pola kalimat ini adalah?', answer: 'Topik + は + keterangan + です', options: ['Topik + は + keterangan + です', 'Subjek + modal + kata benda', 'Kata kerja + て + ください', 'Huruf + です + partikel'] },
        { japanese: 'ここは えきです。', prompt: 'Arti kalimat ini adalah?', answer: 'Ini adalah stasiun', options: ['Ini adalah stasiun', 'Di sana ada sekolah', 'Saya pergi ke rumah', 'Saya mengerti'] },
        { japanese: 'みずを のんでいます。', prompt: 'Apa arti paling tepat?', answer: 'Sedang minum air', options: ['Sedang minum air', 'Tolong baca buku', 'Saya makan siang', 'Saya tinggal di rumah'] },
    ],
    N3: [
        { japanese: 'あさごはんを たべて、がっこうに いきます。', prompt: 'Kalimat ini menunjukkan?', answer: 'Rangkaian kegiatan rutin', options: ['Rangkaian kegiatan rutin', 'Pertanyaan harga', 'Hanya satu kata benda', 'Permintaan maaf'] },
        { japanese: 'ゆっくり おねがいします。', prompt: 'Kata ini biasanya dipakai untuk?', answer: 'Meminta bicara atau kerja dengan perlahan', options: ['Meminta bicara atau kerja dengan perlahan', 'Menanyakan nama', 'Menyatakan nama tempat', 'Meminta maaf'] },
        { japanese: 'はやく ねてください。', prompt: 'Apa artinya?', answer: 'Tolong tidur lebih cepat', options: ['Tolong tidur lebih cepat', 'Tolong datang ke sini', 'Tolong lihat buku', 'Tolong katakan sesuatu'] },
    ],
    N2: [
        { japanese: 'しゅくだいが たくさん あります。', prompt: 'Apa arti kalimat ini?', answer: 'Ada banyak pekerjaan rumah', options: ['Ada banyak pekerjaan rumah', 'Saya tidak suka makanan', 'Kucing itu besar', 'Saya pergi ke sekolah'] },
        { japanese: 'この じしょは とても べんりです。', prompt: 'Kalimat ini menilai?', answer: 'Kamus ini sangat berguna', options: ['Kamus ini sangat berguna', 'Kucing itu lucu', 'Ini uang saya', 'Saya tidak mengerti'] },
        { japanese: 'にほんごで かいた しょうせつを よみました。', prompt: 'Apa yang dilakukan?', answer: 'Membaca novel yang ditulis dalam bahasa Jepang', options: ['Membaca novel yang ditulis dalam bahasa Jepang', 'Makan di sekolah', 'Mengajar siswa', 'Pergi ke stasiun'] },
    ],
    N1: [
        { japanese: 'この しけんでは きょうかいの じょうほうを せつめいする ひつようが あります。', prompt: 'Kalimat ini menekankan?', answer: 'Perlu menjelaskan informasi dari komunitas pada ujian ini', options: ['Perlu menjelaskan informasi dari komunitas pada ujian ini', 'Saya sedang turun ke stasiun', 'Hari ini hujan', 'Ini sepatu baru'] },
        { japanese: 'じょうほうを しゅうしゅうして、きほんを ふかめる', prompt: 'Apa fokusnya?', answer: 'Mengumpulkan informasi dan memperdalam dasar', options: ['Mengumpulkan informasi dan memperdalam dasar', 'Membeli makanan', 'Berjalan ke rumah', 'Mengucapkan salam'] },
        { japanese: 'かんがえを しっかり しめす', prompt: 'Apa arti paling tepat?', answer: 'Menyampaikan pemikiran dengan jelas', options: ['Menyampaikan pemikiran dengan jelas', 'Membaca buku cepat', 'Mandi pagi', 'Menunggu di rumah'] },
    ],
};

let selectedJlptLevel = 'N5';

const lessons = {
    hiragana: {
        title: 'Hiragana: 46 huruf dasar',
        category: 'FONDASI · HURUF JEPANG',
        description: 'Baca 46 bunyi dasar hiragana, huruf yang dipakai untuk banyak kata dan akhiran bahasa Jepang.',
        duration: '15 MENIT', icon: 'あ', tone: 'hiragana', cards: buildKanaCards(hiraganaRows),
    },
    katakana: {
        title: 'Katakana: 46 huruf dasar',
        category: 'FONDASI · HURUF JEPANG',
        description: 'Kenali 46 huruf katakana, yang sering dipakai untuk kata serapan dan nama dari luar Jepang.',
        duration: '15 MENIT', icon: 'ア', tone: 'greeting', cards: buildKanaCards(katakanaRows),
    },
    greetings: {
        title: 'Salam sopan dan sehari-hari',
        category: 'PERCAKAPAN · SAPAAN',
        description: 'Pelajari salam, ucapan terima kasih, dan cara meminta maaf pada berbagai situasi.',
        duration: '8 MENIT', icon: '挨', tone: 'greeting',
        cards: [
            { japanese: 'おはようございます', romaji: 'ohayou gozaimasu', meaning: 'Selamat pagi; gunakan bentuk ini dalam situasi sopan.' },
            { japanese: 'こんにちは', romaji: 'konnichiwa', meaning: 'Halo atau selamat siang.' },
            { japanese: 'こんばんは', romaji: 'konbanwa', meaning: 'Selamat malam saat menyapa.' },
            { japanese: 'おやすみなさい', romaji: 'oyasuminasai', meaning: 'Selamat tidur sebelum beristirahat.' },
            { japanese: 'ありがとうございます', romaji: 'arigatou gozaimasu', meaning: 'Terima kasih dalam bentuk sopan.' },
            { japanese: 'すみません', romaji: 'sumimasen', meaning: 'Permisi, atau maaf dalam situasi tertentu.' },
            { japanese: 'はじめまして', romaji: 'hajimemashite', meaning: 'Salam yang diucapkan saat pertama berkenalan.' },
            { japanese: 'よろしくおねがいします', romaji: 'yoroshiku onegaishimasu', meaning: 'Ungkapan sopan saat berkenalan atau meminta kerja sama.' },
        ],
    },
    introductions: {
        title: 'Perkenalan diri',
        category: 'PERCAKAPAN · PERKENALAN',
        description: 'Rangkai nama, asal, dan sapaan menjadi perkenalan singkat.',
        duration: '10 MENIT', icon: '私', tone: 'hiragana',
        cards: [
            { japanese: 'わたしは ___ です。', romaji: 'watashi wa ___ desu', meaning: 'Saya adalah ___. Isi bagian kosong dengan nama atau identitasmu.' },
            { japanese: 'わたしは アニ です。', romaji: 'watashi wa Ani desu', meaning: 'Saya Ani. Nama orang asing biasanya ditulis dengan katakana.' },
            { japanese: 'インドネシアから きました。', romaji: 'Indonesia kara kimashita', meaning: 'Saya berasal dari Indonesia.' },
            { japanese: 'おなまえは なんですか。', romaji: 'onamae wa nan desu ka', meaning: 'Siapa nama Anda? Bentuk sopan untuk bertanya nama.' },
            { japanese: 'はじめまして。', romaji: 'hajimemashite', meaning: 'Salam kenal. Ucapkan saat bertemu seseorang untuk pertama kali.' },
            { japanese: 'よろしく おねがいします。', romaji: 'yoroshiku onegaishimasu', meaning: 'Senang berkenalan dengan Anda. Ungkapan penutup perkenalan yang sopan.' },
        ],
    },
    numbers: {
        title: 'Angka satu sampai sepuluh',
        category: 'DASAR · ANGKA',
        description: 'Latih angka Jepang dan cara membacanya dalam situasi sehari-hari.',
        duration: '8 MENIT', icon: '一', tone: 'numbers',
        cards: [
            { japanese: '一', romaji: 'ichi', meaning: '1 · satu' }, { japanese: '二', romaji: 'ni', meaning: '2 · dua' },
            { japanese: '三', romaji: 'san', meaning: '3 · tiga' }, { japanese: '四', romaji: 'yon / shi', meaning: '4 · empat. “Yon” lebih sering dipakai untuk menghitung umum.' },
            { japanese: '五', romaji: 'go', meaning: '5 · lima' }, { japanese: '六', romaji: 'roku', meaning: '6 · enam' },
            { japanese: '七', romaji: 'nana / shichi', meaning: '7 · tujuh. “Nana” sering dipakai agar lebih jelas.' },
            { japanese: '八', romaji: 'hachi', meaning: '8 · delapan' }, { japanese: '九', romaji: 'kyuu / ku', meaning: '9 · sembilan' },
            { japanese: '十', romaji: 'juu', meaning: '10 · sepuluh' },
        ],
    },
    grammar: {
        title: 'Kalimat dasar: は dan です',
        category: 'TATA BAHASA · PEMULA',
        description: 'Susun kalimat pernyataan dan pertanyaan sederhana dengan pola yang mudah diingat.',
        duration: '12 MENIT', icon: '文', tone: 'numbers',
        cards: [
            { japanese: 'わたしは がくせいです。', romaji: 'watashi wa gakusei desu', meaning: 'Saya seorang pelajar. Pola: topik + は + keterangan + です.' },
            { japanese: 'は = penanda topik', romaji: 'wa (partikel)', meaning: 'Ditulis は tetapi dibaca “wa” saat berfungsi sebagai partikel penanda topik.' },
            { japanese: 'です = bentuk sopan', romaji: 'desu', meaning: 'Berada di akhir kalimat untuk membuat pernyataan sopan, kira-kira berarti “adalah”.' },
            { japanese: 'これは ほんです。', romaji: 'kore wa hon desu', meaning: 'Ini adalah buku. これ (kore) berarti “ini”.' },
            { japanese: 'これは なんですか。', romaji: 'kore wa nan desu ka', meaning: 'Ini apa? Tambahkan か di akhir untuk membentuk pertanyaan sopan.' },
            { japanese: 'はい、そうです。', romaji: 'hai, sou desu', meaning: 'Ya, betul.' },
            { japanese: 'いいえ、ちがいます。', romaji: 'iie, chigaimasu', meaning: 'Tidak, bukan begitu.' },
        ],
    },
    everyday: {
        title: 'Kosakata sehari-hari',
        category: 'KOSAKATA · SEHARI-HARI',
        description: 'Kenali kata umum untuk benda, orang, dan tempat yang sering kamu temui.',
        duration: '10 MENIT', icon: '本', tone: 'greeting',
        cards: [
            { japanese: 'みず', romaji: 'mizu', meaning: 'Air' }, { japanese: 'ごはん', romaji: 'gohan', meaning: 'Nasi atau makanan' },
            { japanese: 'ほん', romaji: 'hon', meaning: 'Buku' }, { japanese: 'ともだち', romaji: 'tomodachi', meaning: 'Teman' },
            { japanese: 'ねこ', romaji: 'neko', meaning: 'Kucing' }, { japanese: 'いぬ', romaji: 'inu', meaning: 'Anjing' },
            { japanese: 'がっこう', romaji: 'gakkou', meaning: 'Sekolah' }, { japanese: 'えき', romaji: 'eki', meaning: 'Stasiun' },
            { japanese: 'おいしい', romaji: 'oishii', meaning: 'Enak; digunakan untuk menggambarkan makanan.' },
        ],
    },
    verbs: {
        title: 'Kata kerja pertama',
        category: 'TATA BAHASA · KATA KERJA',
        description: 'Perkaya kalimat dengan kata kerja dasar untuk kegiatan setiap hari.',
        duration: '10 MENIT', icon: '動', tone: 'numbers',
        cards: [
            { japanese: 'たべる', romaji: 'taberu', meaning: 'Makan · bentuk kamus, gaya santai.' },
            { japanese: 'のみます', romaji: 'nomimasu', meaning: 'Minum · bentuk sopan dari のむ (nomu).' },
            { japanese: 'いきます', romaji: 'ikimasu', meaning: 'Pergi · bentuk sopan dari いく (iku).' },
            { japanese: 'きます', romaji: 'kimasu', meaning: 'Datang · bentuk sopan dari くる (kuru).' },
            { japanese: 'みます', romaji: 'mimasu', meaning: 'Melihat atau menonton · bentuk sopan dari みる (miru).' },
            { japanese: 'よみます', romaji: 'yomimasu', meaning: 'Membaca · bentuk sopan dari よむ (yomu).' },
            { japanese: 'はなします', romaji: 'hanashimasu', meaning: 'Berbicara · bentuk sopan dari はなす (hanasu).' },
        ],
    },
    kanaPlus: {
        title: 'Dakuten dan bunyi gabungan',
        category: 'FONDASI · PENGEMBANGAN KANA',
        description: 'Pelajari bunyi bertanda dakuten, handakuten, dan gabungan huruf kecil ゃ, ゅ, ょ.',
        duration: '15 MENIT', icon: 'ぎ', tone: 'hiragana',
        cards: [
            ...buildSoundCards(voicedHiragana, 'hiragana'),
            ...buildSoundCards(voicedKatakana, 'katakana'),
            ...buildSoundCards(smallYoon, 'bunyi gabungan'),
            { japanese: 'っ = konsonan ganda', romaji: 'sokuon', meaning: 'つ kecil menahan satu ketukan sebelum konsonan berikutnya, seperti pada きって (kitte, perangko).' },
            { japanese: 'ー = bunyi panjang', romaji: 'chouon', meaning: 'Garis panjang di katakana memanjangkan vokal sebelumnya, seperti コーヒー (koohii, kopi).' },
        ],
    },
    particles: {
        title: 'Partikel は・の・を・に・で',
        category: 'TATA BAHASA · PARTIKEL',
        description: 'Pahami penanda topik, kepemilikan, objek, tujuan, dan tempat kegiatan.',
        duration: '15 MENIT', icon: '助', tone: 'numbers',
        cards: [
            { japanese: 'わたしは アニです。', romaji: 'wa · topik', meaning: 'は menandai topik kalimat. Sebagai partikel, ditulis は tetapi dibaca “wa”.' },
            { japanese: 'わたしの ほん', romaji: 'no · kepemilikan', meaning: 'の menghubungkan kata benda: buku saya.' },
            { japanese: 'みずを のみます。', romaji: 'o · objek', meaning: 'を menandai objek yang dikenai tindakan: minum air.' },
            { japanese: 'がっこうに いきます。', romaji: 'ni · tujuan', meaning: 'に menandai tujuan: pergi ke sekolah.' },
            { japanese: 'バスで いきます。', romaji: 'de · sarana', meaning: 'で menandai alat atau cara: pergi dengan bus.' },
            { japanese: 'と = dan / bersama', romaji: 'to · penghubung', meaning: 'ほんと ノート berarti buku dan buku catatan; ともだちと berarti bersama teman.' },
            { japanese: 'にも ちがいがあります', romaji: 'konteks menentukan partikel', meaning: 'に juga menandai waktu dan lokasi keberadaan. Pelajari penggunaannya lewat contoh kalimat.' },
            { japanese: 'へ = arah tujuan', romaji: 'e · arah', meaning: 'Ditulis へ tetapi dibaca “e” saat menandai arah perjalanan.' },
        ],
    },
    shopping: {
        title: 'Belanja dan memesan makanan',
        category: 'PERCAKAPAN · DI TOKO',
        description: 'Praktikkan ungkapan berguna untuk bertanya harga dan memesan makanan dengan sopan.',
        duration: '12 MENIT', icon: '店', tone: 'greeting',
        cards: [
            { japanese: 'これは いくらですか。', romaji: 'kore wa ikura desu ka', meaning: 'Berapa harga barang ini?' },
            { japanese: 'これを ください。', romaji: 'kore o kudasai', meaning: 'Tolong berikan yang ini.' },
            { japanese: 'みずを おねがいします。', romaji: 'mizu o onegaishimasu', meaning: 'Air, tolong. Ungkapan sopan untuk memesan.' },
            { japanese: 'メニューを おねがいします。', romaji: 'menyuu o onegaishimasu', meaning: 'Tolong menu-nya.' },
            { japanese: 'おいしいです。', romaji: 'oishii desu', meaning: 'Rasanya enak.' },
            { japanese: 'おかいけい おねがいします。', romaji: 'okaikei onegaishimasu', meaning: 'Minta bon / tagihannya, tolong.' },
            { japanese: 'たかいですね。', romaji: 'takai desu ne', meaning: 'Mahal juga, ya.' },
            { japanese: 'ありがとうございます。', romaji: 'arigatou gozaimasu', meaning: 'Terima kasih, sebagai penutup percakapan yang sopan.' },
        ],
    },
    time: {
        title: 'Jam, hari, dan jadwal',
        category: 'KOSAKATA · WAKTU',
        description: 'Sebutkan waktu, hari dalam seminggu, dan kegiatan sederhana.',
        duration: '12 MENIT', icon: '時', tone: 'numbers',
        cards: [
            { japanese: 'いま なんじですか。', romaji: 'ima nanji desu ka', meaning: 'Sekarang pukul berapa?' },
            { japanese: 'いちじ', romaji: 'ichiji', meaning: 'Pukul satu. Angka + じ (ji) membentuk jam.' },
            { japanese: 'さんじはん', romaji: 'sanjihan', meaning: 'Pukul setengah empat (3.30). はん berarti setengah.' },
            { japanese: 'げつようび', romaji: 'getsuyoubi', meaning: 'Hari Senin.' },
            { japanese: 'きんようび', romaji: 'kinyoubi', meaning: 'Hari Jumat.' },
            { japanese: 'まいにち', romaji: 'mainichi', meaning: 'Setiap hari.' },
            { japanese: 'きょうは げつようびです。', romaji: 'kyou wa getsuyoubi desu', meaning: 'Hari ini hari Senin. Ganti nama harinya sesuai kebutuhan.' },
            { japanese: 'あした がっこうに いきます。', romaji: 'ashita gakkou ni ikimasu', meaning: 'Besok saya pergi ke sekolah.' },
        ],
    },
    adjectives: {
        title: 'Kata sifat dan bentuk negatif',
        category: 'TATA BAHASA · KATA SIFAT',
        description: 'Deskripsikan tempat dan benda, lalu ubah kata sifat ke bentuk negatif yang sopan.',
        duration: '12 MENIT', icon: '好', tone: 'greeting',
        cards: [
            { japanese: 'この まちは しずかです。', romaji: 'kono machi wa shizuka desu', meaning: 'Kota ini tenang. しずか adalah kata sifat-na.' },
            { japanese: 'この ほんは おもしろいです。', romaji: 'kono hon wa omoshiroi desu', meaning: 'Buku ini menarik. おもしろい adalah kata sifat-i.' },
            { japanese: 'おいしい → おいしくない', romaji: 'oishii → oishikunai', meaning: 'Enak → tidak enak. Kata sifat-i: ubah い terakhir menjadi くない.' },
            { japanese: 'あつい → あつくない', romaji: 'atsui → atsukunai', meaning: 'Panas → tidak panas. Inilah bentuk negatif santai kata sifat-i.' },
            { japanese: 'しずかです → しずかではありません', romaji: 'shizuka desu → shizuka dewa arimasen', meaning: 'Tenang → tidak tenang. Bentuk negatif sopan kata sifat-na.' },
            { japanese: 'すきです。', romaji: 'suki desu', meaning: 'Saya suka. Dalam bahasa Jepang, suka menggunakan pola kata benda + が + すきです.' },
            { japanese: 'ねこが すきです。', romaji: 'neko ga suki desu', meaning: 'Saya suka kucing. が menandai hal yang disukai.' },
            { japanese: 'とても おいしいです。', romaji: 'totemo oishii desu', meaning: 'Sangat enak. とても (totemo) berarti “sangat”.' },
        ],
    },
    kanji: {
        title: 'Kanji dasar: angka dan waktu',
        category: 'KANJI · PEMULA',
        description: 'Mulai mengenali kanji umum dan gabungkan angka dasar dengan penanda tanggal.',
        duration: '15 MENIT', icon: '漢', tone: 'numbers',
        cards: [
            { japanese: '一・二・三', romaji: 'ichi · ni · san', meaning: 'Angka satu, dua, tiga.' },
            { japanese: '四・五・六', romaji: 'yon · go · roku', meaning: 'Angka empat, lima, enam.' },
            { japanese: '七・八・九・十', romaji: 'nana · hachi · kyuu · juu', meaning: 'Angka tujuh, delapan, sembilan, sepuluh.' },
            { japanese: '日', romaji: 'hi / nichi', meaning: 'Matahari atau hari. Kanji ini punya beberapa cara baca menurut kata.' },
            { japanese: '月', romaji: 'tsuki / getsu', meaning: 'Bulan; juga muncul di nama hari Senin: 月曜日 (getsuyoubi).' },
            { japanese: '人', romaji: 'hito / jin', meaning: 'Orang; misalnya 日本人 (nihonjin) berarti orang Jepang.' },
            { japanese: '山', romaji: 'yama', meaning: 'Gunung.' },
            { japanese: '川', romaji: 'kawa', meaning: 'Sungai.' },
            { japanese: '水', romaji: 'mizu', meaning: 'Air.' },
            { japanese: '火', romaji: 'hi / ka', meaning: 'Api; juga ada di 火曜日 (kayoubi), hari Selasa.' },
            { japanese: '木', romaji: 'ki / moku', meaning: 'Pohon atau kayu.' },
            { japanese: '金', romaji: 'kane / kin', meaning: 'Uang atau emas; 金曜日 (kinyoubi) berarti Jumat.' },
            { japanese: '土', romaji: 'tsuchi / do', meaning: 'Tanah; 土曜日 (doyoubi) berarti Sabtu.' },
            { japanese: '本', romaji: 'hon', meaning: 'Buku; perhatikan bahwa 日本 (nihon) berarti Jepang.' },
            { japanese: '大・小', romaji: 'dai / shou', meaning: 'Besar dan kecil; 大きい (ookii) berarti besar.' },
        ],
    },
    teForm: {
        title: 'Bentuk te: permintaan dan sambungan',
        category: 'TATA BAHASA · KATA KERJA',
        description: 'Latih bentuk -te untuk permintaan sopan, menghubungkan kegiatan, dan menyatakan aktivitas.',
        duration: '18 MENIT', icon: 'て', tone: 'hiragana',
        cards: [
            { japanese: 'みてください。', romaji: 'mite kudasai', meaning: 'Tolong lihat. Bentuk te + ください menyatakan permintaan sopan.' },
            { japanese: 'よんでください。', romaji: 'yonde kudasai', meaning: 'Tolong baca. よむ berubah menjadi よんで.' },
            { japanese: 'ちょっと まってください。', romaji: 'chotto matte kudasai', meaning: 'Tolong tunggu sebentar. まつ berubah menjadi まって.' },
            { japanese: 'みずを のんでいます。', romaji: 'mizu o nonde imasu', meaning: 'Sedang minum air. Bentuk te + います dapat menunjukkan aktivitas yang berlangsung.' },
            { japanese: 'あさごはんを たべて、がっこうに いきます。', romaji: 'asagohan o tabete, gakkou ni ikimasu', meaning: 'Saya sarapan, lalu pergi ke sekolah. Bentuk te juga menghubungkan kegiatan.' },
            { japanese: 'ここに なまえを かいてください。', romaji: 'koko ni namae o kaite kudasai', meaning: 'Tolong tulis nama di sini. かく berubah menjadi かいて.' },
            { japanese: 'ドアを あけてください。', romaji: 'doa o akete kudasai', meaning: 'Tolong buka pintunya.' },
            { japanese: 'でんきを けしてください。', romaji: 'denki o keshite kudasai', meaning: 'Tolong matikan lampunya.' },
            { japanese: 'もういちど いってください。', romaji: 'mou ichido itte kudasai', meaning: 'Tolong ucapkan sekali lagi.' },
            { japanese: 'て form perlu latihan', romaji: 'bentuk berubah menurut kelompok kata kerja', meaning: 'Contoh: たべる → たべて, のむ → のんで, いく → いって. Perhatikan bahwa いく punya perubahan khusus.' },
        ],
    },
    travel: {
        title: 'Bahasa Jepang untuk bepergian',
        category: 'PERCAKAPAN · PERJALANAN',
        description: 'Tanya arah, cari fasilitas umum, dan minta bantuan saat berada di Jepang.',
        duration: '15 MENIT', icon: '旅', tone: 'greeting',
        cards: [
            { japanese: 'えきは どこですか。', romaji: 'eki wa doko desu ka', meaning: 'Di mana stasiun?' },
            { japanese: 'トイレは どこですか。', romaji: 'toire wa doko desu ka', meaning: 'Di mana toilet?' },
            { japanese: 'ここから とおいですか。', romaji: 'koko kara tooi desu ka', meaning: 'Apakah tempatnya jauh dari sini?' },
            { japanese: 'みぎに まがってください。', romaji: 'migi ni magatte kudasai', meaning: 'Tolong belok ke kanan.' },
            { japanese: 'ひだりに まがってください。', romaji: 'hidari ni magatte kudasai', meaning: 'Tolong belok ke kiri.' },
            { japanese: 'まっすぐ いってください。', romaji: 'massugu itte kudasai', meaning: 'Tolong jalan terus.' },
            { japanese: 'きっぷを ひとつ ください。', romaji: 'kippu o hitotsu kudasai', meaning: 'Tolong satu tiket.' },
            { japanese: 'たすけてください。', romaji: 'tasukete kudasai', meaning: 'Tolong bantu saya.' },
            { japanese: 'ゆっくり おねがいします。', romaji: 'yukkuri onegaishimasu', meaning: 'Mohon bicara atau lakukan dengan perlahan.' },
            { japanese: 'にほんごが すこし わかります。', romaji: 'nihongo ga sukoshi wakarimasu', meaning: 'Saya sedikit mengerti bahasa Jepang.' },
        ],
    },
};

const lessonLevels = ['N5', 'N4', 'N3', 'N2', 'N1'];
Object.entries(lessons).forEach(([, lesson], index) => {
    const levelIndex = Math.min(
        Math.floor(index / Math.max(1, Math.ceil(Object.keys(lessons).length / lessonLevels.length))),
        lessonLevels.length - 1,
    );
    lesson.level = lessonLevels[levelIndex];
});

const quizQuestions = [
    { japanese: 'ありがとう', prompt: 'Apa arti kata ini?', answer: 'Terima kasih', options: ['Sampai jumpa', 'Terima kasih', 'Selamat pagi', 'Selamat malam'] },
    { japanese: 'ねこ', prompt: 'Apa arti kata ini?', answer: 'Kucing', options: ['Buku', 'Air', 'Kucing', 'Teman'] },
    { japanese: 'おはようございます', prompt: 'Kapan biasanya salam ini digunakan?', answer: 'Pagi hari', options: ['Pagi hari', 'Siang hari', 'Malam hari', 'Saat berpisah'] },
    { japanese: 'みず', prompt: 'Apa arti kata ini?', answer: 'Air', options: ['Air', 'Buku', 'Enak', 'Teman'] },
    { japanese: 'こんにちは', prompt: 'Apa arti salam ini?', answer: 'Halo / selamat siang', options: ['Terima kasih', 'Selamat pagi', 'Halo / selamat siang', 'Sampai jumpa'] },
    { japanese: 'いち', prompt: 'Berapa arti kata いち?', answer: 'Satu', options: ['Dua', 'Tiga', 'Satu', 'Lima'] },
    { japanese: 'がっこう', prompt: 'Apa arti kata ini?', answer: 'Sekolah', options: ['Stasiun', 'Sekolah', 'Rumah', 'Toko'] },
    { japanese: 'たべる', prompt: 'Apa arti kata kerja たべる?', answer: 'Makan', options: ['Minum', 'Pergi', 'Membaca', 'Makan'] },
    { japanese: 'はじめまして', prompt: 'Kapan ungkapan ini paling sesuai?', answer: 'Saat pertama berkenalan', options: ['Saat akan tidur', 'Saat pertama berkenalan', 'Saat makan', 'Saat mengucapkan selamat tinggal'] },
    { japanese: 'あたらしい', prompt: 'Apa arti kata sifat ini?', answer: 'Baru', options: ['Besar', 'Enak', 'Baru', 'Kecil'] },
    { japanese: 'いぬ', prompt: 'Apa arti kata ini?', answer: 'Anjing', options: ['Kucing', 'Anjing', 'Ikan', 'Teman'] },
    { japanese: 'おちゃ', prompt: 'Apa arti kata ini?', answer: 'Teh hijau', options: ['Kopi', 'Air', 'Teh hijau', 'Roti'] },
    { japanese: 'みぎ', prompt: 'Ke arah mana みぎ?', answer: 'Kanan', options: ['Kiri', 'Lurus', 'Kanan', 'Jauh'] },
    { japanese: 'きのう', prompt: 'Apa arti kata ini?', answer: 'Kemarin', options: ['Besok', 'Hari ini', 'Kemarin', 'Setiap hari'] },
    { japanese: 'おとうと', prompt: 'Siapa arti おとうと?', answer: 'Adik laki-laki', options: ['Kakak laki-laki', 'Adik laki-laki', 'Ibu', 'Teman'] },
    { japanese: 'すみません', prompt: 'Apa arti umum ungkapan ini?', answer: 'Permisi / maaf', options: ['Terima kasih', 'Selamat tidur', 'Permisi / maaf', 'Sampai jumpa'] },
    { japanese: 'としょかん', prompt: 'Tempat apakah としょかん?', answer: 'Perpustakaan', options: ['Stasiun', 'Rumah sakit', 'Toko', 'Perpustakaan'] },
    { japanese: 'あお', prompt: 'Apa arti あお?', answer: 'Biru', options: ['Merah', 'Hijau', 'Biru', 'Putih'] },
    { japanese: 'でんしゃ', prompt: 'Apa arti でんしゃ?', answer: 'Kereta', options: ['Sepeda', 'Kereta', 'Pesawat', 'Mobil'] },
    { japanese: 'いくらですか。', prompt: 'Kapan pertanyaan ini digunakan?', answer: 'Menanyakan harga', options: ['Menanyakan nama', 'Menanyakan harga', 'Menanyakan waktu', 'Meminta arah'] },
    { japanese: 'よんでください。', prompt: 'Apa arti permintaan ini?', answer: 'Tolong baca', options: ['Tolong tunggu', 'Tolong baca', 'Tolong minum', 'Tolong datang'] },
    { japanese: 'にほんごが すこし わかります。', prompt: 'Apa maksud kalimat ini?', answer: 'Saya sedikit mengerti bahasa Jepang', options: ['Saya ingin belajar besok', 'Saya berasal dari Jepang', 'Saya sedikit mengerti bahasa Jepang', 'Tolong bicara perlahan'] },
    { japanese: '山', prompt: 'Apa arti kanji 山?', answer: 'Gunung', options: ['Gunung', 'Sungai', 'Matahari', 'Pohon'] },
    { japanese: '水', prompt: 'Bagaimana membaca kanji 水?', answer: 'Mizu', options: ['Hi', 'Kawa', 'Mizu', 'Hito'] },
    { japanese: 'て form', prompt: 'Apa perubahan まつ (matsu) ke bentuk te?', answer: 'まって (matte)', options: ['まちて (machite)', 'まって (matte)', 'まつて (matsute)', 'まんで (mande)'] },
    { japanese: 'おねがいします', prompt: 'Ungkapan ini paling dekat artinya dengan…', answer: 'Tolong / mohon', options: ['Tolong / mohon', 'Selamat pagi', 'Tidak suka', 'Murah'] },
    { japanese: 'おかあさん', prompt: 'Apa arti おかあさん?', answer: 'Ibu', options: ['Ayah', 'Ibu', 'Kakak perempuan', 'Adik perempuan'] },
    { japanese: 'おやすみなさい', prompt: 'Kapan salam ini digunakan?', answer: 'Sebelum tidur', options: ['Pagi hari', 'Sebelum tidur', 'Saat makan siang', 'Saat membeli tiket'] },
];

const defaultState = {
    points: 0,
    streak: 0,
    lastActiveDate: null,
    goals: { lesson: false, words: false, quiz: false },
    learnedWords: [],
    completedLessons: [],
    achievementsUnlocked: [],
    quizCompleted: false,
    quizBestScore: null,
    writingCompleted: false,
    writingLevel: 'N5',
    writingBestScores: {},
};

const achievementCatalog = [
    { id: 'first-step', icon: '✦', title: 'Langkah pertama', description: 'Selesaikan 1 materi belajar.', condition: (state) => state.completedLessons.length >= 1 },
    { id: 'word-scout', icon: 'あ', title: 'Word scout', description: 'Tandai 5 kosakata yang sudah kamu kuasai.', condition: (state) => state.learnedWords.length >= 5 },
    { id: 'quiz-run', icon: '✳', title: 'Penantang', description: 'Selesaikan 1 latihan quiz.', condition: (state) => state.quizCompleted },
    { id: 'writer', icon: '✎', title: 'Penulis pemula', description: 'Selesaikan 1 sesi latihan menulis.', condition: (state) => state.writingCompleted },
    { id: 'routine', icon: '✓', title: 'Rutinitas', description: 'Capai semua target harian.', condition: (state) => Object.values(state.goals).every(Boolean) },
    { id: 'streak-3', icon: '♨', title: 'Konsisten', description: 'Tahan streak selama 3 hari beruntun.', condition: (state) => state.streak >= 3 },
    { id: 'point-collector', icon: '★', title: 'Collector', description: 'Kumpulkan 50 poin.', condition: (state) => state.points >= 50 },
];

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return { ...defaultState, goals: { ...defaultState.goals } };
        const parsed = JSON.parse(saved);
        return {
            ...defaultState,
            ...parsed,
            goals: { ...defaultState.goals, ...parsed.goals },
            learnedWords: Array.isArray(parsed.learnedWords) ? parsed.learnedWords : [],
            completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
            achievementsUnlocked: Array.isArray(parsed.achievementsUnlocked) ? parsed.achievementsUnlocked : [],
            writingLevel: jlptLevels.some(({ level }) => level === parsed.writingLevel) ? parsed.writingLevel : 'N5',
            writingBestScores: parsed.writingBestScores && typeof parsed.writingBestScores === 'object' && !Array.isArray(parsed.writingBestScores)
                ? parsed.writingBestScores
                : Number.isInteger(parsed.writingBestScore) ? { N5: parsed.writingBestScore } : {},
        };
    } catch (error) {
        console.error('Progres belajar tidak dapat dibaca dari penyimpanan perangkat.', error);
        showStorageNotice('Progres sebelumnya tidak dapat dibaca. Sesi ini tetap bisa digunakan.');
        return { ...defaultState, goals: { ...defaultState.goals } };
    }
}

let state = loadState();
let selectedWritingLevel = state.writingLevel;
let activeCategory = 'Semua';
let vocabPage = 0;
let activeLesson = null;
let lessonCardIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let writingQuestions = [];
let writingIndex = 0;
let writingScore = 0;
let writingAnswered = false;

function showStorageNotice(message) {
    const notice = document.createElement('div');
    notice.className = 'storage-notice';
    notice.setAttribute('role', 'alert');
    notice.textContent = message;
    Object.assign(notice.style, {
        position: 'fixed', zIndex: '20', right: '16px', bottom: '16px', maxWidth: '320px',
        padding: '12px 15px', borderRadius: '8px', color: '#543f31', background: '#f8e9de',
        boxShadow: '0 4px 18px #0002', fontSize: '12px', lineHeight: '1.5',
    });
    document.body.append(notice);
    window.setTimeout(() => notice.remove(), 6000);
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
    } catch (error) {
        console.error('Progres belajar tidak dapat disimpan di perangkat.', error);
        showStorageNotice('Progres belum dapat disimpan. Periksa ruang penyimpanan browser Anda.');
        return false;
    }
}

function dateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function recordActivity() {
    const today = dateKey();
    if (state.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        state.streak = state.lastActiveDate === dateKey(yesterday) ? state.streak + 1 : 1;
        state.lastActiveDate = today;
    }
    saveState();
}

function refreshAchievements() {
    const unlocked = new Set(state.achievementsUnlocked || []);
    achievementCatalog.forEach((achievement) => {
        if (achievement.condition(state)) unlocked.add(achievement.id);
    });

    const nextUnlocked = [...unlocked];
    const changed = JSON.stringify(state.achievementsUnlocked || []) !== JSON.stringify(nextUnlocked);
    state.achievementsUnlocked = nextUnlocked;

    const container = document.querySelector('#achievement-grid');
    if (!container) return;

    container.innerHTML = achievementCatalog.map((achievement) => {
        const unlockedNow = state.achievementsUnlocked.includes(achievement.id);
        return `
            <article class="achievement-card${unlockedNow ? '' : ' locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <small>${unlockedNow ? 'Unlocked' : 'Locked'}</small>
                <strong>${achievement.title}</strong>
                <p>${achievement.description}</p>
            </article>
        `;
    }).join('');

    if (changed) saveState();
}

function renderProgress() {
    const goals = Object.values(state.goals).filter(Boolean).length;
    document.querySelectorAll('#streak-count, #progress-streak').forEach((node) => { node.textContent = state.streak; });
    document.querySelectorAll('#total-points').forEach((node) => { node.textContent = state.points; });
    document.querySelectorAll('#completed-lessons').forEach((node) => { node.textContent = state.completedLessons.length; });
    document.querySelectorAll('#goal-caption, #progress-goal-caption').forEach((node) => { node.textContent = `${goals} dari 3 selesai`; });

    document.querySelectorAll('.goal-card').forEach((card) => {
        const complete = state.goals[card.dataset.goal];
        card.classList.toggle('done', complete);
        card.querySelector('.goal-check').textContent = complete ? '✓' : '○';
        card.querySelector('.mini-progress span').style.width = complete ? '100%' : '0%';
    });

    refreshAchievements();
    renderWeekly();
}

function resetProgress() {
    const confirmed = window.confirm('Reset semua progres belajar kamu? Tindakan ini menghapus poin, streak, lesson selesai, dan target harian.');
    if (!confirmed) return;

    state = { ...defaultState, goals: { ...defaultState.goals } };
    selectedWritingLevel = state.writingLevel;
    writingQuestions = [];
    writingIndex = 0;
    writingScore = 0;
    writingAnswered = false;
    saveState();
    renderProgress();
    renderCurriculum();
    renderDashboardLessons();
    renderVocabularyFilters();
    renderVocabulary();
    renderQuiz();
    renderWritingLevels();
    showStorageNotice('Progres belajar berhasil direset. Mulai dari awal lagi, semangat!');
}

function renderJlptLevels() {
    const container = document.querySelector('#level-grid');
    if (!container) return;

    container.innerHTML = jlptLevels.map((level) => `
        <article class="level-card ${level.key} ${selectedJlptLevel === level.level ? 'active' : ''}" data-level="${level.level}">
            <span class="level-badge">${level.level}</span>
            <span class="level-focus">${level.focus}</span>
            <h3>${level.title}</h3>
            <p>${level.description}</p>
            <span class="level-tag">${level.practice}</span>
        </article>
    `).join('');
    renderLevelDetail();
}

function renderLevelDetail() {
    const targetLevel = jlptLevels.find((level) => level.level === selectedJlptLevel) || jlptLevels[0];
    const container = document.querySelector('#level-detail');
    if (!container) return;

    const checklist = [
        `Fokus utama: ${targetLevel.focus}`,
        `Tujuan: ${targetLevel.target}`,
        'Latihan kosa kata dan kalimat dasar',
        'Ulangi materi sampai terasa natural',
    ];

    container.innerHTML = `
        <div class="level-detail-copy">
            <div class="eyebrow">LEVEL AKTIF</div>
            <h3>${targetLevel.level} · ${targetLevel.title}</h3>
            <p>${targetLevel.description}</p>
            <div class="level-detail-meta">
                <span class="level-tag-pill">${targetLevel.focus}</span>
                <span class="level-tag-pill">${targetLevel.practice}</span>
            </div>
        </div>
        <ul class="level-checklist">
            ${checklist.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

function getVisibleLessons() {
    const entries = Object.entries(lessons);
    if (!selectedJlptLevel || selectedJlptLevel === 'Semua') return entries;
    return entries.filter(([, lesson]) => (lesson.level || 'N5') === selectedJlptLevel);
}

function renderCurriculum() {
    const entries = getVisibleLessons();
    const countLabel = `${entries.length} UNIT BELAJAR`;
    document.querySelector('#curriculum-unit-count').textContent = countLabel;
    document.querySelector('#hero-unit-count').textContent = countLabel;
    document.querySelector('#curriculum-list').innerHTML = entries.map(([key, lesson], index) => {
        const complete = state.completedLessons.includes(key);
        return `<article class="curriculum-card${complete ? ' lesson-complete' : ''}">
            <div class="curriculum-number">${String(index + 1).padStart(2, '0')}</div>
            <div class="curriculum-icon art-${lesson.tone}">${lesson.icon}</div>
            <div class="curriculum-copy"><span>${lesson.level || 'JLPT'} · ${lesson.category} · ${lesson.cards.length} KARTU</span><h3>${lesson.title}</h3><p>${lesson.description}</p><span class="curriculum-status">${complete ? '✓ SUDAH SELESAI' : lesson.duration}</span></div>
            <button data-start-lesson="${key}" class="round-arrow" aria-label="${complete ? 'Ulangi' : 'Mulai'} ${lesson.title}">→</button>
        </article>`;
    }).join('');
}

function renderDashboardLessons() {
    const entries = getVisibleLessons().slice(0, 3);
    document.querySelector('#dashboard-lessons').innerHTML = entries.map(([key, lesson], index) => {
        const card = lesson.cards[0];
        return `<article class="lesson-card">
            <div class="lesson-art art-${lesson.tone}"><span>${card.japanese}</span><small>${card.romaji}</small></div>
            <div class="lesson-content"><div class="lesson-meta"><span>${lesson.level || 'JLPT'} · UNIT ${String(index + 1).padStart(2, '0')}</span><span>${lesson.duration}</span></div><h3>${lesson.title}</h3><p>${lesson.description}</p><button data-start-lesson="${key}">Mulai belajar <span>→</span></button></div>
        </article>`;
    }).join('');
}

function renderVocabularyFilters() {
    const categories = ['Semua', ...new Set(vocabulary.map((word) => word.category))];
    document.querySelector('#vocab-filters').innerHTML = categories.map((category) =>
        `<button class="filter-pill${category === activeCategory ? ' active' : ''}" data-category="${category}">${category}</button>`
    ).join('');
}

function speakJapanese(phrase) {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
        showStorageNotice('Pelafalan audio tidak didukung oleh browser ini.');
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    utterance.onerror = (event) => {
        console.error('Browser gagal memutar pelafalan bahasa Jepang.', event.error);
        showStorageNotice('Audio pelafalan tidak dapat diputar di perangkat ini.');
    };
    window.speechSynthesis.speak(utterance);
}

const vocabPageSize = 24;

function renderWeekly() {
    const container = document.querySelector('#weekly-grid');
    const today = new Date();
    const mondayOffset = (today.getDay() + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - mondayOffset);
    const names = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    container.innerHTML = names.map((name, index) => {
        const day = new Date(monday);
        day.setDate(monday.getDate() + index);
        const isToday = dateKey(day) === dateKey(today);
        const active = isToday && state.lastActiveDate === dateKey(today);
        return `<div class="day-cell${active ? ' active' : ''}${isToday ? ' today' : ''}"><span class="day-dot">${active ? '✓' : day.getDate()}</span><span>${name}</span></div>`;
    }).join('');
}

function setGoal(goal) {
    if (!state.goals[goal]) {
        state.goals[goal] = true;
        renderProgress();
        saveState();
    }
}

function navigate(view) {
    const target = document.querySelector(`#view-${view}`);
    if (!target) return;
    const pageNames = {
        dashboard: 'Beranda',
        belajar: 'Materi belajar',
        kosakata: 'Kosakata',
        latihan: 'Latihan',
        menulis: 'Latihan menulis',
        progres: 'Progres saya',
    };
    document.querySelectorAll('.page-view').forEach((page) => page.classList.toggle('active', page === target));
    document.querySelectorAll('[data-view-link]').forEach((button) => button.classList.toggle('active', button.dataset.viewLink === view));
    document.querySelector('#page-crumb').textContent = pageNames[view] || 'Beranda';
    document.querySelector('#sidebar').classList.remove('mobile-open');
    if (view === 'kosakata') renderVocabulary();
    if (view === 'latihan') renderQuiz();
    if (view === 'menulis' && writingQuestions.length === 0) startWritingSession();
    if (view === 'progres') renderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderVocabulary() {
    const query = document.querySelector('#vocab-search').value.trim().toLocaleLowerCase('id');
    const filtered = vocabulary.filter((word) => {
        const matchesCategory = activeCategory === 'Semua' || word.category === activeCategory;
        const searchable = `${word.japanese} ${word.romaji} ${word.meaning}`.toLocaleLowerCase('id');
        return matchesCategory && searchable.includes(query);
    });
    document.querySelector('#vocab-total-count').textContent = `${vocabulary.length} KATA`;
    document.querySelector('#hero-word-count').textContent = `${vocabulary.length} KATA`;
    const pageCount = Math.ceil(filtered.length / vocabPageSize);
    vocabPage = Math.min(vocabPage, Math.max(pageCount - 1, 0));
    const pageItems = filtered.slice(vocabPage * vocabPageSize, (vocabPage + 1) * vocabPageSize);
    document.querySelector('#vocab-grid').innerHTML = pageItems.map((word) => {
        const learned = state.learnedWords.includes(word.romaji);
        return `<article class="vocab-card"><span class="vocab-category">${word.category}</span><button class="vocab-speak" data-speak="${word.japanese}" aria-label="Dengar pelafalan ${word.japanese}">▶</button><strong class="vocab-jp">${word.japanese}</strong><span class="vocab-romaji">${word.romaji}</span><div class="vocab-meaning">${word.meaning}</div><button class="vocab-action${learned ? ' learned' : ''}" data-learn-word="${word.romaji}" aria-pressed="${learned}">${learned ? '✓ Sudah belajar' : '+ Sudah tahu'}</button></article>`;
    }).join('');
    document.querySelector('#vocab-empty').classList.toggle('hidden', filtered.length > 0);
    const pagination = document.querySelector('#vocab-pagination');
    pagination.innerHTML = pageCount > 1
        ? `<button class="filter-pill" data-vocab-page="-1" ${vocabPage === 0 ? 'disabled' : ''}>← Sebelumnya</button><span>Halaman ${vocabPage + 1} dari ${pageCount} · ${filtered.length} kata</span><button class="filter-pill" data-vocab-page="1" ${vocabPage === pageCount - 1 ? 'disabled' : ''}>Berikutnya →</button>`
        : `<span>${filtered.length} kata${activeCategory === 'Semua' ? ' tersedia' : ` dalam kategori ${activeCategory}`}</span>`;
}

function renderLessonCard() {
    if (!activeLesson) return;
    const lesson = lessons[activeLesson];
    const card = lesson.cards[lessonCardIndex];
    const stage = document.querySelector('#lesson-stage');
    stage.innerHTML = `
        <div class="lesson-stage-top"><button class="back-link" data-close-lesson>← Kembali ke materi</button><span class="stage-counter">${lesson.title} · ${lessonCardIndex + 1} / ${lesson.cards.length}</span></div>
        <div class="flashcard"><span class="jp">${card.japanese}</span><button class="flashcard-speak" data-speak="${card.japanese.replaceAll('"', '&quot;')}" aria-label="Dengar pelafalan ${card.japanese}">▶ Dengarkan pelafalan</button><span class="romaji">${card.romaji}</span><span class="translation">${card.meaning}</span></div>
        <div class="stage-actions"><span class="muted">Baca perlahan, lalu lanjutkan.</span><button class="button button-primary" data-next-lesson>${lessonCardIndex === lesson.cards.length - 1 ? 'Selesaikan materi' : 'Berikutnya'} <span>→</span></button></div>`;
    stage.classList.remove('hidden');
}

function startLesson(key) {
    if (!lessons[key]) return;
    activeLesson = key;
    lessonCardIndex = 0;
    renderLessonCard();
    document.querySelector('#lesson-stage').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function completeLesson() {
    const key = activeLesson;
    if (!key) return;
    const firstCompletion = !state.completedLessons.includes(key);
    if (firstCompletion) {
        state.completedLessons.push(key);
        state.points += 10;
    }
    state.goals.lesson = true;
    recordActivity();
    renderCurriculum();
    renderProgress();
    activeLesson = null;
    document.querySelector('#lesson-stage').classList.add('hidden');
    showStorageNotice(firstCompletion ? 'Materi selesai! Kamu mendapat 10 poin.' : 'Materi selesai! Bagus, terus ulangi supaya makin ingat.');
}

function getSelectedQuizPool() {
    const pool = levelPracticeBank[selectedJlptLevel] || quizQuestions;
    return pool.length ? pool : quizQuestions;
}

function renderQuiz() {
    const pool = getSelectedQuizPool();
    const content = document.querySelector('#quiz-content');
    const feedback = document.querySelector('#quiz-feedback');
    const next = document.querySelector('#quiz-next');
    const bar = document.querySelector('#quiz-progress-bar');
    const counter = document.querySelector('#quiz-counter');
    feedback.classList.add('hidden');
    next.classList.add('hidden');

    if (quizIndex >= pool.length) {
        const perfect = quizScore === pool.length;
        content.innerHTML = `<div class="eyebrow">SESI SELESAI</div><div class="result-score">${quizScore}<small> / ${pool.length} benar</small></div><p class="question-prompt">${perfect ? 'Luar biasa! Semua jawabanmu benar.' : 'Bagus! Terus berlatih agar makin ingat.'}</p><button class="button button-primary" data-restart-quiz>Ulangi latihan <span>↻</span></button>`;
        counter.textContent = 'SELESAI';
        bar.style.width = '100%';
        if (!state.quizCompleted) state.points += quizScore * 2;
        state.quizCompleted = true;
        state.quizBestScore = Math.max(state.quizBestScore || 0, quizScore);
        state.goals.quiz = true;
        recordActivity();
        renderProgress();
        return;
    }

    const question = pool[quizIndex];
    counter.textContent = `PERTANYAAN ${quizIndex + 1} / ${pool.length} · ${selectedJlptLevel}`;
    bar.style.width = `${(quizIndex / pool.length) * 100}%`;
    content.innerHTML = `<div class="question-jp">${question.japanese}</div><p class="question-prompt">${question.prompt}</p><div class="answer-list">${question.options.map((option) => `<button class="answer-option" data-answer="${option}">${option}</button>`).join('')}</div>`;
}

function answerQuiz(answer) {
    const pool = getSelectedQuizPool();
    if (quizAnswered || quizIndex >= pool.length) return;
    quizAnswered = true;
    const question = pool[quizIndex];
    const correct = answer === question.answer;
    if (correct) quizScore += 1;
    document.querySelectorAll('.answer-option').forEach((option) => {
        option.disabled = true;
        if (option.dataset.answer === question.answer) option.classList.add('correct');
        else if (option.dataset.answer === answer) option.classList.add('incorrect');
    });
    const feedback = document.querySelector('#quiz-feedback');
    feedback.textContent = correct ? 'Benar! Pertahankan ingatan baikmu.' : `Belum tepat. Jawaban yang benar: ${question.answer}.`;
    feedback.classList.toggle('wrong', !correct);
    feedback.classList.remove('hidden');
    document.querySelector('#quiz-next').classList.remove('hidden');
    document.querySelector('#quiz-next').textContent = quizIndex === getSelectedQuizPool().length - 1 ? 'Lihat hasil' : 'Pertanyaan berikutnya →';
}

const writingSessionSize = 10;
const writingVocabularyByLevel = {
    N5: [
        'ohayou gozaimasu', 'konnichiwa', 'arigatou', 'watashi', 'tomodachi', 'sensei',
        'gakusei', 'mizu', 'hon', 'neko', 'inu', 'gakkou', 'nihon', 'gohan',
        'ichi', 'ni', 'san', 'taberu', 'iku', 'ookii', 'kyou', 'ashita',
    ],
    N4: [
        'oyasuminasai', 'sumimasen', 'namae', 'denwa', 'eki', 'mise', 'ocha', 'sushi',
        'sakana', 'tamago', 'iku', 'kuru', 'miru', 'yomu', 'hanasu', 'atarashii',
        'kazoku', 'mainichi', 'kuruma', 'densha', 'aruku', 'kau', 'benkyou suru',
        'otousan', 'okaasan', 'ryokou', 'kippu', 'chizu',
    ],
    N3: [
        'hajimemashite', 'gomennasai', 'gakusei', 'kyoudai', 'getsuyoubi', 'byouin',
        'toshokan', 'kuukou', 'chikatetsu', 'massugu', 'chikai', 'atsui', 'samui',
        'kaze', 'wakarimasu', 'machimasu', 'kakimasu', 'nemasu', 'okimasu',
        'suki', 'kirai', 'shizuka', 'benri', 'shigoto', 'hataraku', 'genki',
        'ryouri', 'omoshiroi', 'muzukashii', 'kantan', 'tokidoki', 'yukkuri',
    ],
    N2: [
        'onegaishimasu', 'daijoubu', 'nigiyaka', 'ikura', 'kudasai', 'takai', 'yasui',
        'okane', 'saizu', 'shukudai', 'shitsumon', 'mondai', 'kaisha', 'shain',
        'oshiemasu', 'tsukurimasu', 'kaerimasu', 'suwarimasu', 'tachimasu',
        'atatakai', 'suzushii', 'tenki', 'kibun', 'kusuri', 'byouki', 'ryokou',
        'yoyaku', 'pasupooto', 'soshite', 'dakara', 'doushite',
    ],
    N1: [
        'kibun', 'byouki', 'wakarimasu', 'oshiemasu', 'tsukurimasu', 'kaerimasu',
        'suwarimasu', 'tachimasu', 'akemasu', 'shimemasu', 'kantan', 'muzukashii',
        'tokidoki', 'isshoni', 'kochira', 'sochira', 'achira', 'yoyaku', 'pasupooto',
        'naze', 'doushite', 'soshite', 'demo', 'dakara', 'takusan', 'itsumo',
        'shoppai', 'nigai', 'kibun',
    ],
};

const writingLevelDescriptions = {
    N5: 'Dasar: salam, angka, dan kosakata sehari-hari.',
    N4: 'Pemula lanjut: keluarga, kegiatan, waktu, dan perjalanan.',
    N3: 'Menengah: tempat, sifat, kegiatan, dan situasi umum.',
    N2: 'Lanjutan: sekolah, pekerjaan, kesehatan, dan ungkapan.',
    N1: 'Mahir: kosakata lebih luas serta ungkapan dan konteks yang lebih kompleks.',
};

const kanaRomaji = {
    kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ', sha: 'しゃ', shu: 'しゅ', sho: 'しょ',
    cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ', nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
    hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ', mya: 'みゃ', myu: 'みゅ', myo: 'みょ',
    rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ', gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
    ja: 'じゃ', ju: 'じゅ', jo: 'じょ', bya: 'びゃ', byu: 'びゅ', byo: 'びょ',
    pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ', shi: 'し', chi: 'ち', tsu: 'つ',
    fu: 'ふ', ji: 'じ', she: 'しぇ', che: 'ちぇ', je: 'じぇ',
    tsa: 'つぁ', tsi: 'つぃ', tse: 'つぇ', tso: 'つぉ',
    kwa: 'くぁ', kwi: 'くぃ', kwe: 'くぇ', kwo: 'くぉ',
    gwa: 'ぐぁ', gwi: 'ぐぃ', gwe: 'ぐぇ', gwo: 'ぐぉ',
    wha: 'うぁ', whi: 'うぃ', whe: 'うぇ', who: 'うぉ',
    ti: 'ち', tu: 'つ', di: 'ぢ', du: 'づ', wi: 'うぃ', we: 'うぇ',
    va: 'ゔぁ', vi: 'ゔぃ', vu: 'ゔ', ve: 'ゔぇ', vo: 'ゔぉ',
    ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
    sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
    ta: 'た', te: 'て', to: 'と',
    na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
    ha: 'は', hi: 'ひ', he: 'へ', ho: 'ほ',
    ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
    ya: 'や', yu: 'ゆ', yo: 'よ',
    ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
    wa: 'わ', wo: 'を', ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
    za: 'ざ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
    da: 'だ', de: 'で', do: 'ど',
    ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
    pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
    a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
};

function transliterateRomaji(value, script, finalize = false) {
    const source = value.toLocaleLowerCase('en').replace(/\s+/g, '');
    let result = '';
    let index = 0;

    while (index < source.length) {
        const remaining = source.slice(index);
        const character = source[index];
        if (!/[a-z]/.test(character)) {
            result += character;
            index += 1;
            continue;
        }

        if (character === 'n') {
            const next = source[index + 1];
            const afterNext = source[index + 2];
            if (next === "'") {
                result += 'ん';
                index += 2;
                continue;
            }
            if (next === 'n') {
                if (afterNext === undefined) {
                    if (finalize) {
                        result += 'ん';
                        index += 2;
                    } else {
                        result += 'nn';
                        index += 2;
                    }
                } else {
                    result += 'ん';
                    index += 1;
                }
                continue;
            }
            if (next === undefined && !finalize) {
                result += 'n';
                index += 1;
                continue;
            }
            if (next !== undefined && !/[aiueoy]/.test(next)) {
                result += 'ん';
                index += 1;
                continue;
            }
        }

        if (index + 1 < source.length && character === source[index + 1] && !/[aeioun]/.test(character)) {
            result += 'っ';
            index += 1;
            continue;
        }

        const match = [3, 2, 1].map((length) => remaining.slice(0, length)).find((token) => kanaRomaji[token]);
        if (match) {
            result += kanaRomaji[match];
            index += match.length;
            continue;
        }

        result += character;
        index += 1;
    }

    const question = writingQuestions[writingIndex];
    if (script === 'hiragana' && question?.japanese.endsWith('は') && result.endsWith('わ')) {
        result = `${result.slice(0, -1)}は`;
    }

    if (script === 'katakana') {
        const katakanaRows = [
            ['アイウエオ', 'アイウエオ'],
            ['カキクケコ', 'アイウエオ'], ['サシスセソ', 'アイウエオ'],
            ['タチツテト', 'アイウエオ'], ['ナニヌネノ', 'アイウエオ'],
            ['ハヒフヘホ', 'アイウエオ'], ['マミムメモ', 'アイウエオ'],
            ['ヤユヨ', 'アウオ'], ['ラリルレロ', 'アイウエオ'],
            ['ワヲン', 'アオン'], ['ガギグゲゴ', 'アイウエオ'],
            ['ザジズゼゾ', 'アイウエオ'], ['ダヂヅデド', 'アイウエオ'],
            ['バビブベボ', 'アイウエオ'], ['パピプペポ', 'アイウエオ'],
            ['ヴ', 'ウ'], ['ァィゥェォ', 'アイウエオ'], ['ャュョ', 'アウオ'],
        ];
        const vowelByKana = new Map();
        katakanaRows.forEach(([kana, vowels]) => {
            Array.from(kana).forEach((character, index) => {
                vowelByKana.set(character, Array.from(vowels)[index]);
            });
        });
        const katakana = Array.from(result, (character) => {
            const codePoint = character.codePointAt(0);
            return codePoint >= 0x3041 && codePoint <= 0x3096
                ? String.fromCodePoint(codePoint + 0x60)
                : character;
        });
        let previousVowel = null;
        return katakana.map((character) => {
            const vowel = vowelByKana.get(character);
            if (vowel && 'アイウエオ'.includes(character) && previousVowel === vowel) {
                return 'ー';
            }
            if (vowel) previousVowel = vowel;
            else if (character !== 'ー') previousVowel = null;
            return character;
        }).join('');
    }
    return result;
}

function getWritingScript() {
    const question = writingQuestions[writingIndex];
    return question && /[\u30a0-\u30ff]/u.test(question.japanese) ? 'katakana' : 'hiragana';
}

function getWritingBestScore() {
    return state.writingBestScores[selectedWritingLevel] ?? null;
}

function renderWritingLevels() {
    const options = document.querySelector('#writing-level-options');
    const description = document.querySelector('#writing-level-description');
    if (!options || !description) return;

    options.innerHTML = jlptLevels.map(({ level }) =>
        `<button class="writing-level-button${level === selectedWritingLevel ? ' active' : ''}" type="button" data-writing-level="${level}" aria-pressed="${level === selectedWritingLevel}">${level}</button>`
    ).join('');
    description.textContent = writingLevelDescriptions[selectedWritingLevel];
}

function startWritingSession() {
    const availableIds = jlptLevels
        .slice(0, jlptLevels.findIndex(({ level }) => level === selectedWritingLevel) + 1)
        .flatMap(({ level }) => writingVocabularyByLevel[level]);
    const vocabularyByRomaji = new Map(vocabulary.map((word) => [word.romaji, word]));
    const pool = [...new Set(availableIds)]
        .map((romaji) => vocabularyByRomaji.get(romaji))
        .filter((word) => word !== undefined);
    if (pool.length < writingSessionSize) {
        showStorageNotice(`Kosakata untuk tingkat ${selectedWritingLevel} belum cukup untuk memulai latihan.`);
        return;
    }

    for (let index = pool.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }

    writingQuestions = pool.slice(0, writingSessionSize);
    writingIndex = 0;
    writingScore = 0;
    writingAnswered = false;
    renderWritingQuestion();
}

function renderWritingQuestion() {
    const content = document.querySelector('#writing-content');
    const feedback = document.querySelector('#writing-feedback');
    const actions = document.querySelector('#writing-actions');
    const counter = document.querySelector('#writing-counter');
    const bar = document.querySelector('#writing-progress-bar');
    const bestScore = document.querySelector('#writing-best-score');
    if (!content || !feedback || !actions || !counter || !bar || !bestScore) return;

    feedback.classList.add('hidden');
    feedback.classList.remove('wrong');
    actions.innerHTML = '';
    const previousBest = getWritingBestScore();
    bestScore.textContent = Number.isInteger(previousBest)
        ? `Skor terbaik ${selectedWritingLevel}: ${previousBest} / ${writingSessionSize}.`
        : 'Skor terbaik akan tersimpan setelah sesi pertama.';

    if (writingIndex >= writingQuestions.length) {
        const savedBest = Number.isInteger(previousBest) ? previousBest : 0;
        const improvedScore = Math.max(0, writingScore - savedBest);
        state.writingBestScores[selectedWritingLevel] = Math.max(savedBest, writingScore);
        state.writingCompleted = true;
        state.points += improvedScore * 2;
        recordActivity();
        renderProgress();
        counter.textContent = 'SESI SELESAI';
        bar.style.width = '100%';
        content.innerHTML = `
            <div class="eyebrow">LATIHAN SELESAI</div>
            <div class="result-score">${writingScore}<small> / ${writingQuestions.length} benar</small></div>
            <p class="question-prompt">${improvedScore > 0 ? `Keren! Kamu mendapat ${improvedScore * 2} poin dari peningkatan skor.` : 'Bagus! Latihan lagi untuk melampaui skor terbaikmu.'}</p>
        `;
        actions.innerHTML = '<button class="button button-primary" type="button" data-restart-writing>Mulai sesi baru <span>↻</span></button>';
        bestScore.textContent = `Skor terbaik ${selectedWritingLevel}: ${state.writingBestScores[selectedWritingLevel]} / ${writingSessionSize}.`;
        return;
    }

    const question = writingQuestions[writingIndex];
    counter.textContent = `SOAL ${writingIndex + 1} / ${writingQuestions.length}`;
    bar.style.width = `${(writingIndex / writingQuestions.length) * 100}%`;
    content.innerHTML = `
        <div class="writing-prompt">
            <span class="eyebrow">${question.category}</span>
            <strong class="writing-meaning">${question.meaning}</strong>
        </div>
        <form class="writing-form" id="writing-form">
            <label for="writing-answer">Tulis dalam huruf Jepang</label>
            <input class="writing-input" id="writing-answer" name="answer" type="text" lang="ja" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Tulis jawaban dalam bahasa Jepang" aria-describedby="writing-hint writing-feedback">
            <span class="writing-hint" id="writing-hint">Romaji otomatis berubah menjadi ${getWritingScript()} saat kamu mengetik.</span>
            <button class="button button-primary" type="submit">Periksa jawaban <span>→</span></button>
        </form>
    `;
    writingAnswered = false;
}

function checkWritingAnswer(answer) {
    if (writingAnswered || writingIndex >= writingQuestions.length) return;
    writingAnswered = true;
    const question = writingQuestions[writingIndex];
    const normalizeAnswer = (value) => value.normalize('NFKC').replace(/\s+/g, '');
    const correct = normalizeAnswer(answer) === normalizeAnswer(question.japanese);
    if (correct) writingScore += 1;

    const input = document.querySelector('#writing-answer');
    if (input) input.disabled = true;

    const feedback = document.querySelector('#writing-feedback');
    feedback.textContent = correct
        ? `Benar! Romaji: ${question.romaji}`
        : `Belum tepat. Jawaban yang benar: ${question.japanese}.`;
    feedback.classList.toggle('wrong', !correct);
    feedback.classList.remove('hidden');

    document.querySelector('#writing-actions').innerHTML = `
        <button class="button button-primary" type="button" data-next-writing>
            ${writingIndex === writingQuestions.length - 1 ? 'Lihat hasil' : 'Soal berikutnya'} <span>→</span>
        </button>
    `;
}

function formatDate() {
    const now = new Date();
    const date = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }).format(now);
    document.querySelector('#today-date').textContent = date.toLocaleUpperCase('id-ID');
    document.querySelector('#date-mood').textContent = `${new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(now).toLocaleUpperCase('id-ID')} YANG PRODUKTIF`;
}

document.addEventListener('click', (event) => {
    const target = event.target.closest('button, article');
    if (!target) return;

    if (target.dataset.level) {
        selectedJlptLevel = target.dataset.level;
        quizIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderJlptLevels();
        renderCurriculum();
        renderDashboardLessons();
        if (document.querySelector('#view-latihan').classList.contains('active')) {
            renderQuiz();
        }
        document.querySelector('#page-crumb').textContent = 'Beranda';
    }

    if (target.dataset.viewLink) navigate(target.dataset.viewLink);
    if (target.dataset.writingLevel) {
        selectedWritingLevel = target.dataset.writingLevel;
        state.writingLevel = selectedWritingLevel;
        writingQuestions = [];
        writingIndex = 0;
        writingScore = 0;
        writingAnswered = false;
        saveState();
        renderWritingLevels();
        startWritingSession();
    }
    if (target.id === 'mobile-menu') document.querySelector('.sidebar').classList.toggle('mobile-open');
    if (target.hasAttribute('data-reset-progress')) resetProgress();
    if (target.dataset.startLesson) startLesson(target.dataset.startLesson);
    if (target.hasAttribute('data-close-lesson')) {
        activeLesson = null;
        document.querySelector('#lesson-stage').classList.add('hidden');
    }
    if (target.hasAttribute('data-next-lesson')) {
        if (lessonCardIndex < lessons[activeLesson].cards.length - 1) {
            lessonCardIndex += 1;
            renderLessonCard();
        } else {
            completeLesson();
        }
    }
    if (target.dataset.category) {
        activeCategory = target.dataset.category;
        vocabPage = 0;
        renderVocabularyFilters();
        renderVocabulary();
    }
    if (target.dataset.vocabPage) {
        vocabPage += Number(target.dataset.vocabPage);
        renderVocabulary();
    }
    if (target.dataset.speak) speakJapanese(target.dataset.speak);
    if (target.dataset.learnWord) {
        const word = target.dataset.learnWord;
        if (state.learnedWords.includes(word)) {
            state.learnedWords = state.learnedWords.filter((item) => item !== word);
        } else {
            state.learnedWords.push(word);
            state.points += 1;
            if (state.learnedWords.length >= 5) state.goals.words = true;
            recordActivity();
        }
        renderVocabulary();
        renderProgress();
        saveState();
    }
    if (target.dataset.answer) answerQuiz(target.dataset.answer);
    if (target.id === 'quiz-next') {
        quizIndex += 1;
        quizAnswered = false;
        renderQuiz();
    }
    if (target.hasAttribute('data-next-writing')) {
        writingIndex += 1;
        renderWritingQuestion();
    }
    if (target.hasAttribute('data-restart-writing')) startWritingSession();
    if (target.hasAttribute('data-restart-quiz')) {
        quizIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderQuiz();
    }
});

document.addEventListener('submit', (event) => {
    if (event.target.id !== 'writing-form') return;
    event.preventDefault();
    const input = document.querySelector('#writing-answer');
    input.value = transliterateRomaji(input.value, getWritingScript(), true);
    checkWritingAnswer(input.value);
});

document.addEventListener('input', (event) => {
    const input = event.target;
    if (input.id !== 'writing-answer' || event.isComposing) return;

    const original = input.value;
    const caret = input.selectionStart ?? original.length;
    const script = getWritingScript();
    const converted = transliterateRomaji(original, script);
    if (converted === original) return;

    input.value = converted;
    const convertedCaret = transliterateRomaji(original.slice(0, caret), script).length;
    input.setSelectionRange(convertedCaret, convertedCaret);
});

document.querySelector('#vocab-search').addEventListener('input', () => {
    vocabPage = 0;
    renderVocabulary();
});
formatDate();
renderJlptLevels();
renderCurriculum();
renderDashboardLessons();
renderVocabularyFilters();
renderVocabulary();
renderQuiz();
renderWritingLevels();
renderProgress();

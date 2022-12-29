
// Tulis kode Javascript (JS) disini :

// ================= [AWAL] Kode untuk Music ==================

    // Siapkan tempat untuk menampung BGM (Background Music)
    var bgmSound; 
    
    // Mengisi variabel bgm dengan file audio berdasarkan tag yang ber-id 'bgm'
    bgmSound = document.getElementById('bgm');
    
    // Membuat fungsi untuk memutar bgm dan mengatur volumenya 60%
    function playSound(){
        bgmSound.play();
        // bgmSound.volume = 0.6;
    }
    
    // Membuat fungsi untuk stop memutar bgm 
    // dan reset waktu putar ke 0 
    function stopSound(){
        bgmSound.pause();
        // bgmSound.currentTime = 0;
    }

    // Siapkan tempat untuk menampung BGM (Background Music)
    var clickSound; 

    // Mengisi variabel clickSound dengan file audio berdasarkan tag yang ber-id 'click'
    clickSound = document.getElementById('click');

    // Membuat fungsi untuk memutar suara click
    function playClick(){
        clickSound.play();
    }

// ================= [AKHIR] Kode untuk Music ==================

// ================= [AWAL] Kode untuk Menampilkan Nama Pemain dan Computer ==================

    // Siapkan tempat untuk menampung nama pemain
    var namaPemain 
    
    // Membuat prompt untuk mendapatkan nama pemain
    // lalu dimasukkan ke dalam variable namaPemain
    namaPemain = prompt('Masukkan Nama Kamu:');

    // Siapkan tempat untuk menampung [Lokasi dimana namaPemain akan ditampilkan ke game]
    var tampilNamaPemain;

    // Memasukkan [Lokasi dimana namaPemain akan ditampilkan ke game]
    // ke dalam variabel/tampunagan namaPemain
    tampilNamaPemain = document.getElementById('tampilNama');

    // Mengganti isinya dengan menampilkan nama pemain dan nama Computer
    tampilNamaPemain.textContent = namaPemain +' VS Yura-Computer';

// ================= AKHIR Kode untuk Menampilkan Nama Pemain dan Computer ==================

// ================= Menampilkan Alert berisi "Selamat Bermain Game!" ==================  
alert('Selamat Bermain Game!');


// ================= AWAL Menyiapkan variabel yang diperlukan =================

    // Siapkan tempat untuk menampung pilihan Pemain & Computer
    var pilihanPemain;
    var pilihanComputer;
    
    // Siapkan tempat untuk menampung score Pemain & Computer
    // dan mengisinya dengan 0
    var scoreComputer = 0;
    var scorePemain = 0;

    // Siapkan tempat untuk menampung hasil sementara
    var hasilSementara;

// ================= AKHIR Menyiapkan variabel yang diperlukan =================

// ================= AWAL Membuat fungsi ambilpilihan() untuk mengambil pilihan pemain =================
// ====================================== Serta memulai permainan. =====================================
function ambilPilihan(pilihanPemain) {
    
    // ==== [AWAL] kode agar komputer memilih secara random

        // Siapkan tempat untuk menampung opsi untuk pilihan komputer
        var opsi = ["🖐️","✌️","👊"];
        
        // Siapkan tempat untuk menampung pilihan acak dari komputer
        // lalu menyimpanya ke variabel hasilAcak
        var hasilAcak = Math.floor(Math.random() * opsi.length);
    
        // Siapkan tempat untuk menampung hasil dari pilihan komputer
        var pilihanComputer;
        
        // penyimpan pilihan komputer ke dalam variabel pilihanComputer 
        pilihanComputer = opsi[hasilAcak];
    
    // ==== [AKHIR] kode agar komputer memilih secara random

    // ==== [AWAL] kode agar pilihan pemain & komputer ditampikan

        // Menandai tempat dimana pilihan pemain & pilihan komputer akan ditampilkan di dalam game
        // lalu disimpan dalam variabel tampilPilihan
        var tampilPilihan = document.getElementById('tampilPilihan');

        // Menimpa isi tag text baru
        tampilPilihan.textContent = pilihanPemain + ' VS ' + pilihanComputer;

    // ==== [AKHIR] kode agar pilihan pemain & komputer ditampikan

    // ==== [AWAL] Menghitung Score sementara pemain & komputer

        // AWAL Cek jika SERI
        if (pilihanPemain === "🖐️" && pilihanComputer === "🖐️") {
            hasilSementara = 'Seri 🤐';
        }
        if (pilihanPemain === "✌️" && pilihanComputer === "✌️") {
            hasilSementara = 'Seri 🤐';
        }
        if (pilihanPemain === "👊" && pilihanComputer === "👊") {
            hasilSementara = 'Seri 🤐';
        }
        // AKHIR Cek jika SERI

        // AWAL Cek jika MENANG
        if (pilihanPemain === "🖐️" && pilihanComputer === "👊") {
            scorePemain++;
            hasilSementara = 'Menang 😂';
        }
        if (pilihanPemain === "✌️" && pilihanComputer === "🖐️") {
            scorePemain++;
            hasilSementara = 'Menang 😂';
        }
        if (pilihanPemain === "👊" && pilihanComputer === "✌️") {
            scorePemain++;
            hasilSementara = 'Menang 😂';
        }
        // AKHIR Cek jika MENANG

        // AWAL Cek jika KALAH
        if (pilihanPemain === "🖐️" && pilihanComputer === "✌️") {
            scoreComputer++; 
            hasilSementara = 'Kalah 😭';
        }
        if (pilihanPemain === "✌️" && pilihanComputer === "👊") {
            scoreComputer++;
            hasilSementara = 'Kalah 😭';
        }
        if (pilihanPemain === "👊" && pilihanComputer === "🖐️") {
            scoreComputer++;
            hasilSementara = 'Kalah 😭';
        }
        // AKHIR Cek jika KALAH
        
    // ==== [AKHIR] Menghitung Score sementara pemain & komputer
    
    // ===== [AWAL] Menampilkan Score sementara pemain & komputer =====  
        
        // Menandai tempat dimana score permainan akan ditampilkan
        // lalu disimpan dalam variabel tampilScore
        var tampilScoreSementara = document.getElementById('score');

        // Menimpa isi tag dengan text baru
        tampilScoreSementara.textContent = 'Score ' + scorePemain + ':' + scoreComputer;
    
    // ===== [AKHIR] Menampilkan Score sementara pemain & komputer =====  
    
    // ===== [AWAL] Menampilkan Hasil sementara =====      
        
        // Menandai tempat dimana hasil permainan akan ditampilkan
        // lalu disimpan dalam variabel tampilhasil
        var tampilHasilSementara = document.getElementById('hasilPermainan');

        // Mengganti isinya dengan dengan text baru
        tampilHasilSementara.textContent = 'Hasil: ' + hasilSementara;

    // ===== [AKHIR] Menampilkan Hasil sementara =====  
    
    
    // ===== [AWAL] Menampilkan Hasil akhir permainan =====
        
        
        var gameOver = document.getElementById('gameOver');
        var tampilHasilAkhir = document.getElementById('pemenang');
        var foto;
        var hasil;
        
        if (scorePemain === 5 || scoreComputer === 5) {
            
            gameOver.style.display = 'flex';
            
            if (scorePemain > scoreComputer) {
                foto = 'foto/dance.gif';
                hasil = 'Kamu Menang 😂';
            } else {
                foto = 'foto/crying.gif';
                hasil = 'Kamu Kalah 😭';
            }
            
            tampilHasilAkhir.textContent = hasil;
            document.getElementById('foto').src = foto;
            document.getElementById('scoreAkhir').textContent = 'Score Akhir ' + scorePemain + ':' + scoreComputer;
        }
    // ===== [AKHIR] Menampilkan Hasil akhir permainan =====  
    
}
// ================= AKHIR Membuat fungsi ambilpilihan() untuk mengambil pilihan pemain =================

// ================= AWAL Membuat fungsi ulangi() untuk memulai permainan =================
    function ulangi(){
        // reset score Computer ke 0
        scoreComputer = 0;
        // reset score pemain ke 0
        scorePemain = 0;

        // menyembunyikan tampilan game over
        gameOver.style.display = 'none';
        // reset nama pemain
        tampilPilihan.textContent = '.. VS ..';
        
        // reset tampilan score
        document.getElementById('score').textContent = `Score 0:0`;
        // reset tampilan hasil permainan
        document.getElementById('hasilPermainan').textContent = '';
    }
// ================= AKHIR Membuat fungsi ulangi() untuk memulai permainan =================


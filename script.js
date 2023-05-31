// Tulis kode Javascript (JS) disini :

// ================= [AWAL] Kode untuk Music ==================

// Siapkan tempat untuk menampung BGM (Background Music)
var clickSound;

// Mengisi variabel clickSound dengan file audio berdasarkan Element yang ber-id 'click'
clickSound = document.getElementById("click");

// Membuat fungsi untuk memutar suara click
function playClick() {
  clickSound.play();
}

// Siapkan tempat untuk menampung BGM (Background Music)
var bgmSound;

// Mengisi variabel bgmSound dengan file audio berdasarkan Element yang ber-id 'bgm'
bgmSound = document.getElementById("bgm");

// Membuat fungsi untuk memutar bgm ++dan mengatur volumenya 60%
function playSound() {
  bgmSound.play();
  bgmSound.volume = 0.6;
}

// Membuat fungsi untuk stop memutar bgm
// dan reset waktu putar ke 0
function stopSound() {
  bgmSound.pause();
  // bgmSound.currentTime = 0;
}

// ================= [AKHIR] Kode untuk Music ==================

// ================= [AWAL] Kode untuk Menampilkan Nama Pemain dan Computer ==================

// Siapkan tempat untuk menampung nama pemain
var PlayerName = "Devon";

// Siapkan tempat untuk menampung nama pemain
var ComName = "Yura-Com";

// Membuat prompt untuk mendapatkan nama pemain
// lalu dimasukkan ke dalam variable PlayerName
// PlayerName = prompt('Insert Your Name:');

// Siapkan tempat untuk menampung [Lokasi dimana PlayerName akan ditampilkan ke game]
var showPlayerName;

// Memasukkan [Lokasi dimana PlayerName akan ditampilkan ke game]
// ke dalam variabel/tampunagan showPlayerName
showPlayerName = document.getElementById("showName");

// Mengganti isinya dengan menampilkan nama pemain dan nama Computer
showPlayerName.textContent = PlayerName + " VS " + ComName;

// ================= [AKHIR] Kode untuk Menampilkan Nama Pemain dan Computer ==================

// ================= [AWAL] Menyiapkan variabel yang diperlukan =================

// Siapkan tempat untuk menampung pilihan Pemain & Computer
var playerChoice;
var computerChoice;

// Siapkan tempat untuk menampung score Pemain & Computer
// dan mengisinya dengan 0
var computerScore = 0;
var playerScore = 0;

// Siapkan tempat untuk menampung hasil sementara
var currentResult;

// ================= [AKHIR] Menyiapkan variabel yang diperlukan =================

// ================= [AWAL] Membuat fungsi takeChoice() untuk mengambil pilihan pemain =================
// ====================================== Serta memulai permainan. =====================================
function takeChoice(playerChoice) {
  // ==== [AWAL] kode agar komputer memilih secara random

  // Siapkan tempat untuk menampung opsi apa saja yang dapat dipilih komputer
  var options = ["🖐️", "✌️", "👊"];

  // Siapkan tempat untuk menampung pilihan acak dari komputer
  // lalu menyimpanya ke variabel randomGenerator
  var randomGenerator = Math.floor(Math.random() * 3);

  // Siapkan tempat untuk menampung hasil dari pilihan komputer
  var computerChoice;

  // penyimpan pilihan komputer ke dalam variabel computerChoice
  computerChoice = options[randomGenerator];

  // ==== [AKHIR] kode agar komputer memilih secara random

  // ==== [AWAL] kode agar pilihan pemain & komputer ditampikan

  // Menandai tempat dimana pilihan pemain & pilihan komputer akan ditampilkan di dalam game
  // lalu disimpan dalam variabel showChoosen
  var showChoosen = document.getElementById("showChoosen");

  // Menimpa isi Element pada showChoosen dengan text baru
  showChoosen.textContent = playerChoice + " VS " + computerChoice;

  // ==== [AKHIR] kode agar pilihan pemain & komputer ditampikan

  // ==== [AWAL] Menghitung Score sementara pemain & komputer

  // AWAL Cek jika seri
  if (playerChoice === "🖐️" && computerChoice === "🖐️") {
    currentResult = "Seri 🤐";
  }
  if (playerChoice === "✌️" && computerChoice === "✌️") {
    currentResult = "Seri 🤐";
  }
  if (playerChoice === "👊" && computerChoice === "👊") {
    currentResult = "Seri 🤐";
  }
  // AKHIR Cek jika seri

  // AWAL Cek jika menang
  if (playerChoice === "🖐️" && computerChoice === "👊") {
    playerScore++;
    currentResult = "Menang 😂";
  }
  if (playerChoice === "✌️" && computerChoice === "🖐️") {
    playerScore++;
    currentResult = "Menang 😂";
  }
  if (playerChoice === "👊" && computerChoice === "✌️") {
    playerScore++;
    currentResult = "Menang 😂";
  }
  // AKHIR Cek jika menang

  // AWAL Cek jika kalah
  if (playerChoice === "🖐️" && computerChoice === "✌️") {
    computerScore++;
    currentResult = "Kalah 😭";
  }
  if (playerChoice === "✌️" && computerChoice === "👊") {
    computerScore++;
    currentResult = "Kalah 😭";
  }
  if (playerChoice === "👊" && computerChoice === "🖐️") {
    computerScore++;
    currentResult = "Kalah 😭";
  }
  // AKHIR Cek jika kalah

  // ==== [AKHIR] Menghitung Score sementara pemain & komputer

  // ===== [AWAL] Menampilkan Score sementara pemain & komputer =====

  // Menandai tempat dimana score permainan akan ditampilkan
  // lalu disimpan dalam variabel showCurrentScore
  var showCurrentScore = document.getElementById("score");

  // Menimpa isi Element dengan text baru
  showCurrentScore.textContent = "Score " + playerScore + ":" + computerScore;

  // ===== [AKHIR] Menampilkan Score sementara pemain & komputer =====

  // ===== [AWAL] Menampilkan Hasil sementara =====

  // Menandai tempat dimana hasil permainan akan ditampilkan
  // lalu disimpan dalam variabel showCurrentResult
  var showCurrentResult = document.getElementById("showGameResult");

  // Mengganti isinya dengan dengan text baru
  showCurrentResult.textContent = "Result: " + currentResult;

  // ===== [AKHIR] Menampilkan Hasil sementara =====

  // ===== [AWAL] Menampilkan Hasil akhir permainan =====

  var gameOver = document.getElementById("gameOver");
  var showFinalResult = document.getElementById("showFinalResult");
  var image;
  var finalResult;

  if (playerScore === 5 || computerScore === 5) {
    gameOver.style.display = "flex";

    if (playerScore > computerScore) {
      image = "image/dance.gif";
      finalResult = "Kau Pemenang!😂";
    } else {
      image = "image/crying.gif";
      finalResult = "Kau Pecundang!😭";
    }

    showFinalResult.textContent = finalResult;

    // Mencari Element html dengan id image, lalu mengganti src dengan isi variabel image
    document.getElementById("image").src = image;

    // Mencari Element html dengan id finalScore, lalu mengganti isi teks-nya.
    document.getElementById("finalScore").textContent =
      "Final Score " + playerScore + ":" + computerScore;
  }
  // ===== [AKHIR] Menampilkan Hasil akhir permainan =====
}
// ================= AKHIR Membuat fungsi takeChoice()() untuk mengambil pilihan pemain =================

// ================= AWAL Membuat fungsi tryAgain() untuk mengulang permainan =================
function tryAgain() {
  // reset variabel score Computer ke 0
  computerScore = 0;
  // reset variabel score pemain ke 0
  playerScore = 0;

  // menyembunyikan tampilan game over
  gameOver.style.display = "none";
  // reset opsi Pemain dan Computer
  showChoosen.textContent = ".. VS ..";

  // reset tampilan score
  document.getElementById("score").textContent = `Score 0:0`;
  // reset tampilan hasil permainan
  document.getElementById("showGameResult").textContent = "Result: -";
}
// ================= AKHIR Membuat fungsi tryAgain() untuk memulai permainan =================

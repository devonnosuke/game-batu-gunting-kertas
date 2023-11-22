// Tulis kode Javascript (JS) disini :

// ===== [AWAL] Kode untuk Music =====

// Siapkan wadah untuk menampung BGM (Background Music)
let clickSound;

// Mengisi variabel clickSound dengan file audio berdasarkan Element yang ber-id 'click'
clickSound = document.getElementById("click");

// Membuat fungsi untuk memutar suara Klik
function playClick() {
  t;
}

// Siapkan wadah untuk menampung BGM (Background Music)
let bgmSound;

// Mengisi variabel bgmSound dengan file audio berdasarkan Element yang ber-id 'bgm'
bgmSound = document.getElementById("bgm");

// Membuat fungsi untuk memutar bgm dan mengatur volumenya 60%
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

// ===== [AKHIR] Kode untuk Music =====

// ===== [AWAL] Kode untuk Menampilkan Nama Pemain dan Computer =====

// Siapkan wadah untuk menampung nama pemain
let PlayerName = "Devon";

// Siapkan wadah untuk menampung nama pemain
let ComName = "Yura-Com";

// Siapkan wadah untuk menampung [Lokasi dimana PlayerName akan ditampilkan ke game]
let showPlayerName;

// Mencari Lokasi yang akan menampilkan nama pemain ke game
// lalu dimasukkan ke dalam variabel showPlayerName
showPlayerName = document.getElementById("showName");

// Mengganti isinya dengan menampilkan nama pemain dan nama Computer
showPlayerName.textContent = PlayerName + " VS " + ComName;

// ===== [AKHIR] Kode untuk Menampilkan Nama Pemain dan Computer =====

// ===== [AWAL] Menyiapkan variabel yang diperlukan =====

// Siapkan wadah untuk menampung pilihan Pemain & Computer
let playerChoice;
let computerChoice;

// Siapkan wadah untuk menampung score Pemain & Computer
// dan mengisinya dengan 0
let computerScore = 0;
let playerScore = 0;

// Siapkan wadah untuk menampung hasil sementara
let currentResult;

// ===== [AKHIR] Menyiapkan variabel yang diperlukan =====

// ===== [AWAL] Membuat fungsi takeChoice() untuk mengambil pilihan pemain =====
function takeChoice(playerChoice) {
  // ==== [AWAL] kode agar komputer memilih secara random

  // Siapkan wadah untuk menampung opsi apa saja yang dapat dipilih komputer
  let options = ["🖐️", "✌️", "👊"];

  // Siapkan wadah dengan untuk menampung angka acak dari komputer
  // lalu menyimpanya ke variabel randomGenerator
  let randomGenerator = Math.floor(Math.random() * 3);

  // Siapkan wadah untuk menampung hasil dari pilihan komputer
  let computerChoice;

  // penyimpan pilihan komputer ke dalam variabel computerChoice
  computerChoice = options[randomGenerator];

  // ==== [AKHIR] kode agar komputer memilih secara random

  // ==== [AWAL] kode agar pilihan pemain & komputer ditampikan

  // Mencari Lokasi yang akan menampilkan pilihan pemain & pilihan komputer ke game
  // lalu disimpan ke dalam variabel showChoosen
  let showChoosen = document.getElementById("showChoosen");

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

  // Mencari Lokasi yang akan menampilkan score permainan ke game
  // lalu disimpan dalam variabel showCurrentScore
  let showCurrentScore = document.getElementById("score");

  // Menimpa isi Element dengan text baru
  showCurrentScore.textContent = "Score " + playerScore + ":" + computerScore;

  // ===== [AKHIR] Menampilkan Score sementara pemain & komputer =====

  // ===== [AWAL] Menampilkan Hasil sementara =====

  // Menandai wadah dimana hasil permainan akan ditampilkan
  // lalu disimpan dalam variabel showCurrentResult
  let showCurrentResult = document.getElementById("showGameResult");

  // Mengganti isinya dengan dengan text baru
  showCurrentResult.textContent = "Hasil: " + currentResult;

  // ===== [AKHIR] Menampilkan Hasil sementara =====

  // ===== [AWAL] Menampilkan Hasil akhir permainan =====

  let gameOver = document.getElementById("gameOver");
  let showFinalResult = document.getElementById("showFinalResult");
  let image;
  let finalResult;

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
// ===== AKHIR Membuat fungsi takeChoice()() untuk mengambil pilihan pemain =====

// ===== AWAL Membuat fungsi tryAgain() untuk mengulang permainan =====
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
  document.getElementById("score").textContent = "Score 0:0";
  // reset tampilan hasil permainan
  document.getElementById("showGameResult").textContent = "Hasil: -";
}
// ===== AKHIR Membuat fungsi tryAgain() untuk memulai permainan =====

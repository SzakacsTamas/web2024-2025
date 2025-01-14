

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let speed = 20; // Kezdeti sebesség (px/s)
let gravity = 9.8; // Kezdeti gravitáció
let weight = 1; // Súly (nem befolyásolja a mozgást közvetlenül, de bemutatásra kerül)

let projectile = {
  x: 50, // Kezdeti X koordináta
  y: canvas.height - 30, // Kezdeti Y koordináta (a föld szintjén)
  velocityX: 0, // Kezdeti sebesség X irányban
  velocityY: 0, // Kezdeti sebesség Y irányban
  radius: 20, // A lövedék sugara
  color: 'black' // A lövedék színe
};

let isFiring = false;

document.getElementById('fireButton').addEventListener('click', () => {
  speed = parseFloat(document.getElementById('speed').value);
  gravity = parseFloat(document.getElementById('gravity').value);
  weight = parseFloat(document.getElementById('weight').value);
  szog= parseFloat(document.getElementById('szog').value);

  // Kezdeti sebességek számítása (a vízszintes és függőleges komponensek)
  let angle = Math.PI / szog; // 45 fokos szög (szimmetrikus parabola)
  projectile.velocityX = speed * Math.cos(angle);
  projectile.velocityY = -speed * Math.sin(angle); // Negatív Y irány, mivel felfelé irányul

  projectile.x = 50; // Kezdeti pozíció
  projectile.y = canvas.height - 30; // Kezdeti pozíció
  isFiring = true;
});

function updateProjectile() {
  if (isFiring) {
    // A sebesség frissítése
    projectile.velocityY += gravity * weight / 100; // A gravitáció hatása

    // A pozíció frissítése
    projectile.x += projectile.velocityX;
    projectile.y += projectile.velocityY;

    // Ellenőrzés, hogy a lövedék elérte-e a földet
    if (projectile.y >= canvas.height - projectile.radius) {
      projectile.y = canvas.height - projectile.radius;
      isFiring = false; // Megállítja a lövedéket
    }
  }
}

function drawProjectile() {
  ctx.beginPath();
  ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
  ctx.fillStyle = projectile.color;
  ctx.fill();
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  updateProjectile();
  drawProjectile();
  requestAnimationFrame(gameLoop);
}

// Kezdjük el a játékhurok futtatását
gameLoop();

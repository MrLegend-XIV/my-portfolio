// ── Functions ──────────────────────────────
function greet(name) {
  return `สวัสดี${name}!`;
}

// Arrow function (สั้นกว่า ใช้บ่อยมาก)
const greet = (name) => `สวัสดี${name}!`;

console.log(greet("สมชาย")); // สวัสดี สมชาย!


// ── Conditions ─────────────────────────────
const score = 85;

if (score >= 80) {
  console.log("ผ่าน!");
} else if (score >= 60) {
  console.log("พอใช้");
} else {
  console.log("สอบตก");
}


// ── Loops ──────────────────────────────────
const skills = ["HTML", "CSS", "JavaScript"];

// for...of (ใช้กับ array)
for (const skill of skills) {
  console.log(skill);
}

// forEach (ใช้บ่อยมากใน modern JS)
skills.forEach((skill, index) => {
  console.log(`${index + 1}.${skill}`);
});


// ── DOM Manipulation ───────────────────────
// ดึง element จาก HTML
const button = document.querySelector("#myBtn");
const output = document.querySelector("#output");

// เพิ่ม event listener
button.addEventListener("click", () => {
  output.textContent = "ถูกคลิกแล้ว!";
  output.style.color = "green";
});


// ── Array Methods ที่ใช้บ่อย ───────────────
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15
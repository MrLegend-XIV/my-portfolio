function calculateBMI(weight, height) {
    // height หน่วยเป็น เมตร

    const bmi = weight / (height * height);

    let status = ""; //ใช้ตัวแปร let ในกรณีที่ค่าเปลี่ยนแปลงได้

    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi < 25) {
        status = "ปกติ";
    } else {
        status = "อ้วน";
    }

    return `BMI = ${bmi.toFixed(2)} (${status})`;
}

//เรัยกใช้งาน Function
console.log(calculateBMI(50, 1.7));
console.log(calculateBMI(70, 1.8));
console.log(calculateBMI(100, 1.8));


function changeColor() {

    //ใช้เก็บค่าตัวแปร แบบที่เปลี่ยนแปลงค่าได้ Const
    //# ตัวเริ่มต้นของการตั้งค่า Code สี
    //Math.random คำสั่งสุ่มตัวเลข ระหว่าง 0 ถึง 1
    //Math.random * 16777215 ทำให้เลขสุ่มมีปริมาณกว้างขึ้น
    //Math.floor ทำให้เลขเป็นจำนวนเต็ม
    //to.string(16) แปลงเลขธรรมดาให้เป็น เลขฐาน 16

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor

}


const todoList = [];

//เพิ่มรายการ todolist
function addItem() {
    const input = document.getElementById("todoInput");
    const value = input.value;

    if (value === "") {
        alert("กรุณากรอกรายการ");
        return;
    }

    todoList.push(value);

    input.value = "";

    displayItems();
}

//ลบรายการล่าสุด
function removeItem() {
    if (todoList.length === 0) {
        alert("ไม่มีรายการให้ลบ");
        return;
    }

    todoList.pop();

    displayItems();
}

//แสดงรายการทั้งหมด
function displayItems() {
    const output = document.getElementById("output");

    output.innerHTML = "<h3>รายการทั้งหมด</h3>";

    if (todoList.length === 0) {
        output.innerHTML += "<p>ไม่มีรายการ</p>";
        return;
    }

    todoList.forEach((item, index) => {
        output.innerHTML += `<p>${index +1}. ${item}</p>`;
    });
}
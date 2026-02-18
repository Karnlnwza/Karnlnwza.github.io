const starContainer = document.body;
const starImageURL = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";


const messages = [
    "1.ขอบคุณที่เกกิดมาให้รักกัน",
    "2.ขอให้ที่รักโชคดี มีแต่ความสุข เจอสังคมดีๆ",
    "3.ขอให้ที่รักติดมหาลัยและใช้ชีวิตมีความสุขมากๆเลยนะะ",
    "4.ขอให้เหนื่อยน้อยลง พบแต่ความสุขมากๆ",
    "5.ขอให้เรียนสนุกๆจอยๆไม่เครียดนะะ เจอเพื่อนดีๆ เจอแต่สิ่งดีๆเย้อๆ",
    "6.ขอให้กินข้าวอร่อยในทุกๆวัน ผมรักพี่น้ำอิงมากที่สุดเลย",
    "7.ถึงตัวจะไม่อยู่แล้วแต่ใจอยู่ด้วยกันนะ eiei",
    "8.ผมรักพี่น้ำอิงที่สุดในโลกเรยยย ดีใจที่เราได้เจอกันนะ และขอให้อยู่ด้วยกันแบบนี้ไปนานๆเลย",
    "9.ผมจะหาเวลามาเจอกันบ่อยๆนะ คงจะคิดถึงมากแน่ๆเลยไม่ได้เดินกลับบ้านด้วยกันแร้ะ แต่ไปหาแทน HaHaHaa",
];

function spawnText(x, y) {
    const textElement = document.createElement('div');
    textElement.className = 'floating-text';
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    textElement.innerText = "✨ " + randomMsg;

    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';

    document.body.appendChild(textElement);

    setTimeout(() => {
        textElement.remove();
    }, 90000);
}

function createMagicStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const posX = Math.random() * 80 + 5; 
        const posY = Math.random() * 80 + 5;
        const size = Math.random() * 40 + 60; 

        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.transform = `rotate(${Math.random() * 360}deg)`;

        // ** ย้าย Event Listener มาไว้ข้างในฟังก์ชันที่สร้างดาว **
        star.addEventListener('click', (e) => {
            spawnText(e.clientX, e.clientY);
            
            // เอฟเฟกต์ยุบตัวตอนกด
            star.style.transform += ' scale(0.8)';
            setTimeout(() => {
                // คืนค่า scale แต่ยังคงรักษาการหมุนเดิมไว้
                star.style.transform = star.style.transform.replace(' scale(0.8)', '');
            }, 100);
        });

        document.body.appendChild(star);
    }
}

function createSnow() {
    const snowCount = 200; 
    for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snow';
        const size = Math.random() * 3 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${left}vw`;
        snowflake.style.animation = `snowFall ${duration}s linear ${delay}s infinite`;
        document.body.appendChild(snowflake);
    }
}

// รันฟังก์ชันทั้งหมด
createMagicStars(8);
createSnow();
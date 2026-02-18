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
    const text = document.createElement('div');
    text.className = 'floating-text';
    text.innerText = "✨ " + messages[Math.floor(Math.random() * messages.length)];
    
    // ตั้งค่าตำแหน่งให้ตรงกลางนิ้ว
    text.style.left = x + 'px';
    text.style.top = y + 'px';
    
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 1500);
}

function createStars() {
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // สุ่มตำแหน่ง 10-80% เพื่อไม่ให้ติดขอบจอเกินไป
        star.style.left = (Math.random() * 70 + 10) + '%';
        star.style.top = (Math.random() * 70 + 10) + '%';
        
        // ขนาดดาวให้พอดีนิ้วกด (50px - 70px)
        const size = Math.random() * 20 + 50;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // รองรับทั้ง Click และ Touch
        const handleAction = (e) => {
            e.preventDefault(); // กันซูมหรือเลื่อนจอขณะกดดาว
            const touch = e.touches ? e.touches[0] : e;
            spawnText(touch.clientX, touch.clientY);
            
            // Effect ยุบตัว
            star.style.transform = 'scale(0.8)';
            setTimeout(() => star.style.transform = '', 150);
        };

        star.addEventListener('touchstart', handleAction, {passive: false});
        star.addEventListener('mousedown', handleAction);

        document.body.appendChild(star);
    }
}

function createSnow() {
    for (let i = 0; i < 50; i++) {
        const snow = document.createElement('div');
        snow.className = 'snow';
        const size = Math.random() * 4 + 2;
        snow.style.width = size + 'px';
        snow.style.height = size + 'px';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.top = '-5vh';
        
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        snow.style.animation = `snowFall ${duration}s linear ${delay}s infinite`;
        
        document.body.appendChild(snow);
    }
}

createStars();
createSnow();
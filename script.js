// 1. Event Handling
document.getElementById('colorBtn').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === 'lightgreen' ? '' : 'lightgreen';
    this.textContent = this.textContent === 'Clicked!' ? 'Click Me!' : 'Clicked!';
});

document.getElementById('secretBtn').addEventListener('dblclick', function () {
    alert('🎉 Secret double-click action!');
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.style.background = '#cceeff');
hoverBox.addEventListener('mouseleave', () => hoverBox.style.background = '#eee');
hoverBox.addEventListener('focus', () => hoverBox.style.background = '#cceeff');
hoverBox.addEventListener('blur', () => hoverBox.style.background = '#eee');

document.addEventListener('keydown', function (e) {
    document.getElementById('keypressOutput').textContent = `You pressed: ${e.key}`;
});

// 2. Image Gallery
const images = [
    'https://plus.unsplash.com/premium_photo-1678567671496-aa666d40af88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1743385779388-21635a160564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1678732553994-65d1e8b20092?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
let imgIndex = 0;
const galleryImg = document.getElementById('galleryImg');
document.getElementById('prevImg').onclick = function () {
    imgIndex = (imgIndex - 1 + images.length) % images.length;
    galleryImg.src = images[imgIndex];
};
document.getElementById('nextImg').onclick = function () {
    imgIndex = (imgIndex + 1) % images.length;
    galleryImg.src = images[imgIndex];
};

// 2. Tabs
const tabBtns = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        tabContents.forEach(tc => tc.style.display = 'none');
        document.getElementById('tab' + btn.dataset.tab).style.display = 'block';
    });
});

// 3. Form Validation
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

email.addEventListener('input', function () {
    if (!email.validity.valid) {
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.textContent = '';
    }
});

password.addEventListener('input', function () {
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
        passwordError.textContent = '';
    }
});

form.addEventListener('submit', function (e) {
    let valid = true;
    if (!email.validity.valid) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    }
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        valid = false;
    }
    if (!valid) e.preventDefault();
});
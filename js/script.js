const username = document.getElementById('username');
const reqName = document.getElementById('reqName');
const nama = document.getElementById('nama');
const tanggalLahir = document.getElementById('tanggalhir');
const message = document.getElementById('pesan');

function sendForm() {
    if (checkForm()) {
        document.getElementById("waktuSender").innerText = `: ${formatDate()}`; 
        document.getElementById("namaSender").innerText = `: ${nama.value}`; 
        document.getElementById("lahirSender").innerText = `: ${tanggalLahir.value}`; 
        document.getElementById("genderSender").innerText = `: ${document.querySelector('input[name="gender"]:checked').value}`; 
        document.getElementById("pesanSender").innerText = `: ${message.value}`; 
    }
}

function checkForm() {
    let isValid = true;

    if (!nama.value.trim()) {
        nama.style.outline = '2px solid red';
        isValid = false;
    } else {
        nama.style.outline = '';
    }

    if (!tanggalLahir.value) {
        tanggalLahir.style.outline = '2px solid red';
        isValid = false;
    } else {
        tanggalLahir.style.outline = '';
    }

    if (!message.value.trim()) {
        message.style.outline = '2px solid red';
        isValid = false;
    } else {
        message.style.outline = '';
    }

    return isValid;
}

function setNamaewa() {
    if (checkNamaewa()) {
        setCookie('name', username.value);
        document.getElementById("namaewa").innerText = getCookie('name');
        reqName.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function checkNamaewa() {
    if (username.value.length < 4) {
        username.classList.remove('outline-[#7286D3]');
        username.classList.add('outline-red-500');
        return false;
    } else {
        username.classList.remove('outline-red-500');
        username.classList.add('outline-[#7286D3]');
        return true;
    }
}


if (!getCookie('name')) {
    reqName.classList.remove('hidden');
    reqName.classList.add('flex');
    document.body.style.overflow = 'hidden';
} else {
    document.getElementById("namaewa").innerText = getCookie('name');
    reqName.classList.add('hidden');
    document.body.style.overflow = '';
}

function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function formatDate() {
    const now = new Date();

    const detik = String(now.getSeconds()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const jam = String(now.getHours()).padStart(2, '0');

    const hari = String(now.getDate()).padStart(2, '0');
    const bulan = String(now.getMonth() + 1).padStart(2, '0'); // bulan dimulai dari 0
    const tahun = now.getFullYear();

    return `${jam}:${menit}:${detik} - ${hari}/${bulan}/${tahun}`;
}

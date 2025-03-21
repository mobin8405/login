document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('پاسخ سرور:', result);
        alert('داده‌ها با موفقیت ارسال شدند!');
    })
    .catch(error => {
        console.error('خطا در ارسال داده‌ها:', error);
        alert('خطا در ارسال داده‌ها!');
    });
});
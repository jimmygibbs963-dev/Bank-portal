async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Login successful!');
      localStorage.setItem('token', data.token);
      document.getElementById('app').innerHTML = `<h2>Welcome, ${data.user.username}</h2><p>Role: ${data.user.role}</p>`;
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    alert('Error connecting to server');
  }
}

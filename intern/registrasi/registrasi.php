<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>TelShip Register</title>
  <link rel="stylesheet" href="regist.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">

</head>

<body>

  <div class="container">

    <div class="left">
      <img src="/images/logo.png" class="logo">
      <div class="overlay"></div>
    </div>

    <div class="right">
      <h1>Welcome to <span>Tel</span>Ship !</h1>
      <p>Register your Account!</p>

      <form action="/intern/login/login.html">
        <label>Name</label>
        <input type="text" placeholder="Enter your name">

        <label>Email</label>
        <input type="email" placeholder="Enter your email">

        <label>Password</label>
        <input type="password" placeholder="Create your password">

        <label>Asal Kampus</label>
        <select name="kampus" required>
          <option value="">-- Pilih Kampus --</option>
          <option value="Telkom University Purwokerto">Telkom University Purwokerto</option>
          <option value="Universitas Muhammadiyah Purwokerto">Universitas Muhammadiyah Purwokerto</option>
          <option value="Universitas Jenderal Soedirman">Universitas Jenderal Soedirman</option>
          <option value="UIN Saifuddin Zuhri Purwokerto">UIN Saifuddin Zuhri Purwokerto</option>
          <option value="Universitas Wijaya Kusuma Purwokerto">Universitas Wijaya Kusuma Purwokerto</option>
          <option value="Universitas Harapan Bangsa Purwokerto">Universitas Harapan Bangsa Purwokerto</option>
          <option value="Universitas Amikom Purwokerto">Universitas Amikom Purwokerto</option>
          <option value="STIKOM Yos Sudarso Purwokerto">STIKOM Yos Sudarso Purwokerto</option>
        </select>
        <div class="terms">
          <input type="checkbox" id="agree" required>
          <label for="agree">I agree to the terms & Privacy</label>
        </div>

        <button type="submit" class="register-btn">Create Account</button>
      </form>

    </div>
  </div>

</body>

</html>
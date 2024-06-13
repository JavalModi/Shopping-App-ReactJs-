import React , { useState } from 'react'

export default function Username() {
    const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // Simulating login, you can replace this with actual authentication logic
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };
  return (
    <>
<div>
      <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
      {!loggedInUser && <Login onLogin={handleLogin} />}
</div>
    </>
  )
}

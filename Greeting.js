  Greeting.js

import React from 'react';

function Greeting() {
  const name = "John";
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Welcome to our website.</p>
    </div>
  );
}

export default Greeting;

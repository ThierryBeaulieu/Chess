import React from 'react';

export function TestPiece({ height, width }) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
    >
      <title>BlackBishop-svg</title>
      <defs>
        <image
          width='400'
          height='400'
          id='img1'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAAIiIkBR+JsAAAAAJ0Uk5TAP9bkSK1AAACkElEQVR4nO3XQYrcMBAF0BFaeBPwBQK6SEAXC0hH01F0hCxnEVJJ2z3DIJtW/VJco3Sq9g8a69eX+uXFxsbGxsbGxmbW8QUm4RUm8SdM0i8NQmTkcqJylA7/YQtRAUkg+gGSSIQuTCJCF4aIwE/mcOJxsqiQleAvFmQEPMqIkyQjYCz/CKpXk1vEwBXbSIbILZXg7guJIMhgxIQEzMuK50VIKkYCnJeNZBWCiRtBL7GI977gdpmWJDH5gpOvOPmGk+84QRKQtox5nKwgIfANn7YVg9J8I9XB5HWBCdixRow8B4k7QUr2mUjYCfKMeSay7qROR5adlOmI30mejridAEJCtn984CNWQBJaYyIS0ba47xj2pwcm9xZHvpkRIxOSe/grAO63RYFIEJIKkahHsIZJegRrSxISrMZx4hQJdPF5RQLd+4sKWcUkT0fCTooKqQCJmkTw7rmYkJggRYYTJydAKwmIVyVAkS1yAlSMgKwDJF9JwgApV5KoQtIbqZORNwG0kjJht5JTJuyK8SrkvS34raRD3tuC30o6JAyRfB2JQ6RcR9IQqdcRGiLMVnLqhNlKXp0wW2mZlXxoC26R6RNmKwUVEj+SrEIKiyQVQoOkzkPcKGEVmYD4UcIqMgFZRgmrldZRwqoYAQmjhFUxAhI/g2QGSZ9BCoPQMKk4YWyyawhjx1rCWBjfEEaUW8JIzIHkLllaUq4ga0tql4SW9M8ytqR/lgKSWtI//lYwjh8nbSqpn5gTkjvkELE+OeSlnxgBOUSsHzIBCUfSy6WAxCPp5VJA0pH0oqxDjqKb/r9DOgtzsi5aJD8kJ0s5BznZ494m/1ukPiQnBfM/kXBGHnefESMQsbGxsbGxsbGxGZnf9csO8Wb5tIUAAAAASUVORK5CYII='
        />
      </defs>
      <style></style>
      <use id='Layer 1' href='#img1' x='0' y='0' />
    </svg>
  );
}
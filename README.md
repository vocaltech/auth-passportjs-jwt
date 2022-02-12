> ### JWT basics with jsonwebtoken library

**Generate key pair**

<code>const { privateKey, publicKey } = generateKeyPair()</code>

**Issue JWT token**

<code>issue_jwt(payload, privateKey)</code>

**Verify JWT token**

<code>verify_jwt(jwtToken, publicKey)</code>

**Decode JWT token**

<code>const { header, payload } = decode_jwt(jwtToken)</code>



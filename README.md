> ### JWT basics with jsonwebtoken library

**Generate key pair**

<code>const { privateKey, publicKey } = generateKeyPair()</code>

**Issue JWT token - without expires**

<code>issue_jwt = (payload: object, privateKey: string)</code>

**Issue JWT token - with expires**

<code>issue_jwt_expires = (payload: object, privateKey: string, expiresIn: string)</code>

**Verify JWT token**

<code>verify_jwt(jwtToken, publicKey)</code>

**Decode JWT token**

<code>const { header, payload } = decode_jwt(jwtToken)</code>



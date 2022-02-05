# Authentication using passportjs with JWT strategy
> ### JWT basics with Node crypto library

**Issue JWT token signature**
```
const header = {
    'alg': 'RS256',
    'typ': 'JWT'
}
    
const payload = {
    'sub': '1234567890',
    'name': 'John Doe',
    'admin': true,
    'iat': 1516239022
}

// return the JWT base64url signature 
issue_jwt_node(header, payload, privateKey) 
```

**Verify JWT token**
```
// return boolean
verify_jwt_node(jwtToken, publicKey)
```

**Decode JWT token**

<code>const { decodedHeader, decodedPayload } = decode_jwt_node(jwtToken)</code>


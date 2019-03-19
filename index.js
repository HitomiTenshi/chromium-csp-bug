const express = require("express");
const app = express();

const headers = {
  setHeaders: res => res.set(
    "content-security-policy",
    "default-src 'none'; style-src 'unsafe-inline'; img-src 'self'; media-src 'self'; sandbox allow-scripts"
  )
};

app.use(express.static("wwwroot", headers));
app.listen(4200);

const opn = require("opn");
opn("http://localhost:4200");

# Chromium CSP bug

This is a proof of concept repository for a Chromium CSP header bug. Chromium 73 and higher blocks valid CSP `img-src 'self'` headers on browser refresh.

## How to run:

1. Clone the repository and open a command-line tool inside the repository folder.
2. Run `npm install && npm start`.

Your browser should pop up with the proof of concept running. You should see a gif. If you refresh your browser now, the image will disappear (which should not happen).

export async function handler(event, _context) {
  console.log(event.headers);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Length": svg.length.toString()
    },
    body: svg
  };
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90.4" height="20" viewBox="0 0 904 200" role="img" aria-label="awesome">
<title>awesome</title>
<linearGradient id="a" x2="0" y2="100%">
  <stop offset="0" stop-opacity=".1" stop-color="#EEE"/>
  <stop offset="1" stop-opacity=".1"/>
</linearGradient>
<mask id="m"><rect width="904" height="200" rx="30" fill="#FFF"/></mask>
<g mask="url(#m)">
  <rect width="282" height="200" fill="#555"/>
  <rect width="622" height="200" fill="#08C" x="282"/>
  <rect width="904" height="200" fill="url(#a)"/>
</g>
<g aria-hidden="true" fill="#fff" text-anchor="start" font-family="Verdana,DejaVu Sans,sans-serif" font-size="110">
  <text x="242" y="148" textLength="0" fill="#000" opacity="0.25"/>
  <text x="232" y="138" textLength="0"/>
  <text x="337" y="148" textLength="522" fill="#000" opacity="0.25">awesome</text>
  <text x="327" y="138" textLength="522">awesome</text>
</g>
<image x="40" y="35" width="200" height="130" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTQwIDY0MCAzMDAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MTQuMiA5MWwtMTUwLTEzNy42LTIxLjEgMjNMNTY4LjEgOTFINzUuNGwxMjUtMTE0LjctMjEuMS0yM0wyOS4zIDkxaC0uMXY5MC43YzAgNDEgMzkuNSA3NC40IDg4IDc0LjRoOTIuNWM0OC41IDAgODgtMzMuNCA4OC03NC40di01OS42aDQ4djU5LjZjMCA0MSAzOS41IDc0LjQgODggNzQuNGg5Mi41YzQ4LjUgMCA4OC0zMy40IDg4LTc0LjRWOTF6Ii8+PC9zdmc+Cg=="/>
</svg>`;

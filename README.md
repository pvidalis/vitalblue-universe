# Vitalblue Universe

**Still spinning around.** An interactive, browser-based visualization of the Solar System, modernized to run as a small, standalone website.

> **Attribution:** This project is a modified and modernized adaptation of **[3D CSS Solar System](https://github.com/juliangarnier/3D-CSS-Solar-System)** by **Julian Garnier** (© 2012), originally released under the **MIT License**. It is **not** an original implementation of the underlying orbital visualization. See [Credits & license](#credits--license).

## Features

- Explore the Sun and the eight planets.
- Switch between 2D and 3D presentations.
- Adjust zoom and compare speed, size, and distance views.
- CSS-powered orbital animation.
- Keyboard focus improvements and reduced-motion support.
- No runtime dependencies on PHP, jQuery, Node.js, Docker, or a framework.

The visualization is illustrative: the display modes and orbital animation are **not** a full astronomical simulation or a guarantee of scientific scale accuracy.

## Run locally

Clone the repository and open **`index.html`** in a modern browser:

```bash
git clone <YOUR-REPOSITORY-URL>
cd vitalblue-universe
firefox index.html
```

No build step or web server is required for the current version. If you prefer to test over HTTP:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>.

## Project structure

```text
vitalblue-universe/
├── index.html
├── assets/
│   ├── css/
│   │   ├── solar-system.css
│   │   └── enhancements.css
│   └── js/
│       └── app.js
├── favicon.ico
├── LICENSE
└── README.md
```

## What changed in this version

Compared with the earlier Vitalblue site, this modernization:

- Replaces jQuery-based interactions with vanilla JavaScript.
- Removes unused legacy JavaScript and obsolete analytics/ad script loaders.
- Retains the original orbital markup, CSS animation rules, and overall visual identity for compatibility.
- Adds focused accessibility enhancements, including reduced-motion preferences.

**Scope:** This is a modernization of an existing work, not a ground-up rewrite. The orbital CSS remains largely derived from the upstream project; further CSS refactoring may follow.

## Versioning

- `legacy-original`: snapshot of the prior Vitalblue implementation, **if that tag has been created**.
- `dev`: ongoing development.
- `master`: stable version.

Release tags (such as `v1.0.0`) identify stable snapshots once published.

## Credits & license

The original visualization, markup design, and major portions of the CSS are based on:

**Julian Garnier — 3D CSS Solar System**  
GitHub: <https://github.com/juliangarnier/3D-CSS-Solar-System>  
CodePen: <https://codepen.io/juliangarnier/pen/idhuG>  
Original copyright notice: **Copyright (c) 2012 Julian Garnier**.

Vitalblue Universe adapts and modernizes that work; credit for the underlying original belongs to Julian Garnier. The original attribution comment is retained in the derived CSS.

The included original and derived code is redistributed under the terms of the **MIT License**; see [LICENSE](LICENSE) for the required copyright notice and permission text. Contributions and additional assets may carry their own rights and should be assessed separately before redistribution.

This is an independent adaptation and is **not affiliated with or endorsed by** Julian Garnier.

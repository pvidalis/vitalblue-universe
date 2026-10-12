/** Vitalblue UI – standalone, dependency-free, file:// compatible. */
(() => {
  'use strict';

  const body = document.body;
  const universe = document.querySelector('#universe');
  const solarSystem = document.querySelector('#solar-system');
  const dataLinks = [...document.querySelectorAll('#data a')];
  const viewInput = document.querySelector('.set-view input');
  const zoomInput = document.querySelector('.set-zoom input');
  const scaleInputs = [...document.querySelectorAll('input[name="scale"]')];
  const celestialBodies = new Set(dataLinks.map((link) => link.classList[0]));
  const scales = Object.freeze({ speed: 'scale-stretched', size: 'scale-s', distance: 'scale-d' });

  const state = {
    selectedBody: 'earth',
    view: '3D',
    zoom: 'large',
    scale: 'speed',
    dataOpen: false,
    controlsOpen: false,
  };

  function setExclusiveClasses(element, classes, selected) {
    element.classList.remove(...classes);
    element.classList.add(selected);
  }

  function render() {
    setExclusiveClasses(body, ['view-2D', 'view-3D'], `view-${state.view}`);
    setExclusiveClasses(body, ['zoom-large', 'zoom-close'], `zoom-${state.zoom}`);
    setExclusiveClasses(body, ['data-open', 'data-close'], state.dataOpen ? 'data-open' : 'data-close');
    setExclusiveClasses(body, ['controls-open', 'controls-close'], state.controlsOpen ? 'controls-open' : 'controls-close');
    // CSS relies on these scale classes and the selected planet class.
    universe.className = `${scales[state.scale]} set-${state.scale}`;
    solarSystem.className = state.selectedBody;

    for (const link of dataLinks) {
      const active = link.classList.contains(state.selectedBody);
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    viewInput.checked = state.view === '2D';
    zoomInput.checked = state.zoom === 'close';
    for (const input of scaleInputs) input.checked = input.classList.contains(`set-${state.scale}`);
    document.querySelector('#toggle-data').setAttribute('aria-expanded', String(state.dataOpen));
    document.querySelector('#toggle-controls').setAttribute('aria-expanded', String(state.controlsOpen));
  }

  document.querySelector('#toggle-data').addEventListener('click', (event) => {
    event.preventDefault(); state.dataOpen = !state.dataOpen; render();
  });
  document.querySelector('#toggle-controls').addEventListener('click', (event) => {
    event.preventDefault(); state.controlsOpen = !state.controlsOpen; render();
  });
  for (const link of dataLinks) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const bodyName = link.classList[0];
      if (!celestialBodies.has(bodyName)) return;
      state.selectedBody = bodyName;
      render();
    });
  }
  viewInput.addEventListener('change', () => {
    state.view = viewInput.checked ? '2D' : '3D'; render();
  });
  zoomInput.addEventListener('change', () => {
    state.zoom = zoomInput.checked ? 'close' : 'large'; render();
  });
  for (const input of scaleInputs) {
    input.addEventListener('change', () => {
      if (!input.checked) return;
      state.scale = Object.keys(scales).find((key) => input.classList.contains(`set-${key}`)) ?? 'speed';
      render();
    });
  }

  render();
  // Preserve the original opening transition, without a jQuery delay queue.
  window.addEventListener('load', () => {
    body.classList.remove('opening');
    window.setTimeout(() => { body.classList.remove('hide-UI'); }, 2000);
  }, { once: true });
})();

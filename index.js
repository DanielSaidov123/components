// --- Reusable helper: builds a button with a click handler ---
function createButton(text, onClick) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}

// --- Reusable component: a fully self-contained counter ---
// Closures give each instance its OWN private count state.
// Call this once per counter you need — no copy-paste required.
function createCounter(label, initialValue = 0) {
  let count = initialValue;

  const container = document.createElement('div');
  container.className = 'counter';

  const labelEl = document.createElement('p');
  labelEl.className = 'counter-label';
  labelEl.textContent = label;

  const display = document.createElement('p');

  const buttons = document.createElement('div');
  buttons.className = 'counter-buttons';

  buttons.append(
    createButton('-', () => { count--; render(); }),
    createButton('+', () => { count++; render(); }),
    createButton('Reset', () => { count = initialValue; render(); })
  );

  container.append(labelEl, display, buttons);

  function render() {
    display.textContent = count;
    const isPositive = count > 0;
    const isNegative = count < 0;
    let className;
    if (isPositive) {
      className = 'positive';
    } else if (isNegative) {
      className = 'negative';
    } else {
      className = 'zero';
    }
    display.className = `counter-value ${className}`;
  }

  render();
  return container;
}

// --- Usage: four independent counters from one function ---
const app = document.getElementById('app');
app.append(
  createCounter('Score'),
  createCounter('Lives', 3),
  createCounter('Level', 1),
  createCounter('High Score', 100)
);
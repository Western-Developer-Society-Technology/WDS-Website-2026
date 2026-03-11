// Accessible single-open accordion for FAQ section

const faqAccordion = (() => {
  const items = Array.from(document.querySelectorAll('.faq-item'));

  if (!items.length) return;

  const triggers = items.map((item) =>
    item.querySelector('.faq-trigger')
  );

  const panels = items.map((item) =>
    item.querySelector('.faq-panel')
  );

  const closePanel = (trigger, panel) => {
    if (!trigger || !panel) return;

    const currentHeight = panel.scrollHeight;
    if (currentHeight > 0) {
      panel.style.maxHeight = `${currentHeight}px`;
      panel.offsetHeight; // force reflow to apply current height
    }

    trigger.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    panel.style.maxHeight = '0px';

    const handleTransitionEnd = (event) => {
      if (event.propertyName === 'max-height') {
        panel.hidden = true;
        panel.removeEventListener('transitionend', handleTransitionEnd);
      }
    };

    panel.addEventListener('transitionend', handleTransitionEnd);
  };

  const openPanel = (trigger, panel) => {
    if (!trigger || !panel) return;

    // Close any other open items
    triggers.forEach((otherTrigger, index) => {
      const otherPanel = panels[index];
      if (
        otherTrigger !== trigger &&
        otherTrigger.getAttribute('aria-expanded') === 'true'
      ) {
        closePanel(otherTrigger, otherPanel);
      }
    });

    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');

    // Ensure we measure after the panel becomes unhidden
    panel.style.maxHeight = 'none';
    const targetHeight = panel.scrollHeight;
    panel.style.maxHeight = '0px';
    panel.offsetHeight; // force reflow

    panel.classList.add('is-open');
    panel.style.maxHeight = `${targetHeight}px`;
  };

  const togglePanel = (trigger, panel) => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closePanel(trigger, panel);
    } else {
      openPanel(trigger, panel);
    }
  };

  triggers.forEach((trigger, index) => {
    const panel = panels[index];
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      togglePanel(trigger, panel);
    });

    // Optional: arrow key navigation between questions
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        let nextIndex = (index + direction + triggers.length) % triggers.length;
        triggers[nextIndex].focus();
      }
    });
  });
})();


/* ============================================================
   VERDANA — PLANT WELLBEING STUDIO
   main.js — Vanilla JS, no dependencies
   ============================================================ */

'use strict';

/* ─── 1. NAV: scroll state + mobile burger ─── */
(function initNav() {
  const header = document.getElementById('site-header');
  const burger = document.getElementById('nav-burger');
  const navLinks = document.querySelector('.nav__links');

  if (!header || !burger || !navLinks) return;

  // Scrolled state
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile burger toggle
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      navLinks.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    }
  });
})();

/* ─── 2. SCROLL REVEAL ─── */
(function initReveal() {
  const targets = document.querySelectorAll(
    '.pillar, .care-card, .plant-card, .season-card, .about__heading, .care-guide__title, .plants__title, .seasonal__title'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings in the same grid
        const siblings = Array.from(entry.target.parentElement.children).filter(
          c => c.classList.contains('reveal')
        );
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 80, 400);
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
})();

/* ─── 3. DIAGNOSIS TOOL ─── */
(function initDiagnosis() {
  const symptoms = document.querySelectorAll('.symptom-btn');
  const resultEl = document.getElementById('diagnosis-result');

  const data = {
    yellow: {
      severity: 'moderate',
      severityLabel: 'Moderate Concern',
      title: 'Overwatering / Root Rot',
      desc: 'Yellow leaves are the #1 symptom of overwatering. When roots sit in soggy soil, they cannot absorb oxygen, causing them to rot. The plant signals distress through yellowing from the bottom up.',
      steps: [
        'Remove the plant from its pot and inspect the roots.',
        'Trim any black, mushy roots with sterilised scissors.',
        'Allow roots to air-dry for 2–4 hours before repotting.',
        'Repot in fresh, well-draining soil with added perlite.',
        'Wait until the top 2 inches are completely dry before watering.',
      ],
      prevention: 'Always check soil moisture before watering. Use a moisture meter for precision.',
    },
    brown: {
      severity: 'low',
      severityLabel: 'Low Concern',
      title: 'Low Humidity / Dry Air',
      desc: 'Brown leaf tips are almost always caused by dry air or inconsistent watering. The leaf tips are the last to receive moisture through the plant\'s vascular system and are the first to show drought stress.',
      steps: [
        'Increase ambient humidity using a pebble tray filled with water.',
        'Group plants together to create a micro-humid environment.',
        'Mist leaves in the morning, ensuring they dry before nightfall.',
        'Trim affected tips with clean scissors to improve appearance.',
        'Check for fluoride or salt buildup from tap water — switch to filtered.',
      ],
      prevention: 'Aim for 50–70% humidity for most tropical houseplants. Consider a room humidifier.',
    },
    drooping: {
      severity: 'high',
      severityLabel: 'Urgent Attention',
      title: 'Dehydration / Root Damage',
      desc: 'Drooping or wilting is an emergency signal. The plant has lost turgor pressure in its cells, meaning it cannot hold its structure. This can result from underwatering, extreme heat, or severe root damage.',
      steps: [
        'Water the plant thoroughly until water flows from the drainage hole.',
        'If soil is bone-dry, place the pot in a basin of water for 20 minutes.',
        'Move the plant away from direct sun and heat sources immediately.',
        'Check roots for root rot if watering doesn\'t restore firmness within 2 hours.',
        'If recovered, assess your watering schedule to prevent recurrence.',
      ],
      prevention: 'Water consistently based on soil moisture checks, not a fixed schedule.',
    },
    spots: {
      severity: 'high',
      severityLabel: 'Urgent Attention',
      title: 'Fungal Infection / Bacterial Disease',
      desc: 'Dark or water-soaked spots on leaves indicate a fungal or bacterial pathogen. These spread rapidly in high humidity with poor air circulation. Early intervention prevents total leaf loss.',
      steps: [
        'Isolate the affected plant immediately from others.',
        'Remove all infected leaves and dispose of them — do not compost.',
        'Apply a neem oil solution (1 tsp oil + 1 tsp dish soap per litre) to all surfaces.',
        'Improve air circulation around the plant.',
        'Reduce humidity slightly and avoid getting water on leaves when watering.',
      ],
      prevention: 'Ensure good airflow, avoid overhead watering, and inspect new plants before introducing to your collection.',
    },
    leggy: {
      severity: 'low',
      severityLabel: 'Low Concern',
      title: 'Light Deficiency / Etiolation',
      desc: 'Leggy or stretched growth — long stems with wide gaps between leaves — is a classic sign of light starvation. The plant is reaching desperately towards a light source, sacrificing density for reach.',
      steps: [
        'Move the plant progressively closer to a bright window over 1–2 weeks.',
        'Rotate the pot 45° every 7 days to prevent one-sided growth.',
        'Consider a full-spectrum grow light for dark rooms or winter months.',
        'Prune leggy stems just above a node to encourage compact new growth.',
        'Do not dramatically increase light overnight — acclimate the plant gradually.',
      ],
      prevention: 'Ensure your plant receives its minimum daily light requirement. East or south-facing windows are ideal for most tropicals.',
    },
    rootbound: {
      severity: 'moderate',
      severityLabel: 'Moderate Concern',
      title: 'Root Bound — Repotting Needed',
      desc: 'A root-bound plant has exhausted the space in its container. Roots may be visibly circling the drainage hole, the plant dries out extremely fast, or growth has stalled completely despite good care.',
      steps: [
        'Select a new pot 2–4 cm wider in diameter than the current one.',
        'Water the plant 24 hours before repotting to reduce transplant shock.',
        'Gently loosen and untangle circling roots with your fingers.',
        'Fill the new pot with fresh potting mix, centering the root ball.',
        'Water thoroughly after repotting and keep out of direct sun for one week.',
      ],
      prevention: 'Inspect roots annually in spring. Repot when roots circle the container or emerge from drainage holes.',
    },
  };

  if (!symptoms.length || !resultEl) return;

  function renderResult(symptom) {
    const d = data[symptom];
    if (!d) return;

    const severity = resultEl.querySelector('#diagnosis-severity');
    const title    = resultEl.querySelector('#diagnosis-title');
    const desc     = resultEl.querySelector('#diagnosis-desc');
    const steps    = resultEl.querySelector('#diagnosis-steps');
    const prevention = resultEl.querySelector('#diagnosis-prevention');

    if (severity) {
      severity.textContent = d.severityLabel;
      severity.className = `diagnosis__severity diagnosis__severity--${d.severity}`;
    }
    if (title) title.textContent = d.title;
    if (desc)  desc.textContent  = d.desc;
    if (steps) {
      steps.innerHTML = d.steps.map(s => `<li>${s}</li>`).join('');
    }
    if (prevention) prevention.textContent = d.prevention;

    // Re-trigger animation
    const inner = resultEl.querySelector('.diagnosis__result-inner');
    if (inner) {
      inner.style.animation = 'none';
      inner.offsetHeight; // reflow
      inner.style.animation = '';
    }
  }

  symptoms.forEach(btn => {
    btn.addEventListener('click', () => {
      symptoms.forEach(b => {
        b.classList.remove('symptom-btn--active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('symptom-btn--active');
      btn.setAttribute('aria-pressed', 'true');
      renderResult(btn.dataset.symptom);
    });
  });
})();

/* ─── 4. NEWSLETTER FORM ─── */
(function initNewsletter() {
  const form   = document.getElementById('newsletter-form');
  const notice = document.getElementById('form-notice');
  const input  = document.getElementById('email-input');

  if (!form || !notice || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      notice.textContent = 'Please enter a valid email address.';
      notice.className = 'cta-section__notice cta-section__notice--error';
      input.focus();
      return;
    }

    // Simulate successful submission
    notice.textContent = '✓ You\'re on the list. Your first guide arrives within 24 hours.';
    notice.className = 'cta-section__notice cta-section__notice--success';
    input.value = '';
    input.blur();

    // Clear notice after 6 seconds
    setTimeout(() => {
      notice.textContent = '';
      notice.className = 'cta-section__notice';
    }, 6000);
  });
})();

/* ─── 5. HERO STAT BAR ANIMATION ─── */
(function initHeroStats() {
  const fills = document.querySelectorAll('.hero__stat-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // CSS transition handles the animation via --fill custom property
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  fills.forEach(fill => observer.observe(fill));
})();

/* ─── 6. SMOOTH ANCHOR LINKS ─── */
(function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 80;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

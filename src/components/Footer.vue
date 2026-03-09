<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">

          <!-- Brand Column -->
          <div class="footer-brand">
            <div class="footer-logo">
              <!-- <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="17" stroke="currentColor" stroke-width="2.2"/>
                <circle cx="19" cy="19" r="5.5" stroke="currentColor" stroke-width="2.2"/>
                <line x1="19" y1="2" x2="19" y2="13.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="19" y1="24.5" x2="19" y2="36" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="2" y1="19" x2="13.5" y2="19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="24.5" y1="19" x2="36" y2="19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="5.7" y1="5.7" x2="13.6" y2="13.6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="24.4" y1="24.4" x2="32.3" y2="32.3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="32.3" y1="5.7" x2="24.4" y2="13.6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="13.6" y1="24.4" x2="5.7" y2="32.3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
              </svg> -->
              <span>Wealden Wheels</span>
            </div>
            <p class="footer-desc">
              A not-for-profit community transport organisation serving Pluckley and surrounding villages in Kent. Providing safe, affordable and flexible minibus hire for our members since 2003.
            </p>
            <div class="footer-supporters">
              <span class="supporter-label">Supported by:</span>
              <div class="supporter-badges">
                <span class="supporter-badge">Kent County Council</span>
                <span class="supporter-badge">Ashford Borough Council</span>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about">About Us</RouterLink></li>
              <li><RouterLink to="/hire">Hire a Minibus</RouterLink></li>
              <li><RouterLink to="/membership">Membership</RouterLink></li>
              <li><RouterLink to="/volunteering">Volunteering</RouterLink></li>
              <li><RouterLink to="/fleet">Our Fleet</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Get In Touch</h4>
            <ul class="footer-contact">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>The Old Granary, Pevington Farm,<br>Egerton Road, Pluckley, TN27 0PF</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:01233840000">01233 840000</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:wealdenwheels@btconnect.com">wealdenwheels@btconnect.com</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                <span>Office hours available on request</span>
              </li>
            </ul>
            <a href="https://www.facebook.com" class="facebook-link" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              Find us on Facebook
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p>&copy; {{ year }} Wealden Wheels. All rights reserved.</p>
          <p>Registered not-for-profit community transport organisation &mdash; Kent</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--green-900);
  color: rgba(255,255,255,0.75);
}

.footer-main {
  padding: 72px 0 56px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr;
  gap: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: var(--white);
}

.footer-logo span {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}

.footer-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 24px;
  color: rgba(255,255,255,0.6);
}

.footer-supporters {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.supporter-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.supporter-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.supporter-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 4px 12px;
  border-radius: 100px;
}

.footer-col h4 {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--green-400);
  margin-bottom: 20px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col ul li {
  font-size: 0.88rem;
}

.footer-col ul li a {
  color: rgba(255,255,255,0.65);
  transition: color var(--transition);
}

.footer-col ul li a:hover {
  color: var(--white);
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.65);
}

.footer-contact li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--green-400);
}

.footer-contact a {
  color: rgba(255,255,255,0.65);
  transition: color var(--transition);
}

.footer-contact a:hover {
  color: var(--white);
}

.facebook-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  transition: all var(--transition);
}

.facebook-link:hover {
  background: rgba(255,255,255,0.14);
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.4);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 580px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>

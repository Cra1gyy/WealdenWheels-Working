<template>
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink>
        <span>/</span>
        <span>Contact</span>
      </div>
      <h1>Contact Us</h1>
      <p>If you would like more information, advice about us, or wish to book a vehicle — please call or email us.</p>
    </div>
  </section>

  <!-- Contact Cards -->
  <section class="section">
    <div class="container">

      <div class="contact-cards">

        <a href="tel:01233840000" class="contact-card contact-card--primary">
          <div class="contact-card-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Call Us</span>
            <strong class="contact-card-value">01233 840000</strong>
            <span class="contact-card-note">The quickest way to get a quote or book a vehicle</span>
          </div>
          <div class="contact-card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>

        <a href="mailto:wealdenwheels@btconnect.com" class="contact-card">
          <div class="contact-card-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Email Us</span>
            <strong class="contact-card-value">wealdenwheels@btconnect.com</strong>
            <span class="contact-card-note">We aim to respond within one working day</span>
          </div>
          <div class="contact-card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>

      </div>

      <!-- Info Grid -->
      <div class="contact-info-grid">

        <div class="info-card">
          <div class="info-card-header">
            <div class="info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-700)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3>Our Address</h3>
          </div>
          <address>
            Wealden Wheels<br>
            The Old Granary<br>
            Pevington Farm<br>
            Egerton Road<br>
            Pluckley<br>
            TN27 0PF
          </address>
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <div class="info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-700)">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>
            <h3>Office Hours</h3>
          </div>
          <div class="hours-list">
            <div class="hours-row" v-for="h in hours" :key="h.day">
              <span>{{ h.day }}</span>
              <span class="hours-time">{{ h.time }}</span>
            </div>
          </div>
          <p class="info-note">For urgent bookings outside office hours, please leave a voicemail and we will call you back as soon as possible.</p>
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <div class="info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-700)">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3>Supported By</h3>
          </div>
          <div class="supporters">
            <div class="supporter" v-for="s in supporters" :key="s">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              {{ s }}
            </div>
          </div>
          <div class="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener" class="facebook-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Find us on Facebook
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Map / Location Banner -->
  <section class="location-banner">
    <div class="location-banner-inner">
      <div class="location-text">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <div>
          <strong>Based in Pluckley, Kent</strong>
          <span>Serving Pluckley, Charing, Chilham, Egerton, Smarden and surrounding villages</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hours = [
  { day: 'Monday – Friday', time: 'Available on request' },
  { day: 'Saturday', time: 'Available on request' },
  { day: 'Sunday', time: 'By arrangement' }
]

const supporters = [
  'Kent County Council',
  'Ashford Borough Council',
  'Parish Councils of Charing, Chilham, Egerton, Pluckley & Smarden'
]
</script>

<style scoped>
/* Contact Cards */
.contact-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 48px;
  overflow: hidden;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  border-radius: var(--radius-lg);
  border: 2px solid var(--gray-300);
  background: var(--white);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition);
  cursor: pointer;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
  border-color: var(--green-500);
}

.contact-card--primary {
  background: linear-gradient(135deg, var(--green-800), var(--green-700));
  border-color: transparent;
}

.contact-card--primary:hover {
  box-shadow: 0 16px 40px rgba(15, 76, 38, 0.35);
}

.contact-card-icon {
  width: 68px;
  height: 68px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--green-100);
  color: var(--green-700);
}

.contact-card--primary .contact-card-icon {
  background: rgba(255,255,255,0.15);
  color: white;
}

.contact-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-card-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray-500);
}

.contact-card--primary .contact-card-label {
  color: rgba(255,255,255,0.6);
}

.contact-card-value {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--dark);
  line-height: 1.2;
}

.contact-card--primary .contact-card-value {
  color: var(--white);
}

.contact-card-note {
  font-size: 0.82rem;
  color: var(--gray-500);
}

.contact-card--primary .contact-card-note {
  color: rgba(255,255,255,0.65);
}

.contact-card-arrow {
  color: var(--gray-300);
  transition: transform var(--transition), color var(--transition);
  flex-shrink: 0;
}

.contact-card--primary .contact-card-arrow {
  color: rgba(255,255,255,0.4);
}

.contact-card:hover .contact-card-arrow {
  transform: translateX(4px);
  color: var(--green-600);
}

.contact-card--primary:hover .contact-card-arrow {
  color: rgba(255,255,255,0.8);
}

/* Info Grid */
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.info-card {
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-100);
}

.info-icon {
  width: 44px;
  height: 44px;
  background: var(--green-100);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-card-header h3 {
  font-size: 1.05rem;
  color: var(--dark);
}

address {
  font-style: normal;
  font-size: 0.92rem;
  color: var(--gray-700);
  line-height: 1.9;
}

/* Hours */
.hours-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.88rem;
  padding: 7px 0;
  border-bottom: 1px solid var(--gray-100);
  color: var(--gray-700);
}

.hours-row:last-child {
  border-bottom: none;
}

.hours-time {
  font-weight: 600;
  color: var(--green-700);
}

.info-note {
  font-size: 0.8rem;
  color: var(--gray-500);
  line-height: 1.6;
  font-style: italic;
}

/* Supporters */
.supporters {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.supporter {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--gray-700);
  line-height: 1.4;
}

.supporter svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.social-links {
  margin-top: 4px;
}

.facebook-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--green-700);
  background: var(--green-100);
  border: 1px solid var(--green-100);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition);
}

.facebook-btn:hover {
  background: var(--green-700);
  border-color: var(--green-700);
  color: var(--white);
}

/* Location Banner */
.location-banner {
  background: linear-gradient(135deg, #072414, #1a6b3a);
  padding: 48px 0;
}

.location-banner-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: center;
}

.location-text {
  display: flex;
  align-items: center;
  gap: 16px;
}

.location-text > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.location-text strong {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--white);
}

.location-text span {
  font-size: 0.92rem;
  color: rgba(255,255,255,0.65);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-cards {
    grid-template-columns: 1fr;
  }
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  .contact-card {
    padding: 20px 18px;
    gap: 14px;
  }
  .contact-card-icon {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
  }
  .contact-card-value {
    font-size: 0.95rem;
    word-break: break-all;
  }
}
</style>

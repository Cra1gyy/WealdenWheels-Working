<template>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink><span>/</span><span>Membership</span>
      </div>
      <h1>Membership</h1>
      <p>Our vehicles are only available to members — but becoming one is both very straightforward and very affordable.</p>
    </div>
  </section>

  <!-- Who Can Join -->
  <section class="section">
    <div class="container">
      <div class="membership-intro">
        <div class="membership-intro-content">
          <span class="tag">Who Can Join?</span>
          <h2>Open to Almost Anyone in Our Area</h2>
          <p>Membership is open to any group, organisation, club, care home or family located in or around our villages for a small annual fee.</p>
          <p>For this fee, our members can then hire one of our vehicles either on a self-drive basis or — for a slightly higher charge — with one of our friendly volunteer drivers.</p>
          <p>We also encourage our members to provide one or more drivers (there are some driving-licence requirements, particularly for our larger buses). This will enable you to benefit from reduced hire fees and help take the pressure off our very busy volunteer drivers.</p>
        </div>

        <div class="membership-rates">
          <h3>Annual Membership Rates</h3>
          <div class="rate-cards">
            <div class="rate-card rate-card--featured">
              <div class="rate-card-label">Local Parishes</div>
              <div class="rate-amount">£10 <span>per year</span></div>
              <div class="rate-detail">Charing, Chilham, Egerton, Pluckley or Smarden</div>
            </div>
            <div class="rate-card">
              <div class="rate-card-label">All Other Addresses</div>
              <div class="rate-amount">£20 <span>per year</span></div>
              <div class="rate-detail">Members from all other areas within Kent and beyond</div>
              <div class="rate-renewal">£15 in subsequent years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits -->
  <section class="section section--light">
    <div class="container">
      <div class="section-header">
        <span class="tag">Member Benefits</span>
        <h2>What You Get as a Member</h2>
        <p>Your membership unlocks access to our full fleet and everything we offer as an organisation.</p>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card" v-for="b in benefits" :key="b.title">
          <div class="benefit-icon" v-html="b.icon"></div>
          <h3>{{ b.title }}</h3>
          <p>{{ b.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How to Join -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tag">How to Join</span>
        <h2>Joining is Simple</h2>
        <p>Just follow these three easy steps to become a Wealden Wheels member.</p>
      </div>
      <div class="steps-grid">
        <div class="step" v-for="(s, i) in steps" :key="s.title">
          <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>

      <div class="form-request-box">
        <div class="form-request-content">
          <h3>Get Your Membership Form</h3>
          <p>Please contact us to receive a membership form. Print it, complete it, and return it with your membership fee to the address shown on the form.</p>
        </div>
        <div class="form-request-actions">
          <a href="tel:01233840000" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            01233 840000
          </a>
          <a href="mailto:wealdenwheels@btconnect.com" class="btn btn-outline-green">wealdenwheels@btconnect.com</a>
        </div>
      </div>

      <div class="address-return">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        <div>
          <strong>Return completed forms and payment to:</strong>
          <address>Wealden Wheels, The Old Granary, Pevington Farm, Egerton Road, Pluckley, TN27 0PF</address>
        </div>
      </div>
    </div>
  </section>

  <!-- Volunteer Drivers callout -->
  <section class="section section--dark">
    <div class="container">
      <div class="driver-callout">
        <div class="driver-callout-content">
          <span class="tag">Become a Driver Member</span>
          <h2>Could You Be a Volunteer Driver?</h2>
          <p>If you'd like to help your community while getting a reduced hire rate, consider registering as a volunteer driver. There are some licence requirements, particularly for our larger vehicles — find out more on our volunteering page.</p>
          <RouterLink to="/volunteering" class="btn btn-outline-white">Find Out About Volunteering</RouterLink>
        </div>
        <div class="driver-callout-visual">
          <div class="driver-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Access to All Vehicles',
    desc: 'As a member, you can hire any vehicle in our fleet — from our compact Marvin to our 13-seat Mollie, depending on availability.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3z"/></svg>`
  },
  {
    title: 'Self-Drive or Chauffeured',
    desc: 'Choose to drive yourself (if you meet the requirements) or use one of our friendly volunteer drivers.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
  },
  {
    title: 'Wheelchair Accessible Vehicles',
    desc: 'Members requiring wheelchair access can use three of our four specially adapted vehicles, ensuring inclusive travel for all.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>`
  },
  {
    title: 'Discounts for Regular Bookings',
    desc: 'If you regularly hire our vehicles, discounts are available. Get in touch to discuss your requirements and we\'ll find the best arrangement.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`
  },
  {
    title: 'Fuel, Insurance & Breakdown Covered',
    desc: 'All hire charges include fuel, insurance and breakdown rescue/recovery — no hidden costs or unexpected extras.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`
  },
  {
    title: 'UK-Wide Travel',
    desc: 'Our vehicles can be used anywhere in the United Kingdom — perfect for day trips, theatre visits, sports fixtures and much more.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
  }
]

const steps = [
  {
    title: 'Request a Membership Form',
    desc: 'Call us on 01233 840000 or email wealdenwheels@btconnect.com and we will send you a membership form.'
  },
  {
    title: 'Complete & Return the Form',
    desc: 'Fill in your details and return the completed form along with your annual membership fee to our address in Pluckley.'
  },
  {
    title: 'Start Hiring',
    desc: 'Once your membership is confirmed, you can start booking our vehicles — by phone or email, whenever you need them.'
  }
]
</script>

<style scoped>
.membership-intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: start;
}

.membership-intro-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 20px;
}

.membership-intro-content p {
  font-size: 0.97rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

.membership-rates h3 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 16px;
}

.rate-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.rate-card {
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 24px;
  background: var(--white);
  transition: all var(--transition);
}

.rate-card:hover {
  border-color: var(--green-400);
  box-shadow: var(--shadow-lg);
}

.rate-card--featured {
  background: linear-gradient(135deg, var(--green-800), var(--green-700));
  border-color: transparent;
}

.rate-card-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 8px;
}

.rate-card--featured .rate-card-label {
  color: rgba(255,255,255,0.6);
}

.rate-amount {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--green-700);
  line-height: 1;
  margin-bottom: 8px;
}

.rate-amount span {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--gray-500);
}

.rate-card--featured .rate-amount {
  color: var(--white);
}

.rate-card--featured .rate-amount span {
  color: rgba(255,255,255,0.65);
}

.rate-detail {
  font-size: 0.88rem;
  color: var(--gray-600);
  margin-bottom: 6px;
}

.rate-card--featured .rate-detail {
  color: rgba(255,255,255,0.8);
}

.rate-renewal {
  font-size: 0.8rem;
  color: var(--gray-400);
  font-style: italic;
}

.rate-card--featured .rate-renewal {
  color: rgba(255,255,255,0.5);
}

/* Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.benefit-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-100);
  transition: all var(--transition);
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  background: var(--green-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.benefit-card p {
  font-size: 0.87rem;
  color: var(--gray-500);
  line-height: 1.65;
}

/* Steps */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;
  position: relative;
}

.steps-grid::before {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(16.66% + 12px);
  right: calc(16.66% + 12px);
  height: 2px;
  background: var(--green-100);
  z-index: 0;
}

.step {
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 56px;
  height: 56px;
  background: var(--green-700);
  color: white;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 0 0 6px var(--white), 0 0 0 8px var(--green-100);
}

.step h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.step p {
  font-size: 0.87rem;
  color: var(--gray-500);
  line-height: 1.65;
}

/* Form Request Box */
.form-request-box {
  background: var(--green-50);
  border: 1px solid var(--green-100);
  border-radius: var(--radius-lg);
  padding: 32px 36px;
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.form-request-content h3 {
  font-size: 1.15rem;
  margin-bottom: 6px;
}

.form-request-content p {
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.65;
  max-width: 460px;
}

.form-request-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.address-return {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--gray-600);
  background: var(--gray-100);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.address-return strong {
  display: block;
  margin-bottom: 4px;
  color: var(--dark);
}

.address-return address {
  font-style: normal;
  color: var(--gray-600);
}

.address-return svg {
  flex-shrink: 0;
  margin-top: 2px;
}

/* Driver Callout */
.driver-callout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: center;
}

.driver-callout-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: white;
  margin-bottom: 16px;
}

.driver-callout-content p {
  color: rgba(255,255,255,0.75);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 28px;
}

.driver-callout-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.driver-icon {
  width: 160px;
  height: 160px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .membership-intro { grid-template-columns: 1fr; gap: 40px; }
  .driver-callout { grid-template-columns: 1fr; }
  .driver-callout-visual { display: none; }
  .steps-grid { grid-template-columns: 1fr; }
  .steps-grid::before { display: none; }
}

@media (max-width: 580px) {
  .benefits-grid { grid-template-columns: 1fr; }
  .form-request-box { flex-direction: column; gap: 20px; padding: 24px; }
}
</style>

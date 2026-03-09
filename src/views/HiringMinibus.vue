<template>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink><span>/</span><span>Hiring a Minibus</span>
      </div>
      <h1>Hiring a Minibus</h1>
      <p>Our vehicles can be hired on a self-drive basis, or we can supply a volunteer driver. Hire charges include fuel, insurance and breakdown rescue/recovery.</p>
    </div>
  </section>
  
  <!-- Two Options -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tag">Hire Options</span>
        <h2>Two Ways to Hire</h2>
        <p>Choose the option that suits you and your group best.</p>
      </div>
      <div class="hire-options">
        
        <!-- Self Drive -->
        <div class="hire-option">
          <div class="hire-option-header">
            <div class="hire-option-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--green-700)">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5zm-12-1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div>
              <h2>Self-Drive Hire</h2>
              <div class="hire-rate">
                From <strong>£1.30</strong> per mile
                <span class="hire-rate-note">(£1.50/mile for members outside the supporting parishes)</span>
              </div>
            </div>
          </div>
          <p>Members with a suitable driving licence can hire one of our vehicles and drive themselves. Rate is based on starting at our base in Pluckley to return.</p>
          <div class="hire-requirements">
            <h3>Requirements</h3>
            <ul>
              <li v-for="r in selfDriveReqs" :key="r">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span v-html="r"></span>
              </li>
            </ul>
          </div>
          <div class="hire-option-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            We will need to do an online licence check at our office which takes about 10 minutes. You'll need your National Insurance number and postcode. Alternatively you can provide a 'check code' for our use at
            <a href="https://www.gov.uk/view-driving-licence" target="_blank" rel="noopener">gov.uk/view-driving-licence</a>
          </div>
        </div>
        
        <!-- Volunteer Driver -->
        <div class="hire-option hire-option--featured">
          <div class="hire-option-header">
            <div class="hire-option-icon hire-option-icon--white">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div>
              <h2>Hire with a Volunteer Driver</h2>
              <div class="hire-rate hire-rate--white">
                From <strong>£1.90 – £2.15</strong> per mile
              </div>
            </div>
          </div>
          <p>The majority of our members rely on us to provide a volunteer driver. Our charges are in the region of £1.90–£2.15 per mile.</p>
          <p>We aim to ensure our members receive efficient, friendly and courteous service and will be delivered to their destinations safely and comfortably every time. Our vehicles are regularly checked for safety and road-worthiness, and our volunteer drivers are fully-trained and DBS (formerly CRB) checked. Many of our drivers have also received training in basic First Aid.</p>
          <div class="driver-qualities">
            <div class="driver-quality" v-for="q in driverQualities" :key="q">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              {{ q }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  <section class="section section--light">
    <div class="container">
      <div class="hire-intro">
        <div class="hire-intro-text">
          <p>The charge is primarily based on mileage and time, although a total fee can often be agreed up-front once the route, destination and timings are known. <strong>Discounts are available for regular bookings.</strong> Our vehicles can only operate within the UK.</p>
        </div>
        <div class="hire-contact-cta">
          <span>To make a booking, please call or email us:</span>
          <div class="hire-contact-btns">
            <a href="tel:01233840000" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              01233 840000
            </a>
            <a href="mailto:wealdenwheels@btconnect.com" class="btn btn-outline-green">wealdenwheels@btconnect.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- T&Cs -->
  <section class="section">
    <div class="container">
      <div class="tc-box">
        <h3>Terms &amp; Conditions</h3>
        <p>Our terms and conditions apply to all bookings. Please contact us if you would like to receive a copy before making your booking.</p>
        <a href="mailto:wealdenwheels@btconnect.com" class="btn btn-outline-green">Request Terms &amp; Conditions</a>
      </div>
    </div>
  </section>
  
  <!-- CTA -->
  <section class="hire-cta">
    <div class="container">
      <div class="hire-cta-inner">
        <h2>Ready to Book?</h2>
        <p>Please note: vehicles are only available to members. Membership is affordable and open to almost anyone — find out more below.</p>
        <div class="hire-cta-btns">
          <a href="tel:01233840000" class="btn btn-outline-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call 01233 840000
          </a>
          <RouterLink to="/membership" class="btn btn-primary" style="background:white;color:var(--green-800);border-color:white;">
            Find Out About Membership
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const selfDriveReqs = [
  'The hirer must be a member of Wealden Wheels',
  'Members from Charing, Chilham, Egerton, Pluckley and Smarden are charged <strong>£1.30 per mile</strong>',
  'Members from elsewhere are charged <strong>£1.50 per mile</strong>',
  'Rate is based on starting at our base in Pluckley to return',
  'Driver must be at least <strong>25 years old</strong>',
  'Must have fewer than <strong>three penalty points</strong> on driving licence',
  'Must have licence entitlement D1 (however, our nine-seater minibus can be driven on an ordinary car licence)',
  'A brief vehicle familiarisation and test drive is given to all hirers'
]

const driverQualities = [
  'Fully DBS (formerly CRB) checked',
  'Completed MIDAS (Minibus Driver Awareness Scheme) training',
  'Vehicles regularly safety checked',
  'Many drivers trained in First Aid',
  'Friendly, courteous and experienced'
]
</script>

<style scoped>
.hire-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding: 0 0 16px;
}

.hire-intro-text {
  font-size: 1.05rem;
  color: var(--gray-600);
  line-height: 1.75;
}

.hire-contact-cta {
  background: var(--green-50);
  border: 1px solid var(--green-100);
  border-radius: var(--radius-lg);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hire-contact-cta > span {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--gray-700);
}

.hire-contact-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Hire Options */
.hire-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.hire-option {
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hire-option--featured {
  background: linear-gradient(145deg, var(--green-800), var(--green-700));
  border-color: transparent;
  color: white;
}

.hire-option-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.hire-option-icon {
  width: 72px;
  height: 72px;
  background: var(--green-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hire-option-icon--white {
  background: rgba(255,255,255,0.15);
}

.hire-option h2 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.hire-option--featured h2 {
  color: white;
}

.hire-rate {
  font-size: 0.92rem;
  color: var(--gray-600);
}

.hire-rate strong {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--green-700);
}

.hire-rate--white {
  color: rgba(255,255,255,0.75);
}

.hire-rate--white strong {
  color: white;
}

.hire-rate-note {
  display: block;
  font-size: 0.8rem;
  margin-top: 2px;
}

.hire-option > p {
  font-size: 0.92rem;
  color: var(--gray-600);
  line-height: 1.7;
}

.hire-option--featured > p {
  color: rgba(255,255,255,0.8);
}

.hire-requirements h3 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 14px;
}

.hire-requirements ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hire-requirements li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--gray-700);
  line-height: 1.5;
}

.hire-requirements li svg {
  flex-shrink: 0;
  margin-top: 3px;
}

.hire-option-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--gray-500);
  background: var(--green-50);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  line-height: 1.6;
}

.hire-option-note a {
  color: var(--green-700);
  font-weight: 600;
  text-decoration: underline;
}

.hire-option-note svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.driver-qualities {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.driver-quality {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.85);
}

/* T&C Box */
.tc-box {
  background: var(--green-50);
  border: 1px solid var(--green-100);
  border-radius: var(--radius-lg);
  padding: 40px 48px;
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.tc-box h3 {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.tc-box p {
  font-size: 0.92rem;
  color: var(--gray-500);
  flex: 1;
  min-width: 200px;
}

/* CTA */
.hire-cta {
  background: linear-gradient(135deg, #072414, #1a6b3a);
  padding: 72px 0;
}

.hire-cta-inner {
  text-align: center;
}

.hire-cta-inner h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--white);
  margin-bottom: 12px;
}

.hire-cta-inner p {
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.hire-cta-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hire-intro,
  .hire-options {
    grid-template-columns: 1fr;
  }
  .tc-box {
    padding: 28px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>

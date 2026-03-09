<template>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink><span>/</span><span>About Us</span>
      </div>
      <h1>About Wealden Wheels</h1>
      <p>A community-run, not-for-profit transport service for the people of Pluckley and surrounding villages in Kent.</p>
    </div>
  </section>

  <!-- What is Community Transport -->
  <section class="section">
    <div class="container">
      <div class="about-intro-grid">
        <div class="about-intro-content">
          <span class="tag">What is Community Transport?</span>
          <h2>Transport Run by the Community, for the Community</h2>
          <p>Community transport is safe, accessible, cost-effective and flexible transport run by the community for the community. It shows what can be done when people take responsibility for solving their own transport problems.</p>
          <p>It mobilises and engages local communities, is provided by charities and voluntary organisations, and harnesses the experience and energy of volunteers who give freely of their time to help others.</p>
          <p>Community transport is about freedom and fairness of opportunity. It meets the needs of people who do not have access to cars, taxis or buses — providing a lifeline in both rural and urban areas. It takes disabled people to work, children to school, sick people to healthcare and older people to the shops.</p>
        </div>
        <div class="about-intro-visual">
          <div class="about-photo-wrap">
            <img :src="busTripImg" alt="Wealden Wheels fleet at Pevington Farm" class="about-photo" />
            <div class="about-photo-caption">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-400)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              Based at Pevington Farm, Pluckley, Kent
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What is Wealden Wheels -->
  <section class="section section--light">
    <div class="container">
      <div class="ww-grid">
        <div>
          <span class="tag">What is Wealden Wheels?</span>
          <h2>Your Village Minibus Service</h2>
          <p>Wealden Wheels is a village community not-for-profit transport initiative based in Pluckley, Kent. We are supported by Kent County Council and Ashford Borough Council, along with the Parish Councils of Charing, Chilham, Egerton, Pluckley and Smarden.</p>
          <p>We aim to bridge the shortfall in accessible transport for people who live in rural areas. We provide appropriate and affordable travel solutions either on a self-drive basis or with one of our reliable, friendly volunteer drivers.</p>
          <div class="supported-by">
            <p class="supported-label">We are proudly supported by:</p>
            <div class="supported-grid">
              <div class="supported-item" v-for="s in supporters" :key="s">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                {{ s }}
              </div>
            </div>
          </div>
        </div>
        <div class="ww-stats-panel">
          <div class="ww-stat" v-for="s in wwStats" :key="s.label">
            <div class="ww-stat-icon" v-html="s.icon"></div>
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Who is it for -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tag">Who Is It For?</span>
        <h2>Transport for Everyone in Our Community</h2>
        <p>Many of our members are elderly, disabled or have limited mobility. We always ensure that the most suitable minibus is provided to ensure that everyone, whatever their concern, can safely access our vehicles.</p>
      </div>
      <div class="for-grid">
        <div class="for-card" v-for="f in forGroups" :key="f.title">
          <div class="for-icon" v-html="f.icon"></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Values -->
  <section class="section section--dark">
    <div class="container">
      <div class="section-header">
        <span class="tag">Our Values</span>
        <h2>What We Stand For</h2>
        <p>These principles guide everything we do, from how we maintain our vehicles to how we support our community.</p>
      </div>
      <div class="values-grid">
        <div class="value-item" v-for="v in values" :key="v.title">
          <div class="value-icon" v-html="v.icon"></div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="about-cta">
    <div class="container">
      <div class="about-cta-inner">
        <h2>Want to Join or Get Involved?</h2>
        <p>Whether you'd like to become a member to use our minibuses, or give back to your community as a volunteer driver, we'd love to hear from you.</p>
        <div class="about-cta-btns">
          <RouterLink to="/membership" class="btn btn-primary" style="background:white;color:var(--green-800);border-color:white;">Become a Member</RouterLink>
          <RouterLink to="/volunteering" class="btn btn-outline-white">Volunteer with Us</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fleetImg from '@/images/fleet-2018.jpg'
import busTripImg from '@/images/bus-on-trip.jpg'

const supporters = [
  'Kent County Council',
  'Ashford Borough Council',
  'Parish Council of Charing',
  'Parish Council of Chilham',
  'Parish Council of Egerton',
  'Parish Council of Pluckley',
  'Parish Council of Smarden'
]

const wwStats = [
  {
    value: '4',
    label: 'Vehicles in our fleet',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/></svg>`
  },
  {
    value: '3',
    label: 'Wheelchair accessible',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-700)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>`
  },
  {
    value: '5',
    label: 'Villages served',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>`
  },
  {
    value: '100%',
    label: 'Not-for-profit',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  }
]

const forGroups = [
  {
    title: 'Elderly &amp; Older Residents',
    desc: 'For older members of our community who no longer drive or find public transport difficult, our minibuses provide a safe, friendly alternative.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`
  },
  {
    title: 'Disabled People',
    desc: 'Three of our four vehicles are adapted for wheelchair users. We ensure everyone can safely access and travel in our minibuses with comfort and dignity.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>`
  },
  {
    title: 'Groups &amp; Clubs',
    desc: 'Local groups, clubs and organisations can use our vehicles for meetings, outings and activities — a great value alternative to hiring privately.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  },
  {
    title: 'Schools &amp; Young People',
    desc: 'Schools and youth groups can hire our vehicles for educational trips, sports fixtures and activities. All vehicles carry full public liability insurance.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
  }
]

const values = [
  {
    title: 'Safe &amp; Accountable',
    desc: 'All drivers are DBS checked and complete MIDAS training. Every vehicle is regularly inspected to the highest standards.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
  },
  {
    title: 'Accessible to All',
    desc: 'We believe transport should be available to everyone. Our wheelchair-adapted fleet ensures no one in our community is left behind.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>`
  },
  {
    title: 'Affordable &amp; Fair',
    desc: 'Our per-mile rates are designed to cover costs, not make a profit. Membership fees are kept as low as possible to remain accessible to all.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`
  },
  {
    title: 'Community Driven',
    desc: 'We are run by local people for local people. Our volunteer drivers and coordinators are all members of the communities we serve.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`
  }
]
</script>

<style scoped>
.about-intro-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-intro-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 20px;
}

.about-intro-content p {
  font-size: 0.97rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-photo-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.about-photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.about-photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(7,36,20,0.85) 0%, transparent 100%);
  color: rgba(255,255,255,0.85);
  font-size: 0.82rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* WW Section */
.ww-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 64px;
  align-items: start;
}

.ww-grid h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 20px;
}

.ww-grid p {
  font-size: 0.97rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

.supported-by {
  margin-top: 28px;
  padding: 24px;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-300);
}

.supported-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-500) !important;
  margin-bottom: 12px !important;
}

.supported-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.supported-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--gray-700);
}

.ww-stats-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.ww-stat {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.ww-stat-icon {
  width: 48px;
  height: 48px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ww-stat strong {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--green-700);
  line-height: 1;
}

.ww-stat span {
  font-size: 0.78rem;
  color: var(--gray-500);
}

/* For Groups */
.for-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.for-card {
  padding: 32px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-300);
  transition: all var(--transition);
}

.for-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green-400);
}

.for-icon {
  width: 60px;
  height: 60px;
  background: var(--green-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.for-card h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.for-card p {
  font-size: 0.87rem;
  color: var(--gray-500);
  line-height: 1.65;
}

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-item {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
}

.value-icon {
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.value-item h3 {
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 10px;
}

.value-item p {
  font-size: 0.87rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.65;
}

/* CTA */
.about-cta {
  background: linear-gradient(135deg, #072414, #1a6b3a);
  padding: 80px 0;
}

.about-cta-inner {
  text-align: center;
}

.about-cta-inner h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--white);
  margin-bottom: 16px;
}

.about-cta-inner p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.about-cta-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .for-grid, .values-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 860px) {
  .about-intro-grid, .ww-grid { grid-template-columns: 1fr; gap: 40px; }
  .ww-stats-panel { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 580px) {
  .for-grid, .values-grid { grid-template-columns: 1fr; }
  .ww-stats-panel { grid-template-columns: repeat(2, 1fr); }
}
</style>

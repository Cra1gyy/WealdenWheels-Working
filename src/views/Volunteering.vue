<template>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink><span>/</span><span>Volunteering</span>
      </div>
      <h1>Volunteering</h1>
      <p>At the heart of Wealden Wheels are our amazing volunteer drivers who make a real difference to their communities every day of the year.</p>
    </div>
  </section>

  <!-- Intro -->
  <section class="section">
    <div class="container">
      <div class="vol-intro-grid">
        <div class="vol-intro-content">
          <span class="tag">Get Involved</span>
          <h2>Could You Give a Little of Your Time?</h2>
          <p>Quite simply, the project could not operate without our volunteer drivers. If you are a 'people person' and are considering giving some of your time to help others, then we'd love to hear from you.</p>
          <p>There is no prescribed time commitment — we're happy to have as much (or as little) time as you can spare. Many of our volunteers fit driving around their everyday lives, whether that's one morning a week or an occasional day out with a group.</p>
          <div class="vol-intro-quote">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p>"In return, you will meet some lovely people and visit some great places, but you will also feel amazing with a sense of having given something back, knowing that you've created happiness, and improved the lives of people who share your community."</p>
          </div>
          <RouterLink to="/contact" class="btn btn-primary">Express Your Interest</RouterLink>
        </div>
        <div class="vol-intro-visual">
          <div class="vol-photo-wrap">
            <img :src="busPeopleImg" alt="Wealden Wheels vehicles" class="vol-photo" />
            <div class="vol-photo-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Join our volunteer drivers
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Requirements -->
  <section class="section section--light">
    <div class="container">
      <div class="section-header">
        <span class="tag">Requirements</span>
        <h2>What You'll Need to Join Us</h2>
        <p>To join as a volunteer driver, you will need to meet the following criteria.</p>
      </div>
      <div class="requirements-grid">
        <div class="requirement-card" v-for="r in requirements" :key="r.label">
          <div class="requirement-icon" v-html="r.icon"></div>
          <div>
            <strong>{{ r.label }}</strong>
            <p>{{ r.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What You'll Receive -->
  <section class="section">
    <div class="container">
      <div class="rewards-grid">
        <div class="rewards-content">
          <span class="tag">What You'll Receive</span>
          <h2>Training, Support &amp; So Much More</h2>
          <p>You'll receive industry-standard MIDAS (Minibus Driver Awareness Scheme) training and the opportunity to qualify in First Aid — all free of charge. But beyond the practical benefits, you'll gain something far more valuable: the knowledge that you've genuinely made a difference.</p>
          <ul class="rewards-list">
            <li v-for="r in rewards" :key="r">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              {{ r }}
            </li>
          </ul>
        </div>
        <div class="rewards-visual">
          <div class="reward-badge" v-for="b in rewardBadges" :key="b.title">
            <div class="reward-badge-icon" v-html="b.icon"></div>
            <strong>{{ b.title }}</strong>
            <span>{{ b.sub }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="vol-cta">
    <div class="container">
      <div class="vol-cta-inner">
        <h2>Interested in Volunteering?</h2>
        <p>To find out more about becoming a volunteer driver, please contact our Project Co-ordinator by telephone or email. We'd love to hear from you.</p>
        <div class="vol-cta-btns">
          <a href="tel:01233840000" class="btn btn-outline-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            01233 840000
          </a>
          <a href="mailto:wealdenwheels@btconnect.com" class="btn btn-primary" style="background:white;color:var(--green-800);border-color:white;">
            wealdenwheels@btconnect.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fleetImg from '@/images/fleet-2018.jpg'
import busPeopleImg from '@/images/team.jpg'

const requirements = [
  {
    label: 'Age 25 or over',
    desc: 'All volunteer drivers must be at least 25 years of age.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`
  },
  {
    label: 'No more than 3 penalty points',
    desc: 'A clean or near-clean driving record is required to drive our vehicles.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`
  },
  {
    label: 'Category D1 for larger buses',
    desc: 'To drive our larger minibuses, you\'ll need D1 category entitlement on your licence. Smaller vehicles can be driven on a standard car licence.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/></svg>`
  },
  {
    label: 'DBS (Disclosure & Barring Service) check',
    desc: 'All volunteer drivers must complete a DBS check (formerly CRB check) before driving for us. We can help arrange this.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`
  }
]

const rewards = [
  'Industry-standard MIDAS (Minibus Driver Awareness Scheme) training — fully funded',
  'Opportunity to qualify in First Aid',
  'Meet wonderful people from your local community',
  'Visit great places and enjoy interesting days out',
  'The satisfaction of making a genuine difference to people\'s lives',
  'Flexible commitment — drive as much or as little as you like',
  'Be part of a friendly, supportive team'
]

const rewardBadges = [
  {
    title: 'MIDAS Training',
    sub: 'Fully funded',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
  },
  {
    title: 'First Aid',
    sub: 'Training available',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`
  },
  {
    title: 'Flexible Hours',
    sub: 'Your schedule',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
  },
  {
    title: 'Community',
    sub: 'Real impact',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  }
]
</script>

<style scoped>
.vol-intro-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 64px;
  align-items: center;
}

.vol-intro-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 20px;
}

.vol-intro-content > p {
  font-size: 0.97rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

.vol-intro-quote {
  display: flex;
  gap: 14px;
  background: var(--green-50);
  border-left: 4px solid var(--green-600);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 20px 20px 20px 16px;
  margin: 24px 0 32px;
}

.vol-intro-quote svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.vol-intro-quote p {
  font-size: 0.92rem;
  color: var(--gray-600);
  line-height: 1.75;
  font-style: italic;
  margin: 0;
}

.vol-photo-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.vol-photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.vol-photo-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--green-700);
  color: white;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: var(--radius-md);
}

/* Requirements */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.requirement-card {
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 28px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  transition: all var(--transition);
}

.requirement-card:hover {
  border-color: var(--green-400);
  box-shadow: var(--shadow-lg);
}

.requirement-icon {
  width: 52px;
  height: 52px;
  background: var(--green-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.requirement-card strong {
  display: block;
  font-size: 1rem;
  color: var(--dark);
  margin-bottom: 6px;
}

.requirement-card p {
  font-size: 0.87rem;
  color: var(--gray-500);
  line-height: 1.65;
}

/* Rewards */
.rewards-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 72px;
  align-items: center;
}

.rewards-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 16px;
}

.rewards-content > p {
  font-size: 0.97rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 28px;
}

.rewards-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rewards-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.92rem;
  color: var(--gray-700);
  line-height: 1.5;
}

.rewards-list li svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.rewards-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.reward-badge {
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all var(--transition);
}

.reward-badge:hover {
  border-color: var(--green-400);
  box-shadow: var(--shadow-lg);
}

.reward-badge-icon {
  width: 52px;
  height: 52px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.reward-badge strong {
  display: block;
  font-size: 0.9rem;
  color: var(--dark);
  font-family: var(--font-body);
}

.reward-badge span {
  font-size: 0.78rem;
  color: var(--gray-500);
}

/* CTA */
.vol-cta {
  background: linear-gradient(135deg, #072414, #1a6b3a);
  padding: 80px 0;
}

.vol-cta-inner {
  text-align: center;
}

.vol-cta-inner h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: white;
  margin-bottom: 14px;
}

.vol-cta-inner p {
  color: rgba(255,255,255,0.72);
  font-size: 1rem;
  max-width: 520px;
  margin: 0 auto 36px;
  line-height: 1.75;
}

.vol-cta-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 860px) {
  .vol-intro-grid,
  .rewards-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .vol-intro-visual { display: none; }
}

@media (max-width: 640px) {
  .requirements-grid { grid-template-columns: 1fr; }
  .rewards-visual { grid-template-columns: 1fr 1fr; }
}
</style>

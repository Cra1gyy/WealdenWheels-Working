<template>
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink>
        <span>/</span>
        <span>Services</span>
      </div>
      <h1>Our Services</h1>
      <p>Whatever your transport needs, Wealden Wheels has a solution. Explore our full range of coach and minibus hire services.</p>
    </div>
  </section>

  <!-- Services Full List -->
  <section class="section">
    <div class="container">
      <div class="services-list">
        <div class="service-item" v-for="(svc, i) in services" :key="svc.title" :class="{ 'service-item--reverse': i % 2 !== 0 }">
          <div class="service-item-visual" :style="{ background: svc.gradient }">
            <div class="service-item-icon" v-html="svc.icon"></div>
          </div>
          <div class="service-item-content">
            <span class="tag">{{ svc.tag }}</span>
            <h2>{{ svc.title }}</h2>
            <p>{{ svc.desc }}</p>
            <ul class="service-item-features">
              <li v-for="f in svc.features" :key="f">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                {{ f }}
              </li>
            </ul>
            <RouterLink to="/contact" class="btn btn-primary">Enquire Now</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--light">
    <div class="container">
      <div class="services-cta-box">
        <h2>Not Sure Which Service You Need?</h2>
        <p>Our friendly team is happy to help you find the right vehicle and service for your journey. Just get in touch and we'll do the rest.</p>
        <div class="services-cta-actions">
          <a href="tel:01892000000" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call Us: 01892 000000
          </a>
          <RouterLink to="/contact" class="btn btn-outline-green">Send an Enquiry</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    tag: 'Travel',
    title: 'Airport Transfers',
    desc: 'Start and end your holiday stress-free. We provide reliable door-to-door transfers to all major UK airports including Gatwick, Heathrow, Stansted, Luton and Southampton. Our drivers monitor your flight so you\'re never left waiting.',
    gradient: 'linear-gradient(135deg, #0f4c26, #1a6b3a)',
    features: [
      'All major UK airports covered',
      'Flight monitoring included',
      'Early morning & late night available',
      'Fixed pricing, no meter surprises',
      'Meet & greet service available'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`
  },
  {
    tag: 'Education',
    title: 'School & College Trips',
    desc: 'We understand that when it comes to transporting young people, safety is everything. Our DBS-checked drivers and well-maintained vehicles make us the trusted choice for schools and colleges across East Sussex for educational excursions, sports fixtures and residential trips.',
    gradient: 'linear-gradient(135deg, #072414, #0f4c26)',
    features: [
      'DBS-checked drivers',
      'Full public liability insurance',
      'Risk assessments provided on request',
      'Flexible pick-up and drop-off times',
      'Experienced with school groups'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
  },
  {
    tag: 'Business',
    title: 'Corporate Travel',
    desc: 'Keep your team moving with reliable, professional corporate transport. Whether it\'s a company conference, client entertainment, a product launch or an away-day, we provide a punctual and polished service that reflects well on your organisation.',
    gradient: 'linear-gradient(135deg, #1a6b3a, #237a44)',
    features: [
      'Account billing available',
      'Smart, professional drivers',
      'Executive coach options',
      'Conference and event specialists',
      'Corporate invoicing provided'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.12 15.88 0 13.3 0c-1.3 0-2.4.52-3.27 1.32L12 3.4l1.97-2.08C14.46 1.12 14.87 1 15.3 1c1.47 0 2.7 1.23 2.7 2.7 0 1.32-.67 2.42-1.68 3.08l-.27.22H7.95l-.27-.22C6.67 6.12 6 5.02 6 3.7 6 2.23 7.23 1 8.7 1c.43 0 .84.12 1.33.32L12 3.4l1.97-2.08C12.97.53 12.01 0 10.7 0 8.12 0 6 2.12 6 4.7c0 .44.11.86.18 1.3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h16v12z"/></svg>`
  },
  {
    tag: 'Special Occasions',
    title: 'Wedding Transport',
    desc: 'Your wedding day should be perfect in every detail. We provide beautifully presented coaches and minibuses for bridal parties, wedding guests and evening transfers. Arrive in comfort and style, and leave the logistics to us.',
    gradient: 'linear-gradient(135deg, #072414, #1a6b3a)',
    features: [
      'Beautifully presented vehicles',
      'Multiple pick-up points covered',
      'Fully flexible scheduling',
      'Coordination with wedding planners',
      'Evening transfers available'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  },
  {
    tag: 'Leisure',
    title: 'Day Trips & Tours',
    desc: 'From a trip to a National Trust property to a West End show or a seaside excursion, we can take your group wherever the day leads. We offer both driver-only hire and fully guided tour packages, all at competitive prices.',
    gradient: 'linear-gradient(135deg, #0f4c26, #237a44)',
    features: [
      'Driver-only or fully guided options',
      'UK-wide destinations',
      'Theatre and entertainment transfers',
      'Shopping and leisure trips',
      'Flexible group sizes'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
  },
  {
    tag: 'Sport',
    title: 'Sports Events & Team Travel',
    desc: 'Whether you\'re a local football club heading to an away fixture or a group of fans travelling to a major sporting event, we can handle the transport so you can focus on the game. We regularly work with sports clubs, federations and supporters\' groups across the South East.',
    gradient: 'linear-gradient(135deg, #1a6b3a, #0f4c26)',
    features: [
      'Sports clubs and fan groups',
      'Stadium and event transfers',
      'Away fixture travel',
      'Equipment storage available',
      'Regular and one-off bookings'
    ],
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-5c-.83 0-1.5-.67-1.5-1.5S8.67 5.5 9.5 5.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
  }
]
</script>

<style scoped>
.services-list {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.service-item {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: center;
}

.service-item--reverse {
  grid-template-columns: 1.4fr 1fr;
}

.service-item--reverse .service-item-visual {
  order: 2;
}

.service-item--reverse .service-item-content {
  order: 1;
}

.service-item-visual {
  border-radius: var(--radius-lg);
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-item-icon {
  opacity: 1;
}

.service-item-content h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin-bottom: 16px;
  color: var(--dark);
}

.service-item-content p {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.75;
  margin-bottom: 28px;
}

.service-item-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.service-item-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  color: var(--gray-700);
}

/* CTA Box */
.services-cta-box {
  background: var(--white);
  border: 2px solid var(--green-100);
  border-radius: var(--radius-lg);
  padding: 56px;
  text-align: center;
  box-shadow: var(--shadow-md);
}

.services-cta-box h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin-bottom: 12px;
}

.services-cta-box p {
  color: var(--gray-500);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.services-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 860px) {
  .service-item,
  .service-item--reverse {
    grid-template-columns: 1fr;
  }

  .service-item--reverse .service-item-visual {
    order: 0;
  }

  .service-item--reverse .service-item-content {
    order: 0;
  }

  .service-item-visual {
    height: 240px;
  }

  .services-cta-box {
    padding: 36px 24px;
  }
}
</style>

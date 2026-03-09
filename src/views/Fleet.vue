<template>
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <RouterLink to="/">Home</RouterLink>
        <span>/</span>
        <span>Our Fleet</span>
      </div>
      <h1>Our Fleet</h1>
      <p>We operate four vehicles of different sizes to cater for different requirements. Three have been specially modified for wheelchair users and disabled access.</p>
    </div>
  </section>

  <!-- Fleet intro note -->
  <section class="section">
    <div class="container">
      <div class="fleet-intro-banner">
        <div class="fleet-intro-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>
        <p>All our vehicles carry <strong>'Blue Badges'</strong> to aid in parking when we are carrying disabled people. To suit our friendly nature, we've even named our buses!</p>
      </div>

      <div class="fleet-grid">
        <div class="vehicle-card" v-for="v in vehicles" :key="v.name">

          <!-- Carousel -->
          <VehicleCarousel :slides="v.slides" :vehicleIcon="busIconSvg">
            <template #badge>
              <div class="vehicle-seats-badge">{{ v.seats }}</div>
            </template>
          </VehicleCarousel>

          <div class="vehicle-card-body">
            <div class="vehicle-name-row">
              <h3>{{ v.name }}</h3>
              <span v-if="v.nickname" class="vehicle-nickname">"{{ v.nickname }}"</span>
            </div>
            <p class="vehicle-desc">{{ v.desc }}</p>

            <div class="vehicle-highlights">
              <span v-for="h in v.highlights" :key="h" class="highlight-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                {{ h }}
              </span>
            </div>

            <RouterLink to="/contact" class="btn btn-outline-green">Enquire About This Vehicle</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Standards Section -->
  <section class="section section--light">
    <div class="container">
      <div class="standards-grid">
        <div class="standards-text">
          <span class="tag">Our Standards</span>
          <h2>Every Vehicle, Every Journey</h2>
          <p>We take great pride in the quality of our fleet. Every vehicle undergoes regular safety checks and is maintained to DVSA standards. Your safety and comfort is our number one priority.</p>
          <ul class="standards-list">
            <li v-for="s in standards" :key="s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              {{ s }}
            </li>
          </ul>
          <RouterLink to="/hire" class="btn btn-primary">Hire a Vehicle</RouterLink>
        </div>
        <div class="standards-visual">
          <div class="standards-badge-grid">
            <div class="standards-badge" v-for="b in badges" :key="b.title">
              <div class="badge-icon" v-html="b.icon"></div>
              <strong>{{ b.title }}</strong>
              <span>{{ b.sub }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VehicleCarousel from '../components/VehicleCarousel.vue'

const busIconSvg = `<svg width="72" height="72" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)"><path d="M17 5H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h5.5c0 1.66 1.34 3 3 3s3-1.34 3-3H23v-5l-6-8zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg>`

// Slides use src: null as placeholders — replace with real image paths when available
// e.g. { src: '/src/images/mollie-1.jpg', alt: 'Mollie exterior' }
const vehicles = [
  {
    name: 'Mollie',
    nickname: 'Mollie',
    seats: '13 passengers + driver',
    desc: 'A custom-built Renault with room for 13 passengers plus the driver. She has a tailgate lift for less able passengers and to provide wheelchair access. Removable seats allow us to carry up to two wheelchair-bound passengers — Mollie can carry 9 passengers and one wheelchair user, or 5 passengers and two wheelchair users.',
    highlights: ['Tailgate lift', 'Up to 2 wheelchair spaces', 'Removable seats', 'Blue Badge holder', 'Wheelchair accessible'],
    slides: [
      { src: null, alt: 'Mollie exterior', label: 'Exterior view', bg: 'linear-gradient(135deg, #0f4c26, #1a6b3a)' },
      { src: null, alt: 'Mollie interior', label: 'Interior view', bg: 'linear-gradient(135deg, #072414, #0f4c26)' },
      { src: null, alt: 'Mollie tailgate lift', label: 'Tailgate lift', bg: 'linear-gradient(135deg, #1a6b3a, #237a44)' }
    ]
  },
  {
    name: 'Marvin',
    nickname: 'Marvin',
    seats: '4 seats + driver',
    desc: 'A four seat (plus driver) VW Caddy that can carry one wheelchair user or most mobility scooters. Wealden Wheels offers the option to hire the pictured mobility scooter with or without a vehicle.',
    highlights: ['Wheelchair accessible', 'Mobility scooter compatible', 'Scooter hire available', 'Blue Badge holder', 'Compact & manoeuvrable'],
    slides: [
      { src: null, alt: 'Marvin exterior', label: 'Exterior view', bg: 'linear-gradient(135deg, #237a44, #2d9b56)' },
      { src: null, alt: 'Marvin wheelchair access', label: 'Wheelchair access', bg: 'linear-gradient(135deg, #1a6b3a, #237a44)' },
      { src: null, alt: 'Marvin mobility scooter', label: 'With mobility scooter', bg: 'linear-gradient(135deg, #0f4c26, #1a6b3a)' }
    ]
  },
  {
    name: 'Large Minibus',
    nickname: null,
    seats: '16 passengers + driver',
    desc: 'Our larger minibus is ideal for bigger group outings and trips. Spacious and comfortable, it can accommodate a wide range of group sizes and is regularly used for day trips, club outings and community events.',
    highlights: ['16 passenger capacity', 'Blue Badge holder', 'Ideal for group outings', 'Wheelchair accessible'],
    slides: [
      { src: null, alt: 'Large minibus exterior', label: 'Exterior view', bg: 'linear-gradient(135deg, #072414, #1a6b3a)' },
      { src: null, alt: 'Large minibus interior', label: 'Interior view', bg: 'linear-gradient(135deg, #0f4c26, #237a44)' }
    ]
  },
  {
    name: '5-Seat Plus Vehicle',
    nickname: null,
    seats: '5 seats + wheelchair/scooter',
    desc: 'Our five-seat plus one wheelchair/mobility scooter vehicle. Specially adapted to ensure safe and comfortable travel for those who use a wheelchair or mobility scooter, without needing to transfer from their chair.',
    highlights: ['5 passenger seats', 'Wheelchair/scooter space', 'Hydraulically-operated lift', 'Stays in wheelchair', 'Blue Badge holder'],
    slides: [
      { src: null, alt: '5-seat vehicle exterior', label: 'Exterior view', bg: 'linear-gradient(135deg, #1a6b3a, #0f4c26)' },
      { src: null, alt: '5-seat vehicle lift', label: 'Access lift', bg: 'linear-gradient(135deg, #237a44, #0f4c26)' }
    ]
  }
]

const standards = [
  'All vehicles regularly serviced and safety checked',
  'DVSA operator compliance maintained',
  'Full public liability and passenger insurance',
  'Blue Badges carried on all vehicles',
  'Wheelchair accessible vehicles available',
  'DBS-checked volunteer drivers'
]

const badges = [
  {
    title: 'DVSA Compliant',
    sub: 'All vehicles',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`
  },
  {
    title: 'Fully Insured',
    sub: 'Every journey',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`
  },
  {
    title: 'DBS Checked',
    sub: 'All drivers',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`
  },
  {
    title: 'Blue Badge',
    sub: 'All vehicles',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
  }
]
</script>

<style scoped>
/* Intro banner */
.fleet-intro-banner {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--green-50);
  border: 1px solid var(--green-100);
  border-radius: var(--radius-md);
  padding: 18px 24px;
  margin-bottom: 48px;
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.6;
}

.fleet-intro-icon {
  width: 36px;
  height: 36px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Fleet Grid */
.fleet-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.vehicle-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--gray-300);
  transition: all var(--transition);
  background: var(--white);
}

.vehicle-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--green-400);
}

/* Badge on carousel */
.vehicle-seats-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 4px 12px;
  border-radius: 100px;
  z-index: 5;
  backdrop-filter: blur(4px);
}

.vehicle-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.vehicle-name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.vehicle-name-row h3 {
  font-size: 1.3rem;
  color: var(--dark);
}

.vehicle-nickname {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--green-700);
  font-style: italic;
}

.vehicle-desc {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.7;
}

.vehicle-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.highlight-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--green-50);
  border: 1px solid var(--green-100);
  color: var(--green-800);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
}

/* Standards Section */
.standards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.standards-text h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin-bottom: 16px;
}

.standards-text p {
  color: var(--gray-500);
  line-height: 1.75;
  margin-bottom: 28px;
  font-size: 1rem;
}

.standards-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}

.standards-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  color: var(--gray-700);
}

.standards-badge-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.standards-badge {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  text-align: center;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: box-shadow var(--transition);
}

.standards-badge:hover {
  box-shadow: var(--shadow-lg);
}

.badge-icon {
  width: 56px;
  height: 56px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.standards-badge strong {
  display: block;
  font-size: 0.95rem;
  color: var(--dark);
  font-family: var(--font-body);
}

.standards-badge span {
  font-size: 0.8rem;
  color: var(--gray-500);
}

@media (max-width: 860px) {
  .fleet-grid {
    grid-template-columns: 1fr;
  }
  .standards-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>

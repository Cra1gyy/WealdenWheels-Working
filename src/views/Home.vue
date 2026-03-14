<template>
  <!-- ─── Hero ─── -->
  <section class="hero">
    <div class="hero-banner-bg"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <span class="hero-tag">Pluckley &amp; Surrounding Villages, Kent</span>
        <h1>Your Local Community Transport Provider</h1>
        <p>Wealden Wheels is a not-for-profit community transport organisation providing safe, affordable and flexible minibus hire to members across Pluckley and surrounding villages.</p>
        <div class="hero-actions">
          <RouterLink to="/membership" class="btn btn-primary">Become a Member</RouterLink>
          <RouterLink to="/hire" class="btn btn-outline-white">Hire a Minibus</RouterLink>
        </div>
        <div class="hero-accessibility">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95zm-9 7c-1.1 0-2-.9-2-2v-5H6l2.07 6.97C8.38 21.12 8.94 22 10 22s2-.9 2-2h-2z"/></svg>
          3 wheelchair accessible vehicles in our fleet
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-indicator">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </section>

  <!-- ─── Stats Bar ─── -->
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── What We Offer ─── -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tag">How It Works</span>
        <h2>Flexible Transport for Our Community</h2>
        <p>Members can hire our minibuses in two ways — drive yourself or request one of our friendly volunteer drivers.</p>
      </div>
      <div class="offer-grid">
        <div class="offer-card offer-card--featured">
          <div class="offer-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5zm-12-1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          </div>
          <h3>Self-Drive Hire</h3>
          <p>Members with a suitable driving licence can hire one of our vehicles and drive themselves. A cost-effective option for those who qualify.</p>
          <div class="offer-rate">From <strong>£1.30</strong> <span>per mile</span></div>
          <ul class="offer-features">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Must be a current member</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Minimum age 25</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Max 3 penalty points on licence</li>
          </ul>
          <RouterLink to="/hire" class="btn btn-primary">Find Out More</RouterLink>
        </div>

        <div class="offer-card offer-card--featured">
          <div class="offer-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <h3>Hire with a Volunteer Driver</h3>
          <p>Don't want to drive? One of our friendly, DBS-checked volunteer drivers will take the wheel, so you can sit back and enjoy the journey.</p>
          <div class="offer-rate">From <strong>£1.90</strong> <span>per mile</span></div>
          <ul class="offer-features">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Must be a current member</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> DBS-checked, trained drivers</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green-600)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Fuel, insurance &amp; breakdown covered</li>
          </ul>
          <RouterLink to="/hire" class="btn btn-primary">Find Out More</RouterLink>
        </div>

        <div class="offer-card offer-card--membership">
          <div class="offer-icon offer-icon--white">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
          </div>
          <h3>Become a Member</h3>
          <p>Membership is open to any group, club, school, care home or individual in or around our supported villages. Annual subscription starts from just £10.</p>
          <div class="offer-rate"><strong>£10</strong> <span>per year (local parishes)</span></div>
          <ul class="offer-features offer-features--white">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Access to all our vehicles</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Simple, affordable annual fee</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Groups, clubs &amp; individuals welcome</li>
          </ul>
          <RouterLink to="/membership" class="btn btn-outline-white">Join Wealden Wheels</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── Photo Gallery ─── -->
  <section class="section section--light gallery-section">
    <div class="container">
      <div class="section-header">
        <span class="tag">Our Community</span>
        <h2>Out &amp; About with Wealden Wheels</h2>
        <p>From day trips to hospital runs, school outings to shopping trips — we help our community get where they need to go.</p>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item gallery-item--large" @click="openLightbox(0)">
          <img :src="busPeopleImg" alt="Wealden Wheels vehicles at base" />
          <div class="gallery-caption">Our Full Fleet at Pevington Farm</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(1)">
          <img :src="wheelchairInBusImg" alt="Accessible minibus" />
          <div class="gallery-caption">Wheelchair Accessible Vehicles</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(2)">
          <img :src="team" alt="Accessible minibus" />
          <div class="gallery-caption">Wheelchair Accessible Vehicles</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(3)">
          <img :src="electricBusImg" alt="Community trip" />
          <div class="gallery-caption">Community Day Trips</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(4)">
          <img :src="liftUser" alt="Village transport" />
          <div class="gallery-caption">Serving Local Villages</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item gallery-item--large" @click="openLightbox(5)">
          <img :src="busTripImg" alt="Village transport" />
          <div class="gallery-caption">Serving Local Villages</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(6)">
          <img :src="marvinBackImg" alt="Wealden Wheels team" />
          <div class="gallery-caption">Volunteer Drivers &amp; Our Team</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item" @click="openLightbox(7)">
          <img :src="megFrontImg" alt="Wealden Wheels team" />
          <div class="gallery-caption">Volunteer Drivers &amp; Our Team</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
        <div class="gallery-item gallery-item--large" @click="openLightbox(8)">
          <img :src="wheelchairLiftImg" alt="Wealden Wheels team" />
          <div class="gallery-caption">Volunteer Drivers &amp; Our Team</div>
          <div class="gallery-zoom-hint"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></div>
        </div>
      </div>
      <div class="gallery-cta">
        <RouterLink to="/fleet" class="btn btn-outline-green">View Our Fleet</RouterLink>
      </div>
    </div>
  </section>

  <!-- ─── Wheelchair Accessibility ─── -->
  <section class="section">
    <div class="container">
      <div class="access-grid">
        <div class="access-visual">
          <div class="access-photo-wrap">
            <img :src="wheelchairLiftImg" alt="Wealden Wheels accessible vehicles" class="access-photo" />
            <div class="access-photo-overlay">
              <div class="access-overlay-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>
                <span>3 Accessible<br>Vehicles</span>
              </div>
            </div>
          </div>
          <div class="access-stat-row">
            <div class="access-stat">
              <strong>3</strong><span>Adapted vehicles</span>
            </div>
            <div class="access-stat">
              <strong>2</strong><span>Hydraulic lifts</span>
            </div>
            <div class="access-stat">
              <strong>Blue</strong><span>Badge holders</span>
            </div>
          </div>
        </div>
        <div class="access-content">
          <span class="tag">Accessibility</span>
          <h2>Fully Accessible Transport for Everyone</h2>
          <p>Three of our four vehicles have been specially modified for wheelchair users and those with limited mobility. We believe everyone deserves access to affordable community transport.</p>
          <ul class="access-features">
            <li v-for="f in accessFeatures" :key="f">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              {{ f }}
            </li>
          </ul>
          <p class="access-note">All our vehicles carry 'Blue Badges' to aid parking when transporting disabled passengers.</p>
          <RouterLink to="/fleet" class="btn btn-outline-green">View Our Fleet</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── Areas We Serve ─── -->
  <section class="section section--dark">
    <div class="container">
      <div class="section-header">
        <span class="tag">Coverage Area</span>
        <h2>Serving Our Local Villages</h2>
        <p>We currently operate in and around the following parishes in Kent. Members from further afield are also welcome to join — please get in touch to discuss.</p>
      </div>
      <div class="villages-grid">
        <div class="village-card" v-for="v in villages" :key="v.name">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green-400)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <strong>{{ v.name }}</strong>
          <span>{{ v.county }}</span>
        </div>
      </div>
      <p class="villages-note">Members from Charing, Chilham, Egerton, Pluckley and Smarden are charged £1.30/mile for self-drive. Members from other areas are charged £1.50/mile.</p>
    </div>
  </section>

  <!-- ─── Who Can Join ─── -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tag">Membership</span>
        <h2>Who Is Wealden Wheels For?</h2>
        <p>Membership is open to almost anyone. Whether you're a local group, a family, or an organisation — if you need community transport, we're here for you.</p>
      </div>
      <div class="members-grid">
        <div class="member-type" v-for="m in memberTypes" :key="m.title">
          <div class="member-icon" v-html="m.icon"></div>
          <h3>{{ m.title }}</h3>
          <p>{{ m.desc }}</p>
        </div>
      </div>
      <div class="section-cta" style="margin-top: 48px;">
        <RouterLink to="/membership" class="btn btn-primary">Find Out How to Join</RouterLink>
      </div>
    </div>
  </section>

  <!-- ─── Lightbox ─── -->
  <Teleport to="body">
    <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox" @keydown="handleKey">
      <button class="lightbox-close" @click="closeLightbox" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <button class="lightbox-nav lightbox-nav--prev" @click="prevImage" aria-label="Previous image">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="lightbox-content">
        <img :src="galleryImages[lightboxIndex].src" :alt="galleryImages[lightboxIndex].alt" class="lightbox-img" />
        <div class="lightbox-caption">
          <span class="lightbox-caption-text">{{ galleryImages[lightboxIndex].caption }}</span>
          <span class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ galleryImages.length }}</span>
        </div>
      </div>
      <button class="lightbox-nav lightbox-nav--next" @click="nextImage" aria-label="Next image">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="lightbox-thumbnails">
        <button
          v-for="(img, i) in galleryImages"
          :key="i"
          class="lightbox-thumb"
          :class="{ 'lightbox-thumb--active': i === lightboxIndex }"
          @click="lightboxIndex = i"
        >
          <img :src="img.src" :alt="img.alt" />
        </button>
      </div>
    </div>
  </Teleport>

  <!-- ─── CTA Banner ─── -->
  <section class="cta-banner">
    <div class="container">
      <div class="cta-inner">
        <div class="cta-text">
          <h2>Ready to Get Started?</h2>
          <p>Call us or get in touch today to find out more about membership or to book a vehicle.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:01233840000" class="btn btn-outline-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            01233 840000
          </a>
          <RouterLink to="/contact" class="btn btn-primary" style="background:white;color:var(--green-800);border-color:white;">
            Make an Enquiry
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import fleetImg from '@/images/fleet-2018.jpg'
import busTripImg from '@/images/bus-on-trip.jpg'
import busPeopleImg from '@/images/bus-people.jpg'
import electricBusImg from '@/images/electric-bus.jpg'
import marvinBackImg from '@/images/marvin-back.jpg'
import megFrontImg from '@/images/meg-front.jpg'
import wheelchairLiftImg from '@/images/wheelchair-lift.jpg'
import wheelchairInBusImg from '@/images/wheelchair-inBus.jpg'
import team from '@/images/team.jpg'
import liftUser from '@/images/lift-used.jpg'

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const galleryImages = [
  { src: busPeopleImg, alt: 'Wealden Wheels vehicles at base', caption: 'Our Full Fleet at Pevington Farm' },
  { src: wheelchairInBusImg, alt: 'Accessible minibus', caption: 'Wheelchair Accessible Vehicles' },
  { src: team, alt: 'Wealden Wheels team', caption: 'Our Team' },
  { src: electricBusImg, alt: 'Community trip', caption: 'Community Day Trips' },
  { src: liftUser, alt: 'Village transport', caption: 'Serving Local Villages' },
  { src: busTripImg, alt: 'Bus on trip', caption: 'Serving Local Villages' },
  { src: marvinBackImg, alt: 'Wealden Wheels team', caption: 'Volunteer Drivers & Our Team' },
  { src: megFrontImg, alt: 'Wealden Wheels team', caption: 'Volunteer Drivers & Our Team' },
  { src: wheelchairLiftImg, alt: 'Wheelchair lift', caption: 'Volunteer Drivers & Our Team' },
]

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + galleryImages.length) % galleryImages.length
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.length
}

function handleKey(e) {
  if (e.key === 'ArrowLeft') prevImage()
  else if (e.key === 'ArrowRight') nextImage()
  else if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))

const stats = [
  { value: '4',    label: 'Vehicles Available' },
  { value: '3',    label: 'Wheelchair Accessible' },
  { value: '5',    label: 'Villages Served' },
  { value: 'Not-for-profit', label: 'Community Organisation' }
]

const accessFeatures = [
  'Tailgate lift on our 13-seat Renault (Mollie)',
  'Hydraulic lifts on two vehicles — suitable for the heaviest powered wheelchairs',
  'Removable seats to accommodate up to 2 wheelchair users',
  'Step-access vehicles for ambulant passengers',
  'Blue Badge carried on all vehicles for accessible parking'
]

const villages = [
  { name: 'Pluckley', county: 'Kent' },
  { name: 'Charing', county: 'Kent' },
  { name: 'Chilham', county: 'Kent' },
  { name: 'Egerton', county: 'Kent' },
  { name: 'Smarden', county: 'Kent' }
]

const memberTypes = [
  {
    title: 'Charities &amp; Voluntary Groups',
    desc: 'Local charities and not-for-profit groups can benefit from affordable community transport for their clients and activities.',
    icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  },
  {
    title: 'Schools &amp; Colleges',
    desc: 'Educational trips, sports fixtures and residential visits — we provide safe and reliable transport for young people.',
    icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
  },
  {
    title: 'Care Homes &amp; Health Groups',
    desc: 'Our wheelchair accessible vehicles are particularly well-suited to care homes, day centres and health-related groups.',
    icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="var(--green-700)"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45h-.01c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.15 3.18 1.94 5 1.95z"/></svg>`
  },
  {
    title: 'Families &amp; Individuals',
    desc: 'Individual families can also become members and hire a vehicle for days out, appointments or group travel needs.',
    icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="var(--green-700)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`
  }
]
</script>

<style scoped>
/* ─── Hero ─── */
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-banner-bg {
  position: absolute;
  inset: 0;
  background: url('@/images/fleet-2018.jpg') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  /* background: linear-gradient(135deg, rgba(7,36,20,0.92) 0%, rgba(26,107,58,0.85) 60%, rgba(15,76,38,0.88) 100%); */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: calc(var(--navbar-height) + 48px);
  padding-bottom: 96px;
}

.hero-text {
  max-width: 680px;
}

.hero-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: black;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 18px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.hero-text h1 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  color: var(--black);
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-text p {
  font-size: 1.1rem;
  color: var(--black);
  max-width: 520px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.hero-actions .btn {
  padding: 15px 32px;
  font-size: 1rem;
}

.hero-accessibility {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(0,0,0,0.7);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 8px 16px;
  border-radius: 100px;
}


.hero-scroll {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* ─── Stats Bar ─── */
.stats-bar {
  background: var(--green-800);
  padding: 40px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.stat-label {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
  font-weight: 500;
}

/* ─── Offer Cards ─── */
.offer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

.offer-card {
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--gray-300);
  background: var(--white);
  transition: all var(--transition);
}

.offer-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.offer-card--membership {
  background: linear-gradient(135deg, var(--green-800), var(--green-700));
  border-color: transparent;
  color: white;
}

.offer-icon {
  width: 68px;
  height: 68px;
  background: var(--green-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.offer-icon--white {
  background: rgba(255,255,255,0.15);
}

.offer-card h3 {
  font-size: 1.2rem;
  color: var(--dark);
}

.offer-card--membership h3 {
  color: white;
}

.offer-card p {
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.65;
  flex: 1;
}

.offer-card--membership p {
  color: rgba(255,255,255,0.8);
}

.offer-rate {
  font-size: 1rem;
  color: var(--gray-500);
  padding: 12px 16px;
  background: var(--green-50);
  border-radius: var(--radius-md);
}

.offer-card--membership .offer-rate {
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
}

.offer-rate strong {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--green-700);
  margin: 0 2px;
}

.offer-card--membership .offer-rate strong {
  color: white;
}

.offer-rate span {
  font-size: 0.82rem;
}

.offer-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.offer-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--gray-700);
}

.offer-features--white li {
  color: rgba(255,255,255,0.85);
}

/* ─── Photo Gallery ─── */
.gallery-section {}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 260px 220px;
  gap: 16px;
  margin-bottom: 32px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item--large {
  grid-column: span 2;
  grid-row: span 1;
}

.gallery-item--wide {
  grid-column: span 2;
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 18px 14px;
  background: linear-gradient(to top, rgba(7,36,20,0.85) 0%, transparent 100%);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.gallery-cta {
  text-align: center;
}

/* ─── Accessibility ─── */
.access-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 72px;
  align-items: center;
}

.access-photo-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  margin-bottom: 20px;
}

.access-photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.access-photo-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  background: linear-gradient(to top, rgba(7,36,20,0.7) 0%, transparent 60%);
}

.access-overlay-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--green-700);
  color: white;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.3;
}

.access-stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.access-stat {
  text-align: center;
  padding: 16px 8px;
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
}

.access-stat strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--green-700);
}

.access-stat span {
  font-size: 0.75rem;
  color: var(--gray-500);
}

.access-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 16px;
}

.access-content > p {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.75;
  margin-bottom: 24px;
}

.access-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.access-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--gray-700);
}

.access-note {
  font-size: 0.85rem;
  color: var(--gray-500);
  font-style: italic;
  margin-bottom: 28px;
}

/* ─── Villages ─── */
.villages-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.village-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: background var(--transition);
}

.village-card:hover {
  background: rgba(255,255,255,0.13);
}

.village-card strong {
  display: block;
  color: var(--white);
  font-size: 1rem;
  font-family: var(--font-heading);
}

.village-card span {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
}

.villages-note {
  text-align: center;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.55);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.65;
}

/* ─── Member Types ─── */
.members-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.member-type {
  text-align: center;
  padding: 36px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-300);
  transition: all var(--transition);
}

.member-type:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green-400);
}

.member-icon {
  width: 64px;
  height: 64px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.member-type h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.member-type p {
  font-size: 0.85rem;
  color: var(--gray-500);
  line-height: 1.65;
}

.section-cta {
  text-align: center;
}

/* ─── CTA Banner ─── */
.cta-banner {
  background: linear-gradient(135deg, #072414 0%, #1a6b3a 100%);
  padding: 72px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.cta-text h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--white);
  margin-bottom: 8px;
}

.cta-text p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
}

.cta-actions {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .members-grid { grid-template-columns: repeat(2, 1fr); }
  .villages-grid { grid-template-columns: repeat(3, 1fr); }
  .gallery-grid { grid-template-rows: 220px 180px; }
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .offer-grid { grid-template-columns: 1fr; }
  .access-grid { grid-template-columns: 1fr; gap: 40px; }
  .cta-inner { flex-direction: column; text-align: center; }
  .cta-actions { justify-content: center; flex-wrap: wrap; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .gallery-item { height: 160px; }
  .gallery-item--large { grid-column: span 2; height: 200px; }
  .gallery-item--wide { grid-column: span 2; height: 160px; }
}

@media (max-width: 580px) {
  .members-grid { grid-template-columns: 1fr; }
  .villages-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-actions { flex-direction: column; }
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-item--large, .gallery-item--wide { grid-column: span 1; }
}

/* ─── Gallery zoom hint ─── */
.gallery-zoom-hint {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(7,36,20,0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.gallery-item:hover .gallery-zoom-hint {
  opacity: 1;
}

/* ─── Lightbox ─── */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.93);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.lightbox-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 1;
}

.lightbox-close:hover {
  background: rgba(255,255,255,0.25);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 1;
}

.lightbox-nav:hover {
  background: rgba(255,255,255,0.25);
}

.lightbox-nav--prev { left: 16px; }
.lightbox-nav--next { right: 16px; }

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: min(90vw, 1000px);
  width: 100%;
}

.lightbox-img {
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
}

.lightbox-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
  padding: 0 4px;
}

.lightbox-caption-text {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
}

.lightbox-counter {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.45);
  flex-shrink: 0;
}

.lightbox-thumbnails {
  display: flex;
  gap: 8px;
  margin-top: 20px;
  overflow-x: auto;
  max-width: min(90vw, 1000px);
  padding-bottom: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.2) transparent;
}

.lightbox-thumb {
  flex-shrink: 0;
  width: 64px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  background: none;
  opacity: 0.5;
  transition: opacity 0.2s, border-color 0.2s;
}

.lightbox-thumb:hover {
  opacity: 0.8;
}

.lightbox-thumb--active {
  border-color: var(--green-400);
  opacity: 1;
}

.lightbox-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 600px) {
  .lightbox-nav { width: 40px; height: 40px; }
  .lightbox-nav--prev { left: 4px; }
  .lightbox-nav--next { right: 4px; }
  .lightbox-thumb { width: 48px; height: 36px; }
}
</style>

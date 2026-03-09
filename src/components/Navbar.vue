<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--solid': !isHome }">
    <div class="container">
      <div class="navbar-inner">

        <!-- Logo -->
        <RouterLink to="/" class="logo" @click="closeMenu">
          <div class="logo-icon">
            <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-name">Wealden Wheels</span>
            <span class="logo-tagline">Community Transport</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="nav-links">
          <RouterLink to="/" exact-active-class="active">Home</RouterLink>
          <RouterLink to="/about" active-class="active">About</RouterLink>
          <RouterLink to="/hire" active-class="active">Hire a Minibus</RouterLink>
          <RouterLink to="/membership" active-class="active">Membership</RouterLink>
          <RouterLink to="/volunteering" active-class="active">Volunteering</RouterLink>
          <RouterLink to="/fleet" active-class="active">Our Fleet</RouterLink>
          <RouterLink to="/contact" active-class="active">Contact</RouterLink>
        </nav>

        <!-- Right Actions -->
        <div class="nav-actions">
          <a href="tel:01233840000" class="nav-phone">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            01233 840000
          </a>
          <RouterLink to="/membership" class="btn btn-primary">Join Us</RouterLink>
          <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <nav class="mobile-nav-links">
        <RouterLink to="/" exact-active-class="active" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/about" active-class="active" @click="closeMenu">About</RouterLink>
        <RouterLink to="/hire" active-class="active" @click="closeMenu">Hire a Minibus</RouterLink>
        <RouterLink to="/membership" active-class="active" @click="closeMenu">Membership</RouterLink>
        <RouterLink to="/volunteering" active-class="active" @click="closeMenu">Volunteering</RouterLink>
        <RouterLink to="/fleet" active-class="active" @click="closeMenu">Our Fleet</RouterLink>
        <RouterLink to="/contact" active-class="active" @click="closeMenu">Contact</RouterLink>
      </nav>
      <div class="mobile-menu-footer">
        <a href="tel:01233840000" class="mobile-phone">01233 840000</a>
        <RouterLink to="/membership" class="btn btn-primary" @click="closeMenu">Join Us</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const isHome = computed(() => route.path === '/')

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

watch(route, () => {
  menuOpen.value = false
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  transition: background var(--transition), box-shadow var(--transition);
  background: transparent;
}

.navbar--scrolled,
.navbar--solid {
  background: var(--white);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
  gap: 20px;
}

/* ─── Logo ─── */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-icon {
  color: var(--white);
  transition: color var(--transition);
}

.navbar--scrolled .logo-icon,
.navbar--solid .logo-icon {
  color: var(--green-700);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--white);
  transition: color var(--transition);
}

.logo-tagline {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  transition: color var(--transition);
}

.navbar--scrolled .logo-name,
.navbar--solid .logo-name {
  color: var(--green-800);
}

.navbar--scrolled .logo-tagline,
.navbar--solid .logo-tagline {
  color: var(--gray-500);
}

/* ─── Nav Links ─── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  padding: 7px 11px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.88);
  transition: all var(--transition);
  position: relative;
  white-space: nowrap;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 11px;
  right: 11px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform var(--transition);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--white);
}

.navbar--scrolled .nav-links a,
.navbar--solid .nav-links a {
  color: var(--gray-700);
}

.navbar--scrolled .nav-links a::after,
.navbar--solid .nav-links a::after {
  background: var(--green-700);
}

.navbar--scrolled .nav-links a:hover,
.navbar--scrolled .nav-links a.active,
.navbar--solid .nav-links a:hover,
.navbar--solid .nav-links a.active {
  color: var(--green-700);
}

/* ─── Actions ─── */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  transition: color var(--transition);
  white-space: nowrap;
}

.nav-phone:hover {
  color: var(--white);
}

.navbar--scrolled .nav-phone,
.navbar--solid .nav-phone {
  color: var(--green-700);
}

.nav-actions .btn {
  padding: 9px 18px;
  font-size: 0.85rem;
}

/* ─── Hamburger ─── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all var(--transition);
  transform-origin: center;
}

.navbar--scrolled .hamburger span,
.navbar--solid .hamburger span {
  background: var(--green-800);
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── Mobile Menu ─── */
.mobile-menu {
  display: none;
  background: var(--white);
  border-top: 1px solid var(--gray-100);
  padding: 16px 24px 24px;
  box-shadow: var(--shadow-lg);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.mobile-menu.open {
  max-height: 600px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
}

.mobile-nav-links a {
  display: block;
  padding: 11px 16px;
  border-radius: var(--radius-md);
  font-weight: 500;
  color: var(--gray-700);
  transition: all var(--transition);
}

.mobile-nav-links a:hover,
.mobile-nav-links a.active {
  background: var(--green-100);
  color: var(--green-700);
}

.mobile-menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--gray-100);
  gap: 12px;
}

.mobile-phone {
  font-weight: 700;
  color: var(--green-700);
  font-size: 1rem;
}

/* ─── Responsive ─── */
@media (max-width: 1100px) {
  .nav-links {
    gap: 0;
  }
  .nav-phone {
    display: none;
  }
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
}

@media (max-width: 480px) {
  .logo-tagline {
    display: none;
  }
}
</style>

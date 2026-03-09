<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* ─── CSS Custom Properties ─── */
:root {
  --green-900: #072414;
  --green-800: #0f4c26;
  --green-700: #1a6b3a;
  --green-600: #237a44;
  --green-500: #2d9b56;
  --green-400: #4db874;
  --green-100: #e4f5ec;
  --green-50:  #f0faf5;

  --white: #ffffff;
  --dark:  #111827;
  --gray-700: #374151;
  --gray-500: #6b7280;
  --gray-300: #d1d5db;
  --gray-100: #f3f4f6;

  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05);
  --shadow-lg: 0 10px 24px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06);
  --shadow-xl: 0 20px 40px rgba(0,0,0,0.12);

  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;

  --transition: 0.3s ease;
  --navbar-height: 80px;
}

/* ─── Reset & Base ─── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  color: var(--dark);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--white);
}

h1, h2, h3, h4, h5 {
  font-family: var(--font-heading);
  line-height: 1.2;
  color: var(--dark);
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button {
  font-family: var(--font-body);
  cursor: pointer;
  border: none;
  background: none;
}

/* ─── Layout Helpers ─── */
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── Buttons ─── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all var(--transition);
  border: 2px solid transparent;
  white-space: nowrap;
}

.btn-primary {
  background: var(--green-700);
  color: var(--white);
  border-color: var(--green-700);
}

.btn-primary:hover {
  background: var(--green-800);
  border-color: var(--green-800);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline-white {
  background: transparent;
  color: var(--white);
  border-color: rgba(255,255,255,0.7);
}

.btn-outline-white:hover {
  background: var(--white);
  color: var(--green-700);
  border-color: var(--white);
}

.btn-outline-green {
  background: transparent;
  color: var(--green-700);
  border-color: var(--green-700);
}

.btn-outline-green:hover {
  background: var(--green-700);
  color: var(--white);
}

/* ─── Section Helpers ─── */
.section {
  padding: 96px 0;
}

.section--light {
  background: var(--green-50);
}

.section--dark {
  background: var(--green-800);
  color: var(--white);
}

.section--darkest {
  background: var(--green-900);
  color: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--gray-500);
  max-width: 580px;
  margin: 0 auto;
}

.section--dark .section-header h2,
.section--darkest .section-header h2 {
  color: var(--white);
}

.section--dark .section-header p,
.section--darkest .section-header p {
  color: rgba(255,255,255,0.7);
}

.tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--green-700);
  background: var(--green-100);
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 14px;
}

.section--dark .tag,
.section--darkest .tag {
  background: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.9);
}

/* ─── Page Hero (inner pages) ─── */
.page-hero {
  padding: calc(var(--navbar-height) + 64px) 0 72px;
  background: linear-gradient(135deg, var(--green-900) 0%, var(--green-700) 70%, var(--green-600) 100%);
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.page-hero .breadcrumb {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  margin-bottom: 12px;
}

.page-hero .breadcrumb a {
  color: rgba(255,255,255,0.65);
  transition: color var(--transition);
}

.page-hero .breadcrumb a:hover {
  color: var(--white);
}

.page-hero .breadcrumb span {
  margin: 0 8px;
}

.page-hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.25rem);
  color: var(--white);
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.8);
  max-width: 560px;
}
</style>

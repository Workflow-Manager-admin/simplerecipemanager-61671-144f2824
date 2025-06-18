<template>
  <div class="main-container">
    <aside class="sidebar">
      <div class="logo-area">
        <span class="logo">🍲</span>
        <h1 class="app-title">SimpleRecipeManager</h1>
      </div>
      <nav class="nav">
        <RouterLink to="/recipes" class="nav-link" active-class="active">Recipes</RouterLink>
        <RouterLink to="/search" class="nav-link" active-class="active">Search</RouterLink>
        <RouterLink to="/categories" class="nav-link" active-class="active">Categories</RouterLink>
        <RouterLink to="/manage" class="nav-link" active-class="active">Manage Recipes</RouterLink>
        <RouterLink to="/users" class="nav-link" active-class="active">User Management</RouterLink>
        <RouterLink to="/auth" class="nav-link" active-class="active">Login/Register</RouterLink>
      </nav>
    </aside>
    <section class="content-area">
      <header class="header">
        <h2 class="header-title">Welcome to SimpleRecipeManager</h2>
      </header>
      <main class="main-content">
        <RouterView />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * Main layout container for SimpleRecipeManager app.
 * Provides structure: sidebar, header, and routed content area.
 */
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  background: var(--color-background, #fff);
  color: var(--color-text, #333);
  font-family: 'Inter', sans-serif;
}

.sidebar {
  width: 240px;
  background: #f8f9fa;
  border-right: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem 0;
  box-shadow: 2px 0 8px rgba(0,0,0,0.02);
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2rem 1.5rem 1rem 1.5rem;
}

.logo {
  font-size: 2rem;
}

.app-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4CAF50;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  color: #333;
  font-weight: 500;
  text-decoration: none;
  transition: background .17s, color .17s;
}

.nav-link.active,
.nav-link.router-link-active,
.nav-link:hover {
  background: #E7F7EA;
  color: #4CAF50;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
}

.header {
  background: #fffbe7;
  border-bottom: 1px solid #ffecb3;
  padding: 1.2rem 2rem;
}

.header-title {
  color: #FF5722;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: #ffffff;
  min-height: 80vh;
}
</style>

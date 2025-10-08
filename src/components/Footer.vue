<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-brand">Redshift</h3>
        <p class="footer-description">
          Transforming digital presence through innovative solutions and cutting-edge technology.
        </p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="#about" @click.prevent="scrollToSection('about')">About</a>
          <a href="#services" @click.prevent="scrollToSection('services')">Services</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
          <a href="#schedule" @click.prevent="scrollToSection('schedule')">Schedule Call</a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Contact Info</h4>
        <div class="contact-info">
          <p>📧 hello@redshift.pro</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>🌍 Global Remote Team</p>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">GitHub</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2024 Redshift. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    scrollToSection(sectionId) {
      this.$emit('section-scroll', sectionId);
    }
  },
  emits: ['section-scroll']
}
</script>

<style scoped>
.footer {
  background: #0a0a0a;
  border-top: 1px solid #333;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: #fff;
  margin-bottom: 1rem;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: #ccc;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a,
.social-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.social-links a:hover {
  color: #667eea;
}

.contact-info p {
  color: #ccc;
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 2rem;
  text-align: center;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-links,
  .social-links {
    align-items: center;
  }
}
</style>
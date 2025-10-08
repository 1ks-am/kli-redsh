<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h1 class="hero-title">
          Transform Your Digital Presence
        </h1>
        <p class="hero-subtitle">
          We build exceptional digital experiences that drive growth and innovation for forward-thinking businesses.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" @click="scrollToSection('services')">
            Explore Services
          </button>
          <button class="btn-secondary" @click="scrollToSection('schedule')">
            Start a Project
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">About Redshift</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="lead">
              We are a digital innovation studio specializing in creating transformative digital solutions that push boundaries and deliver measurable results.
            </p>
            <p>
              Our team of experts combines cutting-edge technology with strategic thinking to help businesses navigate the digital landscape and achieve their goals.
            </p>
            <div class="stats">
              <div class="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div class="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div class="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section dark">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies for optimal performance and scalability.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile solutions that provide seamless user experiences.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🛠️</div>
            <h3>API Development</h3>
            <p>Robust backend systems and APIs designed for reliability and high performance.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and deployment strategies for modern applications.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <p>Have a project in mind? We'd love to hear from you.</p>
            <div class="contact-details">
              <div class="contact-item">
                <strong>Email:</strong> hello@redshift.pro
              </div>
              <div class="contact-item">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div class="contact-item">
                <strong>Location:</strong> Global Remote Team
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="handleContactSubmit" class="form">
              <div class="form-group">
                <input 
                  v-model="contactForm.name" 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  class="form-input"
                  :class="{ error: contactErrors.name }"
                >
                <span v-if="contactErrors.name" class="error-message">{{ contactErrors.name }}</span>
              </div>
              <div class="form-group">
                <input 
                  v-model="contactForm.email" 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  class="form-input"
                  :class="{ error: contactErrors.email }"
                >
                <span v-if="contactErrors.email" class="error-message">{{ contactErrors.email }}</span>
              </div>
              <div class="form-group">
                <textarea 
                  v-model="contactForm.message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                  class="form-input"
                  :class="{ error: contactErrors.message }"
                ></textarea>
                <span v-if="contactErrors.message" class="error-message">{{ contactErrors.message }}</span>
              </div>
              <button type="submit" class="btn-primary" :disabled="contactLoading">
                {{ contactLoading ? 'Sending...' : 'Send Message' }}
              </button>
              <div v-if="contactSuccess" class="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
              <div v-if="contactErrors.general" class="error-message general-error">
                {{ contactErrors.general }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section id="schedule" class="section dark">
      <div class="container">
        <h2 class="section-title">Schedule a Call</h2>
        <div class="schedule-content">
          <div class="schedule-info">
            <h3>Let's Discuss Your Project</h3>
            <p>Book a free consultation call with our experts to discuss your project requirements and how we can help bring your vision to life.</p>
            <ul class="schedule-benefits">
              <li>30-minute free consultation</li>
              <li>No obligation commitment</li>
              <li>Expert technical advice</li>
              <li>Project roadmap discussion</li>
            </ul>
          </div>
          <div class="schedule-form">
            <form @submit.prevent="handleScheduleSubmit" class="form">
              <div class="form-group">
                <input 
                  v-model="scheduleForm.name" 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  class="form-input"
                  :class="{ error: scheduleErrors.name }"
                >
                <span v-if="scheduleErrors.name" class="error-message">{{ scheduleErrors.name }}</span>
              </div>
              <div class="form-group">
                <input 
                  v-model="scheduleForm.email" 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  class="form-input"
                  :class="{ error: scheduleErrors.email }"
                >
                <span v-if="scheduleErrors.email" class="error-message">{{ scheduleErrors.email }}</span>
              </div>
              <div class="form-group">
                <input 
                  v-model="scheduleForm.phone" 
                  type="tel" 
                  placeholder="Your Phone" 
                  required 
                  class="form-input"
                  :class="{ error: scheduleErrors.phone }"
                >
                <span v-if="scheduleErrors.phone" class="error-message">{{ scheduleErrors.phone }}</span>
              </div>
              <div class="form-group">
                <input 
                  v-model="scheduleForm.dateTime" 
                  type="datetime-local" 
                  required 
                  class="form-input"
                  :class="{ error: scheduleErrors.dateTime }"
                >
                <span v-if="scheduleErrors.dateTime" class="error-message">{{ scheduleErrors.dateTime }}</span>
              </div>
              <div class="form-group">
                <textarea 
                  v-model="scheduleForm.message" 
                  placeholder="Any specific topics you'd like to discuss?" 
                  rows="3" 
                  class="form-input"
                  :class="{ error: scheduleErrors.message }"
                ></textarea>
                <span v-if="scheduleErrors.message" class="error-message">{{ scheduleErrors.message }}</span>
              </div>
              <button type="submit" class="btn-primary" :disabled="scheduleLoading">
                {{ scheduleLoading ? 'Scheduling...' : 'Schedule Call' }}
              </button>
              <div v-if="scheduleSuccess" class="success-message">
                Call scheduled successfully! We'll send a confirmation email shortly.
              </div>
              <div v-if="scheduleErrors.general" class="error-message general-error">
                {{ scheduleErrors.general }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      scheduleForm: {
        name: '',
        email: '',
        phone: '',
        dateTime: '',
        message: ''
      },
      contactLoading: false,
      scheduleLoading: false,
      contactErrors: {},
      scheduleErrors: {},
      contactSuccess: false,
      scheduleSuccess: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
       if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    
    async handleContactSubmit() {
      this.contactLoading = true;
      this.contactErrors = {};
      this.contactSuccess = false;

      try {
        const response = await axios.post('/api/contact', this.contactForm);
        this.contactSuccess = true;
        this.contactForm = { name: '', email: '', message: '' };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.contactSuccess = false;
        }, 5000);
      } catch (error) {
        if (error.response?.data?.errors) {
          this.contactErrors = error.response.data.errors;
        } else {
          this.contactErrors = { general: 'Error sending message. Please try again.' };
        }
      } finally {
        this.contactLoading = false;
      }
    },
    
    async handleScheduleSubmit() {
      this.scheduleLoading = true;
      this.scheduleErrors = {};
      this.scheduleSuccess = false;

      try {
        // Format the date for backend
        const formattedData = {
          ...this.scheduleForm,
          dateTime: new Date(this.scheduleForm.dateTime).toISOString()
        };

        const response = await axios.post('/api/schedule', formattedData);
        this.scheduleSuccess = true;
        this.scheduleForm = { name: '', email: '', phone: '', dateTime: '', message: '' };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.scheduleSuccess = false;
        }, 5000);
      } catch (error) {
        if (error.response?.data?.errors) {
          this.scheduleErrors = error.response.data.errors;
        } else {
          this.scheduleErrors = { general: 'Error scheduling call. Please try again.' };
        }
      } finally {
        this.scheduleLoading = false;
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 70px;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #ccc;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.section {    
  padding: 5rem 2rem;
  background: #000;
}

.section.dark {
  background: #0a0a0a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.lead {
  font-size: 1.25rem;
  color: #ccc;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #ccc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #333;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #667eea;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.service-card p {
  color: #ccc;
  line-height: 1.6;
}

.contact-content,
.schedule-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h3,
.schedule-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.contact-info p,
.schedule-info p {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
  color: #ccc;
}

.schedule-benefits {
  list-style: none;
  margin-top: 1.5rem;
}

.schedule-benefits li {
  padding: 0.5rem 0;
  color: #ccc;
  position: relative;
  padding-left: 1.5rem;
}

.schedule-benefits li:before {
  content: '✓';
  color: #667eea;
  position: absolute;
  left: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
}

.form-input::placeholder {
  color: #666;
}

.form-input.error {
  border-color: #ff6b6b;
}

.error-message {
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
}

.error-message.general-error {
  background: rgba(255, 107, 107, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.3);
  margin-top: 1rem;
}

.success-message {
  color: #51cf66;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(81, 207, 102, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(81, 207, 102, 0.3);
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-family: inherit;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-content,
  .schedule-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn-primary,
  .hero-actions .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  .stats {
    gap: 2rem;
  }
  
  .stat h3 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}
</style>
<template>
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <h1 @click="goHome" class="brand-link">Redshift</h1>
            </div>
            <div class="nav-links">
                <a v-for="link in navigationLinks" :key="link.id" :href="`#${link.id}`"
                    @click.prevent="scrollToSection(link.id)" class="nav-link"
                    :class="{ active: activeSection === link.id }">
                    {{ link.label }}
                </a>
            </div>
            <div class="mobile-menu" @click="toggleMobileMenu" v-if="isMobile">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div v-if="isMobile && mobileMenuOpen" class="mobile-nav">
            <a v-for="link in navigationLinks" :key="link.id" :href="`#${link.id}`"
                @click.prevent="scrollToSection(link.id); mobileMenuOpen = false" class="mobile-nav-link"
                :class="{ active: activeSection === link.id }">
                {{ link.label }}
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            mobileMenuOpen: false,
            activeSection: 'home',
            navigationLinks: [
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Our Services' },
                { id: 'contact', label: 'Contact Us' },
                { id: 'schedule', label: 'Schedule a Call' }
            ],
            isMobile: false
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        scrollToSection(sectionId) {
            //   this.$emit('section-scroll', sectionId);
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        goHome() {
            this.$router.push('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.activeSection = 'home';
        },
        handleScroll() {
            // Update active section based on scroll position
            const sections = this.navigationLinks.map(link => link.id);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        this.activeSection = section;
                        break;
                    }
                }
            }
        }
    },
    emits: ['section-scroll']
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid #333;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-brand h1 {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.nav-brand h1:hover {
    transform: scale(1.05);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: #667eea;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    padding: 0.5rem;
}

.mobile-menu span {
    width: 25px;
    height: 2px;
    background: #fff;
    transition: all 0.3s ease;
}

.mobile-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.98);
    border-bottom: 1px solid #333;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
}

.mobile-nav-link {
    color: #fff;
    text-decoration: none;
    padding: 1rem 0;
    font-weight: 500;
    border-bottom: 1px solid #333;
    transition: color 0.3s ease;
}

.mobile-nav-link:last-child {
    border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    color: #667eea;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .mobile-menu {
        display: flex;
    }

    .nav {
        padding: 1rem;
    }
}
</style>
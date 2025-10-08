// Smooth scroll utility functions
export const scrollUtils = {
  // Scroll to element with offset for fixed header
  scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  },

  // Scroll to top of page
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },

  // Check if element is in viewport
  isElementInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },

  // Add scroll event listener with throttling
  onScroll(callback, throttleMs = 100) {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }
}
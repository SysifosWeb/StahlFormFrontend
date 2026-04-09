import { onMounted } from 'vue'

export const useReveal = () => {
  onMounted(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          // Optional: stop observing after reveal
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    revealElements.forEach(el => observer.observe(el))
  })
}

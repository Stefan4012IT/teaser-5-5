import { useState } from 'react'
import Header from './components/Header'
import CircularMenu from './components/CircularMenu'
import LeadForm from './components/LeadForm'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <main className={`teaser-page ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <Header isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />

      <section className="hero">
        <picture className="teaser-bg">
          <source
            media="(max-width: 768px)"
            srcSet="/images/teaser-bg-mobile.webp"
          />
          <img
            src="/images/teaser-bg-desktop.webp"  
            alt=""
            aria-hidden="true"
          />
        </picture>
        <div className="hero__content">
          <p className="hero__eyebrow">5.5. / Savremena</p>

          <h1 className="hero__title">
            Nešto novo stiže.
          </h1>

          <p className="hero__text">
            Prijavite se i saznajte prvi detalje kampanje Savremene osnovne škole i Savremene gimnazije.
          </p>

          <LeadForm />
        </div>
      </section>

      <CircularMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </main>
  )
}

export default App
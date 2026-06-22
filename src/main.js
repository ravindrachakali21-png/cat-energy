import './style.css'

/* ---- Mobile menu ---- */
const menuBtn = document.getElementById('menuBtn')
const mobileNav = document.getElementById('mobileNav')

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('hidden') === false
    menuBtn.setAttribute('aria-expanded', String(open))
  })
  mobileNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileNav.classList.add('hidden')
      menuBtn.setAttribute('aria-expanded', 'false')
    })
  )
}

/* ---- Before / after wipe ---- */
const range = document.getElementById('baRange')
const top = document.getElementById('baTop')
const line = document.getElementById('baLine')

if (range && top && line) {
  const update = () => {
    const v = Number(range.value)
    top.style.clipPath = `inset(0 ${100 - v}% 0 0)` // reveal left v% in color
    line.style.left = `${v}%`
    range.style.setProperty('--ba-fill', `${v}%`)
  }
  range.addEventListener('input', update)
  update()
}

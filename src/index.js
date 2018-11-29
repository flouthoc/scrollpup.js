class ScrollPup {
  constructor (opts) {
    const defaults = {
      background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
      height: '10px'
    }

    Object.assign(this, defaults)
    Object.assign(this, opts)

    this.init = false

    window.addEventListener('scroll', e => this.run(this))
  }

  run (opts) {
    if (!this.init) {
      let scrollbar = document.createElement('div')
      scrollbar.classList = 'scroll-pup'
      document.body.appendChild(scrollbar)

      this.init = true
    }

    let scrollbar = document.querySelector('.scroll-pup')
    let fullPage = document.documentElement
    let fullBody = document.body
    let percent = Math.floor((fullPage['scrollTop'] || fullBody['scrollTop']) / ((fullPage['scrollHeight'] || fullBody['scrollHeight']) - fullPage.clientHeight) * 100)

    scrollbar.style.height = opts.height
    scrollbar.style.background = opts.background
    scrollbar.style.width = percent + '%'
    scrollbar.style.position = 'fixed'
    scrollbar.style.top = 0
    scrollbar.style.right = 0
    scrollbar.style.left = 0
  }
}

const scrollpup = opts => new ScrollPup(opts)

export default scrollpup

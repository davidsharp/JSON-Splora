'use strict'

/**
 * Dependencies
 */

const mkdirp = require('mkdirp')
const path = require('path')
const Page = require('./Page')

/**
 * App container class
 *
 * Manages pages, tabs, settings
 */

class App {

  /**
   * Start application by creating a page
   */

  constructor() {
    mkdirp(path.resolve(__dirname, '..', 'tmp'))
    this.pages = [new Page()]
    this.current_page = 0
    this.theme = 'default'
  }

  /**
   * Set theme for each page
   *
   * @param {String} theme
   */

  setTheme(theme) {
    this.theme = theme
    this.pages.forEach(page => page.setTheme(theme))
  }

  /**
   * Get the current page
   */

  getCurrentPage() {
    return this.pages[this.current_page]
  }

  /**
   * Create a new page
   */

  createPage() {
    const page = new Page()
    page.setTheme(this.theme)
    this.pages.append(page)
  }
}


/**
 * Export app
 */

module.exports = App

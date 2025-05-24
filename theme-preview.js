/**
 * Theme Preview Component
 * A JavaScript component that shows a preview of each theme in the theme selector
 */

class ThemePreview {
  constructor(options = {}) {
    this.options = Object.assign({
      selectorId: 'themeSelector',
      previewContainerId: 'themePreviewContainer',
      quickSwitchId: 'themeQuickSwitch',
      mobileToggleId: 'themeToggleFloating',
      mobileSelectorId: 'mobileThemeSelector',
      themes: []
    }, options);

    this.currentTheme = localStorage.getItem('selectedTheme') || (this.options.themes.length > 0 ? this.options.themes[0].name : null);
    this.init();
  }

  init() {
    // Initialize theme preview on load
    document.addEventListener('DOMContentLoaded', () => {
      this.createPreviewElements();
      this.bindEvents();
      this.updateVisualElements();
    });
  }

  createPreviewElements() {
    // Create visual preview elements for themes (if container exists)
    const previewContainer = document.getElementById(this.options.previewContainerId);
    if (previewContainer) {
      previewContainer.innerHTML = '';

      this.options.themes.forEach(theme => {
        const previewElement = document.createElement('div');
        previewElement.className = 'theme-preview-item';
        previewElement.setAttribute('data-theme', theme.name);
        previewElement.style.backgroundColor = theme['--container-bg'];
        previewElement.style.borderColor = theme['--border-color'];
        
        const themeIcon = document.createElement('i');
        themeIcon.className = `fas ${theme.icon || 'fa-circle'}`;
        themeIcon.style.color = theme['--button-bg'];
        
        const themeName = document.createElement('span');
        themeName.textContent = theme.name;
        themeName.style.color = theme['--text-color'];
        
        previewElement.appendChild(themeIcon);
        previewElement.appendChild(themeName);
        previewContainer.appendChild(previewElement);
        
        // Mark active theme
        if (theme.name === this.currentTheme) {
          previewElement.classList.add('active');
        }
      });
    }
  }

  bindEvents() {
    // Bind quick switch buttons
    const quickSwitch = document.getElementById(this.options.quickSwitchId);
    if (quickSwitch) {
      quickSwitch.addEventListener('click', (e) => {
        if (e.target.closest('.theme-quick-btn')) {
          const themeBtn = e.target.closest('.theme-quick-btn');
          const themeName = themeBtn.getAttribute('data-theme-name');
          if (themeName) {
            this.changeTheme(themeName);
          }
        }
      });
    }

    // Bind preview container clicks
    const previewContainer = document.getElementById(this.options.previewContainerId);
    if (previewContainer) {
      previewContainer.addEventListener('click', (e) => {
        if (e.target.closest('.theme-preview-item')) {
          const themeItem = e.target.closest('.theme-preview-item');
          const themeName = themeItem.getAttribute('data-theme');
          if (themeName) {
            this.changeTheme(themeName);
          }
        }
      });
    }

    // Mobile theme toggle
    const mobileToggle = document.getElementById(this.options.mobileToggleId);
    const mobileSelector = document.getElementById(this.options.mobileSelectorId);
    
    if (mobileToggle && mobileSelector) {
      mobileToggle.addEventListener('click', () => {
        mobileSelector.classList.toggle('show');
      });
      
      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest(`#${this.options.mobileToggleId}, #${this.options.mobileSelectorId}`)) {
          mobileSelector.classList.remove('show');
        }
      });
    }
  }

  changeTheme(themeName) {
    // This is just a stub - the actual theme change is handled by the main script
    // We'll dispatch a custom event that the main script can listen for
    const event = new CustomEvent('themeChange', { detail: { themeName } });
    document.dispatchEvent(event);
    
    this.currentTheme = themeName;
    this.updateVisualElements();
  }

  updateVisualElements() {
    // Update active states in UI
    const previewItems = document.querySelectorAll('.theme-preview-item');
    previewItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-theme') === this.currentTheme);
    });
    
    const quickButtons = document.querySelectorAll('.theme-quick-btn');
    quickButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme-name') === this.currentTheme);
    });
  }
}

// Usage:
// const themePreview = new ThemePreview({
//   themes: themes, // Pass in the themes array from script.js
// });

$(document).ready(function() {    // Theme Definitions with Icons
    const themes = [
         // Image Theme: Light Blue / Classic
         { 
           name: "Light Blue Classic",
           icon: "fas fa-water",
           description: "Classic ocean-inspired theme",
           "--body-bg": "#BBDDEE", "--container-bg": "#E0F2F7", "--text-color": "#333",
           "--button-bg": "#03A9F4", "--button-hover-bg": "#0288D1", "--player-bg": "white",
           "--player-text": "#333", "--border-color": "rgba(0, 0, 0, 0.1)" 
         },
         // Original Theme: Classic Walnut
        { 
          name: "Classic Walnut",
          icon: "fas fa-tree",
          description: "Warm vintage wood tones",
          "--body-bg": "#FAF0E6", /* Linen-ish */ "--container-bg": "#F5DEB3", /* Moccasin */
          "--text-color": "#4A230B", /* Dark Brown */ "--button-bg": "#A0522D", /* Sienna */
          "--button-hover-bg": "#8B4513", /* SaddleBrown */ "--player-bg": "white",
          "--player-text": "#4A230B", "--border-color": "rgba(139, 69, 19, 0.2)" /* Brownish border */ 
        },
         // Image Theme: Art Deco Green
        { 
          name: "Art Deco Green",
          icon: "fas fa-leaf",
          description: "Fresh nature-inspired design",
          "--body-bg": "#E8F5E9", /* Light Green */ "--container-bg": "#C8E6C9", /* Lighter Green */
          "--text-color": "#1B5E20", /* Dark Green */ "--button-bg": "#388E3C", /* Medium Green */
          "--button-hover-bg": "#2E7D32", /* Darker Green */ "--player-bg": "#F1F8E9",
          "--player-text": "#1B5E20", "--border-color": "rgba(46, 125, 50, 0.2)" 
        },
        // Image Theme: Bakelite Ivory
        { 
          name: "Bakelite Ivory",
          icon: "fas fa-sun",
          description: "Bright retro sunshine theme",
          "--body-bg": "#FFFDE7", /* Very Light Yellow */ "--container-bg": "#FFF8E1", /* Light Yellow */
          "--text-color": "#212121", /* Black */ "--button-bg": "#FFCA28", /* Amber */
          "--button-hover-bg": "#FFB300", /* Darker Amber */ "--player-bg": "white",
          "--player-text": "#212121", "--border-color": "rgba(33, 33, 33, 0.2)" 
        },
        // Image Theme: Mid-Century Teak
        { 
          name: "Mid-Century Teak",
          icon: "fas fa-home",
          description: "Cozy mid-century modern",
          "--body-bg": "#D7CCC8", /* Light Grey Brown */ "--container-bg": "#BCAAA4", /* Medium Grey Brown */
          "--text-color": "#3E2723", /* Very Dark Brown */ "--button-bg": "#6D4C41", /* Brown */
          "--button-hover-bg": "#5D4037", /* Dark Brown */ "--player-bg": "#EFEBE9",
          "--player-text": "#3E2723", "--border-color": "rgba(62, 39, 35, 0.2)" 
        },
         // Image Theme: Retro Transistor Blue
        { 
          name: "Retro Transistor Blue",
          icon: "fas fa-bolt",
          description: "Electric retro vibes",
          "--body-bg": "#E1F5FE", /* Lighter Blue */ "--container-bg": "#B3E5FC", /* Light Cyan */
          "--text-color": "#01579B", /* Dark Blue */ "--button-bg": "#039BE5", /* Medium Blue */
          "--button-hover-bg": "#0288D1", /* Darker Blue */ "--player-bg": "white",
          "--player-text": "#01579B", "--border-color": "rgba(1, 87, 155, 0.2)" 
        },
         // Image Theme: Steampunk Brass
         { 
           name: "Steampunk Brass",
           icon: "fas fa-cogs",
           description: "Industrial steampunk style",
           "--body-bg": "#A1887F", /* Brown Grey */ "--container-bg": "#D7BDA2", /* Brass/Bronze like */
           "--text-color": "#3E2723", /* Dark Brown */ "--button-bg": "#8D6E63", /* Medium Brown */
           "--button-hover-bg": "#795548", /* Darker Brown */ "--player-bg": "#EFEBE9",
           "--player-text": "#3E2723", "--border-color": "rgba(62, 39, 35, 0.3)" 
         },
        // More themes...
        { 
          name: "Vintage Red",
          icon: "fas fa-heart",
          description: "Classic romantic red",
          "--body-bg": "#FFEBEE", /* Lightest Red */ "--container-bg": "#FFCDD2", /* Lighter Red */
          "--text-color": "#B71C1C", /* Dark Red */ "--button-bg": "#E53935", /* Medium Red */
          "--button-hover-bg": "#C62828", /* Darker Red */ "--player-bg": "#FFFAFA",
          "--player-text": "#B71C1C", "--border-color": "rgba(183, 28, 28, 0.2)" 
        },
         { 
          name: "Dark Mode",
          icon: "fas fa-moon",
          description: "Easy on the eyes darkness",
          "--body-bg": "#212121", "--container-bg": "#424242", "--text-color": "#E0E0E0",
          "--button-bg": "#616161", "--button-hover-bg": "#757575", "--player-bg": "#303030",
          "--player-text": "#E0E0E0", "--border-color": "rgba(224, 224, 224, 0.1)" 
         }
    ];
    const root = document.documentElement; // Get the root HTML element for CSS variables

    // Create modern theme selector with icons
    function createModernThemeSelector() {
        // Hide the original select element
        $('#themeSelector').hide();
        
        // Create the custom theme selector
        const customSelector = $(`
            <div class="modern-theme-selector">
                <div class="theme-selector-trigger">
                    <div class="selected-theme-preview">
                        <i class="fas fa-water theme-icon"></i>
                        <div class="theme-info">
                            <span class="theme-name">Light Blue Classic</span>
                            <span class="theme-description">Classic ocean-inspired theme</span>
                        </div>
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </div>
                </div>
                <div class="theme-selector-dropdown">
                    <div class="theme-options-container">
                        ${themes.map(theme => `
                            <div class="theme-option" data-theme="${theme.name}">
                                <div class="theme-preview-box" style="background: linear-gradient(135deg, ${theme['--container-bg']}, ${theme['--button-bg']});">
                                    <i class="${theme.icon} theme-option-icon" style="color: ${theme['--text-color']};"></i>
                                </div>
                                <div class="theme-details">
                                    <span class="theme-option-name">${theme.name}</span>
                                    <span class="theme-option-description">${theme.description}</span>
                                </div>
                                <div class="theme-colors">
                                    <div class="color-swatch" style="background-color: ${theme['--container-bg']};"></div>
                                    <div class="color-swatch" style="background-color: ${theme['--button-bg']};"></div>
                                    <div class="color-swatch" style="background-color: ${theme['--text-color']};"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `);
        
        // Insert after the original theme selector
        $('#themeSelector').after(customSelector);
        
        // Handle dropdown toggle
        $('.theme-selector-trigger').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.theme-selector-dropdown').toggleClass('active');
            $('.dropdown-arrow').toggleClass('rotated');
        });
        
        // Handle theme selection
        $('.theme-option').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const themeName = $(this).data('theme');
            const selectedTheme = themes.find(t => t.name === themeName);
            
            if (selectedTheme) {
                // Update the trigger display
                $('.selected-theme-preview .theme-icon').attr('class', `${selectedTheme.icon} theme-icon`);
                $('.selected-theme-preview .theme-name').text(selectedTheme.name);
                $('.selected-theme-preview .theme-description').text(selectedTheme.description);
                
                // Apply the theme
                applyTheme(themeName);
                
                // Close dropdown
                $('.theme-selector-dropdown').removeClass('active');
                $('.dropdown-arrow').removeClass('rotated');
                
                // Update active state
                $('.theme-option').removeClass('active');
                $(this).addClass('active');
            }
        });
        
        // Close dropdown when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.modern-theme-selector').length) {
                $('.theme-selector-dropdown').removeClass('active');
                $('.dropdown-arrow').removeClass('rotated');
            }
        });
        
        // Set initial active theme
        const savedTheme = localStorage.getItem('selectedTheme') || themes[0].name;
        $(`.theme-option[data-theme="${savedTheme}"]`).addClass('active');
    }
    
    // Initialize the modern theme selector
    createModernThemeSelector();    // Function to apply a theme
    function applyTheme(themeName) {
        const theme = themes.find(t => t.name === themeName);
        if (theme) {
            for (const variable in theme) {
                if (variable.startsWith('--')) {
                    root.style.setProperty(variable, theme[variable]);
                }
            }
            
            // Set RGB variables for colors that need it
            if (theme['--button-bg']) {
                const rgbColor = hexToRGB(theme['--button-bg']);
                if (rgbColor) {
                    root.style.setProperty('--button-bg-rgb', `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
                }
            }
            
            // Save the selected theme to local storage
            localStorage.setItem('selectedTheme', themeName);
            
            // Update the modern selector display
            const selectedTheme = themes.find(t => t.name === themeName);
            if (selectedTheme) {
                $('.selected-theme-preview .theme-icon').attr('class', `${selectedTheme.icon} theme-icon`);
                $('.selected-theme-preview .theme-name').text(selectedTheme.name);
                $('.selected-theme-preview .theme-description').text(selectedTheme.description);
            }
        }
    }

    // Apply saved theme on page load, or the first theme (Light Blue Classic)
    const savedTheme = localStorage.getItem('selectedTheme');
    const initialTheme = savedTheme || themes[0].name;
    applyTheme(initialTheme);

    // Static countries (Can keep these as quick access, though API gets all)
    const staticCountries = [
        { name: "India", code: "IN" },
        { name: "United States", code: "US" },
        { name: "United Kingdom", code: "GB" },
        { name: "Germany", code: "DE" },
        { name: "France", code: "FR" },
         { name: "Canada", code: "CA" }
    ];

    let allCountries = []; // Store the full list of countries
    let displayedCountries = []; // Store currently displayed countries for search/filter
    let stations = [];

    // Fetch countries
    $.getJSON('https://de1.api.radio-browser.info/json/countries', function(data) {
        allCountries = data.map(country => ({
            name: country.name,
            code: country.iso_3166_1
        }));
         // Add static countries if they aren't already in the fetched list
         staticCountries.forEach(staticCountry => {
             if (!allCountries.some(country => country.code === staticCountry.code)) {
                 allCountries.push(staticCountry);
             }
         });

        allCountries.sort((a, b) => a.name.localeCompare(b.name));
        displayedCountries = allCountries; // Initially display all
        displayCountries(displayedCountries);

    }).fail(function() {
         // Fallback to just static countries if API fails
         console.error("Failed to fetch countries from API, using static list.");
         allCountries = staticCountries;
         allCountries.sort((a, b) => a.name.localeCompare(b.name));
         displayedCountries = allCountries;
         displayCountries(displayedCountries);
    });

    // Enhanced country and station display with metadata
    let favorites = JSON.parse(localStorage.getItem('favoriteStations') || '[]');
    let stationGenres = [];
    let countryRegions = {
        'africa': ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CM', 'CF', 'TD', 'KM', 'CD', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'CG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW'],
        'americas': ['AR', 'BS', 'BB', 'BZ', 'BO', 'BR', 'CA', 'CL', 'CO', 'CR', 'CU', 'DM', 'DO', 'EC', 'SV', 'GD', 'GT', 'GY', 'HT', 'HN', 'JM', 'MX', 'NI', 'PA', 'PY', 'PE', 'LC', 'VC', 'SR', 'TT', 'US', 'UY', 'VE'],
        'asia': ['AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN', 'CY', 'GE', 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'MM', 'NP', 'KP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TW', 'TJ', 'TH', 'TL', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE'],
        'europe': ['AL', 'AD', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'MD', 'MC', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'GB', 'VA'],
        'oceania': ['AU', 'FJ', 'KI', 'MH', 'FM', 'NR', 'NZ', 'PW', 'PG', 'WS', 'SB', 'TO', 'TV', 'VU']
    };

    // Animation and micro-interactions
    function initAnimations() {
        // Add staggered animation to country and station items
        function animateStaggeredItems(container, items, delay = 50) {
            $(items).each(function(index) {
                const $this = $(this);
                $this.addClass('staggered-item');
                setTimeout(() => {
                    $this.css({
                        'animation': 'fadeSlideIn 0.5s ease forwards',
                        'animation-delay': (index * delay) + 'ms'
                    });
                }, 10);
            });
        }

        // Set up observers for animations
        if ('IntersectionObserver' in window) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-transition');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            // Observe sections
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            $('section').addClass('section-transition');
        }

        // Apply staggered animations when content changes
        const countryObserver = new MutationObserver(() => {
            animateStaggeredItems('#countryList', '.country-item', 30);
        });

        const stationObserver = new MutationObserver(() => {
            animateStaggeredItems('#stationListContainer', '.station-item', 30);
        });

        countryObserver.observe(document.getElementById('countryList'), { childList: true });
        stationObserver.observe(document.getElementById('stationListContainer'), { childList: true });
    }

    // Call animation initialization
    initAnimations();

    // Add loading indicators
    function showLoading(container) {
        $(container).html(`
            <div class="loader">
                <div class="loader-spinner"></div>
            </div>
        `);
    }    function showNowPlaying(stationUrl) {
        // Remove now-playing class from all stations
        $('.station-card, .station-item').removeClass('now-playing');
        
        // Add to the currently playing station (supports both old and new styles)
        $(`.station-card[data-url="${stationUrl}"], .station-item[data-url="${stationUrl}"]`).addClass('now-playing');
        
        // Update the play button to pause icon on the station card
        $(`.station-card[data-url="${stationUrl}"] .play-station-btn i`).removeClass('fa-play').addClass('fa-pause');
    }

    // Updated display country function with enhanced UI
    function displayCountries(countriesToDisplay) {
        var countryList = $('#countryList');
        countryList.empty();
        
        if (countriesToDisplay.length === 0) {
            countryList.append('<p class="text-center">No countries found matching your search.</p>');
        } else {
            countriesToDisplay.forEach(function(country) {
                var flagUrl = `https://flagpedia.net/data/flags/w160/${country.code.toLowerCase()}.png`;
                
                // Determine which region the country belongs to
                let region = 'unknown';
                for (const [key, countries] of Object.entries(countryRegions)) {
                    if (countries.includes(country.code)) {
                        region = key;
                        break;
                    }
                }

                var countryItem = $(`
                    <div class="country-item card" data-code="${country.code}" data-name="${country.name}" data-region="${region}">
                        <div class="country-flag-container">
                            <img src="${flagUrl}" class="flag" alt="${country.name} flag" onerror="this.src='images/default-flag.png';">
                        </div>
                        <span class="country-name">${country.name}</span>
                        <span class="country-count badge"></span>
                    </div>
                `);
                countryList.append(countryItem);
                
                // Optional: Fetch station count for this country
                $.getJSON(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${country.code}?limit=1&hidebroken=true`, function(data) {
                    countryItem.find('.country-count').text(`${data.length}+ stations`);
                }).fail(function() {
                    countryItem.find('.country-count').remove();
                });
            });
        }
    }
    
    // Updated station display with enhanced UI and metadata
    function displayStations(stationsToDisplay) {
        var stationListContainer = $('#stationListContainer');
        stationListContainer.empty();
        
        if (stationsToDisplay.length === 0) {
            stationListContainer.append('<p class="text-center">No stations found for this country.</p>');
        } else {
            // Create a grid wrapper for the stations
            const stationGrid = $('<div class="station-grid"></div>');
            stationListContainer.append(stationGrid);
            
            stationsToDisplay.forEach(function(station) {
                if (station.url && station.url !== "") {
                    // Extract potential FM frequency from station name
                    const fmRegex = /\b(\d{2,3}(?:\.\d)?)\s*(?:FM|MHz)\b/i;
                    const fmMatch = station.name.match(fmRegex);
                    const frequency = fmMatch ? fmMatch[1] : null;
                    
                    // Generate a color based on station name for stations without specific genre
                    const nameHash = station.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const hue = nameHash % 360;
                    const stationColor = `hsl(${hue}, 70%, 50%)`;
                    
                    // Check for certain keywords to assign genre icons if genre not provided
                    let genreIcon = 'fa-broadcast-tower';
                    let genreName = '';
                    
                    if (station.name.match(/news|noticias|info|actualidad/i)) {
                        genreIcon = 'fa-newspaper';
                        genreName = 'News';
                    } else if (station.name.match(/rock|metal|punk/i)) {
                        genreIcon = 'fa-guitar';
                        genreName = 'Rock';
                    } else if (station.name.match(/pop|hits|top/i)) {
                        genreIcon = 'fa-music';
                        genreName = 'Pop';
                    } else if (station.name.match(/jazz|blues/i)) {
                        genreIcon = 'fa-saxophone';
                        genreName = 'Jazz';
                    } else if (station.name.match(/classic|clasica|symphony/i)) {
                        genreIcon = 'fa-violin';
                        genreName = 'Classical';
                    } else if (station.name.match(/dance|electro|house|techno|dj/i)) {
                        genreIcon = 'fa-compact-disc';
                        genreName = 'Electronic';
                    }
                    
                    // Create the station card with enhanced visual elements
                    var stationItem = $(`
                        <div class="station-card" data-url="${station.url}" data-name="${station.name}">
                            <div class="station-card-header" style="background: linear-gradient(to right, ${stationColor}, transparent);">
                                <div class="station-icon" style="background-color: ${stationColor}">
                                    <i class="fas ${genreIcon}"></i>
                                </div>
                                <div class="station-title-area">
                                    <h3 class="station-name">${station.name}</h3>
                                    ${frequency ? `<span class="station-frequency">${frequency} FM</span>` : ''}
                                </div>
                            </div>
                            <div class="station-card-body">
                                <div class="station-meta">
                                    ${genreName ? `<span class="station-genre"><i class="fas ${genreIcon}"></i> ${genreName}</span>` : ''}
                                    ${station.language ? `<span class="station-language"><i class="fas fa-language"></i> ${station.language}</span>` : ''}
                                </div>
                                <div class="station-action">
                                    <button class="play-station-btn" aria-label="Play ${station.name}">
                                        <i class="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `);
                    
                    stationGrid.append(stationItem);
                } else {
                    console.warn(`Station "${station.name}" has no resolved URL.`);
                }
            });
        }
    }
    
    // Handle remove favorite button
    $(document).on('click', '.remove-favorite-btn', function(e) {
        e.stopPropagation(); // Prevent triggering card click
        
        const stationUrl = $(this).data('url');
        const index = favorites.findIndex(fav => fav.url === stationUrl);
        
        if (index !== -1) {
            favorites.splice(index, 1);
            localStorage.setItem('favoriteStations', JSON.stringify(favorites));
            
            // Update UI
            $(this).closest('.favorite-station-card').fadeOut(300, function() {
                $(this).remove();
                displayFavorites();
                
                // Also update main station list if visible
                $('.favorite-btn[data-url="' + stationUrl + '"]').removeClass('active');
            });
        }
    });
    
    // Play from favorites
    $(document).on('click', '.play-favorite-btn, .favorite-station-card', function(e) {
        const card = $(this).hasClass('favorite-station-card') ? $(this) : $(this).closest('.favorite-station-card');
        const url = card.data('url');
        const name = card.data('name');
        
        if (url) {
            $('#nowPlaying').text(name);
            $('#stationDisplayName').text(name);
            
            player.pause();
            player.src = url;
            player.load();
            
            // Initialize audio visualization if first time playing
            setupAudioVisualization();
            
            setTimeout(() => {
                const playPromise = player.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        playPauseBtn.html('<i class="fas fa-pause"></i>');
                    }).catch(error => {
                        console.error("Playback failed:", error);
                        $('#nowPlaying').text(`Could not play: ${name}. Please try again.`);
                        $('#stationDisplayName').text("Playback error");
                        playPauseBtn.html('<i class="fas fa-play"></i>');
                    });
                }
            }, 100);
        }
    });
      // Play station when clicking the play button
    $(document).on('click', '.station-item .play-btn, .station-card .play-station-btn', function(e) {
        e.stopPropagation(); // Prevent triggering the parent click
        
        // Support both old and new UI elements
        const parent = $(this).closest('.station-item, .station-card');
        const url = parent.data('url');
        const name = parent.data('name') || parent.find('.station-name').text().trim();
        
        playStation(url, name);
    });
      // Centralized function to play a station
    function playStation(url, name) {
        if (!url) {
            console.error("Attempted to play station with no URL.");
            $('#nowPlaying').text(`Error: No stream found for ${name}`);
            $('#stationDisplayName').text("No stream available");
            return;
        }

        $('#nowPlaying').text(name);
        $('#stationDisplayName').text(name);
        
        // Update station UI to show which is playing
        showNowPlaying(url);
        
        // Pause current playback and reset src
        player.pause();
        player.src = url;
        player.load();
        
        // Initialize audio visualization if first time playing
        setupAudioVisualization();
        
        setTimeout(() => {
            const playPromise = player.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playPauseBtn.html('<i class="fas fa-pause"></i>');
                    
                    // Store in recently played
                    addToRecentlyPlayed(url, name);
                    
                }).catch(error => {
                    console.error("Playback failed:", error);
                    $('#nowPlaying').text(`Could not play: ${name}. Please try again or check browser permissions.`);
                    $('#stationDisplayName').text("Playback error");
                    playPauseBtn.html('<i class="fas fa-play"></i>');
                });
            }
        }, 100);
    }
    
    // Recently played stations
    function addToRecentlyPlayed(url, name) {
        let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed') || '[]');
        
        // Remove if already exists
        recentlyPlayed = recentlyPlayed.filter(station => station.url !== url);
        
        // Add to beginning
        recentlyPlayed.unshift({ url, name, timestamp: Date.now() });
        
        // Limit to 10 items
        if (recentlyPlayed.length > 10) {
            recentlyPlayed = recentlyPlayed.slice(0, 10);
        }
        
        localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
    }
    
    // Handle region filter
    $(document).on('click', '#regionFilterMenu .dropdown-item', function(e) {
        e.preventDefault();
        
        const region = $(this).data('region');
        
        // Update button text
        $('#regionFilterBtn').html(`<i class="fas fa-globe"></i> ${$(this).text()}`);
        
        // Update active state
        $('#regionFilterMenu .dropdown-item').removeClass('active');
        $(this).addClass('active');
        
        // Filter countries
        if (region === 'all') {
            displayedCountries = allCountries;
        } else {
            displayedCountries = allCountries.filter(country => 
                countryRegions[region] && countryRegions[region].includes(country.code)
            );
        }
        
        displayCountries(displayedCountries);
    });
    
    // Clear search buttons
    $('#countrySearch').on('input', function() {
        $('#clearCountrySearch').toggle($(this).val().length > 0);
    });
    
    $('#stationSearch').on('input', function() {
        $('#clearStationSearch').toggle($(this).val().length > 0);
    });
    
    $('#clearCountrySearch').on('click', function() {
        $('#countrySearch').val('');
        $(this).hide();
        displayedCountries = allCountries;
        displayCountries(displayedCountries);
    });
    
    $('#clearStationSearch').on('click', function() {
        $('#stationSearch').val('');
        $(this).hide();
        displayStations(stations);
    });
    
    // Refresh stations button
    $('#refreshStations').on('click', function() {
        const countryCode = $('#selectedCountry').data('code');
        const countryName = $('#selectedCountry').text();
        
        if (countryCode) {
            $(this).find('i').addClass('fa-spin');
            
            $.getJSON(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${countryCode}?limit=100&hidebroken=true`, function(data) {
                stations = data.map(station => ({
                    name: station.name,
                    url: station.url_resolved,
                    language: station.language,
                    genres: station.tags ? station.tags.split(',').map(tag => tag.trim()) : [],
                    votes: station.votes
                })).filter(s => s.url && s.url !== "");
                
                $('#refreshStations').find('i').removeClass('fa-spin');
                displayStations(stations);
            }).fail(function() {
                console.error("Failed to refresh stations");
                $('#refreshStations').find('i').removeClass('fa-spin');
            });
        }
    });

    // Display countries
    function displayCountries(countriesToDisplay) {
        var countryList = $('#countryList');
        countryList.empty();
        if (countriesToDisplay.length === 0) {
             countryList.append('<p class="text-center">No countries found matching your search.</p>');
        } else {
            countriesToDisplay.forEach(function(country) {
                var flagUrl = `https://flagpedia.net/data/flags/w160/${country.code.toLowerCase()}.png`;

                var countryItem = $(`
                    <div class="country-item card" data-code="${country.code}" data-name="${country.name}">
                        <img src="${flagUrl}" class="flag" alt="${country.name} flag" onerror="this.style.display='none';">
                        <span class="country-name">${country.name}</span>
                    </div>
                `);
                countryList.append(countryItem);
            });
        }
    }

    // Country search
    $('#countrySearch').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        displayedCountries = allCountries.filter(function(country) {
            return country.name.toLowerCase().includes(searchTerm);
        });
        displayCountries(displayedCountries);
    });    // Country selection
    $(document).on('click', '.country-item', function() {
        var countryCode = $(this).data('code');
        var countryName = $(this).data('name');
        $('#selectedCountry').text(countryName).data('code', countryCode);
        
        // Smooth transition with fade
        $('#country-selection').fadeOut(300, function() {
            $('#station-list').fadeIn(300);
        });
        
        $('#stationSearch').val(''); // Clear station search input
        stations = []; // Clear previous stations
        
        // Show loading indicator
        showLoading('#stationListContainer');

        // Specific logic for India channels
        if (countryName === "India") {
            const desiredChannels = [
                "Bollywood Gaane Purane", "Vivid Bharti", "Radio Mirchi Hindi",
                "Radio Bollywood 90s", "Red FM 93.5", "Hindi Gold Radio",
                "LataMangeshkarRadio", "Goldy Evergreen", "AIR FM Gold Delhi",
                "Mirchi Top 20", "Hindi Retro", "Aaj Tak News Radio Live",
                "Radio Aashiyana", "Bollywood 90s radio", "90sonceagainradio",
                "Radio Hungama Bollywood Dil Se", "Radio Aashiyanaa", "Madhur Sangeet Radio",
                "Rafi Hits Songs", "My Radio DJ", "Radio City Hindi", "Fever FM", "BIG FM"
            ];
             // Use Promise.all to fetch all specific channels concurrently
             Promise.all(desiredChannels.map(channel =>
                 $.getJSON(`https://de1.api.radio-browser.info/json/stations/bynameexact/${encodeURIComponent(channel)}?countrycode=IN&hidebroken=true`) // Use bynameexact, hidebroken
                     .then(data => data.length > 0 ? { name: data[0].name, url: data[0].url_resolved } : null)
                     .catch(() => null) // Catch errors for individual lookups
             ))
             .then(results => {
                 // Filter out null results and use only the first match for each name
                 stations = results.filter(station => station !== null)
                                   .filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i); // Deduplicate by name

                 // Fallback: If specific channels not found or too few, fetch a general list for India
                 if (stations.length < 15) { // If fewer than X specific channels found
                     console.warn("Could not find enough specific Indian channels or API error, fetching a general list.");
                      $.getJSON(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/IN?limit=100&hidebroken=true`, function(data) {
                           // Combine found specific stations with general ones, prioritizing specific
                           const generalStations = data.map(station => ({
                                name: station.name,
                                url: station.url_resolved
                            })).filter(gs => gs.url && gs.url !== "" && !stations.some(s => s.name === gs.name)); // Filter out specific ones already found and check URL
                            stations = stations.concat(generalStations);
                           displayStations(stations);
                      }).fail(() => {
                           console.error("Failed to fetch general Indian stations.");
                           displayStations(stations); // Display only specific ones found, or empty list
                      });
                 } else {
                      displayStations(stations); // Display specific channels found
                 }
             })
             .catch(error => {
                 console.error("Error fetching specific Indian stations:", error);
                 // Fallback to general fetch on overall error
                 $.getJSON(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/IN?limit=100&hidebroken=true`, function(data) {
                    stations = data.map(station => ({
                        name: station.name,
                        url: station.url_resolved
                    })).filter(s => s.url && s.url !== ""); // Filter stations without URLs
                    displayStations(stations);
                }).fail(() => {
                     console.error("Failed to fetch general Indian stations.");
                     displayStations([]); // Display empty list on total failure
                });
             });

        } else {
             // General fetch for other countries
            $.getJSON(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${countryCode}?limit=100&hidebroken=true`, function(data) { // Increased limit, hidebroken
                stations = data.map(station => ({
                    name: station.name,
                    url: station.url_resolved
                })).filter(s => s.url && s.url !== ""); // Filter stations without URLs
                displayStations(stations);
            }).fail(function() {
                console.error("Failed to fetch stations for country:", countryName);
                stations = []; // Clear stations on error
                displayStations([]); // Display empty list
            });
        }
    });    // Back to countries
    $('#backToCountries').click(function() {
        // Smooth transition with fade
        $('#station-list').fadeOut(300, function() {
            $('#country-selection').fadeIn(300);
        });
        
        $('#countrySearch').val(''); // Clear country search input
        displayedCountries = allCountries; // Reset displayed countries to full list
        displayCountries(displayedCountries); // Redisplay the full country list
    });

    // Display stations
    function displayStations(stationsToDisplay) {
        var stationListContainer = $('#stationListContainer');
        stationListContainer.empty();
        
        if (stationsToDisplay.length === 0) {
            stationListContainer.append('<p class="text-center">No stations found for this country.</p>');
        } else {
            // Create a grid wrapper for the stations
            const stationGrid = $('<div class="station-grid"></div>');
            stationListContainer.append(stationGrid);
            
            stationsToDisplay.forEach(function(station) {
                if (station.url && station.url !== "") {
                    // Extract potential FM frequency from station name
                    const fmRegex = /\b(\d{2,3}(?:\.\d)?)\s*(?:FM|MHz)\b/i;
                    const fmMatch = station.name.match(fmRegex);
                    const frequency = fmMatch ? fmMatch[1] : null;
                    
                    // Generate a color based on station name for stations without specific genre
                    const nameHash = station.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const hue = nameHash % 360;
                    const stationColor = `hsl(${hue}, 70%, 50%)`;
                    
                    // Check for certain keywords to assign genre icons if genre not provided
                    let genreIcon = 'fa-broadcast-tower';
                    let genreName = '';
                    
                    if (station.name.match(/news|noticias|info|actualidad/i)) {
                        genreIcon = 'fa-newspaper';
                        genreName = 'News';
                    } else if (station.name.match(/rock|metal|punk/i)) {
                        genreIcon = 'fa-guitar';
                        genreName = 'Rock';
                    } else if (station.name.match(/pop|hits|top/i)) {
                        genreIcon = 'fa-music';
                        genreName = 'Pop';
                    } else if (station.name.match(/jazz|blues/i)) {
                        genreIcon = 'fa-saxophone';
                        genreName = 'Jazz';
                    } else if (station.name.match(/classic|clasica|symphony/i)) {
                        genreIcon = 'fa-violin';
                        genreName = 'Classical';
                    } else if (station.name.match(/dance|electro|house|techno|dj/i)) {
                        genreIcon = 'fa-compact-disc';
                        genreName = 'Electronic';
                    }
                    
                    // Create the station card with enhanced visual elements
                    var stationItem = $(`
                        <div class="station-card" data-url="${station.url}" data-name="${station.name}">
                            <div class="station-card-header" style="background: linear-gradient(to right, ${stationColor}, transparent);">
                                <div class="station-icon" style="background-color: ${stationColor}">
                                    <i class="fas ${genreIcon}"></i>
                                </div>
                                <div class="station-title-area">
                                    <h3 class="station-name">${station.name}</h3>
                                    ${frequency ? `<span class="station-frequency">${frequency} FM</span>` : ''}
                                </div>
                            </div>
                            <div class="station-card-body">
                                <div class="station-meta">
                                    ${genreName ? `<span class="station-genre"><i class="fas ${genreIcon}"></i> ${genreName}</span>` : ''}
                                    ${station.language ? `<span class="station-language"><i class="fas fa-language"></i> ${station.language}</span>` : ''}
                                </div>
                                <div class="station-action">
                                    <button class="play-station-btn" aria-label="Play ${station.name}">
                                        <i class="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `);
                    
                    stationGrid.append(stationItem);
                } else {
                    console.warn(`Station "${station.name}" has no resolved URL.`);
                }
            });
        }
    }

    // Station search
    $('#stationSearch').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        var filteredStations = stations.filter(function(station) {
            return station.name.toLowerCase().includes(searchTerm);
        });
        displayStations(filteredStations);
    });

    // Custom Audio Player Logic
    const player = $('#radioPlayer')[0];
    const playPauseBtn = $('#playPauseBtn');
    const muteBtn = $('#muteBtn');
    const volumeSlider = $('#volumeSlider');
    const stationDisplayName = $('#stationDisplayName');
    const nowPlaying = $('#nowPlaying');
    const canvas = $('#audioVisualization')[0];
    let audioContext, analyser, dataArray, canvasCtx;    // Initialize volume from localStorage or default
    let volume = parseFloat(localStorage.getItem('playerVolume')) || 0.8;
    player.volume = volume;
    volumeSlider.val(volume * 100);
    
    // Set the CSS variable for volume slider appearance
    document.documentElement.style.setProperty('--volume-percent', `${volume * 100}%`);
    
    // Set appropriate volume icon
    if (volume === 0) {
        muteBtn.html('<i class="fas fa-volume-mute"></i>');
    } else if (volume < 0.5) {
        muteBtn.html('<i class="fas fa-volume-down"></i>');
    } else {
        muteBtn.html('<i class="fas fa-volume-up"></i>');
    }
    
    console.log("Initial volume set to:", volume);// Play/Pause functionality
    playPauseBtn.on('click', function() {
        if (player.paused) {
            if (player.src) {
                // Make sure AudioContext is resumed if it was suspended
                if (audioContext && audioContext.state === 'suspended') {
                    audioContext.resume().then(() => {
                        console.log('AudioContext resumed');
                    });
                }
                
                // Ensure we're not muted
                player.muted = false;
                
                const playPromise = player.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        playPauseBtn.html('<i class="fas fa-pause"></i>');
                        console.log("Playback started with current volume:", player.volume);
                    }).catch(error => {
                        console.error("Playback failed:", error);
                    });
                }
            }
        } else {
            player.pause();
            playPauseBtn.html('<i class="fas fa-play"></i>');
        }
    });    // Mute functionality
    muteBtn.on('click', function() {
        player.muted = !player.muted;
        
        if (player.muted) {
            muteBtn.html('<i class="fas fa-volume-mute"></i>');
            console.log("Audio muted");
        } else {
            // Use appropriate icon based on current volume
            const currentVolume = player.volume;
            if (currentVolume === 0) {
                // If volume is 0, set it to a reasonable value
                player.volume = 0.5;
                volumeSlider.val(50);
                muteBtn.html('<i class="fas fa-volume-up"></i>');
            } else if (currentVolume < 0.5) {
                muteBtn.html('<i class="fas fa-volume-down"></i>');
            } else {
                muteBtn.html('<i class="fas fa-volume-up"></i>');
            }
            console.log("Audio unmuted, volume:", player.volume);
        }
    });    // Volume control
    volumeSlider.on('input', function() {
        const newVolume = $(this).val() / 100;
        player.volume = newVolume;
        localStorage.setItem('playerVolume', newVolume);
        
        // Update volume slider appearance
        document.documentElement.style.setProperty('--volume-percent', `${newVolume * 100}%`);
        
        // Update mute button icon based on volume
        if (newVolume === 0) {
            muteBtn.html('<i class="fas fa-volume-mute"></i>');
            player.muted = true;
        } else {
            if (player.muted) player.muted = false;
            
            if (newVolume < 0.5) {
                muteBtn.html('<i class="fas fa-volume-down"></i>');
            } else {
                muteBtn.html('<i class="fas fa-volume-up"></i>');
            }
        }
    });// Setup audio visualization with enhanced effects
    function setupAudioVisualization() {
        try {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                
                // Create a new source every time to avoid issues with reconnecting
                const source = audioContext.createMediaElementSource(player);
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                
                // Make sure we're not muted and volume is set correctly
                player.muted = false;
                
                // Higher FFT size for smoother visualization 
                analyser.fftSize = 1024; // Increased for more detailed visualization
                const bufferLength = analyser.frequencyBinCount;
                dataArray = new Uint8Array(bufferLength);
                
                canvasCtx = canvas.getContext('2d');
                
                // Make canvas responsive
                function resizeCanvas() {
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                }
                
                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);
                
                // Get button-bg-rgb from CSS or create it
                let buttonBgRgb = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-rgb').trim();
                if (!buttonBgRgb) {
                    // Get the button background color and convert to RGB
                    const buttonBg = getComputedStyle(document.documentElement).getPropertyValue('--button-bg').trim();
                    const rgbColor = hexToRGB(buttonBg);
                    if (rgbColor) {
                        buttonBgRgb = `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;
                        document.documentElement.style.setProperty('--button-bg-rgb', buttonBgRgb);
                    }
                }
                
                visualize();
                console.log("Audio visualization setup complete");
            }
        } catch (error) {
            console.error("Error setting up audio visualization:", error);
        }
    }// Draw enhanced visualization with animations
    function visualize() {
        if (!analyser) return;
        
        requestAnimationFrame(visualize);
        
        analyser.getByteFrequencyData(dataArray);
        
        // Get current theme colors for the visualization
        const savedTheme = localStorage.getItem('selectedTheme') || themes[0].name;
        const theme = themes.find(t => t.name === savedTheme);
        
        // Extract RGB components from the button background color for dynamic effects
        let primaryColor = theme ? theme["--button-bg"] : '#03A9F4';
        let primaryColorRGB = hexToRGB(primaryColor);
        
        if (!primaryColorRGB) {
            primaryColorRGB = {r: 3, g: 169, b: 244}; // Default if cannot parse
        }
        
        // Create a dynamic background with subtle animation
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the background with a gradient and animated noise texture
        const time = Date.now() * 0.001; // Time for animation
        const bgGradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
        bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
        canvasCtx.fillStyle = bgGradient;
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw animated noise texture
        drawNoiseTexture(canvasCtx, canvas.width, canvas.height, time, primaryColorRGB);
        
        // Draw animated circular glow based on audio intensity
        const averageIntensity = getAverageIntensity(dataArray);
        const bassIntensity = getBassIntensity(dataArray);
        const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
        const glowRadius = maxRadius * (averageIntensity / 255) * 0.8;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Draw pulsar glow effect based on bass intensity
        const pulsarRadius = maxRadius * 0.5 * (1 + 0.2 * Math.sin(time * 2));
        const bassGlowRadius = pulsarRadius * (bassIntensity / 255) * 0.8;
        
        const bassGlowGradient = canvasCtx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, bassGlowRadius
        );
        
        bassGlowGradient.addColorStop(0, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, ${0.1 + (bassIntensity / 255) * 0.2})`);
        bassGlowGradient.addColorStop(0.5, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, ${0.05 + (bassIntensity / 255) * 0.1})`);
        bassGlowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        canvasCtx.fillStyle = bassGlowGradient;
        canvasCtx.beginPath();
        canvasCtx.arc(centerX, centerY, bassGlowRadius, 0, Math.PI * 2);
        canvasCtx.fill();
        
        // Draw grid pattern with parallax effect
        drawParallaxGrid(canvasCtx, canvas.width, canvas.height, primaryColorRGB, time, bassIntensity);
        
        // Calculate bar properties for visualization
        const barCount = Math.min(dataArray.length, Math.floor(canvas.width / 3.5));
        const barSpacing = 1.5;
        const barWidth = (canvas.width / barCount) - barSpacing;
        const barMaxHeight = canvas.height * 0.8;
        
        // Draw the primary bars - symmetrical from the center
        let x = (canvas.width - (barCount * (barWidth + barSpacing))) / 2;
        
        // Draw bars with dynamic styling
        for (let i = 0; i < barCount; i++) {
            // Use frequency-weighted scaling for more natural visualization
            const frequencyWeight = 1 - 0.4 * Math.cos((i / barCount) * Math.PI);
            const intensity = dataArray[i] * frequencyWeight;
            const barHeight = (intensity / 255) * barMaxHeight;
            
            // Skip very low values for a cleaner look
            if (barHeight < 2) {
                x += barWidth + barSpacing;
                continue;
            }
            
            // Create a vibrant gradient for each bar based on theme and height
            const gradient = canvasCtx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
            
            // Color gradient changes based on frequency and volume
            const hue = (i / barCount * 180) + (time * 30) % 360;
            const saturation = 85 + (intensity / 255) * 15;
            const lightness = 45 + (intensity / 255) * 15;
            
            gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.95)`);
            gradient.addColorStop(0.7, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.85)`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.75)');
            
            // Draw bar with rounded corners and dynamic width based on frequency
            const dynamicWidth = barWidth * (0.8 + 0.2 * Math.sin((i / barCount) * Math.PI * 4 + time * 3));
            
            // Draw with rounded tops for a modern look
            canvasCtx.fillStyle = gradient;
            canvasCtx.beginPath();
            canvasCtx.moveTo(x, canvas.height);
            canvasCtx.lineTo(x, canvas.height - barHeight + dynamicWidth/2);
            canvasCtx.quadraticCurveTo(x, canvas.height - barHeight, x + dynamicWidth/2, canvas.height - barHeight);
            canvasCtx.quadraticCurveTo(x + dynamicWidth, canvas.height - barHeight, x + dynamicWidth, canvas.height - barHeight + dynamicWidth/2);
            canvasCtx.lineTo(x + dynamicWidth, canvas.height);
            canvasCtx.closePath();
            canvasCtx.fill();
            
            // Add highlight effect on top of bars
            const highlightSize = Math.min(dynamicWidth/2, 3);
            canvasCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            canvasCtx.beginPath();
            canvasCtx.ellipse(
                x + dynamicWidth/2, 
                canvas.height - barHeight, 
                dynamicWidth/2, 
                highlightSize, 
                0, 0, Math.PI * 2
            );
            canvasCtx.fill();
            
            x += barWidth + barSpacing;
        }
        
        // Add reflection effect with dynamic opacity
        addReflection(canvasCtx, canvas, 0.15 + 0.1 * Math.sin(time * 2));
        
        // Add scanline effect
        addScanlines(canvasCtx, canvas.width, canvas.height, time);
        
        // Add vignette effect for a more cinematic look
        addVignette(canvasCtx, canvas.width, canvas.height, primaryColorRGB);
    }
    
    // Draw animated noise texture
    function drawNoiseTexture(ctx, width, height, time, colorRGB) {
        ctx.globalAlpha = 0.03;
        
        for (let x = 0; x < width; x += 10) {
            for (let y = 0; y < height; y += 10) {
                const noise = Math.random() * 0.1 + 0.05;
                const size = 1 + Math.random() * 2;
                
                ctx.fillStyle = `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${noise})`;
                ctx.fillRect(x, y, size, size);
            }
        }
        
        ctx.globalAlpha = 1.0;
    }
    
    // Get bass-specific intensity from frequency data
    function getBassIntensity(dataArray) {
        // Bass frequencies are typically in the lower range of the spectrum
        const bassRange = Math.min(16, Math.floor(dataArray.length / 8));
        let sum = 0;
        
        for (let i = 0; i < bassRange; i++) {
            sum += dataArray[i];
        }
        
        return sum / bassRange;
    }
    
    // Draw parallax grid for enhanced depth perception
    function drawParallaxGrid(ctx, width, height, colorRGB, time, intensity) {
        const dynamicOpacity = 0.05 + 0.02 * Math.sin(time);
        const gridSize1 = 20;
        const gridSize2 = 40;
        
        // First layer - finer grid
        ctx.strokeStyle = `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${dynamicOpacity})`;
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < height; i += gridSize1) {
            const offsetX = Math.sin(time + i * 0.01) * (intensity / 255) * 5;
            
            ctx.beginPath();
            ctx.moveTo(0, i + offsetX);
            ctx.lineTo(width, i);
            ctx.stroke();
        }
        
        // Second layer - wider grid with different movement
        ctx.strokeStyle = `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${dynamicOpacity * 1.5})`;
        ctx.lineWidth = 0.7;
        
        for (let i = 0; i < width; i += gridSize2) {
            const offsetY = Math.cos(time + i * 0.005) * (intensity / 255) * 8;
            
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i + offsetY, height);
            ctx.stroke();
        }
    }
    
    // Add vignette effect for cinematic look
    function addVignette(ctx, width, height, colorRGB) {
        const gradient = ctx.createRadialGradient(
            width / 2, height / 2, height * 0.3,
            width / 2, height / 2, height * 0.7
        );
        
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, `rgba(0, 0, 0, 0.4)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add subtle color tint to the edges
        const tintGradient = ctx.createRadialGradient(
            width / 2, height / 2, height * 0.5,
            width / 2, height / 2, height
        );
        
        tintGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        tintGradient.addColorStop(1, `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.05)`);
        
        ctx.fillStyle = tintGradient;
        ctx.fillRect(0, 0, width, height);
    }    // Helper function to get average intensity from frequency data
    function getAverageIntensity(dataArray) {
        const total = dataArray.reduce((sum, value) => sum + value, 0);
        return total / dataArray.length;
    }
    
    // Helper to convert hex colors to RGB
    function hexToRGB(hex) {
        if (!hex || typeof hex !== 'string') return null;
        
        // Handle different hex formats and rgba values
        if (hex.startsWith('rgba')) {
            const parts = hex.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
            if (parts) {
                return {
                    r: parseInt(parts[1], 10),
                    g: parseInt(parts[2], 10),
                    b: parseInt(parts[3], 10)
                };
            }
        }
        
        // Handle shorthand hex (#fff) and full hex (#ffffff)
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const formattedHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex);
        
        if (!result) return null;
        
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };
    }
    
    // Draw grid pattern for depth
    function drawGrid(ctx, width, height, primaryColorRGB) {
        ctx.strokeStyle = `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.07)`;
        ctx.lineWidth = 0.5;
        
        // Horizontal lines
        for (let i = 0; i < height; i += 10) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i < width; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }
    }
    
    // Add reflection effect with dynamic opacity
    function addReflection(ctx, canvas, opacity = 0.2) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(0, canvas.height);
        ctx.scale(1, -0.25); // Scale vertically for reflection
        ctx.drawImage(canvas, 0, 0);
        
        // Add gradient fade to the reflection
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
        
        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.restore();
    }
    
    // Add scanline effect with time-based animation
    function addScanlines(ctx, width, height, time) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        const scanLineSpeed = time * 10;
        
        for (let i = 0; i < height; i += 2) {
            // Add slight wave effect to scanlines
            const xOffset = Math.sin((i + scanLineSpeed) * 0.1) * 2;
            ctx.fillRect(xOffset, i, width, 1);
        }
    }

    // Initialize player on first interaction
    $(document).one('click', function() {
        setupAudioVisualization();
    });    // Handle player state changes and update UI
    player.addEventListener('play', function() {
        playPauseBtn.html('<i class="fas fa-pause"></i>');
        $('.station-logo').addClass('pulse-animation');
        $('.custom-player').addClass('is-playing');
    });

    player.addEventListener('pause', function() {
        playPauseBtn.html('<i class="fas fa-play"></i>');
        $('.station-logo').removeClass('pulse-animation');
        $('.custom-player').removeClass('is-playing');
    });

    // Initialize player state
    if (player.paused) {
        $('.station-logo').removeClass('pulse-animation');
        $('.custom-player').removeClass('is-playing');
    } else {
        $('.station-logo').addClass('pulse-animation');
        $('.custom-player').addClass('is-playing');
    }// Update player when selecting a station
    $(document).on('click', '.station-card, .play-station-btn', function(e) {
        // If the play button was clicked, prevent the card click from firing
        if ($(e.target).closest('.play-station-btn').length) {
            e.stopPropagation();
        }
        
        // Get the station card (either this element or closest parent)
        const stationCard = $(this).closest('.station-card').length ? $(this).closest('.station-card') : $(this);
        const url = stationCard.data('url');
        const name = stationCard.data('name');
        
        if (!url) {
            console.error("Attempted to play station with no URL.");
            nowPlaying.text(`Error: No stream found for ${name}`);
            stationDisplayName.text("No stream available");
            return;
        }

        // Remove now-playing class from all stations and add to current
        $('.station-card').removeClass('now-playing');
        stationCard.addClass('now-playing');

        console.log(`Playing station: ${name}, URL: ${url}`);
        nowPlaying.text(name);
        stationDisplayName.text(name);
        
        // Ensure AudioContext is resumed if it was suspended
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                console.log('AudioContext resumed');
            });
        }
        
        // Ensure volume is properly set and not muted
        player.muted = false;
        player.volume = parseFloat(volumeSlider.val()) / 100;
        
        // Pause current playback and reset src
        player.pause();
        player.src = url;
        player.load();
        
        // Initialize audio visualization if first time playing
        setupAudioVisualization();
        
        setTimeout(() => {
            const playPromise = player.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playPauseBtn.html('<i class="fas fa-pause"></i>');
                    console.log("Playback started successfully");
                    
                    // Update the play button to pause icon on the station card
                    stationCard.find('.play-station-btn i').removeClass('fa-play').addClass('fa-pause');
                }).catch(error => {
                    console.error("Playback failed:", error);
                    nowPlaying.text(`Could not play: ${name}. Please try again or check browser permissions.`);
                    stationDisplayName.text("Playback error");
                    playPauseBtn.html('<i class="fas fa-play"></i>');
                });
            }
        }, 100);
    });// Optional: Add error handling for audio playback
    $('#radioPlayer').on('error', function(e) {
         console.error('Audio playback error:', this.error);
         console.log('Error code:', this.error.code);
         console.log('Current src:', this.src);
         $('#nowPlaying').text('Error playing station. Stream unavailable or format not supported.');
    });
    
    // Add canplay event to confirm when audio is actually ready
    $('#radioPlayer').on('canplay', function() {
        console.log('Audio is ready to play');
        console.log('Current volume:', this.volume);
        console.log('Muted status:', this.muted);
    });
    
    // Log when audio actually starts playing
    $('#radioPlayer').on('playing', function() {
        console.log('Audio has started playing');
    });
    
    // Check autoplay capability
    document.addEventListener('DOMContentLoaded', function() {
        navigator.mediaSession = navigator.mediaSession || {};
        if (navigator.userActivation && 'hasBeenActive' in navigator.userActivation) {
            console.log('User activation status:', navigator.userActivation.hasBeenActive);
        }
    });
});
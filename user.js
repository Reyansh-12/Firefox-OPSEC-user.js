// =============================================
// Firefox OPSEC user.js Configuration
// Privacy-focused with Cloudflare compatibility
// =============================================

// TELEMETRY & TRACKING DISABLEMENT
user_pref("app.normandy.enabled", false); // Disables Normandy user studies and surveys
user_pref("app.shield.optoutstudies.enabled", false); // Disables Shield opt-out studies
user_pref("browser.newtabpage.enabled", true); // Enables the new tab page (modified from original)
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // Disables "What's New" panel
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Disables content snippets on new tab
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Disables top sites on new tab
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false); // Disables system top sites
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Disables sponsored content
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Disables sponsored top sites
user_pref("browser.ping-centre.telemetry", false); // Disables Ping Centre telemetry
user_pref("browser.topsites.contile.enabled", false); // Disables Contile top sites
user_pref("browser.uitour.enabled", false); // Disables UI tour functionality
user_pref("datareporting.healthreport.uploadEnabled", false); // Disables health report uploads
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Disables data submission to Mozilla
user_pref("toolkit.telemetry.unified", false); // Disables unified telemetry collection
user_pref("extensions.pocket.enabled", false); // Disables Pocket integration

// PRIVACY ENHANCEMENTS
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // Enables fingerprinting protection
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // Enables cryptomining protection
user_pref("privacy.fingerprintingProtection", true); // Enables built-in fingerprinting protection
user_pref("privacy.resistFingerprinting", true); // Enables resistance to fingerprinting
user_pref("privacy.firstparty.isolate", true); // Isolates first-party contexts for better privacy
user_pref("privacy.query_stripping.enabled", true); // Strips tracking query parameters from URLs
user_pref("privacy.sanitize.sanitizeOnShutdown", true); // Clears private data on browser shutdown
user_pref("privacy.clearOnShutdown.cache", true); // Clears cache on shutdown
user_pref("privacy.clearOnShutdown.cookies", true); // Clears cookies on shutdown
user_pref("privacy.clearOnShutdown.history", true); // Clears history on shutdown
user_pref("privacy.clearOnShutdown.downloads", true); // Clears download history on shutdown

// COOKIES & TRACKING PROTECTION
user_pref("network.cookie.cookieBehavior", 5); // Blocks cross-site cookies and isolates others
user_pref("network.cookie.lifetimePolicy", 2); // Limits cookie lifetime to current session
user_pref("network.cookie.thirdparty.sessionOnly", true); // Makes third-party cookies session-only
user_pref("network.http.referer.XOriginPolicy", 2); // Sends referrer only on same-origin requests
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // Trims referrer to origin only

// SECURITY SETTINGS
user_pref("dom.security.https_first", true); // Enables HTTPS-First mode
user_pref("security.ssl.require_safe_negotiation", true); // Requires safe SSL negotiation
user_pref("security.insecure_connection_icon.enabled", true); // Shows icon for insecure connections
user_pref("security.insecure_connection_text.enabled", true); // Shows text warning for insecure connections

// CLOUDFLARE & WEBSITE COMPATIBILITY (IMPORTANT!)
user_pref("webgl.disabled", false); // Required for CAPTCHAs and modern web content
user_pref("dom.serviceWorkers.enabled", true); // Required for modern websites and PWAs
user_pref("dom.battery.enabled", true); // Required for bot protection systems
user_pref("media.peerconnection.enabled", true); // Required for WebRTC applications
user_pref("dom.enable_resource_timing", true); // Required for Cloudflare challenges
user_pref("javascript.options.ion", true); // Enables JIT compiler for better performance
user_pref("layers.acceleration.disabled", false); // Enables hardware acceleration

// PERFORMANCE OPTIMIZATIONS
user_pref("browser.cache.disk.enable", true); // Enables disk cache for better performance
user_pref("browser.cache.disk_cache_ssl", true); // Enables SSL content caching
user_pref("browser.cache.offline.enable", true); // Enables offline cache
user_pref("network.dns.disablePrefetch", false); // Enables DNS prefetching for faster loading
user_pref("network.predictor.enabled", false); // Disables network predictor for privacy

// ADDITIONAL PRIVACY SETTINGS
user_pref("browser.send_pings", false); // Disables anchor ping tracking
user_pref("beacon.enabled", false); // Disables beacon API for tracking
user_pref("geo.enabled", false); // Disables geolocation services
user_pref("browser.formfill.enable", false); // Disables form autofill
user_pref("signon.rememberSignons", false); // Disables password saving
user_pref("extensions.screenshots.disabled", true); // Disables screenshot functionality
user_pref("media.navigator.enabled", false); // Disables camera and microphone access
user_pref("dom.event.clipboardevents.enabled", false); // Disables clipboard event tracking
user_pref("webgl.enable-debug-renderer-info", false); // Disables WebGL debug info (fingerprinting protection)

// USER INTERFACE & EXPERIENCE
user_pref("browser.startup.page", 1); // Shows home page on startup
user_pref("browser.newtabpage.enabled", true); // Enables new tab page
user_pref("browser.startup.homepage", "about:home"); // Sets home page to Firefox default
user_pref("browser.sessionstore.privacy_level", 2); // Limits session restore data collection
user_pref("browser.urlbar.suggest.searches", false); // Disables search suggestions in address bar

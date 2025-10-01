# Firefox OPSEC user.js - Privacy Profile

A hardened Firefox configuration that balances maximum privacy with real-world website compatibility, specifically maintaining Cloudflare support.


## 🚀 Installation


### 1️⃣ **Locate your Firefox profile directory**

**Linux/macOS**
~/.mozilla/firefox/XXXXXXXX.default-release/

**Windows**
%APPDATA%\Mozilla\Firefox\Profiles\XXXXXXXX.default-release\

-

2️⃣ **Install the configuration**

cp user.js /path/to/your/firefox/profile/

-

3️⃣  **Restart Firefox**

Settings will apply automatically upon restart.

-

🔍 **Verification**

Open about:config in Firefox and verify preferences match the configuration.

-

✨ **Configuration Features**

    🛡️ Privacy-First: Telemetry disabled, fingerprinting protection enabled

    🌐 Cloudflare Compatible: WebGL, Service Workers, and WebRTC maintained

    🔒 Security Enhanced: HTTPS-First mode, secure connections only

    ⚡ Performance Optimized: Hardware acceleration, intelligent caching


*All settings are thoroughly commented in the user.js file.*

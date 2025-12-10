# Lavamusic - Ultimate Discord Music Bot

## 🔥🔥 ADD BOT TO YOUR SERVER NOW! 🔥🔥

<div align="center">

**[🎵 CLICK TO INVITE BOT 🎵](https://mintone.tech/invite)**

[![Discord](https://img.shields.io/badge/Discord-Invite-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://mintone.tech/invite)

</div>

---

Lavamusic is a powerful, feature-rich Discord music bot built with TypeScript and Discord.js. It offers seamless music playback, advanced filters, playlists, 24/7 support, and multilingual capabilities. Perfect for enhancing your Discord server with high-quality music experiences.

## ✨ Features

- 🎵 **Advanced Music System**: Reliable playback with Lavalink
- 🎚️ **12+ Audio Filters**: Bass Boost, Nightcore, Karaoke, and more
- 📜 **Playlists**: Create, load, and manage custom playlists
- 🌐 **Multilingual Support**: Over 15 languages included
- 🔄 **24/7 Music**: Keep your music playing around the clock
- 🎤 **Lyrics Support**: Fetch lyrics from Genius and other sources
- 🔍 **Powerful Search**: YouTube, Spotify, SoundCloud, and more
- 📊 **Rich Features**: Queues, skip, seek, autoplay, and volume control
- 🛡️ **Highly Configurable**: Prefix, DJ role, language, and more
- 🐳 **Docker Support**: Easy deployment with Docker Compose

## 🚀 Quick Setup

### Prerequisites

- **Node.js** 18 LTS or higher (download from [nodejs.org](https://nodejs.org))
- **Lavalink Server** v4 or higher (setup guide below)
- **Discord Bot Token** (from [Discord Developer Portal](https://discord.com/developers/applications))

### Step-by-Step Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/botxlab/lavamusic.git
cd lavamusic
```

#### 2. Install Dependencies
Choose your package manager:
```bash
# NPM
npm install

# PNPM
pnpm install

# Yarn
yarn install
```

#### 3. Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```env
TOKEN="your_bot_token_here"
CLIENT_ID="your_bot_client_id"
OWNER_IDS=["your_discord_id"]
DATABASE_URL="file:./lavamusic.db"  # SQLite (default) or PostgreSQL URL
```

#### 4. Setup Lavalink Server
```bash
cp Lavalink/example.application.yml Lavalink/application.yml
```

Download plugins if needed (optional, but enables extra sources):
```bash
# Create plugins directory
mkdir Lavalink/plugins

# Download plugins from maven.lavalink.dev if you want YouTube, Spotify, etc.
# Instructions in Lavalink/example.application.yml
```

Run Lavalink (replace with your Java JAR or use Docker):
```bash
cd Lavalink
java -jar lavalink.jar  # Use your Lavalink JAR
```

Lavalink runs on `localhost:2333` by default.

#### 5. Run Database Setup
For SQLite (default):
```bash
npm run generate
npm run push
```

For PostgreSQL, ensure DATABASE_URL points to your DB.

#### 6. Build and Start the Bot
```bash
npm run build
npm start
```

#### 7. Invite the Bot
Invite Lavamusic to your server with this link 🔥:
**[Invite Now](https://mintone.tech/invite)**

Or manually create: `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=279209954560&scope=bot`

#### 8. Deploy Slash Commands (Optional)
In your Discord server, run `!deploy` or `/deploy`

## 🐳 Docker Setup (Easier!)

If you prefer Docker:

1. Ensure Docker and Docker Compose are installed.

2. Copy configs:
```bash
cp .env.example .env
cp Lavalink/example.application.yml Lavalink/application.yml
```

3. Edit `.env` with your token and settings.

4. Run everything:
```bash
docker compose up -d
```

That's it! The bot and Lavalink will start automatically with PostgreSQL.

To update:
```bash
docker compose pull
docker compose up -d --force-recreate
```

## 🎵 Usage

### Basic Commands
- `/play <song>` - Play music
- `/queue` - View current queue
- `/skip` - Skip to next track
- `/volume <0-100>` - Adjust volume
- `/lyrics` - Get current song lyrics

### Advanced Features
- **Filters**: `/BassBoost`, `/Nightcore`, `/8d`
- **Playlists**: `/playlist create`, `/playlist load`
- **Settings**: `/config prefix !`, `/config language en`

See all commands with `/help`

## 🔧 Configuration

### Environment Variables (.env)
- `TOKEN`: Your bot token
- `PREFIX`: Command prefix (default: `!`)
- `DEFAULT_LANGUAGE`: Bot language (default: `EnglishUS`)
- `DATABASE_URL`: DB connection (SQLite or PostgreSQL)
- `OWNER_IDS`: Array of owner Discord IDs
- `NODES`: Lavalink node configurations
- And many more in `.env.example`

### Lavalink Config
Edit `Lavalink/application.yml` for sources, plugins, and settings.

## 🦊 Support Sources

**Default**: SoundCloud, Twitch, Bandcamp, Vimeo, Nico, etc.

**With Plugins** (add to Lavalink):
- YouTube, Spotify, Deezer, Apple Music, Tidal: Requires [LavaSrc](https://github.com/topi314/LavaSrc)
- And more with community plugins.

## 📝 Developer Info

- **Language**: TypeScript
- **Libraries**: Discord.js, Lavalink-Client, Drizzle ORM
- **Database**: SQLite (default) or PostgreSQL/MySQL
- **License**: GPL-3.0

### Building from Source
```bash
npm run build  # Build with tsup
npm run start  # Run built version
npm run dev    # Development with hot reload
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make changes and test
4. Submit a PR

## 📞 Support

- **[Invite Our Bot](https://mintone.tech/invite)** 🔥
- [FAQ](https://github.com/botxlab/lavamusic/wiki)
- [Issues](https://github.com/botxlab/lavamusic/issues)
- [Discord Server](https://discord.gg/botxlab)

## ⭐ Star Us

If you enjoy Lavamusic, give us a star! 🌟

## 📜 License

GPL-3.0 License. See [LICENSE](LICENSE) for details.

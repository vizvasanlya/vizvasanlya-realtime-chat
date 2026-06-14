# Realtime Team Chat

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Coordinate team conversations with room status, moderation signals, message health, and decision tracking.

## Features

- **Room Management** — Create and manage chat rooms by topic
- **Message Threading** — Organize conversations with context
- **Status Signals** — Track room health and activity levels
- **Moderation Tools** — Flag and manage message quality
- **Decision Tracking** — Log and follow up on team decisions
- **Search & Filter** — Find messages by room, sender, or content
- **Analytics View** — Activity distribution and engagement insights
- **Import / Export** — JSON-based chat data portability

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES2022) |
| Storage | LocalStorage |
| Server | Python HTTP server (dev) |

## Getting Started

### Prerequisites

- Python 3.x (for dev server)
- Modern web browser

### Installation

```bash
git clone https://github.com/vizvasanlya/First.git
cd First/vizvasanlya-realtime-chat
```

### Run

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173)

### Docker

```bash
docker compose up --build
```

## License

MIT

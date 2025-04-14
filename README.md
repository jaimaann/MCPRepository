# MCPRepository

<p align="center">
  <img src="public/icons/icon-192X192.png" alt="MCPRepository Logo" width="200"/>
</p>

Open Source Repository for ModelContextProtocol MCP server

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

MCPRepository is an open-source Next.js project designed to centralize MCPServes. The key tenets of this project include:

- Easing the discovery of MCP Servers
- Simplifying the process of listing MCP Servers
- Streamlining the installation of MCP Servers


## Demo

Visit the live demo at [https://mcprepository.net/](https://mcprepository.net)

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MCPRepository.git
   cd MCPRepository
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Development

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

```bash
npm run start
# or
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
MCPRepository/
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages and layouts
│   ├── components/     # Reusable React components
│   ├── styles/         # Global styles
│   └── lib/            # Utility functions and helpers
├── .env.local          # Environment variables (create this file)
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Roadmap

Our vision for MCPRepository includes:

### Short-term Goals (Next 3 months)
- [ ] Implement ratings and comments section for MCP Servers
- [ ] Create user profiles, siging and signup
- [ ] Implement category
- [ ] Implement Easy Installation Guide

### Medium-term Goals (3-6 months)
- [ ] Implement a desktop app to install/uninstall MCPServers with one click


## How to Contribute

We welcome contributions from everyone! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add unit tests for new features
- Update documentation as needed
- Make sure all tests pass before submitting PRs

### Issues and Bug Reports

- Use the GitHub Issues tab to report bugs or request features
- Use clear and descriptive titles
- Provide detailed steps to reproduce any bugs
- Suggest possible solutions if you have ideas

### Code of Conduct

Please be respectful and inclusive when contributing to this project. We expect all contributors to adhere to our code of conduct, which promotes a welcoming and harassment-free experience for everyone.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [React](https://reactjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by mcprepository.net

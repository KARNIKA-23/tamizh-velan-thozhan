# Tamizh Velan Thozhan

A modern agriculture support platform designed for Tamil-speaking farmers. This project provides a voice-first, AI-assisted experience for crop guidance, weather updates, pest control advice, market prices, and agricultural support resources.

## Overview

Tamizh Velan Thozhan helps farmers make informed decisions through a user-friendly interface that simplifies access to agricultural knowledge and recommendations. The app is built as a responsive frontend experience using React and Tailwind CSS.

## Features

- Voice-enabled agricultural assistance
- Crop recommendation guidance based on local conditions
- Weather and irrigation planning support
- Pest and disease management advice
- Market price tracking for crops
- Government scheme and subsidy information
- Expert consultation and farmer support resources
- Mobile-friendly layout for field use

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide Icons

## Project Structure

```bash
src/
├── assets/
├── components/
│   ├── ui/
│   ├── AgricultureInfo.tsx
│   ├── CropRecommendation.tsx
│   ├── FeatureCard.tsx
│   ├── Features.tsx
│   ├── Hero.tsx
│   ├── MarketPrices.tsx
│   ├── PrototypeShowcase.tsx
│   ├── VoiceAssistant.tsx
│   ├── VoiceDemo.tsx
│   └── WeatherWidget.tsx
├── hooks/
├── lib/
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 
- npm or bun

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will start in development mode and is usually available on:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview build locally

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Notes

This repository currently contains the frontend interface and presentation layer for the agriculture platform. Additional backend integration, real AI APIs, and data sources can be connected as the product evolves.

## License

This project does not currently include a license file. Add one if you want to publish it publicly.

## Author

Built for agricultural innovation and farmer support.

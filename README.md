# AgentForge

**AgentForge** is an enterprise-grade agricultural management dashboard designed for farm managers, agronomists, and greenhouse operators. It provides a clean, professional interface for monitoring crop health, triaging field issues, and analyzing environmental sensor data.

## Features

- 📊 **Dashboard Overview**: Get a single-glance summary of active field alerts, average humidity, leaf wetness, and a log of recent crop inspections.
- 🔬 **Scan & Diagnose**: A functional interface for reviewing plant specimen diagnostics (e.g., Late Blight), providing confidence scores, visible signs, and a step-by-step agronomic action plan.
- 🌡️ **Sensors & Weather**: Real-time environmental tracking utilizing interactive SVG trend lines (temperature, humidity) alongside individual IoT LoRa sensor node statuses and battery life.
- 🗺️ **Field Map**: An interactive, row-by-row crop health grid map. Visually identify healthy, watch, and critical zones within the greenhouse or field, with detailed sidebar metrics for each plot.
- 💬 **Agent Chat**: A dedicated interface for conversing with the AgentForge AgroLLM to ask about pathogen symptoms, microclimate stress, and best practices.
- 🌓 **Light & Dark Mode**: Full thematic support out-of-the-box. Easily toggle between a crisp snow-white interface and a professional dark slate mode using semantic Tailwind CSS variables.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   \`\`\`bash
   cd AgentForce-IBM
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and navigate to \`http://localhost:3000\`.

## Building for Production

To create a production-ready build, run:
\`\`\`bash
npm run build
\`\`\`
This will optimize the assets and generate the output in the \`dist\` directory.

## License

This project is licensed under the MIT License.


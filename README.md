# Interview App

This is a demo Retell AI Web Call Frontend setup with Next.js project for handling calls.

![Example Frontend](frontend-example.png)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zarifaziz/retell-ai-nextjs-frontend.git
   cd retell-ai-nextjs-frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root of the project and add your environment variables:
   ```env
   RETELL_AI_AGENT_ID=
   RETEL_AI_API_KEY=
   CALL_BACKEND_URL=
   ```

### Running the Development Server

Start the development server:
```
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Components

- **CallButton**: A button to start/stop the call.
- **CallStatus**: Displays the current status of the call.
- **ThankYouMessage**: A message displayed after the call ends.

### Styling

- **globals.css**: Contains global styles and Tailwind CSS configurations.
- **Home.module.css**: Contains styles specific to the Home page.

### Deployment

To deploy this project on Vercel:

1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Click on "New Project" and import your GitHub repository.
4. Follow the prompts to deploy your Next.js app.

### Environment Variables

Ensure you add the necessary environment variables in the Vercel dashboard:

1. Go to your project in the Vercel dashboard.
2. Navigate to the "Settings" tab.
3. Click on "Environment Variables".
4. Add the environment variable `NEXT_PUBLIC_AGENT_ID` with the appropriate value.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Retell AI](https://retell.ai/)


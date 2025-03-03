🚀 XOrithm Server Status Dashboard
A Next.js application for monitoring server statuses, allowing users to filter and sort them dynamically.

📌 Features
✅ Authentication (NextAuth.js with Google, Facebook, and Credentials)
✅ Server Status Dashboard (Displays servers with color-coded status)
✅ Filtering & Sorting (By status and response time)
✅ Detailed Server View (Name, IP, response time, uptime)
✅ Mock API (Static server data for demonstration)
✅ Tailwind CSS for responsive UI
✅ Optimized for Deployment on Vercel
📂 Project Structure
bash
Copy
Edit
/xorithm-assignment
│── /app
│   ├── /api (API routes for authentication and mock servers)
│   ├── /components (Reusable UI components)
│   ├── /dashboard (Main dashboard page)
│── /lib (Utilities and helper functions)
│── /public (Static assets)
│── /styles (Global styles)
│── next.config.js (Next.js configuration)
│── tailwind.config.js (Tailwind setup)
│── package.json (Project dependencies)
│── README.md (Project documentation)
🛠️ Installation & Running Locally
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/hassanRushdi/xorithm-assignment.git
cd xorithm-assignment
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env.local file in the root directory and add the following:

sh
Copy
Edit
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
4️⃣ Run the Development Server
sh
Copy
Edit
npm run dev
Localhost URL: http://localhost:3000

📝 Implementation & Design Choices
🔹 Authentication
Implemented with NextAuth.js for email/password and social logins.
Uses OAuth for Google and Facebook authentication.
Secure authentication flow with session handling.
🔹 Data Handling
Mock API simulates fetching real-time server data.
React Query optimizes fetching, caching, and updating server data.
🔹 UI & Styling
Tailwind CSS ensures a clean and responsive design.
Interactive UI with hover effects and status color indicators.
🔹 Filtering & Sorting
Dropdown for filtering servers by status (Up, Down, Degraded).
Sorting options for name and response time.

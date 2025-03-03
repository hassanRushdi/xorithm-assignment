# 🚀 XOrithm Server Status Dashboard

A Next.js application for monitoring server statuses, featuring authentication, filtering, and sorting.

## 📌 Features
- **User Authentication** (NextAuth.js: Google, Facebook, Credentials)
- **Server Status Monitoring** (Mock API with real-time status updates)
- **Filtering & Sorting** (By status, name, response time)
- **Detailed Server View** (Name, IP, response time, uptime)
- **Tailwind CSS** for a modern UI
- Optimized for Deployment on **Vercel**

## 📂 Project Structure
```
/xorithm-assignment
│── /app
│   ├── /api            # API routes (authentication, mock servers)
│   ├── /components     # Reusable UI components
│   ├── /dashboard      # Main dashboard page
│── /lib                # Utilities and helper functions
│── /public             # Static assets
│── /styles             # Global styles
│── next.config.js      # Next.js configuration
│── tailwind.config.js  # Tailwind setup
│── package.json        # Project dependencies
│── README.md           # Project documentation
```

## 🛠️ Installation & Setup
1. **Clone the Repository**
    ```sh
    git clone https://github.com/hassanRushdi/xorithm-assignment.git
    cd xorithm-assignment
    ```
2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Run the Development Server**
    ```sh
    npm run dev
    ```
    Local URL: [http://localhost:3000](http://localhost:3000)

## 📝 Implementation & Design Choices
### 🔹 Authentication
- Implemented with NextAuth.js for email/password and social logins.
- Uses OAuth for Google and Facebook authentication.
- Secure session handling with JWT.

### 🔹 Data Handling
- Mock API simulates fetching real-time server data.
- React Query optimizes fetching, caching, and updating server data.

### 🔹 UI & Styling
- Tailwind CSS for a responsive and modern design.
- Interactive UI with hover effects and color-coded status badges.

### 🔹 Filtering & Sorting
- Dropdown filtering (Up, Down, Degraded).
- Sorting by name or response time.

# PeopleAtlas - User Management Dashboard

A modern, responsive User Management Dashboard built with React.js. The application fetches data from an external API and provides a beautiful interface for viewing, searching, and sorting through a directory of users.

## 🚀 Features Implemented

- **Directory Overview:** View a list of users fetched dynamically from `jsonplaceholder.typicode.com`.
- **Search Functionality:** Filter the directory by name with a live, case-insensitive search bar.
- **Sorting:** Easily sort users alphabetically (A → Z or Z → A) by name.
- **Pagination:** Client-side pagination cleanly splits the directory into manageable pages (4 users per page).
- **Persistent State:** Search queries, sorting preferences, and pagination state are preserved when navigating back and forth between profiles.
- **Detailed User Profiles:** Click on any user to view an expanded profile card featuring their contact information, location, company details, and website.
- **Dark / Light Theme:** Toggle between a light and dark UI via the header button. The application automatically respects your system's default preference on initial load.
- **Responsive Design:** Optimized for seamless viewing across mobile, tablet, and desktop screens.
- **Sticky Header:** The navigation bar remains anchored to the top of the screen while scrolling through long lists.

## 🛠️ Technologies Used

- **React.js** (Functional Components & Hooks: `useState`, `useEffect`, `useContext`, `useMemo`)
- **React Router v6** (For seamless client-side navigation)
- **Vite** (Next-generation frontend tooling for rapid development)
- **Context API** (For centralized state management covering theme and user data)
- **Vanilla CSS** (Custom design system utilizing CSS variables for theme toggling)

## 📋 Setup Instructions

Follow these steps to run the application locally on your machine:

1. **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

2. **Clone / Navigate to the Directory:**
   Open your terminal and navigate to the project directory:
   ```bash
   cd "User Management Dashboard"
   ```

3. **Install Dependencies:**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   Launch the app in your local development environment:
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

## 🌐 Live Deployment

*(If deployed, replace this section with the actual URL. e.g., `https://your-app-name.vercel.app`)*

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Header, SearchBar, UserCard, etc.)
├── context/          # Context API providers (UserContext, ThemeContext)
├── pages/            # Main route views (HomePage, UserDetailPage)
├── App.jsx           # Root component containing routing
└── index.css         # Global styles and CSS variables
```

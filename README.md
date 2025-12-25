# ByteForger Solutions

ByteForger is a modern, responsive enterprise software solutions website built with React, TypeScript, and Tailwind CSS. It showcases services, methodology, portfolio, and contact information for a digital transformation agency.

## 🚀 Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS, Framer Motion (for animations)
-   **Backend**: Node.js, Express
-   **Database**: PostgreSQL with Drizzle ORM
-   **Email Service**: Resend
-   **Deployment**: Ready for Vercel/Render

## 🛠️ Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd ByteForger
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory (if not exists) and add necessary keys:
    ```env
    DATABASE_URL=postgresql://...
    RESEND_API_KEY=re_...
    ```

4.  **Run Development Server**:
    Start both client and server concurrently:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5000`.

## 📁 Project Structure

-   `client/`: Frontend React application.
    -   `src/pages`: Main route components (Home, Contact, etc.).
    -   `src/components`: Reusable UI components (Navbar, Footer, etc.).
    -   `src/lib`: Utilities and constants.
-   `server/`: Backend Express server.
    -   `routes.ts`: API routes.
    -   `services/`: Business logic (e.g., Email service).
-   `shared/`: Shared types and schemas (Zod).
-   `attached_assets/`: Static assets (images, logos).

## ✨ Key Features

-   **Dynamic Animations**: Powered by Framer Motion.
-   **Responsive Design**: Fully responsive layout for Mobile, Tablet, and Desktop.
-   **Contact Form**: integrated with Resend for email notifications.
-   **Dark Mode**: Native support for light and dark themes.
-   **SEO Optimized**: Dynamic meta tags and JSON-LD schema markup.

## 📜 Scripts

-   `npm run dev`: Start development server.
-   `npm run build`: Build the application for production.
-   `npm start`: Start the production server.
-   `npm run db:push`: Push Drizzle schema changes to the database.

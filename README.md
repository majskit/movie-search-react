# 🎬 Movie Search Application

A React-based movie search application utilizing the TMDB API. Users can browse trending movies, search by title, and view detailed information including cast and reviews. The application features a responsive UI with a futuristic design.

## 🔧 Technologies Used

- **Frontend:** React, HTML5, CSS3, JavaScript
- **Build Tool:** Vite 6.3.5
- **API:** TMDB API
- **Routing:** React Router
- **Forms:** Formik
- **Deployment:** Vercel
- **Tools:** Git, GitHub

## 🌟 Features

- **Browse Trending Movies:** View the latest popular movies on the home page.
- **Search Functionality:** Search for movies by title with real-time navigation to results page.
- **Detailed Information:** Access comprehensive details about each movie, including cast and reviews.
- **Dynamic Navigation:** Navigation bar displays contextual page titles (Home, Search Results, Movie Details).
- **Responsive Design:** Optimized for various screen sizes and devices with a modern, futuristic interface.
- **User-Friendly Navigation:** Clean separation between home page and search results.
- **Smooth Scrolling:** Global smooth scroll behavior for enhanced user experience.

## 🏗️ Application Structure

- **Home Page (`/`):**

  - Displays trending movies
  - Features a search form
  - When searching, navigates to search results page

- **Search Results Page (`/movies`):**

  - Shows search results based on query parameter
  - Includes back-to-home navigation
  - Displays "no results" message when appropriate

- **Movie Details Page (`/movies/:id`):**
  - Detailed movie information
  - Cast and reviews tabs
  - Back navigation to previous page

## 🔮 Future Enhancements

### 🎯 **Planned Features:**

- **User Authentication:** Login/register system with personalized movie lists
- **Watchlist & Favorites:** Save movies to personal collections with local storage
- **Advanced Filtering:** Filter by genre, year, rating
- **Movie Recommendations:** AI-powered suggestions based on viewing history
- **Dark/Light Theme Toggle:** Switch between multiple visual themes
- **Offline Support:** Cache data for offline browsing with Service Workers

# 🛍️ FreeAPI Product Listing Interface

A modern React-based product listing application built using the FreeAPI random products endpoint. The app displays products in a clean, responsive grid with safe API handling, fallback images, and a smooth UI experience.

---

## 📂 GitHub Repository
Add your repository link here

---

## 📌 Features

- 📦 Fetches products from FreeAPI
- 🖼️ Robust image handling with fallback support
- ⚡ Loading and error states
- 📱 Fully responsive grid layout
- 🧠 Safe nested API response handling
- 🎨 Clean and modern card-based UI

---

## 🔗 API Used

https://api.freeapi.app/api/v1/public/randomproducts

Returns:
- Product title
- Price
- Category
- Thumbnail images
- Additional product details

---

## 🧱 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (Custom styling)
- Fetch API

---

## 📁 Project Structure

src/
├── components/
│   └── ProductCard.jsx
├── pages/
│   └── Home.jsx
├── services/
│   └── api.js
├── styles.css
├── App.jsx
└── main.jsx

---

## ⚙️ How It Works

- App loads and triggers API request on mount
- Data is fetched from FreeAPI endpoint
- Response is validated and parsed safely
- Products are stored in React state
- Each product is rendered using ProductCard component
- Image fallback prevents broken UI
- Responsive grid displays products neatly

---

## 🧠 Key Learnings

- Handling nested API responses safely
- Defensive image rendering strategies
- React hooks (useEffect, useState)
- Component-based architecture
- Error handling in async operations
- UI resilience against external API failures

---

## 🛠️ Setup Instructions

Clone the repository:
git clone https://github.com/your-username/product-listing-app.git

Install dependencies:
npm install

Run development server:
npm run dev

---

## 📸 UI Preview

<img width="1260" height="957" alt="Screenshot 2026-05-05 191641" src="https://github.com/user-attachments/assets/3ea936ba-b6e8-4679-9929-acf34212e058" />


---

## ⚠️ Notes

- Some product images may fail due to external CDN issues
- Fallback image ensures UI never breaks
- API structure is nested: data.data.data
- Image reliability depends on external hosting

---

## 📤 Submission Checklist

- Live project deployed
- GitHub repo public
- API integrated successfully
- Responsive UI implemented
- Error handling included

---

## 👨‍💻 Author

Built as part of ChaiCode Web Dev Cohort 2026. 

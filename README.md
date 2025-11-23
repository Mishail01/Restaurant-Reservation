# Restaurant Reservation System

A full-stack restaurant reservation application built with React, Node.js, Express, and MongoDB. This modern web application allows customers to browse the restaurant's menu, learn about the team, and make table reservations online.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Menu**: Browse through various food dishes categorized by meal type
- **Team Showcase**: Meet the restaurant's culinary team
- **Online Reservations**: Easy-to-use reservation form with real-time validation
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Toast Notifications**: Real-time feedback for user actions
- **Modern UI**: Clean and elegant design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM** - Client-side routing
- **React Scroll** - Smooth scrolling navigation
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **MongoDB** - Database
- **Mongoose 8.0.2** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Validator** - Data validation
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd restaurant-reservation
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `config.env` file in `backend/config/` directory:
```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/restaurant_reservation
FRONTEND_URL=http://localhost:5173
```

Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:4000`

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend application will run on `http://localhost:5173`

## 📁 Project Structure
```
restaurant-reservation/
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controller/
│   │   └── reservation.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── middlewares/
│   │   └── error.js
│   ├── models/
│   │   └── reservation.js
│   ├── routes/
│   │   └── reservationRoute.js
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WhoAreWe.jsx
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   │   └── Home.jsx
│   │   │   ├── NotFound/
│   │   │   │   └── NotFound.jsx
│   │   │   └── Success/
│   │   │       └── Success.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── restApi.json
│   └── package.json
│
└── README.md
```

## 🎯 API Endpoints

### Reservations
- **POST** `/api/v1/reservation/send` - Create a new reservation
  - Body: `{ firstName, lastName, email, phone, date, time }`

## 🎨 Features in Detail

### Home Page Sections
1. **Hero Section** - Eye-catching hero with restaurant branding
2. **About Us** - Information about the restaurant's philosophy
3. **Qualities** - Key features (Quality Food, Super Taste, Fast Delivery)
4. **Menu** - Display of popular dishes
5. **Who Are We** - Statistics about the restaurant
6. **Team** - Meet the chefs
7. **Reservation** - Online booking form
8. **Footer** - Contact information and credits

### Reservation Form
- First Name & Last Name validation (3-30 characters)
- Email validation
- Phone number validation (11 digits)
- Date and time selection
- Success page with automatic redirect

## 🔧 Configuration

### Database Schema
The reservation model includes:
- `firstName` (String, required, 3-30 chars)
- `lastName` (String, required, 3-30 chars)
- `email` (String, required, validated)
- `phone` (String, required, 11 digits)
- `date` (String, required)
- `time` (String, required)

## 📱 Responsive Breakpoints

- Desktop: 1500px+
- Laptop: 1200px - 1500px
- Tablet: 768px - 1200px
- Mobile: Below 768px

## 🎭 Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start server
npm run dev      # Start server with nodemon
```

## 🌐 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 4000)
- `MONGO_URI` - MongoDB connection string
- `FRONTEND_URL` - Frontend URL for CORS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**MISHAIL01**

## 🙏 Acknowledgments

- React community for amazing tools and libraries
- MongoDB for the robust database solution
- All contributors and supporters

---

**Note**: This is a demonstration project. For production use, please ensure proper security measures, environment variable protection, and additional validation.

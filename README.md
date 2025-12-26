🚀 DeVCONN – A Social Networking Platform for Developers

DevTinder is a full-stack MERN application inspired by Tinder, built specifically for developers to connect, chat, and network.
It supports authentication, real-time chat, connection requests, premium memberships, and secure payments.

🛠 Tech Stack

Frontend
	•	⚛️ React (Vite)
	•	🧠 Redux Toolkit
	•	🔁 React Router v6
	•	🎨 Tailwind CSS + DaisyUI
	•	🌐 Axios
	•	🔌 Socket.IO Client

Backend
	•	🟢 Node.js
	•	🚀 Express.js
	•	🍃 MongoDB + Mongoose
	•	🔐 JWT Authentication
	•	🍪 Cookie-based sessions
	•	🔌 Socket.IO
	•	💳 Razorpay Payment Gateway
	•	☁️ AWS SES (Email service)
	•	⏰ Node Cron Jobs

⸻

✨ Features

🔐 Authentication
	•	User Signup & Login
	•	Password hashing using bcrypt
	•	JWT-based authentication with cookies

👤 Profile Management
	•	View & edit profile
	•	Upload profile photo via URL
	•	Gender, age, about section
	•	Input validation

🤝 Connections
	•	Send connection requests
	•	Accept / Reject requests
	•	View connections list
	•	Smart feed (no repeated users)

💬 Real-Time Chat
	•	One-to-one private chat
	•	Socket.IO powered
	•	Messages stored in MongoDB
	•	Secure room creation using hashing

💎 Premium Membership
	•	Silver & Gold plans
	•	Razorpay order creation
	•	Secure webhook handling
	•	Premium verification API

📧 Email Notifications
	•	Automated daily cron job
	•	Sends email reminders for pending requests


📂 Project Structure
DevTinder/
│
├── DEVTINDER-WEB-MAIN/        # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── DEVTINDER-MAIN/            # Backend (Node + Express)
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── utils/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── .env
│   └── package.json

⚙️ Environment Variables

PORT=7777
DB_CONNECTION_SECRET=mongodb://127.0.0.1:27017/devtinder
JWT_SECRET=DEV@Tinder$790

RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxxxx

AWS_ACCESS_KEY=xxxxxxxxxx
AWS_SECRET_KEY=xxxxxxxxxx

▶️ How to Run the Project

1️⃣ Start MongoDB
mongod

2️⃣ Start Backend
cd DEVTINDER-MAIN
npm install
npm start

3️⃣ Start Frontend
cd DEVTINDER-WEB-MAIN
npm install
npm run dev

🔌 API & Socket Integration
	•	REST APIs for authentication, profile, feed, requests, payments
	•	Socket.IO used for:
	•	Joining chat rooms
	•	Sending & receiving messages in real time

🧪 Validation & Security
	•	Strong password validation
	•	Mongoose schema validation
	•	Protected routes using middleware
	•	Enum-safe fields (e.g., gender)
	•	Secure payment webhook verification

📌 Future Enhancements
	•	Profile image upload (Cloudinary)
	•	Push notifications
	•	Group chats
	•	Pagination in chat
	•	Admin dashboard
	•	Deployment using Docker & AWS

👨‍💻 Author

Navjot Kumar Singh
Computer Science Engineer
Full Stack Developer (MERN)


⭐ If you like this project

Give it a ⭐ and feel free to contribute!

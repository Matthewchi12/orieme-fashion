# Orieme Matthew Fashion Store
Premium full-stack e-commerce fashion platform.

## Tech Stack
- Frontend: React.js + Vite + Tailwind CSS + Framer Motion
- Backend: Node.js + Express.js + MongoDB + JWT
- Payments: Paystack, Flutterwave, Bank Transfer
- Deployment: Vercel (frontend), Render (backend)

## Color Theme
- Black: #000000
- White: #FFFFFF  
- Gold: #D4AF37

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI, JWT_SECRET, Paystack keys
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Admin Setup
- Create first admin: POST /api/auth/register with role: "admin"
- Or use seed script: npm run seed
- Login at /admin

Default Admin:
Email: admin@orieme.com
Password: Admin123!

## Features Implemented
✓ All 10 pages ✓ JWT auth ✓ Cart & Wishlist ✓ Paystack/Flutterwave ✓ Bank transfer with proof upload ✓ Admin dashboard ✓ Order tracking ✓ Mobile responsive ✓ Dark mode ✓ SEO ready

# Setup Guide - Marketing Property Tools

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.0 or higher)
- npm or yarn

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/royalfredom-bit/royalfredom.git
cd royalfredom
```

### 2. Install Dependencies
```bash
pm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- MongoDB connection string
- Cloudinary credentials (image storage)
- Stripe API keys (payment processing)
- Email configuration (Gmail or SMTP)
- JWT secret key

### 4. Start MongoDB
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env with your Atlas connection string
```

### 5. Run the Server
```bash
# Development mode (with auto-reload)
pm run dev

# Production mode
npm start
```

Server will run on `http://localhost:3000`

## API Endpoints

### Properties
- `GET /api/properties` - List all properties
- `POST /api/properties` - Create new property
- `GET /api/properties/:id` - Get property details
- `PUT /api/properties/:id` - Update property
- `GET /api/properties/search/:query` - Search properties
- `GET /api/properties/trending/all` - Get trending properties

### Leads
- `GET /api/leads` - List all leads
- `POST /api/leads` - Create new lead
- `GET /api/leads/:id` - Get lead details
- `PATCH /api/leads/:id/status` - Update lead status
- `PATCH /api/leads/:id/assign` - Assign to agent
- `POST /api/leads/:id/send-email` - Send follow-up email
- `GET /api/leads/priority/high` - Get high priority leads

### Analytics
- `GET /api/analytics/dashboard/metrics` - Dashboard metrics
- `GET /api/analytics/property/:propertyId` - Property analytics
- `GET /api/analytics/agent/:agentId` - Agent performance
- `GET /api/analytics/sources/analysis` - Lead source analysis
- `GET /api/analytics/campaign/:campaignId` - Campaign analytics

### Campaigns
- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create campaign
- `PUT /api/campaigns/:campaignId` - Update campaign
- `POST /api/campaigns/:campaignId/launch` - Launch campaign

### Listings
- `GET /api/listings` - Get all listings
- `GET /api/listings/type/:propertyType` - Filter by type
- `GET /api/listings/location/:city` - Filter by location

### Tours
- `POST /api/tours` - Create virtual tour
- `GET /api/tours/property/:propertyId` - Get tour by property

### Emails
- `POST /api/emails/campaign` - Send email campaign
- `GET /api/emails/templates` - Get email templates
- `POST /api/emails/templates` - Create template

### Users
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login
- `GET /api/users/profile/:userId` - Get profile
- `PUT /api/users/profile/:userId` - Update profile

## Testing

Run tests with:
```bash
npm test
```

## Deployment

### Using Heroku
```bash
heroku login
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongo_uri
git push heroku main
```

### Using Docker
```bash
docker build -t marketing-property-tools .
docker run -p 3000:3000 -e MONGODB_URI=mongodb://mongo:27017/marketing marketing-property-tools
```

## Features Implemented

✅ Property Management
✅ Lead Management
✅ Campaign Management
✅ Analytics & Reporting
✅ Email Integration
✅ Virtual Tours Support
✅ Image Management (Cloudinary)
✅ RESTful API

## Features to Implement

- User Authentication (JWT)
- Social Media Integration
- Advanced Analytics Dashboard
- Payment Processing (Stripe)
- Admin Panel
- Mobile App
- Real-time Notifications
- AI-powered Lead Scoring

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify database credentials

### Port Already in Use
```bash
# Use a different port
PORT=3001 npm start
```

### Missing Dependencies
```bash
npm install
npm audit fix
```

## Support

For issues and questions, please create an issue in the repository.
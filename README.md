# Medicine Reminder Application

The Medicine Reminder application allows users to set reminders for taking their medicines. The reminders are sent as SMS notifications to the user's phone at the specified time.

## Features

- Schedule SMS reminders for taking medicines.
- Form validation for phone number input.
- Real-time scheduling and notification using Node.js and Twilio.
- Dockerized setup for easy deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- Docker installed on your machine.
- A Twilio account with SMS capabilities (Trial or Paid).
- Git installed on your machine.

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/yourusername/medicine-reminder.git
cd medicine-reminder
```

## Set Up Environment Variables
Create a .env file in the backend directory and add your Twilio credentials:

```bash
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

## Build and Run Docker Containers
Use Docker Compose to build and run the containers:
```bash
docker-compose up --build
```

## This will start the frontend on port 8080 and the backend on port 3000.


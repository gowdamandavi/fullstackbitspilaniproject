README.md for School Vaccination Portal (GitHub)

# 🚀 School Vaccination Portal

A full-stack web application to manage and track vaccination drives in a school environment. This system allows school coordinators to manage student records, schedule vaccination drives, update vaccination statuses, and generate reports.

---

## 🌐 **Live Demo:**  
- Frontend (React): [Vercel Deployment Link]  
- Backend (Node.js + MongoDB): [Render/Heroku Deployment Link]  
- API Documentation: [Swagger/Postman Collection Link]  

---

## 📌 **Project Features:**  
### ✅ **Authentication:**
- Simulated Login (JWT Authentication).
- Only school coordinators (admin) can access the dashboard.

### ✅ **Dashboard Overview:**
- Key Metrics: Total Students, Vaccinated Students, Upcoming Drives.
- Quick Navigation Links: Students, Drives, Reports.

### ✅ **Student Management:**
- Add/Edit/Delete Student Records.
- Bulk CSV Upload for Student Data.
- Search and Filter by Name, Class, Vaccination Status.

### ✅ **Vaccination Drive Management:**
- Create/Edit/Delete Drives.
- Schedule Drives (15 days in advance).
- Prevent Duplicate Drives.
- Edit Drives (Future Dates Only).

### ✅ **Reports:**
- Generate Custom Reports (Filter by Vaccination Status).
- Download Reports in CSV/Excel/PDF format.

---

## 🚀 **Tech Stack:**
### 🌐 **Frontend:**  
- React.js (React Router, Context API, Axios)
- CSS (Responsive Design)

### ⚡ **Backend:**  
- Node.js + Express.js (REST APIs)
- JWT Authentication (Simulated)
- CSV Upload (Multer)
- MongoDB (Database)

### 🌐 **Database:**  
- MongoDB (MongoDB Atlas for Cloud)

---

## ⚡ **Project Architecture:**
+---------------------+ +-----------------------+
| React Frontend | <----> | Node.js Backend |
| (Login, Dashboard, | | (APIs: Auth, Student,|
| Student, Drives) | | Drives, Dashboard) |
+---------------------+ +-----------------------+
|
|
+----------------+
| MongoDB (Atlas) |
+----------------+



---

## 📌 **API Documentation:**  
- **POST /api/auth/login:**  
  - Login as school coordinator (JWT Token).
  - Body: `{ "username": "admin", "password": "password123" }`

- **GET /api/students:**  
  - Retrieve all students.

- **POST /api/students:**  
  - Add a new student.
  - Body: `{ "name": "John Doe", "class": "5A", "vaccinated": false }`

- **PUT /api/students/:id:**  
  - Update student details.

- **DELETE /api/students/:id:**  
  - Delete a student.

- **POST /api/students/upload-csv:**  
  - Upload CSV for Bulk Student Addition.

- **GET /api/drives:**  
  - Retrieve all vaccination drives.

- **POST /api/drives:**  
  - Create a new drive.
  - Body: `{ "date": "2025-05-15", "location": "School Hall" }`

- **PUT /api/drives/:id:**  
  - Update drive details.

- **DELETE /api/drives/:id:**  
  - Delete a drive.

- **GET /api/dashboard/metrics:**  
  - Retrieve Dashboard Metrics (Total Students, Vaccinated Students, Upcoming Drives).

---

## 🚀 **Database Schema:**
### ✅ **Students Collection:**
| Field        | Type   | Description             |
|---------------|--------|--------------------------|
| `_id`          | ObjectId | Unique ID (Auto-Generated) |
| `name`         | String   | Student Name             |
| `class`        | String   | Student Class (e.g., 5A)  |
| `vaccinated`   | Boolean  | Vaccination Status        |

### ✅ **Vaccination Drives Collection:**
| Field        | Type   | Description                 |
|---------------|--------|------------------------------|
| `_id`          | ObjectId | Unique ID (Auto-Generated) |
| `date`         | Date     | Scheduled Date of Drive     |
| `location`     | String   | Location of Drive           |

---

## ✅ **Installation Guide:**

### 🚀 **1. Clone the Repository:**
```bash
git clone https://github.com/your-username/school-vaccination-portal.git
cd school-vaccination-portal
🚀 2. Backend Setup (Node.js + MongoDB):
bash
Copy
Edit
cd school-vaccination-portal-backend
npm install
Create a .env file in the backend folder:


MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/school-vaccination?retryWrites=true&w=majority
JWT_SECRET=your-very-secure-secret-key
PORT=5000
Start the Backend Server:


nodemon server.js
🚀 3. Frontend Setup (React):

cd ../school-vaccination-portal-frontend
npm install
Create a .env file in the frontend folder:


REACT_APP_API_URL=http://localhost:5000/api
Start the React Application:


npm start
#   f u l l s t a c k b i t s p i l a n i p r o j e c t  
 #   f u l l s t a c k b i t s p i l a n i p r o j e c t  
 
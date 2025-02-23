# Flask Portfolio

This is a **personal portfolio website** built using Flask. It showcases projects, skills, and includes a contact form.

## 🚀 Features

- Responsive **Landing Page**
- **About Me** section
- **Projects Showcase** with descriptions
- **Contact Form** with **Flask-WTF validation** and **Flask-Mail integration**
- **SEO & social media integration**
- **Secure environment variable management**
- **JavaScript-based form handling** with smooth UI interactions

## 🏗 Project Structure

```
/portfolio
├── static/ # CSS, JavaScript, Images
├── style.css # Custom styles
├── script.js # JavaScript for form handling
├── templates/ # HTML files
├── forms.py # Flask-WTF form validation
├── config.py # Configuration settings
├── app.py # Main Flask application and routing
├── .env # Environment variables (ignored in Git)
├── requirements.txt # Dependencies
├── .gitignore # Ignore unnecessary files
├── README.md # Documentation
```

---

## 📬 Contact Form Functionality

### **📌 1️⃣ Flask-WTF Validation**

- **Ensures all fields are properly validated** before submitting.
- **Error messages are displayed inside the form** under the respective fields.
- Uses **Bootstrap's `is-invalid` class** to highlight incorrect inputs.

### **📌 2️⃣ Email Sending (Flask-Mail)**

- Messages are sent via **Gmail SMTP**.
- Supports **HTML-formatted emails** using `email_template.html`.
- Uses **environment variables** to securely store email credentials.

### **📌 3️⃣ JavaScript Enhancements**

- The **contact form smoothly opens and closes** when triggered.
- The **offcanvas menu automatically closes** before opening the form.
- If the form has **validation errors**, it **remains open** instead of closing.
- Uses **Bootstrap validation styles** (`.invalid-feedback`).

### **📌 4️⃣ Quill.js Rich Text Support**

- Allows users to format messages using **bold, italics, lists, and links**.
- Saves rich-text content inside a hidden input before submission.
- Ensures HTML-formatted messages are properly handled when sent via email.

---

## ⚙️ Setup Instructions

### **1️⃣ Install Dependencies**

```sh
pip install flask flask-wtf flask-mail bleach python-dotenv quill
```

### 2️⃣ Configure .env File

Create a .env file and add the following:

```ini
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
SECRET_KEY=your-secret-key
```

### 3️⃣ Run the Flask App

```sh
python app.py
```

Then visit http://127.0.0.1:5000 in your browser.

#### 👤 Contact Info

📧 Email: houta.shoham@gmail.com
📌 LinkedIn: [LinkedIn](linkedin.com/in/shohamhouta)
🌐 GitHub: [GitHub](github.com/Shoham-Houta)

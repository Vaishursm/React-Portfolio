# Developer Portfolio

This portfolio was developed as part of a Coursera project and showcases frontend development skills using modern tools and libraries. The application features a responsive layout, smooth user interactions, and a clean design aesthetic.

## ✨ Features

- **Header Navigation**
  - External links to social media profiles
  - Internal links to sections like Projects and Contact Me
  - Smooth scrolling between sections
  - Scroll-based show/hide animation for header

- **Landing Section**
  - Avatar image
  - Greeting message
  - Brief developer bio

- **Featured Projects**
  - Projects displayed in a responsive grid
  - Each project shown as a card with a title, description, and icon

- **Contact Form**
  - Input fields for name, email, inquiry type, and message
  - Real-time form validation using Yup
  - Controlled inputs via Formik
  - Submissions trigger contextual alerts and form resets
  - Submit button shows loading state while sending

## 🛠️ Tech Stack

### Chakra UI
Used for layout and styling. Provides accessible, reusable components and built-in responsiveness.  
🔗 [Chakra UI Documentation](https://chakra-ui.com/docs/components)

### Formik & Yup
Formik handles form state and submission logic, while Yup validates user inputs with clear, user-friendly error messages.

### FontAwesome
Used for consistent iconography, particularly in the header navigation and project cards.

## 📁 Project Structure

- **Header**  
  Includes both social media icons and navigation links. Navigation is enhanced with smooth scroll behavior and a scroll-direction-sensitive animation that hides/shows the header.

- **Landing Section**  
  Features a profile avatar, greeting, and short role description. Layout is managed using Chakra's `VStack` and `Box` components.

- **Projects Section**  
  Displays a list of projects using a reusable `Card` component. Data is passed as props and arranged in a grid layout using Chakra’s layout utilities.

- **Contact Me Section**  
  A complete contact form with the following capabilities:
  - Validation using Yup
  - Submission using a custom `useSubmit` hook
  - Success/error alert using a context API
  - Form reset on successful submission
  - Loading indicator on submit button

## 📸 Screenshots

### Header and Navigation  
![Header](screenshots/image8.png)

### Landing Section  
![Landing](screenshots/image3.png)

### Projects Section  
![Projects](screenshots/image2.png)

### Contact Form  
Validations and submission feedback  
![Form Error](screenshots/image5.png)  
![Form Success](screenshots/image6.png)  
![Form Error Submission](screenshots/image7.png)

### Header Scroll Animation  
![Scroll Animation](screenshots/header_animation.gif)

---

## 📦 Getting Started

1. Open the project in your code editor.
2. Checkout to master branch 
    ```bash
   git checkout master
3. Install dependencies:
   ```bash
   npm install

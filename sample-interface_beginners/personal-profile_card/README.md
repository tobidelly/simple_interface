## 🪪 **Personal Profile Card Project**

Welcome to the **Personal Profile Card** project! 🎉 This is a simple beginner-friendly project to help you learn **HTML** and **CSS** by creating a stylish profile card that displays a photo, name, role, and social media links.

---

## 🌟 **Project Overview**

This project will teach you how to:

- Structure a basic HTML document.
- Apply CSS to style your content.
- Create a simple card layout with rounded corners and shadows.
- Add and style images, text, and links.
- Use Flexbox for arranging elements.

---

## 📂 **File Structure**

Your project will have two files:

```
personal-profile_card/
│-- index.html      ← The HTML structure
└-- styles.css      ← The CSS styling
```

---

## 📝 **HTML File (`index.html`)**

This file contains the structure (or skeleton) of the web page. Here's what it looks like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Profile Card</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="profile-card">
    <img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-img">
    <h2 class="profile-name">Jane Doe</h2>
    <p class="profile-role">Web Developer</p>
    <div class="social-links">
      <a href="#" class="social-link">🔗 LinkedIn</a>
      <a href="#" class="social-link">🐦 Twitter</a>
      <a href="#" class="social-link">📸 Instagram</a>
    </div>
  </div>
</body>
</html>
```

### **Explanation of Key Elements**

1. **Profile Card Container** (`<div class="profile-card">`)  
   A box that holds the image, name, role, and social links.

2. **Image Tag** (`<img>`)  
   Displays the profile picture.

3. **Headings and Paragraph**  
   - `<h2>` for the user's name.  
   - `<p>` for the user's role.

4. **Links**  
   `<a>` tags for social media links.

---

## 🎨 **CSS File (`styles.css`)**

This file adds styling to your HTML. Here's what it looks like:

```css
body {
  background-color: #f0f8ff;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.profile-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.profile-name {
  font-size: 1.5em;
  margin: 10px 0 5px;
  color: #333;
}

.profile-role {
  font-size: 1em;
  color: #777;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-link {
  text-decoration: none;
  color: #008cba;
  font-weight: bold;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #005f73;
}
```

### **Explanation of Key Styles**

1. **Background and Centering**:  
   The `body` centers the profile card using **Flexbox** and sets a light blue background color.

2. **Profile Card Styling**:  
   - `background-color`: Sets a white background.  
   - `border-radius`: Rounds the corners.  
   - `box-shadow`: Adds a subtle shadow for depth.

3. **Image Styling**:  
   - `width` and `height`: Set the image size.  
   - `border-radius: 50%`: Makes the image circular.

4. **Text Styling**:  
   Styles the name and role with different font sizes and colors.

5. **Social Links**:  
   - Arranged with **Flexbox** for spacing.  
   - Hover effect to change link color.

---

## 🚀 **How to Use This Project**

1. **Download the Files**:  
   Download or copy the `index.html` and `styles.css` files.

2. **Open the HTML File**:  
   Double-click the `index.html` file to open it in your browser.

3. **Edit the Content**:  
   - Change the **name** and **role**.  
   - Replace the **image URL** with your own profile picture.  
   - Update the **social media links**.

4. **Experiment with CSS**:  
   Try changing colors, fonts, and sizes in `styles.css` to see how it affects the design!

---

## 🧠 **What You’ll Learn**

- How to create an HTML layout.
- How to style elements with CSS.
- How to use Flexbox for alignment.
- How to add hover effects for interactivity.

---

## 🌟 **Next Steps**

- **Add More Features**: Include a bio section or a contact button.
- **Make It Responsive**: Learn how to make the card look good on mobile devices.
- **Add Animations**: Use CSS animations to make the card more interactive.

---

Happy Coding! 🎉💻
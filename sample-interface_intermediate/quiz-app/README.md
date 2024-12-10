# 📝 **Interactive Quiz App** 🎮

This project is a **simple interactive quiz application** built with **HTML**, **CSS**, and **JavaScript**. It allows users to answer multiple-choice questions, submit their answers, and receive an instant score. The app demonstrates basic form handling, dynamic content updates, and DOM manipulation in JavaScript.

---

## 🚀 **Project Overview**

### **Features**

- **Multiple Choice Questions**: Three questions with multiple answer options.
- **Submit Button**: Allows users to submit their answers.
- **Instant Scoring**: Displays the user's score immediately after submission.
- **Interactive Design**: Simple styling and hover effects for better user experience.

### **Technologies Used**

- **HTML**: For structuring the content.
- **CSS**: For styling the quiz interface.
- **JavaScript**: For adding interactivity and processing the answers.

---

## 📂 **File Structure**

```
interactive-quiz/
│-- index.html      ← The HTML structure
│-- styles.css      ← The CSS styling
└-- script.js       ← The JavaScript logic
```

---

## 📝 **Code Breakdown**

### 📄 **HTML (`index.html`)**

The HTML file creates the structure of the quiz, including questions, answer choices, and a submit button.

**Key Elements:**
- **Form** (`<form>`) to group quiz questions.
- **Radio Buttons** (`<input type="radio">`) for selecting answers.
- **Submit Button** to check the answers.
- **Result Div** to display the score.

```html
<form id="quiz-form">
  <div class="question">
    <p>1. What is the capital of France?</p>
    <label><input type="radio" name="q1" value="Paris"> Paris</label>
    <label><input type="radio" name="q1" value="Rome"> Rome</label>
    <label><input type="radio" name="q1" value="London"> London</label>
  </div>

  <button type="button" id="submit-btn">Submit Answers</button>
</form>

<div id="result"></div>
```

### 🎨 **CSS (`styles.css`)**

The CSS file styles the quiz interface, making it visually appealing and responsive.

**Key Styling Concepts:**
- **Layout**: Flexbox for alignment and spacing.
- **Hover Effects**: Button changes color when hovered.
- **Box Shadow**: For a modern card-like appearance.

```css
button {
  background-color: #28a745;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
```

### ⚙️ **JavaScript (`script.js`)**

The JavaScript file handles the quiz logic, processes user answers, and displays the score.

**Key Concepts:**
- **Event Listeners**: To detect when the user clicks the submit button.
- **Form Handling**: Accessing user-selected answers.
- **DOM Manipulation**: Updating the result section with the user's score.

```javascript
document.getElementById('submit-btn').addEventListener('click', function() {
  const answers = {
    q1: 'Paris',
    q2: '4',
    q3: 'Blue'
  };

  let score = 0;
  const form = document.getElementById('quiz-form');

  if (form.q1.value === answers.q1) score++;
  if (form.q2.value === answers.q2) score++;
  if (form.q3.value === answers.q3) score++;

  document.getElementById('result').textContent = `You scored ${score} out of 3!`;
});
```

---

## 🧠 **Key Concepts for Learning**

1. **HTML Forms and Inputs**:
   - How to structure forms and use radio buttons for multiple-choice questions.
   - Understanding the `name` attribute for grouping radio inputs.

2. **CSS Styling**:
   - Using Flexbox for layout and alignment.
   - Adding visual appeal with hover effects and shadows.

3. **JavaScript Interactivity**:
   - Adding event listeners with `addEventListener()`.
   - Reading form data and comparing user input to correct answers.
   - Updating the DOM dynamically using `textContent`.

---

## 🛠️ **How to Run the Project**

1. **Clone or Download the Project**:
   ```bash
   git clone https://github.com/yourusername/interactive-quiz.git
   ```
   
2. **Open `index.html`** in your browser:
   ```bash
   open index.html
   ```

3. **Try the Quiz**:
   - Answer the questions.
   - Click **"Submit Answers"** to see your score.

---

## 🌟 **Enhancements to Try**

- **Add More Questions**: Increase the number of questions to challenge users.
- **Custom Feedback**: Show detailed feedback for each question.
- **Timer**: Add a countdown timer for each question.
- **Styling Improvements**: Enhance the design with animations or themes.

---

### 🎉 **Happy Coding!** 💻
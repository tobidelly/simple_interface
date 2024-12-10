document.getElementById('submit-btn').addEventListener('click', function() {
    const answers = {
      q1: 'Paris',
      q2: '4',
      q3: 'Blue'
    };
  
    let score = 0;
  
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
  
    if (form.q1.value === answers.q1) score++;
    if (form.q2.value === answers.q2) score++;
    if (form.q3.value === answers.q3) score++;
  
    resultDiv.textContent = `You scored ${score} out of 3!`;
  });
  
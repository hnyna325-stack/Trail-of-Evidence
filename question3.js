function checkAnswer(selectedCard, isCorrect) {
    const allCards = document.querySelectorAll('.option-card');
    const nextBtn = document.getElementById('nextBtn');
    const feedback = document.getElementById('feedback');

    allCards.forEach(card => {
        card.classList.remove('correct', 'wrong');
    });

    if (isCorrect) {
        selectedCard.classList.add('correct');
        nextBtn.style.display = 'flex';
        feedback.style.color = '#2e7d32';
        feedback.textContent = 'Correct! You can proceed to the next question.';
    } else {
        selectedCard.classList.add('wrong');
        nextBtn.style.display = 'none';
        feedback.style.color = '#8b1e24';
        feedback.textContent = 'Incorrect. Try selecting another clue.';
    }
}

function goBack() {
    window.location.href = 'question2.html';
}

function goNext() {
    window.location.href = 'question4.html';
}
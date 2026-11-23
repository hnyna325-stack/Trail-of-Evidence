function checkAnswer(selectedCard, isCorrect) {
    const allCards = document.querySelectorAll('.option-card');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback-msg');

    // إزالة التنسيقات السابقة من جميع البطاقات
    allCards.forEach(card => {
        card.classList.remove('correct', 'wrong');
    });

    if (isCorrect) {
        // إذا اختار المستخدم الإجابة الصحيحة (Hammer)
        selectedCard.classList.add('correct');
        feedback.textContent = "Correct! The hammer matches the evidence found at the crime scene.";
        feedback.className = "feedback-msg success";
        nextBtn.classList.remove('hidden'); // إظهار زر Next
    } else {
        // إذا اختار المستخدم إجابة خاطئة (Knife أو Gun)
        selectedCard.classList.add('wrong');
        feedback.textContent = "Incorrect. Review the crime scene evidence and try again.";
        feedback.className = "feedback-msg error";
        nextBtn.classList.add('hidden'); // إبقاء زر Next مخفياً
    }
}
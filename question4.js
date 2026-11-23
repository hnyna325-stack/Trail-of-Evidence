let chosenSuspect = "";

function selectSuspect(card, suspectName) {
    // إزالة التحديد عن جميع البطاقات
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(c => c.classList.remove('selected'));

    // تحديد البطاقة المختارة
    card.classList.add('selected');
    chosenSuspect = suspectName;

    // إظهار زر Submit
    document.getElementById('submitBtn').style.display = 'flex';
}

function submitAnswer() {
    // إذا اختار حارس الأمن ماجد ينتقل إلى solved.html
    if (chosenSuspect === 'Majed') {
        window.location.href = 'solved.html';
    } 
    // إذا اختار أياً من الثلاثة الباقين ينتقل إلى unsolved.html
    else {
        window.location.href = 'unsolved.html';
    }
}
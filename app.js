'use script';

const form = document.querySelector('.js-quiz-form');
const userScore = document.querySelector('.js-user-score');

const correctAnswers = ['C', 'A', 'C'];

const compareAnswers = function () {
    let score = 0;
    const userAnswersValue = [form.q1.value, form.q2.value, form.q3.value];

    userAnswersValue.forEach((answer, i) => {
        if (answer === correctAnswers[i]) {
            score += 33.3;
            return userScore.innerHTML = `${score}%`
        }
    });

    console.log(score);

};

form.addEventListener('submit', event => {
    event.preventDefault();
    compareAnswers();
});

'use script';

const form = document.querySelector('.js-quiz-form');
const userScore = document.querySelector('.js-user-score');
const result = document.querySelector('.js-result');

const correctAnswers = ['C', 'A', 'C', 'C'];

const compareAnswers = function () {
    let score = 0;
    const userAnswersValue = [form.q1.value, form.q2.value, form.q3.value];

    userAnswersValue.forEach((answer, i) => {
        if (answer === correctAnswers[i]) {
            score += 25;
            // return userScore.innerHTML = `${score}%`
            return (
                result.classList.remove("d-none"))
        }
    });

    console.log(score);
    userScore.innerHTML = `${score}%`
};

form.addEventListener('submit', event => {
    event.preventDefault();
    compareAnswers();
});

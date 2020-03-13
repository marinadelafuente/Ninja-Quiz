'use script';

const correctAnswers = ['C', 'A', 'C'];

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];



});

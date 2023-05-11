import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

const savedData = () => {
  emailEl.value = feedbackFormState.email;
  messageEl.value = feedbackFormState.message;
};

savedData();

formEl.addEventListener(
  'input',
  throttle(event => {
    feedbackFormState[event.target.name] = event.target.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(feedbackFormState)
    );
  }, 500)
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(feedbackFormState);
  event.target.reset();
  feedbackFormState = { email: '', message: '' };
});

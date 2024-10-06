const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too <3 (your stuck with me there's no going back)";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2NuZzgzamFxbDVjb3MzOWpsbXlmdm5waTJ1ZzA5d2JqMGk2eXYzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zGdHl3EOzwUpMqg67p/giphy.gif";
});

// Make the No button move randomly on hover around the screen
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
const quotes = [
  {
    quote:
      "Embrace the power within you to turn your dreams into reality. Les Brown, a motivational speaker, once said, 'You are never too old to set another goal or to dream a new dream.' These words echo the timeless wisdom that life is a journey of constant growth and possibility. In the face of challenges, remember that your potential knows no bounds. Seize each moment, believe in your abilities, and chart a course toward your aspirations. Let the fire of determination illuminate your path, for as Les Brown inspires, 'It's not over until I win!",
  },
  {
    quote:
      "Your goals are the road maps that guide you and show you what is possible for your life. Les Brown encourages us to set bold, audacious goals that stretch our capabilities and propel us toward greatness. Remember, the journey to success begins with the decision to try.",
  },
  {
    quote:
      "Les Brown, with his charismatic optimism, reminds us that life has no limitations except the ones you make. Break free from self-imposed boundaries, for 'You have greatness within you.' Embrace your uniqueness, cultivate your talents, and let the world witness the extraordinary person you are meant to be.",
  },
  {
    quote:
      "In the tapestry of life, Les Brown's words weave a narrative of resilience and determination. 'It's not about how fast you start, but how well you finish.' Embrace the challenges, learn from setbacks, and keep moving forward. Your story is not defined by the obstacles you face but by the strength with which you overcome them.",
  },
  {
    quote:
      "Les Brown's wisdom resonates in the reminder that 'You don't have to be great to get started, but you have to get started to be great.' Take that first step towards your dreams, no matter how small. Progress is the key, and each effort accumulates, propelling you closer to the extraordinary life you envision.",
  },
];

const newQuote = document.querySelector(".authors_quote");
const quoteBtn = document.querySelector(".quote-btn");

quoteBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  newQuote.innerHTML = `<p>${quotes[randomIndex].quote}</p>`;
});

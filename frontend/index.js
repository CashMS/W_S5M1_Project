function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  // const widg = document.querySelector('h2');
  // widg.classList.add('widget');

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const quoteDay = document.querySelector('.quoteoftheday');
  quoteDay.classList.add('widget');
  function random() {
    const randomInd = Math.floor(Math.random() * quotes.length);
    return quotes[randomInd];
  }
  const ranQuote = random();

  const div1 = document.createElement('div');
  div1.textContent = `${ranQuote.quote}`;

  const div2 = document.createElement('div');
  if (ranQuote.date !== null) {
    div2.textContent = `${ranQuote.author} ${ranQuote.date}`;
  } else {
    div2.textContent = `${ranQuote.author} in an unknown date`;
  }

  quoteDay.appendChild(div1);
  quoteDay.appendChild(div2);
  console.log(quotes);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function getDifRandom(arr, exclude) {
    let randomElement;
    do {
      randomElement = getRandomElement(arr);
    } while (randomElement === exclude);
    return randomElement;
  }

  const randomAdverbs = getRandomElement(adverbs);
  const randomNouns = getRandomElement(nouns);
  const randomVerbs = getRandomElement(verbs);

  const randomAdverbs2 = getDifRandom(adverbs, randomAdverbs);
  const randomNouns2 = getDifRandom(nouns, randomNouns);
  const randomVerbs2 = getDifRandom(verbs, randomVerbs);

  const corpo = document.querySelector('.corporatespeak');
  corpo.classList.add('widget');

  const speak = document.createElement('p');
  speak.textContent = `We need to ${randomVerbs} our ${randomNouns} ${randomAdverbs} 
  in order to ${randomVerbs2} our ${randomNouns2} ${randomAdverbs2}.`;

  corpo.appendChild(speak);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  let num = 5;
  const count = document.querySelector('.countdown');
  count.classList.add('widget');

  const liftoff = document.createElement('p');
  liftoff.textContent = `T-minus ${num}...`;
  count.appendChild(liftoff);

  const interval = setInterval(() => {
    num--;
    if (num >= 1) {
      console.log(num);
      liftoff.textContent = `T-minus ${num}...`;
    } else {
      clearInterval(interval);
      liftoff.textContent = 'Liftoff! 🚀';
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  console.log(people)
  const friend = document.querySelector('.friends');
  friend.classList.add('widget');
  const m9 = document.createElement('p');
  m9.textContent = 'Dustin Barnholdt was born in 2002 and is friends with Cassius Schaeffer and Maya Blaisdell Wood.';
  friend.appendChild(m9);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

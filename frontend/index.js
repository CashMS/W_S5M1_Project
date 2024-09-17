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
    div2.textContent = `${ranQuote.author} in ${ranQuote.date}`;
  } else {
    div2.textContent = `${ranQuote.author} in an unknown date`;
  }

  quoteDay.appendChild(div1);
  quoteDay.appendChild(div2);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getDiffRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const randomAdverbs = getRandomElement(adverbs);
  const randomNouns = getRandomElement(nouns);
  const randomVerbs = getRandomElement(verbs);

  const randomAdverbs2 = getDiffRandom(adverbs);
  const randomNouns2 = getDiffRandom(nouns);
  const randomVerbs2 = getDiffRandom(verbs);

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
      liftoff.textContent = `T-minus ${num}...`;
    } else {
      clearInterval(interval);
      liftoff.textContent = 'Liftoff! 🚀';
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  function getRandomFriend() {
    const ranFriend = Math.floor(Math.random() * people.length);
    return people[ranFriend];
  }

  const randomFriend = getRandomFriend();
  const birth = randomFriend.dateOfBirth.slice(0, 4);
  const arrayF = randomFriend.friends;

  const friend = document.querySelector('.friends');
  friend.classList.add('widget');

  const m9 = document.createElement('p');
  friend.appendChild(m9);
  m9.textContent = `${randomFriend.fname} ${randomFriend.lname} was born in ${birth}
  and is friends with`;

  const names = [];
  for (let i = 0; i < people.length; i++) {
    const idArray = people[i].id;

    for (let x = 0; x < arrayF.length; x++) {
      if (idArray === arrayF[x]) {
        names.push(people[i].fname + " " + people[i].lname);
      }
    }
  }

  if (names.length === 0) {
    m9.textContent = `${randomFriend.fname} ${randomFriend.lname} was born in ${birth}
  and has no friends.`;
  } else if (names.length === 1) {
    m9.textContent += ` ${names[0]}.`;
} else if (names.length === 2) {
  m9.textContent += ` ${names[0]} and ${names[1]}.`
} else if (names.length === 3) {
  m9.textContent += ` ${names[1]}, ${names[2]} and ${names[0]}.`
} else if (names.length === 4) {
  m9.textContent += ` ${names[3]}, ${names[2]}, ${names[0]} and ${names[1]}.`
}
console.log(people);
console.log(names);

// William Brown was born in 1997 and is friends with Jessica Taylor, Maria Rodriguez and Kimberly Ng.

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  quoteDay.setAttribute('tabindex', '1');
  corpo.setAttribute('tabindex', '2');
  count.setAttribute('tabindex', '3');
  friend.setAttribute('tabindex', '4');

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

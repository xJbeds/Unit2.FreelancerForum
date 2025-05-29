/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */
// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 20;
const $app = document.getElementById("app");
// according to the provided constants.
// === State ===
const freelancers = [];
// for(let i = 0; i<NUM_FREELANCERS;i++){
//   freelancers.push(makeFreelancer());
// }
console.log(freelancers);
// const freelancers = NAMES.map ((name) => makeFreelancer());
// const freelancers = Array.from({ length:NUM_FREELANCERS }, makeFreelancer);
// Write a function that returns a freelancer object with a randomly generated name, occupation, and rate
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  // const rate = PRICE_RANGE.min + Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  let rate = Math.floor(Math.random() * PRICE_RANGE.max);
  // if(rate <= 20){
  //   rate += 20;
  // }
  rate < 20 ? (rate += 20) : rate;
  freelancers.push({ name, occupation, rate });
  return { name, occupation, rate };
}
const avg = document.getElementById("avg");
// 7. Write a component function to represent the average rate of all freelancers.
const getAverage = () => {
  const total = freelancers.reduce((total, item) => {
    return total + item.rate;
  }, 0);
  const output = (total / freelancers.length).toFixed(2);
  avg.replaceChildren(output);
};
// 8. Write and call a render function that will mount the application onto the document.
const render = (whatWeWantToRender) => {
  if (Array.isArray(whatWeWantToRender)) {
    $app.append(...whatWeWantToRender);
  } else {
    $app.append(whatWeWantToRender);
  }
};
// 5. Write a component function to represent a single freelancer.
//  this is what an object of each freelancer would be {name: 'ALICE', occupation: 'Writer', rate: 50}
const SingleFreelancer = (individualFreelancer) => {
  const singleCard = document.createElement("div");
  singleCard.classList.add("single");
  singleCard.innerHTML = `
  <h3>NAME: ${individualFreelancer.name} JOB: ${individualFreelancer.occupation} Rate: ${individualFreelancer.rate}</h3>
  `;
  return singleCard;
};
// 6. Write a component function to represent an array of freelancers.
const freelancerArr = (arrayOfFreeLancers) => {
  const allCards = arrayOfFreeLancers.map((eachObj) =>
    SingleFreelancer(eachObj)
  );
  render(allCards);
};

const timer = setInterval(() => {
  render(SingleFreelancer(makeFreelancer()));
  getAverage();
}, 1000);
setTimeout(() => clearInterval(timer), 10000);

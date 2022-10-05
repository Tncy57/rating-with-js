const btn = document.querySelector(".btn");
const allNumbers = document.querySelectorAll(".rate")
const cardContent = document.querySelector("#card-content")
const rateNum = document.querySelector("#rateNum")
const secondContent = document.querySelectorAll("#second")

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');

one.addEventListener('click', selectedBgColor)
two.addEventListener('click', selectedBgColor)
three.addEventListener('click', selectedBgColor)
four.addEventListener('click', selectedBgColor)
five.addEventListener('click', selectedBgColor)

function selectedBgColor() {
  for(let nums of allNumbers) {
    nums.classList.remove('active')
  }
  this.classList.toggle('active')
}

btn.addEventListener('click', () => {
  deleteContent();
  getRatedPage();
  for(let content of secondContent) {
    content.classList.toggle('second')
  }
})

function getRatedPage() {
  cardContent.classList.add("illustrate");
}

allNumbers.forEach((rate) => {
  rate.addEventListener('click', () => {
      rateNum.innerHTML = rate.innerHTML;
  })
})

const deleteContent = () => {
  document.querySelector(".icon").remove();
  document.querySelector("#title").remove();
  document.querySelector("#content").remove();
  document.querySelector(".rates").remove();
  document.querySelector(".btn").remove();
}


class RatingComponent {
  constructor() {
    this.rating = document.querySelectorAll(`.rating`);
    this.submitBtn = document.querySelector(`#submit`);
    this.submittedText = document.querySelector(`p.text.submitted`);
    this.intro = document.querySelector(`.intro`);
    this.submittedPage = document.querySelector(`.submitted`);
    this.ratingValue = null;
    this.submittedText.innerText = `You Selected ${this.ratingValue} out of 5`;
  }

  ratingBtn() {
    this.rating.forEach((rating, index, ratings) => {
      rating.addEventListener(`click`, (e) => {
        if (!e.target.classList.contains(`active`)) {
          ratings.forEach((rate) => {
            rate.classList.remove(`active`);
          });
          e.target.classList.add(`active`);
          this.ratingValue = e.target.childNodes[0].innerText;
          this.submittedText.innerText = `You Selected ${this.ratingValue} out of 5`;
        } else {
          e.target.classList.remove(`active`);
          this.ratingValue = null;
          this.submittedText.innerText = `You Selected ${this.ratingValue} out of 5`;
        }
      });
    });
  }
  submit() {
    this.intro.style.display = `none`;
    this.submittedPage.style.display = `flex`;
  }
}

const ratingComponent = new RatingComponent();
ratingComponent.ratingBtn();

ratingComponent.submitBtn.addEventListener(`click`, () => {
  ratingComponent.submit();
});

let rating = `none`;
//Selecting Element 
const ratingBtns = document.querySelectorAll(`.rating`);
const submit = document.querySelector(`#submit`);
const main = document.querySelector(`main`);
//EventListeners
submit.addEventListener(`click`, submitPage);

ratingBtns.forEach((ratingBtn, index, ratingBtns)=>{
    ratingBtn.addEventListener(`click`, function(){
        if(!ratingBtn.classList.contains(`active`)){
            ratingBtns.forEach(rating=>{rating.classList.remove(`active`)});
            ratingBtn.classList.add(`active`);
            rating = ratingBtn.innerText;
        } else{
            ratingBtn.classList.remove(`active`);
            rating = `none`;
            console.log(rating);
        }
    })
})

function submitPage(e){
    e.preventDefault();
    const newMain = document.createElement(`main`);
    newMain.classList.add(`submitted`);
    //Creating Section 1 
    const sectionBox1 = document.createElement(`section`);
    sectionBox1.setAttribute(`id`, `box1`);
    //creating SVG div container
    const svgContainer = document.createElement(`div`);
    svgContainer.classList.add(`svg`);
    //Creating the Svg Image
    const svgImg = document.createElement(`img`);
    svgImg.setAttribute(`src`, "../assets/illustration-thank-you.svg");
    svgImg.setAttribute(`alt`, `illustration-thank-svg`);
    //Appending SvgImg to svgContainer
    svgContainer.appendChild(svgImg);
    console.log(svgContainer);
    //Appending svgContainer to sectionBox1
    sectionBox1.appendChild(svgContainer);

    //Creating div for rating text
    const ratingTextDiv = document.createElement(`div`);
    ratingTextDiv.classList.add(`rating-text`);
    ratingTextDiv.classList.add(`submitted`);
    ratingTextDiv.innerHTML = `<p class="text submitted">You Selected ${rating} out of 5</p>`
    //appending ratingTextDiv to sectionBox1
    sectionBox1.appendChild(ratingTextDiv);
    

    //Creating sectionBox2 
    const sectionBox2 = document.createElement(`section`);
    sectionBox2.setAttribute(`id`, `box2`);
    //Creating the h1 tag
    const h1Text = document.createElement(`h1`);
    h1Text.classList.add(`submitted`);
    h1Text.innerText = `Thank you!`;
    //Appending h1Text to sectionBox2
    sectionBox2.appendChild(h1Text);

    //Creating div for feedback text
    const divFeedBackText = document.createElement(`div`);
    divFeedBackText.classList.add(`feedback-text`);
    divFeedBackText.classList.add(`submitted`);
    divFeedBackText.innerHTML = `<p>
    We appreciate you taking the time to give a rating.
    If you ever need more support, don't hesitate to
    get in touch!
</p>`

    //appending divFeedBackRating to the sectionBox2
    sectionBox2.appendChild(divFeedBackText);

    main.remove();
    newMain.appendChild(sectionBox1);
    newMain.appendChild(sectionBox2);
    document.body.appendChild(newMain);


}
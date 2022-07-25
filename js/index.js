document.addEventListener

let articles = document.querySelectorAll('.news__article')
articles.forEach(article => {
    article.addEventListener('mouseenter', () => changeStyle(article))
    article.addEventListener('mouseleave', () => recoverStyle(article))
})
// console.log(articles)

function changeStyle(article) {
    let imageSrc = article.querySelector('.news__image').src
    // console.log(article)
    article.style.backgroundColor = 'rgb(0, 0, 0, 0.7)'
    article.style.backgroundImage = 'url(' + imageSrc + ')'
    article.style.backgroundBlendMode = 'darken'
    article.style.backgroundRepeat = 'no-repeat'
    article.style.backgroundSize = 'cover'
    article.style.transitionDuration = '200ms'

    contents = article.querySelectorAll('.news__content *')
    contents[0].style.color = 'white'
    contents[0].style.transitionDuration = '200ms'
    contents[5].style.color = 'white'
    contents[5].style.transitionDuration = '200ms'
}

function recoverStyle(article) {
    article.style.backgroundColor = null
    article.style.backgroundImage = null
    article.style.backgroundBlendMode = null
    article.style.backgroundRepeat = null
    article.style.backgroundSize = null
    article.style.transitionDuration = '200ms'

    contents = article.querySelectorAll('.news__content *')
    contents[0].style.color = null
    contents[0].style.transitionDuration = '200ms'
    contents[5].style.color = null
    contents[5].style.transitionDuration = '200ms'
}
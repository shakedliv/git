function onBallClick(elBall) {
    var ballSize = +elBall.innerText
    ballSize += getRandomInt(20, 60)
    if (ballSize > 400) ballSize = 100
   
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}

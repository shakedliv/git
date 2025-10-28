function onBallClick(elBall) {
    var ballSize = +elBall.innerText
    if (ballSize < 400) ballSize += 50
   else ballSize = 100
   
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}

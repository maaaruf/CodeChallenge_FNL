let square = document.getElementById('square');
let style = window.getComputedStyle(square);

const moveSquare = (marginTop, marginLeft) => {
    marginTop = parseInt(marginTop);
    marginLeft = parseInt(marginLeft);

    let currentMarginTop = style.getPropertyValue('margin-top');
    let updatedMarginTop = parseInt(currentMarginTop) + marginTop;
    let currentMarginLeft = style.getPropertyValue('margin-left');
    let updatedMarginLeft = parseInt(currentMarginLeft) + marginLeft;

    square.style.marginTop = `${updatedMarginTop}px`;
    square.style.marginLeft = `${updatedMarginLeft}px`;
}

const getSquarePosition = () => {
    let currentHeight = style.getPropertyValue('margin-top');
    currentHeight = parseInt(currentHeight) + 100;

    let currentWidth = style.getPropertyValue('margin-left');
    currentWidth = parseInt(currentWidth) + 100;

    return {
        height: currentHeight,
        width: currentWidth
    }
}

const moveBasedOnEdge = () => {
    let squareCurrentPosition = getSquarePosition();

    let currentHeightDiff = window.innerHeight - squareCurrentPosition.height;
    let currentWidthDiff = window.innerWidth - squareCurrentPosition.width;
    console.log(`Current Difference Height: ${currentHeightDiff}, Width: ${currentWidthDiff}`);

    if (currentHeightDiff >= 10 && currentWidthDiff >= 10) {
        moveSquare(10, 10);
    }
    else if (currentHeightDiff < 10) {
        square.style.marginTop = `${0}px`;
        moveSquare(10, 10);
    }
    else if (currentWidthDiff < 10) {
        square.style.marginLeft = `${0}px`;
        moveSquare(10, 10);
    }
}

setInterval(moveBasedOnEdge, 1000);
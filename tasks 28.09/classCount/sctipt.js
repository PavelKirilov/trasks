
 const elementsToCount = document.querySelectorAll('.count');

 let countWithBackgroundColor = 0;
console.log(elementsToCount);
for(countWithBackgroundColor = 0;countWithBackgroundColor < elementsToCount.length; countWithBackgroundColor++){
    elementsToCount[countWithBackgroundColor].style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
}


 console.log(`Count of elements with background color: ${countWithBackgroundColor}`);
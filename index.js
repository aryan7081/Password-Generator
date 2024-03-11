const bar = document.querySelector(".strengthRatingBars .bar")


document.querySelector(".generateBtn").addEventListener("click",()=>{
    
    const placeHolder = generateRandomText()
    document.querySelector(".passwordPlaceholder").textContent = placeHolder;
    strengthPredictor();
    document.querySelector(".strengthRatingText").textContent = passStrength;
    
    if (passStrength == "WEAK"){
        document.querySelector(".strengthRatingBars > div:nth-child(1)").style.backgroundColor = "red"
    }else if(passStrength == "MEDIUM"){
        document.querySelectorAll(".strengthRatingBars > div:nth-child(-n+2)").forEach(function(childDiv){
            childDiv.style.backgroundColor = "orange"
            console.log("selected")
        })
    }else if(passStrength == "STRONG"){
        document.querySelectorAll(".strengthRatingBars > div").forEach(function(divs){
            divs.style.backgroundColor = "green"
        })
    }

    document.querySelector(".passwordPlaceholder").style.color = "#E7E6EB"


})

const checkBoxes = document.querySelectorAll('input[type=checkbox]');
let slider = document.querySelector(".rangeValue")

const characters = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10],
  }

function generateRandomText() {
    var finalPass = '';
    var result = [];
    let charPool = 0;
    checkBoxes.forEach(box => {
        box.addEventListener('click',handleCheckboxClick);
        if(box.checked) {
        result.push(characters[box.value][0]);
        charPool += characters[box.value][1];
        }
    })
    
    if (result) {
        for(let i=0; i<slider.value; i++) {
          const randSetIndex = Math.floor(Math.random() * result.length);
          const randSet = result[randSetIndex];
  
          const randCharIndex = Math.floor(Math.random() * randSet.length);
          const randChar = randSet[randCharIndex];
          
          finalPass += randChar;
        }
      }
    return finalPass
}


let checkboxCount = 0;


function handleCheckboxClick(event) {
    const checkbox = event.target;
    const isChecked = checkbox.checked;
    
    // Increment the counter when a checkbox is clicked
    if (isChecked) {
        checkboxCount++;
    }
}

checkBoxes.forEach(box => {
    box.addEventListener('click',handleCheckboxClick);
    
})



let passStrength;

function strengthPredictor() {
    if (slider.value < 8 || checkboxCount < 3) {
        passStrength = "WEAK";
    } else if (slider.value >= 8 && checkboxCount == 3) {
        passStrength = "MEDIUM";
    } else if (slider.value >= 8 && checkboxCount == 4) {
        passStrength = "STRONG";
    }
}

let charCount = document.querySelector(".charInt")
const handleSliderInput = () => {
    getSliderVal();

  }

const getSliderVal = () => {
    charCount.textContent = slider.value;
  }

slider.addEventListener('input', handleSliderInput);


document.getElementById('copyButton').addEventListener('click', function() {
    var textToCopy = document.getElementById('textToCopy');
    

    var range = document.createRange();
  

    range.selectNode(textToCopy);
  

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  

    document.execCommand('copy');
  

  });

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");

// console.log(countEl)

let count = 0

function increment(){
    count += 1;
    
    countEl.innerText = count;
}

function save(){
    // logs the saved entries on the html document
let strCount = count + " - "
saveEl.textContent += strCount

// To save and start the count from zero for new entries
count = 0
countEl.textContent = count
    console.log(count)
}
// To decrease the number while still counting 
function decrement(){
    count -= 1
 countEl.innerText = count;

}
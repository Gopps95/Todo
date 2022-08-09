let countEl = document.getElementById("count-el")

count =0
function increment() {
    count = count + 1
    countEl.innerText = count

    console.log(count);
    
}
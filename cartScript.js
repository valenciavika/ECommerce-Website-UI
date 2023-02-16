
function findTotal(){
    var arr = document.getElementsByClassName('qty');
    var prices = document.getElementsByClassName('pric')
    var tot=0;
    const text1 = document.getElementById('txt')
    const checkboxes = document.querySelectorAll('#chck');

    // for(var i = 0; i<arr.length; i++){
    //     console.log(checkboxes[i].checked ===true)
    // }
      
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value)<=0){
            arr[i].value = 1
        }
        if(checkboxes[i].checked ===true && parseInt(arr[i].value) && parseInt(arr[i].value)>0)
            tot = tot + (parseInt(prices[i].textContent) * parseInt(arr[i].value));
    }
    text1.innerText = "TOTAL PRICE: Rp" + tot
}

const checkboxe = document.querySelectorAll('#chck');

for(var i = 0; i<checkboxe.length; i++){
    checkboxe[i].addEventListener("change", function(){
        findTotal()
    })
}

var arr = document.getElementsByClassName('qty');
for(var i = 0; i<checkboxe.length; i++){
    arr[i].addEventListener("change", function(){
        findTotal()
    })
}
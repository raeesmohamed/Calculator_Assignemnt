
let main_val = document.getElementById("top-div")
let count = 0
function increment(val){
    if(val==="C"){
        main_val.innerHTML=""
    }
    else if(val==="." || val==="*" || val==="/" || val ==="-" || val==="+"){   
        count++
        if(count==1){
            main_val.innerHTML += val
        }
    }
    else{
        count=0
        main_val.innerHTML += val
    }
}

function evalve(){
    main_val.innerHTML = eval(main_val.innerHTML)
}

function insertcard(callback) {
    console.log("step1:insert the card")
    setTimeout(callback,5000)
}
function selectaccount(callback) {
    console.log("step 2:selected saving account")
    setTimeout(callback,1000)
}
function selectoption(callback) {
    console.log("step 3 :select the withdraw option")
    setTimeout(callback,3000)
}
function entersecuritypin(callback) {
    console.log("step 4:created a security pin")
    setTimeout(callback,4000)

}
function collectcash() {
    console.log("step 5 : collect the cash")
   
}

function withdrawinatm() {
    insertcard(()=>{
        selectaccount(()=>{
            selectoption(()=>{
                entersecuritypin(()=>{
                    collectcash();
                });
            });
        });
    });
    
}
withdrawinatm()
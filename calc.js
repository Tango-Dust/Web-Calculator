var arr=[];

function c(val) {
    document.getElementById("bar").value = val;
}

function v(val) {
    document.getElementById("bar").value += val;
}

function reset() {
    document.getElementById("bar").value=""
}


function e() {
    try {
        var Formula = document.getElementById("bar").value;
        var Result =eval(Formula);
        
        c(Result)
        arr.push(Formula+"="+Result)
        arr.reverse;
        for(i=0;i<=10;i++)
        {
            if(typeof arr[i] !=="undefined")
            {
                
                    document.getElementById("History").innerHTML+=arr[i]+"</br>";

            }
            
        }
        localStorage.setItem("arr", JSON.stringify(arr));

        var retrievedData = localStorage.getItem("arr");
        var arr2 = JSON.parse(retrievedData);
       

    } catch (e) {
        c('Error')
    }
}
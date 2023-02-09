//getting all the required elements from html
const majorBoxBana = document.querySelector("Tafuta_Mkuu");
const inputBox = majorBoxBana.querySelector("input");
const suggestionBox = majorBoxBana.querySelector("shimo-tafuta");
/// if the user presess any key then the box types
//example
inputBox.onkeyup = (e) =>{
    //console.log(e.target.value); = was just an ellaboration mf
    let UserData = e.target.value; // user enterd data
    let emptyArray = [];
    if(UserData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array values and user char to lowercase and return only those words
            //sentences which starts with user entered word
            return data.toLocaleLowerCase().startsWith(UserData.toLocaleLowerCase());
            //console.log(emptyArray);== try and console alone and see the display on the screen
        });
        emptyArray = emptyArray.map((data) =>{
            return data = '<li>'+ data +'</li>';
        });
        //try alos to console this and view th output
        console.log(emptyArray);
        majorBoxBana.classList.add("active");///shows autocomplete box
        ////
        showSuggestions(emptyArray);
        let allList = suggestionBox.querySelectorAll("li");
        for(let i=0; i< allList.length; i++){
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        majorBoxBana.classList.remove("active");//hide autocomplete box
    }
}


function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item data in textfilledId
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}
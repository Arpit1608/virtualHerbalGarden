const searchfun = () => {

    const filter = document.getElementById('myInput').value.toUpperCase()

const herbscontent = document.getElementById('herbscontent')

// const herbs = herbscontent.querySelectorAll('#herbs')

const li = herbscontent.getElementsByTagName('li')

for(var i=0; i<5; i++){
   
    let naam = li[i].getElementsByClassName('naame')[0]

    if (naam){
        let textvalue = naam.innerHTML

        if(textvalue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}

}

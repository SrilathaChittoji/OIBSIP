const calculateTemp = ()=>{
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    //celsius to fahrenhit
    const celToFah=(cel)=>{
        let fahrenhit=((cel*9/5)+32).toFixed(1);
        return fahrenhit;
    }

    //Fahrenhit to celsius
    const fahToCel =(fah)=>{
        let celsius =((fah-32)*5/9).toFixed(1);
        return celsius;
    }
    if(valueTemp=='cel'){
        document.getElementById("result").innerHTML=celToFah(inputTemp)+" °Fahrenhit";
    }
    else{
        document.getElementById("result").innerHTML=fahToCel(inputTemp)+" °Celsius";
    }
}

function display(value) {

    document.getElementById('textArea').value += value

}


function calculate(){
    var fieldvalues = document.getElementById('textArea').value

    var calValue = eval(fieldvalues)

    document.getElementById('textArea').value= calValue

}

function clearValue(){
    document.getElementById('textArea').value = ''
}
function display(number){
    document.getElementById('text_area').value += number
}
function calculate(){
    var expression=document.getElementById('text_area').value
    var result=eval(expression)
    document.getElementById('text_area').value = result
}
function clear_field(){
    document.getElementById('text_area').value = ''
}
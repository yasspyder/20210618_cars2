function f(elem) {
    var p = elem.src.replace('small', 'big');
    var b = document.getElementById("big");
    b.src = p;
}

function ImageError() {
    document.querySelector('#error').innerHTML = 'нет большой картинки';
}
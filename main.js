//Get Value
document.querySelectorAll('input[type=color]').forEach(function (picker) {
    //Target Point
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
        codeArea = document.createElement('span');

    codeArea.innerHTML = picker.value;
    targetLabel.appendChild(codeArea);

    //Now AddEventListener
    picker.addEventListener('change', function () {
        codeArea.innerHTML = picker.value;
        targetLabel.appendChild(codeArea);
    });
});


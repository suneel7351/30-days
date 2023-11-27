document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('textArea');
    const saveBtn = document.getElementById('saveBtn');
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    const indicator = document.getElementById('indicator');
    let states = [];
    let currentStateIndex = -1;

   
    saveBtn.addEventListener('click', function () {
        const currentText = textarea.value;
        states = states.slice(0, currentStateIndex + 1); 
        states.push(currentText);
        currentStateIndex = states.length - 1;
        updateButtons();
    });

  
    undoBtn.addEventListener('click', function () {
        if (currentStateIndex > 0) {
            currentStateIndex--;
            textarea.value = states[currentStateIndex];
        }
        updateButtons();
    });


    redoBtn.addEventListener('click', function () {
        if (currentStateIndex < states.length - 1) {
            currentStateIndex++;
            textarea.value = states[currentStateIndex];
        }
        updateButtons();
    });


    function updateButtons() {
        undoBtn.disabled = currentStateIndex === 0;
        redoBtn.disabled = currentStateIndex === states.length - 1;

      
        indicator.style.display = currentStateIndex === 0 ? 'block' : 'none';
        indicator.innerText = currentStateIndex === 0 ? 'No more states to undo' : '';
    }
});

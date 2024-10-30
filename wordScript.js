function wordCalculation() {
    const text = document.getElementById('content').value;
    word = false;
    let wordcount = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char !== ' ' && char !== '\n' && char !== '\t') {
            if (!word) {
                word = true;
                wordcount++;
            }
        }
        else {
            word = false;
        }
    }
    document.getElementById('result').textContent = "Word count:" + " " + wordcount;
}
function compareData() {
    const data1 = document.getElementById('data1').value.trim().toLowerCase();
    const data2 = document.getElementById('data2').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');

    const words1 = data1.split(/\s+/);
    const words2 = data2.split(/\s+/);

    let count = 0;
    words1.forEach(word => {
        if (words2.includes(word)) {
            count++;
        }
    });

    const similarity = (count / Math.min(words1.length, words2.length)) * 100;

    resultElement.innerHTML = `Similarity: ${similarity.toFixed(2)}%`;
}

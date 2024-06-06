function executeCommand() {
    const input = document.getElementById('commandInput').value.trim().toLowerCase();
    const output = document.getElementById('output');
    
    // Clear previous output
    output.innerHTML = '';
    
    if (input === 'oi') {
        const message = document.createElement('p');
        message.textContent = 'seu sorriso é lindo';
        output.appendChild(message);
        output.style.display = 'block';
    } else if (input === 'obrigada') {
        const img = document.createElement('img');
        img.src = 'cute.jpeg';
        img.alt = 'Imagem fornecida';
        output.appendChild(img);
        output.style.display = 'block';
    } else if (input === 'te amo') {
        const img2 = document.createElement('img');
        img2.src = 'MIUDEUS.png';
        img2.alt = 'Segunda Imagem';
        output.appendChild(img2);
        output.style.display = 'block';
    } else {
        const unknownCommand = document.createElement('p');
        unknownCommand.textContent = 'agradeça';
        output.appendChild(unknownCommand);
        output.style.display = 'block';
    }
}

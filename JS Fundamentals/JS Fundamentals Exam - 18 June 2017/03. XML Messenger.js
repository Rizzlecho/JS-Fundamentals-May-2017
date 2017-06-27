function xmlMessenger(input) {
    let pattern = /\<[a-z]+\s+\w{2}\=\"([A-Za-z0-9\s]+\s*[A-Za-z0-9\s]*)\"\s+\w{4}\=\"([A-Za-z\s]+)\"\s*(.*?)*\>(.*?)<\/[A-Za-z]+\>/g;
    let match = pattern.exec(input);
    let html = '';


    while (match) {
        html += `<article>\n`;
        html += `  <div>From: <span class="sender">${match[1]}</span></div>\n`;
        html += `  <div>To: <span class="recipient">${match[2]}</span></div>\n`;
        html += `  <div>\n`;
        html += `    <p>${match[4]}</p>\n`;
        html += `  </div>\n`;
        html += `</article>\n`;
        match = pattern.exec(input)
    }

    // while (!match) console.log();
    console.log(html);
}

xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);


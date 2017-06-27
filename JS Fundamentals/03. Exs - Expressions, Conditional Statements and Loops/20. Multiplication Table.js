function multiplyNum(num) {
    let html = `<table border ="1">\n`;

    for (let rows = 0; rows <= num; rows++) {
        html += `   <tr>`;
        let counter = rows;

        for (let cols = 0; cols <= num; cols++) {
            if (rows == 0) {
                if (cols == 0) {
                    html += `<th>x</th>`;
                }
                else {
                    html += `<th>${cols}</th>`;
                }
            }
            else {
                if (cols == 0) {
                    html += `<th>${rows}</th>`;
                }
                else {
                    html += `<td>${counter}</td>`;
                    counter += rows;
                }
            }
        }

        html += `</tr>\n`;

    }

    html += `</table>`;

    return html;
}
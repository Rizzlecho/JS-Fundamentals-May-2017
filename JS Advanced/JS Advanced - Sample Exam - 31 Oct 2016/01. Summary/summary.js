function generateSummary(selector) {
    $(selector).click(summarize);

    function summarize() {
        let content = $('#content');

        let summary = $(`<div id="summary"><h2>Summary</h2></div>`);
        let summaryParagr = $('<p>');
        summary.append(summaryParagr);
        let strong = content.find('strong');

        for (let elem of strong) {
            summaryParagr.append(elem.textContent);
        }
        content.parent().append(summary);
    }
}
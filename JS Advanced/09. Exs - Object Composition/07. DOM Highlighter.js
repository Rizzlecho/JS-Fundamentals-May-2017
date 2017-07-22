function highlight(selector) {
    let leaves = $(`${selector} *:not(:has(*))`);
    let maxCount = 0;
    let deepestElement;
    leaves.each(function(index, element) {
        let count = 0;
        let copyElement = element;
        while (element) {
            count++;
            element = $(element).parent()[0];
        }
        if (count > maxCount) {
            maxCount = count;
            deepestElement = copyElement;
        }
    });
    let selectedElement = $(selector)[0];
    while (deepestElement && deepestElement !== selectedElement) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }
    $(selector).addClass('highlight');
}
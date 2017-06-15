function formatHelper(input) {
    let text = input[0];
    text = text.replace(/([.,!?:;])\s*/g,(match) => match.trim() + ' ');
    text = text.replace(/\s*([.,!?:;])/g,(match) => match.trim());
    text = text.replace(/\.\s*\.\s*\.\s*!/g, '...!');
    text = text.replace(/(\.\s*)([0-9]+)/g, (match, gr1, gr2) => gr1.trim() + gr2);
    text = text.replace(/"([^"]+)"/g, (match, gr1) =>`"${gr1.trim()}"`);
    console.log(text);
}

formatHelper(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);
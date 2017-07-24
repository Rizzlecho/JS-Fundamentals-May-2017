class MailBox {
    constructor(mailBox) {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        this.mailBox.push({subject: subject, text: text});
        return this;
    }

    get messageCount() {
        if (this.mailBox.length === 0) {
            return 0;
        }
        return this.mailBox.length;
    }

    deleteAllMessages() {
        return this.mailBox = [];
    }

    findBySubject(substr) {
        let matchedMess = [];
        for (let obj of this.mailBox) {
            if (obj.subject.indexOf(substr) != -1) {
                matchedMess.push(obj);
            }
        }
        return matchedMess;
    }

    toString() {
        let result = '';
        if (this.mailBox.length == 0) {
            return ` * (empty mailbox)`
        }
        else {
            for (let obj of this.mailBox) {
                result += ` * [${obj.subject}] ${obj.text}\n`;
            }
        }
        return ' ' + result.trim();
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());


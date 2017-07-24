class Task {
    constructor (title, deadline){
        this.titleName = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    set title(title){
        return this;
    }

    get title(){
        return this;
    }

    get isOverdue(){
       if (this.deadline < Date.now()) {
           throw Error;
       }
       else return true;
    }

    static comparator(a,b){

    }

    toString() {
        if (this.isOverdue === false) {
            return '(overdue)'
        }
    }
}
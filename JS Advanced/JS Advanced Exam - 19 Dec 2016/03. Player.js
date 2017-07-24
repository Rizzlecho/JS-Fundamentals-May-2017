class Player {
    constructor (nickName){
        this.nickName = nickName;
        this.scoreList = [];
    }

    addScore(score){
        if (!isNaN(score) && score !== null) {
            this.scoreList.push(+score);
            this.scoreList.sort((a,b) => b-a);
        }
        return this;
    }

    get scoreCount(){
        return this.scoreList.length;
    }

    get highestScore(){
        return this.scoreList[0];
    }

    get topFiveScore(){
        return this.scoreList.slice(0,5);
    }

    toString(){
        return `${this.nickName}: [${this.scoreList}]`
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

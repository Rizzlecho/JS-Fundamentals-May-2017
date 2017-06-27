function solve(dataRows) {
    let uniqueSequences=[];
    for (let dataRow of dataRows) {
        let numArr=JSON.parse(dataRow).map(Number).sort((a,b)=>b-a);
        let curSum=numArr.reduce((a,b)=>a+b);
        if( !uniqueSequences.find(arr=>arr.reduce((a,b)=>a+b)===curSum)){
            uniqueSequences.push(numArr);
        }

    }

    uniqueSequences.sort((a,b)=>a.length>b.length).forEach(arr=>console.log(`[${arr.join(', ')}]`));
}
GradingPolicy=() =>{
    let Array=[90,70,60,86,46,23];
    let sum=0;
    for (let key of Array) {
        sum+=key;
    }
    let Avg=sum/Array.length;
    if(Avg>=80)
    {
        console.log("A+")
    }
    else if(Avg>=70)
    {
        console.log("A");
    }
    else if(Avg>=60)
    {
        console.log("B");
    }
    else if(Avg>=45)
    {
        console.log("C")
    }
    else if(Avg>=33)
    {
        console.log("D");
    }
    else
    {
        console.log("Fail");
    }
}
GradingPolicy();
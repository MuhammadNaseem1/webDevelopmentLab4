checkSpeedLimit=(num) =>
{
    if(num<=70)
    {
        console.log("Good Safe Driving");
    }
    else if(num>70&&num<=120)
    {
        let point=parseInt((num-70)/5);
        console.log("'Speed Limit Crossed by Penalty Point:"+point);
    }
    else if(num>120)
    {
        let point=parseInt((num-70)/5);
        console.log("License Suspended,because your point is more than 10 and your point is:"+point);
    }
}
checkSpeedLimit(120);
checkSpeedLimit(75);
checkSpeedLimit(78);
checkSpeedLimit(175);
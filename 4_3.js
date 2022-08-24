check = () => {
    let OBJ={id:123,text:"hello world",number:1234,phone:"031XXXXXXXXX"}
    for (let key in OBJ) {
        if(typeof OBJ[key]==="string")
        {
            console.log(OBJ[key]);
        }
    }
}
check();
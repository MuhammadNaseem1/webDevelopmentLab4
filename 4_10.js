let OBJ={Name:"Umair",id:{CMS:"023-18-0040"},Email:"umairnoonari98@gmail.com"}
if(Object.keys(OBJ).length==0)
{
    console.log("NULL");
}
else
{
    for (let key1 in OBJ) {
        console.log(key1+":"+OBJ[key1])
        if(OBJ[key1] instanceof Object)
        {
            for (let key2 in OBJ[key1]) {
                console.log(key2+":"+OBJ[key1][key2]);
            }
        }
    }
}
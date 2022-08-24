reversestring=function(value)
{
    let a="";
    for(let i=value.length;i>=0;i--)
    {
        a+=value[i]
    }
    console.log(a);
}
reversestring("Hello");
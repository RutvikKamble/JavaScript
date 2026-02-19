
function DisplayFactors(no)
{
    let iFact = 1;
    let iCnt = 0;
    for(iCnt = 1; iCnt <= (no/2); iCnt++)
    {
        if((no % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 20;
    let iRet = 0;

    iRet = Factorial(iValue);
    
    console.log("Factorial is of ${iValue} is ${iRet}");
}

main();
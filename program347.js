
function DisplayFactors(no)
{
    let iFact = 1;
    let iSum = 0;
    let iCnt = 0;
    for(iCnt = 1; iCnt <= (no/2); iCnt++)
    {
        if((no % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    if (iSum == no)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 20;
    let bRet = 0;

    bRet = Factorial(iValue)

    if(bRet == true)
    {
        console.log(`${iValue} is a perfect numbert`);
    }
    else
    {
        console.log(`${iValue} is not a perfect numbert`);
    }
}

main();
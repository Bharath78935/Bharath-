let usc = 0;
let csc = 0;

const ch = document.querySelectorAll(".Img");
const msg = document.querySelector("#win");
const sc = document.querySelector("#com-sc");
const sc2 = document.querySelector("#u-sc");


const Game= (Imid) =>
{
    console.log("clicked is",Imid)
    const i = choice();
    console.log("computer is",i)
    if(Imid == i)
    {
        msg.innerText = " It is Draw!"
        console.log("draw")
    }
    else
    {
        if(Imid == "rock")
        {
            if(i == "paper")
            {
                msg.innerText = `You Lost! ${i} beats ${Imid}`
                csc++;
                sc.innerText = csc; 

                console.log("lost")
            }
            else
            {
                msg.innerText = "You WIN!"
                usc++;
                sc2.innerText = usc; 
                console.log("win")
            }
        }
        else if(Imid == "paper")
        {
            if(i == "scissors")
            {
                msg.innerText = "You Lost!" 
                csc++;
                sc.innerText = csc;
                console.log("lost")
            }
            else
            {
                msg.innerText = "You WIN!"
                usc++;
                sc2.innerText = usc; 
                console.log("win")
            }
        }
        else{
            if(i == "rock")
            {
                msg.innerText = "You Lost!" 
                csc++;
                sc.innerText = csc; 
                console.log("lost")

            }
            else
            {
                msg.innerText = "You WIN!"
                usc++;
                sc2.innerText = usc; 
                console.log("win")
            }
        }
    }
}
const choice =() =>{

    const c = ["rock","paper","scissors"];
    const comid = Math.floor(Math.random() * 3);
   
    return c[comid];
}
ch.forEach((Img) => {
    Img.addEventListener("click",() =>
    {
        const Imid = Img.getAttribute("id");
        Game(Imid);
    })
})
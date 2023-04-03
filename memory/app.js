
const Images=[];
const ImagesInit=["king.jpeg","queen.jpeg","as.png","joker.jpeg"]
const ImagesTir=[0,0,0,0];

let fshut,sshut;
let nbshut=0;
let tour="J1";
let s1=0;
let s2=0; 

function reset()
{
    for (let i =0; i <ImagesInit.length * 2; i++)
    {
        while (true)
        {
            let tir = Math.floor(Math.random() * ImagesInit.length);
            console.log("tir : ", tir);
            console.log("ImagesTir : ", ImagesTir);
            if (ImagesTir[tir] < 2)
            {
                Images.push(ImagesInit[tir]);
                ImagesTir[tir]++;
                console.log("Images : ", Images);
                break;
            }
        }
        
    }
    console.log("Images : ", Images);
}


function reverse()
{
    console.log("nbshut = ", nbshut);
    document.getElementById(event.target.id).src=Images[event.target.id];

    if(nbshut==0)
    {
        nbshut ++;
        console.log("nbshut = ", nbshut);
        fshut=event.target.id;
    }
    else
    {
        sshut = event.target.id;
        console.log("fshut = ", fshut, " sshut = ", sshut);
        console.log("Images[fshut] = ", Images[fshut], " Images[sshut] = ", Images[sshut]);
        if(Images[fshut] == Images[sshut])
        {
            if (tour=="J1") 
                s1+=1;
            else 
                s2+=1;   
            document.getElementById("s1").innerHTML="Score 1 : "+s1;
            document.getElementById("s2").innerHTML="Score 2 : "+s2;         
        }
        else
        {

            setTimeout(goback, 800);
        }
        nbshut=0;
    }
    console.log("nbshut = ", nbshut);


}

function goback()
{
    document.getElementById(fshut).src="back.png";
    document.getElementById(sshut).src="back.png";
    if (tour=="J1") 
        tour="J2";
    else 
        tour="J1";

    document.getElementById("tour").innerHTML="Tour : "+tour;       
}

reset();

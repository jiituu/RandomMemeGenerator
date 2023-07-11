import React from "react";


export default function Meme(){

    const [Meme ,setMeme]=React.useState({
        Toptext:"",
        Bottomtext:"",
        Randomimage:"http://i.imgflip.com/1bij.jpg"

    })

    const[allMeme, setAllMeme]= React.useState({})



    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data =>setAllMeme(data.data.memes))
    },[])
    function getMeme(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url

        setMeme(PrevMeme =>({
            ...PrevMeme,
            Randomimage:url
        }))
    }



    function handlechange(event){

        setMeme(PrevMeme=>{
            return{
                ...PrevMeme,
                [event.target.name]: event.target.value
            }
        })

    }



    return(
        <div className="Body">
            <div className="Form">
            <input
            type="text"
            placeholder="Toptext"
            onChange={handlechange}
            name="Toptext"
            value={Meme.Toptext}
            />
            <input
            type="text"
            placeholder="Bottomtext"
            onChange={handlechange}
            name="Bottomtext"
            value={Meme.Bottomtext}
            />
            <button onClick={getMeme}>Click to Get A Meme Image </button>
            </div>

            <div className="texts">
                <h1 className="top">{Meme.Toptext}</h1>
                    <img className="MemeImage" src={Meme.Randomimage}/>
                <h1 className="bottom">{Meme.Bottomtext}</h1>
            </div>
            

        </div>
    )


}

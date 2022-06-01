import React, { useState } from 'react';
import copy from "copy-to-clipboard"; 

export default function Textform(props)
{
    const [text,setText] = useState("");

    const handleonclick= () =>{
        let newText=text.toUpperCase();
        setText(newText);
          props.showAlert("Converted to Uppercase","success");

    }
    const handleonlower= () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    } 
     const handleonclear= () =>{
        let newText="";
        setText(newText);
        props.showAlert("Text Removed","success");
    }
    const handleoncopy= () =>{
        copy(text); 
        //alert(`You have copied "${text}"`);
        props.showAlert("Text Copid to Clipboard","success");
    }
    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const handleondownload= () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("File will be downloaded","success");
      };

   /* const [btn,setbtnText] = useState('Enable Dark Mode')
    const [style,setstyle] = useState({color: 'black',backgroundColor :'white'})
    const darkmode = () => {
           if(style.color === 'black'){
               setstyle({
                color: "white",backgroundColor :"black"
               });
               setbtnText("Enable Light Mode");
           }
           else
           {
            setstyle({
                color: "black",backgroundColor :"white"
                });
                setbtnText("Enable Dark Mode");
           }
      }*/
    return(
  <>
        <div  style={{ color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-3 mt-2'>{props.title}</h1>
            
            <div className="mb-3">
                <textarea className='form-control' value={text} id="mybox" rows="6" onChange={handleonchange}
                style={{ backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black',cursor:"pointer"}}>
                     </textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleonclick}>Convert To Upercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleonlower}>Convert To Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleonclear}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleoncopy}>Copy</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleondownload}>Download</button>

        
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length!==0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something in the textbox above to preview here.."}</p>
        </div>

</>);

}
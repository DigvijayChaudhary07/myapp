import React,{ useState} from 'react'

export default function home() {
  let a = 10;
  let obj = {
    name : "digvijay",
    age : 20,
  }

  const [datas,setData] = useState(0);
  const handleClick = () => {

    console.log("Button Clicked");
    SVGMetadataElement(data + 1);
  }
  return (

      <div>{a}{obj.name}
      <button onclick={handleClick}>click me</button>
      <p>value of a : {a}</p>
    </div>
  )
}

/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=08774e3a23dee337275432d10fb96684';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click' , performAction);

function performAction(e){
 // const todWeather = document.getElementById('zip').Value;
 const city = document.getElementById('zip').value;
 const feeling = document.getElementById('feelings').value;

  getWeather(baseURL,city,apiKey)

  .then(function(data){
   //console.log(data.main.temp)
  // console.log(newDate)
   //console.log(feeling)  
  postData('/sendData',{temp:data.main.temp ,date:newDate, feeling:feeling} )
  
  .then(res => updateUI())

  })
  
}

const getWeather = async (baseURL, city, apiKey) => {
  if (city === ""){
    alert("Enter zip code,please!");
  }else{
  const res = await fetch (baseURL+city+apiKey)
  try {
        const data= await res.json();
       // console.log(data);
        return data;
  } catch(error){
    console.log("error",error);

  }
}
}

const postData = async(url='' , data={})=>{
  //console.log(data);
  const x= await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data
    })
  });
  //console.log(data);
  try {
   // const newData = await response.json();
    //console.log(data);
    const newData = JSON.stringify(data);
//    console.log(newData);
    return newData;

  }catch(error){
    console.log("error",error)
  }
}

const updateUI = async () => {
  const request = await fetch('/getData');
  //console.log(request);
  try{
    const allData = await request.json();    //JSON.stringify(request) ;  
    console.log(allData);
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.feeling;

  }catch(error){
    console.log("error",error)
  }
}

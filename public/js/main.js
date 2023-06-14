const cityName=document.getElementById('cityName')
const submitbtn=document.getElementById('submitbtn')
const city_name=document.getElementById('city_name')
const temp_real_val=document.getElementById('temp_real_val')
const temp_status=document.getElementById('temp_status')
const datahide=document.querySelector('.middle_layer')
              


const getInfo=async(event)=>{
    event.preventDefault()
    let cityVal=cityName.value;
    if(cityVal==="")
    {
         city_name.innerText=`Please Write the name before Search` 
         datahide.classList.add("data_hide") 
    }else
    {
        try
        {
            // let url=`https://api.openweathermap.org/data/2.5/weather?q=&appid=6c1fe840780ba792cf24fa2b18547c50`
            let url=`api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=6c1fe840780ba792cf24fa2b18547c50`
            const response=await fetch(url);
            // console.log(response)
            const data=await response.json();
            // const data=JSON.parse(data1)
            const arrData=[data]
            //  console.log(data);
            city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`
            //  //data.name
            temp_real_val.innerText=arrData[0].main.temp
            // //  data.main.temp
            temp_status.innerText=arrData[0].weather[0].main
            //   data.weather.main
            
            // const mood=arrData[0].weather[0].main
            // if(mood=="clear")
            // {
            //     temp_status.innerHTML="<i class='fa fa-cloud' ><img src='../photos/sunny.jpg></i>"
            // }else if(mood=="Rain")
            // {
            //      temp_status.innerHTML="<i class='fa fa-cloud' ><img src='../photos/raining.jpg></i>"
            // }else if(mood=="Thunder")
            // {
            //      temp_status.innerHTML="<i class='fa fa-cloud' ><img src='../photos/thunder.jpg></i>"
            // }
            // else{
            //     temp_status.innerHTML="<i class='fa fa-cloud' ><img src='../photos/sunny.jpg></i>"
            // }
            datahide.classList.remove('data_hide') 
            cityVal=""

        }
        catch
        {
            cityVal=" "
            datahide.classList.add('data_hide')
            city_name.innerText=`Please Write the city name properly` 
            console.log('add proper city Name')
        }
    }
}
submitbtn.addEventListener('click',getInfo)

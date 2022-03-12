document.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://app.ticketmaster.com/discovery/v2/events.json?apikey=pBbNrysNUXEUQP3owiTJt3wDifwv5C8Q&venueId=KovZpZAaeIvA").then((data)=>{
    console.log(data);
    let redRocksEventArray = data.data._embedded.events,
    venueR = redRocksEventArray[0]._embedded.venues[0].name
    let headlinerArray = redRocksEventArray.reduce((a,e)=>{
      a.push(e.name)
      return a
    },[])
    let dateArray = redRocksEventArray.reduce((aa,e)=>{
      aa.push(e.dates.start.localDate)
      return aa
    },[])
    let timeArray = redRocksEventArray.reduce((aaa,e)=>{
      aaa.push(e.dates.start.localTime)
      return aaa
    },[])
    console.log(venueR);
    console.log(headlinerArray);
    console.log(dateArray);
    console.log(timeArray);
    let seedArray = []
    for(let i = 0; i<headlinerArray.length; i++){
      if(timeArray[i]===undefined){
        headlinerArray.slice(i,1)
        dateArray.slice(i,1)
        timeArray.slice(i,1)
      }else{
        seedArray.push({venue:venueR, headliner:headlinerArray[i], date:dateArray[i], startTime:timeArray[i]})
      }
    }
    console.log(seedArray);
  })
})

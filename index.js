import express from "express";

const server = express()

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];


server.get('/holidays', (resquest, response)=>{

      response.send(holidays)
})

server.get('/is-today-holiday', (request, response)=>{
    const hoje = new Date();

    if(holidays.some(dia=> dia.date==hoje.toLocaleDateString())){
        response.send("Sim, hoje é nome-do-feriado")
    }
    else{
        response.send('Não, hoje não é feriado')
    }
    
})


server.get('/holidays/:monthId', (req, res) => {


    const id = req.params.monthId;
    
  const monthHoliday =[]

for(let i=0; i< holidays.length; i++){
    const date = holidays[i].date
    const month = date.split("/")   
    const holiday ={date:holidays[i].date, name: holidays[i].name, month: month[0]}
    console.log(holiday)
    monthHoliday.push(holiday)}
    console.log("monthHoliday", monthHoliday)

    const selectedMonth = monthHoliday.filter(monthId=> id== monthId.month)
    console.log(selectedMonth)

    res.send(selectedMonth)
  
});
server.listen(4000)
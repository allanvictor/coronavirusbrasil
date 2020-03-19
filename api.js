fetch("https://coronavirus-19-api.herokuapp.com/countries", {
	"method": "GET",
})
.then(response => {
    return response.json();
})
.then(data => {
     brazil=data.find(el => el.country ==="Brazil")
     document.getElementById("data_cases_actives").innerHTML = brazil.active
     document.getElementById("data_cases_registered").innerHTML = brazil.cases
     document.getElementById("data_deaths").innerHTML = brazil.deaths
     document.getElementById("data_recovered").innerHTML = brazil.recovered
})
.catch(err => {
	console.log(err);
});
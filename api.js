fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "fd69e7970bmshe59804d872b3b4fp1d3b19jsn523d63f2198c"
	}
})
.then(response => {
    //console.log(response);
    return response.json();
    //document.getElementById("mortes").innerHTML = JSON.parse(response);
})
.then(data => {
    //console.log(data);
    // document.getElementById("data_country").innerHTML = data.countries_stat[29].country_name
     document.getElementById("data_cases_actives").innerHTML = data.countries_stat[29].active_cases
     document.getElementById("data_cases_registered").innerHTML = data.countries_stat[29].cases
     document.getElementById("data_deaths").innerHTML = data.countries_stat[29].deaths
     document.getElementById("data_recovered").innerHTML = data.countries_stat[29].total_recovered
})
.catch(err => {
	console.log(err);
});
for (let stat in statistics){
	if (stat.charAt(0) == 'r' || statistics[stat] % 2 != 0){
  	    console.log(statistics[stat]);
  }
}
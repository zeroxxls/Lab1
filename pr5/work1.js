let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
console.log (styles.shift());
styles.unshift("Rap", "Reggage");
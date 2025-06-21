const map = new Map()
map.set ('In',"India")
map.set ('Fr',"France")
map.set ('Gr',"Germany")
console.log(map);


//forof loop in map

for (const key of map) {
    console.log(key);
    
}

//forin cannot be apply on map

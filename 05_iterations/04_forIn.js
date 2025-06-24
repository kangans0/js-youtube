// For In 
// used for objects

const myObject = {
    js:"javascript",
    py: "python",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(programming[key]);
}

// Map is not iteratable
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    // console.log(key)
}
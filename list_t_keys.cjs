const fs = require('fs');
const path = require('path');
const re = /t\('([^']+)'\)|t\("([^\"]+)"\)/g;
function walk(dir){
  for(const f of fs.readdirSync(dir)){
    const p = path.join(dir,f);
    if(fs.statSync(p).isDirectory()) walk(p);
    else if(/\.(vue|js)$/.test(f)){
      const txt = fs.readFileSync(p,'utf8');
      let m;
      while((m=re.exec(txt))){
        const key = m[1]||m[2];
        console.log(p, '=>', key);
      }
    }
  }
}
walk(path.join(__dirname,'src'));

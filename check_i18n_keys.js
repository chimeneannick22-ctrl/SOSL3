const fs = require('fs');
const path = require('path');
const messagesModule = require('./src/i18n.js');
const messages = messagesModule.messages || messagesModule;
const re = /t\('([^']+)'\)|t\("([^"]+)"\)/g;
const keys = new Set();
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(vue|js)$/.test(f)) {
      const txt = fs.readFileSync(p, 'utf8');
      let m;
      while ((m = re.exec(txt))) {
        keys.add(m[1] || m[2]);
      }
    }
  }
}
walk(path.join(__dirname, 'src'));
for (const locale of Object.keys(messages)) {
  const missing = [];
  for (const key of keys) {
    const parts = key.split('.');
    let obj = messages[locale];
    for (const part of parts) {
      if (obj && Object.prototype.hasOwnProperty.call(obj, part)) obj = obj[part];
      else { obj = undefined; break; }
    }
    if (obj === undefined) missing.push(key);
  }
  console.log('LOCALE', locale, 'missing', missing.length);
  missing.slice(0, 40).forEach(k => console.log('  ', k));
}

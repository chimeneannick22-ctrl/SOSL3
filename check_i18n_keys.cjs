const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'src', 'i18n.js'), 'utf8');
const start = content.indexOf('const messages = {');
if (start === -1) throw new Error('messages not found');
let i = start + 'const messages = '.length;
let brace = 0;
let inString = false;
let stringChar = null;
let escaped = false;
for (; i < content.length; i++) {
  const ch = content[i];
  if (inString) {
    if (escaped) {
      escaped = false;
    } else if (ch === '\\') {
      escaped = true;
    } else if (ch === stringChar) {
      inString = false;
      stringChar = null;
    }
  } else if (ch === '"' || ch === "'") {
    inString = true;
    stringChar = ch;
  } else if (ch === '{') {
    brace++;
  } else if (ch === '}') {
    brace--;
    if (brace === 0) {
      i++;
      break;
    }
  }
}
const objectText = content.slice(start + 'const messages = '.length, i);
const messages = eval('(' + objectText + ')');
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
      if (obj && Object.prototype.hasOwnProperty.call(obj, part)) obj = obj[part]; else { obj = undefined; break; }
    }
    if (obj === undefined) missing.push(key);
  }
  console.log('LOCALE', locale, 'missing', missing.length);
  missing.slice(0, 40).forEach(k => console.log('  ', k));
}

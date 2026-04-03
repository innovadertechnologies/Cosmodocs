const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'components');

const replacements = [
  { regex: /#0ea5e9/gi, replace: 'var(--primary)' },
  { regex: /#0284c7/gi, replace: 'var(--primary-dark)' },
  { regex: /#0369a1/gi, replace: 'var(--primary-deeper)' },
  { regex: /#06b6d4/gi, replace: 'var(--primary-dark)' },
  { regex: /14,\s*165,\s*233/g, replace: '181, 211, 51' },
  { regex: /6,\s*182,\s*212/g, replace: '158, 189, 43' },
  { regex: /rgba\(3,105,161/g, replace: 'rgba(134, 163, 29' },
  { regex: /rgba\(14,165,233/g, replace: 'rgba(181, 211, 51' },
  { regex: /rgba\(6,182,212/g, replace: 'rgba(158, 189, 43' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.css') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replace } of replacements) {
        content = content.replace(regex, replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

// Ensure gradient uses don't break with variables inside linear-gradient if unsupported,
// but modern browsers support var() inside linear-gradient.
// We should perhaps replace literal colors directly where var() is tricky?
// Actually in CSS `linear-gradient(135deg, var(--primary), var(--primary-dark))` works perfectly.
// One edge case: in .tsx files style={{ color: "#0ea5e9" }}, replacing with `var(--primary)` is valid in React natively: style={{ color: 'var(--primary)' }}.

processDirectory(directoryPath);
console.log('Done replacing colors.');

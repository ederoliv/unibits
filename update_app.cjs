const fs = require('fs');
const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace imports
content = content.replace(
  'import { ImageIcon, Menu, X, ChevronDown, ChevronUp } from "lucide-react";',
  'import { ImageIcon, ChevronDown, ChevronUp } from "lucide-react";\nimport Navbar from "./components/Navbar";\nimport Footer from "./components/Footer";'
);

// 2. Remove navLinks and footerMenus
content = content.replace(/const navLinks = \[\s*\{[\s\S]*?\}\s*\];\s*/, '');
content = content.replace(/const footerMenus = \[\s*\{[\s\S]*?\}\s*\];\s*/, '');

// 3. Remove state
content = content.replace('const [menuOpen, setMenuOpen] = useState(false);\n  ', '');
content = content.replace('const [email, setEmail] = useState("");\n\n  ', '');

// 4. Replace <header>...</header> with <Navbar />
content = content.replace(/<header[\s\S]*?<\/header>/, '<Navbar />');

// 5. Replace <footer>...</footer> with <Footer />
content = content.replace(/<footer[\s\S]*?<\/footer>/, '<Footer />');

fs.writeFileSync(path, content);
console.log("Updated App.tsx successfully.");

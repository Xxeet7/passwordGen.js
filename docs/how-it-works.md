# 🧠 Technical Documentation – PasswordGen.js

> Internal documentation for developers working on PasswordGen.js

---

## 📦 Project Structure

```
passwordGen.js/
├── bin/
│ └── passwordgen.js # Main CLI entry point (Commander-based)
├── index.js # Core password generation logic
├── package.json # Project config, scripts, dependencies
├── index.test.js # Unit tests for generatePassword()
└── README.md # Public-facing documentation
```

---

## 🚀 How It Works

### 1. CLI Entry Point – `bin/passwordgen.js`

- Uses **Commander.js** to handle command-line arguments and flags.
- Accepts a positional argument for password `length`.
- Supports flags to disable character sets:
  - `-u` → Exclude uppercase
  - `-w` → Exclude lowercase
  - `-n` → Exclude numbers
  - `-s` → Exclude special characters

#### Example:

```bash
passwordgen 16 -u -n

| Name        | Role         | Notes                          |
| ----------- | ------------ | ------------------------------ |
| 7swxrd.Ling | Lead Dev     | Initiator   of password CLI idea |
| Zeropix     | Collaborator | Project owner, CLI architect   |

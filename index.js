const { Command } = require("commander")
const crypto = require("crypto")
const program = new Command()

// var assigning
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()"
let pools = ""

// assigning program version and description
program
    .version("1.0.0", "-v, --version", "output the version number")
    .description("secure password generator with options on the terminal")

// program options and action
program
    .option("-l, --length [number]", "length of the password (default: 8)", "8")
    .option("-n, --numbers", "add numbers to the password")
    .option("-s, --symbols", "add symbols to the password")
    .option(
        "--no-uppercase",
        "Don't add uppercase letters to the password (default: false)",
        true
    )
    .option(
        "--no-lowercase",
        "Don't add lowercase letters to the password (default: false)",
        true
    )
    .action((options) => {

        // check user option to assign pools
        if (options.uppercase && options.lowercase) {
            pools = lowercase + uppercase
        } else if (options.uppercase) {
            pools = uppercase
        } else if (options.lowercase) {
            pools = lowercase
        } else {
            console.error(
                "at least one lowercase or uppercase letter must be true."
            )
        }

        // for number and symbols options
        if (options.numbers) pools += numbers
        if (options.symbols) pools += symbols

        const chars = pools.split("")
        let password = ""

        // making the password
        for (let i = 0; i < Number(options.length); i++) {
            const index = crypto.randomInt(0, chars.length)
            password += chars[index]
        }

        // log it out
        console.log(password)
    })

program.parse()

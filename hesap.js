
let inputValues = new Array()
let inputNumbers = new Array()
let result = 0
let step = 0

// Yaz fonksiyonu ile girilen rakamların hesap makinesine yazılması sağlanır
function Yaz(obje) {
    let input = document.querySelector('#inputArea')
    inputValues.push(obje['value'])
    input['value'] = inputValues.join("")
    
}

// Temizle fonksiyonu ile AC tuşuna tıklanıldığı zaman giris alanı, 
// üst bilgi alanı ve daha önce girilmiş değerler temizlenir 
function Temizle() {
    document.querySelector('#header').innerHTML = ""
    let input = document.querySelector('#inputArea')
    input['value'] = 0
    inputValues = []
    inputNumbers = []
    result = 0
    step = 0
}

function Sil() {
    let giris = document.querySelector('#inputArea')['value']
    if (giris != 0) {
        inputValues.pop()
        document.querySelector('#inputArea')['value'] = inputValues.join("")

        if (inputValues.length == 0) {
            document.querySelector('#inputArea')['value'] = 0
        }
    }
}

// UstBilgiYaz fonksonu ise kullanıcının girdiği değerden sonra 
// hangi işlemi (+-*/) yapacak ise o işlem bilgisinin yazılması
function UstBilgiYaz(Number, Operator) {
    let ustBilgi = document.querySelector('#header')

    if (ustBilgi.innerHTML == "") {
        ustBilgi.innerHTML = `${Number.toLocaleString()} ${Operator}`;
    }
}

function Topla() {
    if (step == 1) {
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} +`
        document.querySelector('#inputArea')['value'] = 0
        step = 2

    }
    else if (step == 2) {
        let number2 = document.querySelector('#inputArea')['value']
        inputNumbers.push(Number(number2))
        inputValues = []
        document.querySelector('#inputArea')['value'] = 0
        result += inputNumbers[0]
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} +`
        inputNumbers = []

    }
    else {
        let number = Number(inputValues.join(""))
        inputNumbers.push(number)
        inputNumbers.length <= 1 ? UstBilgiYaz(number, '+') : "";
        document.querySelector('#inputArea')['value'] = 0
        inputValues = []

        if (inputNumbers.length >= 2) {
            result = inputNumbers[0] + inputNumbers[1]
            document.querySelector('#header').innerHTML = `${result.toLocaleString()} +`
            inputNumbers.splice(0, 1, result)
            inputNumbers.pop()
        }
    }
}

function Cikart() {
    if (step == 1) {
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} -`
        document.querySelector('#inputArea')['value'] = 0
        step = 2

    }
    else if (step == 2) {
        let number2 = document.querySelector('#inputArea')['value']
        inputNumbers.push(Number(number2))
        inputValues = []
        document.querySelector('#inputArea')['value'] = 0

        result -= inputNumbers[0]
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} -`
        inputNumbers = []

    }
    else {
        let number = Number(inputValues.join(""))
        inputNumbers.push(number)
        inputNumbers.length <= 1 ? UstBilgiYaz(number, '-') : "";
        document.querySelector('#inputArea')['value'] = 0
        inputValues = []


        if (inputNumbers.length >= 2) {
            result = inputNumbers[0] - inputNumbers[1]
            document.querySelector('#header').innerHTML = `${result.toLocaleString()} -`
            inputNumbers.splice(0, 1, result)
            inputNumbers.pop()
        }
    }
}

function Carp() {
    if (step == 1) {
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} x`
        document.querySelector('#inputArea')['value'] = 0
        step = 2

    }
    else if (step == 2) {
        let number2 = document.querySelector('#inputArea')['value']
        inputNumbers.push(Number(number2))
        inputValues = []
        document.querySelector('#inputArea')['value'] = 0

        result *= inputNumbers[0]
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} x`
        inputNumbers = []

    }
    else {
        let number = Number(inputValues.join(""))
        inputNumbers.push(number)
        inputNumbers.length <= 1 ? UstBilgiYaz(number, 'x') : "";
        document.querySelector('#inputArea')['value'] = 0
        inputValues = []


        if (inputNumbers.length >= 2) {
            inputNumbers[1] == 0 ? inputNumbers[1] = 1 : "";
            result = inputNumbers[0] * inputNumbers[1]
            document.querySelector('#header').innerHTML = `${result.toLocaleString()} x`
            inputNumbers.splice(0, 1, result)
            inputNumbers.pop()
        }
    }
}

function Bol() {
    if (step == 1) {
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} ÷`
        document.querySelector('#inputArea')['value'] = 0
        step = 2

    }
    else if (step == 2) {
        let number2 = document.querySelector('#inputArea')['value']
        inputNumbers.push(Number(number2))
        inputValues = []
        document.querySelector('#inputArea')['value'] = 0


        result /= inputNumbers[0]
        document.querySelector('#header').innerHTML = `${result.toLocaleString()} ÷`
        inputNumbers = []

    }
    else {
        let number = Number(inputValues.join(""))
        inputNumbers.push(number)
        inputNumbers.length <= 1 ? UstBilgiYaz(number, '÷') : "";
        document.querySelector('#inputArea')['value'] = 0
        inputValues = []

        if (inputNumbers.length >= 2) {
            inputNumbers[1] == 0 ? inputNumbers[1] = 1 : "";
            result = inputNumbers[0] / inputNumbers[1]
            document.querySelector('#header').innerHTML = `${result.toLocaleString()} ÷`
            inputNumbers.splice(0, 1, result)
            inputNumbers.pop()
        }
    }
}


function Sonuc() {
    if (inputValues != [] && inputNumbers != []) {
        inputNumbers.push(Number(inputValues.join("")))
        let ustBilgi = document.querySelector('#header')
        let operator = ustBilgi.innerHTML.split(' ').slice(-1)

        if (operator == '+') {
            if (step != 2) { result = 0 } else { }
            for (const iterator of inputNumbers) {
                result += iterator
            }
            lastNumber = Number(inputValues.join("")).toLocaleString()
            ustBilgi.innerHTML += ` ${lastNumber} =`
            document.querySelector('#inputArea')['value'] = result.toLocaleString()
            inputValues = []
            inputNumbers = []
            step = 1

        } else if (operator == "x") {
            if (step != 2) { result = 1 } else { }
            for (const iterator of inputNumbers) {
                result *= iterator
            }
            lastNumber = Number(inputValues.join("")).toLocaleString()
            ustBilgi.innerHTML += ` ${lastNumber} =`
            document.querySelector('#inputArea')['value'] = result.toLocaleString()
            inputValues = []
            inputNumbers = []
            step = 1

        } else if (operator == "-") {
            result -= inputNumbers.slice(-1)
            lastNumber = Number(inputValues.join("")).toLocaleString()
            ustBilgi.innerHTML += ` ${lastNumber} =`
            document.querySelector('#inputArea')['value'] = result.toLocaleString()

            inputValues = []
            inputNumbers = []
            step = 1
        } else if (operator == '÷') {
            result /= inputNumbers.slice(-1)
            lastNumber = Number(inputValues.join("")).toLocaleString()
            ustBilgi.innerHTML += ` ${lastNumber} =`
            document.querySelector('#inputArea')['value'] = result.toLocaleString()

            inputValues = []
            inputNumbers = []
            step = 1
        }
    }
}

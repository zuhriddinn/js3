do {
    let son = +prompt('Biror bir son kiriting')
    if (son % 2 == 0 && son != 0) {
        alert(son + ' Soni juft son hisoblanadi')
    } else if (son % 2 == 1) {
        alert(son + ' Soni toq son hisoblanadi')
    } else if (son == 0) {
        alert('0 soni toq ham emas juft ham emas')
    } else {
        alert('bu son emas, iltimos son kiriting')
    }
} while (true) 

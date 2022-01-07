function checkAge(age) {
    // if
    if (age > 18) {
        return true;
    } else {
        return confirm("보호자의 동의를 받으셨나요?");
    }
    
    // ?
    return (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?");

    // ||
    return (age > 18)||confirm("보호자의 동의를 받으셨나요?");
}

function min(a,b) {
    // 작은 값 반환
    return (a < b)?a:b;
}

function pow(x,n) {
    if (n != parseInt(n)) {
        return alert("자연수를 입력하세요.");
    } else {
        let result = 1;
        for(let i = 0; i < n; i++) {
            result = result * x;
        }
        return result;
    }
}

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
} else {
    alert( pow(x, n) );
}
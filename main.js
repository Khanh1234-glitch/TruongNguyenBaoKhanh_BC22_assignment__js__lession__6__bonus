/** 
 * Đầu vào:
 * Cho người dùng nhập vào số number
 * sử dụng 2 function 1 là kiểm tra số nguyên tố
 * 2 là in ra các số nguyên tố từ 1 đến n
 * trong function kiểm tra số nguyên tố tạo ra 1 biến cờ hiệu
 * để kiểm tra xem số đó có phải là số nguyên tố hay không
 * Xử lý:
 * Số nguyên tố nói đơn giản là số lớn hơn 1 và bằng 2 và 
 * các số không chia hết cho 2
 * vậy ta sử dụng điều kiện if nếu nó bé hơn 2 thì không phải
 * nếu nó bằng 2 thì là số nguyên tố 
 * nếu nó chia hết cho 2 thì sai
 * còn điều kiện cuối cùng thì sử dụng vòng lặp từ 3 
 * cho đến i <= căn bậc 2 của số người dùng nhập vào rồi nhảy lên 2 số
 * giống như bài tập bên C
 * tạo ra 1 biến rỗng tên là result rồi kiểm tra bằng vòng lặp for
 * đến khi nó bằng number nếu như nó đúng với hàm kiểm tra 
 * thì in ra màn hình
 * Đầu ra:
 * In ra các số nguyên tố từ 1 đến n
 */



function checkPrimeNumber(number) {
    //bien co` hieu
    var flag = true;
    //number <2 tuc la khong phai so nguyen to
    if (number < 2) {
        flag = false;
    } else if (number == 2) {
        flag = true;
    } else if (number % 2 == 0) {
        flag = false;
    } else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function printPrimeNumber() {
    var number = document.getElementById("txtNumber").value;
    var result = "";
    for (var i = 1; i <= number; i++) {
        if (checkPrimeNumber(i)) {
            result += i + " ";
        }
    }
    document.getElementById("footer__total").innerHTML = "Prime numbers are: " + result;
}
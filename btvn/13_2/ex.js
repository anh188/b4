const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const passwordEle =document.getElementById('password');
const cpasswordEle =document.getElementById('cpassword');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

function clearText() {
    const textFields = document.querySelectorAll('input[type="text"]');
    // Kiểm tra xem có ít nhất một trường văn bản hay không
    if (textFields.length > 0) {
        textFields.forEach(text => text.value = "");
    }
    const emailFields = document.querySelectorAll('input[type="email"]');
    if (emailFields.length > 0) {
        emailFields.forEach(text => text.value = "");
    }
    const passFields = document.querySelectorAll('input[type="password"]');
    if (passFields.length > 0) {
        passFields.forEach(text => text.value = "");
    }
}

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;
    let passwordValue = passwordEle.value;
    let cpasswordValue = cpasswordEle.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Yêu cầu nhập đầy đủ họ tên');
        isCheck = false;
    } else if (!isName(usernameValue)) {
        setError(usernameEle, 'Họ Tên phải lớn hơn 8 ký tự');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Yêu cầu nhập email');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng (VD: abc@domain.xy)');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (phoneValue == '') {
        setError(phoneEle, 'Yêu cầu nhập số điện thoại');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    
    if (passwordValue == '') {
        setError(passwordEle, 'Yêu cầu nhập mật khẩu');
        isCheck = false;
    } else if (!isPass(passwordValue)) {
        setError(passwordEle, 'Mật khẩu phải có ít nhất: một chữ thường, một chữ hoa, một số,một ký tự đặc biệt trong danh sách (!@#$%^&*).Tổng độ dài ít nhất 8 ký tự.');
        isCheck = false;
    } else {
        setSuccess(passwordEle);
    }
    
    if (cpasswordValue == '') {
        setError(cpasswordEle, 'Yêu cầu xác nhận mật khẩu');
        isCheck = false;
    } else if (cpasswordValue!=passwordValue) {
        setError(cpasswordEle, 'Mật khẩu không trùng khớp');
        isCheck = false;
    } else {
        setSuccess(cpasswordEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isName(username) {
    // Yêu cầu tên người dùng có ít nhất 8 ký tự
    const re = /^.{8,}$/;
    return re.test(username);
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isPass(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    return re.test(password);
}

function isPhone(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

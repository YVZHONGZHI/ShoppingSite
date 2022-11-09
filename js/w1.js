function judge() {
	let p = document.getElementById("p").value;
	let p1 = document.getElementById("p1").value;
	if(p === '' || p1 === ''){
		alert("密码不能为空!")
	}
	else if(p === p1){
		alert("注册成功!")
	}
	else{
		alert("两次输入的密码不一致!")
	}
}
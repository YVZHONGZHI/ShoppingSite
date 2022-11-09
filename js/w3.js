function test() {
	alert("不  给  选")
}

function text() {
	let p = document.getElementById("p").value;
	if(p === ''){
		alert("账号密码不能为空!")
	}
	else{
		let p1 = prompt("再次确认账号密码");
		if(p1 === ''){
			alert("账号密码不能为空!")
		}
		else if(p === p1){
			let inputEle = document.getElementById("w1");
			inputEle.setAttribute('form','w')
			alert("暂  时  缺  货  ,  为  您  推  荐  其  它  产  品")
		}
		else{
			alert("两次输入的账号密码不一致!")
		}
	}
}
// Количество итераций одного теста
var COUNT_PASSED = 20000,

// label - заголовок теста
// group - array({ label: test(function) })
groupTest = function (label, group) {
	var result = [];

	for (var func in group)
		result[func] = initTest(group[func]);

	saveResult(label, result);
},

// Инициализация таймера, запуск теста
// func - функция
// count - количество итераций (опционально)
initTest = function (func, count) {
	if (!count) count = COUNT_PASSED;

	var startTime = new Date().getTime();

	runTest(func, count);
	
	var endTime = new Date().getTime(),
		time = endTime - startTime;

	return count / time;
},

runTest = function (func,count) {
	for (var i=0;i<count;i++) func();
},

// label - заголовок теста
// result - array() 
saveResult = function (label,result) {
	var template = document.createElement('div'),
		html = '';
	
	template.className = 'result';

	html += '<h1>' + label + '</h1>'

	for (var key in result) {
		html += key + '=>' + result[key] + '</br>'
	}

	template.innerHTML = html;
	document.body.appendChild(template);
};
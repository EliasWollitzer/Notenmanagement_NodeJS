console.log('Hi there')

let testList = []

function updateTestList() {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/getTestList");
    httpReq.onload = function () {
        if (this.status == 200) {
            testList = JSON.parse(this.responseText)
            showAll(testList)
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()
} 
    

    function showAll(testList) {
        console.log("showTestList")
        let str = '<table>'
        str += '<tr><th>Name</th><th>Nachname</th><th>Art</th><th>Thema</th><th>Datum</th><th>Note</th></tr>'
        for (let i = 0; i < testList.length; i++) {
    
            str += '<tr><td>' + testList[i].firstName + '</td><td>' + testList[i].lastName + '</td>'
            // Ändern Button
            str += '<td>' + testList[i].Art + '</td><td>' + testList[i].Thema + '</td>'
            // Löschen Button
            str += '<td>' + testList[i].Datum + '</td><td>' + testList[i].Note + '</td>'
        }
        str += '</tr></table>'
        document.getElementById('updateEL').innerHTML = str
        return str    
    }

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function getTextData(multy_obj){
    var WordText = Array();
    for(var i = 0; i < ListText.length; i++)
        WordText.push(ListText[i].split(' '));
    for(var i = 0; i < WordText.length; i++){
        var single_obj = {};
        single_obj['haeng'] = WordText[i][0].trim();
        single_obj['time'] = WordText[i][1].trim();
        single_obj['arrive'] = WordText[i][2].trim();
        single_obj['wangeup'] = WordText[i][3].trim();
        multy_obj.push(single_obj);
    }
    return multy_obj;
}
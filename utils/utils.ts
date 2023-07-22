// 识别富文本内有没有图片 ，有图片就返回第一张图片，可以是base64 也可以是网络图片 如果没有就返回null
export function getFirstImg(htmlStr) {
    var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
    var arr = [];
    while (true) {
        var temp = reg.exec(htmlStr);
        if (temp) {
            arr.push(temp[2]);
        }
        else {
            break;
        }
    }
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return null;
    }
}

// 识别富文本内容， 返回出desc 用于列表页展示
export function getDesc(htmlStr) {
    var reg = /<[^>]+>/g;
    var result = htmlStr.replace(reg, "");
    return result;
}

function call_noti(msg, type, time) {
    if (!time)
        time = 2000;
    toastr.options.closeButton = true;
    toastr.options.timeOut = time;
    toastr.options.extendedTimeOut = time;
    toastr[type](msg);
}

function load(e) {
    e.parent().append('<i class=" fa fa-circle-o-notch fa-spin thanhcong"></i><br><b>Vui lòng đợi</b>')
}

function btnlinkload(curren, text) {
    if (!text) {
        text = "Vui lòng đợi";
    }
    curren.html(text + ' <i class="fa fa-spinner fa-spin uk-icon-spinner uk-icon-spin"></i>');
    curren.prop("disabled", true);
}

function loadingHtml(curren) {
    curren.html('<div class="lds-ellipsis">\n' +
            '        <div></div>\n' +
            '        <div></div>\n' +
            '        <div></div>\n' +
            '        <div></div>\n' +
            '    </div>');
}

function btnlinkthanhcong(curren, text) {
    curren.html(text);
    curren.prop("disabled", false);
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    firefox = key;
    if (key != 13) {
        key = String.fromCharCode(key);
        var regex = /[0-9a-zA-Z@.]|\,/;
        if (!regex.test(key) && firefox != 8 && firefox != 9) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    }
}

function validate2(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    firefox = key;
    key = String.fromCharCode(key);
    var regex = /[0-9a-zA-Z]/;
    if (!regex.test(key) && firefox != 8 && firefox != 9) {
        //  theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}

function scrollToElement(id, plus) {

    $('html,body').animate({scrollTop: ($("#" + id).offset().top) + plus}, 'slow');
}

function trimSpace(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
}

function ktanh(file, limitSize) {
    limitSize = limitSize || 8388608;
    chonfile = file;
    var fileIn = file[0];
    if (fileIn.files === undefined || fileIn.files.length == 0) {

        alert("Không có ảnh nào được chọn");
        chonfile.val(null);

        return false;
    } else {
        var file = fileIn.files[0];
        type = file.type;
        size = file.size;
        if (size <= limitSize) {
            if (type == "image/jpg" || type == "image/jpeg" || type == "image/png" || type == "image/gif") {
                return true;
            } else {
                alert("Vui lòng chọn 1 file ảnh");
                chonfile.val(null);
                return false;
            }

        } else {

            alert("Dung lượng file nhỏ hơn " + (limitSize / 1024 / 1024) + "MB");
            chonfile.val(null);
            return false;

        }
    }
}

function validateCVFile(file, limitSize) {
    limitSize = limitSize || 8388608;
    let name = file.name;
    sl = name.length;
    vitridaucham = 0;
    for (i = sl - 1; i > 0; i--) {
        if (name[i] == '.') {
            vitridaucham = i;
            break;
        }
    }

    type = name.substring(vitridaucham + 1).toLowerCase();
    size = file.size;
    if (size < limitSize) {
        if (type == "doc"
                || type == "docx"
                || type == "xls"
                || type == "xlsx"
                || type == "csv"
                || type == "ppt"
                || type == "pptx"
                || type == "pdf"
                || type == "zip"
                || type == "rar"
                || type == "7z"
                || type == "png"
                || type == "jpeg"
                || type == "jpg") {
            return true;
        } else {
            alert("File không hợp lệ: " + name + " \nVui lòng chọn đúng định dạng (.doc, .docx, .xls, .xlsx, .csv, .ppt, .pptx, .pdf, .zip, .7z, .rar, .png, .jpeg, .jpg)");
            return false;
        }
    } else {
        alert("File không hợp lệ: " + name + " \nDung lượng file nhỏ hơn " + (limitSize / 1024 / 1024) + "MB");
        return false;
    }
}

function ktcv(file, limitSize) {
    limitSize = limitSize || 8388608;
    chonfile = file;
    var fileIn = file[0];
    if (fileIn.files === undefined || fileIn.files.length == 0) {
        alert("Không có tập tin nào được chọn");
        chonfile.val(null);
        return false;
    } else {
        var file = fileIn.files[0];
        var result = validateCVFile(file, limitSize);
        if (result === false) {
            chonfile.val(null);
        }
        return result;
 
    }
}

function checkfile(file, limitSize) {
    limitSize = limitSize || 8388608;
    name = file.name;
    sl = name.length;
    vitridaucham = 0;
    for (i = sl - 1; i > 0; i--) {
        if (name[i] == '.') {
            vitridaucham = i;
            break;
        }
    }

    type = name.substring(vitridaucham + 1).toLowerCase();
    size = file.size;
    if (size < limitSize) {
        if (type == "doc"
                || type == "docx"
                || type == "xls"
                || type == "xlsx"
                || type == "csv"
                || type == "ppt"
                || type == "pptx"
                || type == "pdf"
                || type == "zip"
                || type == "rar"
                || type == "7z"
                || type == "png"
                || type == "jpeg"
                || type == "jpg") {
            return true;
        } else {
            alert("Vui lòng chọn đúng định dạng (.doc, .docx, .xls, .xlsx, .csv, .ppt, .pptx, .pdf, .zip, .7z, .rar, .png, .jpeg, .jpg)");
            chonfile.val(null);
            return false;
        }
    } else {
        alert("Dung lượng file nhỏ hơn " + (limitSize / 1024 / 1024) + "MB");
        chonfile.val(null);
        return false;
    }
}

function simpleInput(str) {
    str = str.replace(/([\s]+)/, "");
    str = bodauTiengViet(str);
    return str;
}

intInput = function (str) {
    str = trimSpace(str.replace(/[^0-9]/g, ''));
    return str;
}

function validateInt(evt, el) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    firefox = key;
    el.value = intInput(el.value);
    if (key != 13) {
        key = String.fromCharCode(key);
        var regex = /[0-9]|\,/;
        if (!regex.test(key) && firefox != 8 && firefox != 9) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    }
}

function bodauTiengViet(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-.\s])/g, '');
    return str;
}

function bodauTiengViet2(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

function ChangeToSlug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
}

function btnlinkload(curren, text) {
    if (!text) {
        text = "Vui lòng đợi";
    }
    curren.html(text + ' <i class="fa fa-spinner fa-spin uk-icon-spinner uk-icon-spin"></i>');
    curren.prop("disabled", true);
}

function btnlinkthanhcong(curren, text) {
    curren.html(text);
    curren.prop("disabled", false);
}

var is_formcv = false;

var emailungvien = '';
_setemailungvien = function (email) {
    emailungvien = email;
}

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function tien(str) {
    var array = new Array();
    var arraystr = new Array();
    var x = str;
    x = x.replace(/[^0-9]/g, '');

    $j = 0;
    for ($i = x.length - 1; $i >= 0; $i--) {

        if ($j == 3) {
            arraystr.push('.');
            arraystr.push(x[$i]);
            $j = 0;
        } else {
            arraystr.push(x[$i]);
        }
        $j++;
    }
    temp = '';
    for ($i = arraystr.length - 1; $i >= 0; $i--) {
        temp = temp + arraystr[$i];
    }

    return temp;
}

function Comfirm(message, callback, callback2, title, btnConf, btnCancel) {
    title = title || 'THÔNG BÁO';
    btnConf = btnConf || 'Tiếp tục';
    btnCancel = btnCancel || 'Đóng';
    message = message || "Bạn có chắc muốn thực hiện?";
    callback = callback || function () {};
    callback2 = callback2 || function () {};
    bootbox.confirm({
        title: title,
        message: message,
        backdrop: true,
        buttons: {
            cancel: {
                label: btnCancel,
                className: 'btn-default'
            },
            confirm: {
                label: btnConf,
                className: 'btn-info'
            },
        },
        callback: function (result) {
            if (result)
            {
                callback();
            } else {
                callback2();
            }

        }
    });
}

function AlertMessage(message, callback, callback2, title) {
    title = title || null;
    callback = callback || function () {
    };
    callback2 = callback2 || function () {
    };
    var dialog = bootbox.alert({
        message: message,
        title: title,
        backdrop: true,
        buttons: {
            ok: {
                label: 'Đóng',
                className: 'btn-info'
            },
        },
        onShown: function () {
            callback();
        },
        onHidden: function () {
            callback2();
            if ($('.modal').hasClass('in')) {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            }
        }
    });
}

function isURL(str) {
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

highLightKeyWord = function (keyWord, strSearch) {
    if (keyWord != "") {
//        keyWord = keyWord.toLowerCase();
//        strSearch = strSearch.toLowerCase();
        var arrKeyWord = keyWord.split(" ");
        var arrStrSearch = strSearch.split(" ");
        var strResult = "";
        for (var i = 0; i < arrStrSearch.length; i++) {
            for (var j = 0; j < arrKeyWord.length; j++) {
                // Trường hợp từ khóa không dấu và khớp với chuỗi
                if (arrStrSearch[i].indexOf(arrKeyWord[j]) >= 0) {
                    arrStrSearch[i] = arrStrSearch[i].replace(arrKeyWord[j], "<b>" + arrKeyWord[j] + "</b>");
                    break;
                } else {
                    // Trường hợp từ khóa có dấu Tiếng Việt
                    var tempKeyWord = bodauTiengViet(arrKeyWord[j]);
                    var tempStrSearch = bodauTiengViet(arrStrSearch[i]);
                    var indexOf = tempStrSearch.toLowerCase().indexOf(tempKeyWord);
                    if (indexOf >= 0) {

                        if (tempKeyWord.length == tempStrSearch.length) {
                            arrStrSearch[i] = "<b>" + arrStrSearch[i] + "</b>";
                            break;
                        } else {
                            // Lấy đoạn đầu - không chưa từ khóa
                            var strFirst = arrStrSearch[i].substring(0, indexOf);
                            // Lấy đoạn cuối ko chứa từ khóa
                            var strLast = arrStrSearch[i].substring(indexOf + arrKeyWord[j].length);
                            // Cộng 2 đoạn lại với từ khóa ở giữa
                            var str = strFirst + "<b>" + arrStrSearch[i].substring(indexOf, indexOf + arrKeyWord[j].length) + "</b>" + strLast;
                            arrStrSearch[i] = str;
                            break;
                        }
                    }
                }
            }
            strResult += arrStrSearch[i] + " ";
        }
        return strResult;
    } else {
        return strSearch;
    }
};

function getServerTime() {
    var date = new Date();
    offset = serverTimeMillisGMT - localMillisUTC;
    date.setTime(date.getTime() + offset);
    return date;
}

function scrollToEl(el, top) {
    top = top || 0;
    $('html, body').animate({
        scrollTop: el.offset().top + top
    }, 0);

}

function createInputColor(el) {
    el.addClass("isCreate");
    var elinput = el.children();
    el.append("<input type='color' value=" + elinput.val() + " >").promise().done(function () {
        el.children("input[type=color]").change(function () {
            elinput.val($(this).val());
        });
        elinput.change(function () {
            el.children("input[type=color]").val($(this).val());
        });
    });
    el.append('<a class="btn btn-default clear">x</a>').promise().done(function () {
        el.children(".clear").click(function () {
            elinput.val('');
            elinput.trigger('change');
        });
    })
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getPageCV(margin) {
    var currentHeight = document.getElementById("cv-layout").getBoundingClientRect().height * 0.264583333;
    var heightPage = 297 - (margin * 2);
    var page = Math.ceil(currentHeight / 297);
    return {'page': page, 'heightpage': heightPage};
}

function getInfoOS() {
    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 5);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1)
        version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1)
        version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1)
        version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [
        {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
        {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
        {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
        {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
        {s: 'Windows Vista', r: /Windows NT 6.0/},
        {s: 'Windows Server 2003', r: /Windows NT 5.2/},
        {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
        {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
        {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
        {s: 'Windows 98', r: /(Windows 98|Win98)/},
        {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
        {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s: 'Windows CE', r: /Windows CE/},
        {s: 'Windows 3.11', r: /Win16/},
        {s: 'Android', r: /Android/},
        {s: 'Open BSD', r: /OpenBSD/},
        {s: 'Sun OS', r: /SunOS/},
        {s: 'Linux', r: /(Linux|X11)/},
        {s: 'iOS', r: /(iPhone|iPad|iPod)/},
        {s: 'Mac OS X', r: /Mac OS X/},
        {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s: 'QNX', r: /QNX/},
        {s: 'UNIX', r: /UNIX/},
        {s: 'BeOS', r: /BeOS/},
        {s: 'OS/2', r: /OS\/2/},
        {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
    var flashVersion = 'no check';
    if (typeof swfobject != 'undefined') {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
        } else {
            flashVersion = unknown;
        }
    }

    return {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };
}

function remove_tags(html) {
	if (html == '' || html == undefined) {
		return '';
	}
	html= html.toString();
    html = html.replace("<a", "||a||");
    html = html.replace("</a>", "||aa||");
    html = html.replace("<img", "||img||");
    html = html.replace("<br", "||br||");
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    html = tmp.textContent || tmp.innerText;
    html = html.replace("||a||", "<a");
    html = html.replace("||aa||", "</a>");
    html = html.replace("||img||", "<img");
    html = html.replace("||br||", "<br");
    return html;
}
function CopyToClipboard(containerid) {
    var copyText = document.getElementById(containerid);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function CopyText(str, e) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    hideTooltip(e, $(e).html());
    setTooltip(e, 'Đã sao chép!');
    showMessage('Đã sao chép thành công!');
}

function dinhdanggia(str) {
    var array = new Array();
    var arraystr = new Array();
    var x = str;
    x = x.replace(/[^0-9]/g, '');

    var $j = 0;
    for ($i = x.length - 1; $i >= 0; $i--) {

        if ($j == 3) {
            arraystr.push('.');
            arraystr.push(x[$i]);
            $j = 0;
        } else {
            arraystr.push(x[$i]);
        }
        $j++;
    }
    var temp = '';
    for ($i = arraystr.length - 1; $i >= 0; $i--) {
        temp = temp + arraystr[$i];
    }
    return temp;
}

function setTooltip(btn, message) {
    $(btn).attr('data-original-title', message)
            .attr('data-trigger', 'click')
            .tooltip('show')
            .text(message);
}

function hideTooltip(btn, text) {
    setTimeout(function () {
        $(btn).tooltip('destroy').html(text);
    }, 1000);
}

function activeMenu() {
    let currentLink = window.location.href;
    currentLink = currentLink.replace(URL, '');
    currentLink = currentLink.replace('#showhot', '');
    let myArr = currentLink.split("/");
    let controller = myArr[0];
    let action = '';
    if (myArr.length > 1) {
        action = '/' + myArr[1];
    }
    let linkSearch = controller + action;
    $('a.quanly[href*="' + linkSearch +'"]').addClass('active');
}

function createInputSelectLink(el, callback1)
{
    callback1 = callback1 || function (val) {};
    el.addClass("isCreate");
    el.append(`
    <div class="wrapChoose">
    Hoặc <br>
    <a class='btnChoose'><i class='fa fa-upload'></i> Duyệt tập tin</a>
    </div>
    `).promise().done(function () {
        el.children().children(".btnChoose").click(function () {
            PopupCenter(URL + "nhatuyendung/files", "Quản lý tập tin", "800", "500");
        })
    });
}

function setLinkField(value)
{
    var value = URL + 'upload/congty/' + value;
    $('.wrapChoose').prev().val(value);
}

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư

    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|\"|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");

    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();

    return str;
}
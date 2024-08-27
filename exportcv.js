$(document).ready(function () {
    $(".exportcv").click(function () {
        if ($(this).attr("data-ref")) {
            exportCV($(this).attr("data-ref"), $(this));
        } else {
            exportCV($(this).attr("data-id"), $(this), true);
        }

    });
    $(".exportjob").click(function () {
		exportJob($(this).attr("data-id"));
    });
})

exportJob = function(matuyendung) {
	var dialogJob = bootbox.dialog({
		message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>',
		backdrop: true,
		onEscape: true,
		title: 'CHỌN FILE TẢI VỀ',
		buttons: {
			cancel: {
				label: 'Đóng',
				className: 'btn-default'
			},
		}
	});
	$.post(URL + "tuyendung/loadButtonExport", {"matuyendung": matuyendung},
		function (html) {
			dialogJob.find('.bootbox-body').html(html);
		}
	);
}

function exportCV(ref, el, isPublic) {
    var htmlButton = el.html();
    var urlExport = URL + "cv/exportcv";
    if (isPublic) {
        urlExport = URL + "cv/exportcv_public";
    }
    btnlinkload(el);
    $.post(urlExport, {"ref": ref},
            function (o) {
                btnlinkthanhcong(el, htmlButton);
                if (o.status == 1) {
                    window.location.href = o.urlexport;
                } else {
                    alert(o.message);
                }
            }, "JSON")
}

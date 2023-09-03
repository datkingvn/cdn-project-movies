        $(document).ready(function () {
            $(".most-view .tab").click(function () {
                var type = $(this).attr('data-id');
                // $(".most-view .list-film").html("");
                $(".most-view .tab").removeClass('active');
                $(this).addClass('active');
                // var data = { 'action': 'top_viewed', 'type': type }

                $(".most-view .list-film .d").hide();
                $(".most-view .list-film .w").hide();
                $(".most-view .list-film .m").hide();

                $(".most-view .list-film .item." + type).show();
            })
        })

    jQuery("#btn-toggle-error").on("click", function () {
        jQuery
            .ajax({
                url: URL_POST_REPORT_ERROR,
                type: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                data: JSON.stringify({
                    message: "",
                }),
            })
            .done(function (data) {
                toastr.success(
                    "Cảm ơn bạn đã báo cáo - Thanks youu ^^",
                    "Success!"
                );
            });

        jQuery(this).remove();
    });

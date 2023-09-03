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

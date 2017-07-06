$(document).ready(function () {
    $('#text-field').keyup(function (event) {
        var portions = $('#text-field').val();
        console.log(spanValue)
        console.log(portions)
        if (portions != 0) {
            var spanValue = $(".ingredients").find("span");
            $.each(spanValue, function () {
                var originalPortion = +$(this).data("portion");
                var totalPortion = originalPortion * portions;
                $(this).text(totalPortion)
            });
        }

    })

});
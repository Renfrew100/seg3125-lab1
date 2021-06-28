


$(document).ready(function () {
    
    $("#physicians").hide();
    $("#personalInformation").hide();
    $("#request").hide();
    $("#payment").hide();

    $("input[name='btnradio']").click(function () {
        if ($("#btnradio1").is(":checked") || $("#btnradio2").is(":checked") ||$("#btnradio3").is(":checked") ||$("#btnradio4").is(":checked") ||$("#btnradio5").is(":checked") ){
            $("#physicians").show();
        }
    })

    $("input[name='physicians']").click(function () {
        if ($("#jotaro").is(":checked") || $("#joseph").is(":checked") || $("#boa").is(":checked")){
            $("#personalInformation").show();
            $("#payment").show();

            
    function space(str, after) {
        if (!str) {
            return false;
        }
        after = after || 4;
        var v = str.replace(/[^\dA-Z]/g, ''),
            reg = new RegExp(".{" + after + "}", "g");
        return v.replace(reg, function (a) {
            return a + ' ';
        });
    }

    function nospace(str, after) {
        // if (!str) {
        //     return false;
        // }
        after = after || 40000;
        var v = str.replace(/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, ''),
            reg = new RegExp(".{" + after + "}", "g");
        return v.replace(reg, function (a) {
            return a + ' ';
        });
    }

    
    var el = document.getElementById('cc-number');
    el.addEventListener('keyup', function () {
        this.value = space(this.value, 4);
    });

    var e2 = document.getElementById('cc-cvv');
    e2.addEventListener('keyup', function () {
        this.value = space(this.value, 0);
    });

    var e3 = document.getElementById("phone");
    e3.addEventListener('keyup', function () {
        this.value = space(this.value, 3);
    })

    var e4 = document.getElementById("firstname")
    e4.addEventListener('keyup', function () {
        this.value = nospace(this.value, 0);
    })

    var e5 = document.getElementById("lastname")
    e5.addEventListener('keyup', function () {
        this.value = nospace(this.value, 0);
    })

    var e6 = document.getElementById("nameoncard")
    e6.addEventListener('keyup', function () {
        this.value = nospace(this.value, 0);
    })
            
        }
    })

    $("button[name='yes']").click(function () {
        $("#checkout").remove();
        $("#request").html("Your request to have an appointment with " +  $("input[name='physicians']:checked").val() + " on " + $("#meeting-time").val().replace("T", " ") + ", for the service of : " + $("input[name='btnradio']:checked").val() + " has been submitted" ) ;
        $("#request").show();
    })
    $("button[name='no']").click(function () {
        document.getElementById("cc-number").value = ""
    }
    )

}


    
)

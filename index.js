// $("h2").text("text-light");
// $("h2").html("text-light");
// $("h2").addClass("text-light");
// $("h2").removeClass("text-light");

$('#theme-mode').on('click', function() {
    if($('html').attr('data-bs-theme') == 'light'){        
        $('html').attr('data-bs-theme', 'dark');
        $('#theme-mode').text('☀️');

    } else if($('html').attr('data-bs-theme') == 'dark'){
        $('html').attr('data-bs-theme', 'light');
        $('#theme-mode').text('🌙');
    }
});

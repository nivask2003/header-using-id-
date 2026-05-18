function initOffcanvasSidebar() {
    var $sidebar = $("#offcanvasSidebar");
    var $toggle = $("#offcanvasToggle");
    var $close = $("#offcanvasClose");
    var $backdrop = $("#offcanvasBackdrop");

    if (!$sidebar.length || !$toggle.length) {
        return;
    }

    function openSidebar() {
        $sidebar.addClass("open").attr("aria-hidden", "false");
        $backdrop.addClass("visible");
        $("body").addClass("offcanvas-open");
    }

    function closeSidebar() {
        $sidebar.removeClass("open").attr("aria-hidden", "true");
        $backdrop.removeClass("visible");
        $("body").removeClass("offcanvas-open");
    }

    $toggle.on("click", function() {
        openSidebar();
    });

    $close.on("click", function() {
        closeSidebar();
    });

    $backdrop.on("click", function() {
        closeSidebar();
    });

    $(document).on("keydown", function(event) {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });
}

  AOS.init();
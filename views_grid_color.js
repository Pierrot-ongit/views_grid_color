$ = jQuery;

Drupal.behaviors.views_grid_color = {
    attach: function (context, settings) {
        var colors = settings.views_grid_color.colors;
        var grid = settings.views_grid_color.name;
        var gridName = grid['name_grid'];

        $.each($(".view-id-"+ gridName +" .views-row"), function () {
            $(".views-row-1").css("background-color", colors.element_1);
            $(".views-row-2").css("background-color", colors.element_2);
            $(".views-row-3").css("background-color", colors.element_3);
            $(".views-row-4").css("background-color", colors.element_4);
            $(".views-row-5").css("background-color", colors.element_5);
            $(".views-row-6").css("background-color", colors.element_6);
            $(".views-row-7").css("background-color", colors.element_7);
            $(".views-row-8").css("background-color", colors.element_8);
            $(".views-row-9").css("background-color", colors.element_9);

            }
        );

    }
};


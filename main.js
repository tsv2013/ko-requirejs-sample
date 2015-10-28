define(["jquery", "knockout", "text"], function($, ko, _) {
    ko.components.register("toast-container", { require: 'toast-container' });

    $(function () {
        ko.applyBindings({}, $("#host")[0]);
    });
});

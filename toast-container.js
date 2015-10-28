define(["knockout"], function(ko) {

function ToastViewModel(params) {
    var self = this;
    self.array1 = ko.observableArray();
    self.Onclick = function () {
        //alert("click!");
        self.array1.push({ someText: "some content" });
    }
}

return {
        viewModel: ToastViewModel,
        template: { require: 'text!toast-container.html' }
    };

});
(function (win) {
    // body...
    function ipage (argument) {
        // body...
      for(var key in argument){
        this[key] = argument[key];
      }
      this.init();
    }
    $ = document.querySelectorAll.bind(document);
    
    ipage.prototype.init = function(argument) {
        // body...
        var self = this;
        console.log('init');
        self.render();
    }
    ipage.prototype.render = function(argument) {
        // body...
        var self = this;
        var html1 = '<div style="width:100%;height:100%;position:absolute;background-color:#f00"></div>';
        var html2 = '<div style="width:100%;height:100%;position:absolute;background-color:#0f0"></div>';
        console.log(self);
        var container = $(self.container)[0];
        container.innerHTML = html1 + html2;
    };
    window.ipage = ipage;
})(this);
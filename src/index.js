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
        self.eventBind();
    }
    ipage.prototype.render = function(argument) {
        // body...
        var self = this;
        var pages = self.pages;
        var length = pages.length;
        var content = '';
        for (var i = 0; i < length; i++) {
            content += self.toPage(pages[i], i);
        };
        var container = $(self.container)[0];
        container.innerHTML = content;
    };
    ipage.prototype.toPage = function(content, index) {
        // body...
        var self = this;
        var direction = self.direction || 'horizon';
        var left = 0;
        var top = 0;
        if (direction === 'horizon') {
            left = index * 100 + '%';
        } else {
            top = index * 100 + '%';
        }
        return '<div class="ipage" style="width:100%;height:100%;position:absolute;left:'+ left + ';top:'+ top +'">' + content + '</div>';

    };
    ipage.prototype.eventBind = function(first_argument) {
        // body...
        document.addEventListener('touchstart', function(e) {
            console.log('touchstart');
        });
        document.addEventListener('touchmove', function(e) {
            console.log('touchmove');
        });
        document.addEventListener('touchend', function (e) {
            console.log('touchend');

        });
    };
    window.ipage = ipage;
})(this);
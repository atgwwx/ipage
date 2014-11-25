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
        return '<div class="ipage" data-index="'+ index +'" style="width:100%;height:100%;position:absolute;left:'+ left + ';top:'+ top +'">' + content + '</div>';

    };
    ipage.prototype.eventBind = function(first_argument) {
        // body...
        var self = this;
        
        var pages = $('.ipage'); //return NodeList
        console.log(pages);
        var length = pages.length;
        var page;
        for (var i = 0; i < length ; i++) {
            page = pages[i];
            self.bindPage(page);
        };
    };
    ipage.prototype.bindPage = function(page) {
        // body...
        var self = this;
        page.addEventListener('touchstart', function(e) {
            console.log('touchstart');
        });
        page.addEventListener('touchmove', function(e) {
            console.log('touchmove');
        });
        page.addEventListener('touchend', function (e) {
            console.log('touchend');
            var target = this;
            var index = target.getAttribute('data-index');
            console.log(index);
            self.changePage(target);
        });
    };
    ipage.prototype.changePage = function(page) {
        // body...
        var self = this;
        var type = 'slide';
        if(type === 'slide'){
            self.slide(page);
        }
    };
    ipage.prototype.slide = function(page) {
        // body...
        var self = this;
        var direction = self.direction || 'horizon';
        var nextPage = page.nextSibling;
        if (direction === 'horizon') {
            page.style.webkitTransition = 'all 500ms';
            page.style.left = '-100%';
            nextPage.style.webkitTransition = 'all 500ms';
            nextPage.style.left = '0';
        } else {
            page.style.webkitTransition = 'all 500ms';
            page.style.top = '-100%';
            nextPage.style.webkitTransition = 'all 500ms';
            nextPage.style.top = '0';
        }
    };
    window.ipage = ipage;
})(this);
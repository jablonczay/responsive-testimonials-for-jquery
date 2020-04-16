/*
================================================
Item Name: Responsive Testimonials for jQuery
Author by: Jablonczay
================================================
*/

;(function ($) {

    var pluginName, clsPrefix, defaults;

    pluginName = 'responsiveTestimonials';
    clsPrefix = 'responsive-testimonials';
    defaults = {};

    // Plugin constructor
    function Plugin(element, options) {
        this.el = element;
        this.opts = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Throttle
    Plugin.prototype.throttle = function (callback, limit) {
        
        var wait = false;

        return function() {
            if (!wait) {
                callback.call();
                wait = true;
                setTimeout(function() {
                    wait = false;
                }, limit);
            }
        };
    };

    // Debounce
    Plugin.prototype.debounce = function (func, wait, immediate) {
        
        var timeout;
        
        return function() {
            var context, args, later, callNow;
            context = this;
            args = arguments;
            later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Get the Container Width
    Plugin.prototype.getContainerWidth = function (el) {
        return el.clientWidth;
    };

    // Remove Media Query Classes
    Plugin.prototype.removeMqClasses = function (params) {
        var i;
        for (i = 0; i < params.num; i++) {
            params.el.classList.remove(params.clsModifier + params.mqList[i]);
        }
    };

    // Add Media Query Classes
    Plugin.prototype.addMqClasses = function (params) {
        var i = 0;
        for (; i <= params.num; i++) {
            params.el.classList.add(params.clsModifier + params.mqList[i]);
        }
    };    

    // Set Media Query Classes
    Plugin.prototype.setMqClasses = function (el, containerWidth) {

        var width, mqList, len, clsModifier, params, cnt, i;

        width = parseInt(containerWidth, 10);       
        mqList = [480, 768, 992, 1440, 1664, 1888];
        len = mqList.length;
        clsModifier = clsPrefix + '--mq-';
        cnt = 0;

        params = {
            el: el,
            num: len,
            mqList: mqList,
            clsModifier: clsModifier,
        };

        // Remove Classes
        this.removeMqClasses(params);

        // Add Classes
        for (i = 0; i < len; i++) {

            params.num = cnt;            
            
            if (cnt < len - 1) {
                if (width >= mqList[cnt] && width < mqList[cnt + 1]) {
                    this.addMqClasses(params);
                }
            } else if (width >= mqList[cnt]) {
                this.addMqClasses(params);
            }
            cnt++;
        }
    };

    
    // Plugin initialization
    Plugin.prototype.init = function () {

        var that, el, containerWidth;

        that = this;
        el = that.el;

        function resizeHandler() {
            containerWidth = that.getContainerWidth(el);
            that.setMqClasses(el, containerWidth);
        }

        resizeHandler();

        window.addEventListener('resize', function () {
            that.debounce(resizeHandler(el), 500);
            that.throttle(resizeHandler(el), 500);
        });
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Plugin(this, options));
            }
        });
    };

}(jQuery));

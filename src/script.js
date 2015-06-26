(function() {
    var nodes  = [].slice.call(document.querySelectorAll('li'), 0);

    function getDirection(ev, obj) {
        var w, h, x, y, d;

        w = obj.offsetWidth;
        h = obj.offsetHeight;
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1));
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1));
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

        return d;
    }

    function addClass(ev, obj, state) {
        var direction, class_suffix;

        direction = getDirection(ev, obj);
        class_suffix = "";
        obj.className = "";

        switch (direction) {
            case 0 : class_suffix = '-top';    break;
            case 1 : class_suffix = '-right';  break;
            case 2 : class_suffix = '-bottom'; break;
            case 3 : class_suffix = '-left';   break;
        }

        obj.classList.add(state + class_suffix);
    }

    // bind events
    nodes.forEach(function (el) {
        el.addEventListener('mouseover', function (ev) {
            addClass(ev, this, 'in');
        }, false);

        el.addEventListener('mouseout', function (ev) {
            addClass(ev, this, 'out');
        }, false);
    });
})();

function load_css()
{
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "plugin/image_zoom/image_zoom.css";
    document.getElementsByTagName("head")[0].appendChild(link);
}
function load_html()
{
    var image_zoom = document.createElement("div");
    image_zoom.id = "image_zoom";
    var image_show = document.createElement("img");
    image_show.id = "image_show";
    image_show.src = "";
    image_zoom.setAttribute("class", "image_hidden")
    image_zoom.appendChild(image_show);
    document.getElementsByTagName("body")[0].appendChild(image_zoom);
    return {"image_show": image_show, "image_zoom": image_zoom}
}
function setup_events_listeners(tags)
{
    var hide = function() {
        tags.image_zoom.setAttribute("class", 'image_zoom_hidden');
        tags.image_show.src = "";
    };
    var show = function(image) { return function() {
        var src_zoom = image.getAttribute("data-src-zoom");
        tags.image_show.src = src_zoom != null ? src_zoom : image.src;
        tags.image_zoom.setAttribute("class", 'image_zoom_visible');
        var zoom_height = image.getAttribute("data-zoom-height");
        tags.image_show.style.height = zoom_height == null ? "100%" : zoom_height;
        tags.image_zoom.style.overflow = zoom_height == null ? "hidden" : "auto";
        tags.image_zoom.scrollTop = 0;
    }; };
    Reveal.addEventListener('slidechanged', hide);
    tags.image_zoom.addEventListener('click', hide);
    tags.image_show.addEventListener('click', hide);
	var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++)
        images[i].addEventListener('click', show(images[i]), false);
}
(function()
{
    load_css();
    setup_events_listeners(load_html());
})()

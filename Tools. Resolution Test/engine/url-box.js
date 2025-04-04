const defaultUrlOverlayFontSize = '14px';
const defaultUrlOverlayElementId = 'url-overlay';

const UrlBox = {
    url: window.location.href,
    id: defaultUrlOverlayElementId,
    
    isSet: function (variable, def = false) {
        if (typeof variable === 'string') {
            return (variable.trim() !== '') ? variable : def;
        } else if (typeof variable === 'object') {
            return variable
        } else return def;
    },
    
    getId() {
        return this.isSet(this.id, defaultUrlOverlayElementId);
    },

    getOverlay: function() {
        let overlay = document.getElementById(this.getId());
        
        return this.isSet(overlay) ? overlay : this.createOverlay();
    },
    
    createOverlay: function() {
        let overlay = document.createElement("div");
        let url = this.isSet(this.url, window.location.href);
        
        overlay.id = this.getId();
        
        overlay.style.top = "0";
        overlay.style.right = "0";
        overlay.style.padding = "3px";
        overlay.style.position = "fixed";
        overlay.style.margin = "7px 7px 0 0";
        overlay.style.fontSize = defaultUrlOverlayFontSize;
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        overlay.style.border = "solid 2px rgba(0, 0, 0, 0.3)";
        
        return document.body.appendChild(overlay);
    },
    
    setUrl: function(href) {
        let overlay = this.getOverlay();
        let anchor = document.createElement("a");
        let url = this.isSet(href, this.isSet(this.url, window.location.href));
        
        anchor.href = url;
        anchor.innerHTML = url;
        anchor.style.color = "#000";
        anchor.style.fontWeight = "bold";
        anchor.style.textDecoration = "none";
        
        overlay.appendChild(anchor);
    }
};
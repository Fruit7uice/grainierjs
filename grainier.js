


function getCanvas(parent){
    let canvas = parent.querySelector("canvas.grainy");
    if (!canvas){
        canvas = document.createElement("canvas");
        // Set style
        canvas.style.width    = "100%";
        canvas.style.height   = "100%";
        canvas.style.top      = "0px";
        canvas.style.left     = "0px";
        canvas.style.position = "absolute";
        canvas.style.zIndex   = "1";
        canvas.className      = "grainy";
        if (!parent.style.position) parent.style.position = 'relative';
        parent.insertBefore(canvas, parent.firstChild);
    }
    return canvas;
}

/**
 * Creates a grainy texture by white noise (random pixel values)
 * @param {*} elementId 
 * @param {*} options 
 * @returns 
 */
function makeGrainy(elementId, options){
    const parent = document.getElementById(elementId);
    if (!parent) return null;
    
    const w = parent.clientWidth, h = parent.clientHeight;
    if (w === 0 || h === 0) return null;
    
    const canvas = getCanvas(parent);
    // const dpr = window.devicePixelRatio || 1;
    // canvas.width = Math.max(1, Math.round(w * dpr));
    // canvas.height = Math.max(1, Math.round(h * dpr));
    canvas.width = Math.max(1, Math.round(w*options.density));
    canvas.height = Math.max(1, Math.round(h*options.density));
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(canvas.width, canvas.height);
    const data = img.data;

    for(let i = 0; i < data.length; i+=4){
        let v = Math.floor(Math.random()*256)
        // R G B A
        data[i] = v; // R
        data[i+1] = v; // G
        data[i+2] = v; // B
        data[i+3] = Math.round(255 * options.opacity); // A
    }

    ctx.putImageData(img, 0, 0);
    return canvas;

}
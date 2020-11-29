let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

// Build PIXI App
let app = new PIXI.Application({
    width: 256, // default: 800
    height: 256, // default: 600
    antialias: true, // default: false
    transparent: true, // default: false
    resolution: 1, // default: 1   
    resizeTo: window
});

// Options for PIXI
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
document.body.appendChild(app.view);

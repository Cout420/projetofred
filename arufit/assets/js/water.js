/* Água em tempo real (WebGL) para o hero: cáusticas de piscina que reagem ao mouse. */
(() => {
  const canvas = document.querySelector("[data-water]");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
  if (!gl) return; // fica o gradiente do CSS

  const vert = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }`;
  const frag = `
    precision mediump float;
    uniform vec2 r; uniform float t; uniform vec2 m;
    #define TAU 6.28318530718
    float caustic(vec2 uv, float time){
      vec2 p = mod(uv * TAU, TAU) - 250.0;
      vec2 i = p; float c = 1.0; float inten = .005;
      for (int n = 0; n < 5; n++) {
        float tt = time * (1.0 - (3.5 / float(n + 1)));
        i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
        c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
      }
      c /= 5.0; c = 1.17 - pow(c, 1.4);
      return pow(abs(c), 8.0);
    }
    void main(){
      vec2 uv = gl_FragCoord.xy / r;
      vec2 asp = vec2(r.x / r.y, 1.0);
      vec2 d = (uv - m) * asp;
      float ripple = sin(length(d) * 38.0 - t * 4.0) * exp(-length(d) * 5.0) * .012;
      vec2 q = uv * asp * .9 + ripple;
      float c = caustic(q, t * .35 + 23.0);
      vec3 deep = vec3(.024, .031, .102);
      vec3 blue = vec3(.137, .251, .961);
      vec3 sky  = vec3(.62, .72, 1.0);
      float depth = smoothstep(0.0, 1.0, uv.y);
      vec3 col = mix(deep, blue * .85, depth * .9 + .1);
      col += sky * c * (.35 + depth * .55);
      col = mix(col, deep, smoothstep(.45, 0.0, uv.y) * .75);
      gl_FragColor = vec4(col, 1.0);
    }`;

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vert));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uR = gl.getUniformLocation(prog, "r");
  const uT = gl.getUniformLocation(prog, "t");
  const uM = gl.getUniformLocation(prog, "m");

  // resolução reduzida: a água é suave, não precisa de pixel nativo — economiza GPU no celular
  const scale = Math.min(window.devicePixelRatio || 1, 1.5) * (innerWidth < 760 ? .5 : .6);
  const resize = () => {
    canvas.width = Math.max(1, Math.floor(canvas.clientWidth * scale));
    canvas.height = Math.max(1, Math.floor(canvas.clientHeight * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uR, canvas.width, canvas.height);
  };
  resize();
  addEventListener("resize", resize);

  const mouse = { x: .7, y: .6, tx: .7, ty: .6 };
  addEventListener("pointermove", (e) => {
    const b = canvas.getBoundingClientRect();
    mouse.tx = (e.clientX - b.left) / b.width;
    mouse.ty = 1 - (e.clientY - b.top) / b.height;
  }, { passive: true });

  let visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(canvas);

  const start = performance.now();
  const frame = (now) => {
    if (visible) {
      mouse.x += (mouse.tx - mouse.x) * .05;
      mouse.y += (mouse.ty - mouse.y) * .05;
      gl.uniform1f(uT, reduced ? 4.0 : (now - start) / 1000);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    if (!reduced) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
})();

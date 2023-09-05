function e(e) {
    const t = new THREE.SpotLight(e, 10);
    return (
      (t.castShadow = !0),
      (t.angle = 0.3),
      (t.penumbra = 0.2),
      (t.decay = 2),
      (t.distance = 50),
      t
    );
  }
  
  function t() {
    (M.aspect = window.innerWidth / window.innerHeight),
      M.updateProjectionMatrix(),
      u.setSize(window.innerWidth, window.innerHeight);
  }
  
  function o(e) {
    new n.Tween(e.position)
      .to(
        {
          x: 3 * Math.random() - 1.5,
          y: 1.5,
          z: 3 * Math.random()
        },
        2e3 * Math.random() + 2e3
      )
      .easing(n.Easing.Quadratic.Out)
      .start();
  }
  
  import * as THREE from "three";
  
  import n from "three/addons/libs/tween.module.js";
  
  import { OrbitControls as a } from "three/addons/controls/OrbitControls.js";
  
  import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
  
  let s,
    i,
    r,
    l,
    E,
    d,
    h,
    c,
    w,
    p = [];
  
  const T = -Math.PI / 1.95,
    H = -Math.PI / 1.2;
  
  let R = 0.05,
    m = T;
  
  const u = new THREE.WebGLRenderer({
    antialias: !0,
    canvas: canvas
  });
  
  u.setPixelRatio(window.devicePixelRatio),
    u.setSize(window.innerWidth, window.innerHeight),
    (u.useLegacyLights = !1);
  
  const M = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    ),
    y = new a(M, u.domElement),
    S = new THREE.Scene(),
    b = new THREE.MeshPhongMaterial({
      color: 8421504
    }),
    g = new THREE.MeshPhongMaterial({
      color: 11184810
    }),
    G = new THREE.PlaneGeometry(20, 20),
    P = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32),
    f = new THREE.Mesh(G, b);
  
  f.rotation.x = 0.5 * -Math.PI;
  
  const v = new THREE.Mesh(P, g),
    C = new THREE.AmbientLight(4473924),
    z = e("deeppink"),
    x = e("white"),
    A = e("royalblue");
  
  let I, L, k;
  
  !(function () {
    (u.shadowMap.enabled = !0),
      (u.shadowMap.type = THREE.PCFSoftShadowMap),
      M.position.set(0, 0.8, 4),
      z.position.set(2, 2, 2),
      x.position.set(0, 2, -2),
      A.position.set(-2, 2, -2),
      (I = new THREE.SpotLightHelper(z)),
      (L = new THREE.SpotLightHelper(x)),
      (k = new THREE.SpotLightHelper(A)),
      (f.receiveShadow = !0),
      f.position.set(0, -0.5, 0),
      (v.castShadow = !0),
      (v.receiveShadow = !0),
      S.add(f),
      S.add(v),
      S.add(C),
      S.add(z, x, A),
      (i = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      }));
    let e,
      o = new THREE.Vector3(),
      n = [];
    s = new THREE.BufferGeometry();
    for (let t = 0; t < 2e4; t++) {
      const t = Math.acos(THREE.MathUtils.randFloatSpread(2)),
        a = THREE.MathUtils.randFloatSpread(360);
      (o.x = 1 * Math.sin(t) * Math.cos(a)),
        (o.y = 5 * Math.abs(1 * Math.sin(t) * Math.sin(a)) - 5),
        (o.z = 1 * Math.cos(t)),
        (e = Math.random()),
        o.copy(o).multiplyScalar(e),
        n.push(o.x, o.y, o.z);
    }
    s.setAttribute("position", new THREE.Float32BufferAttribute(n, 3)),
      s.rotateX(-Math.PI / 2),
      i.color.set(z.color),
      (E = new THREE.Points(s, i)),
      S.add(E),
      (d = E.clone()),
      (i = d.material.clone()).color.set(x.color),
      (d.material = i),
      S.add(d),
      (h = E.clone()),
      (i = h.material.clone()).color.set(A.color),
      (h.material = i),
      S.add(h),
      (i = new THREE.MeshLambertMaterial({})),
      (l = new THREE.MeshPhongMaterial({
        specular: "#4d4d4d",
        shininess: 70,
        side: THREE.DoubleSide
      })),
      (p = []),
      (s = new THREE.CapsuleGeometry(0.5, 0.7, 4, 10)).translate(0, 0, 0),
      p.push(s),
      (s = new THREE.CapsuleGeometry(0.15, 0.8, 4, 10)).rotateZ(Math.PI / 3.5),
      s.translate(0.65, 0.2, 0),
      p.push(s),
      (s = new THREE.CapsuleGeometry(0.18, 0.5, 4, 10)).translate(0.2, -1, 0),
      p.push(s),
      (s = new THREE.CapsuleGeometry(0.18, 0.5, 4, 10)).translate(-0.2, -1, 0),
      p.push(s),
      (s = new THREE.SphereGeometry(0.5, 10, 10)).translate(0, 1.2, 0),
      p.push(s),
      (s = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8)).translate(0.2, 1.8, 0),
      p.push(s),
      (s = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8)).translate(-0.2, 1.8, 0),
      p.push(s),
      (s = BufferGeometryUtils.mergeGeometries(p)),
      (i = i.clone()).color.set("bisque"),
      (c = new THREE.Mesh(s, i)),
      (s = new THREE.SphereGeometry(0.15, 5, 5)).translate(0, -0.3, -0.5),
      (i = i.clone()).color.set("white");
    const a = new THREE.Mesh(s, i);
    (a.castShadow = !0),
      c.add(a),
      (s = new THREE.CylinderGeometry(0, 4.5, 0.2, 30)).translate(0, -1.4, 0),
      s.translate(0, 1.3, 0),
      (i = i.clone()).color.set("lightcyan");
    const T = new THREE.Mesh(s, i);
    (T.receiveShadow = !0),
      S.add(T),
      (s = new THREE.SphereGeometry(0.07, 10, 10)).translate(0.18, 1.3, 0.4),
      (i = i.clone()).color.set("black");
    const H = new THREE.Mesh(s, i);
    c.add(H), (s = s.clone()).translate(-0.36, 0, 0);
    const R = new THREE.Mesh(s, i);
    c.add(R);
    const m = new THREE.Shape();
    m.moveTo(25, 25),
      m.bezierCurveTo(25, 25, 20, 0, 0, 0),
      m.bezierCurveTo(-30, 0, -30, 35, -30, 35),
      m.bezierCurveTo(-30, 55, -10, 77, 25, 95),
      m.bezierCurveTo(60, 77, 80, 55, 80, 35),
      m.bezierCurveTo(80, 35, 80, 0, 50, 0),
      m.bezierCurveTo(35, 0, 25, 25, 25, 25),
      (s = new THREE.ExtrudeGeometry(m, {
        depth: 1,
        bevelEnabled: !0,
        bevelSegments: 5,
        steps: 1,
        bevelSize: 10,
        bevelThickness: 10
      })),
      (i = i.clone()).color.set("red");
    const b = new THREE.Mesh(s, i);
    b.scale.set(0.003, 0.003, 0.003),
      b.position.set(0.07, 0.35, 0.5),
      b.rotateZ(Math.PI),
      c.add(b),
      (s = new THREE.CylinderGeometry(0.3, 0.2, 1.5, 8));
    let g = l.clone();
    g.color.set("black");
    const G = new THREE.Mesh(s, g);
    (s = new THREE.SphereGeometry(0.5, 8, 8)),
      (g = l.clone()).color.set("gray"),
      (r = new THREE.Mesh(s, g)).position.set(0, 1, 0),
      G.add(r),
      (s = new THREE.TorusGeometry(0.5, 0.05, 10, 15)),
      (g = l.clone()).color.set("silver"),
      (r = new THREE.Mesh(s, g)).position.set(0, 1, 0),
      r.rotateX(Math.PI / 2),
      G.add(r),
      G.scale.set(0.3, 0.3, 0.3),
      G.position.set(1.1, 0.15, 0),
      G.rotateZ(-Math.PI / 5),
      c.add(G),
      (s = new THREE.CapsuleGeometry(0.15, 0.8, 4, 10)).translate(0, -0.4, 0),
      (s.verticesNeedUpdate = !0),
      (i = i.clone()).color.set("bisque"),
      (w = new THREE.Mesh(s, i)).position.set(-0.45, 0.5, 0),
      w.rotation.set(0, 0, -Math.PI / 1.2),
      (w.castShadow = !0),
      c.add(w),
      c.scale.set(0.2, 0.2, 0.2),
      c.position.set(0, 0.3, 0),
      (c.castShadow = !0),
      S.add(c);
    let P = new THREE.Mesh(
      new THREE.SphereGeometry(5, 8, 8),
      new THREE.MeshBasicMaterial({
        color: 1118481,
        side: THREE.BackSide
      })
    );
    S.add(P),
      window.addEventListener("resize", t),
      y.target.set(0, 0.6, 0),
      (y.enablePan = !1),
      (y.maxPolarAngle = Math.PI / 2),
      (y.minDistance = 1),
      (y.maxDistance = 5),
      y.update();
  })(),
    (function e() {
      n.update(),
        E.position.set(z.position.x, z.position.y, z.position.z),
        E.lookAt(0, 0, 0),
        d.position.set(x.position.x, x.position.y, x.position.z),
        d.lookAt(0, 0, 0),
        h.position.set(A.position.x, A.position.y, A.position.z),
        h.lookAt(0, 0, 0),
        (m > T || m < H) && (R *= -1),
        w.rotation.set(0, 0, (m += R)),
        u.render(S, M),
        requestAnimationFrame(e);
    })(),
    (function e() {
      o(z), o(x), o(A), setTimeout(e, 4e3);
    })();
  
document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.getElementById('three-viewer');
    const width = viewer.offsetWidth, height = viewer.offsetHeight;
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
    camera.position.z = 5;
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    viewer.appendChild(renderer.domElement);
  
    const loader = new THREE.PLYLoader();
    loader.load('assets/videos/0.ply', function (geometry) {
        const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
    });
  
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
  
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
  
    window.addEventListener('resize', function() {
        const w = viewer.offsetWidth, h = viewer.offsetHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
  });
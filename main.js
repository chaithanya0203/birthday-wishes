import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create colorful confetti particles
function addConfetti() {
  const geometry = new THREE.SphereGeometry(0.05, 8, 8);
  const colors = [0xff69b4, 0x00ffff, 0xffff00, 0xff4500, 0x00ff00];
  const material = new THREE.MeshStandardMaterial({ color: colors[Math.floor(Math.random() * colors.length)] });
  const particle = new THREE.Mesh(geometry, material);

  particle.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20
  );

  scene.add(particle);
}

Array(300).fill().forEach(addConfetti);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Animate
function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();
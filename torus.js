import * as THREE from 'three';

// Create the scene.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the Torus.
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, } );
const torus = new THREE.Mesh( geometry, material );
scene.add ( torus );
camera.position.z = 40;

function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    renderer.render( scene, camera );
}

animate();
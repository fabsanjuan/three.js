import * as THREE from 'three';

// Create the scene.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create Torus Knot.
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
camera.position.z = 50;

function animate() {
    requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();
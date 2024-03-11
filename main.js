import WebGL from 'three/addons/capabilities/WebGL.js';  // Check if WebGL is supported and display a message to the user if not.
import * as THREE from 'three';

// Creating the scene.
    // To display anything with three.js we need 3 things: scene, camera, and renderer. We render the scene with the camera.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  // FOV, aspect ratio, near, far.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );  // Size to render the app.
document.body.appendChild( renderer.domElement );

// Create a basic cube.
const geometry = new THREE.BoxGeometry( 1, 1, 1 );  // Vertices and faces of cube.
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );  // Several materials available. Supply color attribute.
const cube = new THREE.Mesh( geometry, material );  // An object that takes geometry and applies material to it.
scene.add( cube );

camera.position.z = 5;

// Render or animate loop.
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    renderer.render( scene, camera );
}

// Check if browser compatible condition to animation loop.
if ( WebGL.isWebGLAvailable() ) {
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );
}

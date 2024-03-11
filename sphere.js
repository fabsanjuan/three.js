import * as THREE from 'three';

// Create the scene.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the sphere.
const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
camera.position.z = 50;

function animate() {
    requestAnimationFrame( animate );
    sphere.rotation.y += 0.05;
    sphere.rotation.x += 0.01;
    renderer.render( scene, camera );
}

animate();
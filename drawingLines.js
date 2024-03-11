import * as THREE from 'three';

// Create the scene.
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Lines have 2 types of mesh material basic and dashed.
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const material2 = new THREE.LineDashedMaterial( { color: 0x0000ff } );

// Geometry of the lines.
const points = [];
points.push( new THREE.Vector3( -20, 5, 0 ) );
points.push( new THREE.Vector3( 0, -10, 50) );
points.push( new THREE.Vector3( 20, 5, 0 ) );

const curve = [];
curve.push( new THREE.Vector3( -10, -2.5, 25 ) );
curve.push( new THREE.Vector3( 0, 5, 25 ) );
curve.push( new THREE.Vector3( -3, 2, 5 ) );
curve.push( new THREE.Vector3( 10, -2.5, 25 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );
const geometry2 = new THREE.BufferGeometry().setFromPoints( curve );


const line = new THREE.Line( geometry, material );
const line2 = new THREE.Line( geometry2, material2 );
scene.add( line, line2 );
renderer.render( scene, camera );

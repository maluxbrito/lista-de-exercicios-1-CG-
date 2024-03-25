// Desenhando objetos gráficos 2D

import * as THREE from 'three';

import { GUI } from '../../Assets/scripts/three.js/examples/jsm/libs/lil-gui.module.min.js';

const 	gui 		= new GUI();
const 	rendSize 	= new THREE.Vector2();

var 	controls, 
		scene,
		camera,
		renderer,
		curline = null;

// ******************************************************************** //
// **                                                                ** //
// ******************************************************************** //
function main() {

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	rendSize.x = 
	rendSize.y = Math.min(window.innerWidth, window.innerHeight) * 0.8;

	renderer.setSize(rendSize.x, rendSize.y);

	document.body.appendChild(renderer.domElement);

	window.addEventListener ( 'resize', onWindowResize 	);

	scene 	= new THREE.Scene();

	initGUI();

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );

	const vertices = [];

	vertices.push(	new THREE.Vector3( -0.5, -0.5, 0.0 ) );
	vertices.push(	new THREE.Vector3(  0.5, -0.5, 0.0 ) );
	vertices.push(	new THREE.Vector3(  0.5,  0.5, 0.0 ) );
	vertices.push(	new THREE.Vector3( -0.5,  0.5, 0.0 ) );

	var geometry = new THREE.BufferGeometry().setFromPoints( vertices );
    const material = new THREE.LineDashedMaterial ({color: 0xffffff , 
	                                                dashSize: 0.1,
												    gapSize: 0.05
												 });
	const opacidade = new THREE.LineBasicMaterial ({color: 0xffffff,
	                                                opacity: 0.5,
													transparent: true                                            
	});
	const cor = new THREE.LineBasicMaterial ({color : 0x006400});
	
	var line = new THREE.Line( geometry);
	line.name = "linhaPoligonalAberta";
	line.visible = true	
    scene.add( line );
 
    curline = line;

	var line = new THREE.LineLoop( geometry);
	line.name = "linhaPoligonalFechada";
	line.visible = false;
	scene.add( line );	

	var line = new THREE.LineLoop ( geometry, material);
	line.computeLineDistances();
	line.name = "pontilhada";
	line.visible = false;
	scene.add(line);

	var line = new THREE.LineLoop ( geometry, opacidade);
	line.computeLineDistances();
	line.name = "opacidade";
	line.visible = false;
	scene.add(line);

	var line = new THREE.LineLoop ( geometry, cor);
	line.name = "cor";
	line.visible = false;
	scene.add(line);


	renderer.clear();
	renderer.render(scene, camera);
};

// ******************************************************************** //
// **                                                                ** //
// ******************************************************************** //
function initGUI() {

	controls = 	{	formas2d : "linhaPoligonalAberta"
				};

	gui.add( controls, 'formas2d', [    "linhaPoligonalAberta",
	                                    "linhaPoligonalFechada",
										"pontilhada",
									    "opacidade",
										"cor", 
									    ]).onChange(changeLine);
	gui.open();
};

// ******************************************************************** //
// **                                                                ** //
// ******************************************************************** //
function changeLine(val) {

	switch(val) {
		case "linhaPoligonalAberta"   :  curline = scene.getObjectByName("linhaPoligonalAberta");
		                                 curline.visible                                        = true;
										 scene.getObjectByName("linhaPoligonalFechada").visible = false;
								         scene.getObjectByName("pontilhada").visible 	        = false;
								         scene.getObjectByName("cor").visible    	            = false;
										 scene.getObjectByName("opacidade").visible             = false;
										 break;
	    case "linhaPoligonalFechada"  :  curline = scene.getObjectByName("linhaPoligonalFechada");
		                                 curline.visible                                        = true;
										 scene.getObjectByName("linhaPoligonalAberta").visible  = false;
								         scene.getObjectByName("pontilhada").visible 	        = false;
										 scene.getObjectByName("cor").visible    	            = false;
										 scene.getObjectByName("opacidade").visible             = false;
								         break;	
        case "pontilhada"             :  curline = scene.getObjectByName("pontilhada");
		                                 curline.visible                                        = true;
										 scene.getObjectByName("linhaPoligonalAberta").visible  = false;
								         scene.getObjectByName("linhaPoligonalFechada").visible = false;
										 scene.getObjectByName("cor").visible    	            = false;
										 scene.getObjectByName("opacidade").visible             = false;
								         break
	    case "opacidade"              : curline = scene.getObjectByName("opacidade");
										 curline.visible                                        = true;
										 scene.getObjectByName("linhaPoligonalAberta").visible  = false;
										 scene.getObjectByName("linhaPoligonalFechada").visible = false;
										 scene.getObjectByName("pontilhada").visible            = false;
										 scene.getObjectByName("cor").visible    	            = false;
										 break;									 
		case "cor"                    : curline = scene.getObjectByName("cor");
		                                curline.visible                                        = true;
		                                scene.getObjectByName("linhaPoligonalAberta").visible  = false;
		                                scene.getObjectByName("linhaPoligonalFechada").visible = false;
										scene.getObjectByName("pontilhada").visible            = false;
										scene.getObjectByName("opacidade").visible             = false;
		                                break;		
	}
	
	renderer.clear();
	renderer.render(scene, camera);	
}

// ******************************************************************** //
// **                                                                ** //
// ******************************************************************** //
function onWindowResize() {

	let minDim = Math.min(window.innerWidth, window.innerHeight);

	renderer.setSize(minDim*0.8, minDim*0.8);

	renderer.clear();
	renderer.render(scene, camera);
}

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
main();

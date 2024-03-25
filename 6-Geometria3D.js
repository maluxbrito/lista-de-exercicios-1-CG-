// Desenhando objetos gráficos 3D do Three.JS

import * as THREE from 'three';

import { GUI } from 'gui';

const 	gui 		= new GUI();
const 	rendSize 	= new THREE.Vector2();

var 	controls, 
		scene,
		camera,
		renderer,
		curObj = null;

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

	var axis = new THREE.AxesHelper(0.8);
    axis.name = "eixos";
    scene.add(axis);


	var objMesh = new THREE.Mesh 	( 	new THREE.TetrahedronGeometry(), 
										new THREE.MeshBasicMaterial({color:0xffff00, wireframe:true })
									); 
	objMesh.name 	= "Tetraedro wireframe amarelo";
	objMesh.visible = true;
	objMesh.rotateY(60.0 * Math.PI / 180.0); 
	objMesh.updateMatrix();
	scene.add( objMesh );

	curObj = objMesh;
	
	objMesh = new THREE.Mesh 	( 	new THREE.TorusGeometry(0.5, 0.3, 30, 30), 
									new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:false })
								); 
	objMesh.name 	= "Toro verde";
	objMesh.visible = false;
	scene.add( objMesh );
	
	var objMesh = new THREE.Mesh 	( 	new THREE.TorusKnotGeometry(0.5, 0.2), 
										new THREE.MeshBasicMaterial({color:0x0000ff, wireframe:true })
									); 
	objMesh.name 	= "TorusKnot wireframe azul";
	objMesh.visible = false;
	objMesh.rotateX(60.0 * Math.PI / 180.0); 
	objMesh.rotateY(30.0 * Math.PI / 180.0); 
	objMesh.updateMatrix();
	scene.add( objMesh );

	var objMesh = new THREE.Mesh (new THREE.OctahedronGeometry(0.5),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true})
								  );
    objMesh.name = "octaedro wireframe";
	objMesh.visible = false;
	scene.add(objMesh);

	const curve = new THREE.CatmullRomCurve3([
		new THREE.Vector3(-0.5, 0, 0),
		new THREE.Vector3(0, 0.5, 0),
		new THREE.Vector3(0.5, 0, 0)
	]);
	const radius = 0.1;
    const tubularSegments = 20;
    const radialSegments = 8;
    const closed = false; 
	var objMesh = new THREE.Mesh (new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, closed),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
	objMesh.name = "tubo wireframe";
	objMesh.visible = false;
	scene.add(objMesh);

	var objMesh = new THREE.Mesh (new THREE.CylinderGeometry( 0.5, 0.5, 0.20, 32 ),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true})
								  );
    objMesh.name = "cilindro wireframe";
	objMesh.visible = false;
	scene.add(objMesh);

	var objMesh = new THREE.Mesh 	( 	new THREE.TetrahedronGeometry(), 
										new THREE.MeshBasicMaterial({color:0xffff00, wireframe:false })
									); 
	objMesh.name 	= "Tetraedro amarelo";
	objMesh.visible = false;
	objMesh.rotateY(30.0 * Math.PI / 90.0); 
	objMesh.updateMatrix();
	scene.add( objMesh );

	objMesh = new THREE.Mesh 	( 	new THREE.TorusGeometry(0.5, 0.3, 30, 30), 
									new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true })
								); 
	objMesh.name 	= "Toro wireframe verde";
	objMesh.visible = false;
	scene.add( objMesh );

	objMesh = new THREE.Mesh 	( 	new THREE.TorusGeometry(0.5, 0.5, 30, 30), 
									new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true })
								); 
	objMesh.name 	= "Toro wireframe tube";
	objMesh.visible = false;
	scene.add( objMesh );

	objMesh = new THREE.Mesh 	( 	new THREE.TorusGeometry(0.5, 0.3, 50, 30), 
									new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true })
								); 
	objMesh.name 	= "Toro wireframe radsegm";
	objMesh.visible = false;
	scene.add( objMesh );

	objMesh = new THREE.Mesh 	( 	new THREE.TorusGeometry(0.5, 0.3, 30, 50), 
									new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true })
								); 
	objMesh.name 	= "Toro wireframe tubsegm";
	objMesh.visible = false;
	scene.add( objMesh );

	var objMesh = new THREE.Mesh 	( 	new THREE.TorusKnotGeometry(0.5, 0.2), 
										new THREE.MeshBasicMaterial({color:0x0000ff, wireframe:true })
									); 
	objMesh.name 	= "TorusKnot wireframe angulo";
	objMesh.visible = false;
	objMesh.rotateX(90.0 * Math.PI / 180.0); 
	objMesh.rotateY(60.0 * Math.PI / 180.0); 
	objMesh.updateMatrix();
	scene.add( objMesh );

	const radius1 = 0.1;
    const tubularSegments1 = 20;
    const radialSegments1 = 8;
    const closed1 = true; 
	var objMesh = new THREE.Mesh (new THREE.TubeGeometry(curve, tubularSegments1, radius1, radialSegments1, closed1),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
	objMesh.name = "tubo wireframe fechado";
	objMesh.visible = false;
	scene.add(objMesh);

	const radius2 = 0.1;
    const tubularSegments2 = 50;
    const radialSegments2 = 8;
    const closed2 = false; 
	var objMesh = new THREE.Mesh (new THREE.TubeGeometry(curve, tubularSegments2, radius2, radialSegments2, closed2),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
	objMesh.name = "tubo wireframe tub";
	objMesh.visible = false;
	scene.add(objMesh);

	var objMesh = new THREE.Mesh (new THREE.CylinderGeometry( 1.0, 0.5, 0.20, 32 ),
	                              new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true})
								  );
    objMesh.name = "cilindro wireframe top";
	objMesh.visible = false;
	scene.add(objMesh);

	renderer.clear();
	renderer.render(scene, camera);
}

// ******************************************************************** //
// **                                                                ** //
// ******************************************************************** //
function initGUI() {

	var controls = 	{	Forma3D : "Tetraedro wireframe amarelo"
					};

	gui.add( controls, 'Forma3D', [ 	"Tetraedro wireframe amarelo", 
										"Toro verde", 
										"TorusKnot wireframe azul",
									    "octaedro wireframe",
									    "tubo wireframe",
									    "cilindro wireframe",
										"Tetraedro amarelo",
									    "Toro wireframe verde",
										"Toro wireframe tube",
										"Toro wireframe radsegm",
										"Toro wireframe tubsegm",
										"TorusKnot wireframe angulo",
										"tubo wireframe fechado",
										"tubo wireframe tub",
										"cilindro wireframe top"] ).onChange(changeObj);
	gui.open();
};

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function changeObj(val) { 

	switch (val) {
		case "Tetraedro wireframe amarelo"	: 	curObj = scene.getObjectByName("Tetraedro wireframe amarelo");
								curObj.visible							                	 = true;
								scene.getObjectByName("Toro verde").visible 		         = false;
								scene.getObjectByName("TorusKnot wireframe azul").visible 	 = false;
								scene.getObjectByName("octaedro wireframe").visible 	     = false;
								scene.getObjectByName("tubo wireframe").visible 	         = false;
								scene.getObjectByName("cilindro wireframe").visible          = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;
		case "Toro verde"			:  	curObj = scene.getObjectByName("Toro verde");
								curObj.visible							 	                 = true;
								scene.getObjectByName("Tetraedro wireframe amarelo").visible = false;
								scene.getObjectByName("TorusKnot wireframe azul").visible 	 = false;
								scene.getObjectByName("octaedro wireframe").visible 	     = false;
								scene.getObjectByName("tubo wireframe").visible 	         = false;
								scene.getObjectByName("cilindro wireframe").visible          = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;
		case "TorusKnot wireframe azul"	:  	curObj = scene.getObjectByName("TorusKnot wireframe azul");
								curObj.visible							 	                 = true;
								scene.getObjectByName("Tetraedro wireframe amarelo").visible = false;
								scene.getObjectByName("Toro verde").visible 		         = false;
								scene.getObjectByName("octaedro wireframe").visible 	     = false;
								scene.getObjectByName("tubo wireframe").visible 	         = false;
								scene.getObjectByName("cilindro wireframe").visible          = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;
		case "octaedro wireframe"     :   curObj	= scene.getObjectByName("octaedro wireframe");
		                        curObj.visible							 	                 = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible = false;
		                        scene.getObjectByName("Toro verde").visible 		         = false;
								scene.getObjectByName("TorusKnot wireframe azul").visible 	 = false;
								scene.getObjectByName("tubo wireframe").visible 	         = false;
								scene.getObjectByName("cilindro wireframe").visible          = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
		                        scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
								scene.getObjectByName("cilindro wireframe top").visible      = false;
								break;
		case "tubo wireframe"			:  	curObj	= scene.getObjectByName("tubo wireframe");
		                        curObj.visible							 	                 = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible = false;
		                        scene.getObjectByName("Toro verde").visible 		         = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	 = false;
								scene.getObjectByName("octaedro wireframe").visible 	     = false;
								scene.getObjectByName("cilindro wireframe").visible          = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
		                        scene.getObjectByName("cilindro wireframe top").visible      = false;
								break;
		case "cilindro wireframe"     :   curObj	= scene.getObjectByName("cilindro wireframe");
		                        curObj.visible							 	                 = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible = false;
		                        scene.getObjectByName("Toro verde").visible 		         = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	 = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	     = false;
								scene.getObjectByName("tubo wireframe").visible 	         = false;
								scene.getObjectByName("Tetraedro amarelo").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible        = false;
								scene.getObjectByName("Toro wireframe tube").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible      = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible      = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible  = false;
								scene.getObjectByName("tubo wireframe fechado").visible      = false;
								scene.getObjectByName("tubo wireframe tub").visible          = false;
								scene.getObjectByName("cilindro wireframe top").visible      = false;
		                        break;
		case "Tetraedro amarelo" :  curObj	= scene.getObjectByName("Tetraedro amarelo");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
								scene.getObjectByName("Toro wireframe verde").visible         = false;
								scene.getObjectByName("Toro wireframe tube").visible          = false;
								scene.getObjectByName("Toro wireframe radsegm").visible       = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;
		case "Toro wireframe verde"   :  curObj	= scene.getObjectByName("Toro wireframe verde");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
								scene.getObjectByName("Tetraedro amarelo").visible            = false;
								scene.getObjectByName("Toro wireframe tube").visible          = false;
								scene.getObjectByName("Toro wireframe radsegm").visible       = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
		                        break; 								
		case "Toro wireframe tube" :  curObj	= scene.getObjectByName("Toro wireframe tube");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
								scene.getObjectByName("Toro wireframe verde").visible         = false;
								scene.getObjectByName("Toro wireframe radsegm").visible       = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
		                        break; 	
		case "Toro wireframe radsegm" :  curObj	= scene.getObjectByName("Toro wireframe radsegm");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
								scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;	
		case "Toro wireframe tubsegm" :  curObj	= scene.getObjectByName("Toro wireframe tubsegm");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
								scene.getObjectByName("Toro wireframe radsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
		                        break;	
		case "TorusKnot wireframe angulo" :  curObj	= scene.getObjectByName("TorusKnot wireframe angulo");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
		                        scene.getObjectByName("Toro wireframe radsegm").visible       = false;
		                        scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;
		case "tubo wireframe fechado" :  curObj	= scene.getObjectByName("tubo wireframe fechado");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
		                        scene.getObjectByName("Toro wireframe radsegm").visible       = false;
		                        scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
								scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
								scene.getObjectByName("tubo wireframe tub").visible           = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
		                        break;	
		case "tubo wireframe tub" :  curObj	= scene.getObjectByName("tubo wireframe tub");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
		                        scene.getObjectByName("Toro wireframe radsegm").visible       = false;
		                        scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
		                        scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
		                        scene.getObjectByName("tubo wireframe fechado").visible       = false;
								scene.getObjectByName("cilindro wireframe top").visible       = false;
								break;						
		case "cilindro wireframe top" 	: curObj = scene.getObjectByName("cilindro wireframe top");
		                        curObj.visible							 	                  = true;
		                        scene.getObjectByName("Tetraedro wireframe amarelo").visible  = false;
		                        scene.getObjectByName("Toro verde").visible            	      = false;
		                        scene.getObjectByName("TorusKnot wireframe azul").visible 	  = false;
		                        scene.getObjectByName("octaedro wireframe").visible 	      = false;
		                        scene.getObjectByName("tubo wireframe").visible 	          = false;
		                        scene.getObjectByName("cilindro wireframe").visible           = false;
		                        scene.getObjectByName("Tetraedro amarelo").visible            = false;
		                        scene.getObjectByName("Toro wireframe verde").visible         = false;
		                        scene.getObjectByName("Toro wireframe tube").visible          = false;
		                        scene.getObjectByName("Toro wireframe radsegm").visible       = false;
		                        scene.getObjectByName("Toro wireframe tubsegm").visible       = false;
		                        scene.getObjectByName("TorusKnot wireframe angulo").visible   = false;
		                        scene.getObjectByName("tubo wireframe fechado").visible       = false;
		                        scene.getObjectByName("tubo wireframe tub").visible           = false;
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

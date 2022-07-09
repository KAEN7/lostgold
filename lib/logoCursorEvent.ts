<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Camera Follow Cursor Example</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			height: 100vh;
		}
	</style>
</head>
<body>
	<canvas></canvas>
	<script src="/js/three.min.js"></script>
	<script type="text/javascript">

(function () { // NOTE: box appears to follow the mouse cursor example

	var windowSize = function (withScrollBar) {
		var wid = 0;
		var hei = 0;
		if (typeof window.innerWidth != "undefined") {
			wid = window.innerWidth;
			hei = window.innerHeight;
		}
		else {
			if (document.documentElement.clientWidth == 0) {
				wid = document.body.clientWidth;
				hei = document.body.clientHeight;
			}
			else {
				wid = document.documentElement.clientWidth;
				hei = document.documentElement.clientHeight;
			}
		}
		return { width: wid - (withScrollBar ? (wid - document.body.offsetWidth + 1) : 0), height: hei };
	};

	var size = windowSize(true);

	// NOTE: issue these statements when resizing the window
	// camera.aspect = size.width / size.height;
	// camera.updateProjectionMatrix();
	// renderer.setPixelRatio(window.devicePixelRatio);
	// renderer.setSize(size.width, size.height);




	var canvas = document.getElementsByTagName("canvas")[0];

	// NOTE: create the scene to place objects in
	var scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcc9966); // NOTE: make the background orange
	scene.autoUpdate = true;



	
	// NOTE: create the camera with 53 degree field of view; this is how the scene is viewed by the user
	var camera = new THREE.PerspectiveCamera(53, size.width / size.height, 1, 5000);

	// NOTE: position the camera in space a bit
	camera.position.z = 2;


	var renderer = new THREE.WebGLRenderer({
		canvas: canvas
	});
	renderer.shadowMap.enabled = true;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(size.width, size.height);
	renderer.render(scene, camera);



	
	// NOTE: create a box
	var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
	var box = new THREE.Mesh(boxGeometry, new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
	box.rotation.x = 1;
	box.rotation.y = 2;
	box.rotation.z = 3;
	box.position.x = box.position.y = 0;
	box.position.z = -2;
	box.receiveShadow = true;
	scene.add(box);



	var light = new THREE.PointLight(0xffffff, 1.2, 10000);
	light.position.set(0,50,5);
	scene.add(light);



	var handler = function (element, type, func) {
		if (element.addEventListener) {
			element.addEventListener(type, func, false);
		} else if (window.attachEvent) {
			element.attachEvent("on" + type, func);
		} else {
			element["on" + type] = func;
		}
	};


	// NOTE: this function will set the camera to follow the box
	handler(canvas, "mousemove", function (event) {

		var offX = 0;
		var offY = 0;
		if (typeof window.pageXOffset != "undefined") {
			offX = window.pageXOffset;
			offY = window.pageYOffset;
		}
		else {
			if (document.documentElement.scrollTop == 0) {
				offX = document.body.scrollLeft;
				offY = document.body.scrollTop;
			}
			else {
				offX = document.documentElement.scrollLeft;
				offY = document.documentElement.scrollTop;
			}
		}
		var x, y;
		if (typeof event.pageX != "undefined") {
			x = event.pageX;
			y = event.pageY;
		}
		else {
			x = event.clientX;
			y = event.clientY;
		}
		x -= offX;
		y -= offY;
		if (x < 0) {
			x = 0;
		}
		if (y < 0) {
			y = 0;
		}

		// NOTE: move the camera
		camera.rotation.x = (y - size.height / 2) / size.width;
		camera.rotation.y = (x - size.width / 2) / size.height;

	});


	// NOTE: MUST HAVE AN ANIMATE FUNCTION
	var animate = function () {

		renderer.render(scene, camera);
		requestAnimationFrame(animate);

	};
	animate();

})();

	</script>
</body>
</html>
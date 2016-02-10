//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				var burst = document.createElement('burst');
                burst.setAttribute('id', 'burst');
				document.body.appendChild( burst );
                
                renderer = new THREE.WebGLRenderer( {alpha: true} );
				renderer.setSize( window.innerWidth, window.innerHeight );
				burst.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();
				scene.fog = new THREE.FogExp2( 0x0000 );

				geometry = new THREE.Geometry();

            /* change perspectivecamera to reduce amount of stars */  
                
				for ( i = 0; i < 2500; i ++ ) {
					var vertex = new THREE.Vector3();
					vertex.x = Math.random() * 2000 - 1500;
					vertex.y = Math.random() * 2000 - 1500;
					vertex.z = Math.random() * 2000 - 1500;

					geometry.vertices.push( vertex );
				}

				parameters = [
					[ [1, 1, 0.5], 5 ],
					[ [0.95, 1, 0.5], 4 ],
					[ [0.90, 1, 0.5], 3 ],
					[ [0.85, 1, 0.5], 2 ],
					[ [0.80, 1, 0.5], 1 ]
				];

				for ( i = 0; i < parameters.length; i ++ ) {

					color = parameters[i][0];
					size  = parameters[i][1];

					materials[i] = new THREE.ParticleSystemMaterial( { size: size } );

					particles = new THREE.ParticleSystem( geometry, materials[i] );

					particles.rotation.x = Math.random() * 6;
					particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;

					scene.add( particles );

				}

//                // Clone stars one
//                
//                $tmc = $("stars").clone().attr('id', 'stars-two').show();
//                $tmc.appendTo("body");
                
//				stats = new Stats();
//				stats.domElement.style.position = 'absolute';
//                stats.domElement.style.display = 'none';
//				stats.domElement.style.top = '0px';
//				container.appendChild( stats.domElement );
            
            /* camera mover */
            
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
//				stats.update();

			}

			function render() {
            
            /* speed */
                
				var time = Date.now() * 0.00003;

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

				camera.lookAt( scene.position );

				for ( i = 0; i < scene.children.length; i ++ ) {

					var object = scene.children[ i ];

					if ( object instanceof THREE.ParticleSystem ) {

						object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

					}

				}

				for ( i = 0; i < materials.length; i ++ ) {

					color = parameters[i][0];

					h = ( 1 * ( color[1] + time ) % 85 ) / 900;
					materials[i].color.setHSL( h, color[0], color[1] );

				}

				renderer.render( scene, camera );

			}


//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var SCREEN_WIDTH = window.innerWidth,
				SCREEN_HEIGHT = window.innerHeight,

			r = 1000,

			mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			camera, scene, renderer;

			init();
			animate();

			function init() {

                var burst = document.createElement('burst');
                burst.setAttribute('id', 'burst');
				document.body.appendChild( burst );
                
                renderer = new THREE.WebGLRenderer( {alpha: true} );
				renderer.setSize( window.innerWidth, window.innerHeight );
				burst.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 20, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 2500 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				var i, line, vertex1, vertex2, material, p,
                
                /* colors and add line */
                    
					parameters = [ [ 1 ], [ 1 ] ],

					geometry = new THREE.Geometry();


				for ( i = 0; i < 7500; i ++ ) {

					var vertex1 = new THREE.Vector3();
					vertex1.x = Math.random() * 2 - 1;
					vertex1.y = Math.random() * 2 - 1;
					vertex1.z = Math.random() * 2 - 1;
					vertex1.normalize();
					vertex1.multiplyScalar( r );

					vertex2 = vertex1.clone();
                
                /* length of lines */
                    
					vertex2.multiplyScalar( Math.random() * 0.025 + 1 );

					geometry.vertices.push( vertex1 );
					geometry.vertices.push( vertex2 );

				}

				for( i = 0; i < parameters.length; ++ i ) {

					p = parameters[ i ];

					material = new THREE.LineBasicMaterial( { color: p[ 4 ], opacity: p[ 0.1 ], linewidth: p[ 10 ] } );

					line = new THREE.Line( geometry, material, THREE.LinePieces );
					line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
					line.originalScale = p[ 0 ];
					line.rotation.y = Math.random() * Math.PI;
					line.updateMatrix();
					scene.add( line );

				}

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2000;
				windowHalfY = window.innerHeight / 2000;

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

			}

			function render() {

				var time = Date.now() * 0.00003;

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

				camera.lookAt( scene.position );

				renderer.render( scene, camera );

				for ( var i = 0; i < scene.children.length; i ++ ) {

					var object = scene.children[ i ];

					if ( object instanceof THREE.Line ) {

					object.rotation.y = time * ( i > 1 ? ( i + 1 ) : - ( i + 0.05 ) );
                    object.rotation.x = time * ( i > 1 ? ( i + 1 ) : - ( i + 0.05 ) );
                    object.rotation.z = time * ( i > 1 ? ( i + 1 ) : - ( i + 0.05 ) );

						if ( i < 1 ) object.scale.x = object.scale.y = object.scale.z = object.originalScale * (i/1+10) * (1 + 0.5 * Math.sin( 1*time ) );

					}

				}

			}


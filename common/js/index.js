'use strict';

var lineArea = document.getElementById('line-area');
var boxArea = document.getElementById('box-area');

var line = (function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(79, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var data = [  
        // [D] o
        [-71, 0, 0],
        [-71, 15, 0],
        [-57, 15, 0],
        [-57, 0, 0],
        [-71, 0, 0],
        [-71, 0, -10],
        [-71, 15, -10],
        [-71, 15, 0],
        [-71, 15, -10],
        [-57, 15, -10],
        [-57, 15, 0],
        [-57, 15, -10],
        [-57, 0, -10],
        [-57, 0, 0],
        [-57, 0, -10],
        [-71, 0, -10],

        // [D] o_k
        [-50, 0, -10],
        [-50, 0, 0],

        // [D] k
        [-50, 15, 0],
        [-46, 15, 0],
        [-46, 11, 0],
        [-42, 15, 0],
        [-37, 15, 0],
        [-46, 7, 0],
        [-37, 0, 0],
        [-42, 0, 0],
        [-46, 3, 0],
        [-46, 0, 0],
        [-50, 0, 0],
        [-50, 15, 0],
        [-50, 15, -10],
        [-50, 15, 0],
        [-50, 15, -10],
        [-46, 15, -10],
        [-46, 15, 0],
        [-46, 15, -10],
        [-46, 11, -10],
        [-46, 11, 0],
        [-46, 11, -10],
        [-42, 15, -10],
        [-42, 15, 0],
        [-42, 15, -10],
        [-37, 15, -10],
        [-37, 15, 0],
        [-37, 15, -10],
        [-46, 7, -10],
        [-46, 7, 0],
        [-46, 7, -10],
        [-37, 0, -10],
        [-37, 0, 0],
        [-37, 0, -10],
        [-42, 0, -10],
        [-42, 0, 0],
        [-42, 0, -10],
        [-46, 3, -10],
        [-46, 3, 0],
        [-46, 3, -10],
        [-46, 0, -10],
        [-46, 0, 0],
        [-46, 0, -10],
        [-50, 0, -10],
        [-50, 0, 0],
        [-50, 0, -10],
        [-50, 15, -10],
        [-50, 15, 0],
        [-50, 15, -10],

        // [D] k_y 
        [-46, 15, -10],
        [-46, 11, -10],
        [-42, 15, -10],
        [-37, 15, -10],
        [-32, 15, -10],

        // [D] y
        [-32, 15, -10],
        [-32, 15, 0],
        [-27, 7, 0],
        [-27, 0, 0],
        [-22, 0, 0],
        [-22, 7, 0],
        [-17, 15, 0],
        [-22, 15, 0],
        [-24.5, 10, 0],
        [-27, 15, 0],
        [-32, 15, 0],
        [-32, 15, -10],
        [-32, 15, 0],
        [-32, 15, -10],
        [-27, 7, -10],
        [-27, 7, 0],
        [-27, 7, -10],
        [-27, 0, -10],
        [-27, 0, 0],
        [-27, 0, -10],
        [-22, 0, -10],
        [-22, 0, 0],
        [-22, 0, -10],
        [-22, 7, -10],
        [-22, 7, 0],
        [-22, 7, -10],
        [-17, 15, -10],
        [-17, 15, 0],
        [-17, 15, -10],
        [-22, 15, -10],
        [-22, 15, 0],
        [-22, 15, -10],
        [-24.5, 10, -10],
        [-24.5, 10, 0],
        [-24.5, 10, -10],
        [-27, 15, -10],
        [-27, 15, 0],
        [-27, 15, -10],
        [-32, 15, -10],
        [-32, 15, 0],
        [-32, 15, -10],

        // [D] y_o
        [-27, 15, -10],
        [-24.5, 10, -10],
        [-22, 15, -10],
        [-10, 15, -10],
        [-10, 15, 0],

        // [D] O
        [-10, 0, 0],
        [0, 0, 0],
        [0, 15, 0],
        [-10, 15, 0],
        [-10, 15, -10],
        [-10, 15, 0],
        [-10, 15, -10],
        [-10, 0, -10],
        [-10, 0, 0],
        [-10, 0, -10],
        [0, 0, -10],
        [0, 0, 0],
        [0, 0, -10],
        [0, 15, -10],
        [0, 15, 0],
        [0, 15, -10],
        [-10, 15, -10],
        [-10, 15, 0],
        [-10, 15, -10],
        [10, 15, -10],
        [10, 15, 0],
        [10, 0, 0],
        [20, 0, 0],
        [20, 15, 0],
        [10, 15, 0],
        [10, 15, -10],
        [10, 15, 0],
        [10, 15, -10],
        [10, 0, -10],
        [10, 0, 0],
        [10, 0, -10],
        [20, 0, -10],
        [20, 0, 0],
        [20, 0, -10],
        [20, 15, -10],
        [20, 15, 0],
        [20, 15, -10],
        [10, 15, -10],
        [10, 15, 0],
        [10, 15, -10],

        // [D] o_n
        [30, 15, -10],
        
        // [D] n
        [30, 15, 0],
        [30, 0, 0],
        [36, 0, 0],
        [36, 10, 0],
        [40, 0, 0],
        [47, 0, 0],
        [47, 15, 0],
        [42, 15, 0],
        [42, 10, 0],
        [40, 15, 0],
        [30, 15, 0],
        [30, 15, -10],
        [30, 15, 0],
        [30, 15, -10],
        [30, 0, -10],
        [30, 0, 0],
        [30, 0, -10],
        [36, 0, -10],
        [36, 0, 0],
        [36, 0, -10],
        [36, 10, -10],
        [36, 10, 0],
        [36, 10, -10],
        [40, 0, -10],
        [40, 0, 0],
        [40, 0, -10],
        [47, 0, -10],
        [47, 0, 0],
        [47, 0, -10],
        [47, 15, -10],
        [47, 15, 0],
        [47, 15, -10],
        [42, 15, -10],
        [42, 15, 0],
        [42, 15, -10],
        [42, 10, -10],
        [42, 10, 0],
        [42, 10, -10],
        [40, 15, -10],
        [40, 15, 0],
        [40, 15, -10],
        [30, 15, -10],
        [30, 15, 0],
        [30, 15, -10]
    ];

    renderer.setSize(window.innerWidth, window.innerHeight);
    lineArea.appendChild(renderer.domElement);
    camera.position.z = 80;

    var material1 = new THREE.LineBasicMaterial({ color: 0xff00c3 });
    var geometry1 = new THREE.Geometry();

    for(var i = 0; i < data.length; i++) {
        var d = data[i];
        pushItem(d[0], d[1], d[2]);
    }

    var line = new THREE.Line(geometry1, material1);
    scene.add(line);
    
    function pushItem(x, y, z) {
        geometry1.vertices.push(new THREE.Vector3(x, y, z));
    }

    function draw() {
        requestAnimationFrame(draw);
        // line.rotation.x -= 0.009;
        line.rotation.y -= 0.009;
        renderer.render(scene, camera);
    }

    return {
        draw: function() {
            return draw();
        }
    }
})();

var box = (function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1500);
    var renderer = new THREE.WebGLRenderer();
    var material;
    var geometry;
    var mesh;

    var group = new THREE.Object3D();
    camera.position.z = 1500;
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 1, 2000);

    renderer.setSize(window.innerWidth, window.innerHeight);
    boxArea.appendChild(renderer.domElement);

    // 랜덤 사이즈, 색상
    setRandomSizeBox(group);
    setRandomColor(geometry);

    material = new THREE.MeshBasicMaterial({ 
        color: 0xefefef, 
        transparent: true, 
        wireframe: false, 
        vertexColors: THREE.FaceColors 
    });

    scene.add(group);

    function setRandomSizeBox(group){
        for ( var i = 0; i < 1000; i ++ ) {
            var _cubesize = Math.random() * 50 + 5;
            geometry = new THREE.BoxGeometry(_cubesize, _cubesize, _cubesize);
            mesh = new THREE.Mesh(geometry, material);

            mesh.position.x = Math.random() * 1000 - 500;
            mesh.position.y = Math.random() * 1000 - 500;
            mesh.position.z = Math.random() * 1000 - 500;
            group.add(mesh);
        }
    }      

    function setRandomColor(geometry){
        for (var i = 0; i < geometry.faces.length; i++) {
            var face = geometry.faces[i];
            face.color.setHex(Math.random() * 0xffffff);
        }
    }

    function draw(){
        requestAnimationFrame(draw);
        group.rotation.x += 0.003;
        group.rotation.y += 0.002;
        group.rotation.z += 0.001;

        renderer.render(scene, camera);
    }

    return {
        draw: function() {
            return draw();
        }
    }
})();
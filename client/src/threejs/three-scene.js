import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class ThreeScene extends Component {
  componentDidMount() {
    //scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x909090);

    //renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enable = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.mount.appendChild(this.renderer.domElement);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 10;

    //Create a DirectionalLight and turn on shadows for the light
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(0, 15, 15); //default; light shining from top
    this.light.castShadow = true; // default false
    this.scene.add(this.light);

    //Set up shadow properties for the light
    this.light.shadow.mapSize.width = 512; // default
    this.light.shadow.mapSize.height = 512; // default
    this.light.shadow.camera.near = 0.5; // default
    this.light.shadow.camera.far = 500; // default

    // Create a Rectangle base
    var geometry = new THREE.BoxBufferGeometry(20, 20, 2);
    var material = new THREE.MeshBasicMaterial({
      color: 0xc4c4c4,
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.rotation.x = -Math.PI / 2;
    this.cube.position.y = -10;
    this.cube.castShadow = true;
    this.cube.receiveShadow = true;
    this.scene.add(this.cube);

    //Create a sphere that cast shadows (but does not receive them)
    this.sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    this.sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
    this.sphere.castShadow = true; //default is false
    this.sphere.receiveShadow = false; //default
    this.scene.add(this.sphere);

    /*
    // Create a plane that will receive shadow
    this.planeGeometry = new THREE.PlaneGeometry(40, 30, 32, 32);
    this.planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    this.plane.position.y -= 10;
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
    */

    //Create a helper for the shadow camera (optional)
    this.helper = new THREE.CameraHelper(this.light.shadow.camera);
    this.scene.add(this.helper);

    // animate & render
    this.animation();
    this.renderer.render(this.scene, this.camera);

    new OrbitControls(this.camera, this.renderer.domElement);
    // Event handler
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  };

  animation = () => {
    requestAnimationFrame(this.animation);
    //this.cube.rotation.x += 0.01;
    //this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;

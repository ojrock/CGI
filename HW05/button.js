class Button {
  constructor(color, name) {
    this.on = false;
    this.hsl = color.getHSL();
    this.obj = this.makeButton(name);
  }

  get isOn() {
    return this.on;
  }

  toggle() {
    this.on = !this.on;
    this.update();
  }

  update() {
    if (this.on) {
      this.obj.scale.set (1,0.5,1);
      this.obj.children[0].material.color.setHSL
        (this.hsl.h, 0, 1);
    } else {
    	this.obj.scale.set(1,1,1);
    	this.obj.children[0].material.color.setHSL
         (this.hsl.h, this.hsl.s, this.hsl.l);
    }
  }


  makeButton(name) {
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 5, 2.5),
      new THREE.MeshLambertMaterial());
    let button = new THREE.Object3D();
    button.add(mesh);
    mesh.material.color.setHSL (this.hsl.h, this.hsl.s, this.hsl.l)
    mesh.position.y = 2.5;
    button.name = name;  // a string
    return button;
  }

}

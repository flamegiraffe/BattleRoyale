function WorldObject(I) {
   I.draw = function() {
      noStroke();
      fill(color(48,49,52));
      rect(this.x, this.y, this.width, this.height);
   };
  return I;
}

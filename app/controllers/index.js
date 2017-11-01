import Ember from "ember";

export default Ember.Controller.extend({
  //operationBuffer -> user input
  //outputDisplay -> Calculate output
  operationBuffer: "",
  outputDisplay: "0",

  // Calculates operationBuffer returning answer for outputDisplay
  // Called with '='
  evalAns: function() {
    return eval(this.get("operationBuffer"));
  },

  actions: {
    pressButton: function(value) {
      if (value === "C") {
        this.set("operationBuffer", "");
        this.set("outputDisplay");
      } else if (value === "=") {
        this.set("outputDisplay", this.evalAns());
        this.set("operationBuffer", "");
      } else {
        if (typeof value === "string" && value !== ".") {
          this.set(
            "operationBuffer",
            this.get("operationBuffer") + " " + value + " "
          );
        } else {
          this.set("operationBuffer", this.get("operationBuffer") + value);
        }
      }
    }
  }
});

import Ember from "ember";

export default Ember.Controller.extend({
  themeType: "",

  actions: {
    pressButton: function(value) {
      if (value === "Default") {
        this.set("themeType", "Default");
      } else if (value === "Light") {
        this.set("themeType", "Light");
      } else if (value === "Dark") {
        this.set("themeType", "Dark");
      } else if (value === "Colors") {
        this.set("themeType", "Colors");
      }

      this.get("store").push({
        data: [
          {
            type: "current",
            id: 1,
            attributes: {
              name: this.get("themeType")
            }
          }
        ]
      });
    }
  }
});

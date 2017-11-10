import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    this.get("store").push({
      data: [
        {
          type: "theme",
          id: 4,
          attributes: {
            className: "default",
            name: "Default"
          }
        }
      ]
    });
    return this.get("store").findAll("theme");
  }
});

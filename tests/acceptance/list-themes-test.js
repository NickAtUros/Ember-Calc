import { test } from "qunit";
import moduleForAcceptance from "ember-calc/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | list themes");

test("visiting /", function(assert) {
  visit("/");

  andThen(function() {
    assert.equal(currentURL(), "/");
  });
});

test("visiting /themes", function(assert) {
  visit("/themes");
  andThen(function() {
    assert.equal(currentURL(), "/themes");
  });
});

test("List possible themes", function(assert) {
  visit("/themes");
  andThen(function() {
    assert.equal(find(".listing").length, 3, "should have 3 themes");
  });
});

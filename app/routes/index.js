import Ember from 'ember';

  var posts = [{
    id: 1,
    date: "April 23, 2016",
    title: "Banana Bread",
    time: "1 hour",
    serving: "6",
    text: "Blend braise brine brown chop dip drop fluff fry garnish grease and flour melt mix muddle par boil pea-sized crumbs plump pound pulse reduce reheat rub sear stir thaw wilt. Brine brown carve chunk coats a spoon de-fat defrost dredge emulsify fluff fry garnish hard ball stage husk matchstick muddle pan broil pare partially set plump seed shell sift skewer soft peaks stir-fry trim. Binder blend braise carve combine cube de-fat degrease dilute drizzle grease and flour par boil peel pound quarter seed separate shred sieve skin snip soft peaks steam steep stir wilt. Beat broil chafe chunk curdle de-fat deglaze drain drizzle fold golden brown julienne matchstick moist heat muddle pare peel pit process render rice season shell sliver soft ball stage stir stir constantly stir-fry thaw."
  },{
    id: 2,
    date: "April 25, 2016",
    title: "Garden Veggie Quiche",
    time: "1 hour",
    serving: "8",
    text:"Blend bone caramelize coddle combine core cream crimp curdle cut in dash flake floret fold froth fry grind husk par boil poach pulse render scald stir whisk. Baste blanch bone broil crush dash fillet fold in grill ice matchstick melt pound pulse quarter scramble sieve sift skewer sprinkle thaw. Debone brine coats a spoon crimp deep fry dip drizzle dust glaze grease and flour grill mince pat pit poach quarter reheat rice roast roll up jelly-roll fashion separate set shred skewer skim soft peaks stew stir constantly whip. Crimp dip dot flip floret fold in froth grill hull ice knead pipe rice scramble season separate shred sieve slice soft crack stage stir constantly stir-fry thaw toss."
  },{
    id: 3,
    date: "May 1, 2016",
    title: "Chocolate Cake",
    time: "1.5 hour",
    serving: "12",
    text:"Assemble brown chop coddle defrost fold in garnish husk knead matchstick pound score stir thread. Al dente braise coats a spoon de-fat degrease flip grate grind inject knead par boil pare pinch pith pound scramble season shred sift skin soft ball stage steep stew stir stuff sweat. Dice dilute dry heat flip frost garnish grind inject knead pinch pipe sliver steam thaw wedge. Batter blend brine butterfly core husk pare pipe pound rice stir stock whip zest. Binder chafe clarify degrease grate knead pan broil pare partially set plump scald sear sprinkle. Al dente baste blend drop grease process rolling boil rub set soft ball stage spread stir-fry thin wilt."
  }];

  export default Ember.Route.extend({
    model() {
      return posts;
    },
});

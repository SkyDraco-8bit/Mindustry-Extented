@override
Blocks.multiplicativeReconstructor.upgrades.add(
    Seq.with(
       Vars.content.getByName(ContentType.unit, "mindustry-poly"),
        Vars.content.getByName(ContentType.unit, "mindustry-mega")
        Vars.content.getByName(ContentType.unit, "exdustry-spirit")
    ).toArray(UnitType)
);

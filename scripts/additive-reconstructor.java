@override
Blocks.additiveReconstructor.upgrades.add(
    Seq.with(
       Vars.content.getByName(ContentType.unit, "mindustry-poly"),
        Vars.content.getByName(ContentType.unit, "exdustry-spirit")
    ).toArray(UnitType)
);

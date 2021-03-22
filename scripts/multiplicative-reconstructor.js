package mindustry.content;

import arc.graphics.*;
import arc.struct.*;
import mindustry.ai.types.*;
import mindustry.annotations.Annotations.*;
import mindustry.ctype.*;
import mindustry.entities.abilities.*;
import mindustry.entities.bullet.*;
import mindustry.gen.*;
import mindustry.graphics.*;
import mindustry.type.*;
import mindustry.world.meta.*;

@override
Blocks.multiplicativeReconstructor.upgrades.add(
    Seq.with(
       Vars.content.getByName(ContentType.unit, "mindustry-poly"),
        Vars.content.getByName(ContentType.unit, "mindustry-mega")
        Vars.content.getByName(ContentType.unit, "exdustry-spirit")
    ).toArray(UnitType)
);

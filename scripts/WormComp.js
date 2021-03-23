package mindustry.entities.comp;

import arc.math.*;
import arc.math.geom.*;
import arc.util.*;
import mindustry.*;
import mindustry.ai.*;
import mindustry.annotations.Annotations.*;
import mindustry.content.*;
import mindustry.entities.*;
import mindustry.entities.EntityCollisions.*;
import mindustry.gen.*;
import mindustry.graphics.*;
import mindustry.type.*;
import mindustry.world.blocks.environment.*;

public float ringSpacing = 1.0
public float 

@Components

abstract class WormComp implements Posc, Rotc, Hitboxc, Flyingc, Unitc{
    @Import float x, y;
    @Import UnitType type;
    @Replace
    @Override
    public SolidPred solidity(){
        return !type.allowLegStep ? EntityCollisions::solid : EntityCollisions::legsSolid;
    }
  

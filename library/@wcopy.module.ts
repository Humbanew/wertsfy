// Propriedades de Estado de Bloco

const BlockstatePropertyAxis = () => {setup: "axis=x"||"axis=y"||"axis=z" }

const BlockstatePropertyFace = () => { setup: "face=wall"||"face=floor"||"face=ceiling" };

const BlockstatePropertyFacing = () => { setup: "facing=north"||"facing=south"||"facing=west"||"facing=east" };

const BlockstatePropertyHalf = () => { setup:"half=upper"||"half=lower" }

const BlockstatePropertyHinge = () => { setup:"hinge=left"||"hinge=right" }

const BlockstatePropertyInWall = () => { setup:"in_wall=true"||"in_wall=false" }

const BlockstatePropertyOpen = () => { setup:"open=true"||"open=false" }

const BlockstatePropertyPowered = () => { setup:"powered=true"||"powered=false" }

const BlockstateSubproperties = (value: string|number) => { setup:`model=${value}`||`x=${value}`||`y=${value}` }

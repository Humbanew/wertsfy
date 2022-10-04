declare const structure: {
    minecraft: {
        assets: {
            blockstates: {
                variants: {
                    "@configuration": {
                        model: StringConstructor;
                        uvlock: {
                            Nulled: string;
                            Disabled: string | boolean;
                            Enabled: string | boolean;
                        };
                        x: number;
                        y: number;
                        conditions: {
                            apply: {
                                model: StringConstructor;
                            };
                            when: {
                                east: {
                                    Nulled: string;
                                    Disabled: string | boolean;
                                    Enabled: string | boolean;
                                };
                                west: {
                                    Nulled: string;
                                    Disabled: string | boolean;
                                    Enabled: string | boolean;
                                };
                                north: {
                                    Nulled: string;
                                    Disabled: string | boolean;
                                    Enabled: string | boolean;
                                };
                                south: {
                                    Nulled: string;
                                    Disabled: string | boolean;
                                    Enabled: string | boolean;
                                };
                            };
                        };
                    };
                    axis: {
                        CoordX: string;
                        CoordY: string;
                        CoordZ: string;
                    };
                    face: {
                        Nulled: string;
                        Ceiling: string;
                        Floor: string;
                        Wall: string;
                    };
                    facing: {
                        Nulled: string;
                        East: string;
                        West: string;
                        North: string;
                        South: string;
                    };
                    half: {
                        Nulled: string;
                        Lower: string;
                        Upper: string;
                    };
                    in_wall: {
                        Nulled: string;
                        Disabled: string | boolean;
                        Enabled: string | boolean;
                    };
                    hinge: {
                        Nulled: string;
                        Left: string;
                        Right: string;
                    };
                    open: {
                        Nulled: string;
                        Disabled: string | boolean;
                        Enabled: string | boolean;
                    };
                    powered: {
                        Nulled: string;
                        Disabled: string | boolean;
                        Enabled: string | boolean;
                    };
                    shape: {
                        Nulled: string;
                        AscendingEast: string;
                        AscendingWest: string;
                        AscendingNorth: string;
                        AscendingSouth: string;
                        EastWest: string;
                        InnerLeft: string;
                        InnerRight: string;
                        NorthSouth: string;
                        OuterLeft: string;
                        OuterRight: string;
                        Straight: string;
                    };
                    type: {
                        Nulled: string;
                        Bottom: string;
                        Double: string;
                        Type: string;
                    };
                };
                multipart: {
                    "@configuration": {
                        when: {
                            up: {
                                Nulled: string;
                                Disabled: string | boolean;
                                Enabled: string | boolean;
                            };
                        };
                        apply: {
                            model: StringConstructor;
                        };
                    };
                };
            };
        };
        data: {};
    };
};
declare type WCKarzok = Object;
//# sourceMappingURL=wckarzok.beta.d.ts.map
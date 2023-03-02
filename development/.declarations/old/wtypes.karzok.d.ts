// Possível Conglomerado de Interfaces

declare type Karzok = { 

  "minecraft": {

    "assets": {

      "blockstates": {

        "variants": {
          
          "configuration": {

            "model": String
            "uvlock": {

              Nulled: "~none"
              Disabled: "false"|false
              Enabled: "true"|true

            }
            "x": 0|90|180|270
            "y": 0|90|180|270
            "conditions": {

              "apply": {

                "model": String

              }

              "when": {

                "east": {

                  Nulled: "~none"
                  Disabled: "false"|false
                  Enabled: "true"|true

                }

                "west": {

                  Nulled: "~none"
                  Disabled: "false"|false
                  Enabled: "true"|true

                }

                "north": {

                  Nulled: "~none"
                  Disabled: "false"|false
                  Enabled: "true"|true

                }

                "south": {

                  Nulled: "~none"
                  Disabled: "false"|false
                  Enabled: "true"|true

                }


              }
            
            }

          }

          "axis": {

            CoordX: "x"
            CoordY: "y"
            CoordZ: "z"

          }

          "face": {

            Nulled: "~none"
            Ceiling: "ceiling"
            Floor: "floor"
            Wall: "wall"

          }

          "facing": {

            Nulled: "~none"
            East: "east"
            West: "west"
            North: "north"
            South: "south"

          }

          "half": {

            Nulled: "~none"
            Lower: "lower"
            Upper: "upper"

          }

          "in_wall": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "hinge": {

            Nulled: "~none"
            Left: "left"
            Right: "right"

          }

          "open": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "powered": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true
            
          }

          "shape": {

            Nulled: "~none"
            AscendingEast: "ascending_east"
            AscendingWest: "ascending_west"
            AscendingNorth: "ascending_north"
            AscendingSouth: "ascending_south"
            EastWest: "east_west"
            InnerLeft: "inner_left"
            InnerRight: "inner_right"
            NorthSouth: "north_south"
            OuterLeft: "outer_left"
            OuterRight: "outer_right"
            Straight: "straight"

          }

          "type": {

            Nulled: "~none"
            Bottom: "bottom"
            Double: "double"
            Top: "top"
            Sticky: "sticky"
            Normal: "normal"

          }

          "honey_level": {

            Nulled: "~none"
            Level0: "0"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"
            Level5: "5"

          }

          "age": {

            Nulled: "~none"
            Level0: "0"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"
            Level5: "5"
            Level6: "6"
            Level7: "7"

          }

          "attachment": {

            Nulled: "~none"
            Ceiling: "ceiling"
            DoubleWall: "double_wall"
            Floor: "floor"
            SingleWall: "single_wall"

          }

          "tilt": {

            Nulled: "~none"
            Full: "full"
            None: "none"
            Partial: "partial"
            Unstable: "unstable"

          }

          "lit": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "candles": {

            Nulled: "~none"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"

          }

          "orientation": {

            Nulled: "~none"
            DownEast: "down_east"
            DownNorth: "down_north"
            DownSouth: "down_south"
            DownWest: "down_west"
            EastUp: "east_up"
            NorthUp: "north_up"
            SouthUp: "south_up"
            WestUp: "west_up"
            UpEast: "up_east"
            UpNorth: "up_north"
            UpSouth: "up_south"
            UpWest: "up_west"

          }

          "snowy": {
              
            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true
          
          }

          "thickness": {

            Nulled: "~none"
            Base: "base"
            Frustum: "frustum"
            Middle: "middle"
            Tip: "tip"
            TipMerge: "tip_merge"

          }

          "vertical_direction": {

            Nulled: "~none"
            Down: "down"
            Up: "up"

          }

          "locked": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "delay": {

            Nulled: "~none"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"

          }

          "conditional": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "charges": {

            Nulled: "~none"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"
            Level5: "5"

          }

          "layers": {

            Nulled: "~none"
            Level0: "0"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"
            Level5: "5"
            Level6: "6"
            Level7: "7"
            Level8: "8"

          }

          "hanging": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "extended": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "attached": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }

          "eggs": {

            Nulled: "~none"
            Level1: "1"
            Level2: "2"
            Level3: "3"
            Level4: "4"

          }

          "hatch": {

            Nulled: "~none"
            Level0: "0"
            Level1: "1"
            Level2: "2"

          }
          
          "short": {

            Nulled: "~none"
            Disabled: "false"|false
            Enabled: "true"|true

          }


        }

        "multipart": {

          "configuration": {

            "when": {
              
              "up": {
              
                Nulled: "~none"
                Disabled: "false"|false
                Enabled: "true"|true
              
              }

              "north": {

                Nulled: "~none"
                Low: "low"
                Tall: "tall"

              }

              "south": {

                Nulled: "~none"
                Low: "low"
                Tall: "tall"

              }

              "east": {
                
                Nulled: "~none"
                Low: "low"
                Tall: "tall"

              }

              "west": {
                
                Nulled: "~none"
                Low: "low"
                Tall: "tall"

              }

              "age": {

                Nulled: "~none"
                Level0: "0"
                Level1: "1"

              }

              "leaves": {

                Nulled: "~none"
                Small: "small"
                Large: "large"

              }

              "OR": {

                "north": {

                  Nulled: "~none"
                  None: "none"
                  SideUp: "side|up"

                }

                "south": {
                  
                  Nulled: "~none"
                  None: "none"
                  SideUp: "side|up"

                }

                "west": {

                  Nulled: "~none"
                  None: "none"
                  SideUp: "side|up"

                }

                "east": {

                  Nulled: "~none"
                  None: "none"
                  SideUp: "side|up"

                }

              }
              
            }

            "apply": {

              "model": String|Array<String>|"none"|"side|up"

            }


          }


        }

      }

      "fonts": {

        "providers": {

          "type": {
            
            Bitmap: "bitmap" 
            LegacyUnicode: "legacy_unicode"
          
          }
          "sizes": String
          "template": String
          "file": String
          "ascent": Number
          "chars": Array<String>
          
        }

      }

      "lang": {

        "language": {

          "name": String
          "region": String
          "code": String

        }

        "narrator": {

          "button": {

            "accessibility": String
            "language": String
            "difficulty_lock": {

              Default: String
              "unlocked": String
              "locked": String

            }

          }

          "screen": {

            "usage": String
            "title": String

          }

          "controls": {

            "reset": String
            "bound": String
            "unbound": String

          }

          "select": {

            Default: String
            "world": String

          }

          "loading": {

            Default: String
            "done": String

          }

          "joining": String

          "position": {

            "screen": String
            "list": String
            "object_list": String

          }

          "toast": {

            "disabled": String
            "enabled": String

          }

        }

        "narration": {

          "suggestion": {

            Default: String
            "tooltip": String

          }

          "button": {

            Default: String
            "usage": {

              "focused": String
              "hovered": String

            }

          }

          "cycle_button": {

            "usage": {

              "focused": String
              "hovered": String

            }

          }

          "checkbox": {

            Default: String
            "usage": {

              "focused": String
              "hovered": String

            }

          }

          "recipe": {

            Default: String
            "usage": {

              Default: String
              "more": String

            }

          }

          "selection": {

            "usage": String

          }

          "component_list": {

            "usage": String

          }

          "slider": {

            "usage": {

              "focused": String
              "hovered": String

            }

          }

          "edit_box": String

        }

        "chat_screen": {

          "title": String
          "usage": String
          "message": String

        }

        "gui": {

          "done": String
          "cancel": String
          "back": String
          "toTitle": String
          "toMenu": String
          "up": String
          "down": String
          "yes": String
          "no": String
          "none": String
          "all": String
          "ok": String
          "proceed": String
          "recipebook": {

            "moreRecipes": String
            "search_hint": String
            "toggleRecipes": {

              "all": String
              "craftable": String
              "smeltable": String
              "blastable": String
              "smokable": String

            }

          }
    
          "socialInteractions": {

            "title": String
            "tab_all": String
            "tab_hidden": String
            "tab_blocked": String
            "blocking_hint": String
            "status_hidden": String
            "status_blocked": String
            "status_offline": String
            "status_hidden_offline": String
            "status_blocked_offline": String
            "server_label": {

              "single": String
              "multiple": String

            }

            "search_hint": String
            "search_empty": String
            "empty_hidden": String
            "empty_blocked": String
            "hide": String
            "show": String
            "hidden_in_chat": String
            "shown_in_chat": String
            "tooltip": {

              "hide": String
              "show": String

            }
            
          }

          "narrate": {

            "button": String
            "slider": String
            "editBox": String

          }

          "advancements": String
          "stats": String
          "entity_tooltip": {

            "type": String

          }

        }

        "translation": { 
          
          "test": {

            "none": String
            "complex": String
            "escape": String
            "invalid": String
            "invalid2": String
            "args": String
            "world": String

          }

        }
    
        "menu": {
          
          "game": String
          "singleplayer": String
          "multiplayer": String
          "online": String
          "options": String
          "quit": String
          "returnToMenu": String
          "disconnect": String
          "returnToGame": String
          "generatingLevel": String
          "loadingLevel": String
          "savingLevel": String
          "working": String
          "savingChunks": String
          "preparingSpawn": String
          "loadingForcedChunks": String
          "generatingTerrain": String
          "convertingLevel": String
          "respawning": String
          "shareToLan": String
          "sendFeedback": String
          "reportBugs": String
          "paused": String
          "modded": String
          "playdemo": String
          "resetdemo": String

        }

        "optimizeWorld": {

          "confirm": {

            "title": String
            "description": String

          }

          "title": String
          "stage": {

            "counting": String
            "upgrading": String
            "finished": String
            "failed": String

          }

          "info": {
          
            "converted": String
            "skipped": String
            "total": String
          
          }

        }

        "selectWorld": {
  
          "title": String
          "search": String
          "world": String
          "select": String
          "create": String
          "recreate": {

            Default: String
            "error": {

              "title": String
              "text": String

            }

            "customized": {

              "title": String
              "text": String

            }

          }

          "createDemo": String
          "delete": String
          "edit": {

            Default: String
            "title": String
            "resetIcon": String
            "openFolder": String
            "save": String
            "backup": String
            "backupFolder": String
            "backupFailed": String
            "backupCreated": String
            "backupSize": String
            "optimize": String
            "export_worldgen_settings": {

              Default: String
              "success": String
              "failure": String

            }

          }

          "deleteQuestion": String
          "deleteWarning": String
          "deleteButton": String
          "conversion": {

            Default: String
            "tooltip": String

          }

          "locked": String
          "incompatible_series": String
          "newWorld": String
          "enterName": String
          "resultFolder": String
          "enterSeed": String
          "seedInfo": String
          "cheats": String
          "customizeType": String
          "version": String
          "versionUnknown": String
          "versionQuestion": String
          "versionWarning": String
          "versionJoinButton": String
          "backupQuestion": {

            "snapshot": String
            "downgrade": String
            "customized": String
            "experimental": String

          }

          "backupWarning": {

            "snapshot": String
            "downgrade": String
            "customized": String
            "experimental": String

          }

          "backupEraseCache": String
          "backupJoinConfirmButton": String
          "backupJoinSkipButton": String
          "tooltip": {

            "fromNewerVersion1": String
            "fromNewerVersion2": String
            "snapshot1": String
            "snapshot2": String

          }

          "unable_to_load": String
          "futureworld": {

            "error": {

              "title": String
              "text": String

            }

          }

          "load_folder_access": String
          "access_failure": String
          "delete_failure": String
          "data_read": String
          "selectWorld": {

            "gamemode": {

              Default: String
              "survival": {

                Default: String
                "line1": String
                "line2": String

              }

              "creative": {

                Default: String
                "line1": String
                "line2": String

              }

              "spectator": {
                
                Default: String
                "line1": String
                "line2": String

              }

              "hardcore": {
                
                Default: String
                "line1": String
                "line2": String

              }

              "adventure": {
                
                Default: String
                "line1": String
                "line2": String

              }

            }

          }
          "moreWorldOptions": String
          "gameRules": String
          "mapFeatures": {

            Default: String
            "info": String

          }

          "mapType": {

            Default: String
            "normal": String

          }

          "allowCommands": {

            Default: String
            "info": String

          }

          "dataPacks": String
          "bonusItems": String
          "import_worldgen_settings": {

            Default: String
            "select_file": String
            "failure": String
            "experimental": {

              "title": String
              "question": String

            }

            "deprecated": {

              "title": String
              "question": String

            }

          }

        }

        "createWorld": {
          
          "customize": {

            "presets": {

              Default: String
              "title": String
              "select": String
              "share": String
              "list": String

            }

            "flat": {

              "title": String
              "tile": String
              "height": String
              "removeLayer": String
              "layer": {

                Default: String
                "top": String
                "bottom": String

              }

            }

            "buffet": {

              "title": String
              "biome": String

            }

            "preset": {

              "classic_flat": String
              "tunnelers_dream": String
              "water_world": String
              "overworld": String
              "snowy_kingdom": String
              "bottomless_pit": String
              "desert": String
              "redstone_ready": String
              "the_void": String

            }

            "custom": {
              
              "page0": String
              "page1": String
              "page2": String
              "page3": String
              "randomize": String
              "prev": String
              "next": String
              "defaults": String
              "confirm1": String
              "confirm2": String
              "confirmTitle": String
              "mainNoiseScaleX": String
              "mainNoiseScaleY": String
              "mainNoiseScaleZ": String
              "depthNoiseScaleX": String
              "depthNoiseScaleZ": String
              "depthNoiseScaleExponent": String
              "baseSize": String
              "coordinateScale": String
              "heightScale": String
              "stretchY": String
              "upperLimitScale": String
              "lowerLimitScale": String
              "biomeDepthWeight": String
              "biomeDepthOffset": String
              "biomeScaleWeight": String
              "biomeScaleOffset": String
              "seaLevel": String
              "useCaves": String
              "useStrongholds": String
              "useVillages": String
              "useMineShafts": String
              "useTemples": String
              "useOceanRuins": String
              "useMonuments": String
              "useMansions": String
              "useRavines": String
              "useDungeons": String
              "dungeonChance": String
              "useWaterLakes": String
              "waterLakeChance": String
              "useLavaLakes": String
              "lavaLakeChance": String
              "useLavaOceans": String
              "fixedBiome": String
              "biomeSize": String
              "riverSize": String
              "size": String
              "count": String
              "minHeight": String
              "maxHeight": String
              "center": String
              "spread": String
              "presets": {

                Default: String
                "title": String

              }
              
              "preset": {

                "waterWorld": String
                "isleLand": String
                "caveDelight": String
                "mountains": String
                "drought": String
                "caveChaos": String
                "goodLuck": String

              }

            }
            
            "preparing": String

          }

        }
        
        "chat": {

          "editBox": String
          "cannotSend": String
          "disabled": {

            "options": String
            "launcher": String
            "profile": String

          }

          "type": {

            "text": {

              Default: String
              "narrate": String

            }

            "emote": String
            "announcement": String
            "admin": String
            "advancement": {

              "task": String
              "challenge": String
              "goal": String

            }

            "team": {

              "text": String
              "sent": String
              "hover": String

            }

          }

          "link": {

            "confirm": String
            "warning": String
            "confirmTrusted": String
            "open": String

          }

          "copy": {

            Default: String
            "click": String

          }

          "coordinates": {

            Default: String
            "tooltip": String

          }

          "queue": String
          "square_brackets": String

        }

        "datapackFaiture": {

          "title": String
          "safeMode": String

        }

        "key": {
  
          "sprint": String
          "forward": String
          "left": String
          "back": String
          "right": String
          "jump": String
          "inventory": String
          "drop": String
          "swapOffhand": String
          "chat": String
          "sneak": String
          "playerlist": String
          "attack": String
          "use": String
          "pickItem": String
          "command": String
          "socialInteractions": String
          "screenshot": String
          "togglePespective": String
          "smoothCamera": String
          "fullscreen": String
          "spectatorOutlines": String
          "hotbar": {

            "1": String
            "2": String
            "3": String
            "4": String
            "5": String
            "6": String
            "7": String
            "8": String
            "9": String

          }
         
          "saveToolActivator": String
          "loadToolbarActivator": String
          "advancements": String
          "categories": {

            "movement": String
            "misc": String
            "multiplayer": String
            "gameplay": String
            "ui": String
            "inventory": String
            "creative": String

          }

          "mouse": {

            Default: String
            "left": String
            "right": String
            "middle": String 

          }

          "keyboard": {
            
            "unknown": String
            "apostrophe": String
            "backslash": String
            "backspace": String
            "comma": String
            "delete": String
            "end": String
            "enter": String
            "equal": String
            "escape": String
            "f1": String
            "f2": String
            "f3": String
            "f4": String
            "f5": String
            "f6": String
            "f7": String
            "f8": String
            "f9": String
            "f10": String
            "f11": String
            "f12": String
            "f13": String
            "f14": String
            "f15": String
            "f16": String
            "f17": String
            "f18": String
            "f19": String
            "f20": String
            "f21": String
            "f22": String
            "f23": String
            "f24": String
            "f25": String
            "grave.accent": String
            "home": String
            "insert": String
            "keypad": {

              "0": String
              "1": String
              "2": String
              "3": String
              "4": String
              "5": String
              "6": String
              "7": String
              "8": String
              "9": String
              "add": String
              "decimal": String
              "enter": String
              "equal": String
              "multiply": String
              "divide": String
              "subtract": String

            }

            "left": { 

              Default: String
              "bracket": String
              "control": String
              "alt": String
              "shift": String
              "win": String

            }

            "right": {

              Default: String
              "bracket": String
              "control": String
              "alt": String
              "shift": String
              "win": String

            }

            "minus": String
            "num.lock": String
            "caps.lock": String
            "scroll.lock": String
            "page": {

              "down": String
              "up": String

            }

            "pause": String
            "period": String
            "semicolon": String
            "slash": String
            "space": String
            "tab": String
            "up": String
            "down": String
            "menu": String
            "print": {

              "screen": String

            }

            "world": {

              "1": String
              "2": String

            }
          
          }

        }
        
        "editGamerule": {

          "title": String,
          "default": String

        }

        "gameMode": {

          "survival": String
          "creative": String
          "adventure": String
          "spectator": String
          "hardcore": String
          "changed": String

        }

        "spectatorMenu": {

          "previous_page": String
          "next_page": String
          "close": String
          "teleport": {

            Default: String
            "prompt": String
          }

          "team_teleport": {

            Default: String
            "prompt": String

          }

          "root": {

            "prompt": String

          }

        }

        // "generator.default": "Default",
        // "generator.flat": "Superflat",
        // "generator.large_biomes": "Large Biomes",
        // "generator.amplified": "AMPLIFIED",
        // "generator.customized": "Old Customized",
        // "generator.custom": "Custom",
        // "generator.debug_all_block_states": "Debug Mode",
        // "generator.amplified.info": "Notice: Just for fun! Requires a beefy computer.",
        // "generator.single_biome_surface": "Single Biome",
        // "generator.single_biome_caves": "Caves",
        // "generator.single_biome_floating_islands": "Floating Islands",
        "generator": {

          "default": String
          "flat": String
          "large_biomes": String
          "amplified": { Default: String, "info": String }
          "customized": String
          "custom": String
          "debug_all_block_states": String
          "single_biome_surface": String
          "single_biome_caves": String
          "single_biome_floating_islands": String

        }

        // "selectServer.title": "Select Server",
        // "selectServer.select": "Join Server",
        // "selectServer.direct": "Direct Connection",
        // "selectServer.edit": "Edit",
        // "selectServer.delete": "Delete",
        // "selectServer.add": "Add Server",
        // "selectServer.defaultName": "Minecraft Server",
        // "selectServer.deleteQuestion": "Are you sure you want to remove this server?",
        // "selectServer.deleteWarning": "'%s' will be lost forever! (A long time!)",
        // "selectServer.deleteButton": "Delete",
        // "selectServer.refresh": "Refresh",
        // "selectServer.hiddenAddress": "(Hidden)",
        "selectServer": { }

        // "addServer.title": "Edit Server Info",
        // "addServer.enterName": "Server Name",
        // "addServer.enterIp": "Server Address",
        // "addServer.add": "Done",
        // "addServer.hideAddress": "Hide Address",
        // "addServer.resourcePack": "Server Resource Packs",
        // "addServer.resourcePack.enabled": "Enabled",
        // "addServer.resourcePack.disabled": "Disabled",
        // "addServer.resourcePack.prompt": "Prompt",
        "addServer": { }

        // "lanServer.title": "LAN World",
        // "lanServer.scanning": "Scanning for games on your local network",
        // "lanServer.start": "Start LAN World",
        // "lanServer.otherPlayers": "Settings for Other Players",
        "lanServer": { }

        // "multiplayerWarning.header": "Caution: Third-Party Online Play",
        // "multiplayerWarning.message": "Caution: Online play is offered by third-party servers that are not owned, operated, or supervised by Mojang Studios or Microsoft. During online play, you may be exposed to unmoderated chat messages or other types of user-generated content that may not be suitable for everyone.",
        // "multiplayerWarning.check": "Do not show this screen again",
        "multiplayerWarning": { }

        // "multiplayer.title": "Play Multiplayer",
        // "multiplayer.texturePrompt.line1": "This server recommends the use of a custom resource pack.",
        // "multiplayer.texturePrompt.line2": "Would you like to download and install it automagically?",
        // "multiplayer.requiredTexturePrompt.line1": "This server requires the use of a custom resource pack.",
        // "multiplayer.requiredTexturePrompt.line2": "Rejecting this custom resource pack will disconnect you from this server.",
        // "multiplayer.requiredTexturePrompt.disconnect": "Server requires a custom resource pack",
        // "multiplayer.texturePrompt.failure.line1": "Server resource pack couldn't be applied",
        // "multiplayer.texturePrompt.failure.line2": "Any functionality that requires custom resources might not work as expected",
        // "multiplayer.texturePrompt.serverPrompt": "%s\n\nMessage from server:\n%s",
        // "multiplayer.applyingPack": "Applying resource pack",
        // "multiplayer.downloadingTerrain": "Loading terrain...",
        // "multiplayer.downloadingStats": "Retrieving statistics...",
        // "multiplayer.stopSleeping": "Leave Bed",
        // "multiplayer.message_not_delivered": "Can't deliver chat message, check server logs: %s",
        // "multiplayer.player.joined": "%s joined the game",
        // "multiplayer.player.joined.renamed": "%s (formerly known as %s) joined the game",
        // "multiplayer.player.left": "%s left the game",
        // "multiplayer.status.and_more": "... and %s more ...",
        // "multiplayer.status.cancelled": "Cancelled",
        // "multiplayer.status.cannot_connect": "Can't connect to server",
        // "multiplayer.status.cannot_resolve": "Can't resolve hostname",
        // "multiplayer.status.finished": "Finished",
        // "multiplayer.status.incompatible": "Incompatible version!",
        // "multiplayer.status.no_connection": "(no connection)",
        // "multiplayer.status.ping": "%s ms",
        // "multiplayer.status.old": "Old",
        // "multiplayer.status.pinging": "Pinging...",
        // "multiplayer.status.quitting": "Quitting",
        // "multiplayer.status.unknown": "???",
        // "multiplayer.status.unrequested": "Received unrequested status",
        // "multiplayer.status.request_handled": "Status request has been handled",
        // "multiplayer.disconnect.authservers_down": "Authentication servers are down. Please try again later, sorry!",
        // "multiplayer.disconnect.banned": "You are banned from this server",
        // "multiplayer.disconnect.banned.reason": "You are banned from this server.\nReason: %s",
        // "multiplayer.disconnect.banned.expiration": "\nYour ban will be removed on %s",
        // "multiplayer.disconnect.banned_ip.reason": "Your IP address is banned from this server.\nReason: %s",
        // "multiplayer.disconnect.banned_ip.expiration": "\nYour ban will be removed on %s",
        // "multiplayer.disconnect.duplicate_login": "You logged in from another location",
        // "multiplayer.disconnect.flying": "Flying is not enabled on this server",
        // "multiplayer.disconnect.generic": "Disconnected",
        // "multiplayer.disconnect.idling": "You have been idle for too long!",
        // "multiplayer.disconnect.illegal_characters": "Illegal characters in chat",
        // "multiplayer.disconnect.invalid_entity_attacked": "Attempting to attack an invalid entity",
        // "multiplayer.disconnect.invalid_packet": "Server sent an invalid packet",
        // "multiplayer.disconnect.invalid_player_data": "Invalid player data",
        // "multiplayer.disconnect.invalid_player_movement": "Invalid move player packet received",
        // "multiplayer.disconnect.invalid_vehicle_movement": "Invalid move vehicle packet received",
        // "multiplayer.disconnect.ip_banned": "You have been IP banned from this server",
        // "multiplayer.disconnect.kicked": "Kicked by an operator",
        // "multiplayer.disconnect.incompatible": "Incompatible client! Please use %s",
        // "multiplayer.disconnect.outdated_client": "Incompatible client! Please use %s",
        // "multiplayer.disconnect.outdated_server": "Incompatible client! Please use %s",
        // "multiplayer.disconnect.server_shutdown": "Server closed",
        // "multiplayer.disconnect.slow_login": "Took too long to log in",
        // "multiplayer.disconnect.unverified_username": "Failed to verify username!",
        // "multiplayer.disconnect.not_whitelisted": "You are not white-listed on this server!",
        // "multiplayer.disconnect.server_full": "The server is full!",
        // "multiplayer.disconnect.name_taken": "That name is already taken",
        // "multiplayer.disconnect.unexpected_query_response": "Unexpected custom data from client",
        // "multiplayer.disconnect.missing_tags": "Incomplete set of tags received from server.\nPlease contact server operator.",
        // "multiplayer.socialInteractions.not_available": "Social Interactions are only available in Multiplayer worlds",
        "multiplayer": { }

        // "demo.day.1": "This demo will last five game days. Do your best!",
        // "demo.day.2": "Day Two",
        // "demo.day.3": "Day Three",
        // "demo.day.4": "Day Four",
        // "demo.day.5": "This is your last day!",
        // "demo.day.warning": "Your time is almost up!",
        // "demo.day.6": "You have passed your fifth day. Use %s to save a screenshot of your creation.",
        // "demo.reminder": "The demo time has expired. Buy the game to continue or start a new world!",
        // "demo.remainingTime": "Remaining time: %s",
        // "demo.demoExpired": "Demo time's up!",
        // "demo.help.movement": "Use the %1$s, %2$s, %3$s, %4$s keys and the mouse to move around",
        // "demo.help.movementShort": "Move by pressing the %1$s, %2$s, %3$s, %4$s keys",
        // "demo.help.movementMouse": "Look around using the mouse",
        // "demo.help.jump": "Jump by pressing the %1$s key",
        // "demo.help.inventory": "Use the %1$s key to open your inventory",
        // "demo.help.title": "Minecraft Demo Mode",
        // "demo.help.fullWrapped": "This demo will last 5 in-game days (about 1 hour and 40 minutes of real time). Check the advancements for hints! Have fun!",
        // "demo.help.buy": "Purchase Now!",
        // "demo.help.later": "Continue Playing!",
        "demo": { }

        // "connect.connecting": "Connecting to the server...",
        // "connect.aborted": "Aborted",
        // "connect.authorizing": "Logging in...",
        // "connect.negotiating": "Negotiating...",
        // "connect.encrypting": "Encrypting...",
        // "connect.joining": "Joining world...",
        // "connect.failed": "Failed to connect to the server",
        "connect": { }

        // "disconnect.genericReason": "%s",
        // "disconnect.unknownHost": "Unknown host",
        // "disconnect.disconnected": "Disconnected by Server",
        // "disconnect.lost": "Connection Lost",
        // "disconnect.kicked": "Was kicked from the game",
        // "disconnect.timeout": "Timed out",
        // "disconnect.closed": "Connection closed",
        // "disconnect.loginFailed": "Failed to log in",
        // "disconnect.loginFailedInfo": "Failed to log in: %s",
        // "disconnect.loginFailedInfo.serversUnavailable": "The authentication servers are currently not reachable. Please try again.",
        // "disconnect.loginFailedInfo.invalidSession": "Invalid session (Try restarting your game and the launcher)",
        // "disconnect.loginFailedInfo.insufficientPrivileges": "Multiplayer is disabled. Please check your Microsoft account settings.",
        // "disconnect.quitting": "Quitting",
        // "disconnect.endOfStream": "End of stream",
        // "disconnect.overflow": "Buffer overflow",
        // "disconnect.spam": "Kicked for spamming",
        // "disconnect.exceeded_packet_rate": "Kicked for exceeding packet rate limit",
        "disconnect": { }

        // "soundCategory.master": "Master Volume",
        // "soundCategory.music": "Music",
        // "soundCategory.record": "Jukebox/Note Blocks",
        // "soundCategory.weather": "Weather",
        // "soundCategory.hostile": "Hostile Creatures",
        // "soundCategory.neutral": "Friendly Creatures",
        // "soundCategory.player": "Players",
        // "soundCategory.block": "Blocks",
        // "soundCategory.ambient": "Ambient/Environment",
        // "soundCategory.voice": "Voice/Speech",
        "soundCategory": { }

        // "record.nowPlaying": "Now Playing: %s",
        "record": { }

        // "options.off": "OFF",
        // "options.on": "ON",
        // "options.off.composed": "%s: OFF",
        // "options.on.composed": "%s: ON",
        // "options.generic_value": "%s: %s",
        // "options.pixel_value": "%s: %spx",
        // "options.percent_value": "%s: %s%%",
        // "options.percent_add_value": "%s: +%s%%",
        // "options.visible": "Shown",
        // "options.hidden": "Hidden",
        // "options.title": "Options",
        // "options.controls": "Controls...",
        // "options.video": "Video Settings...",
        // "options.language": "Language...",
        // "options.sounds": "Music & Sounds...",
        // "options.sounds.title": "Music & Sound Options",
        // "options.languageWarning": "Language translations may not be 100%% accurate",
        // "options.videoTitle": "Video Settings",
        // "options.mouse_settings": "Mouse Settings...",
        // "options.mouse_settings.title": "Mouse Settings",
        // "options.customizeTitle": "Customize World Settings",
        // "options.invertMouse": "Invert Mouse",
        // "options.fov": "FOV",
        // "options.fov.min": "Normal",
        // "options.fov.max": "Quake Pro",
        // "options.screenEffectScale": "Distortion Effects",
        // "options.screenEffectScale.tooltip": "Strength of nausea and Nether portal screen distortion effects.\nAt lower values, the nausea effect is replaced with a green overlay.",
        // "options.fovEffectScale": "FOV Effects",
        // "options.fovEffectScale.tooltip": "Controls how much the field of view can change with speed effects.",
        // "options.biomeBlendRadius": "Biome Blend",
        // "options.biomeBlendRadius.1": "OFF (Fastest)",
        // "options.biomeBlendRadius.3": "3x3 (Fast)",
        // "options.biomeBlendRadius.5": "5x5 (Normal)",
        // "options.biomeBlendRadius.7": "7x7 (High)",
        // "options.biomeBlendRadius.9": "9x9 (Very High)",
        // "options.biomeBlendRadius.11": "11x11 (Extreme)",
        // "options.biomeBlendRadius.13": "13x13 (Showoff)",
        // "options.biomeBlendRadius.15": "15x15 (Maximum)",
        // "options.gamma": "Brightness",
        // "options.gamma.min": "Moody",
        // "options.gamma.default": "Default",
        // "options.gamma.max": "Bright",
        // "options.sensitivity": "Sensitivity",
        // "options.sensitivity.min": "*yawn*",
        // "options.sensitivity.max": "HYPERSPEED!!!",
        // "options.renderDistance": "Render Distance",
        // "options.simulationDistance": "Simulation Distance",
        // "options.entityDistanceScaling": "Entity Distance",
        // "options.viewBobbing": "View Bobbing",
        // "options.ao": "Smooth Lighting",
        // "options.ao.off": "OFF",
        // "options.ao.min": "Minimum",
        // "options.ao.max": "Maximum",
        // "options.prioritizeChunkUpdates": "Chunk Builder",
        // "options.prioritizeChunkUpdates.none": "Threaded",
        // "options.prioritizeChunkUpdates.byPlayer": "Semi Blocking",
        // "options.prioritizeChunkUpdates.nearby": "Fully Blocking",
        // "options.prioritizeChunkUpdates.none.tooltip": "Nearby chunks are compiled in parallel threads. This may result in brief visual holes when blocks are destroyed.",
        // "options.prioritizeChunkUpdates.byPlayer.tooltip": "Some actions within a chunk will recompile the chunk immediately. This includes block placing & destroying.",
        // "options.prioritizeChunkUpdates.nearby.tooltip": "Nearby chunks are always compiled immediately. This may impact game performance when blocks are placed or destroyed.",
        // "options.chunks": "%s chunks",
        // "options.framerate": "%s fps",
        // "options.framerateLimit": "Max Framerate",
        // "options.framerateLimit.max": "Unlimited",
        // "options.difficulty": "Difficulty",
        // "options.difficulty.online": "Server Difficulty",
        // "options.difficulty.peaceful": "Peaceful",
        // "options.difficulty.easy": "Easy",
        // "options.difficulty.normal": "Normal",
        // "options.difficulty.hard": "Hard",
        // "options.difficulty.hardcore": "Hardcore",
        // "options.graphics": "Graphics",
        // "options.graphics.fabulous.tooltip": "%s graphics uses screen shaders for drawing weather, clouds, and particles behind translucent blocks and water.\nThis may severely impact performance for portable devices and 4K displays.",
        // "options.graphics.fabulous": "Fabulous!",
        // "options.graphics.fancy.tooltip": "Fancy graphics balances performance and quality for the majority of machines.\nWeather, clouds, and particles may not appear behind translucent blocks or water.",
        // "options.graphics.fancy": "Fancy",
        // "options.graphics.fast.tooltip": "Fast graphics reduces the amount of visible rain and snow.\nTransparency effects are disabled for various blocks such as leaves.",
        // "options.graphics.fast": "Fast",
        // "options.graphics.warning.title": "Graphics Device Unsupported",
        // "options.graphics.warning.message": "Your graphics device is detected as unsupported for the %s graphics option.\n\nYou may ignore this and continue, however support will not be provided for your device if you choose to use %s graphics.",
        // "options.graphics.warning.renderer": "Renderer detected: [%s]",
        // "options.graphics.warning.vendor": "Vendor detected: [%s]",
        // "options.graphics.warning.version": "OpenGL Version detected: [%s]",
        // "options.graphics.warning.accept": "Continue without Support",
        // "options.graphics.warning.cancel": "Take me Back",
        // "options.clouds.fancy": "Fancy",
        // "options.clouds.fast": "Fast",
        // "options.guiScale": "GUI Scale",
        // "options.guiScale.auto": "Auto",
        // "options.renderClouds": "Clouds",
        // "options.particles": "Particles",
        // "options.particles.all": "All",
        // "options.particles.decreased": "Decreased",
        // "options.particles.minimal": "Minimal",
        // "options.multiplayer.title": "Multiplayer Settings...",
        // "options.chat.title": "Chat Settings...",
        // "options.chat.visibility": "Chat",
        // "options.chat.visibility.full": "Shown",
        // "options.chat.visibility.system": "Commands Only",
        // "options.chat.visibility.hidden": "Hidden",
        // "options.chat.color": "Colors",
        // "options.chat.opacity": "Chat Text Opacity",
        // "options.chat.line_spacing": "Line Spacing",
        // "options.chat.links": "Web Links",
        // "options.chat.links.prompt": "Prompt on Links",
        // "options.chat.delay_none": "Chat Delay: None",
        // "options.chat.delay": "Chat Delay: %s seconds",
        // "options.chat.scale": "Chat Text Size",
        // "options.chat.width": "Width",
        // "options.chat.height.focused": "Focused Height",
        // "options.chat.height.unfocused": "Unfocused Height",
        // "options.accessibility.title": "Accessibility Settings...",
        // "options.accessibility.text_background": "Text Background",
        // "options.accessibility.text_background.chat": "Chat",
        // "options.accessibility.text_background.everywhere": "Everywhere",
        // "options.accessibility.text_background_opacity": "Text Background Opacity",
        // "options.accessibility.link": "Accessibility Guide",
        // "options.audioDevice": "Device",
        // "options.audioDevice.default": "System Default",
        // "options.key.toggle": "Toggle",
        // "options.key.hold": "Hold",
        // "options.skinCustomisation": "Skin Customization...",
        // "options.skinCustomisation.title": "Skin Customization",
        // "options.modelPart.cape": "Cape",
        // "options.modelPart.hat": "Hat",
        // "options.modelPart.jacket": "Jacket",
        // "options.modelPart.left_sleeve": "Left Sleeve",
        // "options.modelPart.right_sleeve": "Right Sleeve",
        // "options.modelPart.left_pants_leg": "Left Pants Leg",
        // "options.modelPart.right_pants_leg": "Right Pants Leg",
        // "options.resourcepack": "Resource Packs...",
        // "options.fullscreen": "Fullscreen",
        // "options.vsync": "VSync",
        // "options.touchscreen": "Touchscreen Mode",
        // "options.reducedDebugInfo": "Reduced Debug Info",
        // "options.entityShadows": "Entity Shadows",
        // "options.mainHand": "Main Hand",
        // "options.mainHand.left": "Left",
        // "options.mainHand.right": "Right",
        // "options.attackIndicator": "Attack Indicator",
        // "options.attack.crosshair": "Crosshair",
        // "options.attack.hotbar": "Hotbar",
        // "options.showSubtitles": "Show Subtitles",
        // "options.online": "Online...",
        // "options.online.title": "Online Options",
        // "options.allowServerListing": "Allow Server Listings",
        // "options.allowServerListing.tooltip": "Servers may list online players as part of their public status.\nWith this option off your name will not show up in such lists.",
        // "options.realmsNotifications": "Realms Notifications",
        // "options.autoJump": "Auto-Jump",
        // "options.autoSuggestCommands": "Command Suggestions",
        // "options.autosaveIndicator": "Autosave Indicator",
        // "options.discrete_mouse_scroll": "Discrete Scrolling",
        // "options.mouseWheelSensitivity": "Scroll Sensitivity",
        // "options.rawMouseInput": "Raw Input",
        // "options.narrator": "Narrator",
        // "options.narrator.off": "OFF",
        // "options.narrator.all": "Narrates All",
        // "options.narrator.chat": "Narrates Chat",
        // "options.narrator.system": "Narrates System",
        // "options.narrator.notavailable": "Not Available",
        // "options.fullscreen.resolution": "Fullscreen Resolution",
        // "options.fullscreen.unavailable": "Setting unavailable",
        // "options.fullscreen.current": "Current",
        // "options.mipmapLevels": "Mipmap Levels",
        // "options.forceUnicodeFont": "Force Unicode Font",
        // "options.hideMatchedNames": "Hide Matched Names",
        // "options.hideMatchedNames.tooltip": "3rd-party Servers may send chat messages in non-standard formats.\nWith this option on: hidden players will be matched based on chat sender names.",
        // "options.darkMojangStudiosBackgroundColor": "Monochrome Logo",
        // "options.darkMojangStudiosBackgroundColor.tooltip": "Changes the Mojang Studios loading screen background color to black.",
        // "options.hideLightningFlashes": "Hide Lightning Flashes",
        // "options.hideLightningFlashes.tooltip": "Prevents lightning bolts from making the sky flash. The bolts themselves will still be visible.",
        "options": { }

        // "difficulty.lock.title": "Lock World Difficulty",
        // "difficulty.lock.question": "Are you sure you want to lock the difficulty of this world? This will set this world to always be %1$s, and you will never be able to change that again.",
        "difficulty": { }

        // "title.32bit.deprecation": "32-bit system detected: this may prevent you from playing in the future as a 64-bit system will be required!",
        // "title.32bit.deprecation.realms.header": "32-bit system detected",
        // "title.32bit.deprecation.realms": "Minecraft will soon require a 64-bit system, which will prevent you from playing or using Realms on this device. You will need to manually cancel any Realms subscription.",
        // "title.32bit.deprecation.realms.check": "Do not show this screen again",
        // "title.multiplayer.disabled": "Multiplayer is disabled. Please check your Microsoft account settings.",
        // "title.singleplayer": "Singleplayer",
        // "title.multiplayer.realms": "Multiplayer (Realms)",
        // "title.multiplayer.lan": "Multiplayer (LAN)",
        // "title.multiplayer.other": "Multiplayer (3rd-party Server)",
        "title": { }

        // "controls.title": "Controls",
        // "controls.reset": "Reset",
        // "controls.resetAll": "Reset Keys",
        // "controls.keybinds": "Key Binds...",
        // "controls.keybinds.title": "Key Binds",
        "controls": { }

        // "pack.available.title": "Available",
        // "pack.selected.title": "Selected",
        // "pack.incompatible": "Incompatible",
        // "pack.incompatible.old": "(Made for an older version of Minecraft)",
        // "pack.incompatible.new": "(Made for a newer version of Minecraft)",
        // "pack.incompatible.confirm.title": "Are you sure you want to load this pack?",
        // "pack.incompatible.confirm.old": "This pack was made for an older version of Minecraft and may no longer work correctly.",
        // "pack.incompatible.confirm.new": "This pack was made for a newer version of Minecraft and may not work correctly.",
        // "pack.dropInfo": "Drag and drop files into this window to add packs",
        // "pack.dropConfirm": "Do you want to add the following packs to Minecraft?",
        // "pack.copyFailure": "Failed to copy packs",
        // "pack.nameAndSource": "%s (%s)",
        // "pack.openFolder": "Open Pack Folder",
        // "pack.folderInfo": "(Place pack files here)",
        // "pack.source.builtin": "built-in",
        // "pack.source.world": "world",
        // "pack.source.local": "local",
        // "pack.source.server": "server",
        "pack": { }

        // "resourcePack.title": "Select Resource Packs",
        // "resourcePack.server.name": "World Specific Resources",
        // "resourcePack.broken_assets": "BROKEN ASSETS DETECTED",
        // "resourcePack.vanilla.description": "The default resources for Minecraft",
        // "resourcePack.load_fail": "Resource reload failed",
        // "resourcepack.downloading": "Downloading Resource Pack",
        // "resourcepack.requesting": "Making Request...",
        // "resourcepack.progress": "Downloading file (%s MB)...",
        "resourcePack": { }

        // "dataPack.title": "Select Data Packs",
        // "dataPack.validation.working": "Validating selected data packs...",
        // "dataPack.validation.failed": "Data pack validation failed!",
        // "dataPack.validation.back": "Go Back",
        // "dataPack.validation.reset": "Reset to Default",
        // "dataPack.vanilla.description": "The default data for Minecraft",
        "dataPack": { }

        // "sign.edit": "Edit Sign Message",
        "sign": { }
        
        // "book.pageIndicator": "Page %1$s of %2$s",
        // "book.byAuthor": "by %1$s",
        // "book.signButton": "Sign",
        // "book.editTitle": "Enter Book Title:",
        // "book.finalizeButton": "Sign and Close",
        // "book.finalizeWarning": "Note! When you sign the book, it will no longer be editable.",
        // "book.generation.0": "Original",
        // "book.generation.1": "Copy of original",
        // "book.generation.2": "Copy of a copy",
        // "book.generation.3": "Tattered",
        // "book.invalid.tag": "* Invalid book tag *",
        "book": { }

        // "merchant.deprecated": "Villagers restock up to two times per day.",
        // "merchant.current_level": "Trader's current level",
        // "merchant.next_level": "Trader's next level",
        // "merchant.level.1": "Novice",
        // "merchant.level.2": "Apprentice",
        // "merchant.level.3": "Journeyman",
        // "merchant.level.4": "Expert",
        // "merchant.level.5": "Master",
        // "merchant.trades": "Trades",
        "mechant": { }

        // "block.minecraft.air": "Air",
        // "block.minecraft.barrier": "Barrier",
        // "block.minecraft.light": "Light",
        // "block.minecraft.stone": "Stone",
        // "block.minecraft.granite": "Granite",
        // "block.minecraft.polished_granite": "Polished Granite",
        // "block.minecraft.diorite": "Diorite",
        // "block.minecraft.polished_diorite": "Polished Diorite",
        // "block.minecraft.andesite": "Andesite",
        // "block.minecraft.polished_andesite": "Polished Andesite",
        // "block.minecraft.hay_block": "Hay Bale",
        // "block.minecraft.grass_block": "Grass Block",
        // "block.minecraft.dirt": "Dirt",
        // "block.minecraft.coarse_dirt": "Coarse Dirt",
        // "block.minecraft.podzol": "Podzol",
        // "block.minecraft.cobblestone": "Cobblestone",
        // "block.minecraft.oak_planks": "Oak Planks",
        // "block.minecraft.spruce_planks": "Spruce Planks",
        // "block.minecraft.birch_planks": "Birch Planks",
        // "block.minecraft.jungle_planks": "Jungle Planks",
        // "block.minecraft.acacia_planks": "Acacia Planks",
        // "block.minecraft.dark_oak_planks": "Dark Oak Planks",
        // "block.minecraft.oak_sapling": "Oak Sapling",
        // "block.minecraft.spruce_sapling": "Spruce Sapling",
        // "block.minecraft.birch_sapling": "Birch Sapling",
        // "block.minecraft.jungle_sapling": "Jungle Sapling",
        // "block.minecraft.acacia_sapling": "Acacia Sapling",
        // "block.minecraft.dark_oak_sapling": "Dark Oak Sapling",
        // "block.minecraft.oak_door": "Oak Door",
        // "block.minecraft.spruce_door": "Spruce Door",
        // "block.minecraft.birch_door": "Birch Door",
        // "block.minecraft.jungle_door": "Jungle Door",
        // "block.minecraft.acacia_door": "Acacia Door",
        // "block.minecraft.dark_oak_door": "Dark Oak Door",
        // "block.minecraft.bedrock": "Bedrock",
        // "block.minecraft.water": "Water",
        // "block.minecraft.lava": "Lava",
        // "block.minecraft.sand": "Sand",
        // "block.minecraft.red_sand": "Red Sand",
        // "block.minecraft.sandstone": "Sandstone",
        // "block.minecraft.chiseled_sandstone": "Chiseled Sandstone",
        // "block.minecraft.cut_sandstone": "Cut Sandstone",
        // "block.minecraft.red_sandstone": "Red Sandstone",
        // "block.minecraft.chiseled_red_sandstone": "Chiseled Red Sandstone",
        // "block.minecraft.cut_red_sandstone": "Cut Red Sandstone",
        // "block.minecraft.gravel": "Gravel",
        // "block.minecraft.gold_ore": "Gold Ore",
        // "block.minecraft.deepslate_gold_ore": "Deepslate Gold Ore",
        // "block.minecraft.nether_gold_ore": "Nether Gold Ore",
        // "block.minecraft.iron_ore": "Iron Ore",
        // "block.minecraft.deepslate_iron_ore": "Deepslate Iron Ore",
        // "block.minecraft.coal_ore": "Coal Ore",
        // "block.minecraft.deepslate_coal_ore": "Deepslate Coal Ore",
        // "block.minecraft.oak_wood": "Oak Wood",
        // "block.minecraft.spruce_wood": "Spruce Wood",
        // "block.minecraft.birch_wood": "Birch Wood",
        // "block.minecraft.jungle_wood": "Jungle Wood",
        // "block.minecraft.acacia_wood": "Acacia Wood",
        // "block.minecraft.dark_oak_wood": "Dark Oak Wood",
        // "block.minecraft.oak_log": "Oak Log",
        // "block.minecraft.spruce_log": "Spruce Log",
        // "block.minecraft.birch_log": "Birch Log",
        // "block.minecraft.jungle_log": "Jungle Log",
        // "block.minecraft.acacia_log": "Acacia Log",
        // "block.minecraft.dark_oak_log": "Dark Oak Log",
        // "block.minecraft.stripped_oak_log": "Stripped Oak Log",
        // "block.minecraft.stripped_spruce_log": "Stripped Spruce Log",
        // "block.minecraft.stripped_birch_log": "Stripped Birch Log",
        // "block.minecraft.stripped_jungle_log": "Stripped Jungle Log",
        // "block.minecraft.stripped_acacia_log": "Stripped Acacia Log",
        // "block.minecraft.stripped_dark_oak_log": "Stripped Dark Oak Log",
        // "block.minecraft.stripped_oak_wood": "Stripped Oak Wood",
        // "block.minecraft.stripped_spruce_wood": "Stripped Spruce Wood",
        // "block.minecraft.stripped_birch_wood": "Stripped Birch Wood",
        // "block.minecraft.stripped_jungle_wood": "Stripped Jungle Wood",
        // "block.minecraft.stripped_acacia_wood": "Stripped Acacia Wood",
        // "block.minecraft.stripped_dark_oak_wood": "Stripped Dark Oak Wood",
        // "block.minecraft.oak_leaves": "Oak Leaves",
        // "block.minecraft.spruce_leaves": "Spruce Leaves",
        // "block.minecraft.birch_leaves": "Birch Leaves",
        // "block.minecraft.jungle_leaves": "Jungle Leaves",
        // "block.minecraft.acacia_leaves": "Acacia Leaves",
        // "block.minecraft.dark_oak_leaves": "Dark Oak Leaves",
        // "block.minecraft.dead_bush": "Dead Bush",
        // "block.minecraft.grass": "Grass",
        // "block.minecraft.fern": "Fern",
        // "block.minecraft.sponge": "Sponge",
        // "block.minecraft.wet_sponge": "Wet Sponge",
        // "block.minecraft.glass": "Glass",
        // "block.minecraft.kelp_plant": "Kelp Plant",
        // "block.minecraft.kelp": "Kelp",
        // "block.minecraft.dried_kelp_block": "Dried Kelp Block",
        // "block.minecraft.white_stained_glass": "White Stained Glass",
        // "block.minecraft.orange_stained_glass": "Orange Stained Glass",
        // "block.minecraft.magenta_stained_glass": "Magenta Stained Glass",
        // "block.minecraft.light_blue_stained_glass": "Light Blue Stained Glass",
        // "block.minecraft.yellow_stained_glass": "Yellow Stained Glass",
        // "block.minecraft.lime_stained_glass": "Lime Stained Glass",
        // "block.minecraft.pink_stained_glass": "Pink Stained Glass",
        // "block.minecraft.gray_stained_glass": "Gray Stained Glass",
        // "block.minecraft.light_gray_stained_glass": "Light Gray Stained Glass",
        // "block.minecraft.cyan_stained_glass": "Cyan Stained Glass",
        // "block.minecraft.purple_stained_glass": "Purple Stained Glass",
        // "block.minecraft.blue_stained_glass": "Blue Stained Glass",
        // "block.minecraft.brown_stained_glass": "Brown Stained Glass",
        // "block.minecraft.green_stained_glass": "Green Stained Glass",
        // "block.minecraft.red_stained_glass": "Red Stained Glass",
        // "block.minecraft.black_stained_glass": "Black Stained Glass",
        // "block.minecraft.white_stained_glass_pane": "White Stained Glass Pane",
        // "block.minecraft.orange_stained_glass_pane": "Orange Stained Glass Pane",
        // "block.minecraft.magenta_stained_glass_pane": "Magenta Stained Glass Pane",
        // "block.minecraft.light_blue_stained_glass_pane": "Light Blue Stained Glass Pane",
        // "block.minecraft.yellow_stained_glass_pane": "Yellow Stained Glass Pane",
        // "block.minecraft.lime_stained_glass_pane": "Lime Stained Glass Pane",
        // "block.minecraft.pink_stained_glass_pane": "Pink Stained Glass Pane",
        // "block.minecraft.gray_stained_glass_pane": "Gray Stained Glass Pane",
        // "block.minecraft.light_gray_stained_glass_pane": "Light Gray Stained Glass Pane",
        // "block.minecraft.cyan_stained_glass_pane": "Cyan Stained Glass Pane",
        // "block.minecraft.purple_stained_glass_pane": "Purple Stained Glass Pane",
        // "block.minecraft.blue_stained_glass_pane": "Blue Stained Glass Pane",
        // "block.minecraft.brown_stained_glass_pane": "Brown Stained Glass Pane",
        // "block.minecraft.green_stained_glass_pane": "Green Stained Glass Pane",
        // "block.minecraft.red_stained_glass_pane": "Red Stained Glass Pane",
        // "block.minecraft.black_stained_glass_pane": "Black Stained Glass Pane",
        // "block.minecraft.glass_pane": "Glass Pane",
        // "block.minecraft.dandelion": "Dandelion",
        // "block.minecraft.poppy": "Poppy",
        // "block.minecraft.blue_orchid": "Blue Orchid",
        // "block.minecraft.allium": "Allium",
        // "block.minecraft.azure_bluet": "Azure Bluet",
        // "block.minecraft.red_tulip": "Red Tulip",
        // "block.minecraft.orange_tulip": "Orange Tulip",
        // "block.minecraft.white_tulip": "White Tulip",
        // "block.minecraft.pink_tulip": "Pink Tulip",
        // "block.minecraft.oxeye_daisy": "Oxeye Daisy",
        // "block.minecraft.cornflower": "Cornflower",
        // "block.minecraft.lily_of_the_valley": "Lily of the Valley",
        // "block.minecraft.wither_rose": "Wither Rose",
        // "block.minecraft.sunflower": "Sunflower",
        // "block.minecraft.lilac": "Lilac",
        // "block.minecraft.tall_grass": "Tall Grass",
        // "block.minecraft.tall_seagrass": "Tall Seagrass",
        // "block.minecraft.large_fern": "Large Fern",
        // "block.minecraft.rose_bush": "Rose Bush",
        // "block.minecraft.peony": "Peony",
        // "block.minecraft.seagrass": "Seagrass",
        // "block.minecraft.sea_pickle": "Sea Pickle",
        // "block.minecraft.brown_mushroom": "Brown Mushroom",
        // "block.minecraft.red_mushroom_block": "Red Mushroom Block",
        // "block.minecraft.brown_mushroom_block": "Brown Mushroom Block",
        // "block.minecraft.mushroom_stem": "Mushroom Stem",
        // "block.minecraft.gold_block": "Block of Gold",
        // "block.minecraft.iron_block": "Block of Iron",
        // "block.minecraft.smooth_stone": "Smooth Stone",
        // "block.minecraft.smooth_sandstone": "Smooth Sandstone",
        // "block.minecraft.smooth_red_sandstone": "Smooth Red Sandstone",
        // "block.minecraft.smooth_quartz": "Smooth Quartz Block",
        // "block.minecraft.stone_slab": "Stone Slab",
        // "block.minecraft.smooth_stone_slab": "Smooth Stone Slab",
        // "block.minecraft.sandstone_slab": "Sandstone Slab",
        // "block.minecraft.red_sandstone_slab": "Red Sandstone Slab",
        // "block.minecraft.cut_sandstone_slab": "Cut Sandstone Slab",
        // "block.minecraft.cut_red_sandstone_slab": "Cut Red Sandstone Slab",
        // "block.minecraft.petrified_oak_slab": "Petrified Oak Slab",
        // "block.minecraft.cobblestone_slab": "Cobblestone Slab",
        // "block.minecraft.brick_slab": "Brick Slab",
        // "block.minecraft.stone_brick_slab": "Stone Brick Slab",
        // "block.minecraft.nether_brick_slab": "Nether Brick Slab",
        // "block.minecraft.quartz_slab": "Quartz Slab",
        // "block.minecraft.oak_slab": "Oak Slab",
        // "block.minecraft.spruce_slab": "Spruce Slab",
        // "block.minecraft.birch_slab": "Birch Slab",
        // "block.minecraft.jungle_slab": "Jungle Slab",
        // "block.minecraft.acacia_slab": "Acacia Slab",
        // "block.minecraft.dark_oak_slab": "Dark Oak Slab",
        // "block.minecraft.dark_prismarine_slab": "Dark Prismarine Slab",
        // "block.minecraft.prismarine_slab": "Prismarine Slab",
        // "block.minecraft.prismarine_brick_slab": "Prismarine Brick Slab",
        // "block.minecraft.bricks": "Bricks",
        // "block.minecraft.tnt": "TNT",
        // "block.minecraft.bookshelf": "Bookshelf",
        // "block.minecraft.mossy_cobblestone": "Mossy Cobblestone",
        // "block.minecraft.obsidian": "Obsidian",
        // "block.minecraft.torch": "Torch",
        // "block.minecraft.wall_torch": "Wall Torch",
        // "block.minecraft.soul_torch": "Soul Torch",
        // "block.minecraft.soul_wall_torch": "Soul Wall Torch",
        // "block.minecraft.fire": "Fire",
        // "block.minecraft.spawner": "Spawner",
        // "block.minecraft.respawn_anchor": "Respawn Anchor",
        // "block.minecraft.oak_stairs": "Oak Stairs",
        // "block.minecraft.spruce_stairs": "Spruce Stairs",
        // "block.minecraft.birch_stairs": "Birch Stairs",
        // "block.minecraft.jungle_stairs": "Jungle Stairs",
        // "block.minecraft.acacia_stairs": "Acacia Stairs",
        // "block.minecraft.dark_oak_stairs": "Dark Oak Stairs",
        // "block.minecraft.dark_prismarine_stairs": "Dark Prismarine Stairs",
        // "block.minecraft.prismarine_stairs": "Prismarine Stairs",
        // "block.minecraft.prismarine_brick_stairs": "Prismarine Brick Stairs",
        // "block.minecraft.chest": "Chest",
        // "block.minecraft.trapped_chest": "Trapped Chest",
        // "block.minecraft.redstone_wire": "Redstone Wire",
        // "block.minecraft.diamond_ore": "Diamond Ore",
        // "block.minecraft.deepslate_diamond_ore": "Deepslate Diamond Ore",
        // "block.minecraft.coal_block": "Block of Coal",
        // "block.minecraft.diamond_block": "Block of Diamond",
        // "block.minecraft.crafting_table": "Crafting Table",
        // "block.minecraft.wheat": "Wheat Crops",
        // "block.minecraft.farmland": "Farmland",
        // "block.minecraft.furnace": "Furnace",
        // "block.minecraft.oak_sign": "Oak Sign",
        // "block.minecraft.spruce_sign": "Spruce Sign",
        // "block.minecraft.birch_sign": "Birch Sign",
        // "block.minecraft.acacia_sign": "Acacia Sign",
        // "block.minecraft.jungle_sign": "Jungle Sign",
        // "block.minecraft.dark_oak_sign": "Dark Oak Sign",
        // "block.minecraft.oak_wall_sign": "Oak Wall Sign",
        // "block.minecraft.spruce_wall_sign": "Spruce Wall Sign",
        // "block.minecraft.birch_wall_sign": "Birch Wall Sign",
        // "block.minecraft.acacia_wall_sign": "Acacia Wall Sign",
        // "block.minecraft.jungle_wall_sign": "Jungle Wall Sign",
        // "block.minecraft.dark_oak_wall_sign": "Dark Oak Wall Sign",
        // "block.minecraft.ladder": "Ladder",
        // "block.minecraft.scaffolding": "Scaffolding",
        // "block.minecraft.rail": "Rail",
        // "block.minecraft.powered_rail": "Powered Rail",
        // "block.minecraft.activator_rail": "Activator Rail",
        // "block.minecraft.detector_rail": "Detector Rail",
        // "block.minecraft.cobblestone_stairs": "Cobblestone Stairs",
        // "block.minecraft.sandstone_stairs": "Sandstone Stairs",
        // "block.minecraft.red_sandstone_stairs": "Red Sandstone Stairs",
        // "block.minecraft.lever": "Lever",
        // "block.minecraft.stone_pressure_plate": "Stone Pressure Plate",
        // "block.minecraft.oak_pressure_plate": "Oak Pressure Plate",
        // "block.minecraft.spruce_pressure_plate": "Spruce Pressure Plate",
        // "block.minecraft.birch_pressure_plate": "Birch Pressure Plate",
        // "block.minecraft.jungle_pressure_plate": "Jungle Pressure Plate",
        // "block.minecraft.acacia_pressure_plate": "Acacia Pressure Plate",
        // "block.minecraft.dark_oak_pressure_plate": "Dark Oak Pressure Plate",
        // "block.minecraft.light_weighted_pressure_plate": "Light Weighted Pressure Plate",
        // "block.minecraft.heavy_weighted_pressure_plate": "Heavy Weighted Pressure Plate",
        // "block.minecraft.iron_door": "Iron Door",
        // "block.minecraft.redstone_ore": "Redstone Ore",
        // "block.minecraft.deepslate_redstone_ore": "Deepslate Redstone Ore",
        // "block.minecraft.redstone_torch": "Redstone Torch",
        // "block.minecraft.redstone_wall_torch": "Redstone Wall Torch",
        // "block.minecraft.stone_button": "Stone Button",
        // "block.minecraft.oak_button": "Oak Button",
        // "block.minecraft.spruce_button": "Spruce Button",
        // "block.minecraft.birch_button": "Birch Button",
        // "block.minecraft.jungle_button": "Jungle Button",
        // "block.minecraft.acacia_button": "Acacia Button",
        // "block.minecraft.dark_oak_button": "Dark Oak Button",
        // "block.minecraft.snow": "Snow",
        // "block.minecraft.white_carpet": "White Carpet",
        // "block.minecraft.orange_carpet": "Orange Carpet",
        // "block.minecraft.magenta_carpet": "Magenta Carpet",
        // "block.minecraft.light_blue_carpet": "Light Blue Carpet",
        // "block.minecraft.yellow_carpet": "Yellow Carpet",
        // "block.minecraft.lime_carpet": "Lime Carpet",
        // "block.minecraft.pink_carpet": "Pink Carpet",
        // "block.minecraft.gray_carpet": "Gray Carpet",
        // "block.minecraft.light_gray_carpet": "Light Gray Carpet",
        // "block.minecraft.cyan_carpet": "Cyan Carpet",
        // "block.minecraft.purple_carpet": "Purple Carpet",
        // "block.minecraft.blue_carpet": "Blue Carpet",
        // "block.minecraft.brown_carpet": "Brown Carpet",
        // "block.minecraft.green_carpet": "Green Carpet",
        // "block.minecraft.red_carpet": "Red Carpet",
        // "block.minecraft.black_carpet": "Black Carpet",
        // "block.minecraft.ice": "Ice",
        // "block.minecraft.frosted_ice": "Frosted Ice",
        // "block.minecraft.packed_ice": "Packed Ice",
        // "block.minecraft.blue_ice": "Blue Ice",
        // "block.minecraft.cactus": "Cactus",
        // "block.minecraft.clay": "Clay",
        // "block.minecraft.white_terracotta": "White Terracotta",
        // "block.minecraft.orange_terracotta": "Orange Terracotta",
        // "block.minecraft.magenta_terracotta": "Magenta Terracotta",
        // "block.minecraft.light_blue_terracotta": "Light Blue Terracotta",
        // "block.minecraft.yellow_terracotta": "Yellow Terracotta",
        // "block.minecraft.lime_terracotta": "Lime Terracotta",
        // "block.minecraft.pink_terracotta": "Pink Terracotta",
        // "block.minecraft.gray_terracotta": "Gray Terracotta",
        // "block.minecraft.light_gray_terracotta": "Light Gray Terracotta",
        // "block.minecraft.cyan_terracotta": "Cyan Terracotta",
        // "block.minecraft.purple_terracotta": "Purple Terracotta",
        // "block.minecraft.blue_terracotta": "Blue Terracotta",
        // "block.minecraft.brown_terracotta": "Brown Terracotta",
        // "block.minecraft.green_terracotta": "Green Terracotta",
        // "block.minecraft.red_terracotta": "Red Terracotta",
        // "block.minecraft.black_terracotta": "Black Terracotta",
        // "block.minecraft.terracotta": "Terracotta",
        // "block.minecraft.sugar_cane": "Sugar Cane",
        // "block.minecraft.jukebox": "Jukebox",
        // "block.minecraft.oak_fence": "Oak Fence",
        // "block.minecraft.spruce_fence": "Spruce Fence",
        // "block.minecraft.birch_fence": "Birch Fence",
        // "block.minecraft.jungle_fence": "Jungle Fence",
        // "block.minecraft.dark_oak_fence": "Dark Oak Fence",
        // "block.minecraft.acacia_fence": "Acacia Fence",
        // "block.minecraft.oak_fence_gate": "Oak Fence Gate",
        // "block.minecraft.spruce_fence_gate": "Spruce Fence Gate",
        // "block.minecraft.birch_fence_gate": "Birch Fence Gate",
        // "block.minecraft.jungle_fence_gate": "Jungle Fence Gate",
        // "block.minecraft.dark_oak_fence_gate": "Dark Oak Fence Gate",
        // "block.minecraft.acacia_fence_gate": "Acacia Fence Gate",
        // "block.minecraft.pumpkin_stem": "Pumpkin Stem",
        // "block.minecraft.attached_pumpkin_stem": "Attached Pumpkin Stem",
        // "block.minecraft.pumpkin": "Pumpkin",
        // "block.minecraft.carved_pumpkin": "Carved Pumpkin",
        // "block.minecraft.jack_o_lantern": "Jack o'Lantern",
        // "block.minecraft.netherrack": "Netherrack",
        // "block.minecraft.soul_sand": "Soul Sand",
        // "block.minecraft.glowstone": "Glowstone",
        // "block.minecraft.nether_portal": "Nether Portal",
        // "block.minecraft.white_wool": "White Wool",
        // "block.minecraft.orange_wool": "Orange Wool",
        // "block.minecraft.magenta_wool": "Magenta Wool",
        // "block.minecraft.light_blue_wool": "Light Blue Wool",
        // "block.minecraft.yellow_wool": "Yellow Wool",
        // "block.minecraft.lime_wool": "Lime Wool",
        // "block.minecraft.pink_wool": "Pink Wool",
        // "block.minecraft.gray_wool": "Gray Wool",
        // "block.minecraft.light_gray_wool": "Light Gray Wool",
        // "block.minecraft.cyan_wool": "Cyan Wool",
        // "block.minecraft.purple_wool": "Purple Wool",
        // "block.minecraft.blue_wool": "Blue Wool",
        // "block.minecraft.brown_wool": "Brown Wool",
        // "block.minecraft.green_wool": "Green Wool",
        // "block.minecraft.red_wool": "Red Wool",
        // "block.minecraft.black_wool": "Black Wool",
        // "block.minecraft.lapis_ore": "Lapis Lazuli Ore",
        // "block.minecraft.deepslate_lapis_ore": "Deepslate Lapis Lazuli Ore",
        // "block.minecraft.lapis_block": "Block of Lapis Lazuli",
        // "block.minecraft.dispenser": "Dispenser",
        // "block.minecraft.dropper": "Dropper",
        // "block.minecraft.note_block": "Note Block",
        // "block.minecraft.cake": "Cake",
        // "block.minecraft.bed.occupied": "This bed is occupied",
        // "block.minecraft.bed.obstructed": "This bed is obstructed",
        // "block.minecraft.bed.no_sleep": "You can sleep only at night or during thunderstorms",
        // "block.minecraft.bed.too_far_away": "You may not rest now; the bed is too far away",
        // "block.minecraft.bed.not_safe": "You may not rest now; there are monsters nearby",
        // "block.minecraft.spawn.not_valid": "You have no home bed or charged respawn anchor, or it was obstructed",
        // "block.minecraft.set_spawn": "Respawn point set",
        // "block.minecraft.oak_trapdoor": "Oak Trapdoor",
        // "block.minecraft.spruce_trapdoor": "Spruce Trapdoor",
        // "block.minecraft.birch_trapdoor": "Birch Trapdoor",
        // "block.minecraft.jungle_trapdoor": "Jungle Trapdoor",
        // "block.minecraft.acacia_trapdoor": "Acacia Trapdoor",
        // "block.minecraft.dark_oak_trapdoor": "Dark Oak Trapdoor",
        // "block.minecraft.iron_trapdoor": "Iron Trapdoor",
        // "block.minecraft.cobweb": "Cobweb",
        // "block.minecraft.stone_bricks": "Stone Bricks",
        // "block.minecraft.mossy_stone_bricks": "Mossy Stone Bricks",
        // "block.minecraft.cracked_stone_bricks": "Cracked Stone Bricks",
        // "block.minecraft.chiseled_stone_bricks": "Chiseled Stone Bricks",
        // "block.minecraft.infested_stone": "Infested Stone",
        // "block.minecraft.infested_cobblestone": "Infested Cobblestone",
        // "block.minecraft.infested_stone_bricks": "Infested Stone Bricks",
        // "block.minecraft.infested_mossy_stone_bricks": "Infested Mossy Stone Bricks",
        // "block.minecraft.infested_cracked_stone_bricks": "Infested Cracked Stone Bricks",
        // "block.minecraft.infested_chiseled_stone_bricks": "Infested Chiseled Stone Bricks",
        // "block.minecraft.piston": "Piston",
        // "block.minecraft.sticky_piston": "Sticky Piston",
        // "block.minecraft.iron_bars": "Iron Bars",
        // "block.minecraft.melon": "Melon",
        // "block.minecraft.brick_stairs": "Brick Stairs",
        // "block.minecraft.stone_brick_stairs": "Stone Brick Stairs",
        // "block.minecraft.vine": "Vines",
        // "block.minecraft.nether_bricks": "Nether Bricks",
        // "block.minecraft.nether_brick_fence": "Nether Brick Fence",
        // "block.minecraft.nether_brick_stairs": "Nether Brick Stairs",
        // "block.minecraft.nether_wart": "Nether Wart",
        // "block.minecraft.warped_wart_block": "Warped Wart Block",
        // "block.minecraft.warped_stem": "Warped Stem",
        // "block.minecraft.stripped_warped_stem": "Stripped Warped Stem",
        // "block.minecraft.warped_hyphae": "Warped Hyphae",
        // "block.minecraft.stripped_warped_hyphae": "Stripped Warped Hyphae",
        // "block.minecraft.crimson_stem": "Crimson Stem",
        // "block.minecraft.stripped_crimson_stem": "Stripped Crimson Stem",
        // "block.minecraft.crimson_hyphae": "Crimson Hyphae",
        // "block.minecraft.stripped_crimson_hyphae": "Stripped Crimson Hyphae",
        // "block.minecraft.warped_nylium": "Warped Nylium",
        // "block.minecraft.crimson_nylium": "Crimson Nylium",
        // "block.minecraft.warped_fungus": "Warped Fungus",
        // "block.minecraft.crimson_fungus": "Crimson Fungus",
        // "block.minecraft.crimson_roots": "Crimson Roots",
        // "block.minecraft.warped_roots": "Warped Roots",
        // "block.minecraft.nether_sprouts": "Nether Sprouts",
        // "block.minecraft.shroomlight": "Shroomlight",
        // "block.minecraft.weeping_vines": "Weeping Vines",
        // "block.minecraft.weeping_vines_plant": "Weeping Vines Plant",
        // "block.minecraft.twisting_vines": "Twisting Vines",
        // "block.minecraft.twisting_vines_plant": "Twisting Vines Plant",
        // "block.minecraft.soul_soil": "Soul Soil",
        // "block.minecraft.basalt": "Basalt",
        // "block.minecraft.polished_basalt": "Polished Basalt",
        // "block.minecraft.warped_planks": "Warped Planks",
        // "block.minecraft.warped_slab": "Warped Slab",
        // "block.minecraft.warped_pressure_plate": "Warped Pressure Plate",
        // "block.minecraft.warped_fence": "Warped Fence",
        // "block.minecraft.warped_trapdoor": "Warped Trapdoor",
        // "block.minecraft.warped_fence_gate": "Warped Fence Gate",
        // "block.minecraft.warped_stairs": "Warped Stairs",
        // "block.minecraft.warped_button": "Warped Button",
        // "block.minecraft.warped_door": "Warped Door",
        // "block.minecraft.warped_sign": "Warped Sign",
        // "block.minecraft.warped_wall_sign": "Warped Wall Sign",
        // "block.minecraft.crimson_planks": "Crimson Planks",
        // "block.minecraft.crimson_slab": "Crimson Slab",
        // "block.minecraft.crimson_pressure_plate": "Crimson Pressure Plate",
        // "block.minecraft.crimson_fence": "Crimson Fence",
        // "block.minecraft.crimson_trapdoor": "Crimson Trapdoor",
        // "block.minecraft.crimson_fence_gate": "Crimson Fence Gate",
        // "block.minecraft.crimson_stairs": "Crimson Stairs",
        // "block.minecraft.crimson_button": "Crimson Button",
        // "block.minecraft.crimson_door": "Crimson Door",
        // "block.minecraft.crimson_sign": "Crimson Sign",
        // "block.minecraft.crimson_wall_sign": "Crimson Wall Sign",
        // "block.minecraft.soul_fire": "Soul Fire",
        // "block.minecraft.cauldron": "Cauldron",
        // "block.minecraft.water_cauldron": "Water Cauldron",
        // "block.minecraft.lava_cauldron": "Lava Cauldron",
        // "block.minecraft.powder_snow_cauldron": "Powder Snow Cauldron",
        // "block.minecraft.enchanting_table": "Enchanting Table",
        // "block.minecraft.anvil": "Anvil",
        // "block.minecraft.chipped_anvil": "Chipped Anvil",
        // "block.minecraft.damaged_anvil": "Damaged Anvil",
        // "block.minecraft.end_stone": "End Stone",
        // "block.minecraft.end_portal_frame": "End Portal Frame",
        // "block.minecraft.mycelium": "Mycelium",
        // "block.minecraft.lily_pad": "Lily Pad",
        // "block.minecraft.dragon_egg": "Dragon Egg",
        // "block.minecraft.redstone_lamp": "Redstone Lamp",
        // "block.minecraft.cocoa": "Cocoa",
        // "block.minecraft.ender_chest": "Ender Chest",
        // "block.minecraft.emerald_ore": "Emerald Ore",
        // "block.minecraft.deepslate_emerald_ore": "Deepslate Emerald Ore",
        // "block.minecraft.emerald_block": "Block of Emerald",
        // "block.minecraft.redstone_block": "Block of Redstone",
        // "block.minecraft.tripwire": "Tripwire",
        // "block.minecraft.tripwire_hook": "Tripwire Hook",
        // "block.minecraft.command_block": "Command Block",
        // "block.minecraft.repeating_command_block": "Repeating Command Block",
        // "block.minecraft.chain_command_block": "Chain Command Block",
        // "block.minecraft.beacon": "Beacon",
        // "block.minecraft.beacon.primary": "Primary Power",
        // "block.minecraft.beacon.secondary": "Secondary Power",
        // "block.minecraft.cobblestone_wall": "Cobblestone Wall",
        // "block.minecraft.mossy_cobblestone_wall": "Mossy Cobblestone Wall",
        // "block.minecraft.carrots": "Carrots",
        // "block.minecraft.potatoes": "Potatoes",
        // "block.minecraft.daylight_detector": "Daylight Detector",
        // "block.minecraft.nether_quartz_ore": "Nether Quartz Ore",
        // "block.minecraft.hopper": "Hopper",
        // "block.minecraft.quartz_block": "Block of Quartz",
        // "block.minecraft.chiseled_quartz_block": "Chiseled Quartz Block",
        // "block.minecraft.quartz_pillar": "Quartz Pillar",
        // "block.minecraft.quartz_stairs": "Quartz Stairs",
        // "block.minecraft.slime_block": "Slime Block",
        // "block.minecraft.prismarine": "Prismarine",
        // "block.minecraft.prismarine_bricks": "Prismarine Bricks",
        // "block.minecraft.dark_prismarine": "Dark Prismarine",
        // "block.minecraft.sea_lantern": "Sea Lantern",
        // "block.minecraft.end_rod": "End Rod",
        // "block.minecraft.chorus_plant": "Chorus Plant",
        // "block.minecraft.chorus_flower": "Chorus Flower",
        // "block.minecraft.purpur_block": "Purpur Block",
        // "block.minecraft.purpur_pillar": "Purpur Pillar",
        // "block.minecraft.purpur_stairs": "Purpur Stairs",
        // "block.minecraft.purpur_slab": "Purpur Slab",
        // "block.minecraft.end_stone_bricks": "End Stone Bricks",
        // "block.minecraft.beetroots": "Beetroots",
        // "block.minecraft.dirt_path": "Dirt Path",
        // "block.minecraft.magma_block": "Magma Block",
        // "block.minecraft.nether_wart_block": "Nether Wart Block",
        // "block.minecraft.red_nether_bricks": "Red Nether Bricks",
        // "block.minecraft.bone_block": "Bone Block",
        // "block.minecraft.observer": "Observer",
        // "block.minecraft.shulker_box": "Shulker Box",
        // "block.minecraft.white_shulker_box": "White Shulker Box",
        // "block.minecraft.orange_shulker_box": "Orange Shulker Box",
        // "block.minecraft.magenta_shulker_box": "Magenta Shulker Box",
        // "block.minecraft.light_blue_shulker_box": "Light Blue Shulker Box",
        // "block.minecraft.yellow_shulker_box": "Yellow Shulker Box",
        // "block.minecraft.lime_shulker_box": "Lime Shulker Box",
        // "block.minecraft.pink_shulker_box": "Pink Shulker Box",
        // "block.minecraft.gray_shulker_box": "Gray Shulker Box",
        // "block.minecraft.light_gray_shulker_box": "Light Gray Shulker Box",
        // "block.minecraft.cyan_shulker_box": "Cyan Shulker Box",
        // "block.minecraft.purple_shulker_box": "Purple Shulker Box",
        // "block.minecraft.blue_shulker_box": "Blue Shulker Box",
        // "block.minecraft.brown_shulker_box": "Brown Shulker Box",
        // "block.minecraft.green_shulker_box": "Green Shulker Box",
        // "block.minecraft.red_shulker_box": "Red Shulker Box",
        // "block.minecraft.black_shulker_box": "Black Shulker Box",
        // "block.minecraft.white_glazed_terracotta": "White Glazed Terracotta",
        // "block.minecraft.orange_glazed_terracotta": "Orange Glazed Terracotta",
        // "block.minecraft.magenta_glazed_terracotta": "Magenta Glazed Terracotta",
        // "block.minecraft.light_blue_glazed_terracotta": "Light Blue Glazed Terracotta",
        // "block.minecraft.yellow_glazed_terracotta": "Yellow Glazed Terracotta",
        // "block.minecraft.lime_glazed_terracotta": "Lime Glazed Terracotta",
        // "block.minecraft.pink_glazed_terracotta": "Pink Glazed Terracotta",
        // "block.minecraft.gray_glazed_terracotta": "Gray Glazed Terracotta",
        // "block.minecraft.light_gray_glazed_terracotta": "Light Gray Glazed Terracotta",
        // "block.minecraft.cyan_glazed_terracotta": "Cyan Glazed Terracotta",
        // "block.minecraft.purple_glazed_terracotta": "Purple Glazed Terracotta",
        // "block.minecraft.blue_glazed_terracotta": "Blue Glazed Terracotta",
        // "block.minecraft.brown_glazed_terracotta": "Brown Glazed Terracotta",
        // "block.minecraft.green_glazed_terracotta": "Green Glazed Terracotta",
        // "block.minecraft.red_glazed_terracotta": "Red Glazed Terracotta",
        // "block.minecraft.black_glazed_terracotta": "Black Glazed Terracotta",
        // "block.minecraft.black_concrete": "Black Concrete",
        // "block.minecraft.red_concrete": "Red Concrete",
        // "block.minecraft.green_concrete": "Green Concrete",
        // "block.minecraft.brown_concrete": "Brown Concrete",
        // "block.minecraft.blue_concrete": "Blue Concrete",
        // "block.minecraft.purple_concrete": "Purple Concrete",
        // "block.minecraft.cyan_concrete": "Cyan Concrete",
        // "block.minecraft.light_gray_concrete": "Light Gray Concrete",
        // "block.minecraft.gray_concrete": "Gray Concrete",
        // "block.minecraft.pink_concrete": "Pink Concrete",
        // "block.minecraft.lime_concrete": "Lime Concrete",
        // "block.minecraft.yellow_concrete": "Yellow Concrete",
        // "block.minecraft.light_blue_concrete": "Light Blue Concrete",
        // "block.minecraft.magenta_concrete": "Magenta Concrete",
        // "block.minecraft.orange_concrete": "Orange Concrete",
        // "block.minecraft.white_concrete": "White Concrete",
        // "block.minecraft.black_concrete_powder": "Black Concrete Powder",
        // "block.minecraft.red_concrete_powder": "Red Concrete Powder",
        // "block.minecraft.green_concrete_powder": "Green Concrete Powder",
        // "block.minecraft.brown_concrete_powder": "Brown Concrete Powder",
        // "block.minecraft.blue_concrete_powder": "Blue Concrete Powder",
        // "block.minecraft.purple_concrete_powder": "Purple Concrete Powder",
        // "block.minecraft.cyan_concrete_powder": "Cyan Concrete Powder",
        // "block.minecraft.light_gray_concrete_powder": "Light Gray Concrete Powder",
        // "block.minecraft.gray_concrete_powder": "Gray Concrete Powder",
        // "block.minecraft.pink_concrete_powder": "Pink Concrete Powder",
        // "block.minecraft.lime_concrete_powder": "Lime Concrete Powder",
        // "block.minecraft.yellow_concrete_powder": "Yellow Concrete Powder",
        // "block.minecraft.light_blue_concrete_powder": "Light Blue Concrete Powder",
        // "block.minecraft.magenta_concrete_powder": "Magenta Concrete Powder",
        // "block.minecraft.orange_concrete_powder": "Orange Concrete Powder",
        // "block.minecraft.white_concrete_powder": "White Concrete Powder",
        // "block.minecraft.turtle_egg": "Turtle Egg",
        // "block.minecraft.piston_head": "Piston Head",
        // "block.minecraft.moving_piston": "Moving Piston",
        // "block.minecraft.red_mushroom": "Red Mushroom",
        // "block.minecraft.snow_block": "Snow Block",
        // "block.minecraft.attached_melon_stem": "Attached Melon Stem",
        // "block.minecraft.melon_stem": "Melon Stem",
        // "block.minecraft.brewing_stand": "Brewing Stand",
        // "block.minecraft.end_portal": "End Portal",
        // "block.minecraft.flower_pot": "Flower Pot",
        // "block.minecraft.potted_oak_sapling": "Potted Oak Sapling",
        // "block.minecraft.potted_spruce_sapling": "Potted Spruce Sapling",
        // "block.minecraft.potted_birch_sapling": "Potted Birch Sapling",
        // "block.minecraft.potted_jungle_sapling": "Potted Jungle Sapling",
        // "block.minecraft.potted_acacia_sapling": "Potted Acacia Sapling",
        // "block.minecraft.potted_dark_oak_sapling": "Potted Dark Oak Sapling",
        // "block.minecraft.potted_fern": "Potted Fern",
        // "block.minecraft.potted_dandelion": "Potted Dandelion",
        // "block.minecraft.potted_poppy": "Potted Poppy",
        // "block.minecraft.potted_blue_orchid": "Potted Blue Orchid",
        // "block.minecraft.potted_allium": "Potted Allium",
        // "block.minecraft.potted_azure_bluet": "Potted Azure Bluet",
        // "block.minecraft.potted_red_tulip": "Potted Red Tulip",
        // "block.minecraft.potted_orange_tulip": "Potted Orange Tulip",
        // "block.minecraft.potted_white_tulip": "Potted White Tulip",
        // "block.minecraft.potted_pink_tulip": "Potted Pink Tulip",
        // "block.minecraft.potted_oxeye_daisy": "Potted Oxeye Daisy",
        // "block.minecraft.potted_cornflower": "Potted Cornflower",
        // "block.minecraft.potted_lily_of_the_valley": "Potted Lily of the Valley",
        // "block.minecraft.potted_wither_rose": "Potted Wither Rose",
        // "block.minecraft.potted_red_mushroom": "Potted Red Mushroom",
        // "block.minecraft.potted_brown_mushroom": "Potted Brown Mushroom",
        // "block.minecraft.potted_dead_bush": "Potted Dead Bush",
        // "block.minecraft.potted_cactus": "Potted Cactus",
        // "block.minecraft.potted_bamboo": "Potted Bamboo",
        // "block.minecraft.potted_crimson_fungus": "Potted Crimson Fungus",
        // "block.minecraft.potted_warped_fungus": "Potted Warped Fungus",
        // "block.minecraft.potted_crimson_roots": "Potted Crimson Roots",
        // "block.minecraft.potted_warped_roots": "Potted Warped Roots",
        // "block.minecraft.potted_azalea_bush": "Potted Azalea",
        // "block.minecraft.potted_flowering_azalea_bush": "Potted Flowering Azalea",
        // "block.minecraft.skeleton_wall_skull": "Skeleton Wall Skull",
        // "block.minecraft.skeleton_skull": "Skeleton Skull",
        // "block.minecraft.wither_skeleton_wall_skull": "Wither Skeleton Wall Skull",
        // "block.minecraft.wither_skeleton_skull": "Wither Skeleton Skull",
        // "block.minecraft.zombie_wall_head": "Zombie Wall Head",
        // "block.minecraft.zombie_head": "Zombie Head",
        // "block.minecraft.player_wall_head": "Player Wall Head",
        // "block.minecraft.player_head": "Player Head",
        // "block.minecraft.player_head.named": "%s's Head",
        // "block.minecraft.creeper_wall_head": "Creeper Wall Head",
        // "block.minecraft.creeper_head": "Creeper Head",
        // "block.minecraft.dragon_wall_head": "Dragon Wall Head",
        // "block.minecraft.dragon_head": "Dragon Head",
        // "block.minecraft.end_gateway": "End Gateway",
        // "block.minecraft.structure_void": "Structure Void",
        // "block.minecraft.structure_block": "Structure Block",
        // "block.minecraft.void_air": "Void Air",
        // "block.minecraft.cave_air": "Cave Air",
        // "block.minecraft.bubble_column": "Bubble Column",
        // "block.minecraft.dead_tube_coral_block": "Dead Tube Coral Block",
        // "block.minecraft.dead_brain_coral_block": "Dead Brain Coral Block",
        // "block.minecraft.dead_bubble_coral_block": "Dead Bubble Coral Block",
        // "block.minecraft.dead_fire_coral_block": "Dead Fire Coral Block",
        // "block.minecraft.dead_horn_coral_block": "Dead Horn Coral Block",
        // "block.minecraft.tube_coral_block": "Tube Coral Block",
        // "block.minecraft.brain_coral_block": "Brain Coral Block",
        // "block.minecraft.bubble_coral_block": "Bubble Coral Block",
        // "block.minecraft.fire_coral_block": "Fire Coral Block",
        // "block.minecraft.horn_coral_block": "Horn Coral Block",
        // "block.minecraft.tube_coral": "Tube Coral",
        // "block.minecraft.brain_coral": "Brain Coral",
        // "block.minecraft.bubble_coral": "Bubble Coral",
        // "block.minecraft.fire_coral": "Fire Coral",
        // "block.minecraft.horn_coral": "Horn Coral",
        // "block.minecraft.dead_tube_coral": "Dead Tube Coral",
        // "block.minecraft.dead_brain_coral": "Dead Brain Coral",
        // "block.minecraft.dead_bubble_coral": "Dead Bubble Coral",
        // "block.minecraft.dead_fire_coral": "Dead Fire Coral",
        // "block.minecraft.dead_horn_coral": "Dead Horn Coral",
        // "block.minecraft.tube_coral_fan": "Tube Coral Fan",
        // "block.minecraft.brain_coral_fan": "Brain Coral Fan",
        // "block.minecraft.bubble_coral_fan": "Bubble Coral Fan",
        // "block.minecraft.fire_coral_fan": "Fire Coral Fan",
        // "block.minecraft.horn_coral_fan": "Horn Coral Fan",
        // "block.minecraft.dead_tube_coral_fan": "Dead Tube Coral Fan",
        // "block.minecraft.dead_brain_coral_fan": "Dead Brain Coral Fan",
        // "block.minecraft.dead_bubble_coral_fan": "Dead Bubble Coral Fan",
        // "block.minecraft.dead_fire_coral_fan": "Dead Fire Coral Fan",
        // "block.minecraft.dead_horn_coral_fan": "Dead Horn Coral Fan",
        // "block.minecraft.tube_coral_wall_fan": "Tube Coral Wall Fan",
        // "block.minecraft.brain_coral_wall_fan": "Brain Coral Wall Fan",
        // "block.minecraft.bubble_coral_wall_fan": "Bubble Coral Wall Fan",
        // "block.minecraft.fire_coral_wall_fan": "Fire Coral Wall Fan",
        // "block.minecraft.horn_coral_wall_fan": "Horn Coral Wall Fan",
        // "block.minecraft.dead_tube_coral_wall_fan": "Dead Tube Coral Wall Fan",
        // "block.minecraft.dead_brain_coral_wall_fan": "Dead Brain Coral Wall Fan",
        // "block.minecraft.dead_bubble_coral_wall_fan": "Dead Bubble Coral Wall Fan",
        // "block.minecraft.dead_fire_coral_wall_fan": "Dead Fire Coral Wall Fan",
        // "block.minecraft.dead_horn_coral_wall_fan": "Dead Horn Coral Wall Fan",
        // "block.minecraft.loom": "Loom",
        // "block.minecraft.conduit": "Conduit",
        // "block.minecraft.bamboo": "Bamboo",
        // "block.minecraft.bamboo_sapling": "Bamboo Shoot",
        // "block.minecraft.jigsaw": "Jigsaw Block",
        // "block.minecraft.composter": "Composter",
        // "block.minecraft.target": "Target",
        // "block.minecraft.polished_granite_stairs": "Polished Granite Stairs",
        // "block.minecraft.smooth_red_sandstone_stairs": "Smooth Red Sandstone Stairs",
        // "block.minecraft.mossy_stone_brick_stairs": "Mossy Stone Brick Stairs",
        // "block.minecraft.polished_diorite_stairs": "Polished Diorite Stairs",
        // "block.minecraft.mossy_cobblestone_stairs": "Mossy Cobblestone Stairs",
        // "block.minecraft.end_stone_brick_stairs": "End Stone Brick Stairs",
        // "block.minecraft.stone_stairs": "Stone Stairs",
        // "block.minecraft.smooth_sandstone_stairs": "Smooth Sandstone Stairs",
        // "block.minecraft.smooth_quartz_stairs": "Smooth Quartz Stairs",
        // "block.minecraft.granite_stairs": "Granite Stairs",
        // "block.minecraft.andesite_stairs": "Andesite Stairs",
        // "block.minecraft.red_nether_brick_stairs": "Red Nether Brick Stairs",
        // "block.minecraft.polished_andesite_stairs": "Polished Andesite Stairs",
        // "block.minecraft.diorite_stairs": "Diorite Stairs",
        // "block.minecraft.polished_granite_slab": "Polished Granite Slab",
        // "block.minecraft.smooth_red_sandstone_slab": "Smooth Red Sandstone Slab",
        // "block.minecraft.mossy_stone_brick_slab": "Mossy Stone Brick Slab",
        // "block.minecraft.polished_diorite_slab": "Polished Diorite Slab",
        // "block.minecraft.mossy_cobblestone_slab": "Mossy Cobblestone Slab",
        // "block.minecraft.end_stone_brick_slab": "End Stone Brick Slab",
        // "block.minecraft.smooth_sandstone_slab": "Smooth Sandstone Slab",
        // "block.minecraft.smooth_quartz_slab": "Smooth Quartz Slab",
        // "block.minecraft.granite_slab": "Granite Slab",
        // "block.minecraft.andesite_slab": "Andesite Slab",
        // "block.minecraft.red_nether_brick_slab": "Red Nether Brick Slab",
        // "block.minecraft.polished_andesite_slab": "Polished Andesite Slab",
        // "block.minecraft.diorite_slab": "Diorite Slab",
        // "block.minecraft.brick_wall": "Brick Wall",
        // "block.minecraft.prismarine_wall": "Prismarine Wall",
        // "block.minecraft.red_sandstone_wall": "Red Sandstone Wall",
        // "block.minecraft.mossy_stone_brick_wall": "Mossy Stone Brick Wall",
        // "block.minecraft.granite_wall": "Granite Wall",
        // "block.minecraft.stone_brick_wall": "Stone Brick Wall",
        // "block.minecraft.nether_brick_wall": "Nether Brick Wall",
        // "block.minecraft.andesite_wall": "Andesite Wall",
        // "block.minecraft.red_nether_brick_wall": "Red Nether Brick Wall",
        // "block.minecraft.sandstone_wall": "Sandstone Wall",
        // "block.minecraft.end_stone_brick_wall": "End Stone Brick Wall",
        // "block.minecraft.diorite_wall": "Diorite Wall",
        // "block.minecraft.barrel": "Barrel",
        // "block.minecraft.smoker": "Smoker",
        // "block.minecraft.blast_furnace": "Blast Furnace",
        // "block.minecraft.cartography_table": "Cartography Table",
        // "block.minecraft.fletching_table": "Fletching Table",
        // "block.minecraft.smithing_table": "Smithing Table",
        // "block.minecraft.grindstone": "Grindstone",
        // "block.minecraft.lectern": "Lectern",
        // "block.minecraft.stonecutter": "Stonecutter",
        // "block.minecraft.bell": "Bell",
        // "block.minecraft.ominous_banner": "Ominous Banner",
        // "block.minecraft.lantern": "Lantern",
        // "block.minecraft.soul_lantern": "Soul Lantern",
        // "block.minecraft.sweet_berry_bush": "Sweet Berry Bush",
        // "block.minecraft.campfire": "Campfire",
        // "block.minecraft.soul_campfire": "Soul Campfire",
        // "block.minecraft.beehive": "Beehive",
        // "block.minecraft.bee_nest": "Bee Nest",
        // "block.minecraft.honey_block": "Honey Block",
        // "block.minecraft.honeycomb_block": "Honeycomb Block",
        // "block.minecraft.lodestone": "Lodestone",
        // "block.minecraft.netherite_block": "Block of Netherite",
        // "block.minecraft.ancient_debris": "Ancient Debris",
        // "block.minecraft.crying_obsidian": "Crying Obsidian",
        // "block.minecraft.blackstone": "Blackstone",
        // "block.minecraft.blackstone_slab": "Blackstone Slab",
        // "block.minecraft.blackstone_stairs": "Blackstone Stairs",
        // "block.minecraft.blackstone_wall": "Blackstone Wall",
        // "block.minecraft.polished_blackstone_bricks": "Polished Blackstone Bricks",
        // "block.minecraft.polished_blackstone_brick_slab": "Polished Blackstone Brick Slab",
        // "block.minecraft.polished_blackstone_brick_stairs": "Polished Blackstone Brick Stairs",
        // "block.minecraft.polished_blackstone_brick_wall": "Polished Blackstone Brick Wall",
        // "block.minecraft.chiseled_polished_blackstone": "Chiseled Polished Blackstone",
        // "block.minecraft.cracked_polished_blackstone_bricks": "Cracked Polished Blackstone Bricks",
        // "block.minecraft.gilded_blackstone": "Gilded Blackstone",
        // "block.minecraft.polished_blackstone": "Polished Blackstone",
        // "block.minecraft.polished_blackstone_wall": "Polished Blackstone Wall",
        // "block.minecraft.polished_blackstone_slab": "Polished Blackstone Slab",
        // "block.minecraft.polished_blackstone_stairs": "Polished Blackstone Stairs",
        // "block.minecraft.polished_blackstone_pressure_plate": "Polished Blackstone Pressure Plate",
        // "block.minecraft.polished_blackstone_button": "Polished Blackstone Button",
        // "block.minecraft.cracked_nether_bricks": "Cracked Nether Bricks",
        // "block.minecraft.chiseled_nether_bricks": "Chiseled Nether Bricks",
        // "block.minecraft.quartz_bricks": "Quartz Bricks",
        // "block.minecraft.chain": "Chain",
        // "block.minecraft.candle": "Candle",
        // "block.minecraft.white_candle": "White Candle",
        // "block.minecraft.orange_candle": "Orange Candle",
        // "block.minecraft.magenta_candle": "Magenta Candle",
        // "block.minecraft.light_blue_candle": "Light Blue Candle",
        // "block.minecraft.yellow_candle": "Yellow Candle",
        // "block.minecraft.lime_candle": "Lime Candle",
        // "block.minecraft.pink_candle": "Pink Candle",
        // "block.minecraft.gray_candle": "Gray Candle",
        // "block.minecraft.light_gray_candle": "Light Gray Candle",
        // "block.minecraft.cyan_candle": "Cyan Candle",
        // "block.minecraft.purple_candle": "Purple Candle",
        // "block.minecraft.blue_candle": "Blue Candle",
        // "block.minecraft.brown_candle": "Brown Candle",
        // "block.minecraft.green_candle": "Green Candle",
        // "block.minecraft.red_candle": "Red Candle",
        // "block.minecraft.black_candle": "Black Candle",
        // "block.minecraft.candle_cake": "Cake with Candle",
        // "block.minecraft.white_candle_cake": "Cake with White Candle",
        // "block.minecraft.orange_candle_cake": "Cake with Orange Candle",
        // "block.minecraft.magenta_candle_cake": "Cake with Magenta Candle",
        // "block.minecraft.light_blue_candle_cake": "Cake with Light Blue Candle",
        // "block.minecraft.yellow_candle_cake": "Cake with Yellow Candle",
        // "block.minecraft.lime_candle_cake": "Cake with Lime Candle",
        // "block.minecraft.pink_candle_cake": "Cake with Pink Candle",
        // "block.minecraft.gray_candle_cake": "Cake with Gray Candle",
        // "block.minecraft.light_gray_candle_cake": "Cake with Light Gray Candle",
        // "block.minecraft.cyan_candle_cake": "Cake with Cyan Candle",
        // "block.minecraft.purple_candle_cake": "Cake with Purple Candle",
        // "block.minecraft.blue_candle_cake": "Cake with Blue Candle",
        // "block.minecraft.brown_candle_cake": "Cake with Brown Candle",
        // "block.minecraft.green_candle_cake": "Cake with Green Candle",
        // "block.minecraft.red_candle_cake": "Cake with Red Candle",
        // "block.minecraft.black_candle_cake": "Cake with Black Candle",
        // "block.minecraft.amethyst_block": "Block of Amethyst",
        // "block.minecraft.small_amethyst_bud": "Small Amethyst Bud",
        // "block.minecraft.medium_amethyst_bud": "Medium Amethyst Bud",
        // "block.minecraft.large_amethyst_bud": "Large Amethyst Bud",
        // "block.minecraft.amethyst_cluster": "Amethyst Cluster",
        // "block.minecraft.budding_amethyst": "Budding Amethyst",
        // "block.minecraft.calcite": "Calcite",
        // "block.minecraft.tuff": "Tuff",
        // "block.minecraft.tinted_glass": "Tinted Glass",
        // "block.minecraft.dripstone_block": "Dripstone Block",
        // "block.minecraft.pointed_dripstone": "Pointed Dripstone",
        // "block.minecraft.copper_ore": "Copper Ore",
        // "block.minecraft.deepslate_copper_ore": "Deepslate Copper Ore",
        // "block.minecraft.copper_block": "Block of Copper",
        // "block.minecraft.exposed_copper": "Exposed Copper",
        // "block.minecraft.weathered_copper": "Weathered Copper",
        // "block.minecraft.oxidized_copper": "Oxidized Copper",
        // "block.minecraft.cut_copper": "Cut Copper",
        // "block.minecraft.exposed_cut_copper": "Exposed Cut Copper",
        // "block.minecraft.weathered_cut_copper": "Weathered Cut Copper",
        // "block.minecraft.oxidized_cut_copper": "Oxidized Cut Copper",
        // "block.minecraft.cut_copper_stairs": "Cut Copper Stairs",
        // "block.minecraft.exposed_cut_copper_stairs": "Exposed Cut Copper Stairs",
        // "block.minecraft.weathered_cut_copper_stairs": "Weathered Cut Copper Stairs",
        // "block.minecraft.oxidized_cut_copper_stairs": "Oxidized Cut Copper Stairs",
        // "block.minecraft.cut_copper_slab": "Cut Copper Slab",
        // "block.minecraft.exposed_cut_copper_slab": "Exposed Cut Copper Slab",
        // "block.minecraft.weathered_cut_copper_slab": "Weathered Cut Copper Slab",
        // "block.minecraft.oxidized_cut_copper_slab": "Oxidized Cut Copper Slab",
        // "block.minecraft.waxed_copper_block": "Waxed Block of Copper",
        // "block.minecraft.waxed_exposed_copper": "Waxed Exposed Copper",
        // "block.minecraft.waxed_weathered_copper": "Waxed Weathered Copper",
        // "block.minecraft.waxed_oxidized_copper": "Waxed Oxidized Copper",
        // "block.minecraft.waxed_cut_copper": "Waxed Cut Copper",
        // "block.minecraft.waxed_exposed_cut_copper": "Waxed Exposed Cut Copper",
        // "block.minecraft.waxed_weathered_cut_copper": "Waxed Weathered Cut Copper",
        // "block.minecraft.waxed_oxidized_cut_copper": "Waxed Oxidized Cut Copper",
        // "block.minecraft.waxed_cut_copper_stairs": "Waxed Cut Copper Stairs",
        // "block.minecraft.waxed_exposed_cut_copper_stairs": "Waxed Exposed Cut Copper Stairs",
        // "block.minecraft.waxed_weathered_cut_copper_stairs": "Waxed Weathered Cut Copper Stairs",
        // "block.minecraft.waxed_oxidized_cut_copper_stairs": "Waxed Oxidized Cut Copper Stairs",
        // "block.minecraft.waxed_cut_copper_slab": "Waxed Cut Copper Slab",
        // "block.minecraft.waxed_exposed_cut_copper_slab": "Waxed Exposed Cut Copper Slab",
        // "block.minecraft.waxed_weathered_cut_copper_slab": "Waxed Weathered Cut Copper Slab",
        // "block.minecraft.waxed_oxidized_cut_copper_slab": "Waxed Oxidized Cut Copper Slab",
        // "block.minecraft.lightning_rod": "Lightning Rod",
        // "block.minecraft.cave_vines": "Cave Vines",
        // "block.minecraft.cave_vines_plant": "Cave Vines Plant",
        // "block.minecraft.spore_blossom": "Spore Blossom",
        // "block.minecraft.azalea": "Azalea",
        // "block.minecraft.flowering_azalea": "Flowering Azalea",
        // "block.minecraft.azalea_leaves": "Azalea Leaves",
        // "block.minecraft.flowering_azalea_leaves": "Flowering Azalea Leaves",
        // "block.minecraft.moss_carpet": "Moss Carpet",
        // "block.minecraft.moss_block": "Moss Block",
        // "block.minecraft.big_dripleaf": "Big Dripleaf",
        // "block.minecraft.big_dripleaf_stem": "Big Dripleaf Stem",
        // "block.minecraft.small_dripleaf": "Small Dripleaf",
        // "block.minecraft.rooted_dirt": "Rooted Dirt",
        // "block.minecraft.hanging_roots": "Hanging Roots",
        // "block.minecraft.powder_snow": "Powder Snow",
        // "block.minecraft.glow_lichen": "Glow Lichen",
        // "block.minecraft.sculk_sensor": "Sculk Sensor",
        // "block.minecraft.deepslate": "Deepslate",
        // "block.minecraft.cobbled_deepslate": "Cobbled Deepslate",
        // "block.minecraft.cobbled_deepslate_slab": "Cobbled Deepslate Slab",
        // "block.minecraft.cobbled_deepslate_stairs": "Cobbled Deepslate Stairs",
        // "block.minecraft.cobbled_deepslate_wall": "Cobbled Deepslate Wall",
        // "block.minecraft.chiseled_deepslate": "Chiseled Deepslate",
        // "block.minecraft.polished_deepslate": "Polished Deepslate",
        // "block.minecraft.polished_deepslate_slab": "Polished Deepslate Slab",
        // "block.minecraft.polished_deepslate_stairs": "Polished Deepslate Stairs",
        // "block.minecraft.polished_deepslate_wall": "Polished Deepslate Wall",
        // "block.minecraft.deepslate_bricks": "Deepslate Bricks",
        // "block.minecraft.deepslate_brick_slab": "Deepslate Brick Slab",
        // "block.minecraft.deepslate_brick_stairs": "Deepslate Brick Stairs",
        // "block.minecraft.deepslate_brick_wall": "Deepslate Brick Wall",
        // "block.minecraft.deepslate_tiles": "Deepslate Tiles",
        // "block.minecraft.deepslate_tile_slab": "Deepslate Tile Slab",
        // "block.minecraft.deepslate_tile_stairs": "Deepslate Tile Stairs",
        // "block.minecraft.deepslate_tile_wall": "Deepslate Tile Wall",
        // "block.minecraft.cracked_deepslate_bricks": "Cracked Deepslate Bricks",
        // "block.minecraft.cracked_deepslate_tiles": "Cracked Deepslate Tiles",
        // "block.minecraft.infested_deepslate": "Infested Deepslate",
        // "block.minecraft.smooth_basalt": "Smooth Basalt",
        // "block.minecraft.raw_iron_block": "Block of Raw Iron",
        // "block.minecraft.raw_copper_block": "Block of Raw Copper",
        // "block.minecraft.raw_gold_block": "Block of Raw Gold",
        // "block.minecraft.black_bed": "Black Bed",
        // "block.minecraft.red_bed": "Red Bed",
        // "block.minecraft.green_bed": "Green Bed",
        // "block.minecraft.brown_bed": "Brown Bed",
        // "block.minecraft.blue_bed": "Blue Bed",
        // "block.minecraft.purple_bed": "Purple Bed",
        // "block.minecraft.cyan_bed": "Cyan Bed",
        // "block.minecraft.light_gray_bed": "Light Gray Bed",
        // "block.minecraft.gray_bed": "Gray Bed",
        // "block.minecraft.pink_bed": "Pink Bed",
        // "block.minecraft.lime_bed": "Lime Bed",
        // "block.minecraft.yellow_bed": "Yellow Bed",
        // "block.minecraft.light_blue_bed": "Light Blue Bed",
        // "block.minecraft.magenta_bed": "Magenta Bed",
        // "block.minecraft.orange_bed": "Orange Bed",
        // "block.minecraft.white_bed": "White Bed",
        // "block.minecraft.repeater": "Redstone Repeater",
        // "block.minecraft.comparator": "Redstone Comparator",
        // "block.minecraft.black_banner": "Black Banner",
        // "block.minecraft.red_banner": "Red Banner",
        // "block.minecraft.green_banner": "Green Banner",
        // "block.minecraft.brown_banner": "Brown Banner",
        // "block.minecraft.blue_banner": "Blue Banner",
        // "block.minecraft.purple_banner": "Purple Banner",
        // "block.minecraft.cyan_banner": "Cyan Banner",
        // "block.minecraft.light_gray_banner": "Light Gray Banner",
        // "block.minecraft.gray_banner": "Gray Banner",
        // "block.minecraft.pink_banner": "Pink Banner",
        // "block.minecraft.lime_banner": "Lime Banner",
        // "block.minecraft.yellow_banner": "Yellow Banner",
        // "block.minecraft.light_blue_banner": "Light Blue Banner",
        // "block.minecraft.magenta_banner": "Magenta Banner",
        // "block.minecraft.orange_banner": "Orange Banner",
        // "block.minecraft.white_banner": "White Banner",
        // "block.minecraft.banner.base.black": "Fully Black Field",
        // "block.minecraft.banner.base.red": "Fully Red Field",
        // "block.minecraft.banner.base.green": "Fully Green Field",
        // "block.minecraft.banner.base.brown": "Fully Brown Field",
        // "block.minecraft.banner.base.blue": "Fully Blue Field",
        // "block.minecraft.banner.base.purple": "Fully Purple Field",
        // "block.minecraft.banner.base.cyan": "Fully Cyan Field",
        // "block.minecraft.banner.base.light_gray": "Fully Light Gray Field",
        // "block.minecraft.banner.base.gray": "Fully Gray Field",
        // "block.minecraft.banner.base.pink": "Fully Pink Field",
        // "block.minecraft.banner.base.lime": "Fully Lime Field",
        // "block.minecraft.banner.base.yellow": "Fully Yellow Field",
        // "block.minecraft.banner.base.light_blue": "Fully Light Blue Field",
        // "block.minecraft.banner.base.magenta": "Fully Magenta Field",
        // "block.minecraft.banner.base.orange": "Fully Orange Field",
        // "block.minecraft.banner.base.white": "Fully White Field",
        // "block.minecraft.banner.square_bottom_left.black": "Black Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.red": "Red Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.green": "Green Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.brown": "Brown Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.blue": "Blue Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.purple": "Purple Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.cyan": "Cyan Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.light_gray": "Light Gray Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.gray": "Gray Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.pink": "Pink Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.lime": "Lime Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.yellow": "Yellow Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.light_blue": "Light Blue Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.magenta": "Magenta Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.orange": "Orange Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_left.white": "White Base Dexter Canton",
        // "block.minecraft.banner.square_bottom_right.black": "Black Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.red": "Red Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.green": "Green Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.brown": "Brown Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.blue": "Blue Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.purple": "Purple Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.cyan": "Cyan Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.light_gray": "Light Gray Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.gray": "Gray Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.pink": "Pink Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.lime": "Lime Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.yellow": "Yellow Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.light_blue": "Light Blue Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.magenta": "Magenta Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.orange": "Orange Base Sinister Canton",
        // "block.minecraft.banner.square_bottom_right.white": "White Base Sinister Canton",
        // "block.minecraft.banner.square_top_left.black": "Black Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.red": "Red Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.green": "Green Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.brown": "Brown Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.blue": "Blue Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.purple": "Purple Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.cyan": "Cyan Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.light_gray": "Light Gray Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.gray": "Gray Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.pink": "Pink Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.lime": "Lime Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.yellow": "Yellow Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.light_blue": "Light Blue Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.magenta": "Magenta Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.orange": "Orange Chief Dexter Canton",
        // "block.minecraft.banner.square_top_left.white": "White Chief Dexter Canton",
        // "block.minecraft.banner.square_top_right.black": "Black Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.red": "Red Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.green": "Green Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.brown": "Brown Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.blue": "Blue Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.purple": "Purple Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.cyan": "Cyan Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.light_gray": "Light Gray Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.gray": "Gray Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.pink": "Pink Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.lime": "Lime Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.yellow": "Yellow Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.light_blue": "Light Blue Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.magenta": "Magenta Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.orange": "Orange Chief Sinister Canton",
        // "block.minecraft.banner.square_top_right.white": "White Chief Sinister Canton",
        // "block.minecraft.banner.stripe_bottom.black": "Black Base",
        // "block.minecraft.banner.stripe_bottom.red": "Red Base",
        // "block.minecraft.banner.stripe_bottom.green": "Green Base",
        // "block.minecraft.banner.stripe_bottom.brown": "Brown Base",
        // "block.minecraft.banner.stripe_bottom.blue": "Blue Base",
        // "block.minecraft.banner.stripe_bottom.purple": "Purple Base",
        // "block.minecraft.banner.stripe_bottom.cyan": "Cyan Base",
        // "block.minecraft.banner.stripe_bottom.light_gray": "Light Gray Base",
        // "block.minecraft.banner.stripe_bottom.gray": "Gray Base",
        // "block.minecraft.banner.stripe_bottom.pink": "Pink Base",
        // "block.minecraft.banner.stripe_bottom.lime": "Lime Base",
        // "block.minecraft.banner.stripe_bottom.yellow": "Yellow Base",
        // "block.minecraft.banner.stripe_bottom.light_blue": "Light Blue Base",
        // "block.minecraft.banner.stripe_bottom.magenta": "Magenta Base",
        // "block.minecraft.banner.stripe_bottom.orange": "Orange Base",
        // "block.minecraft.banner.stripe_bottom.white": "White Base",
        // "block.minecraft.banner.stripe_top.black": "Black Chief",
        // "block.minecraft.banner.stripe_top.red": "Red Chief",
        // "block.minecraft.banner.stripe_top.green": "Green Chief",
        // "block.minecraft.banner.stripe_top.brown": "Brown Chief",
        // "block.minecraft.banner.stripe_top.blue": "Blue Chief",
        // "block.minecraft.banner.stripe_top.purple": "Purple Chief",
        // "block.minecraft.banner.stripe_top.cyan": "Cyan Chief",
        // "block.minecraft.banner.stripe_top.light_gray": "Light Gray Chief",
        // "block.minecraft.banner.stripe_top.gray": "Gray Chief",
        // "block.minecraft.banner.stripe_top.pink": "Pink Chief",
        // "block.minecraft.banner.stripe_top.lime": "Lime Chief",
        // "block.minecraft.banner.stripe_top.yellow": "Yellow Chief",
        // "block.minecraft.banner.stripe_top.light_blue": "Light Blue Chief",
        // "block.minecraft.banner.stripe_top.magenta": "Magenta Chief",
        // "block.minecraft.banner.stripe_top.orange": "Orange Chief",
        // "block.minecraft.banner.stripe_top.white": "White Chief",
        // "block.minecraft.banner.stripe_left.black": "Black Pale Dexter",
        // "block.minecraft.banner.stripe_left.red": "Red Pale Dexter",
        // "block.minecraft.banner.stripe_left.green": "Green Pale Dexter",
        // "block.minecraft.banner.stripe_left.brown": "Brown Pale Dexter",
        // "block.minecraft.banner.stripe_left.blue": "Blue Pale Dexter",
        // "block.minecraft.banner.stripe_left.purple": "Purple Pale Dexter",
        // "block.minecraft.banner.stripe_left.cyan": "Cyan Pale Dexter",
        // "block.minecraft.banner.stripe_left.light_gray": "Light Gray Pale Dexter",
        // "block.minecraft.banner.stripe_left.gray": "Gray Pale Dexter",
        // "block.minecraft.banner.stripe_left.pink": "Pink Pale Dexter",
        // "block.minecraft.banner.stripe_left.lime": "Lime Pale Dexter",
        // "block.minecraft.banner.stripe_left.yellow": "Yellow Pale Dexter",
        // "block.minecraft.banner.stripe_left.light_blue": "Light Blue Pale Dexter",
        // "block.minecraft.banner.stripe_left.magenta": "Magenta Pale Dexter",
        // "block.minecraft.banner.stripe_left.orange": "Orange Pale Dexter",
        // "block.minecraft.banner.stripe_left.white": "White Pale Dexter",
        // "block.minecraft.banner.stripe_right.black": "Black Pale Sinister",
        // "block.minecraft.banner.stripe_right.red": "Red Pale Sinister",
        // "block.minecraft.banner.stripe_right.green": "Green Pale Sinister",
        // "block.minecraft.banner.stripe_right.brown": "Brown Pale Sinister",
        // "block.minecraft.banner.stripe_right.blue": "Blue Pale Sinister",
        // "block.minecraft.banner.stripe_right.purple": "Purple Pale Sinister",
        // "block.minecraft.banner.stripe_right.cyan": "Cyan Pale Sinister",
        // "block.minecraft.banner.stripe_right.light_gray": "Light Gray Pale Sinister",
        // "block.minecraft.banner.stripe_right.gray": "Gray Pale Sinister",
        // "block.minecraft.banner.stripe_right.pink": "Pink Pale Sinister",
        // "block.minecraft.banner.stripe_right.lime": "Lime Pale Sinister",
        // "block.minecraft.banner.stripe_right.yellow": "Yellow Pale Sinister",
        // "block.minecraft.banner.stripe_right.light_blue": "Light Blue Pale Sinister",
        // "block.minecraft.banner.stripe_right.magenta": "Magenta Pale Sinister",
        // "block.minecraft.banner.stripe_right.orange": "Orange Pale Sinister",
        // "block.minecraft.banner.stripe_right.white": "White Pale Sinister",
        // "block.minecraft.banner.stripe_center.black": "Black Pale",
        // "block.minecraft.banner.stripe_center.red": "Red Pale",
        // "block.minecraft.banner.stripe_center.green": "Green Pale",
        // "block.minecraft.banner.stripe_center.brown": "Brown Pale",
        // "block.minecraft.banner.stripe_center.blue": "Blue Pale",
        // "block.minecraft.banner.stripe_center.purple": "Purple Pale",
        // "block.minecraft.banner.stripe_center.cyan": "Cyan Pale",
        // "block.minecraft.banner.stripe_center.light_gray": "Light Gray Pale",
        // "block.minecraft.banner.stripe_center.gray": "Gray Pale",
        // "block.minecraft.banner.stripe_center.pink": "Pink Pale",
        // "block.minecraft.banner.stripe_center.lime": "Lime Pale",
        // "block.minecraft.banner.stripe_center.yellow": "Yellow Pale",
        // "block.minecraft.banner.stripe_center.light_blue": "Light Blue Pale",
        // "block.minecraft.banner.stripe_center.magenta": "Magenta Pale",
        // "block.minecraft.banner.stripe_center.orange": "Orange Pale",
        // "block.minecraft.banner.stripe_center.white": "White Pale",
        // "block.minecraft.banner.stripe_middle.black": "Black Fess",
        // "block.minecraft.banner.stripe_middle.red": "Red Fess",
        // "block.minecraft.banner.stripe_middle.green": "Green Fess",
        // "block.minecraft.banner.stripe_middle.brown": "Brown Fess",
        // "block.minecraft.banner.stripe_middle.blue": "Blue Fess",
        // "block.minecraft.banner.stripe_middle.purple": "Purple Fess",
        // "block.minecraft.banner.stripe_middle.cyan": "Cyan Fess",
        // "block.minecraft.banner.stripe_middle.light_gray": "Light Gray Fess",
        // "block.minecraft.banner.stripe_middle.gray": "Gray Fess",
        // "block.minecraft.banner.stripe_middle.pink": "Pink Fess",
        // "block.minecraft.banner.stripe_middle.lime": "Lime Fess",
        // "block.minecraft.banner.stripe_middle.yellow": "Yellow Fess",
        // "block.minecraft.banner.stripe_middle.light_blue": "Light Blue Fess",
        // "block.minecraft.banner.stripe_middle.magenta": "Magenta Fess",
        // "block.minecraft.banner.stripe_middle.orange": "Orange Fess",
        // "block.minecraft.banner.stripe_middle.white": "White Fess",
        // "block.minecraft.banner.stripe_downright.black": "Black Bend",
        // "block.minecraft.banner.stripe_downright.red": "Red Bend",
        // "block.minecraft.banner.stripe_downright.green": "Green Bend",
        // "block.minecraft.banner.stripe_downright.brown": "Brown Bend",
        // "block.minecraft.banner.stripe_downright.blue": "Blue Bend",
        // "block.minecraft.banner.stripe_downright.purple": "Purple Bend",
        // "block.minecraft.banner.stripe_downright.cyan": "Cyan Bend",
        // "block.minecraft.banner.stripe_downright.light_gray": "Light Gray Bend",
        // "block.minecraft.banner.stripe_downright.gray": "Gray Bend",
        // "block.minecraft.banner.stripe_downright.pink": "Pink Bend",
        // "block.minecraft.banner.stripe_downright.lime": "Lime Bend",
        // "block.minecraft.banner.stripe_downright.yellow": "Yellow Bend",
        // "block.minecraft.banner.stripe_downright.light_blue": "Light Blue Bend",
        // "block.minecraft.banner.stripe_downright.magenta": "Magenta Bend",
        // "block.minecraft.banner.stripe_downright.orange": "Orange Bend",
        // "block.minecraft.banner.stripe_downright.white": "White Bend",
        // "block.minecraft.banner.stripe_downleft.black": "Black Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.red": "Red Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.green": "Green Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.brown": "Brown Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.blue": "Blue Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.purple": "Purple Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.cyan": "Cyan Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.light_gray": "Light Gray Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.gray": "Gray Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.pink": "Pink Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.lime": "Lime Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.yellow": "Yellow Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.light_blue": "Light Blue Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.magenta": "Magenta Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.orange": "Orange Bend Sinister",
        // "block.minecraft.banner.stripe_downleft.white": "White Bend Sinister",
        // "block.minecraft.banner.small_stripes.black": "Black Paly",
        // "block.minecraft.banner.small_stripes.red": "Red Paly",
        // "block.minecraft.banner.small_stripes.green": "Green Paly",
        // "block.minecraft.banner.small_stripes.brown": "Brown Paly",
        // "block.minecraft.banner.small_stripes.blue": "Blue Paly",
        // "block.minecraft.banner.small_stripes.purple": "Purple Paly",
        // "block.minecraft.banner.small_stripes.cyan": "Cyan Paly",
        // "block.minecraft.banner.small_stripes.light_gray": "Light Gray Paly",
        // "block.minecraft.banner.small_stripes.gray": "Gray Paly",
        // "block.minecraft.banner.small_stripes.pink": "Pink Paly",
        // "block.minecraft.banner.small_stripes.lime": "Lime Paly",
        // "block.minecraft.banner.small_stripes.yellow": "Yellow Paly",
        // "block.minecraft.banner.small_stripes.light_blue": "Light Blue Paly",
        // "block.minecraft.banner.small_stripes.magenta": "Magenta Paly",
        // "block.minecraft.banner.small_stripes.orange": "Orange Paly",
        // "block.minecraft.banner.small_stripes.white": "White Paly",
        // "block.minecraft.banner.cross.black": "Black Saltire",
        // "block.minecraft.banner.cross.red": "Red Saltire",
        // "block.minecraft.banner.cross.green": "Green Saltire",
        // "block.minecraft.banner.cross.brown": "Brown Saltire",
        // "block.minecraft.banner.cross.blue": "Blue Saltire",
        // "block.minecraft.banner.cross.purple": "Purple Saltire",
        // "block.minecraft.banner.cross.cyan": "Cyan Saltire",
        // "block.minecraft.banner.cross.light_gray": "Light Gray Saltire",
        // "block.minecraft.banner.cross.gray": "Gray Saltire",
        // "block.minecraft.banner.cross.pink": "Pink Saltire",
        // "block.minecraft.banner.cross.lime": "Lime Saltire",
        // "block.minecraft.banner.cross.yellow": "Yellow Saltire",
        // "block.minecraft.banner.cross.light_blue": "Light Blue Saltire",
        // "block.minecraft.banner.cross.magenta": "Magenta Saltire",
        // "block.minecraft.banner.cross.orange": "Orange Saltire",
        // "block.minecraft.banner.cross.white": "White Saltire",
        // "block.minecraft.banner.triangle_bottom.black": "Black Chevron",
        // "block.minecraft.banner.triangle_bottom.red": "Red Chevron",
        // "block.minecraft.banner.triangle_bottom.green": "Green Chevron",
        // "block.minecraft.banner.triangle_bottom.brown": "Brown Chevron",
        // "block.minecraft.banner.triangle_bottom.blue": "Blue Chevron",
        // "block.minecraft.banner.triangle_bottom.purple": "Purple Chevron",
        // "block.minecraft.banner.triangle_bottom.cyan": "Cyan Chevron",
        // "block.minecraft.banner.triangle_bottom.light_gray": "Light Gray Chevron",
        // "block.minecraft.banner.triangle_bottom.gray": "Gray Chevron",
        // "block.minecraft.banner.triangle_bottom.pink": "Pink Chevron",
        // "block.minecraft.banner.triangle_bottom.lime": "Lime Chevron",
        // "block.minecraft.banner.triangle_bottom.yellow": "Yellow Chevron",
        // "block.minecraft.banner.triangle_bottom.light_blue": "Light Blue Chevron",
        // "block.minecraft.banner.triangle_bottom.magenta": "Magenta Chevron",
        // "block.minecraft.banner.triangle_bottom.orange": "Orange Chevron",
        // "block.minecraft.banner.triangle_bottom.white": "White Chevron",
        // "block.minecraft.banner.triangle_top.black": "Black Inverted Chevron",
        // "block.minecraft.banner.triangle_top.red": "Red Inverted Chevron",
        // "block.minecraft.banner.triangle_top.green": "Green Inverted Chevron",
        // "block.minecraft.banner.triangle_top.brown": "Brown Inverted Chevron",
        // "block.minecraft.banner.triangle_top.blue": "Blue Inverted Chevron",
        // "block.minecraft.banner.triangle_top.purple": "Purple Inverted Chevron",
        // "block.minecraft.banner.triangle_top.cyan": "Cyan Inverted Chevron",
        // "block.minecraft.banner.triangle_top.light_gray": "Light Gray Inverted Chevron",
        // "block.minecraft.banner.triangle_top.gray": "Gray Inverted Chevron",
        // "block.minecraft.banner.triangle_top.pink": "Pink Inverted Chevron",
        // "block.minecraft.banner.triangle_top.lime": "Lime Inverted Chevron",
        // "block.minecraft.banner.triangle_top.yellow": "Yellow Inverted Chevron",
        // "block.minecraft.banner.triangle_top.light_blue": "Light Blue Inverted Chevron",
        // "block.minecraft.banner.triangle_top.magenta": "Magenta Inverted Chevron",
        // "block.minecraft.banner.triangle_top.orange": "Orange Inverted Chevron",
        // "block.minecraft.banner.triangle_top.white": "White Inverted Chevron",
        // "block.minecraft.banner.triangles_bottom.black": "Black Base Indented",
        // "block.minecraft.banner.triangles_bottom.red": "Red Base Indented",
        // "block.minecraft.banner.triangles_bottom.green": "Green Base Indented",
        // "block.minecraft.banner.triangles_bottom.brown": "Brown Base Indented",
        // "block.minecraft.banner.triangles_bottom.blue": "Blue Base Indented",
        // "block.minecraft.banner.triangles_bottom.purple": "Purple Base Indented",
        // "block.minecraft.banner.triangles_bottom.cyan": "Cyan Base Indented",
        // "block.minecraft.banner.triangles_bottom.light_gray": "Light Gray Base Indented",
        // "block.minecraft.banner.triangles_bottom.gray": "Gray Base Indented",
        // "block.minecraft.banner.triangles_bottom.pink": "Pink Base Indented",
        // "block.minecraft.banner.triangles_bottom.lime": "Lime Base Indented",
        // "block.minecraft.banner.triangles_bottom.yellow": "Yellow Base Indented",
        // "block.minecraft.banner.triangles_bottom.light_blue": "Light Blue Base Indented",
        // "block.minecraft.banner.triangles_bottom.magenta": "Magenta Base Indented",
        // "block.minecraft.banner.triangles_bottom.orange": "Orange Base Indented",
        // "block.minecraft.banner.triangles_bottom.white": "White Base Indented",
        // "block.minecraft.banner.triangles_top.black": "Black Chief Indented",
        // "block.minecraft.banner.triangles_top.red": "Red Chief Indented",
        // "block.minecraft.banner.triangles_top.green": "Green Chief Indented",
        // "block.minecraft.banner.triangles_top.brown": "Brown Chief Indented",
        // "block.minecraft.banner.triangles_top.blue": "Blue Chief Indented",
        // "block.minecraft.banner.triangles_top.purple": "Purple Chief Indented",
        // "block.minecraft.banner.triangles_top.cyan": "Cyan Chief Indented",
        // "block.minecraft.banner.triangles_top.light_gray": "Light Gray Chief Indented",
        // "block.minecraft.banner.triangles_top.gray": "Gray Chief Indented",
        // "block.minecraft.banner.triangles_top.pink": "Pink Chief Indented",
        // "block.minecraft.banner.triangles_top.lime": "Lime Chief Indented",
        // "block.minecraft.banner.triangles_top.yellow": "Yellow Chief Indented",
        // "block.minecraft.banner.triangles_top.light_blue": "Light Blue Chief Indented",
        // "block.minecraft.banner.triangles_top.magenta": "Magenta Chief Indented",
        // "block.minecraft.banner.triangles_top.orange": "Orange Chief Indented",
        // "block.minecraft.banner.triangles_top.white": "White Chief Indented",
        // "block.minecraft.banner.diagonal_left.black": "Black Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.red": "Red Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.green": "Green Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.brown": "Brown Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.blue": "Blue Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.purple": "Purple Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.cyan": "Cyan Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.light_gray": "Light Gray Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.gray": "Gray Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.pink": "Pink Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.lime": "Lime Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.yellow": "Yellow Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.light_blue": "Light Blue Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.magenta": "Magenta Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.orange": "Orange Per Bend Sinister",
        // "block.minecraft.banner.diagonal_left.white": "White Per Bend Sinister",
        // "block.minecraft.banner.diagonal_right.black": "Black Per Bend",
        // "block.minecraft.banner.diagonal_right.red": "Red Per Bend",
        // "block.minecraft.banner.diagonal_right.green": "Green Per Bend",
        // "block.minecraft.banner.diagonal_right.brown": "Brown Per Bend",
        // "block.minecraft.banner.diagonal_right.blue": "Blue Per Bend",
        // "block.minecraft.banner.diagonal_right.purple": "Purple Per Bend",
        // "block.minecraft.banner.diagonal_right.cyan": "Cyan Per Bend",
        // "block.minecraft.banner.diagonal_right.light_gray": "Light Gray Per Bend",
        // "block.minecraft.banner.diagonal_right.gray": "Gray Per Bend",
        // "block.minecraft.banner.diagonal_right.pink": "Pink Per Bend",
        // "block.minecraft.banner.diagonal_right.lime": "Lime Per Bend",
        // "block.minecraft.banner.diagonal_right.yellow": "Yellow Per Bend",
        // "block.minecraft.banner.diagonal_right.light_blue": "Light Blue Per Bend",
        // "block.minecraft.banner.diagonal_right.magenta": "Magenta Per Bend",
        // "block.minecraft.banner.diagonal_right.orange": "Orange Per Bend",
        // "block.minecraft.banner.diagonal_right.white": "White Per Bend",
        // "block.minecraft.banner.diagonal_up_left.black": "Black Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.red": "Red Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.green": "Green Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.brown": "Brown Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.blue": "Blue Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.purple": "Purple Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.cyan": "Cyan Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.light_gray": "Light Gray Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.gray": "Gray Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.pink": "Pink Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.lime": "Lime Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.yellow": "Yellow Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.light_blue": "Light Blue Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.magenta": "Magenta Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.orange": "Orange Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_left.white": "White Per Bend Inverted",
        // "block.minecraft.banner.diagonal_up_right.black": "Black Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.red": "Red Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.green": "Green Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.brown": "Brown Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.blue": "Blue Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.purple": "Purple Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.cyan": "Cyan Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.light_gray": "Light Gray Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.gray": "Gray Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.pink": "Pink Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.lime": "Lime Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.yellow": "Yellow Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.light_blue": "Light Blue Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.magenta": "Magenta Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.orange": "Orange Per Bend Sinister Inverted",
        // "block.minecraft.banner.diagonal_up_right.white": "White Per Bend Sinister Inverted",
        // "block.minecraft.banner.circle.black": "Black Roundel",
        // "block.minecraft.banner.circle.red": "Red Roundel",
        // "block.minecraft.banner.circle.green": "Green Roundel",
        // "block.minecraft.banner.circle.brown": "Brown Roundel",
        // "block.minecraft.banner.circle.blue": "Blue Roundel",
        // "block.minecraft.banner.circle.purple": "Purple Roundel",
        // "block.minecraft.banner.circle.cyan": "Cyan Roundel",
        // "block.minecraft.banner.circle.light_gray": "Light Gray Roundel",
        // "block.minecraft.banner.circle.gray": "Gray Roundel",
        // "block.minecraft.banner.circle.pink": "Pink Roundel",
        // "block.minecraft.banner.circle.lime": "Lime Roundel",
        // "block.minecraft.banner.circle.yellow": "Yellow Roundel",
        // "block.minecraft.banner.circle.light_blue": "Light Blue Roundel",
        // "block.minecraft.banner.circle.magenta": "Magenta Roundel",
        // "block.minecraft.banner.circle.orange": "Orange Roundel",
        // "block.minecraft.banner.circle.white": "White Roundel",
        // "block.minecraft.banner.rhombus.black": "Black Lozenge",
        // "block.minecraft.banner.rhombus.red": "Red Lozenge",
        // "block.minecraft.banner.rhombus.green": "Green Lozenge",
        // "block.minecraft.banner.rhombus.brown": "Brown Lozenge",
        // "block.minecraft.banner.rhombus.blue": "Blue Lozenge",
        // "block.minecraft.banner.rhombus.purple": "Purple Lozenge",
        // "block.minecraft.banner.rhombus.cyan": "Cyan Lozenge",
        // "block.minecraft.banner.rhombus.light_gray": "Light Gray Lozenge",
        // "block.minecraft.banner.rhombus.gray": "Gray Lozenge",
        // "block.minecraft.banner.rhombus.pink": "Pink Lozenge",
        // "block.minecraft.banner.rhombus.lime": "Lime Lozenge",
        // "block.minecraft.banner.rhombus.yellow": "Yellow Lozenge",
        // "block.minecraft.banner.rhombus.light_blue": "Light Blue Lozenge",
        // "block.minecraft.banner.rhombus.magenta": "Magenta Lozenge",
        // "block.minecraft.banner.rhombus.orange": "Orange Lozenge",
        // "block.minecraft.banner.rhombus.white": "White Lozenge",
        // "block.minecraft.banner.half_vertical.black": "Black Per Pale",
        // "block.minecraft.banner.half_vertical.red": "Red Per Pale",
        // "block.minecraft.banner.half_vertical.green": "Green Per Pale",
        // "block.minecraft.banner.half_vertical.brown": "Brown Per Pale",
        // "block.minecraft.banner.half_vertical.blue": "Blue Per Pale",
        // "block.minecraft.banner.half_vertical.purple": "Purple Per Pale",
        // "block.minecraft.banner.half_vertical.cyan": "Cyan Per Pale",
        // "block.minecraft.banner.half_vertical.light_gray": "Light Gray Per Pale",
        // "block.minecraft.banner.half_vertical.gray": "Gray Per Pale",
        // "block.minecraft.banner.half_vertical.pink": "Pink Per Pale",
        // "block.minecraft.banner.half_vertical.lime": "Lime Per Pale",
        // "block.minecraft.banner.half_vertical.yellow": "Yellow Per Pale",
        // "block.minecraft.banner.half_vertical.light_blue": "Light Blue Per Pale",
        // "block.minecraft.banner.half_vertical.magenta": "Magenta Per Pale",
        // "block.minecraft.banner.half_vertical.orange": "Orange Per Pale",
        // "block.minecraft.banner.half_vertical.white": "White Per Pale",
        // "block.minecraft.banner.half_horizontal.black": "Black Per Fess",
        // "block.minecraft.banner.half_horizontal.red": "Red Per Fess",
        // "block.minecraft.banner.half_horizontal.green": "Green Per Fess",
        // "block.minecraft.banner.half_horizontal.brown": "Brown Per Fess",
        // "block.minecraft.banner.half_horizontal.blue": "Blue Per Fess",
        // "block.minecraft.banner.half_horizontal.purple": "Purple Per Fess",
        // "block.minecraft.banner.half_horizontal.cyan": "Cyan Per Fess",
        // "block.minecraft.banner.half_horizontal.light_gray": "Light Gray Per Fess",
        // "block.minecraft.banner.half_horizontal.gray": "Gray Per Fess",
        // "block.minecraft.banner.half_horizontal.pink": "Pink Per Fess",
        // "block.minecraft.banner.half_horizontal.lime": "Lime Per Fess",
        // "block.minecraft.banner.half_horizontal.yellow": "Yellow Per Fess",
        // "block.minecraft.banner.half_horizontal.light_blue": "Light Blue Per Fess",
        // "block.minecraft.banner.half_horizontal.magenta": "Magenta Per Fess",
        // "block.minecraft.banner.half_horizontal.orange": "Orange Per Fess",
        // "block.minecraft.banner.half_horizontal.white": "White Per Fess",
        // "block.minecraft.banner.half_vertical_right.black": "Black Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.red": "Red Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.green": "Green Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.brown": "Brown Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.blue": "Blue Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.purple": "Purple Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.cyan": "Cyan Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.light_gray": "Light Gray Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.gray": "Gray Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.pink": "Pink Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.lime": "Lime Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.yellow": "Yellow Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.light_blue": "Light Blue Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.magenta": "Magenta Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.orange": "Orange Per Pale Inverted",
        // "block.minecraft.banner.half_vertical_right.white": "White Per Pale Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.black": "Black Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.red": "Red Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.green": "Green Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.brown": "Brown Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.blue": "Blue Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.purple": "Purple Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.cyan": "Cyan Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.light_gray": "Light Gray Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.gray": "Gray Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.pink": "Pink Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.lime": "Lime Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.yellow": "Yellow Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.light_blue": "Light Blue Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.magenta": "Magenta Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.orange": "Orange Per Fess Inverted",
        // "block.minecraft.banner.half_horizontal_bottom.white": "White Per Fess Inverted",
        // "block.minecraft.banner.creeper.black": "Black Creeper Charge",
        // "block.minecraft.banner.creeper.red": "Red Creeper Charge",
        // "block.minecraft.banner.creeper.green": "Green Creeper Charge",
        // "block.minecraft.banner.creeper.brown": "Brown Creeper Charge",
        // "block.minecraft.banner.creeper.blue": "Blue Creeper Charge",
        // "block.minecraft.banner.creeper.purple": "Purple Creeper Charge",
        // "block.minecraft.banner.creeper.cyan": "Cyan Creeper Charge",
        // "block.minecraft.banner.creeper.light_gray": "Light Gray Creeper Charge",
        // "block.minecraft.banner.creeper.gray": "Gray Creeper Charge",
        // "block.minecraft.banner.creeper.pink": "Pink Creeper Charge",
        // "block.minecraft.banner.creeper.lime": "Lime Creeper Charge",
        // "block.minecraft.banner.creeper.yellow": "Yellow Creeper Charge",
        // "block.minecraft.banner.creeper.light_blue": "Light Blue Creeper Charge",
        // "block.minecraft.banner.creeper.magenta": "Magenta Creeper Charge",
        // "block.minecraft.banner.creeper.orange": "Orange Creeper Charge",
        // "block.minecraft.banner.creeper.white": "White Creeper Charge",
        // "block.minecraft.banner.bricks.black": "Black Field Masoned",
        // "block.minecraft.banner.bricks.red": "Red Field Masoned",
        // "block.minecraft.banner.bricks.green": "Green Field Masoned",
        // "block.minecraft.banner.bricks.brown": "Brown Field Masoned",
        // "block.minecraft.banner.bricks.blue": "Blue Field Masoned",
        // "block.minecraft.banner.bricks.purple": "Purple Field Masoned",
        // "block.minecraft.banner.bricks.cyan": "Cyan Field Masoned",
        // "block.minecraft.banner.bricks.light_gray": "Light Gray Field Masoned",
        // "block.minecraft.banner.bricks.gray": "Gray Field Masoned",
        // "block.minecraft.banner.bricks.pink": "Pink Field Masoned",
        // "block.minecraft.banner.bricks.lime": "Lime Field Masoned",
        // "block.minecraft.banner.bricks.yellow": "Yellow Field Masoned",
        // "block.minecraft.banner.bricks.light_blue": "Light Blue Field Masoned",
        // "block.minecraft.banner.bricks.magenta": "Magenta Field Masoned",
        // "block.minecraft.banner.bricks.orange": "Orange Field Masoned",
        // "block.minecraft.banner.bricks.white": "White Field Masoned",
        // "block.minecraft.banner.gradient.black": "Black Gradient",
        // "block.minecraft.banner.gradient.red": "Red Gradient",
        // "block.minecraft.banner.gradient.green": "Green Gradient",
        // "block.minecraft.banner.gradient.brown": "Brown Gradient",
        // "block.minecraft.banner.gradient.blue": "Blue Gradient",
        // "block.minecraft.banner.gradient.purple": "Purple Gradient",
        // "block.minecraft.banner.gradient.cyan": "Cyan Gradient",
        // "block.minecraft.banner.gradient.light_gray": "Light Gray Gradient",
        // "block.minecraft.banner.gradient.gray": "Gray Gradient",
        // "block.minecraft.banner.gradient.pink": "Pink Gradient",
        // "block.minecraft.banner.gradient.lime": "Lime Gradient",
        // "block.minecraft.banner.gradient.yellow": "Yellow Gradient",
        // "block.minecraft.banner.gradient.light_blue": "Light Blue Gradient",
        // "block.minecraft.banner.gradient.magenta": "Magenta Gradient",
        // "block.minecraft.banner.gradient.orange": "Orange Gradient",
        // "block.minecraft.banner.gradient.white": "White Gradient",
        // "block.minecraft.banner.gradient_up.black": "Black Base Gradient",
        // "block.minecraft.banner.gradient_up.red": "Red Base Gradient",
        // "block.minecraft.banner.gradient_up.green": "Green Base Gradient",
        // "block.minecraft.banner.gradient_up.brown": "Brown Base Gradient",
        // "block.minecraft.banner.gradient_up.blue": "Blue Base Gradient",
        // "block.minecraft.banner.gradient_up.purple": "Purple Base Gradient",
        // "block.minecraft.banner.gradient_up.cyan": "Cyan Base Gradient",
        // "block.minecraft.banner.gradient_up.light_gray": "Light Gray Base Gradient",
        // "block.minecraft.banner.gradient_up.gray": "Gray Base Gradient",
        // "block.minecraft.banner.gradient_up.pink": "Pink Base Gradient",
        // "block.minecraft.banner.gradient_up.lime": "Lime Base Gradient",
        // "block.minecraft.banner.gradient_up.yellow": "Yellow Base Gradient",
        // "block.minecraft.banner.gradient_up.light_blue": "Light Blue Base Gradient",
        // "block.minecraft.banner.gradient_up.magenta": "Magenta Base Gradient",
        // "block.minecraft.banner.gradient_up.orange": "Orange Base Gradient",
        // "block.minecraft.banner.gradient_up.white": "White Base Gradient",
        // "block.minecraft.banner.skull.black": "Black Skull Charge",
        // "block.minecraft.banner.skull.red": "Red Skull Charge",
        // "block.minecraft.banner.skull.green": "Green Skull Charge",
        // "block.minecraft.banner.skull.brown": "Brown Skull Charge",
        // "block.minecraft.banner.skull.blue": "Blue Skull Charge",
        // "block.minecraft.banner.skull.purple": "Purple Skull Charge",
        // "block.minecraft.banner.skull.cyan": "Cyan Skull Charge",
        // "block.minecraft.banner.skull.light_gray": "Light Gray Skull Charge",
        // "block.minecraft.banner.skull.gray": "Gray Skull Charge",
        // "block.minecraft.banner.skull.pink": "Pink Skull Charge",
        // "block.minecraft.banner.skull.lime": "Lime Skull Charge",
        // "block.minecraft.banner.skull.yellow": "Yellow Skull Charge",
        // "block.minecraft.banner.skull.light_blue": "Light Blue Skull Charge",
        // "block.minecraft.banner.skull.magenta": "Magenta Skull Charge",
        // "block.minecraft.banner.skull.orange": "Orange Skull Charge",
        // "block.minecraft.banner.skull.white": "White Skull Charge",
        // "block.minecraft.banner.flower.black": "Black Flower Charge",
        // "block.minecraft.banner.flower.red": "Red Flower Charge",
        // "block.minecraft.banner.flower.green": "Green Flower Charge",
        // "block.minecraft.banner.flower.brown": "Brown Flower Charge",
        // "block.minecraft.banner.flower.blue": "Blue Flower Charge",
        // "block.minecraft.banner.flower.purple": "Purple Flower Charge",
        // "block.minecraft.banner.flower.cyan": "Cyan Flower Charge",
        // "block.minecraft.banner.flower.light_gray": "Light Gray Flower Charge",
        // "block.minecraft.banner.flower.gray": "Gray Flower Charge",
        // "block.minecraft.banner.flower.pink": "Pink Flower Charge",
        // "block.minecraft.banner.flower.lime": "Lime Flower Charge",
        // "block.minecraft.banner.flower.yellow": "Yellow Flower Charge",
        // "block.minecraft.banner.flower.light_blue": "Light Blue Flower Charge",
        // "block.minecraft.banner.flower.magenta": "Magenta Flower Charge",
        // "block.minecraft.banner.flower.orange": "Orange Flower Charge",
        // "block.minecraft.banner.flower.white": "White Flower Charge",
        // "block.minecraft.banner.border.black": "Black Bordure",
        // "block.minecraft.banner.border.red": "Red Bordure",
        // "block.minecraft.banner.border.green": "Green Bordure",
        // "block.minecraft.banner.border.brown": "Brown Bordure",
        // "block.minecraft.banner.border.blue": "Blue Bordure",
        // "block.minecraft.banner.border.purple": "Purple Bordure",
        // "block.minecraft.banner.border.cyan": "Cyan Bordure",
        // "block.minecraft.banner.border.light_gray": "Light Gray Bordure",
        // "block.minecraft.banner.border.gray": "Gray Bordure",
        // "block.minecraft.banner.border.pink": "Pink Bordure",
        // "block.minecraft.banner.border.lime": "Lime Bordure",
        // "block.minecraft.banner.border.yellow": "Yellow Bordure",
        // "block.minecraft.banner.border.light_blue": "Light Blue Bordure",
        // "block.minecraft.banner.border.magenta": "Magenta Bordure",
        // "block.minecraft.banner.border.orange": "Orange Bordure",
        // "block.minecraft.banner.border.white": "White Bordure",
        // "block.minecraft.banner.curly_border.black": "Black Bordure Indented",
        // "block.minecraft.banner.curly_border.red": "Red Bordure Indented",
        // "block.minecraft.banner.curly_border.green": "Green Bordure Indented",
        // "block.minecraft.banner.curly_border.brown": "Brown Bordure Indented",
        // "block.minecraft.banner.curly_border.blue": "Blue Bordure Indented",
        // "block.minecraft.banner.curly_border.purple": "Purple Bordure Indented",
        // "block.minecraft.banner.curly_border.cyan": "Cyan Bordure Indented",
        // "block.minecraft.banner.curly_border.light_gray": "Light Gray Bordure Indented",
        // "block.minecraft.banner.curly_border.gray": "Gray Bordure Indented",
        // "block.minecraft.banner.curly_border.pink": "Pink Bordure Indented",
        // "block.minecraft.banner.curly_border.lime": "Lime Bordure Indented",
        // "block.minecraft.banner.curly_border.yellow": "Yellow Bordure Indented",
        // "block.minecraft.banner.curly_border.light_blue": "Light Blue Bordure Indented",
        // "block.minecraft.banner.curly_border.magenta": "Magenta Bordure Indented",
        // "block.minecraft.banner.curly_border.orange": "Orange Bordure Indented",
        // "block.minecraft.banner.curly_border.white": "White Bordure Indented",
        // "block.minecraft.banner.mojang.black": "Black Thing",
        // "block.minecraft.banner.mojang.red": "Red Thing",
        // "block.minecraft.banner.mojang.green": "Green Thing",
        // "block.minecraft.banner.mojang.brown": "Brown Thing",
        // "block.minecraft.banner.mojang.blue": "Blue Thing",
        // "block.minecraft.banner.mojang.purple": "Purple Thing",
        // "block.minecraft.banner.mojang.cyan": "Cyan Thing",
        // "block.minecraft.banner.mojang.light_gray": "Light Gray Thing",
        // "block.minecraft.banner.mojang.gray": "Gray Thing",
        // "block.minecraft.banner.mojang.pink": "Pink Thing",
        // "block.minecraft.banner.mojang.lime": "Lime Thing",
        // "block.minecraft.banner.mojang.yellow": "Yellow Thing",
        // "block.minecraft.banner.mojang.light_blue": "Light Blue Thing",
        // "block.minecraft.banner.mojang.magenta": "Magenta Thing",
        // "block.minecraft.banner.mojang.orange": "Orange Thing",
        // "block.minecraft.banner.mojang.white": "White Thing",
        // "block.minecraft.banner.straight_cross.black": "Black Cross",
        // "block.minecraft.banner.straight_cross.red": "Red Cross",
        // "block.minecraft.banner.straight_cross.green": "Green Cross",
        // "block.minecraft.banner.straight_cross.brown": "Brown Cross",
        // "block.minecraft.banner.straight_cross.blue": "Blue Cross",
        // "block.minecraft.banner.straight_cross.purple": "Purple Cross",
        // "block.minecraft.banner.straight_cross.cyan": "Cyan Cross",
        // "block.minecraft.banner.straight_cross.light_gray": "Light Gray Cross",
        // "block.minecraft.banner.straight_cross.gray": "Gray Cross",
        // "block.minecraft.banner.straight_cross.pink": "Pink Cross",
        // "block.minecraft.banner.straight_cross.lime": "Lime Cross",
        // "block.minecraft.banner.straight_cross.yellow": "Yellow Cross",
        // "block.minecraft.banner.straight_cross.light_blue": "Light Blue Cross",
        // "block.minecraft.banner.straight_cross.magenta": "Magenta Cross",
        // "block.minecraft.banner.straight_cross.orange": "Orange Cross",
        // "block.minecraft.banner.straight_cross.white": "White Cross",
        // "block.minecraft.banner.globe.black": "Black Globe",
        // "block.minecraft.banner.globe.red": "Red Globe",
        // "block.minecraft.banner.globe.green": "Green Globe",
        // "block.minecraft.banner.globe.brown": "Brown Globe",
        // "block.minecraft.banner.globe.blue": "Blue Globe",
        // "block.minecraft.banner.globe.purple": "Purple Globe",
        // "block.minecraft.banner.globe.cyan": "Cyan Globe",
        // "block.minecraft.banner.globe.light_gray": "Light Gray Globe",
        // "block.minecraft.banner.globe.gray": "Gray Globe",
        // "block.minecraft.banner.globe.pink": "Pink Globe",
        // "block.minecraft.banner.globe.lime": "Lime Globe",
        // "block.minecraft.banner.globe.yellow": "Yellow Globe",
        // "block.minecraft.banner.globe.light_blue": "Light Blue Globe",
        // "block.minecraft.banner.globe.magenta": "Magenta Globe",
        // "block.minecraft.banner.globe.orange": "Orange Globe",
        // "block.minecraft.banner.globe.white": "White Globe",
        // "block.minecraft.banner.piglin.black": "Black Snout",
        // "block.minecraft.banner.piglin.red": "Red Snout",
        // "block.minecraft.banner.piglin.green": "Green Snout",
        // "block.minecraft.banner.piglin.brown": "Brown Snout",
        // "block.minecraft.banner.piglin.blue": "Blue Snout",
        // "block.minecraft.banner.piglin.purple": "Purple Snout",
        // "block.minecraft.banner.piglin.cyan": "Cyan Snout",
        // "block.minecraft.banner.piglin.light_gray": "Light Gray Snout",
        // "block.minecraft.banner.piglin.gray": "Gray Snout",
        // "block.minecraft.banner.piglin.pink": "Pink Snout",
        // "block.minecraft.banner.piglin.lime": "Lime Snout",
        // "block.minecraft.banner.piglin.yellow": "Yellow Snout",
        // "block.minecraft.banner.piglin.light_blue": "Light Blue Snout",
        // "block.minecraft.banner.piglin.magenta": "Magenta Snout",
        // "block.minecraft.banner.piglin.orange": "Orange Snout",
        // "block.minecraft.banner.piglin.white": "White Snout",
        "block": { }

        // "item.minecraft.name_tag": "Name Tag",
        // "item.minecraft.lead": "Lead",
        // "item.minecraft.iron_shovel": "Iron Shovel",
        // "item.minecraft.iron_pickaxe": "Iron Pickaxe",
        // "item.minecraft.iron_axe": "Iron Axe",
        // "item.minecraft.flint_and_steel": "Flint and Steel",
        // "item.minecraft.apple": "Apple",
        // "item.minecraft.cookie": "Cookie",
        // "item.minecraft.bow": "Bow",
        // "item.minecraft.bundle": "Bundle",
        // "item.minecraft.bundle.fullness": "%s/%s",
        // "item.minecraft.arrow": "Arrow",
        // "item.minecraft.spectral_arrow": "Spectral Arrow",
        // "item.minecraft.tipped_arrow": "Tipped Arrow",
        // "item.minecraft.dried_kelp": "Dried Kelp",
        // "item.minecraft.coal": "Coal",
        // "item.minecraft.charcoal": "Charcoal",
        // "item.minecraft.raw_copper": "Raw Copper",
        // "item.minecraft.raw_iron": "Raw Iron",
        // "item.minecraft.raw_gold": "Raw Gold",
        // "item.minecraft.diamond": "Diamond",
        // "item.minecraft.emerald": "Emerald",
        // "item.minecraft.iron_ingot": "Iron Ingot",
        // "item.minecraft.copper_ingot": "Copper Ingot",
        // "item.minecraft.gold_ingot": "Gold Ingot",
        // "item.minecraft.iron_sword": "Iron Sword",
        // "item.minecraft.wooden_sword": "Wooden Sword",
        // "item.minecraft.wooden_shovel": "Wooden Shovel",
        // "item.minecraft.wooden_pickaxe": "Wooden Pickaxe",
        // "item.minecraft.wooden_axe": "Wooden Axe",
        // "item.minecraft.stone_sword": "Stone Sword",
        // "item.minecraft.stone_shovel": "Stone Shovel",
        // "item.minecraft.stone_pickaxe": "Stone Pickaxe",
        // "item.minecraft.stone_axe": "Stone Axe",
        // "item.minecraft.diamond_sword": "Diamond Sword",
        // "item.minecraft.diamond_shovel": "Diamond Shovel",
        // "item.minecraft.diamond_pickaxe": "Diamond Pickaxe",
        // "item.minecraft.diamond_axe": "Diamond Axe",
        // "item.minecraft.stick": "Stick",
        // "item.minecraft.bowl": "Bowl",
        // "item.minecraft.mushroom_stew": "Mushroom Stew",
        // "item.minecraft.golden_sword": "Golden Sword",
        // "item.minecraft.golden_shovel": "Golden Shovel",
        // "item.minecraft.golden_pickaxe": "Golden Pickaxe",
        // "item.minecraft.golden_axe": "Golden Axe",
        // "item.minecraft.string": "String",
        // "item.minecraft.feather": "Feather",
        // "item.minecraft.gunpowder": "Gunpowder",
        // "item.minecraft.wooden_hoe": "Wooden Hoe",
        // "item.minecraft.stone_hoe": "Stone Hoe",
        // "item.minecraft.iron_hoe": "Iron Hoe",
        // "item.minecraft.diamond_hoe": "Diamond Hoe",
        // "item.minecraft.golden_hoe": "Golden Hoe",
        // "item.minecraft.wheat_seeds": "Wheat Seeds",
        // "item.minecraft.pumpkin_seeds": "Pumpkin Seeds",
        // "item.minecraft.melon_seeds": "Melon Seeds",
        // "item.minecraft.melon_slice": "Melon Slice",
        // "item.minecraft.wheat": "Wheat",
        // "item.minecraft.bread": "Bread",
        // "item.minecraft.leather_helmet": "Leather Cap",
        // "item.minecraft.leather_chestplate": "Leather Tunic",
        // "item.minecraft.leather_leggings": "Leather Pants",
        // "item.minecraft.leather_boots": "Leather Boots",
        // "item.minecraft.chainmail_helmet": "Chainmail Helmet",
        // "item.minecraft.chainmail_chestplate": "Chainmail Chestplate",
        // "item.minecraft.chainmail_leggings": "Chainmail Leggings",
        // "item.minecraft.chainmail_boots": "Chainmail Boots",
        // "item.minecraft.iron_helmet": "Iron Helmet",
        // "item.minecraft.iron_chestplate": "Iron Chestplate",
        // "item.minecraft.iron_leggings": "Iron Leggings",
        // "item.minecraft.iron_boots": "Iron Boots",
        // "item.minecraft.diamond_helmet": "Diamond Helmet",
        // "item.minecraft.diamond_chestplate": "Diamond Chestplate",
        // "item.minecraft.diamond_leggings": "Diamond Leggings",
        // "item.minecraft.diamond_boots": "Diamond Boots",
        // "item.minecraft.golden_helmet": "Golden Helmet",
        // "item.minecraft.golden_chestplate": "Golden Chestplate",
        // "item.minecraft.golden_leggings": "Golden Leggings",
        // "item.minecraft.golden_boots": "Golden Boots",
        // "item.minecraft.flint": "Flint",
        // "item.minecraft.porkchop": "Raw Porkchop",
        // "item.minecraft.cooked_porkchop": "Cooked Porkchop",
        // "item.minecraft.chicken": "Raw Chicken",
        // "item.minecraft.cooked_chicken": "Cooked Chicken",
        // "item.minecraft.mutton": "Raw Mutton",
        // "item.minecraft.cooked_mutton": "Cooked Mutton",
        // "item.minecraft.rabbit": "Raw Rabbit",
        // "item.minecraft.cooked_rabbit": "Cooked Rabbit",
        // "item.minecraft.rabbit_stew": "Rabbit Stew",
        // "item.minecraft.rabbit_foot": "Rabbit's Foot",
        // "item.minecraft.rabbit_hide": "Rabbit Hide",
        // "item.minecraft.beef": "Raw Beef",
        // "item.minecraft.cooked_beef": "Steak",
        // "item.minecraft.painting": "Painting",
        // "item.minecraft.item_frame": "Item Frame",
        // "item.minecraft.golden_apple": "Golden Apple",
        // "item.minecraft.enchanted_golden_apple": "Enchanted Golden Apple",
        // "item.minecraft.sign": "Sign",
        // "item.minecraft.bucket": "Bucket",
        // "item.minecraft.water_bucket": "Water Bucket",
        // "item.minecraft.lava_bucket": "Lava Bucket",
        // "item.minecraft.pufferfish_bucket": "Bucket of Pufferfish",
        // "item.minecraft.salmon_bucket": "Bucket of Salmon",
        // "item.minecraft.cod_bucket": "Bucket of Cod",
        // "item.minecraft.tropical_fish_bucket": "Bucket of Tropical Fish",
        // "item.minecraft.powder_snow_bucket": "Powder Snow Bucket",
        // "item.minecraft.axolotl_bucket": "Bucket of Axolotl",
        // "item.minecraft.minecart": "Minecart",
        // "item.minecraft.saddle": "Saddle",
        // "item.minecraft.redstone": "Redstone Dust",
        // "item.minecraft.snowball": "Snowball",
        // "item.minecraft.oak_boat": "Oak Boat",
        // "item.minecraft.spruce_boat": "Spruce Boat",
        // "item.minecraft.birch_boat": "Birch Boat",
        // "item.minecraft.jungle_boat": "Jungle Boat",
        // "item.minecraft.acacia_boat": "Acacia Boat",
        // "item.minecraft.dark_oak_boat": "Dark Oak Boat",
        // "item.minecraft.leather": "Leather",
        // "item.minecraft.milk_bucket": "Milk Bucket",
        // "item.minecraft.brick": "Brick",
        // "item.minecraft.clay_ball": "Clay Ball",
        // "item.minecraft.paper": "Paper",
        // "item.minecraft.book": "Book",
        // "item.minecraft.slime_ball": "Slimeball",
        // "item.minecraft.chest_minecart": "Minecart with Chest",
        // "item.minecraft.furnace_minecart": "Minecart with Furnace",
        // "item.minecraft.tnt_minecart": "Minecart with TNT",
        // "item.minecraft.hopper_minecart": "Minecart with Hopper",
        // "item.minecraft.command_block_minecart": "Minecart with Command Block",
        // "item.minecraft.egg": "Egg",
        // "item.minecraft.compass": "Compass",
        // "item.minecraft.fishing_rod": "Fishing Rod",
        // "item.minecraft.clock": "Clock",
        // "item.minecraft.glowstone_dust": "Glowstone Dust",
        // "item.minecraft.cod": "Raw Cod",
        // "item.minecraft.salmon": "Raw Salmon",
        // "item.minecraft.pufferfish": "Pufferfish",
        // "item.minecraft.tropical_fish": "Tropical Fish",
        // "item.minecraft.cooked_cod": "Cooked Cod",
        // "item.minecraft.cooked_salmon": "Cooked Salmon",
        // "item.minecraft.music_disc_13": "Music Disc",
        // "item.minecraft.music_disc_cat": "Music Disc",
        // "item.minecraft.music_disc_blocks": "Music Disc",
        // "item.minecraft.music_disc_chirp": "Music Disc",
        // "item.minecraft.music_disc_far": "Music Disc",
        // "item.minecraft.music_disc_mall": "Music Disc",
        // "item.minecraft.music_disc_mellohi": "Music Disc",
        // "item.minecraft.music_disc_stal": "Music Disc",
        // "item.minecraft.music_disc_strad": "Music Disc",
        // "item.minecraft.music_disc_ward": "Music Disc",
        // "item.minecraft.music_disc_11": "Music Disc",
        // "item.minecraft.music_disc_wait": "Music Disc",
        // "item.minecraft.music_disc_pigstep": "Music Disc",
        // "item.minecraft.music_disc_otherside": "Music Disc",
        // "item.minecraft.music_disc_13.desc": "C418 - 13",
        // "item.minecraft.music_disc_cat.desc": "C418 - cat",
        // "item.minecraft.music_disc_blocks.desc": "C418 - blocks",
        // "item.minecraft.music_disc_chirp.desc": "C418 - chirp",
        // "item.minecraft.music_disc_far.desc": "C418 - far",
        // "item.minecraft.music_disc_mall.desc": "C418 - mall",
        // "item.minecraft.music_disc_mellohi.desc": "C418 - mellohi",
        // "item.minecraft.music_disc_stal.desc": "C418 - stal",
        // "item.minecraft.music_disc_strad.desc": "C418 - strad",
        // "item.minecraft.music_disc_ward.desc": "C418 - ward",
        // "item.minecraft.music_disc_11.desc": "C418 - 11",
        // "item.minecraft.music_disc_wait.desc": "C418 - wait",
        // "item.minecraft.music_disc_pigstep.desc": "Lena Raine - Pigstep",
        // "item.minecraft.music_disc_otherside.desc": "Lena Raine - otherside",
        // "item.minecraft.bone": "Bone",
        // "item.minecraft.ink_sac": "Ink Sac",
        // "item.minecraft.red_dye": "Red Dye",
        // "item.minecraft.green_dye": "Green Dye",
        // "item.minecraft.cocoa_beans": "Cocoa Beans",
        // "item.minecraft.lapis_lazuli": "Lapis Lazuli",
        // "item.minecraft.purple_dye": "Purple Dye",
        // "item.minecraft.cyan_dye": "Cyan Dye",
        // "item.minecraft.light_gray_dye": "Light Gray Dye",
        // "item.minecraft.gray_dye": "Gray Dye",
        // "item.minecraft.pink_dye": "Pink Dye",
        // "item.minecraft.lime_dye": "Lime Dye",
        // "item.minecraft.yellow_dye": "Yellow Dye",
        // "item.minecraft.light_blue_dye": "Light Blue Dye",
        // "item.minecraft.magenta_dye": "Magenta Dye",
        // "item.minecraft.orange_dye": "Orange Dye",
        // "item.minecraft.bone_meal": "Bone Meal",
        // "item.minecraft.blue_dye": "Blue Dye",
        // "item.minecraft.black_dye": "Black Dye",
        // "item.minecraft.brown_dye": "Brown Dye",
        // "item.minecraft.white_dye": "White Dye",
        // "item.minecraft.sugar": "Sugar",
        // "item.minecraft.amethyst_shard": "Amethyst Shard",
        // "item.minecraft.spyglass": "Spyglass",
        // "item.minecraft.glow_berries": "Glow Berries",
        // "item.minecraft.filled_map": "Map",
        // "item.minecraft.shears": "Shears",
        // "item.minecraft.rotten_flesh": "Rotten Flesh",
        // "item.minecraft.ender_pearl": "Ender Pearl",
        // "item.minecraft.blaze_rod": "Blaze Rod",
        // "item.minecraft.ghast_tear": "Ghast Tear",
        // "item.minecraft.nether_wart": "Nether Wart",
        // "item.minecraft.potion": "Potion",
        // "item.minecraft.splash_potion": "Splash Potion",
        // "item.minecraft.lingering_potion": "Lingering Potion",
        // "item.minecraft.end_crystal": "End Crystal",
        // "item.minecraft.gold_nugget": "Gold Nugget",
        // "item.minecraft.glass_bottle": "Glass Bottle",
        // "item.minecraft.spider_eye": "Spider Eye",
        // "item.minecraft.fermented_spider_eye": "Fermented Spider Eye",
        // "item.minecraft.blaze_powder": "Blaze Powder",
        // "item.minecraft.magma_cream": "Magma Cream",
        // "item.minecraft.cauldron": "Cauldron",
        // "item.minecraft.brewing_stand": "Brewing Stand",
        // "item.minecraft.ender_eye": "Eye of Ender",
        // "item.minecraft.glistering_melon_slice": "Glistering Melon Slice",
        // "item.minecraft.axolotl_spawn_egg": "Axolotl Spawn Egg",
        // "item.minecraft.bat_spawn_egg": "Bat Spawn Egg",
        // "item.minecraft.bee_spawn_egg": "Bee Spawn Egg",
        // "item.minecraft.blaze_spawn_egg": "Blaze Spawn Egg",
        // "item.minecraft.cat_spawn_egg": "Cat Spawn Egg",
        // "item.minecraft.cave_spider_spawn_egg": "Cave Spider Spawn Egg",
        // "item.minecraft.chicken_spawn_egg": "Chicken Spawn Egg",
        // "item.minecraft.cod_spawn_egg": "Cod Spawn Egg",
        // "item.minecraft.cow_spawn_egg": "Cow Spawn Egg",
        // "item.minecraft.creeper_spawn_egg": "Creeper Spawn Egg",
        // "item.minecraft.dolphin_spawn_egg": "Dolphin Spawn Egg",
        // "item.minecraft.donkey_spawn_egg": "Donkey Spawn Egg",
        // "item.minecraft.drowned_spawn_egg": "Drowned Spawn Egg",
        // "item.minecraft.elder_guardian_spawn_egg": "Elder Guardian Spawn Egg",
        // "item.minecraft.enderman_spawn_egg": "Enderman Spawn Egg",
        // "item.minecraft.endermite_spawn_egg": "Endermite Spawn Egg",
        // "item.minecraft.evoker_spawn_egg": "Evoker Spawn Egg",
        // "item.minecraft.ghast_spawn_egg": "Ghast Spawn Egg",
        // "item.minecraft.glow_squid_spawn_egg": "Glow Squid Spawn Egg",
        // "item.minecraft.guardian_spawn_egg": "Guardian Spawn Egg",
        // "item.minecraft.hoglin_spawn_egg": "Hoglin Spawn Egg",
        // "item.minecraft.horse_spawn_egg": "Horse Spawn Egg",
        // "item.minecraft.husk_spawn_egg": "Husk Spawn Egg",
        // "item.minecraft.ravager_spawn_egg": "Ravager Spawn Egg",
        // "item.minecraft.llama_spawn_egg": "Llama Spawn Egg",
        // "item.minecraft.magma_cube_spawn_egg": "Magma Cube Spawn Egg",
        // "item.minecraft.mooshroom_spawn_egg": "Mooshroom Spawn Egg",
        // "item.minecraft.mule_spawn_egg": "Mule Spawn Egg",
        // "item.minecraft.ocelot_spawn_egg": "Ocelot Spawn Egg",
        // "item.minecraft.panda_spawn_egg": "Panda Spawn Egg",
        // "item.minecraft.parrot_spawn_egg": "Parrot Spawn Egg",
        // "item.minecraft.pig_spawn_egg": "Pig Spawn Egg",
        // "item.minecraft.piglin_spawn_egg": "Piglin Spawn Egg",
        // "item.minecraft.piglin_brute_spawn_egg": "Piglin Brute Spawn Egg",
        // "item.minecraft.pillager_spawn_egg": "Pillager Spawn Egg",
        // "item.minecraft.phantom_spawn_egg": "Phantom Spawn Egg",
        // "item.minecraft.polar_bear_spawn_egg": "Polar Bear Spawn Egg",
        // "item.minecraft.pufferfish_spawn_egg": "Pufferfish Spawn Egg",
        // "item.minecraft.rabbit_spawn_egg": "Rabbit Spawn Egg",
        // "item.minecraft.fox_spawn_egg": "Fox Spawn Egg",
        // "item.minecraft.salmon_spawn_egg": "Salmon Spawn Egg",
        // "item.minecraft.sheep_spawn_egg": "Sheep Spawn Egg",
        // "item.minecraft.shulker_spawn_egg": "Shulker Spawn Egg",
        // "item.minecraft.silverfish_spawn_egg": "Silverfish Spawn Egg",
        // "item.minecraft.skeleton_spawn_egg": "Skeleton Spawn Egg",
        // "item.minecraft.skeleton_horse_spawn_egg": "Skeleton Horse Spawn Egg",
        // "item.minecraft.slime_spawn_egg": "Slime Spawn Egg",
        // "item.minecraft.spider_spawn_egg": "Spider Spawn Egg",
        // "item.minecraft.squid_spawn_egg": "Squid Spawn Egg",
        // "item.minecraft.stray_spawn_egg": "Stray Spawn Egg",
        // "item.minecraft.strider_spawn_egg": "Strider Spawn Egg",
        // "item.minecraft.trader_llama_spawn_egg": "Trader Llama Spawn Egg",
        // "item.minecraft.tropical_fish_spawn_egg": "Tropical Fish Spawn Egg",
        // "item.minecraft.turtle_spawn_egg": "Turtle Spawn Egg",
        // "item.minecraft.vex_spawn_egg": "Vex Spawn Egg",
        // "item.minecraft.villager_spawn_egg": "Villager Spawn Egg",
        // "item.minecraft.wandering_trader_spawn_egg": "Wandering Trader Spawn Egg",
        // "item.minecraft.vindicator_spawn_egg": "Vindicator Spawn Egg",
        // "item.minecraft.witch_spawn_egg": "Witch Spawn Egg",
        // "item.minecraft.wither_skeleton_spawn_egg": "Wither Skeleton Spawn Egg",
        // "item.minecraft.wolf_spawn_egg": "Wolf Spawn Egg",
        // "item.minecraft.zoglin_spawn_egg": "Zoglin Spawn Egg",
        // "item.minecraft.zombie_spawn_egg": "Zombie Spawn Egg",
        // "item.minecraft.zombie_horse_spawn_egg": "Zombie Horse Spawn Egg",
        // "item.minecraft.zombified_piglin_spawn_egg": "Zombified Piglin Spawn Egg",
        // "item.minecraft.zombie_villager_spawn_egg": "Zombie Villager Spawn Egg",
        // "item.minecraft.goat_spawn_egg": "Goat Spawn Egg",
        // "item.minecraft.experience_bottle": "Bottle o' Enchanting",
        // "item.minecraft.fire_charge": "Fire Charge",
        // "item.minecraft.writable_book": "Book and Quill",
        // "item.minecraft.written_book": "Written Book",
        // "item.minecraft.flower_pot": "Flower Pot",
        // "item.minecraft.map": "Empty Map",
        // "item.minecraft.carrot": "Carrot",
        // "item.minecraft.golden_carrot": "Golden Carrot",
        // "item.minecraft.potato": "Potato",
        // "item.minecraft.baked_potato": "Baked Potato",
        // "item.minecraft.poisonous_potato": "Poisonous Potato",
        // "item.minecraft.carrot_on_a_stick": "Carrot on a Stick",
        // "item.minecraft.nether_star": "Nether Star",
        // "item.minecraft.pumpkin_pie": "Pumpkin Pie",
        // "item.minecraft.enchanted_book": "Enchanted Book",
        // "item.minecraft.firework_rocket": "Firework Rocket",
        // "item.minecraft.firework_rocket.flight": "Flight Duration:",
        // "item.minecraft.firework_star": "Firework Star",
        // "item.minecraft.firework_star.black": "Black",
        // "item.minecraft.firework_star.red": "Red",
        // "item.minecraft.firework_star.green": "Green",
        // "item.minecraft.firework_star.brown": "Brown",
        // "item.minecraft.firework_star.blue": "Blue",
        // "item.minecraft.firework_star.purple": "Purple",
        // "item.minecraft.firework_star.cyan": "Cyan",
        // "item.minecraft.firework_star.light_gray": "Light Gray",
        // "item.minecraft.firework_star.gray": "Gray",
        // "item.minecraft.firework_star.pink": "Pink",
        // "item.minecraft.firework_star.lime": "Lime",
        // "item.minecraft.firework_star.yellow": "Yellow",
        // "item.minecraft.firework_star.light_blue": "Light Blue",
        // "item.minecraft.firework_star.magenta": "Magenta",
        // "item.minecraft.firework_star.orange": "Orange",
        // "item.minecraft.firework_star.white": "White",
        // "item.minecraft.firework_star.custom_color": "Custom",
        // "item.minecraft.firework_star.fade_to": "Fade to",
        // "item.minecraft.firework_star.flicker": "Twinkle",
        // "item.minecraft.firework_star.trail": "Trail",
        // "item.minecraft.firework_star.shape.small_ball": "Small Ball",
        // "item.minecraft.firework_star.shape.large_ball": "Large Ball",
        // "item.minecraft.firework_star.shape.star": "Star-shaped",
        // "item.minecraft.firework_star.shape.creeper": "Creeper-shaped",
        // "item.minecraft.firework_star.shape.burst": "Burst",
        // "item.minecraft.firework_star.shape": "Unknown Shape",
        // "item.minecraft.nether_brick": "Nether Brick",
        // "item.minecraft.quartz": "Nether Quartz",
        // "item.minecraft.armor_stand": "Armor Stand",
        // "item.minecraft.iron_horse_armor": "Iron Horse Armor",
        // "item.minecraft.golden_horse_armor": "Golden Horse Armor",
        // "item.minecraft.diamond_horse_armor": "Diamond Horse Armor",
        // "item.minecraft.leather_horse_armor": "Leather Horse Armor",
        // "item.minecraft.prismarine_shard": "Prismarine Shard",
        // "item.minecraft.prismarine_crystals": "Prismarine Crystals",
        // "item.minecraft.chorus_fruit": "Chorus Fruit",
        // "item.minecraft.popped_chorus_fruit": "Popped Chorus Fruit",
        // "item.minecraft.beetroot": "Beetroot",
        // "item.minecraft.beetroot_seeds": "Beetroot Seeds",
        // "item.minecraft.beetroot_soup": "Beetroot Soup",
        // "item.minecraft.dragon_breath": "Dragon's Breath",
        // "item.minecraft.elytra": "Elytra",
        // "item.minecraft.totem_of_undying": "Totem of Undying",
        // "item.minecraft.shulker_shell": "Shulker Shell",
        // "item.minecraft.iron_nugget": "Iron Nugget",
        // "item.minecraft.knowledge_book": "Knowledge Book",
        // "item.minecraft.debug_stick": "Debug Stick",
        // "item.minecraft.debug_stick.empty": "%s has no properties",
        // "item.minecraft.debug_stick.update": "\"%s\" to %s",
        // "item.minecraft.debug_stick.select": "selected \"%s\" (%s)",
        // "item.minecraft.trident": "Trident",
        // "item.minecraft.scute": "Scute",
        // "item.minecraft.turtle_helmet": "Turtle Shell",
        // "item.minecraft.phantom_membrane": "Phantom Membrane",
        // "item.minecraft.nautilus_shell": "Nautilus Shell",
        // "item.minecraft.heart_of_the_sea": "Heart of the Sea",
        // "item.minecraft.crossbow": "Crossbow",
        // "item.minecraft.crossbow.projectile": "Projectile:",
        // "item.minecraft.suspicious_stew": "Suspicious Stew",
        // "item.minecraft.creeper_banner_pattern": "Banner Pattern",
        // "item.minecraft.skull_banner_pattern": "Banner Pattern",
        // "item.minecraft.flower_banner_pattern": "Banner Pattern",
        // "item.minecraft.mojang_banner_pattern": "Banner Pattern",
        // "item.minecraft.globe_banner_pattern": "Banner Pattern",
        // "item.minecraft.creeper_banner_pattern.desc": "Creeper Charge",
        // "item.minecraft.skull_banner_pattern.desc": "Skull Charge",
        // "item.minecraft.flower_banner_pattern.desc": "Flower Charge",
        // "item.minecraft.mojang_banner_pattern.desc": "Thing",
        // "item.minecraft.globe_banner_pattern.desc": "Globe",
        // "item.minecraft.piglin_banner_pattern": "Banner Pattern",
        // "item.minecraft.piglin_banner_pattern.desc": "Snout",
        // "item.minecraft.sweet_berries": "Sweet Berries",
        // "item.minecraft.honey_bottle": "Honey Bottle",
        // "item.minecraft.honeycomb": "Honeycomb",
        // "item.minecraft.lodestone_compass": "Lodestone Compass",
        // "item.minecraft.netherite_scrap": "Netherite Scrap",
        // "item.minecraft.netherite_ingot": "Netherite Ingot",
        // "item.minecraft.netherite_helmet": "Netherite Helmet",
        // "item.minecraft.netherite_chestplate": "Netherite Chestplate",
        // "item.minecraft.netherite_leggings": "Netherite Leggings",
        // "item.minecraft.netherite_boots": "Netherite Boots",
        // "item.minecraft.netherite_axe": "Netherite Axe",
        // "item.minecraft.netherite_pickaxe": "Netherite Pickaxe",
        // "item.minecraft.netherite_hoe": "Netherite Hoe",
        // "item.minecraft.netherite_shovel": "Netherite Shovel",
        // "item.minecraft.netherite_sword": "Netherite Sword",
        // "item.minecraft.warped_fungus_on_a_stick": "Warped Fungus on a Stick",
        // "item.minecraft.glow_ink_sac": "Glow Ink Sac",
        // "item.minecraft.glow_item_frame": "Glow Item Frame",
        // "item.dyed": "Dyed",
        // "item.unbreakable": "Unbreakable",
        // "item.canBreak": "Can break:",
        // "item.canPlace": "Can be placed on:",
        // "item.color": "Color: %s",
        // "item.nbt_tags": "NBT: %s tag(s)",
        // "item.durability": "Durability: %s / %s",
        // "item.minecraft.tipped_arrow.effect.empty": "Uncraftable Tipped Arrow",
        // "item.minecraft.tipped_arrow.effect.water": "Arrow of Splashing",
        // "item.minecraft.tipped_arrow.effect.mundane": "Tipped Arrow",
        // "item.minecraft.tipped_arrow.effect.thick": "Tipped Arrow",
        // "item.minecraft.tipped_arrow.effect.awkward": "Tipped Arrow",
        // "item.minecraft.tipped_arrow.effect.night_vision": "Arrow of Night Vision",
        // "item.minecraft.tipped_arrow.effect.invisibility": "Arrow of Invisibility",
        // "item.minecraft.tipped_arrow.effect.leaping": "Arrow of Leaping",
        // "item.minecraft.tipped_arrow.effect.fire_resistance": "Arrow of Fire Resistance",
        // "item.minecraft.tipped_arrow.effect.swiftness": "Arrow of Swiftness",
        // "item.minecraft.tipped_arrow.effect.slowness": "Arrow of Slowness",
        // "item.minecraft.tipped_arrow.effect.water_breathing": "Arrow of Water Breathing",
        // "item.minecraft.tipped_arrow.effect.healing": "Arrow of Healing",
        // "item.minecraft.tipped_arrow.effect.harming": "Arrow of Harming",
        // "item.minecraft.tipped_arrow.effect.poison": "Arrow of Poison",
        // "item.minecraft.tipped_arrow.effect.regeneration": "Arrow of Regeneration",
        // "item.minecraft.tipped_arrow.effect.strength": "Arrow of Strength",
        // "item.minecraft.tipped_arrow.effect.weakness": "Arrow of Weakness",
        // "item.minecraft.tipped_arrow.effect.levitation": "Arrow of Levitation",
        // "item.minecraft.tipped_arrow.effect.luck": "Arrow of Luck",
        // "item.minecraft.tipped_arrow.effect.turtle_master": "Arrow of the Turtle Master",
        // "item.minecraft.tipped_arrow.effect.slow_falling": "Arrow of Slow Falling",
        // "item.minecraft.potion.effect.empty": "Uncraftable Potion",
        // "item.minecraft.potion.effect.water": "Water Bottle",
        // "item.minecraft.potion.effect.mundane": "Mundane Potion",
        // "item.minecraft.potion.effect.thick": "Thick Potion",
        // "item.minecraft.potion.effect.awkward": "Awkward Potion",
        // "item.minecraft.potion.effect.night_vision": "Potion of Night Vision",
        // "item.minecraft.potion.effect.invisibility": "Potion of Invisibility",
        // "item.minecraft.potion.effect.leaping": "Potion of Leaping",
        // "item.minecraft.potion.effect.fire_resistance": "Potion of Fire Resistance",
        // "item.minecraft.potion.effect.swiftness": "Potion of Swiftness",
        // "item.minecraft.potion.effect.slowness": "Potion of Slowness",
        // "item.minecraft.potion.effect.water_breathing": "Potion of Water Breathing",
        // "item.minecraft.potion.effect.healing": "Potion of Healing",
        // "item.minecraft.potion.effect.harming": "Potion of Harming",
        // "item.minecraft.potion.effect.poison": "Potion of Poison",
        // "item.minecraft.potion.effect.regeneration": "Potion of Regeneration",
        // "item.minecraft.potion.effect.strength": "Potion of Strength",
        // "item.minecraft.potion.effect.weakness": "Potion of Weakness",
        // "item.minecraft.potion.effect.levitation": "Potion of Levitation",
        // "item.minecraft.potion.effect.luck": "Potion of Luck",
        // "item.minecraft.potion.effect.turtle_master": "Potion of the Turtle Master",
        // "item.minecraft.potion.effect.slow_falling": "Potion of Slow Falling",
        // "item.minecraft.splash_potion.effect.empty": "Splash Uncraftable Potion",
        // "item.minecraft.splash_potion.effect.water": "Splash Water Bottle",
        // "item.minecraft.splash_potion.effect.mundane": "Mundane Splash Potion",
        // "item.minecraft.splash_potion.effect.thick": "Thick Splash Potion",
        // "item.minecraft.splash_potion.effect.awkward": "Awkward Splash Potion",
        // "item.minecraft.splash_potion.effect.night_vision": "Splash Potion of Night Vision",
        // "item.minecraft.splash_potion.effect.invisibility": "Splash Potion of Invisibility",
        // "item.minecraft.splash_potion.effect.leaping": "Splash Potion of Leaping",
        // "item.minecraft.splash_potion.effect.fire_resistance": "Splash Potion of Fire Resistance",
        // "item.minecraft.splash_potion.effect.swiftness": "Splash Potion of Swiftness",
        // "item.minecraft.splash_potion.effect.slowness": "Splash Potion of Slowness",
        // "item.minecraft.splash_potion.effect.water_breathing": "Splash Potion of Water Breathing",
        // "item.minecraft.splash_potion.effect.healing": "Splash Potion of Healing",
        // "item.minecraft.splash_potion.effect.harming": "Splash Potion of Harming",
        // "item.minecraft.splash_potion.effect.poison": "Splash Potion of Poison",
        // "item.minecraft.splash_potion.effect.regeneration": "Splash Potion of Regeneration",
        // "item.minecraft.splash_potion.effect.strength": "Splash Potion of Strength",
        // "item.minecraft.splash_potion.effect.weakness": "Splash Potion of Weakness",
        // "item.minecraft.splash_potion.effect.levitation": "Splash Potion of Levitation",
        // "item.minecraft.splash_potion.effect.luck": "Splash Potion of Luck",
        // "item.minecraft.splash_potion.effect.turtle_master": "Splash Potion of the Turtle Master",
        // "item.minecraft.splash_potion.effect.slow_falling": "Splash Potion of Slow Falling",
        // "item.minecraft.lingering_potion.effect.empty": "Lingering Uncraftable Potion",
        // "item.minecraft.lingering_potion.effect.water": "Lingering Water Bottle",
        // "item.minecraft.lingering_potion.effect.mundane": "Mundane Lingering Potion",
        // "item.minecraft.lingering_potion.effect.thick": "Thick Lingering Potion",
        // "item.minecraft.lingering_potion.effect.awkward": "Awkward Lingering Potion",
        // "item.minecraft.lingering_potion.effect.night_vision": "Lingering Potion of Night Vision",
        // "item.minecraft.lingering_potion.effect.invisibility": "Lingering Potion of Invisibility",
        // "item.minecraft.lingering_potion.effect.leaping": "Lingering Potion of Leaping",
        // "item.minecraft.lingering_potion.effect.fire_resistance": "Lingering Potion of Fire Resistance",
        // "item.minecraft.lingering_potion.effect.swiftness": "Lingering Potion of Swiftness",
        // "item.minecraft.lingering_potion.effect.slowness": "Lingering Potion of Slowness",
        // "item.minecraft.lingering_potion.effect.water_breathing": "Lingering Potion of Water Breathing",
        // "item.minecraft.lingering_potion.effect.healing": "Lingering Potion of Healing",
        // "item.minecraft.lingering_potion.effect.harming": "Lingering Potion of Harming",
        // "item.minecraft.lingering_potion.effect.poison": "Lingering Potion of Poison",
        // "item.minecraft.lingering_potion.effect.regeneration": "Lingering Potion of Regeneration",
        // "item.minecraft.lingering_potion.effect.strength": "Lingering Potion of Strength",
        // "item.minecraft.lingering_potion.effect.weakness": "Lingering Potion of Weakness",
        // "item.minecraft.lingering_potion.effect.levitation": "Lingering Potion of Levitation",
        // "item.minecraft.lingering_potion.effect.luck": "Lingering Potion of Luck",
        // "item.minecraft.lingering_potion.effect.turtle_master": "Lingering Potion of the Turtle Master",
        // "item.minecraft.lingering_potion.effect.slow_falling": "Lingering Potion of Slow Falling",
        // "item.modifiers.mainhand": "When in Main Hand:",
        // "item.modifiers.offhand": "When in Off Hand:",
        // "item.modifiers.feet": "When on Feet:",
        // "item.modifiers.legs": "When on Legs:",
        // "item.modifiers.chest": "When on Body:",
        // "item.modifiers.head": "When on Head:",
        // "item.minecraft.shield": "Shield",
        // "item.minecraft.shield.black": "Black Shield",
        // "item.minecraft.shield.red": "Red Shield",
        // "item.minecraft.shield.green": "Green Shield",
        // "item.minecraft.shield.brown": "Brown Shield",
        // "item.minecraft.shield.blue": "Blue Shield",
        // "item.minecraft.shield.purple": "Purple Shield",
        // "item.minecraft.shield.cyan": "Cyan Shield",
        // "item.minecraft.shield.light_gray": "Light Gray Shield",
        // "item.minecraft.shield.gray": "Gray Shield",
        // "item.minecraft.shield.pink": "Pink Shield",
        // "item.minecraft.shield.lime": "Lime Shield",
        // "item.minecraft.shield.yellow": "Yellow Shield",
        // "item.minecraft.shield.light_blue": "Light Blue Shield",
        // "item.minecraft.shield.magenta": "Magenta Shield",
        // "item.minecraft.shield.orange": "Orange Shield",
        // "item.minecraft.shield.white": "White Shield",
        "item": { }

        // "container.inventory": "Inventory",
        // "container.hopper": "Item Hopper",
        // "container.crafting": "Crafting",
        // "container.dispenser": "Dispenser",
        // "container.dropper": "Dropper",
        // "container.furnace": "Furnace",
        // "container.enchant": "Enchant",
        // "container.smoker": "Smoker",
        // "container.lectern": "Lectern",
        // "container.blast_furnace": "Blast Furnace",
        // "container.enchant.lapis.one": "1 Lapis Lazuli",
        // "container.enchant.lapis.many": "%s Lapis Lazuli",
        // "container.enchant.level.one": "1 Enchantment Level",
        // "container.enchant.level.many": "%s Enchantment Levels",
        // "container.enchant.level.requirement": "Level Requirement: %s",
        // "container.enchant.clue": "%s . . . ?",
        // "container.repair": "Repair & Name",
        // "container.repair.cost": "Enchantment Cost: %1$s",
        // "container.repair.expensive": "Too Expensive!",
        // "container.creative": "Item Selection",
        // "container.brewing": "Brewing Stand",
        // "container.chest": "Chest",
        // "container.chestDouble": "Large Chest",
        // "container.enderchest": "Ender Chest",
        // "container.beacon": "Beacon",
        // "container.shulkerBox": "Shulker Box",
        // "container.shulkerBox.more": "and %s more...",
        // "container.barrel": "Barrel",
        // "container.spectatorCantOpen": "Unable to open. Loot not generated yet.",
        // "container.isLocked": "%s is locked!",
        // "container.loom": "Loom",
        // "container.grindstone_title": "Repair & Disenchant",
        // "container.cartography_table": "Cartography Table",
        // "container.stonecutter": "Stonecutter",
        // "container.upgrade": "Upgrade Gear",
        "container": { }

        // "structure_block.invalid_structure_name": "Invalid structure name '%s'",
        // "structure_block.save_success": "Structure saved as '%s'",
        // "structure_block.save_failure": "Unable to save structure '%s'",
        // "structure_block.load_success": "Structure loaded from '%s'",
        // "structure_block.load_prepare": "Structure '%s' position prepared",
        // "structure_block.load_not_found": "Structure '%s' is not available",
        // "structure_block.size_success": "Size successfully detected for '%s'",
        // "structure_block.size_failure": "Unable to detect structure size. Add corners with matching structure names",
        // "structure_block.mode.save": "Save",
        // "structure_block.mode.load": "Load",
        // "structure_block.mode.data": "Data",
        // "structure_block.mode.corner": "Corner",
        // "structure_block.hover.save": "Save: %s",
        // "structure_block.hover.load": "Load: %s",
        // "structure_block.hover.data": "Data: %s",
        // "structure_block.hover.corner": "Corner: %s",
        // "structure_block.mode_info.save": "Save Mode - Write to File",
        // "structure_block.mode_info.load": "Load mode - Load from File",
        // "structure_block.mode_info.data": "Data mode - Game Logic Marker",
        // "structure_block.mode_info.corner": "Corner Mode - Placement and Size Marker",
        // "structure_block.structure_name": "Structure Name",
        // "structure_block.custom_data": "Custom Data Tag Name",
        // "structure_block.position": "Relative Position",
        // "structure_block.position.x": "relative Position x",
        // "structure_block.position.y": "relative position y",
        // "structure_block.position.z": "relative position z",
        // "structure_block.size": "Structure Size",
        // "structure_block.size.x": "structure size x",
        // "structure_block.size.y": "structure size y",
        // "structure_block.size.z": "structure size z",
        // "structure_block.integrity": "Structure Integrity and Seed",
        // "structure_block.integrity.integrity": "Structure Integrity",
        // "structure_block.integrity.seed": "Structure Seed",
        // "structure_block.include_entities": "Include entities:",
        // "structure_block.detect_size": "Detect structure size and position:",
        // "structure_block.button.detect_size": "DETECT",
        // "structure_block.button.save": "SAVE",
        // "structure_block.button.load": "LOAD",
        // "structure_block.show_air": "Show Invisible Blocks:",
        // "structure_block.show_boundingbox": "Show Bounding Box:",
        "structure_block": { }

        // "jigsaw_block.pool": "Target Pool:",
        // "jigsaw_block.name": "Name:",
        // "jigsaw_block.target": "Target Name:",
        // "jigsaw_block.final_state": "Turns into:",
        // "jigsaw_block.levels": "Levels: %s",
        // "jigsaw_block.keep_jigsaws": "Keep Jigsaws",
        // "jigsaw_block.generate": "Generate",
        // "jigsaw_block.joint_label": "Joint Type:",
        // "jigsaw_block.joint.rollable": "Rollable",
        // "jigsaw_block.joint.aligned": "Aligned",
        "jigsaw_block": { }

        // "filled_map.mansion": "Woodland Explorer Map",
        // "filled_map.monument": "Ocean Explorer Map",
        // "filled_map.buried_treasure": "Buried Treasure Map",
        // "filled_map.unknown": "Unknown Map",
        // "filled_map.id": "Id #%s",
        // "filled_map.level": "(Level %s/%s)",
        // "filled_map.scale": "Scaling at 1:%s",
        // "filled_map.locked": "Locked",
        "filled_map": { }

        // "entity.minecraft.area_effect_cloud": "Area Effect Cloud",
        // "entity.minecraft.armor_stand": "Armor Stand",
        // "entity.minecraft.arrow": "Arrow",
        // "entity.minecraft.axolotl": "Axolotl",
        // "entity.minecraft.bat": "Bat",
        // "entity.minecraft.bee": "Bee",
        // "entity.minecraft.blaze": "Blaze",
        // "entity.minecraft.boat": "Boat",
        // "entity.minecraft.cat": "Cat",
        // "entity.minecraft.cave_spider": "Cave Spider",
        // "entity.minecraft.chest_minecart": "Minecart with Chest",
        // "entity.minecraft.chicken": "Chicken",
        // "entity.minecraft.command_block_minecart": "Minecart with Command Block",
        // "entity.minecraft.cod": "Cod",
        // "entity.minecraft.cow": "Cow",
        // "entity.minecraft.creeper": "Creeper",
        // "entity.minecraft.dolphin": "Dolphin",
        // "entity.minecraft.donkey": "Donkey",
        // "entity.minecraft.drowned": "Drowned",
        // "entity.minecraft.dragon_fireball": "Dragon Fireball",
        // "entity.minecraft.egg": "Thrown Egg",
        // "entity.minecraft.elder_guardian": "Elder Guardian",
        // "entity.minecraft.end_crystal": "End Crystal",
        // "entity.minecraft.ender_dragon": "Ender Dragon",
        // "entity.minecraft.ender_pearl": "Thrown Ender Pearl",
        // "entity.minecraft.enderman": "Enderman",
        // "entity.minecraft.endermite": "Endermite",
        // "entity.minecraft.evoker_fangs": "Evoker Fangs",
        // "entity.minecraft.evoker": "Evoker",
        // "entity.minecraft.eye_of_ender": "Eye of Ender",
        // "entity.minecraft.falling_block": "Falling Block",
        // "entity.minecraft.fireball": "Fireball",
        // "entity.minecraft.firework_rocket": "Firework Rocket",
        // "entity.minecraft.fishing_bobber": "Fishing Bobber",
        // "entity.minecraft.fox": "Fox",
        // "entity.minecraft.furnace_minecart": "Minecart with Furnace",
        // "entity.minecraft.ghast": "Ghast",
        // "entity.minecraft.giant": "Giant",
        // "entity.minecraft.glow_item_frame": "Glow Item Frame",
        // "entity.minecraft.glow_squid": "Glow Squid",
        // "entity.minecraft.goat": "Goat",
        // "entity.minecraft.guardian": "Guardian",
        // "entity.minecraft.hoglin": "Hoglin",
        // "entity.minecraft.hopper_minecart": "Minecart with Hopper",
        // "entity.minecraft.horse": "Horse",
        // "entity.minecraft.husk": "Husk",
        // "entity.minecraft.ravager": "Ravager",
        // "entity.minecraft.illusioner": "Illusioner",
        // "entity.minecraft.item": "Item",
        // "entity.minecraft.item_frame": "Item Frame",
        // "entity.minecraft.killer_bunny": "The Killer Bunny",
        // "entity.minecraft.leash_knot": "Leash Knot",
        // "entity.minecraft.lightning_bolt": "Lightning Bolt",
        // "entity.minecraft.llama": "Llama",
        // "entity.minecraft.llama_spit": "Llama Spit",
        // "entity.minecraft.magma_cube": "Magma Cube",
        // "entity.minecraft.marker": "Marker",
        // "entity.minecraft.minecart": "Minecart",
        // "entity.minecraft.mooshroom": "Mooshroom",
        // "entity.minecraft.mule": "Mule",
        // "entity.minecraft.ocelot": "Ocelot",
        // "entity.minecraft.painting": "Painting",
        // "entity.minecraft.panda": "Panda",
        // "entity.minecraft.parrot": "Parrot",
        // "entity.minecraft.phantom": "Phantom",
        // "entity.minecraft.pig": "Pig",
        // "entity.minecraft.piglin": "Piglin",
        // "entity.minecraft.piglin_brute": "Piglin Brute",
        // "entity.minecraft.pillager": "Pillager",
        // "entity.minecraft.player": "Player",
        // "entity.minecraft.polar_bear": "Polar Bear",
        // "entity.minecraft.potion": "Potion",
        // "entity.minecraft.pufferfish": "Pufferfish",
        // "entity.minecraft.rabbit": "Rabbit",
        // "entity.minecraft.salmon": "Salmon",
        // "entity.minecraft.sheep": "Sheep",
        // "entity.minecraft.shulker": "Shulker",
        // "entity.minecraft.shulker_bullet": "Shulker Bullet",
        // "entity.minecraft.silverfish": "Silverfish",
        // "entity.minecraft.skeleton": "Skeleton",
        // "entity.minecraft.skeleton_horse": "Skeleton Horse",
        // "entity.minecraft.slime": "Slime",
        // "entity.minecraft.small_fireball": "Small Fireball",
        // "entity.minecraft.snowball": "Snowball",
        // "entity.minecraft.snow_golem": "Snow Golem",
        // "entity.minecraft.spawner_minecart": "Minecart with Spawner",
        // "entity.minecraft.spectral_arrow": "Spectral Arrow",
        // "entity.minecraft.spider": "Spider",
        // "entity.minecraft.squid": "Squid",
        // "entity.minecraft.stray": "Stray",
        // "entity.minecraft.strider": "Strider",
        // "entity.minecraft.tnt": "Primed TNT",
        // "entity.minecraft.tnt_minecart": "Minecart with TNT",
        // "entity.minecraft.trader_llama": "Trader Llama",
        // "entity.minecraft.trident": "Trident",
        // "entity.minecraft.tropical_fish": "Tropical Fish",
        // "entity.minecraft.tropical_fish.predefined.0": "Anemone",
        // "entity.minecraft.tropical_fish.predefined.1": "Black Tang",
        // "entity.minecraft.tropical_fish.predefined.2": "Blue Tang",
        // "entity.minecraft.tropical_fish.predefined.3": "Butterflyfish",
        // "entity.minecraft.tropical_fish.predefined.4": "Cichlid",
        // "entity.minecraft.tropical_fish.predefined.5": "Clownfish",
        // "entity.minecraft.tropical_fish.predefined.6": "Cotton Candy Betta",
        // "entity.minecraft.tropical_fish.predefined.7": "Dottyback",
        // "entity.minecraft.tropical_fish.predefined.8": "Emperor Red Snapper",
        // "entity.minecraft.tropical_fish.predefined.9": "Goatfish",
        // "entity.minecraft.tropical_fish.predefined.10": "Moorish Idol",
        // "entity.minecraft.tropical_fish.predefined.11": "Ornate Butterflyfish",
        // "entity.minecraft.tropical_fish.predefined.12": "Parrotfish",
        // "entity.minecraft.tropical_fish.predefined.13": "Queen Angelfish",
        // "entity.minecraft.tropical_fish.predefined.14": "Red Cichlid",
        // "entity.minecraft.tropical_fish.predefined.15": "Red Lipped Blenny",
        // "entity.minecraft.tropical_fish.predefined.16": "Red Snapper",
        // "entity.minecraft.tropical_fish.predefined.17": "Threadfin",
        // "entity.minecraft.tropical_fish.predefined.18": "Tomato Clownfish",
        // "entity.minecraft.tropical_fish.predefined.19": "Triggerfish",
        // "entity.minecraft.tropical_fish.predefined.20": "Yellowtail Parrotfish",
        // "entity.minecraft.tropical_fish.predefined.21": "Yellow Tang",
        // "entity.minecraft.tropical_fish.type.flopper": "Flopper",
        // "entity.minecraft.tropical_fish.type.stripey": "Stripey",
        // "entity.minecraft.tropical_fish.type.glitter": "Glitter",
        // "entity.minecraft.tropical_fish.type.blockfish": "Blockfish",
        // "entity.minecraft.tropical_fish.type.betty": "Betty",
        // "entity.minecraft.tropical_fish.type.clayfish": "Clayfish",
        // "entity.minecraft.tropical_fish.type.kob": "Kob",
        // "entity.minecraft.tropical_fish.type.sunstreak": "Sunstreak",
        // "entity.minecraft.tropical_fish.type.snooper": "Snooper",
        // "entity.minecraft.tropical_fish.type.dasher": "Dasher",
        // "entity.minecraft.tropical_fish.type.brinely": "Brinely",
        // "entity.minecraft.tropical_fish.type.spotty": "Spotty",
        // "entity.minecraft.turtle": "Turtle",
        // "entity.minecraft.vex": "Vex",
        // "entity.minecraft.villager.armorer": "Armorer",
        // "entity.minecraft.villager.butcher": "Butcher",
        // "entity.minecraft.villager.cartographer": "Cartographer",
        // "entity.minecraft.villager.cleric": "Cleric",
        // "entity.minecraft.villager.farmer": "Farmer",
        // "entity.minecraft.villager.fisherman": "Fisherman",
        // "entity.minecraft.villager.fletcher": "Fletcher",
        // "entity.minecraft.villager.leatherworker": "Leatherworker",
        // "entity.minecraft.villager.librarian": "Librarian",
        // "entity.minecraft.villager.mason": "Mason",
        // "entity.minecraft.villager.none": "Villager",
        // "entity.minecraft.villager.nitwit": "Nitwit",
        // "entity.minecraft.villager.shepherd": "Shepherd",
        // "entity.minecraft.villager.toolsmith": "Toolsmith",
        // "entity.minecraft.villager.weaponsmith": "Weaponsmith",
        // "entity.minecraft.villager": "Villager",
        // "entity.minecraft.wandering_trader": "Wandering Trader",
        // "entity.minecraft.iron_golem": "Iron Golem",
        // "entity.minecraft.vindicator": "Vindicator",
        // "entity.minecraft.witch": "Witch",
        // "entity.minecraft.wither": "Wither",
        // "entity.minecraft.wither_skeleton": "Wither Skeleton",
        // "entity.minecraft.wither_skull": "Wither Skull",
        // "entity.minecraft.wolf": "Wolf",
        // "entity.minecraft.experience_bottle": "Thrown Bottle o' Enchanting",
        // "entity.minecraft.experience_orb": "Experience Orb",
        // "entity.minecraft.zoglin": "Zoglin",
        // "entity.minecraft.zombie": "Zombie",
        // "entity.minecraft.zombie_horse": "Zombie Horse",
        // "entity.minecraft.zombified_piglin": "Zombified Piglin",
        // "entity.minecraft.zombie_villager": "Zombie Villager",
        // "entity.notFound": "Unknown entity: %s",
        "entity": { }

        // "death.fell.accident.ladder": "%1$s fell off a ladder",
        // "death.fell.accident.vines": "%1$s fell off some vines",
        // "death.fell.accident.weeping_vines": "%1$s fell off some weeping vines",
        // "death.fell.accident.twisting_vines": "%1$s fell off some twisting vines",
        // "death.fell.accident.scaffolding": "%1$s fell off scaffolding",
        // "death.fell.accident.other_climbable": "%1$s fell while climbing",
        // "death.fell.accident.generic": "%1$s fell from a high place",
        // "death.fell.killer": "%1$s was doomed to fall",
        // "death.fell.assist": "%1$s was doomed to fall by %2$s",
        // "death.fell.assist.item": "%1$s was doomed to fall by %2$s using %3$s",
        // "death.fell.finish": "%1$s fell too far and was finished by %2$s",
        // "death.fell.finish.item": "%1$s fell too far and was finished by %2$s using %3$s",
        // "death.attack.lightningBolt": "%1$s was struck by lightning",
        // "death.attack.lightningBolt.player": "%1$s was struck by lightning whilst fighting %2$s",
        // "death.attack.inFire": "%1$s went up in flames",
        // "death.attack.inFire.player": "%1$s walked into fire whilst fighting %2$s",
        // "death.attack.onFire": "%1$s burned to death",
        // "death.attack.onFire.player": "%1$s was burnt to a crisp whilst fighting %2$s",
        // "death.attack.lava": "%1$s tried to swim in lava",
        // "death.attack.lava.player": "%1$s tried to swim in lava to escape %2$s",
        // "death.attack.hotFloor": "%1$s discovered the floor was lava",
        // "death.attack.hotFloor.player": "%1$s walked into danger zone due to %2$s",
        // "death.attack.inWall": "%1$s suffocated in a wall",
        // "death.attack.inWall.player": "%1$s suffocated in a wall whilst fighting %2$s",
        // "death.attack.cramming": "%1$s was squished too much",
        // "death.attack.cramming.player": "%1$s was squashed by %2$s",
        // "death.attack.drown": "%1$s drowned",
        // "death.attack.drown.player": "%1$s drowned whilst trying to escape %2$s",
        // "death.attack.dryout": "%1$s died from dehydration",
        // "death.attack.dryout.player": "%1$s died from dehydration whilst trying to escape %2$s",
        // "death.attack.starve": "%1$s starved to death",
        // "death.attack.starve.player": "%1$s starved to death whilst fighting %2$s",
        // "death.attack.cactus": "%1$s was pricked to death",
        // "death.attack.cactus.player": "%1$s walked into a cactus whilst trying to escape %2$s",
        // "death.attack.generic": "%1$s died",
        // "death.attack.generic.player": "%1$s died because of %2$s",
        // "death.attack.explosion": "%1$s blew up",
        // "death.attack.explosion.player": "%1$s was blown up by %2$s",
        // "death.attack.explosion.player.item": "%1$s was blown up by %2$s using %3$s",
        // "death.attack.magic": "%1$s was killed by magic",
        // "death.attack.magic.player": "%1$s was killed by magic whilst trying to escape %2$s",
        // "death.attack.even_more_magic": "%1$s was killed by even more magic",
        // "death.attack.message_too_long": "Actually, message was too long to deliver fully. Sorry! Here's stripped version: %s",
        // "death.attack.wither": "%1$s withered away",
        // "death.attack.wither.player": "%1$s withered away whilst fighting %2$s",
        // "death.attack.witherSkull": "%1$s was shot by a skull from %2$s",
        // "death.attack.anvil": "%1$s was squashed by a falling anvil",
        // "death.attack.anvil.player": "%1$s was squashed by a falling anvil whilst fighting %2$s",
        // "death.attack.fallingBlock": "%1$s was squashed by a falling block",
        // "death.attack.fallingBlock.player": "%1$s was squashed by a falling block whilst fighting %2$s",
        // "death.attack.stalagmite": "%1$s was impaled on a stalagmite",
        // "death.attack.stalagmite.player": "%1$s was impaled on a stalagmite whilst fighting %2$s",
        // "death.attack.fallingStalactite": "%1$s was skewered by a falling stalactite",
        // "death.attack.fallingStalactite.player": "%1$s was skewered by a falling stalactite whilst fighting %2$s",
        // "death.attack.mob": "%1$s was slain by %2$s",
        // "death.attack.mob.item": "%1$s was slain by %2$s using %3$s",
        // "death.attack.player": "%1$s was slain by %2$s",
        // "death.attack.player.item": "%1$s was slain by %2$s using %3$s",
        // "death.attack.arrow": "%1$s was shot by %2$s",
        // "death.attack.arrow.item": "%1$s was shot by %2$s using %3$s",
        // "death.attack.fireball": "%1$s was fireballed by %2$s",
        // "death.attack.fireball.item": "%1$s was fireballed by %2$s using %3$s",
        // "death.attack.thrown": "%1$s was pummeled by %2$s",
        // "death.attack.thrown.item": "%1$s was pummeled by %2$s using %3$s",
        // "death.attack.indirectMagic": "%1$s was killed by %2$s using magic",
        // "death.attack.indirectMagic.item": "%1$s was killed by %2$s using %3$s",
        // "death.attack.thorns": "%1$s was killed trying to hurt %2$s",
        // "death.attack.thorns.item": "%1$s was killed by %3$s trying to hurt %2$s",
        // "death.attack.trident": "%1$s was impaled by %2$s",
        // "death.attack.trident.item": "%1$s was impaled by %2$s with %3$s",
        // "death.attack.fall": "%1$s hit the ground too hard",
        // "death.attack.fall.player": "%1$s hit the ground too hard whilst trying to escape %2$s",
        // "death.attack.outOfWorld": "%1$s fell out of the world",
        // "death.attack.outOfWorld.player": "%1$s didn't want to live in the same world as %2$s",
        // "death.attack.dragonBreath": "%1$s was roasted in dragon breath",
        // "death.attack.dragonBreath.player": "%1$s was roasted in dragon breath by %2$s",
        // "death.attack.flyIntoWall": "%1$s experienced kinetic energy",
        // "death.attack.flyIntoWall.player": "%1$s experienced kinetic energy whilst trying to escape %2$s",
        // "death.attack.fireworks": "%1$s went off with a bang",
        // "death.attack.fireworks.player": "%1$s went off with a bang whilst fighting %2$s",
        // "death.attack.fireworks.item": "%1$s went off with a bang due to a firework fired from %3$s by %2$s",
        // "death.attack.badRespawnPoint.message": "%1$s was killed by %2$s",
        // "death.attack.badRespawnPoint.link": "Intentional Game Design",
        // "death.attack.sweetBerryBush": "%1$s was poked to death by a sweet berry bush",
        // "death.attack.sweetBerryBush.player": "%1$s was poked to death by a sweet berry bush whilst trying to escape %2$s",
        // "death.attack.sting": "%1$s was stung to death",
        // "death.attack.sting.player": "%1$s was stung to death by %2$s",
        // "death.attack.freeze": "%1$s froze to death",
        // "death.attack.freeze.player": "%1$s was frozen to death by %2$s",
        "death": { }

        // "deathScreen.respawn": "Respawn",
        // "deathScreen.spectate": "Spectate World",
        // "deathScreen.titleScreen": "Title Screen",
        // "deathScreen.score": "Score",
        // "deathScreen.title.hardcore": "Game Over!",
        // "deathScreen.title": "You Died!",
        // "deathScreen.quit.confirm": "Are you sure you want to quit?",
        "deathScreen": { }

        // "effect.none": "No Effects",
        // "effect.minecraft.speed": "Speed",
        // "effect.minecraft.slowness": "Slowness",
        // "effect.minecraft.haste": "Haste",
        // "effect.minecraft.mining_fatigue": "Mining Fatigue",
        // "effect.minecraft.strength": "Strength",
        // "effect.minecraft.instant_health": "Instant Health",
        // "effect.minecraft.instant_damage": "Instant Damage",
        // "effect.minecraft.jump_boost": "Jump Boost",
        // "effect.minecraft.nausea": "Nausea",
        // "effect.minecraft.regeneration": "Regeneration",
        // "effect.minecraft.resistance": "Resistance",
        // "effect.minecraft.fire_resistance": "Fire Resistance",
        // "effect.minecraft.water_breathing": "Water Breathing",
        // "effect.minecraft.invisibility": "Invisibility",
        // "effect.minecraft.blindness": "Blindness",
        // "effect.minecraft.night_vision": "Night Vision",
        // "effect.minecraft.hunger": "Hunger",
        // "effect.minecraft.weakness": "Weakness",
        // "effect.minecraft.poison": "Poison",
        // "effect.minecraft.wither": "Wither",
        // "effect.minecraft.health_boost": "Health Boost",
        // "effect.minecraft.absorption": "Absorption",
        // "effect.minecraft.saturation": "Saturation",
        // "effect.minecraft.glowing": "Glowing",
        // "effect.minecraft.luck": "Luck",
        // "effect.minecraft.unluck": "Bad Luck",
        // "effect.minecraft.levitation": "Levitation",
        // "effect.minecraft.slow_falling": "Slow Falling",
        // "effect.minecraft.conduit_power": "Conduit Power",
        // "effect.minecraft.dolphins_grace": "Dolphin's Grace",
        // "effect.minecraft.bad_omen": "Bad Omen",
        // "effect.minecraft.hero_of_the_village": "Hero of the Village",
        // "effect.effectNotFound": "Unknown effect: %s",
        "effect": { }

        // "event.minecraft.raid": "Raid",
        // "event.minecraft.raid.raiders_remaining": "Raiders Remaining: %s",
        // "event.minecraft.raid.victory": "Victory",
        // "event.minecraft.raid.defeat": "Defeat",
        "event": { }

        // "potion.whenDrank": "When Applied:",
        // "potion.withAmplifier": "%s %s",
        // "potion.withDuration": "%s (%s)",
        // "potion.potency.0": "",
        // "potion.potency.1": "II",
        // "potion.potency.2": "III",
        // "potion.potency.3": "IV",
        // "potion.potency.4": "V",
        // "potion.potency.5": "VI",
        "potion": { }

        // "enchantment.minecraft.sharpness": "Sharpness",
        // "enchantment.minecraft.smite": "Smite",
        // "enchantment.minecraft.bane_of_arthropods": "Bane of Arthropods",
        // "enchantment.minecraft.knockback": "Knockback",
        // "enchantment.minecraft.fire_aspect": "Fire Aspect",
        // "enchantment.minecraft.sweeping": "Sweeping Edge",
        // "enchantment.minecraft.protection": "Protection",
        // "enchantment.minecraft.fire_protection": "Fire Protection",
        // "enchantment.minecraft.feather_falling": "Feather Falling",
        // "enchantment.minecraft.blast_protection": "Blast Protection",
        // "enchantment.minecraft.projectile_protection": "Projectile Protection",
        // "enchantment.minecraft.respiration": "Respiration",
        // "enchantment.minecraft.aqua_affinity": "Aqua Affinity",
        // "enchantment.minecraft.depth_strider": "Depth Strider",
        // "enchantment.minecraft.frost_walker": "Frost Walker",
        // "enchantment.minecraft.soul_speed": "Soul Speed",
        // "enchantment.minecraft.efficiency": "Efficiency",
        // "enchantment.minecraft.silk_touch": "Silk Touch",
        // "enchantment.minecraft.unbreaking": "Unbreaking",
        // "enchantment.minecraft.looting": "Looting",
        // "enchantment.minecraft.fortune": "Fortune",
        // "enchantment.minecraft.luck_of_the_sea": "Luck of the Sea",
        // "enchantment.minecraft.lure": "Lure",
        // "enchantment.minecraft.power": "Power",
        // "enchantment.minecraft.flame": "Flame",
        // "enchantment.minecraft.punch": "Punch",
        // "enchantment.minecraft.infinity": "Infinity",
        // "enchantment.minecraft.thorns": "Thorns",
        // "enchantment.minecraft.mending": "Mending",
        // "enchantment.minecraft.binding_curse": "Curse of Binding",
        // "enchantment.minecraft.vanishing_curse": "Curse of Vanishing",
        // "enchantment.minecraft.loyalty": "Loyalty",
        // "enchantment.minecraft.impaling": "Impaling",
        // "enchantment.minecraft.riptide": "Riptide",
        // "enchantment.minecraft.channeling": "Channeling",
        // "enchantment.minecraft.multishot": "Multishot",
        // "enchantment.minecraft.quick_charge": "Quick Charge",
        // "enchantment.minecraft.piercing": "Piercing",
        // "enchantment.level.1": "I",
        // "enchantment.level.2": "II",
        // "enchantment.level.3": "III",
        // "enchantment.level.4": "IV",
        // "enchantment.level.5": "V",
        // "enchantment.level.6": "VI",
        // "enchantment.level.7": "VII",
        // "enchantment.level.8": "VIII",
        // "enchantment.level.9": "IX",
        // "enchantment.level.10": "X",
        // "enchantment.unknown": "Unknown enchantment: %s",
        "enchantment": { }

        // "advancement.advancementNotFound": "Unknown advancement: %s",
        "advancement": { }

        // "advancements.empty": "There doesn't seem to be anything here...",
        // "advancements.sad_label": ":(",
        // "advancements.toast.task": "Advancement Made!",
        // "advancements.toast.challenge": "Challenge Complete!",
        // "advancements.toast.goal": "Goal Reached!",
        // "advancements.adventure.adventuring_time.title": "Adventuring Time",
        // "advancements.adventure.adventuring_time.description": "Discover every biome",
        // "advancements.adventure.arbalistic.title": "Arbalistic",
        // "advancements.adventure.arbalistic.description": "Kill five unique mobs with one crossbow shot",
        // "advancements.adventure.bullseye.title": "Bullseye",
        // "advancements.adventure.bullseye.description": "Hit the bullseye of a Target block from at least 30 meters away",
        // "advancements.adventure.fall_from_world_height.title": "Caves & Cliffs",
        // "advancements.adventure.fall_from_world_height.description": "Free fall from the top of the world (build limit) to the bottom of the world and survive",
        // "advancements.adventure.walk_on_powder_snow_with_leather_boots.title": "Light as a Rabbit",
        // "advancements.adventure.walk_on_powder_snow_with_leather_boots.description": "Walk on powder snow...without sinking in it",
        // "advancements.adventure.lightning_rod_with_villager_no_fire.title": "Surge Protector",
        // "advancements.adventure.lightning_rod_with_villager_no_fire.description": "Protect a villager from an undesired shock without starting a fire",
        // "advancements.adventure.spyglass_at_parrot.title": "Is It a Bird?",
        // "advancements.adventure.spyglass_at_parrot.description": "Look at a parrot through a spyglass",
        // "advancements.adventure.spyglass_at_ghast.title": "Is It a Balloon?",
        // "advancements.adventure.spyglass_at_ghast.description": "Look at a ghast through a spyglass",
        // "advancements.adventure.spyglass_at_dragon.title": "Is It a Plane?",
        // "advancements.adventure.spyglass_at_dragon.description": "Look at the Ender Dragon through a spyglass",
        // "advancements.adventure.hero_of_the_village.title": "Hero of the Village",
        // "advancements.adventure.hero_of_the_village.description": "Successfully defend a village from a raid",
        // "advancements.adventure.honey_block_slide.title": "Sticky Situation",
        // "advancements.adventure.honey_block_slide.description": "Jump into a Honey Block to break your fall",
        // "advancements.adventure.kill_all_mobs.title": "Monsters Hunted",
        // "advancements.adventure.kill_all_mobs.description": "Kill one of every hostile monster",
        // "advancements.adventure.kill_a_mob.title": "Monster Hunter",
        // "advancements.adventure.kill_a_mob.description": "Kill any hostile monster",
        // "advancements.adventure.ol_betsy.title": "Ol' Betsy",
        // "advancements.adventure.ol_betsy.description": "Shoot a crossbow",
        // "advancements.adventure.play_jukebox_in_meadows.title": "Sound of Music",
        // "advancements.adventure.play_jukebox_in_meadows.description": "Make the Meadows come alive with the sound of music from a jukebox",
        // "advancements.adventure.root.title": "Adventure",
        // "advancements.adventure.root.description": "Adventure, exploration and combat",
        // "advancements.adventure.shoot_arrow.title": "Take Aim",
        // "advancements.adventure.shoot_arrow.description": "Shoot something with an arrow",
        // "advancements.adventure.sleep_in_bed.title": "Sweet Dreams",
        // "advancements.adventure.sleep_in_bed.description": "Sleep in a bed to change your respawn point",
        // "advancements.adventure.sniper_duel.title": "Sniper Duel",
        // "advancements.adventure.sniper_duel.description": "Kill a Skeleton from at least 50 meters away",
        // "advancements.adventure.summon_iron_golem.title": "Hired Help",
        // "advancements.adventure.summon_iron_golem.description": "Summon an Iron Golem to help defend a village",
        // "advancements.adventure.totem_of_undying.title": "Postmortal",
        // "advancements.adventure.totem_of_undying.description": "Use a Totem of Undying to cheat death",
        // "advancements.adventure.trade.title": "What a Deal!",
        // "advancements.adventure.trade.description": "Successfully trade with a Villager",
        // "advancements.adventure.trade_at_world_height.title": "Star Trader",
        // "advancements.adventure.trade_at_world_height.description": "Trade with a villager at the build height limit",
        // "advancements.adventure.throw_trident.title": "A Throwaway Joke",
        // "advancements.adventure.throw_trident.description": "Throw a trident at something.\nNote: Throwing away your only weapon is not a good idea.",
        // "advancements.adventure.two_birds_one_arrow.title": "Two Birds, One Arrow",
        // "advancements.adventure.two_birds_one_arrow.description": "Kill two Phantoms with a piercing arrow",
        // "advancements.adventure.very_very_frightening.title": "Very Very Frightening",
        // "advancements.adventure.very_very_frightening.description": "Strike a Villager with lightning",
        // "advancements.adventure.voluntary_exile.title": "Voluntary Exile",
        // "advancements.adventure.voluntary_exile.description": "Kill a raid captain.\nMaybe consider staying away from villages for the time being...",
        // "advancements.adventure.whos_the_pillager_now.title": "Who's the Pillager Now?",
        // "advancements.adventure.whos_the_pillager_now.description": "Give a Pillager a taste of their own medicine",
        // "advancements.husbandry.root.title": "Husbandry",
        // "advancements.husbandry.root.description": "The world is full of friends and food",
        // "advancements.husbandry.breed_an_animal.title": "The Parrots and the Bats",
        // "advancements.husbandry.breed_an_animal.description": "Breed two animals together",
        // "advancements.husbandry.fishy_business.title": "Fishy Business",
        // "advancements.husbandry.fishy_business.description": "Catch a fish",
        // "advancements.husbandry.make_a_sign_glow.title": "Glow and Behold!",
        // "advancements.husbandry.make_a_sign_glow.description": "Make the text of a sign glow",
        // "advancements.husbandry.ride_a_boat_with_a_goat.title": "Whatever Floats Your Goat!",
        // "advancements.husbandry.ride_a_boat_with_a_goat.description": "Get in a Boat and float with a Goat",
        // "advancements.husbandry.tactical_fishing.title": "Tactical Fishing",
        // "advancements.husbandry.tactical_fishing.description": "Catch a fish... without a fishing rod!",
        // "advancements.husbandry.axolotl_in_a_bucket.title": "The Cutest Predator",
        // "advancements.husbandry.axolotl_in_a_bucket.description": "Catch an axolotl in a bucket",
        // "advancements.husbandry.kill_axolotl_target.title": "The Healing Power of Friendship!",
        // "advancements.husbandry.kill_axolotl_target.description": "Team up with an axolotl and win a fight",
        // "advancements.husbandry.breed_all_animals.title": "Two by Two",
        // "advancements.husbandry.breed_all_animals.description": "Breed all the animals!",
        // "advancements.husbandry.tame_an_animal.title": "Best Friends Forever",
        // "advancements.husbandry.tame_an_animal.description": "Tame an animal",
        // "advancements.husbandry.plant_seed.title": "A Seedy Place",
        // "advancements.husbandry.plant_seed.description": "Plant a seed and watch it grow",
        // "advancements.husbandry.netherite_hoe.title": "Serious Dedication",
        // "advancements.husbandry.netherite_hoe.description": "Use a Netherite ingot to upgrade a hoe, and then reevaluate your life choices",
        // "advancements.husbandry.balanced_diet.title": "A Balanced Diet",
        // "advancements.husbandry.balanced_diet.description": "Eat everything that is edible, even if it's not good for you",
        // "advancements.husbandry.complete_catalogue.title": "A Complete Catalogue",
        // "advancements.husbandry.complete_catalogue.description": "Tame all cat variants!",
        // "advancements.husbandry.safely_harvest_honey.title": "Bee Our Guest",
        // "advancements.husbandry.safely_harvest_honey.description": "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees",
        // "advancements.husbandry.silk_touch_nest.title": "Total Beelocation",
        // "advancements.husbandry.silk_touch_nest.description": "Move a Bee Nest, with 3 bees inside, using Silk Touch",
        // "advancements.husbandry.wax_on.title": "Wax On",
        // "advancements.husbandry.wax_on.description": "Apply Honeycomb to a Copper block!",
        // "advancements.husbandry.wax_off.title": "Wax Off",
        // "advancements.husbandry.wax_off.description": "Scrape Wax off of a Copper block!",
        // "advancements.end.dragon_breath.title": "You Need a Mint",
        // "advancements.end.dragon_breath.description": "Collect dragon's breath in a glass bottle",
        // "advancements.end.dragon_egg.title": "The Next Generation",
        // "advancements.end.dragon_egg.description": "Hold the Dragon Egg",
        // "advancements.end.elytra.title": "Sky's the Limit",
        // "advancements.end.elytra.description": "Find elytra",
        // "advancements.end.enter_end_gateway.title": "Remote Getaway",
        // "advancements.end.enter_end_gateway.description": "Escape the island",
        // "advancements.end.find_end_city.title": "The City at the End of the Game",
        // "advancements.end.find_end_city.description": "Go on in, what could happen?",
        // "advancements.end.kill_dragon.title": "Free the End",
        // "advancements.end.kill_dragon.description": "Good luck",
        // "advancements.end.levitate.title": "Great View From Up Here",
        // "advancements.end.levitate.description": "Levitate up 50 blocks from the attacks of a Shulker",
        // "advancements.end.respawn_dragon.title": "The End... Again...",
        // "advancements.end.respawn_dragon.description": "Respawn the Ender Dragon",
        // "advancements.end.root.title": "The End",
        // "advancements.end.root.description": "Or the beginning?",
        // "advancements.nether.brew_potion.title": "Local Brewery",
        // "advancements.nether.brew_potion.description": "Brew a potion",
        // "advancements.nether.all_potions.title": "A Furious Cocktail",
        // "advancements.nether.all_potions.description": "Have every potion effect applied at the same time",
        // "advancements.nether.all_effects.title": "How Did We Get Here?",
        // "advancements.nether.all_effects.description": "Have every effect applied at the same time",
        // "advancements.nether.create_beacon.title": "Bring Home the Beacon",
        // "advancements.nether.create_beacon.description": "Construct and place a beacon",
        // "advancements.nether.create_full_beacon.title": "Beaconator",
        // "advancements.nether.create_full_beacon.description": "Bring a beacon to full power",
        // "advancements.nether.find_fortress.title": "A Terrible Fortress",
        // "advancements.nether.find_fortress.description": "Break your way into a Nether Fortress",
        // "advancements.nether.get_wither_skull.title": "Spooky Scary Skeleton",
        // "advancements.nether.get_wither_skull.description": "Obtain a Wither Skeleton's skull",
        // "advancements.nether.obtain_blaze_rod.title": "Into Fire",
        // "advancements.nether.obtain_blaze_rod.description": "Relieve a Blaze of its rod",
        // "advancements.nether.return_to_sender.title": "Return to Sender",
        // "advancements.nether.return_to_sender.description": "Destroy a Ghast with a fireball",
        // "advancements.nether.root.title": "Nether",
        // "advancements.nether.root.description": "Bring summer clothes",
        // "advancements.nether.summon_wither.title": "Withering Heights",
        // "advancements.nether.summon_wither.description": "Summon the Wither",
        // "advancements.nether.fast_travel.title": "Subspace Bubble",
        // "advancements.nether.fast_travel.description": "Use the Nether to travel 7 km in the Overworld",
        // "advancements.nether.uneasy_alliance.title": "Uneasy Alliance",
        // "advancements.nether.uneasy_alliance.description": "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
        // "advancements.nether.obtain_ancient_debris.title": "Hidden in the Depths",
        // "advancements.nether.obtain_ancient_debris.description": "Obtain Ancient Debris",
        // "advancements.nether.netherite_armor.title": "Cover Me in Debris",
        // "advancements.nether.netherite_armor.description": "Get a full suit of Netherite armor",
        // "advancements.nether.use_lodestone.title": "Country Lode, Take Me Home",
        // "advancements.nether.use_lodestone.description": "Use a compass on a Lodestone",
        // "advancements.nether.obtain_crying_obsidian.title": "Who is Cutting Onions?",
        // "advancements.nether.obtain_crying_obsidian.description": "Obtain Crying Obsidian",
        // "advancements.nether.charge_respawn_anchor.title": "Not Quite \"Nine\" Lives",
        // "advancements.nether.charge_respawn_anchor.description": "Charge a Respawn Anchor to the maximum",
        // "advancements.nether.ride_strider.title": "This Boat Has Legs",
        // "advancements.nether.ride_strider.description": "Ride a Strider with a Warped Fungus on a Stick",
        // "advancements.nether.ride_strider_in_overworld_lava.title": "Feels like home",
        // "advancements.nether.ride_strider_in_overworld_lava.description": "Take a Strider for a loooong ride on a lava lake in the Overworld",
        // "advancements.nether.explore_nether.title": "Hot Tourist Destinations",
        // "advancements.nether.explore_nether.description": "Explore all Nether biomes",
        // "advancements.nether.find_bastion.title": "Those Were the Days",
        // "advancements.nether.find_bastion.description": "Enter a Bastion Remnant",
        // "advancements.nether.loot_bastion.title": "War Pigs",
        // "advancements.nether.loot_bastion.description": "Loot a chest in a Bastion Remnant",
        // "advancements.nether.distract_piglin.title": "Oh Shiny",
        // "advancements.nether.distract_piglin.description": "Distract Piglins with gold",
        // "advancements.story.cure_zombie_villager.title": "Zombie Doctor",
        // "advancements.story.cure_zombie_villager.description": "Weaken and then cure a Zombie Villager",
        // "advancements.story.deflect_arrow.title": "Not Today, Thank You",
        // "advancements.story.deflect_arrow.description": "Deflect a projectile with a shield",
        // "advancements.story.enchant_item.title": "Enchanter",
        // "advancements.story.enchant_item.description": "Enchant an item at an Enchanting Table",
        // "advancements.story.enter_the_end.title": "The End?",
        // "advancements.story.enter_the_end.description": "Enter the End Portal",
        // "advancements.story.enter_the_nether.title": "We Need to Go Deeper",
        // "advancements.story.enter_the_nether.description": "Build, light and enter a Nether Portal",
        // "advancements.story.follow_ender_eye.title": "Eye Spy",
        // "advancements.story.follow_ender_eye.description": "Follow an Eye of Ender",
        // "advancements.story.form_obsidian.title": "Ice Bucket Challenge",
        // "advancements.story.form_obsidian.description": "Obtain a block of obsidian",
        // "advancements.story.iron_tools.title": "Isn't It Iron Pick",
        // "advancements.story.iron_tools.description": "Upgrade your pickaxe",
        // "advancements.story.lava_bucket.title": "Hot Stuff",
        // "advancements.story.lava_bucket.description": "Fill a bucket with lava",
        // "advancements.story.mine_diamond.title": "Diamonds!",
        // "advancements.story.mine_diamond.description": "Acquire diamonds",
        // "advancements.story.mine_stone.title": "Stone Age",
        // "advancements.story.mine_stone.description": "Mine stone with your new pickaxe",
        // "advancements.story.obtain_armor.title": "Suit Up",
        // "advancements.story.obtain_armor.description": "Protect yourself with a piece of iron armor",
        // "advancements.story.root.title": "Minecraft",
        // "advancements.story.root.description": "The heart and story of the game",
        // "advancements.story.shiny_gear.title": "Cover Me with Diamonds",
        // "advancements.story.shiny_gear.description": "Diamond armor saves lives",
        // "advancements.story.smelt_iron.title": "Acquire Hardware",
        // "advancements.story.smelt_iron.description": "Smelt an iron ingot",
        // "advancements.story.upgrade_tools.title": "Getting an Upgrade",
        // "advancements.story.upgrade_tools.description": "Construct a better pickaxe",
        "advancements": { }

        // "stats.tooltip.type.statistic": "Statistic",
        "stats": { }

        // "stat.generalButton": "General",
        // "stat.itemsButton": "Items",
        // "stat.mobsButton": "Mobs",
        // "stat.minecraft.animals_bred": "Animals Bred",
        // "stat.minecraft.aviate_one_cm": "Distance by Elytra",
        // "stat.minecraft.clean_armor": "Armor Pieces Cleaned",
        // "stat.minecraft.clean_banner": "Banners Cleaned",
        // "stat.minecraft.clean_shulker_box": "Shulker Boxes Cleaned",
        // "stat.minecraft.climb_one_cm": "Distance Climbed",
        // "stat.minecraft.bell_ring": "Bells Rung",
        // "stat.minecraft.target_hit": "Targets Hit",
        // "stat.minecraft.boat_one_cm": "Distance by Boat",
        // "stat.minecraft.crouch_one_cm": "Distance Crouched",
        // "stat.minecraft.damage_dealt": "Damage Dealt",
        // "stat.minecraft.damage_dealt_absorbed": "Damage Dealt (Absorbed)",
        // "stat.minecraft.damage_dealt_resisted": "Damage Dealt (Resisted)",
        // "stat.minecraft.damage_taken": "Damage Taken",
        // "stat.minecraft.damage_blocked_by_shield": "Damage Blocked by Shield",
        // "stat.minecraft.damage_absorbed": "Damage Absorbed",
        // "stat.minecraft.damage_resisted": "Damage Resisted",
        // "stat.minecraft.deaths": "Number of Deaths",
        // "stat.minecraft.walk_under_water_one_cm": "Distance Walked under Water",
        // "stat.minecraft.drop": "Items Dropped",
        // "stat.minecraft.eat_cake_slice": "Cake Slices Eaten",
        // "stat.minecraft.enchant_item": "Items Enchanted",
        // "stat.minecraft.fall_one_cm": "Distance Fallen",
        // "stat.minecraft.fill_cauldron": "Cauldrons Filled",
        // "stat.minecraft.fish_caught": "Fish Caught",
        // "stat.minecraft.fly_one_cm": "Distance Flown",
        // "stat.minecraft.horse_one_cm": "Distance by Horse",
        // "stat.minecraft.inspect_dispenser": "Dispensers Searched",
        // "stat.minecraft.inspect_dropper": "Droppers Searched",
        // "stat.minecraft.inspect_hopper": "Hoppers Searched",
        // "stat.minecraft.interact_with_anvil": "Interactions with Anvil",
        // "stat.minecraft.interact_with_beacon": "Interactions with Beacon",
        // "stat.minecraft.interact_with_brewingstand": "Interactions with Brewing Stand",
        // "stat.minecraft.interact_with_campfire": "Interactions with Campfire",
        // "stat.minecraft.interact_with_cartography_table": "Interactions with Cartography Table",
        // "stat.minecraft.interact_with_crafting_table": "Interactions with Crafting Table",
        // "stat.minecraft.interact_with_furnace": "Interactions with Furnace",
        // "stat.minecraft.interact_with_grindstone": "Interactions with Grindstone",
        // "stat.minecraft.interact_with_lectern": "Interactions with Lectern",
        // "stat.minecraft.interact_with_loom": "Interactions with Loom",
        // "stat.minecraft.interact_with_blast_furnace": "Interactions with Blast Furnace",
        // "stat.minecraft.interact_with_smithing_table": "Interactions with Smithing Table",
        // "stat.minecraft.interact_with_smoker": "Interactions with Smoker",
        // "stat.minecraft.interact_with_stonecutter": "Interactions with Stonecutter",
        // "stat.minecraft.jump": "Jumps",
        // "stat.minecraft.junk_fished": "Junk Fished",
        // "stat.minecraft.leave_game": "Games Quit",
        // "stat.minecraft.minecart_one_cm": "Distance by Minecart",
        // "stat.minecraft.mob_kills": "Mob Kills",
        // "stat.minecraft.open_barrel": "Barrels Opened",
        // "stat.minecraft.open_chest": "Chests Opened",
        // "stat.minecraft.open_enderchest": "Ender Chests Opened",
        // "stat.minecraft.open_shulker_box": "Shulker Boxes Opened",
        // "stat.minecraft.pig_one_cm": "Distance by Pig",
        // "stat.minecraft.strider_one_cm": "Distance by Strider",
        // "stat.minecraft.player_kills": "Player Kills",
        // "stat.minecraft.play_noteblock": "Note Blocks Played",
        // "stat.minecraft.play_time": "Time Played",
        // "stat.minecraft.play_record": "Music Discs Played",
        // "stat.minecraft.pot_flower": "Plants Potted",
        // "stat.minecraft.raid_trigger": "Raids Triggered",
        // "stat.minecraft.raid_win": "Raids Won",
        // "stat.minecraft.ring_bell": "Bells Rung",
        // "stat.minecraft.sleep_in_bed": "Times Slept in a Bed",
        // "stat.minecraft.sneak_time": "Sneak Time",
        // "stat.minecraft.sprint_one_cm": "Distance Sprinted",
        // "stat.minecraft.walk_on_water_one_cm": "Distance Walked on Water",
        // "stat.minecraft.swim_one_cm": "Distance Swum",
        // "stat.minecraft.talked_to_villager": "Talked to Villagers",
        // "stat.minecraft.time_since_rest": "Time Since Last Rest",
        // "stat.minecraft.time_since_death": "Time Since Last Death",
        // "stat.minecraft.total_world_time": "Time with World Open",
        // "stat.minecraft.traded_with_villager": "Traded with Villagers",
        // "stat.minecraft.treasure_fished": "Treasure Fished",
        // "stat.minecraft.trigger_trapped_chest": "Trapped Chests Triggered",
        // "stat.minecraft.tune_noteblock": "Note Blocks Tuned",
        // "stat.minecraft.use_cauldron": "Water Taken from Cauldron",
        // "stat.minecraft.walk_one_cm": "Distance Walked",
        "stat": { }

        // "stat_type.minecraft.mined": "Times Mined",
        // "stat_type.minecraft.crafted": "Times Crafted",
        // "stat_type.minecraft.used": "Times Used",
        // "stat_type.minecraft.broken": "Times Broken",
        // "stat_type.minecraft.picked_up": "Picked Up",
        // "stat_type.minecraft.dropped": "Dropped",
        // "stat_type.minecraft.killed": "You killed %s %s",
        // "stat_type.minecraft.killed.none": "You have never killed %s",
        // "stat_type.minecraft.killed_by": "%s killed you %s time(s)",
        // "stat_type.minecraft.killed_by.none": "You have never been killed by %s",
        "stat_type": { }

        // "recipe.toast.title": "New Recipes Unlocked!",
        // "recipe.toast.description": "Check your recipe book",
        // "recipe.notFound": "Unknown recipe: %s",
        "recipe": { }

        // "itemGroup.buildingBlocks": "Building Blocks",
        // "itemGroup.decorations": "Decoration Blocks",
        // "itemGroup.redstone": "Redstone",
        // "itemGroup.transportation": "Transportation",
        // "itemGroup.misc": "Miscellaneous",
        // "itemGroup.search": "Search Items",
        // "itemGroup.food": "Foodstuffs",
        // "itemGroup.tools": "Tools",
        // "itemGroup.combat": "Combat",
        // "itemGroup.brewing": "Brewing",
        // "itemGroup.materials": "Materials",
        // "itemGroup.inventory": "Survival Inventory",
        // "itemGroup.hotbar": "Saved Hotbars",
        "itemGroup": { }

        // "inventory.binSlot": "Destroy Item",
        // "inventory.hotbarSaved": "Item hotbar saved (restore with %1$s+%2$s)",
        // "inventory.hotbarInfo": "Save hotbar with %1$s+%2$s",
        "inventory": { }

        // "advMode.setCommand": "Set Console Command for Block",
        // "advMode.setCommand.success": "Command set: %s",
        // "advMode.command": "Console Command",
        // "advMode.nearestPlayer": "Use \"@p\" to target nearest player",
        // "advMode.randomPlayer": "Use \"@r\" to target random player",
        // "advMode.allPlayers": "Use \"@a\" to target all players",
        // "advMode.allEntities": "Use \"@e\" to target all entities",
        // "advMode.self": "Use \"@s\" to target the executing entity",
        // "advMode.previousOutput": "Previous Output",
        // "advMode.mode": "Mode",
        // "advMode.mode.sequence": "Chain",
        // "advMode.mode.auto": "Repeat",
        // "advMode.mode.redstone": "Impulse",
        // "advMode.type": "Type",
        // "advMode.mode.conditional": "Conditional",
        // "advMode.mode.unconditional": "Unconditional",
        // "advMode.triggering": "Triggering",
        // "advMode.mode.redstoneTriggered": "Needs Redstone",
        // "advMode.mode.autoexec.bat": "Always Active",
        // "advMode.notEnabled": "Command blocks are not enabled on this server",
        // "advMode.notAllowed": "Must be an opped player in creative mode",
        // "advMode.trackOutput": "Track output",
        "advMode": { }

        // "mount.onboard": "Press %1$s to Dismount",
        "mount": { }

        // "build.tooHigh": "Height limit for building is %s",
        "build": { }

        // "attribute.unknown": "Unknown attribute",
        // "attribute.modifier.plus.0": "+%s %s",
        // "attribute.modifier.plus.1": "+%s%% %s",
        // "attribute.modifier.plus.2": "+%s%% %s",
        // "attribute.modifier.take.0": "-%s %s",
        // "attribute.modifier.take.1": "-%s%% %s",
        // "attribute.modifier.take.2": "-%s%% %s",
        // "attribute.modifier.equals.0": "%s %s",
        // "attribute.modifier.equals.1": "%s%% %s",
        // "attribute.modifier.equals.2": "%s%% %s",
        // "attribute.name.horse.jump_strength": "Horse Jump Strength",
        // "attribute.name.zombie.spawn_reinforcements": "Zombie Reinforcements",
        // "attribute.name.generic.max_health": "Max Health",
        // "attribute.name.generic.follow_range": "Mob Follow Range",
        // "attribute.name.generic.knockback_resistance": "Knockback Resistance",
        // "attribute.name.generic.movement_speed": "Speed",
        // "attribute.name.generic.flying_speed": "Flying Speed",
        // "attribute.name.generic.attack_damage": "Attack Damage",
        // "attribute.name.generic.attack_knockback": "Attack Knockback",
        // "attribute.name.generic.attack_speed": "Attack Speed",
        // "attribute.name.generic.luck": "Luck",
        // "attribute.name.generic.armor": "Armor",
        // "attribute.name.generic.armor_toughness": "Armor Toughness",
        "attribute": { }

        // "screenshot.success": "Saved screenshot as %s",
        // "screenshot.failure": "Couldn't save screenshot: %s",
        "screenshot": { }

        // "subtitles.ambient.cave": "Eerie noise",
        // "subtitles.block.amethyst_block.chime": "Amethyst chimes",
        // "subtitles.block.anvil.destroy": "Anvil destroyed",
        // "subtitles.block.anvil.land": "Anvil landed",
        // "subtitles.block.anvil.use": "Anvil used",
        // "subtitles.block.barrel.close": "Barrel closes",
        // "subtitles.block.barrel.open": "Barrel opens",
        // "subtitles.block.beacon.activate": "Beacon activates",
        // "subtitles.block.beacon.ambient": "Beacon hums",
        // "subtitles.block.beacon.deactivate": "Beacon deactivates",
        // "subtitles.block.beacon.power_select": "Beacon power selected",
        // "subtitles.block.beehive.drip": "Honey drips",
        // "subtitles.block.beehive.enter": "Bee enters hive",
        // "subtitles.block.beehive.exit": "Bee leaves hive",
        // "subtitles.block.beehive.shear": "Shears scrape",
        // "subtitles.block.beehive.work": "Bees work",
        // "subtitles.block.bell.resonate": "Bell resonates",
        // "subtitles.block.bell.use": "Bell rings",
        // "subtitles.block.big_dripleaf.tilt_down": "Dripleaf tilts down",
        // "subtitles.block.big_dripleaf.tilt_up": "Dripleaf tilts up",
        // "subtitles.block.blastfurnace.fire_crackle": "Blast Furnace crackles",
        // "subtitles.block.brewing_stand.brew": "Brewing Stand bubbles",
        // "subtitles.block.bubble_column.bubble_pop": "Bubbles pop",
        // "subtitles.block.bubble_column.upwards_ambient": "Bubbles flow",
        // "subtitles.block.bubble_column.upwards_inside": "Bubbles woosh",
        // "subtitles.block.bubble_column.whirlpool_ambient": "Bubbles whirl",
        // "subtitles.block.bubble_column.whirlpool_inside": "Bubbles zoom",
        // "subtitles.block.button.click": "Button clicks",
        // "subtitles.block.campfire.crackle": "Campfire crackles",
        // "subtitles.block.candle.crackle": "Candle crackles",
        // "subtitles.block.cake.add_candle": "Cake squishes",
        // "subtitles.block.chest.close": "Chest closes",
        // "subtitles.block.chest.locked": "Chest locked",
        // "subtitles.block.chest.open": "Chest opens",
        // "subtitles.block.chorus_flower.death": "Chorus Flower withers",
        // "subtitles.block.chorus_flower.grow": "Chorus Flower grows",
        // "subtitles.block.comparator.click": "Comparator clicks",
        // "subtitles.block.composter.empty": "Composter emptied",
        // "subtitles.block.composter.fill": "Composter filled",
        // "subtitles.block.composter.ready": "Composter composts",
        // "subtitles.block.conduit.activate": "Conduit activates",
        // "subtitles.block.conduit.ambient": "Conduit pulses",
        // "subtitles.block.conduit.attack.target": "Conduit attacks",
        // "subtitles.block.conduit.deactivate": "Conduit deactivates",
        // "subtitles.block.dispenser.dispense": "Dispensed item",
        // "subtitles.block.dispenser.fail": "Dispenser failed",
        // "subtitles.block.door.toggle": "Door creaks",
        // "subtitles.block.enchantment_table.use": "Enchanting Table used",
        // "subtitles.block.end_portal.spawn": "End Portal opens",
        // "subtitles.block.end_portal_frame.fill": "Eye of Ender attaches",
        // "subtitles.block.fence_gate.toggle": "Fence Gate creaks",
        // "subtitles.block.fire.ambient": "Fire crackles",
        // "subtitles.block.fire.extinguish": "Fire extinguished",
        // "subtitles.block.furnace.fire_crackle": "Furnace crackles",
        // "subtitles.block.generic.break": "Block broken",
        // "subtitles.block.generic.footsteps": "Footsteps",
        // "subtitles.block.generic.hit": "Block breaking",
        // "subtitles.block.generic.place": "Block placed",
        // "subtitles.block.grindstone.use": "Grindstone used",
        // "subtitles.block.growing_plant.crop": "Plant cropped",
        // "subtitles.block.honey_block.slide": "Sliding down a honey block",
        // "subtitles.item.honeycomb.wax_on": "Wax on",
        // "subtitles.block.iron_trapdoor.close": "Trapdoor closes",
        // "subtitles.block.iron_trapdoor.open": "Trapdoor opens",
        // "subtitles.block.lava.ambient": "Lava pops",
        // "subtitles.block.lava.extinguish": "Lava hisses",
        // "subtitles.block.lever.click": "Lever clicks",
        // "subtitles.block.note_block.note": "Note Block plays",
        // "subtitles.block.piston.move": "Piston moves",
        // "subtitles.block.pointed_dripstone.land": "Stalactite crashes down",
        // "subtitles.block.pointed_dripstone.drip_lava": "Lava drips",
        // "subtitles.block.pointed_dripstone.drip_water": "Water drips",
        // "subtitles.block.pointed_dripstone.drip_lava_into_cauldron": "Lava drips into Cauldron",
        // "subtitles.block.pointed_dripstone.drip_water_into_cauldron": "Water drips into Cauldron",
        // "subtitles.block.portal.ambient": "Portal whooshes",
        // "subtitles.block.portal.travel": "Portal noise fades",
        // "subtitles.block.portal.trigger": "Portal noise intensifies",
        // "subtitles.block.pressure_plate.click": "Pressure Plate clicks",
        // "subtitles.block.pumpkin.carve": "Shears carve",
        // "subtitles.block.redstone_torch.burnout": "Torch fizzes",
        // "subtitles.block.respawn_anchor.ambient": "Portal whooshes",
        // "subtitles.block.respawn_anchor.charge": "Respawn Anchor is charged",
        // "subtitles.block.respawn_anchor.deplete": "Respawn Anchor depletes",
        // "subtitles.block.respawn_anchor.set_spawn": "Respawn Anchor sets spawn",
        // "subtitles.block.sculk_sensor.clicking": "Sculk Sensor starts clicking",
        // "subtitles.block.sculk_sensor.clicking_stop": "Sculk Sensor stops clicking",
        // "subtitles.block.shulker_box.close": "Shulker closes",
        // "subtitles.block.shulker_box.open": "Shulker opens",
        // "subtitles.block.smithing_table.use": "Smithing Table used",
        // "subtitles.block.smoker.smoke": "Smoker smokes",
        // "subtitles.block.sweet_berry_bush.pick_berries": "Berries pop",
        // "subtitles.block.trapdoor.toggle": "Trapdoor creaks",
        // "subtitles.block.tripwire.attach": "Tripwire attaches",
        // "subtitles.block.tripwire.click": "Tripwire clicks",
        // "subtitles.block.tripwire.detach": "Tripwire detaches",
        // "subtitles.block.water.ambient": "Water flows",
        // "subtitles.enchant.thorns.hit": "Thorns prick",
        // "subtitles.entity.armor_stand.fall": "Something fell",
        // "subtitles.entity.arrow.hit": "Arrow hits",
        // "subtitles.entity.arrow.hit_player": "Player hit",
        // "subtitles.entity.arrow.shoot": "Arrow fired",
        // "subtitles.entity.axolotl.attack": "Axolotl attacks",
        // "subtitles.entity.axolotl.death": "Axolotl dies",
        // "subtitles.entity.axolotl.hurt": "Axolotl hurts",
        // "subtitles.entity.axolotl.idle_air": "Axolotl chirps",
        // "subtitles.entity.axolotl.idle_water": "Axolotl chirps",
        // "subtitles.entity.axolotl.splash": "Axolotl splashes",
        // "subtitles.entity.axolotl.swim": "Axolotl swims",
        // "subtitles.entity.bat.ambient": "Bat screeches",
        // "subtitles.entity.bat.death": "Bat dies",
        // "subtitles.entity.bat.hurt": "Bat hurts",
        // "subtitles.entity.bat.takeoff": "Bat takes off",
        // "subtitles.entity.bee.ambient": "Bee buzzes",
        // "subtitles.entity.bee.death": "Bee dies",
        // "subtitles.entity.bee.hurt": "Bee hurts",
        // "subtitles.entity.bee.loop": "Bee buzzes",
        // "subtitles.entity.bee.loop_aggressive": "Bee buzzes angrily",
        // "subtitles.entity.bee.pollinate": "Bee buzzes happily",
        // "subtitles.entity.bee.sting": "Bee stings",
        // "subtitles.entity.blaze.ambient": "Blaze breathes",
        // "subtitles.entity.blaze.burn": "Blaze crackles",
        // "subtitles.entity.blaze.death": "Blaze dies",
        // "subtitles.entity.blaze.hurt": "Blaze hurts",
        // "subtitles.entity.blaze.shoot": "Blaze shoots",
        // "subtitles.entity.boat.paddle_land": "Rowing",
        // "subtitles.entity.boat.paddle_water": "Rowing",
        // "subtitles.entity.cat.ambient": "Cat meows",
        // "subtitles.entity.cat.beg_for_food": "Cat begs",
        // "subtitles.entity.cat.death": "Cat dies",
        // "subtitles.entity.cat.eat": "Cat eats",
        // "subtitles.entity.cat.hiss": "Cat hisses",
        // "subtitles.entity.cat.hurt": "Cat hurts",
        // "subtitles.entity.cat.purr": "Cat purrs",
        // "subtitles.entity.chicken.ambient": "Chicken clucks",
        // "subtitles.entity.chicken.death": "Chicken dies",
        // "subtitles.entity.chicken.egg": "Chicken plops",
        // "subtitles.entity.chicken.hurt": "Chicken hurts",
        // "subtitles.entity.cod.death": "Cod dies",
        // "subtitles.entity.cod.flop": "Cod flops",
        // "subtitles.entity.cod.hurt": "Cod hurts",
        // "subtitles.entity.cow.ambient": "Cow moos",
        // "subtitles.entity.cow.death": "Cow dies",
        // "subtitles.entity.cow.hurt": "Cow hurts",
        // "subtitles.entity.cow.milk": "Cow gets milked",
        // "subtitles.entity.creeper.death": "Creeper dies",
        // "subtitles.entity.creeper.hurt": "Creeper hurts",
        // "subtitles.entity.creeper.primed": "Creeper hisses",
        // "subtitles.entity.dolphin.ambient": "Dolphin chirps",
        // "subtitles.entity.dolphin.ambient_water": "Dolphin whistles",
        // "subtitles.entity.dolphin.attack": "Dolphin attacks",
        // "subtitles.entity.dolphin.death": "Dolphin dies",
        // "subtitles.entity.dolphin.eat": "Dolphin eats",
        // "subtitles.entity.dolphin.hurt": "Dolphin hurts",
        // "subtitles.entity.dolphin.jump": "Dolphin jumps",
        // "subtitles.entity.dolphin.play": "Dolphin plays",
        // "subtitles.entity.dolphin.splash": "Dolphin splashes",
        // "subtitles.entity.dolphin.swim": "Dolphin swims",
        // "subtitles.entity.donkey.ambient": "Donkey hee-haws",
        // "subtitles.entity.donkey.angry": "Donkey neighs",
        // "subtitles.entity.donkey.chest": "Donkey Chest equips",
        // "subtitles.entity.donkey.death": "Donkey dies",
        // "subtitles.entity.donkey.eat": "Donkey eats",
        // "subtitles.entity.donkey.hurt": "Donkey hurts",
        // "subtitles.entity.drowned.ambient": "Drowned gurgles",
        // "subtitles.entity.drowned.ambient_water": "Drowned gurgles",
        // "subtitles.entity.drowned.death": "Drowned dies",
        // "subtitles.entity.drowned.hurt": "Drowned hurts",
        // "subtitles.entity.drowned.shoot": "Drowned throws Trident",
        // "subtitles.entity.drowned.step": "Drowned steps",
        // "subtitles.entity.drowned.swim": "Drowned swims",
        // "subtitles.entity.egg.throw": "Egg flies",
        // "subtitles.entity.elder_guardian.ambient": "Elder Guardian moans",
        // "subtitles.entity.elder_guardian.ambient_land": "Elder Guardian flaps",
        // "subtitles.entity.elder_guardian.curse": "Elder Guardian curses",
        // "subtitles.entity.elder_guardian.death": "Elder Guardian dies",
        // "subtitles.entity.elder_guardian.flop": "Elder Guardian flops",
        // "subtitles.entity.elder_guardian.hurt": "Elder Guardian hurts",
        // "subtitles.entity.ender_dragon.ambient": "Dragon roars",
        // "subtitles.entity.ender_dragon.death": "Dragon dies",
        // "subtitles.entity.ender_dragon.flap": "Dragon flaps",
        // "subtitles.entity.ender_dragon.growl": "Dragon growls",
        // "subtitles.entity.ender_dragon.hurt": "Dragon hurts",
        // "subtitles.entity.ender_dragon.shoot": "Dragon shoots",
        // "subtitles.entity.ender_eye.death": "Eye of Ender falls",
        // "subtitles.entity.ender_eye.launch": "Eye of Ender shoots",
        // "subtitles.entity.ender_pearl.throw": "Ender Pearl flies",
        // "subtitles.entity.enderman.ambient": "Enderman vwoops",
        // "subtitles.entity.enderman.death": "Enderman dies",
        // "subtitles.entity.enderman.hurt": "Enderman hurts",
        // "subtitles.entity.enderman.stare": "Enderman cries out",
        // "subtitles.entity.enderman.teleport": "Enderman teleports",
        // "subtitles.entity.endermite.ambient": "Endermite scuttles",
        // "subtitles.entity.endermite.death": "Endermite dies",
        // "subtitles.entity.endermite.hurt": "Endermite hurts",
        // "subtitles.entity.evoker.ambient": "Evoker murmurs",
        // "subtitles.entity.evoker.cast_spell": "Evoker casts spell",
        // "subtitles.entity.evoker.celebrate": "Evoker cheers",
        // "subtitles.entity.evoker.death": "Evoker dies",
        // "subtitles.entity.evoker.hurt": "Evoker hurts",
        // "subtitles.entity.evoker.prepare_attack": "Evoker prepares attack",
        // "subtitles.entity.evoker.prepare_summon": "Evoker prepares summoning",
        // "subtitles.entity.evoker.prepare_wololo": "Evoker prepares charming",
        // "subtitles.entity.evoker_fangs.attack": "Fangs snap",
        // "subtitles.entity.experience_orb.pickup": "Experience gained",
        // "subtitles.entity.firework_rocket.blast": "Firework blasts",
        // "subtitles.entity.firework_rocket.launch": "Firework launches",
        // "subtitles.entity.firework_rocket.twinkle": "Firework twinkles",
        // "subtitles.entity.fishing_bobber.retrieve": "Bobber retrieved",
        // "subtitles.entity.fishing_bobber.splash": "Fishing Bobber splashes",
        // "subtitles.entity.fishing_bobber.throw": "Bobber thrown",
        // "subtitles.entity.fox.aggro": "Fox angers",
        // "subtitles.entity.fox.ambient": "Fox squeaks",
        // "subtitles.entity.fox.bite": "Fox bites",
        // "subtitles.entity.fox.death": "Fox dies",
        // "subtitles.entity.fox.eat": "Fox eats",
        // "subtitles.entity.fox.hurt": "Fox hurts",
        // "subtitles.entity.fox.screech": "Fox screeches",
        // "subtitles.entity.fox.sleep": "Fox snores",
        // "subtitles.entity.fox.sniff": "Fox sniffs",
        // "subtitles.entity.fox.spit": "Fox spits",
        // "subtitles.entity.fox.teleport": "Fox teleports",
        // "subtitles.entity.generic.big_fall": "Something fell",
        // "subtitles.entity.generic.burn": "Burning",
        // "subtitles.entity.generic.death": "Dying",
        // "subtitles.entity.generic.drink": "Sipping",
        // "subtitles.entity.generic.eat": "Eating",
        // "subtitles.entity.generic.explode": "Explosion",
        // "subtitles.entity.generic.extinguish_fire": "Fire extinguishes",
        // "subtitles.entity.generic.hurt": "Something hurts",
        // "subtitles.entity.generic.small_fall": "Something trips",
        // "subtitles.entity.generic.splash": "Splashing",
        // "subtitles.entity.generic.swim": "Swimming",
        // "subtitles.entity.ghast.ambient": "Ghast cries",
        // "subtitles.entity.ghast.death": "Ghast dies",
        // "subtitles.entity.ghast.hurt": "Ghast hurts",
        // "subtitles.entity.ghast.shoot": "Ghast shoots",
        // "subtitles.entity.glow_item_frame.add_item": "Glow Item Frame fills",
        // "subtitles.entity.glow_item_frame.break": "Glow Item Frame breaks",
        // "subtitles.entity.glow_item_frame.place": "Glow Item Frame placed",
        // "subtitles.entity.glow_item_frame.remove_item": "Glow Item Frame empties",
        // "subtitles.entity.glow_item_frame.rotate_item": "Glow Item Frame clicks",
        // "subtitles.entity.glow_squid.ambient": "Glow Squid swims",
        // "subtitles.entity.glow_squid.death": "Glow Squid dies",
        // "subtitles.entity.glow_squid.hurt": "Glow Squid hurts",
        // "subtitles.entity.glow_squid.squirt": "Glow Squid shoots ink",
        // "subtitles.entity.goat.ambient": "Goat bleats",
        // "subtitles.entity.goat.screaming.ambient": "Goat bellows",
        // "subtitles.entity.goat.death": "Goat dies",
        // "subtitles.entity.goat.eat": "Goat eats",
        // "subtitles.entity.goat.hurt": "Goat hurts",
        // "subtitles.entity.goat.long_jump": "Goat leaps",
        // "subtitles.entity.goat.milk": "Goat gets milked",
        // "subtitles.entity.goat.prepare_ram": "Goat stomps",
        // "subtitles.entity.goat.ram_impact": "Goat rams",
        // "subtitles.entity.goat.step": "Goat steps",
        // "subtitles.entity.guardian.ambient": "Guardian moans",
        // "subtitles.entity.guardian.ambient_land": "Guardian flaps",
        // "subtitles.entity.guardian.attack": "Guardian shoots",
        // "subtitles.entity.guardian.death": "Guardian dies",
        // "subtitles.entity.guardian.flop": "Guardian flops",
        // "subtitles.entity.guardian.hurt": "Guardian hurts",
        // "subtitles.entity.hoglin.ambient": "Hoglin growls",
        // "subtitles.entity.hoglin.angry": "Hoglin growls angrily",
        // "subtitles.entity.hoglin.attack": "Hoglin attacks",
        // "subtitles.entity.hoglin.converted_to_zombified": "Hoglin converts to Zoglin",
        // "subtitles.entity.hoglin.death": "Hoglin dies",
        // "subtitles.entity.hoglin.hurt": "Hoglin hurts",
        // "subtitles.entity.hoglin.retreat": "Hoglin retreats",
        // "subtitles.entity.hoglin.step": "Hoglin steps",
        // "subtitles.entity.horse.ambient": "Horse neighs",
        // "subtitles.entity.horse.angry": "Horse neighs",
        // "subtitles.entity.horse.armor": "Horse armor equips",
        // "subtitles.entity.horse.breathe": "Horse breathes",
        // "subtitles.entity.horse.death": "Horse dies",
        // "subtitles.entity.horse.eat": "Horse eats",
        // "subtitles.entity.horse.gallop": "Horse gallops",
        // "subtitles.entity.horse.hurt": "Horse hurts",
        // "subtitles.entity.horse.jump": "Horse jumps",
        // "subtitles.entity.horse.saddle": "Saddle equips",
        // "subtitles.entity.husk.ambient": "Husk groans",
        // "subtitles.entity.husk.converted_to_zombie": "Husk converts to Zombie",
        // "subtitles.entity.husk.death": "Husk dies",
        // "subtitles.entity.husk.hurt": "Husk hurts",
        // "subtitles.entity.illusioner.ambient": "Illusioner murmurs",
        // "subtitles.entity.illusioner.cast_spell": "Illusioner casts spell",
        // "subtitles.entity.illusioner.death": "Illusioner dies",
        // "subtitles.entity.illusioner.hurt": "Illusioner hurts",
        // "subtitles.entity.illusioner.mirror_move": "Illusioner displaces",
        // "subtitles.entity.illusioner.prepare_blindness": "Illusioner prepares blindness",
        // "subtitles.entity.illusioner.prepare_mirror": "Illusioner prepares mirror image",
        // "subtitles.entity.iron_golem.attack": "Iron Golem attacks",
        // "subtitles.entity.iron_golem.damage": "Iron Golem breaks",
        // "subtitles.entity.iron_golem.death": "Iron Golem dies",
        // "subtitles.entity.iron_golem.hurt": "Iron Golem hurts",
        // "subtitles.entity.iron_golem.repair": "Iron Golem repaired",
        // "subtitles.entity.item.break": "Item breaks",
        // "subtitles.entity.item.pickup": "Item plops",
        // "subtitles.entity.item_frame.add_item": "Item Frame fills",
        // "subtitles.entity.item_frame.break": "Item Frame breaks",
        // "subtitles.entity.item_frame.place": "Item Frame placed",
        // "subtitles.entity.item_frame.remove_item": "Item Frame empties",
        // "subtitles.entity.item_frame.rotate_item": "Item Frame clicks",
        // "subtitles.entity.leash_knot.break": "Leash knot breaks",
        // "subtitles.entity.leash_knot.place": "Leash knot tied",
        // "subtitles.entity.lightning_bolt.impact": "Lightning strikes",
        // "subtitles.entity.lightning_bolt.thunder": "Thunder roars",
        // "subtitles.entity.llama.ambient": "Llama bleats",
        // "subtitles.entity.llama.angry": "Llama bleats angrily",
        // "subtitles.entity.llama.chest": "Llama Chest equips",
        // "subtitles.entity.llama.death": "Llama dies",
        // "subtitles.entity.llama.eat": "Llama eats",
        // "subtitles.entity.llama.hurt": "Llama hurts",
        // "subtitles.entity.llama.spit": "Llama spits",
        // "subtitles.entity.llama.step": "Llama steps",
        // "subtitles.entity.llama.swag": "Llama is decorated",
        // "subtitles.entity.magma_cube.death": "Magma Cube dies",
        // "subtitles.entity.magma_cube.hurt": "Magma Cube hurts",
        // "subtitles.entity.magma_cube.squish": "Magma Cube squishes",
        // "subtitles.entity.minecart.riding": "Minecart rolls",
        // "subtitles.entity.mooshroom.convert": "Mooshroom transforms",
        // "subtitles.entity.mooshroom.eat": "Mooshroom eats",
        // "subtitles.entity.mooshroom.milk": "Mooshroom gets milked",
        // "subtitles.entity.mooshroom.suspicious_milk": "Mooshroom gets milked suspiciously",
        // "subtitles.entity.mule.ambient": "Mule hee-haws",
        // "subtitles.entity.mule.angry": "Mule neighs",
        // "subtitles.entity.mule.chest": "Mule Chest equips",
        // "subtitles.entity.mule.death": "Mule dies",
        // "subtitles.entity.mule.eat": "Mule eats",
        // "subtitles.entity.mule.hurt": "Mule hurts",
        // "subtitles.entity.painting.break": "Painting breaks",
        // "subtitles.entity.painting.place": "Painting placed",
        // "subtitles.entity.panda.aggressive_ambient": "Panda huffs",
        // "subtitles.entity.panda.ambient": "Panda pants",
        // "subtitles.entity.panda.bite": "Panda bites",
        // "subtitles.entity.panda.cant_breed": "Panda bleats",
        // "subtitles.entity.panda.death": "Panda dies",
        // "subtitles.entity.panda.eat": "Panda eats",
        // "subtitles.entity.panda.hurt": "Panda hurts",
        // "subtitles.entity.panda.pre_sneeze": "Panda's nose tickles",
        // "subtitles.entity.panda.sneeze": "Panda sneezes",
        // "subtitles.entity.panda.step": "Panda steps",
        // "subtitles.entity.panda.worried_ambient": "Panda whimpers",
        // "subtitles.entity.parrot.ambient": "Parrot talks",
        // "subtitles.entity.parrot.death": "Parrot dies",
        // "subtitles.entity.parrot.eats": "Parrot eats",
        // "subtitles.entity.parrot.fly": "Parrot flutters",
        // "subtitles.entity.parrot.hurts": "Parrot hurts",
        // "subtitles.entity.parrot.imitate.blaze": "Parrot breathes",
        // "subtitles.entity.parrot.imitate.creeper": "Parrot hisses",
        // "subtitles.entity.parrot.imitate.drowned": "Parrot gurgles",
        // "subtitles.entity.parrot.imitate.elder_guardian": "Parrot flaps",
        // "subtitles.entity.parrot.imitate.ender_dragon": "Parrot roars",
        // "subtitles.entity.parrot.imitate.endermite": "Parrot scuttles",
        // "subtitles.entity.parrot.imitate.evoker": "Parrot murmurs",
        // "subtitles.entity.parrot.imitate.ghast": "Parrot cries",
        // "subtitles.entity.parrot.imitate.guardian": "Parrot moans",
        // "subtitles.entity.parrot.imitate.hoglin": "Parrot growls",
        // "subtitles.entity.parrot.imitate.husk": "Parrot groans",
        // "subtitles.entity.parrot.imitate.illusioner": "Parrot murmurs",
        // "subtitles.entity.parrot.imitate.magma_cube": "Parrot squishes",
        // "subtitles.entity.parrot.imitate.phantom": "Parrot screeches",
        // "subtitles.entity.parrot.imitate.piglin": "Parrot snorts",
        // "subtitles.entity.parrot.imitate.piglin_brute": "Parrot snorts mightily",
        // "subtitles.entity.parrot.imitate.pillager": "Parrot murmurs",
        // "subtitles.entity.parrot.imitate.ravager": "Parrot grunts",
        // "subtitles.entity.parrot.imitate.shulker": "Parrot lurks",
        // "subtitles.entity.parrot.imitate.silverfish": "Parrot hisses",
        // "subtitles.entity.parrot.imitate.skeleton": "Parrot rattles",
        // "subtitles.entity.parrot.imitate.slime": "Parrot squishes",
        // "subtitles.entity.parrot.imitate.spider": "Parrot hisses",
        // "subtitles.entity.parrot.imitate.stray": "Parrot rattles",
        // "subtitles.entity.parrot.imitate.vex": "Parrot vexes",
        // "subtitles.entity.parrot.imitate.vindicator": "Parrot mutters",
        // "subtitles.entity.parrot.imitate.witch": "Parrot giggles",
        // "subtitles.entity.parrot.imitate.wither": "Parrot angers",
        // "subtitles.entity.parrot.imitate.wither_skeleton": "Parrot rattles",
        // "subtitles.entity.parrot.imitate.zoglin": "Parrot growls",
        // "subtitles.entity.parrot.imitate.zombie": "Parrot groans",
        // "subtitles.entity.parrot.imitate.zombie_villager": "Parrot groans",
        // "subtitles.entity.phantom.ambient": "Phantom screeches",
        // "subtitles.entity.phantom.bite": "Phantom bites",
        // "subtitles.entity.phantom.death": "Phantom dies",
        // "subtitles.entity.phantom.flap": "Phantom flaps",
        // "subtitles.entity.phantom.hurt": "Phantom hurts",
        // "subtitles.entity.phantom.swoop": "Phantom swoops",
        // "subtitles.entity.pig.ambient": "Pig oinks",
        // "subtitles.entity.pig.death": "Pig dies",
        // "subtitles.entity.pig.hurt": "Pig hurts",
        // "subtitles.entity.pig.saddle": "Saddle equips",
        // "subtitles.entity.piglin.admiring_item": "Piglin admires item",
        // "subtitles.entity.piglin.ambient": "Piglin snorts",
        // "subtitles.entity.piglin.angry": "Piglin snorts angrily",
        // "subtitles.entity.piglin.celebrate": "Piglin celebrates",
        // "subtitles.entity.piglin.converted_to_zombified": "Piglin converts to Zombified Piglin",
        // "subtitles.entity.piglin.death": "Piglin dies",
        // "subtitles.entity.piglin.hurt": "Piglin hurts",
        // "subtitles.entity.piglin.jealous": "Piglin snorts enviously",
        // "subtitles.entity.piglin.retreat": "Piglin retreats",
        // "subtitles.entity.piglin.step": "Piglin steps",
        // "subtitles.entity.piglin_brute.ambient": "Piglin Brute snorts",
        // "subtitles.entity.piglin_brute.angry": "Piglin Brute snorts angrily",
        // "subtitles.entity.piglin_brute.death": "Piglin Brute dies",
        // "subtitles.entity.piglin_brute.hurt": "Piglin Brute hurts",
        // "subtitles.entity.piglin_brute.step": "Piglin Brute steps",
        // "subtitles.entity.piglin_brute.converted_to_zombified": "Piglin Brute converts to Zombified Piglin",
        // "subtitles.entity.pillager.ambient": "Pillager murmurs",
        // "subtitles.entity.pillager.celebrate": "Pillager cheers",
        // "subtitles.entity.pillager.death": "Pillager dies",
        // "subtitles.entity.pillager.hurt": "Pillager hurts",
        // "subtitles.entity.player.attack.crit": "Critical attack",
        // "subtitles.entity.player.attack.knockback": "Knockback attack",
        // "subtitles.entity.player.attack.strong": "Strong attack",
        // "subtitles.entity.player.attack.sweep": "Sweeping attack",
        // "subtitles.entity.player.attack.weak": "Weak attack",
        // "subtitles.entity.player.burp": "Burp",
        // "subtitles.entity.player.death": "Player dies",
        // "subtitles.entity.player.hurt": "Player hurts",
        // "subtitles.entity.player.hurt_drown": "Player drowning",
        // "subtitles.entity.player.hurt_on_fire": "Player burns",
        // "subtitles.entity.player.levelup": "Player dings",
        // "subtitles.entity.player.freeze_hurt": "Player freezes",
        // "subtitles.entity.polar_bear.ambient": "Polar Bear groans",
        // "subtitles.entity.polar_bear.ambient_baby": "Polar Bear hums",
        // "subtitles.entity.polar_bear.death": "Polar Bear dies",
        // "subtitles.entity.polar_bear.hurt": "Polar Bear hurts",
        // "subtitles.entity.polar_bear.warning": "Polar Bear roars",
        // "subtitles.entity.potion.splash": "Bottle smashes",
        // "subtitles.entity.potion.throw": "Bottle thrown",
        // "subtitles.entity.puffer_fish.blow_out": "Pufferfish deflates",
        // "subtitles.entity.puffer_fish.blow_up": "Pufferfish inflates",
        // "subtitles.entity.puffer_fish.death": "Pufferfish dies",
        // "subtitles.entity.puffer_fish.flop": "Pufferfish flops",
        // "subtitles.entity.puffer_fish.hurt": "Pufferfish hurts",
        // "subtitles.entity.puffer_fish.sting": "Pufferfish stings",
        // "subtitles.entity.rabbit.ambient": "Rabbit squeaks",
        // "subtitles.entity.rabbit.attack": "Rabbit attacks",
        // "subtitles.entity.rabbit.death": "Rabbit dies",
        // "subtitles.entity.rabbit.hurt": "Rabbit hurts",
        // "subtitles.entity.rabbit.jump": "Rabbit hops",
        // "subtitles.entity.ravager.ambient": "Ravager grunts",
        // "subtitles.entity.ravager.attack": "Ravager bites",
        // "subtitles.entity.ravager.celebrate": "Ravager cheers",
        // "subtitles.entity.ravager.death": "Ravager dies",
        // "subtitles.entity.ravager.hurt": "Ravager hurts",
        // "subtitles.entity.ravager.roar": "Ravager roars",
        // "subtitles.entity.ravager.step": "Ravager steps",
        // "subtitles.entity.ravager.stunned": "Ravager stunned",
        // "subtitles.entity.salmon.death": "Salmon dies",
        // "subtitles.entity.salmon.flop": "Salmon flops",
        // "subtitles.entity.salmon.hurt": "Salmon hurts",
        // "subtitles.entity.sheep.ambient": "Sheep baahs",
        // "subtitles.entity.sheep.death": "Sheep dies",
        // "subtitles.entity.sheep.hurt": "Sheep hurts",
        // "subtitles.entity.shulker.ambient": "Shulker lurks",
        // "subtitles.entity.shulker.close": "Shulker closes",
        // "subtitles.entity.shulker.death": "Shulker dies",
        // "subtitles.entity.shulker.hurt": "Shulker hurts",
        // "subtitles.entity.shulker.open": "Shulker opens",
        // "subtitles.entity.shulker.shoot": "Shulker shoots",
        // "subtitles.entity.shulker.teleport": "Shulker teleports",
        // "subtitles.entity.shulker_bullet.hit": "Shulker Bullet explodes",
        // "subtitles.entity.shulker_bullet.hurt": "Shulker Bullet breaks",
        // "subtitles.entity.silverfish.ambient": "Silverfish hisses",
        // "subtitles.entity.silverfish.death": "Silverfish dies",
        // "subtitles.entity.silverfish.hurt": "Silverfish hurts",
        // "subtitles.entity.skeleton.ambient": "Skeleton rattles",
        // "subtitles.entity.skeleton.converted_to_stray": "Skeleton converts to Stray",
        // "subtitles.entity.skeleton.death": "Skeleton dies",
        // "subtitles.entity.skeleton.hurt": "Skeleton hurts",
        // "subtitles.entity.skeleton.shoot": "Skeleton shoots",
        // "subtitles.entity.skeleton_horse.ambient": "Skeleton Horse cries",
        // "subtitles.entity.skeleton_horse.death": "Skeleton Horse dies",
        // "subtitles.entity.skeleton_horse.hurt": "Skeleton Horse hurts",
        // "subtitles.entity.skeleton_horse.swim": "Skeleton Horse swims",
        // "subtitles.entity.slime.attack": "Slime attacks",
        // "subtitles.entity.slime.death": "Slime dies",
        // "subtitles.entity.slime.hurt": "Slime hurts",
        // "subtitles.entity.slime.squish": "Slime squishes",
        // "subtitles.entity.snow_golem.death": "Snow Golem dies",
        // "subtitles.entity.snow_golem.hurt": "Snow Golem hurts",
        // "subtitles.entity.snowball.throw": "Snowball flies",
        // "subtitles.entity.spider.ambient": "Spider hisses",
        // "subtitles.entity.spider.death": "Spider dies",
        // "subtitles.entity.spider.hurt": "Spider hurts",
        // "subtitles.entity.squid.ambient": "Squid swims",
        // "subtitles.entity.squid.death": "Squid dies",
        // "subtitles.entity.squid.hurt": "Squid hurts",
        // "subtitles.entity.squid.squirt": "Squid shoots ink",
        // "subtitles.entity.stray.ambient": "Stray rattles",
        // "subtitles.entity.stray.death": "Stray dies",
        // "subtitles.entity.stray.hurt": "Stray hurts",
        // "subtitles.entity.strider.death": "Strider dies",
        // "subtitles.entity.strider.eat": "Strider eats",
        // "subtitles.entity.strider.happy": "Strider warbles",
        // "subtitles.entity.strider.hurt": "Strider hurts",
        // "subtitles.entity.strider.idle": "Strider chirps",
        // "subtitles.entity.strider.retreat": "Strider retreats",
        // "subtitles.entity.tnt.primed": "TNT fizzes",
        // "subtitles.entity.tropical_fish.death": "Tropical Fish dies",
        // "subtitles.entity.tropical_fish.flop": "Tropical Fish flops",
        // "subtitles.entity.tropical_fish.hurt": "Tropical Fish hurts",
        // "subtitles.entity.turtle.ambient_land": "Turtle chirps",
        // "subtitles.entity.turtle.death": "Turtle dies",
        // "subtitles.entity.turtle.death_baby": "Turtle baby dies",
        // "subtitles.entity.turtle.egg_break": "Turtle Egg breaks",
        // "subtitles.entity.turtle.egg_crack": "Turtle Egg cracks",
        // "subtitles.entity.turtle.egg_hatch": "Turtle Egg hatches",
        // "subtitles.entity.turtle.hurt": "Turtle hurts",
        // "subtitles.entity.turtle.hurt_baby": "Turtle baby hurts",
        // "subtitles.entity.turtle.lay_egg": "Turtle lays egg",
        // "subtitles.entity.turtle.shamble": "Turtle shambles",
        // "subtitles.entity.turtle.shamble_baby": "Turtle baby shambles",
        // "subtitles.entity.turtle.swim": "Turtle swims",
        // "subtitles.entity.vex.ambient": "Vex vexes",
        // "subtitles.entity.vex.charge": "Vex shrieks",
        // "subtitles.entity.vex.death": "Vex dies",
        // "subtitles.entity.vex.hurt": "Vex hurts",
        // "subtitles.entity.villager.ambient": "Villager mumbles",
        // "subtitles.entity.villager.celebrate": "Villager cheers",
        // "subtitles.entity.villager.death": "Villager dies",
        // "subtitles.entity.villager.hurt": "Villager hurts",
        // "subtitles.entity.villager.no": "Villager disagrees",
        // "subtitles.entity.villager.trade": "Villager trades",
        // "subtitles.entity.villager.work_armorer": "Armorer works",
        // "subtitles.entity.villager.work_butcher": "Butcher works",
        // "subtitles.entity.villager.work_cartographer": "Cartographer works",
        // "subtitles.entity.villager.work_cleric": "Cleric works",
        // "subtitles.entity.villager.work_farmer": "Farmer works",
        // "subtitles.entity.villager.work_fisherman": "Fisherman works",
        // "subtitles.entity.villager.work_fletcher": "Fletcher works",
        // "subtitles.entity.villager.work_leatherworker": "Leatherworker works",
        // "subtitles.entity.villager.work_librarian": "Librarian works",
        // "subtitles.entity.villager.work_mason": "Mason works",
        // "subtitles.entity.villager.work_shepherd": "Shepherd works",
        // "subtitles.entity.villager.work_toolsmith": "Toolsmith works",
        // "subtitles.entity.villager.work_weaponsmith": "Weaponsmith works",
        // "subtitles.entity.villager.yes": "Villager agrees",
        // "subtitles.entity.vindicator.ambient": "Vindicator mutters",
        // "subtitles.entity.vindicator.celebrate": "Vindicator cheers",
        // "subtitles.entity.vindicator.death": "Vindicator dies",
        // "subtitles.entity.vindicator.hurt": "Vindicator hurts",
        // "subtitles.entity.wandering_trader.ambient": "Wandering Trader mumbles",
        // "subtitles.entity.wandering_trader.death": "Wandering Trader dies",
        // "subtitles.entity.wandering_trader.disappeared": "Wandering Trader disappears",
        // "subtitles.entity.wandering_trader.drink_milk": "Wandering Trader drinks milk",
        // "subtitles.entity.wandering_trader.drink_potion": "Wandering Trader drinks potion",
        // "subtitles.entity.wandering_trader.hurt": "Wandering Trader hurts",
        // "subtitles.entity.wandering_trader.no": "Wandering Trader disagrees",
        // "subtitles.entity.wandering_trader.reappeared": "Wandering Trader appears",
        // "subtitles.entity.wandering_trader.trade": "Wandering Trader trades",
        // "subtitles.entity.wandering_trader.yes": "Wandering Trader agrees",
        // "subtitles.entity.witch.ambient": "Witch giggles",
        // "subtitles.entity.witch.celebrate": "Witch cheers",
        // "subtitles.entity.witch.death": "Witch dies",
        // "subtitles.entity.witch.drink": "Witch drinks",
        // "subtitles.entity.witch.hurt": "Witch hurts",
        // "subtitles.entity.witch.throw": "Witch throws",
        // "subtitles.entity.wither.ambient": "Wither angers",
        // "subtitles.entity.wither.death": "Wither dies",
        // "subtitles.entity.wither.hurt": "Wither hurts",
        // "subtitles.entity.wither.shoot": "Wither attacks",
        // "subtitles.entity.wither.spawn": "Wither released",
        // "subtitles.entity.wither_skeleton.ambient": "Wither Skeleton rattles",
        // "subtitles.entity.wither_skeleton.death": "Wither Skeleton dies",
        // "subtitles.entity.wither_skeleton.hurt": "Wither Skeleton hurts",
        // "subtitles.entity.wolf.ambient": "Wolf pants",
        // "subtitles.entity.wolf.death": "Wolf dies",
        // "subtitles.entity.wolf.growl": "Wolf growls",
        // "subtitles.entity.wolf.hurt": "Wolf hurts",
        // "subtitles.entity.wolf.shake": "Wolf shakes",
        // "subtitles.entity.zoglin.ambient": "Zoglin growls",
        // "subtitles.entity.zoglin.angry": "Zoglin growls angrily",
        // "subtitles.entity.zoglin.attack": "Zoglin attacks",
        // "subtitles.entity.zoglin.death": "Zoglin dies",
        // "subtitles.entity.zoglin.hurt": "Zoglin hurts",
        // "subtitles.entity.zoglin.step": "Zoglin steps",
        // "subtitles.entity.zombie.ambient": "Zombie groans",
        // "subtitles.entity.zombie.attack_wooden_door": "Door shakes",
        // "subtitles.entity.zombie.converted_to_drowned": "Zombie converts to Drowned",
        // "subtitles.entity.zombie.break_wooden_door": "Door breaks",
        // "subtitles.entity.zombie.death": "Zombie dies",
        // "subtitles.entity.zombie.destroy_egg": "Turtle Egg stomped",
        // "subtitles.entity.zombie.hurt": "Zombie hurts",
        // "subtitles.entity.zombie.infect": "Zombie infects",
        // "subtitles.entity.zombie_horse.ambient": "Zombie Horse cries",
        // "subtitles.entity.zombie_horse.death": "Zombie Horse dies",
        // "subtitles.entity.zombie_horse.hurt": "Zombie Horse hurts",
        // "subtitles.entity.zombie_villager.ambient": "Zombie Villager groans",
        // "subtitles.entity.zombie_villager.converted": "Zombie Villager vociferates",
        // "subtitles.entity.zombie_villager.cure": "Zombie Villager snuffles",
        // "subtitles.entity.zombie_villager.death": "Zombie Villager dies",
        // "subtitles.entity.zombie_villager.hurt": "Zombie Villager hurts",
        // "subtitles.entity.zombified_piglin.ambient": "Zombified Piglin grunts",
        // "subtitles.entity.zombified_piglin.angry": "Zombified Piglin grunts angrily",
        // "subtitles.entity.zombified_piglin.death": "Zombified Piglin dies",
        // "subtitles.entity.zombified_piglin.hurt": "Zombified Piglin hurts",
        // "subtitles.event.raid.horn": "Ominous horn blares",
        // "subtitles.item.armor.equip": "Gear equips",
        // "subtitles.item.armor.equip_chain": "Chain armor jingles",
        // "subtitles.item.armor.equip_diamond": "Diamond armor clangs",
        // "subtitles.item.armor.equip_elytra": "Elytra rustle",
        // "subtitles.item.armor.equip_gold": "Gold armor clinks",
        // "subtitles.item.armor.equip_iron": "Iron armor clanks",
        // "subtitles.item.armor.equip_leather": "Leather armor rustles",
        // "subtitles.item.armor.equip_netherite": "Netherite armor clanks",
        // "subtitles.item.armor.equip_turtle": "Turtle Shell thunks",
        // "subtitles.item.axe.strip": "Axe strips",
        // "subtitles.item.axe.scrape": "Axe scrapes",
        // "subtitles.item.axe.wax_off": "Wax off",
        // "subtitles.item.bone_meal.use": "Bone Meal crinkles",
        // "subtitles.item.book.page_turn": "Page rustles",
        // "subtitles.item.book.put": "Book thumps",
        // "subtitles.item.bottle.empty": "Bottle empties",
        // "subtitles.item.bottle.fill": "Bottle fills",
        // "subtitles.item.bucket.empty": "Bucket empties",
        // "subtitles.item.bucket.fill": "Bucket fills",
        // "subtitles.item.bucket.fill_axolotl": "Axolotl scooped",
        // "subtitles.item.bucket.fill_fish": "Fish captured",
        // "subtitles.item.bundle.drop_contents": "Bundle empties",
        // "subtitles.item.bundle.insert": "Item packed",
        // "subtitles.item.bundle.remove_one": "Item unpacked",
        // "subtitles.item.chorus_fruit.teleport": "Player teleports",
        // "subtitles.item.crop.plant": "Crop planted",
        // "subtitles.item.crossbow.charge": "Crossbow charges up",
        // "subtitles.item.crossbow.hit": "Arrow hits",
        // "subtitles.item.crossbow.load": "Crossbow loads",
        // "subtitles.item.crossbow.shoot": "Crossbow fires",
        // "subtitles.item.firecharge.use": "Fireball whooshes",
        // "subtitles.item.flintandsteel.use": "Flint and Steel click",
        // "subtitles.item.hoe.till": "Hoe tills",
        // "subtitles.item.honey_bottle.drink": "Gulping",
        // "subtitles.item.lodestone_compass.lock": "Lodestone Compass locks onto Lodestone",
        // "subtitles.item.nether_wart.plant": "Crop planted",
        // "subtitles.item.shears.shear": "Shears click",
        // "subtitles.item.shield.block": "Shield blocks",
        // "subtitles.item.shovel.flatten": "Shovel flattens",
        // "subtitles.item.totem.use": "Totem activates",
        // "subtitles.item.trident.hit": "Trident stabs",
        // "subtitles.item.trident.hit_ground": "Trident vibrates",
        // "subtitles.item.trident.return": "Trident returns",
        // "subtitles.item.trident.riptide": "Trident zooms",
        // "subtitles.item.trident.throw": "Trident clangs",
        // "subtitles.item.trident.thunder": "Trident thunder cracks",
        // "subtitles.item.spyglass.use": "Spyglass expands",
        // "subtitles.item.spyglass.stop_using": "Spyglass retracts",
        // "subtitles.item.ink_sac.use": "Ink Sac splotches",
        // "subtitles.item.glow_ink_sac.use": "Glow Ink Sac splotches",
        // "subtitles.item.dye.use": "Dye stains",
        // "subtitles.particle.soul_escape": "Soul escapes",
        // "subtitles.ui.cartography_table.take_result": "Map drawn",
        // "subtitles.ui.loom.take_result": "Loom used",
        // "subtitles.ui.stonecutter.take_result": "Stonecutter used",
        // "subtitles.weather.rain": "Rain falls",
        "subtitles": { }

        // "debug.prefix": "[Debug]:",
        // "debug.reload_chunks.help": "F3 + A = Reload chunks",
        // "debug.show_hitboxes.help": "F3 + B = Show hitboxes",
        // "debug.clear_chat.help": "F3 + D = Clear chat",
        // "debug.cycle_renderdistance.help": "F3 + F = Cycle render distance (shift to invert)",
        // "debug.chunk_boundaries.help": "F3 + G = Show chunk boundaries",
        // "debug.advanced_tooltips.help": "F3 + H = Advanced tooltips",
        // "debug.creative_spectator.help": "F3 + N = Cycle previous gamemode <-> spectator",
        // "debug.pause_focus.help": "F3 + P = Pause on lost focus",
        // "debug.help.help": "F3 + Q = Show this list",
        // "debug.reload_resourcepacks.help": "F3 + T = Reload resource packs",
        // "debug.pause.help": "F3 + Esc = Pause without pause menu (if pausing is possible)",
        // "debug.copy_location.help": "F3 + C = Copy location as /tp command, hold F3 + C to crash the game",
        // "debug.inspect.help": "F3 + I = Copy entity or block data to clipboard",
        // "debug.gamemodes.help": "F3 + F4 = Open game mode switcher",
        // "debug.profiling.help": "F3 + L = Start/stop profiling",
        // "debug.copy_location.message": "Copied location to clipboard",
        // "debug.inspect.server.block": "Copied server-side block data to clipboard",
        // "debug.inspect.server.entity": "Copied server-side entity data to clipboard",
        // "debug.inspect.client.block": "Copied client-side block data to clipboard",
        // "debug.inspect.client.entity": "Copied client-side entity data to clipboard",
        // "debug.reload_chunks.message": "Reloading all chunks",
        // "debug.show_hitboxes.on": "Hitboxes: shown",
        // "debug.show_hitboxes.off": "Hitboxes: hidden",
        // "debug.cycle_renderdistance.message": "Render Distance: %s",
        // "debug.chunk_boundaries.on": "Chunk borders: shown",
        // "debug.chunk_boundaries.off": "Chunk borders: hidden",
        // "debug.advanced_tooltips.on": "Advanced tooltips: shown",
        // "debug.advanced_tooltips.off": "Advanced tooltips: hidden",
        // "debug.creative_spectator.error": "Unable to switch gamemode; no permission",
        // "debug.gamemodes.error": "Unable to open game mode switcher; no permission",
        // "debug.pause_focus.on": "Pause on lost focus: enabled",
        // "debug.pause_focus.off": "Pause on lost focus: disabled",
        // "debug.help.message": "Key bindings:",
        // "debug.reload_resourcepacks.message": "Reloaded resource packs",
        // "debug.crash.message": "F3 + C is held down. This will crash the game unless released.",
        // "debug.crash.warning": "Crashing in %s...",
        // "debug.gamemodes.press_f4": "[ F4 ]",
        // "debug.gamemodes.select_next": "%s Next",
        // "debug.profiling.start": "Profiling started for %s seconds. Use F3 + L to stop early",
        // "debug.profiling.stop": "Profiling ended. Saved results to %s",
        "debug": { }

        // "tutorial.bundleInsert.title": "Use a Bundle",
        // "tutorial.bundleInsert.description": "Right Click to add items",
        // "tutorial.move.title": "Move with %s, %s, %s and %s",
        // "tutorial.move.description": "Jump with %s",
        // "tutorial.look.title": "Look around",
        // "tutorial.look.description": "Use your mouse to turn",
        // "tutorial.find_tree.title": "Find a tree",
        // "tutorial.find_tree.description": "Punch it to collect wood",
        // "tutorial.punch_tree.title": "Destroy the tree",
        // "tutorial.punch_tree.description": "Hold down %s",
        // "tutorial.open_inventory.title": "Open your inventory",
        // "tutorial.open_inventory.description": "Press %s",
        // "tutorial.craft_planks.title": "Craft wooden planks",
        // "tutorial.craft_planks.description": "The recipe book can help",
        // "tutorial.socialInteractions.title": "Social Interactions",
        // "tutorial.socialInteractions.description": "Press %s to open",
        "tutorial": { }

        // "team.visibility.always": "Always",
        // "team.visibility.never": "Never",
        // "team.visibility.hideForOtherTeams": "Hide for other teams",
        // "team.visibility.hideForOwnTeam": "Hide for own team",
        // "team.collision.always": "Always",
        // "team.collision.never": "Never",
        // "team.collision.pushOtherTeams": "Push other teams",
        // "team.collision.pushOwnTeam": "Push own team",
        // "team.notFound": "Unknown team '%s'",
        "team": { }

        // "command.context.here": "<--[HERE]",
        // "command.context.parse_error": "%s at position %s: %s",
        // "command.failed": "An unexpected error occurred trying to execute that command",
        // "command.exception": "Could not parse command: %s",
        // "command.unknown.command": "Unknown or incomplete command, see below for error",
        // "command.unknown.argument": "Incorrect argument for command",
        // "command.expected.separator": "Expected whitespace to end one argument, but found trailing data",
        "command": { }

        // "commands.publish.started": "Local game hosted on port %s",
        // "commands.publish.failed": "Unable to host local game",
        // "commands.advancement.advancementNotFound": "No advancement was found by the name '%1$s'",
        // "commands.advancement.criterionNotFound": "The advancement %1$s does not contain the criterion '%2$s'",
        // "commands.advancement.grant.one.to.one.success": "Granted the advancement %s to %s",
        // "commands.advancement.grant.one.to.one.failure": "Couldn't grant advancement %s to %s as they already have it",
        // "commands.advancement.grant.one.to.many.success": "Granted the advancement %s to %s players",
        // "commands.advancement.grant.one.to.many.failure": "Couldn't grant advancement %s to %s players as they already have it",
        // "commands.advancement.grant.many.to.one.success": "Granted %s advancements to %s",
        // "commands.advancement.grant.many.to.one.failure": "Couldn't grant %s advancements to %s as they already have them",
        // "commands.advancement.grant.many.to.many.success": "Granted %s advancements to %s players",
        // "commands.advancement.grant.many.to.many.failure": "Couldn't grant %s advancements to %s players as they already have them",
        // "commands.advancement.grant.criterion.to.one.success": "Granted criterion '%s' of advancement %s to %s",
        // "commands.advancement.grant.criterion.to.one.failure": "Couldn't grant criterion '%s' of advancement %s to %s as they already have it",
        // "commands.advancement.grant.criterion.to.many.success": "Granted criterion '%s' of advancement %s to %s players",
        // "commands.advancement.grant.criterion.to.many.failure": "Couldn't grant criterion '%s' of advancement %s to %s players as they already have it",
        // "commands.advancement.revoke.one.to.one.success": "Revoked the advancement %s from %s",
        // "commands.advancement.revoke.one.to.one.failure": "Couldn't revoke advancement %s from %s as they don't have it",
        // "commands.advancement.revoke.one.to.many.success": "Revoked the advancement %s from %s players",
        // "commands.advancement.revoke.one.to.many.failure": "Couldn't revoke advancement %s from %s players as they don't have it",
        // "commands.advancement.revoke.many.to.one.success": "Revoked %s advancements from %s",
        // "commands.advancement.revoke.many.to.one.failure": "Couldn't revoke %s advancements from %s as they don't have them",
        // "commands.advancement.revoke.many.to.many.success": "Revoked %s advancements from %s players",
        // "commands.advancement.revoke.many.to.many.failure": "Couldn't revoke %s advancements from %s players as they don't have them",
        // "commands.advancement.revoke.criterion.to.one.success": "Revoked criterion '%s' of advancement %s from %s",
        // "commands.advancement.revoke.criterion.to.one.failure": "Couldn't revoke criterion '%s' of advancement %s from %s as they don't have it",
        // "commands.advancement.revoke.criterion.to.many.success": "Revoked criterion '%s' of advancement %s from %s players",
        // "commands.advancement.revoke.criterion.to.many.failure": "Couldn't revoke criterion '%s' of advancement %s from %s players as they don't have it",
        // "commands.attribute.failed.entity": "%s is not a valid entity for this command",
        // "commands.attribute.failed.no_attribute": "Entity %s has no attribute %s",
        // "commands.attribute.failed.no_modifier": "Attribute %s for entity %s has no modifier %s",
        // "commands.attribute.failed.modifier_already_present": "Modifier %s is already present on attribute %s for entity %s",
        // "commands.attribute.value.get.success": "Value of attribute %s for entity %s is %s",
        // "commands.attribute.base_value.get.success": "Base value of attribute %s for entity %s is %s",
        // "commands.attribute.base_value.set.success": "Base value for attribute %s for entity %s set to %s",
        // "commands.attribute.modifier.add.success": "Added modifier %s to attribute %s for entity %s",
        // "commands.attribute.modifier.remove.success": "Removed modifier %s from attribute %s for entity %s",
        // "commands.attribute.modifier.value.get.success": "Value of modifier %s on attribute %s for entity %s is %s",
        // "commands.forceload.added.failure": "No chunks were marked for force loading",
        // "commands.forceload.added.single": "Marked chunk %s in %s to be force loaded",
        // "commands.forceload.added.multiple": "Marked %s chunks in %s from %s to %s to be force loaded",
        // "commands.forceload.query.success": "Chunk at %s in %s is marked for force loading",
        // "commands.forceload.query.failure": "Chunk at %s in %s is not marked for force loading",
        // "commands.forceload.list.single": "A force loaded chunk was found in %s at: %s",
        // "commands.forceload.list.multiple": "%s force loaded chunks were found in %s at: %s",
        // "commands.forceload.added.none": "No force loaded chunks were found in %s",
        // "commands.forceload.removed.all": "Unmarked all force loaded chunks in %s",
        // "commands.forceload.removed.failure": "No chunks were removed from force loading",
        // "commands.forceload.removed.single": "Unmarked chunk %s in %s for force loading",
        // "commands.forceload.removed.multiple": "Unmarked %s chunks in %s from %s to %s for force loading",
        // "commands.forceload.toobig": "Too many chunks in the specified area (maximum %s, specified %s)",
        // "commands.clear.success.single": "Removed %s items from player %s",
        // "commands.clear.success.multiple": "Removed %s items from %s players",
        // "commands.clear.test.single": "Found %s matching items on player %s",
        // "commands.clear.test.multiple": "Found %s matching items on %s players",
        // "commands.clone.success": "Successfully cloned %s blocks",
        // "commands.debug.started": "Started tick profiling",
        // "commands.debug.stopped": "Stopped tick profiling after %s seconds and %s ticks (%s ticks per second)",
        // "commands.debug.notRunning": "The tick profiler hasn't started",
        // "commands.debug.alreadyRunning": "The tick profiler is already started",
        // "commands.debug.function.success.single": "Traced %s commands from function '%s' to output file %s",
        // "commands.debug.function.success.multiple": "Traced %s commands from %s functions to output file %s",
        // "commands.debug.function.noRecursion": "Can't trace from inside of function",
        // "commands.debug.function.traceFailed": "Failed to trace function",
        // "commands.defaultgamemode.success": "The default game mode is now %s",
        // "commands.difficulty.success": "The difficulty has been set to %s",
        // "commands.difficulty.query": "The difficulty is %s",
        // "commands.drop.no_held_items": "Entity can't hold any items",
        // "commands.drop.no_loot_table": "Entity %s has no loot table",
        // "commands.drop.success.single": "Dropped %s %s",
        // "commands.drop.success.single_with_table": "Dropped %s %s from loot table %s",
        // "commands.drop.success.multiple": "Dropped %s items",
        // "commands.drop.success.multiple_with_table": "Dropped %s items from loot table %s",
        // "commands.effect.give.success.single": "Applied effect %s to %s",
        // "commands.effect.give.success.multiple": "Applied effect %s to %s targets",
        // "commands.effect.clear.everything.success.single": "Removed every effect from %s",
        // "commands.effect.clear.everything.success.multiple": "Removed every effect from %s targets",
        // "commands.effect.clear.specific.success.single": "Removed effect %s from %s",
        // "commands.effect.clear.specific.success.multiple": "Removed effect %s from %s targets",
        // "commands.enchant.success.single": "Applied enchantment %s to %s's item",
        // "commands.enchant.success.multiple": "Applied enchantment %s to %s entities",
        // "commands.experience.add.points.success.single": "Gave %s experience points to %s",
        // "commands.experience.add.points.success.multiple": "Gave %s experience points to %s players",
        // "commands.experience.add.levels.success.single": "Gave %s experience levels to %s",
        // "commands.experience.add.levels.success.multiple": "Gave %s experience levels to %s players",
        // "commands.experience.set.points.success.single": "Set %s experience points on %s",
        // "commands.experience.set.points.success.multiple": "Set %s experience points on %s players",
        // "commands.experience.set.levels.success.single": "Set %s experience levels on %s",
        // "commands.experience.set.levels.success.multiple": "Set %s experience levels on %s players",
        // "commands.experience.query.points": "%s has %s experience points",
        // "commands.experience.query.levels": "%s has %s experience levels",
        // "commands.fill.success": "Successfully filled %s blocks",
        // "commands.function.success.single": "Executed %s commands from function '%s'",
        // "commands.function.success.multiple": "Executed %s commands from %s functions",
        // "commands.give.failed.toomanyitems": "Can't give more than %s of %s",
        // "commands.give.success.single": "Gave %s %s to %s",
        // "commands.give.success.multiple": "Gave %s %s to %s players",
        // "commands.playsound.success.single": "Played sound %s to %s",
        // "commands.playsound.success.multiple": "Played sound %s to %s players",
        // "commands.publish.success": "Multiplayer game is now hosted on port %s",
        // "commands.list.players": "There are %s of a max of %s players online: %s",
        // "commands.list.nameAndId": "%s (%s)",
        // "commands.kill.success.single": "Killed %s",
        // "commands.kill.success.multiple": "Killed %s entities",
        // "commands.kick.success": "Kicked %s: %s",
        // "commands.locate.success": "The nearest %s is at %s (%s blocks away)",
        // "commands.locatebiome.success": "The nearest %s is at %s (%s blocks away)",
        // "commands.message.display.outgoing": "You whisper to %s: %s",
        // "commands.message.display.incoming": "%s whispers to you: %s",
        // "commands.op.success": "Made %s a server operator",
        // "commands.deop.success": "Made %s no longer a server operator",
        // "commands.ban.success": "Banned %s: %s",
        // "commands.pardon.success": "Unbanned %s",
        // "commands.particle.success": "Displaying particle %s",
        // "commands.perf.started": "Started 10 second performance profiling run (use '/perf stop' to stop early)",
        // "commands.perf.stopped": "Stopped performance profiling after %s seconds and %s ticks (%s ticks per second)",
        // "commands.perf.reportSaved": "Created debug report in %s",
        // "commands.perf.reportFailed": "Failed to create debug report",
        // "commands.perf.notRunning": "The performance profiler hasn't started",
        // "commands.perf.alreadyRunning": "The performance profiler is already started",
        // "commands.jfr.started": "JFR profiling started",
        // "commands.jfr.start.failed": "Failed to start JFR profiling",
        // "commands.jfr.stopped": "JFR profiling stopped and dumped to %s",
        // "commands.jfr.dump.failed": "Failed to dump JFR recording: %s",
        // "commands.seed.success": "Seed: %s",
        // "commands.stop.stopping": "Stopping the server",
        // "commands.time.query": "The time is %s",
        // "commands.time.set": "Set the time to %s",
        // "commands.schedule.created.function": "Scheduled function '%s' in %s ticks at gametime %s",
        // "commands.schedule.created.tag": "Scheduled tag '%s' in %s ticks at gametime %s",
        // "commands.schedule.cleared.success": "Removed %s schedules with id %s",
        // "commands.schedule.cleared.failure": "No schedules with id %s",
        // "commands.schedule.same_tick": "Can't schedule for current tick",
        // "commands.gamemode.success.self": "Set own game mode to %s",
        // "commands.gamemode.success.other": "Set %s's game mode to %s",
        // "commands.gamerule.query": "Gamerule %s is currently set to: %s",
        // "commands.gamerule.set": "Gamerule %s is now set to: %s",
        // "commands.save.disabled": "Automatic saving is now disabled",
        // "commands.save.enabled": "Automatic saving is now enabled",
        // "commands.save.saving": "Saving the game (this may take a moment!)",
        // "commands.save.success": "Saved the game",
        // "commands.setidletimeout.success": "The player idle timeout is now %s minutes",
        // "commands.banlist.none": "There are no bans",
        // "commands.banlist.list": "There are %s bans:",
        // "commands.banlist.entry": "%s was banned by %s: %s",
        // "commands.bossbar.create.success": "Created custom bossbar %s",
        // "commands.bossbar.remove.success": "Removed custom bossbar %s",
        // "commands.bossbar.list.bars.none": "There are no custom bossbars active",
        // "commands.bossbar.list.bars.some": "There are %s custom bossbars active: %s",
        // "commands.bossbar.set.players.success.none": "Custom bossbar %s no longer has any players",
        // "commands.bossbar.set.players.success.some": "Custom bossbar %s now has %s players: %s",
        // "commands.bossbar.set.name.success": "Custom bossbar %s has been renamed",
        // "commands.bossbar.set.color.success": "Custom bossbar %s has changed color",
        // "commands.bossbar.set.style.success": "Custom bossbar %s has changed style",
        // "commands.bossbar.set.value.success": "Custom bossbar %s has changed value to %s",
        // "commands.bossbar.set.max.success": "Custom bossbar %s has changed maximum to %s",
        // "commands.bossbar.set.visible.success.visible": "Custom bossbar %s is now visible",
        // "commands.bossbar.set.visible.success.hidden": "Custom bossbar %s is now hidden",
        // "commands.bossbar.get.value": "Custom bossbar %s has a value of %s",
        // "commands.bossbar.get.max": "Custom bossbar %s has a maximum of %s",
        // "commands.bossbar.get.visible.visible": "Custom bossbar %s is currently shown",
        // "commands.bossbar.get.visible.hidden": "Custom bossbar %s is currently hidden",
        // "commands.bossbar.get.players.none": "Custom bossbar %s has no players currently online",
        // "commands.bossbar.get.players.some": "Custom bossbar %s has %s players currently online: %s",
        // "commands.recipe.give.success.single": "Unlocked %s recipes for %s",
        // "commands.recipe.give.success.multiple": "Unlocked %s recipes for %s players",
        // "commands.recipe.take.success.single": "Took %s recipes from %s",
        // "commands.recipe.take.success.multiple": "Took %s recipes from %s players",
        // "commands.summon.success": "Summoned new %s",
        // "commands.whitelist.enabled": "Whitelist is now turned on",
        // "commands.whitelist.disabled": "Whitelist is now turned off",
        // "commands.whitelist.none": "There are no whitelisted players",
        // "commands.whitelist.list": "There are %s whitelisted players: %s",
        // "commands.whitelist.add.success": "Added %s to the whitelist",
        // "commands.whitelist.remove.success": "Removed %s from the whitelist",
        // "commands.whitelist.reloaded": "Reloaded the whitelist",
        // "commands.weather.set.clear": "Set the weather to clear",
        // "commands.weather.set.rain": "Set the weather to rain",
        // "commands.weather.set.thunder": "Set the weather to rain & thunder",
        // "commands.spawnpoint.success.single": "Set spawn point to %s, %s, %s [%s] in %s for %s",
        // "commands.spawnpoint.success.multiple": "Set spawn point to %s, %s, %s [%s] in %s for %s players",
        // "commands.stopsound.success.source.sound": "Stopped sound '%s' on source '%s'",
        // "commands.stopsound.success.source.any": "Stopped all '%s' sounds",
        // "commands.stopsound.success.sourceless.sound": "Stopped sound '%s'",
        // "commands.stopsound.success.sourceless.any": "Stopped all sounds",
        // "commands.setworldspawn.success": "Set the world spawn point to %s, %s, %s [%s]",
        // "commands.spreadplayers.success.teams": "Spread %s teams around %s, %s with an average distance of %s blocks apart",
        // "commands.spreadplayers.success.entities": "Spread %s players around %s, %s with an average distance of %s blocks apart",
        // "commands.setblock.success": "Changed the block at %s, %s, %s",
        // "commands.banip.success": "Banned IP %s: %s",
        // "commands.banip.info": "This ban affects %s players: %s",
        // "commands.pardonip.success": "Unbanned IP %s",
        // "commands.teleport.success.entity.single": "Teleported %s to %s",
        // "commands.teleport.success.entity.multiple": "Teleported %s entities to %s",
        // "commands.teleport.success.location.single": "Teleported %s to %s, %s, %s",
        // "commands.teleport.success.location.multiple": "Teleported %s entities to %s, %s, %s",
        // "commands.teleport.invalidPosition": "Invalid position for teleport",
        // "commands.title.cleared.single": "Cleared titles for %s",
        // "commands.title.cleared.multiple": "Cleared titles for %s players",
        // "commands.title.reset.single": "Reset title options for %s",
        // "commands.title.reset.multiple": "Reset title options for %s players",
        // "commands.title.show.title.single": "Showing new title for %s",
        // "commands.title.show.title.multiple": "Showing new title for %s players",
        // "commands.title.show.subtitle.single": "Showing new subtitle for %s",
        // "commands.title.show.subtitle.multiple": "Showing new subtitle for %s players",
        // "commands.title.show.actionbar.single": "Showing new actionbar title for %s",
        // "commands.title.show.actionbar.multiple": "Showing new actionbar title for %s players",
        // "commands.title.times.single": "Changed title display times for %s",
        // "commands.title.times.multiple": "Changed title display times for %s players",
        // "commands.worldborder.set.grow": "Growing the world border to %s blocks wide over %s seconds",
        // "commands.worldborder.set.shrink": "Shrinking the world border to %s blocks wide over %s seconds",
        // "commands.worldborder.set.immediate": "Set the world border to %s blocks wide",
        // "commands.worldborder.center.success": "Set the center of the world border to %s, %s",
        // "commands.worldborder.get": "The world border is currently %s blocks wide",
        // "commands.worldborder.damage.buffer.success": "Set the world border damage buffer to %s blocks",
        // "commands.worldborder.damage.amount.success": "Set the world border damage to %s per block each second",
        // "commands.worldborder.warning.time.success": "Set the world border warning time to %s seconds",
        // "commands.worldborder.warning.distance.success": "Set the world border warning distance to %s blocks",
        // "commands.tag.add.success.single": "Added tag '%s' to %s",
        // "commands.tag.add.success.multiple": "Added tag '%s' to %s entities",
        // "commands.tag.remove.success.single": "Removed tag '%s' from %s",
        // "commands.tag.remove.success.multiple": "Removed tag '%s' from %s entities",
        // "commands.tag.list.single.empty": "%s has no tags",
        // "commands.tag.list.single.success": "%s has %s tags: %s",
        // "commands.tag.list.multiple.empty": "There are no tags on the %s entities",
        // "commands.tag.list.multiple.success": "The %s entities have %s total tags: %s",
        // "commands.team.list.members.empty": "There are no members on team %s",
        // "commands.team.list.members.success": "Team %s has %s members: %s",
        // "commands.team.list.teams.empty": "There are no teams",
        // "commands.team.list.teams.success": "There are %s teams: %s",
        // "commands.team.add.success": "Created team %s",
        // "commands.team.remove.success": "Removed team %s",
        // "commands.team.empty.success": "Removed %s members from team %s",
        // "commands.team.option.color.success": "Updated the color for team %s to %s",
        // "commands.team.option.name.success": "Updated the name of team %s",
        // "commands.team.option.friendlyfire.enabled": "Enabled friendly fire for team %s",
        // "commands.team.option.friendlyfire.disabled": "Disabled friendly fire for team %s",
        // "commands.team.option.seeFriendlyInvisibles.enabled": "Team %s can now see invisible teammates",
        // "commands.team.option.seeFriendlyInvisibles.disabled": "Team %s can no longer see invisible teammates",
        // "commands.team.option.nametagVisibility.success": "Nametag visibility for team %s is now \"%s\"",
        // "commands.team.option.deathMessageVisibility.success": "Death message visibility for team %s is now \"%s\"",
        // "commands.team.option.collisionRule.success": "Collision rule for team %s is now \"%s\"",
        // "commands.team.option.prefix.success": "Team prefix set to %s",
        // "commands.team.option.suffix.success": "Team suffix set to %s",
        // "commands.team.join.success.single": "Added %s to team %s",
        // "commands.team.join.success.multiple": "Added %s members to team %s",
        // "commands.team.leave.success.single": "Removed %s from any team",
        // "commands.team.leave.success.multiple": "Removed %s members from any team",
        // "commands.trigger.simple.success": "Triggered %s",
        // "commands.trigger.add.success": "Triggered %s (added %s to value)",
        // "commands.trigger.set.success": "Triggered %s (set value to %s)",
        // "commands.scoreboard.objectives.list.empty": "There are no objectives",
        // "commands.scoreboard.objectives.list.success": "There are %s objectives: %s",
        // "commands.scoreboard.objectives.add.success": "Created new objective %s",
        // "commands.scoreboard.objectives.remove.success": "Removed objective %s",
        // "commands.scoreboard.objectives.display.cleared": "Cleared any objectives in display slot %s",
        // "commands.scoreboard.objectives.display.set": "Set display slot %s to show objective %s",
        // "commands.scoreboard.objectives.modify.displayname": "Changed the display name of %s to %s",
        // "commands.scoreboard.objectives.modify.rendertype": "Changed the render type of objective %s",
        // "commands.scoreboard.players.list.empty": "There are no tracked entities",
        // "commands.scoreboard.players.list.success": "There are %s tracked entities: %s",
        // "commands.scoreboard.players.list.entity.empty": "%s has no scores to show",
        // "commands.scoreboard.players.list.entity.success": "%s has %s scores:",
        // "commands.scoreboard.players.list.entity.entry": "%s: %s",
        // "commands.scoreboard.players.set.success.single": "Set %s for %s to %s",
        // "commands.scoreboard.players.set.success.multiple": "Set %s for %s entities to %s",
        // "commands.scoreboard.players.add.success.single": "Added %s to %s for %s (now %s)",
        // "commands.scoreboard.players.add.success.multiple": "Added %s to %s for %s entities",
        // "commands.scoreboard.players.remove.success.single": "Removed %s from %s for %s (now %s)",
        // "commands.scoreboard.players.remove.success.multiple": "Removed %s from %s for %s entities",
        // "commands.scoreboard.players.reset.all.single": "Reset all scores for %s",
        // "commands.scoreboard.players.reset.all.multiple": "Reset all scores for %s entities",
        // "commands.scoreboard.players.reset.specific.single": "Reset %s for %s",
        // "commands.scoreboard.players.reset.specific.multiple": "Reset %s for %s entities",
        // "commands.scoreboard.players.enable.success.single": "Enabled trigger %s for %s",
        // "commands.scoreboard.players.enable.success.multiple": "Enabled trigger %s for %s entities",
        // "commands.scoreboard.players.operation.success.single": "Set %s for %s to %s",
        // "commands.scoreboard.players.operation.success.multiple": "Updated %s for %s entities",
        // "commands.scoreboard.players.get.success": "%s has %s %s",
        // "commands.reload.success": "Reloading!",
        // "commands.reload.failure": "Reload failed; keeping old data",
        // "commands.data.entity.modified": "Modified entity data of %s",
        // "commands.data.entity.query": "%s has the following entity data: %s",
        // "commands.data.entity.get": "%s on %s after scale factor of %s is %s",
        // "commands.data.block.modified": "Modified block data of %s, %s, %s",
        // "commands.data.block.query": "%s, %s, %s has the following block data: %s",
        // "commands.data.block.get": "%s on block %s, %s, %s after scale factor of %s is %s",
        // "commands.data.storage.modified": "Modified storage %s",
        // "commands.data.storage.query": "Storage %s has the following contents: %s",
        // "commands.data.storage.get": "%s in storage %s after scale factor of %s is %s",
        // "commands.datapack.list.enabled.success": "There are %s data packs enabled: %s",
        // "commands.datapack.list.enabled.none": "There are no data packs enabled",
        // "commands.datapack.list.available.success": "There are %s data packs available: %s",
        // "commands.datapack.list.available.none": "There are no more data packs available",
        // "commands.datapack.modify.enable": "Enabling data pack %s",
        // "commands.datapack.modify.disable": "Disabling data pack %s",
        // "commands.spectate.success.stopped": "No longer spectating an entity",
        // "commands.spectate.success.started": "Now spectating %s",
        // "commands.spectate.not_spectator": "%s is not in spectator mode",
        // "commands.spectate.self": "Cannot spectate yourself",
        // "commands.item.target.not_a_container": "Target position %s, %s, %s is not a container",
        // "commands.item.source.not_a_container": "Source position %s, %s, %s is not a container",
        // "commands.item.target.no_such_slot": "The target does not have slot %s",
        // "commands.item.source.no_such_slot": "The source does not have slot %s",
        // "commands.item.target.no_changes": "No targets accepted item into slot %s",
        // "commands.item.target.no_changed.known_item": "No targets accepted item %s into slot %s",
        // "commands.item.block.set.success": "Replaced a slot at %s, %s, %s with %s",
        // "commands.item.entity.set.success.single": "Replaced a slot on %s with %s",
        // "commands.item.entity.set.success.multiple": "Replaced a slot on %s entities with %s",
        // "commands.banip.invalid": "Invalid IP address or unknown player",
        // "commands.banip.failed": "Nothing changed. That IP is already banned",
        // "commands.ban.failed": "Nothing changed. The player is already banned",
        // "commands.bossbar.set.players.unchanged": "Nothing changed. Those players are already on the bossbar with nobody to add or remove",
        // "commands.bossbar.set.name.unchanged": "Nothing changed. That's already the name of this bossbar",
        // "commands.bossbar.set.color.unchanged": "Nothing changed. That's already the color of this bossbar",
        // "commands.bossbar.set.style.unchanged": "Nothing changed. That's already the style of this bossbar",
        // "commands.bossbar.set.value.unchanged": "Nothing changed. That's already the value of this bossbar",
        // "commands.bossbar.set.max.unchanged": "Nothing changed. That's already the max of this bossbar",
        // "commands.bossbar.set.visibility.unchanged.hidden": "Nothing changed. The bossbar is already hidden",
        // "commands.bossbar.set.visibility.unchanged.visible": "Nothing changed. The bossbar is already visible",
        // "commands.clone.overlap": "The source and destination areas cannot overlap",
        // "commands.clone.failed": "No blocks were cloned",
        // "commands.deop.failed": "Nothing changed. The player is not an operator",
        // "commands.effect.give.failed": "Unable to apply this effect (target is either immune to effects, or has something stronger)",
        // "commands.effect.clear.everything.failed": "Target has no effects to remove",
        // "commands.effect.clear.specific.failed": "Target doesn't have the requested effect",
        // "commands.enchant.failed": "Nothing changed. Targets either have no item in their hands or the enchantment could not be applied",
        // "commands.experience.set.points.invalid": "Cannot set experience points above the maximum points for the player's current level",
        // "commands.fill.failed": "No blocks were filled",
        // "commands.help.failed": "Unknown command or insufficient permissions",
        // "commands.locate.failed": "Could not find a structure of type \"%s\" nearby",
        // "commands.locate.invalid": "There is no structure with type \"%s\"",
        // "commands.locatebiome.notFound": "Could not find a biome of type \"%s\" within reasonable distance",
        // "commands.locatebiome.invalid": "There is no biome with type \"%s\"",
        // "commands.op.failed": "Nothing changed. The player already is an operator",
        // "commands.pardon.failed": "Nothing changed. The player isn't banned",
        // "commands.pardonip.invalid": "Invalid IP address",
        // "commands.pardonip.failed": "Nothing changed. That IP isn't banned",
        // "commands.particle.failed": "The particle was not visible for anybody",
        // "commands.placefeature.failed": "Failed to place feature",
        // "commands.placefeature.invalid": "There is no feature with type \"%s\"",
        // "commands.placefeature.success": "Placed \"%s\" at %s, %s, %s",
        // "commands.playsound.failed": "The sound is too far away to be heard",
        // "commands.recipe.give.failed": "No new recipes were learned",
        // "commands.recipe.take.failed": "No recipes could be forgotten",
        // "commands.save.failed": "Unable to save the game (is there enough disk space?)",
        // "commands.save.alreadyOff": "Saving is already turned off",
        // "commands.save.alreadyOn": "Saving is already turned on",
        // "commands.scoreboard.objectives.add.duplicate": "An objective already exists by that name",
        // "commands.scoreboard.objectives.display.alreadyEmpty": "Nothing changed. That display slot is already empty",
        // "commands.scoreboard.objectives.display.alreadySet": "Nothing changed. That display slot is already showing that objective",
        // "commands.scoreboard.players.enable.failed": "Nothing changed. That trigger is already enabled",
        // "commands.scoreboard.players.enable.invalid": "Enable only works on trigger-objectives",
        // "commands.setblock.failed": "Could not set the block",
        // "commands.summon.failed": "Unable to summon entity",
        // "commands.summon.failed.uuid": "Unable to summon entity due to duplicate UUIDs",
        // "commands.summon.invalidPosition": "Invalid position for summon",
        // "commands.tag.add.failed": "Target either already has the tag or has too many tags",
        // "commands.tag.remove.failed": "Target does not have this tag",
        // "commands.team.add.duplicate": "A team already exists by that name",
        // "commands.team.empty.unchanged": "Nothing changed. That team is already empty",
        // "commands.team.option.color.unchanged": "Nothing changed. That team already has that color",
        // "commands.team.option.name.unchanged": "Nothing changed. That team already has that name",
        // "commands.team.option.friendlyfire.alreadyEnabled": "Nothing changed. Friendly fire is already enabled for that team",
        // "commands.team.option.friendlyfire.alreadyDisabled": "Nothing changed. Friendly fire is already disabled for that team",
        // "commands.team.option.seeFriendlyInvisibles.alreadyEnabled": "Nothing changed. That team can already see invisible teammates",
        // "commands.team.option.seeFriendlyInvisibles.alreadyDisabled": "Nothing changed. That team already can't see invisible teammates",
        // "commands.team.option.nametagVisibility.unchanged": "Nothing changed. Nametag visibility is already that value",
        // "commands.team.option.deathMessageVisibility.unchanged": "Nothing changed. Death message visibility is already that value",
        // "commands.team.option.collisionRule.unchanged": "Nothing changed. Collision rule is already that value",
        // "commands.trigger.failed.unprimed": "You cannot trigger this objective yet",
        // "commands.trigger.failed.invalid": "You can only trigger objectives that are 'trigger' type",
        // "commands.whitelist.alreadyOn": "Whitelist is already turned on",
        // "commands.whitelist.alreadyOff": "Whitelist is already turned off",
        // "commands.whitelist.add.failed": "Player is already whitelisted",
        // "commands.whitelist.remove.failed": "Player is not whitelisted",
        // "commands.worldborder.center.failed": "Nothing changed. The world border is already centered there",
        // "commands.worldborder.set.failed.nochange": "Nothing changed. The world border is already that size",
        // "commands.worldborder.set.failed.small": "World border cannot be smaller than 1 block wide",
        // "commands.worldborder.set.failed.big": "World border cannot be bigger than %s blocks wide",
        // "commands.worldborder.set.failed.far": "World border cannot be further out than %s blocks",
        // "commands.worldborder.warning.time.failed": "Nothing changed. The world border warning is already that amount of time",
        // "commands.worldborder.warning.distance.failed": "Nothing changed. The world border warning is already that distance",
        // "commands.worldborder.damage.buffer.failed": "Nothing changed. The world border damage buffer is already that distance",
        // "commands.worldborder.damage.amount.failed": "Nothing changed. The world border damage is already that amount",
        // "commands.data.block.invalid": "The target block is not a block entity",
        // "commands.data.merge.failed": "Nothing changed. The specified properties already have these values",
        // "commands.data.modify.expected_list": "Expected list, got: %s",
        // "commands.data.modify.expected_object": "Expected object, got: %s",
        // "commands.data.modify.invalid_index": "Invalid list index: %s",
        // "commands.data.get.multiple": "This argument accepts a single NBT value",
        // "commands.data.entity.invalid": "Unable to modify player data",
        // "commands.teammsg.failed.noteam": "You must be on a team to message your team",
        // "commands.clone.toobig": "Too many blocks in the specified area (maximum %s, specified %s)",
        // "commands.datapack.unknown": "Unknown data pack '%s'",
        // "commands.datapack.enable.failed": "Pack '%s' is already enabled!",
        // "commands.datapack.disable.failed": "Pack '%s' is not enabled!",
        // "commands.difficulty.failure": "The difficulty did not change; it is already set to %s",
        // "commands.enchant.failed.entity": "%s is not a valid entity for this command",
        // "commands.enchant.failed.itemless": "%s is not holding any item",
        // "commands.enchant.failed.incompatible": "%s cannot support that enchantment",
        // "commands.enchant.failed.level": "%s is higher than the maximum level of %s supported by that enchantment",
        // "commands.execute.blocks.toobig": "Too many blocks in the specified area (maximum %s, specified %s)",
        // "commands.execute.conditional.pass": "Test passed",
        // "commands.execute.conditional.pass_count": "Test passed, count: %s",
        // "commands.execute.conditional.fail": "Test failed",
        // "commands.execute.conditional.fail_count": "Test failed, count: %s",
        // "commands.fill.toobig": "Too many blocks in the specified area (maximum %s, specified %s)",
        // "commands.publish.alreadyPublished": "Multiplayer game is already hosted on port %s",
        // "commands.scoreboard.players.get.null": "Can't get value of %s for %s; none is set",
        // "commands.spreadplayers.failed.teams": "Could not spread %s teams around %s, %s (too many entities for space - try using spread of at most %s)",
        // "commands.spreadplayers.failed.entities": "Could not spread %s entities around %s, %s (too many entities for space - try using spread of at most %s)",
        // "commands.spreadplayers.failed.invalid.height": "Invalid maxHeight %s; expected higher than world minimum %s",
        // "commands.data.get.invalid": "Can't get %s; only numeric tags are allowed",
        // "commands.data.get.unknown": "Can't get %s; tag doesn't exist",
        // "commands.bossbar.create.failed": "A bossbar already exists with the ID '%s'",
        // "commands.bossbar.unknown": "No bossbar exists with the ID '%s'",
        "commands": { }

        // "argument.uuid.invalid": "Invalid UUID",
        // "argument.entity.selector.nearestPlayer": "Nearest player",
        // "argument.entity.selector.randomPlayer": "Random player",
        // "argument.entity.selector.allPlayers": "All players",
        // "argument.entity.selector.allEntities": "All entities",
        // "argument.entity.selector.self": "Current entity",
        // "argument.entity.options.name.description": "Entity name",
        // "argument.entity.options.distance.description": "Distance to entity",
        // "argument.entity.options.level.description": "Experience level",
        // "argument.entity.options.x.description": "x position",
        // "argument.entity.options.y.description": "y position",
        // "argument.entity.options.z.description": "z position",
        // "argument.entity.options.dx.description": "Entities between x and x + dx",
        // "argument.entity.options.dy.description": "Entities between y and y + dy",
        // "argument.entity.options.dz.description": "Entities between z and z + dz",
        // "argument.entity.options.x_rotation.description": "Entity's x rotation",
        // "argument.entity.options.y_rotation.description": "Entity's y rotation",
        // "argument.entity.options.limit.description": "Maximum number of entities to return",
        // "argument.entity.options.sort.description": "Sort the entities",
        // "argument.entity.options.gamemode.description": "Players with gamemode",
        // "argument.entity.options.team.description": "Entities on team",
        // "argument.entity.options.type.description": "Entities of type",
        // "argument.entity.options.tag.description": "Entities with tag",
        // "argument.entity.options.nbt.description": "Entities with NBT",
        // "argument.entity.options.scores.description": "Entities with scores",
        // "argument.entity.options.advancements.description": "Players with advancements",
        // "argument.entity.options.predicate.description": "Custom predicate",
        // "argument.range.empty": "Expected value or range of values",
        // "argument.range.ints": "Only whole numbers allowed, not decimals",
        // "argument.range.swapped": "Min cannot be bigger than max",
        // "argument.angle.incomplete": "Incomplete (expected 1 angle)",
        // "argument.angle.invalid": "Invalid angle",
        // "argument.entity.toomany": "Only one entity is allowed, but the provided selector allows more than one",
        // "argument.player.toomany": "Only one player is allowed, but the provided selector allows more than one",
        // "argument.player.entities": "Only players may be affected by this command, but the provided selector includes entities",
        // "argument.entity.notfound.entity": "No entity was found",
        // "argument.entity.notfound.player": "No player was found",
        // "argument.player.unknown": "That player does not exist",
        // "argument.scoreHolder.empty": "No relevant score holders could be found",
        // "argument.block.tag.disallowed": "Tags aren't allowed here, only actual blocks",
        // "argument.block.property.unclosed": "Expected closing ] for block state properties",
        // "argument.pos.unloaded": "That position is not loaded",
        // "argument.pos.outofworld": "That position is out of this world!",
        // "argument.pos.outofbounds": "That position is outside the allowed boundaries.",
        // "argument.rotation.incomplete": "Incomplete (expected 2 coordinates)",
        // "argument.pos2d.incomplete": "Incomplete (expected 2 coordinates)",
        // "argument.pos3d.incomplete": "Incomplete (expected 3 coordinates)",
        // "argument.pos.mixed": "Cannot mix world & local coordinates (everything must either use ^ or not)",
        // "argument.pos.missing.double": "Expected a coordinate",
        // "argument.pos.missing.int": "Expected a block position",
        // "argument.item.tag.disallowed": "Tags aren't allowed here, only actual items",
        // "argument.entity.invalid": "Invalid name or UUID",
        // "argument.entity.selector.missing": "Missing selector type",
        // "argument.entity.selector.not_allowed": "Selector not allowed",
        // "argument.entity.options.unterminated": "Expected end of options",
        // "argument.entity.options.distance.negative": "Distance cannot be negative",
        // "argument.entity.options.level.negative": "Level shouldn't be negative",
        // "argument.entity.options.limit.toosmall": "Limit must be at least 1",
        // "argument.nbt.trailing": "Unexpected trailing data",
        // "argument.nbt.expected.key": "Expected key",
        // "argument.nbt.expected.value": "Expected value",
        // "argument.id.invalid": "Invalid ID",
        // "argument.time.invalid_unit": "Invalid unit",
        // "argument.time.invalid_tick_count": "Tick count must be non-negative",
        // "argument.color.invalid": "Unknown color '%s'",
        // "argument.dimension.invalid": "Unknown dimension '%s'",
        // "argument.component.invalid": "Invalid chat component: %s",
        // "argument.anchor.invalid": "Invalid entity anchor position %s",
        // "argument.criteria.invalid": "Unknown criterion '%s'",
        // "argument.id.unknown": "Unknown ID: %s",
        // "argument.scoreboardDisplaySlot.invalid": "Unknown display slot '%s'",
        // "argument.block.id.invalid": "Unknown block type '%s'",
        // "argument.block.property.unknown": "Block %s does not have property '%s'",
        // "argument.block.property.duplicate": "Property '%s' can only be set once for block %s",
        // "argument.block.property.invalid": "Block %s does not accept '%s' for %s property",
        // "argument.block.property.novalue": "Expected value for property '%s' on block %s",
        // "argument.item.id.invalid": "Unknown item '%s'",
        // "argument.entity.selector.unknown": "Unknown selector type '%s'",
        // "argument.entity.options.valueless": "Expected value for option '%s'",
        // "argument.entity.options.unknown": "Unknown option '%s'",
        // "argument.entity.options.inapplicable": "Option '%s' isn't applicable here",
        // "argument.entity.options.sort.irreversible": "Invalid or unknown sort type '%s'",
        // "argument.entity.options.mode.invalid": "Invalid or unknown game mode '%s'",
        // "argument.entity.options.type.invalid": "Invalid or unknown entity type '%s'",
        // "argument.nbt.list.mixed": "Can't insert %s into list of %s",
        // "argument.nbt.array.mixed": "Can't insert %s into %s",
        // "argument.nbt.array.invalid": "Invalid array type '%s'",
        // "argument.double.low": "Double must not be less than %s, found %s",
        // "argument.double.big": "Double must not be more than %s, found %s",
        // "argument.float.low": "Float must not be less than %s, found %s",
        // "argument.float.big": "Float must not be more than %s, found %s",
        // "argument.integer.low": "Integer must not be less than %s, found %s",
        // "argument.integer.big": "Integer must not be more than %s, found %s",
        // "argument.long.low": "Long must not be less than %s, found %s",
        // "argument.long.big": "Long must not be more than %s, found %s",
        // "argument.literal.incorrect": "Expected literal %s",
        "argument": { }

        // "arguments.nbtpath.node.invalid": "Invalid NBT path element",
        // "arguments.nbtpath.nothing_found": "Found no elements matching %s",
        // "arguments.operation.invalid": "Invalid operation",
        // "arguments.operation.div0": "Cannot divide by zero",
        // "arguments.swizzle.invalid": "Invalid swizzle, expected combination of 'x', 'y' and 'z'",
        // "arguments.objective.notFound": "Unknown scoreboard objective '%s'",
        // "arguments.objective.readonly": "Scoreboard objective '%s' is read-only",
        // "arguments.block.tag.unknown": "Unknown block tag '%s'",
        // "arguments.function.tag.unknown": "Unknown function tag '%s'",
        // "arguments.function.unknown": "Unknown function %s",
        // "arguments.item.overstacked": "%s can only stack up to %s",
        // "arguments.item.tag.unknown": "Unknown item tag '%s'",
        "arguments": { }

        // "permissions.requires.player": "A player is required to run this command here",
        // "permissions.requires.entity": "An entity is required to run this command here",
        "permissions": { }

        // "parsing.quote.expected.start": "Expected quote to start a string",
        // "parsing.quote.expected.end": "Unclosed quoted string",
        // "parsing.quote.escape": "Invalid escape sequence '\\%s' in quoted string",
        // "parsing.bool.invalid": "Invalid boolean, expected 'true' or 'false' but found '%s'",
        // "parsing.int.invalid": "Invalid integer '%s'",
        // "parsing.int.expected": "Expected integer",
        // "parsing.long.invalid": "Invalid long '%s'",
        // "parsing.long.expected": "Expected long",
        // "parsing.double.invalid": "Invalid double '%s'",
        // "parsing.double.expected": "Expected double",
        // "parsing.float.invalid": "Invalid float '%s'",
        // "parsing.float.expected": "Expected float",
        // "parsing.bool.expected": "Expected boolean",
        // "parsing.expected": "Expected '%s'",
        "passing": { }

        // "biome.minecraft.badlands": "Badlands",
        // "biome.minecraft.bamboo_jungle": "Bamboo Jungle",
        // "biome.minecraft.basalt_deltas": "Basalt Deltas",
        // "biome.minecraft.beach": "Beach",
        // "biome.minecraft.birch_forest": "Birch Forest",
        // "biome.minecraft.cold_ocean": "Cold Ocean",
        // "biome.minecraft.crimson_forest": "Crimson Forest",
        // "biome.minecraft.dark_forest": "Dark Forest",
        // "biome.minecraft.deep_cold_ocean": "Deep Cold Ocean",
        // "biome.minecraft.deep_frozen_ocean": "Deep Frozen Ocean",
        // "biome.minecraft.deep_lukewarm_ocean": "Deep Lukewarm Ocean",
        // "biome.minecraft.deep_ocean": "Deep Ocean",
        // "biome.minecraft.desert": "Desert",
        // "biome.minecraft.dripstone_caves": "Dripstone Caves",
        // "biome.minecraft.old_growth_birch_forest": "Old Growth Birch Forest",
        // "biome.minecraft.old_growth_pine_taiga": "Old Growth Pine Taiga",
        // "biome.minecraft.old_growth_spruce_taiga": "Old Growth Spruce Taiga",
        // "biome.minecraft.end_barrens": "End Barrens",
        // "biome.minecraft.end_highlands": "End Highlands",
        // "biome.minecraft.end_midlands": "End Midlands",
        // "biome.minecraft.eroded_badlands": "Eroded Badlands",
        // "biome.minecraft.flower_forest": "Flower Forest",
        // "biome.minecraft.forest": "Forest",
        // "biome.minecraft.frozen_ocean": "Frozen Ocean",
        // "biome.minecraft.frozen_peaks": "Frozen Peaks",
        // "biome.minecraft.frozen_river": "Frozen River",
        // "biome.minecraft.grove": "Grove",
        // "biome.minecraft.ice_spikes": "Ice Spikes",
        // "biome.minecraft.jagged_peaks": "Jagged Peaks",
        // "biome.minecraft.jungle": "Jungle",
        // "biome.minecraft.lukewarm_ocean": "Lukewarm Ocean",
        // "biome.minecraft.lush_caves": "Lush Caves",
        // "biome.minecraft.meadow": "Meadow",
        // "biome.minecraft.mushroom_fields": "Mushroom Fields",
        // "biome.minecraft.nether_wastes": "Nether Wastes",
        // "biome.minecraft.ocean": "Ocean",
        // "biome.minecraft.plains": "Plains",
        // "biome.minecraft.river": "River",
        // "biome.minecraft.savanna_plateau": "Savanna Plateau",
        // "biome.minecraft.savanna": "Savanna",
        // "biome.minecraft.small_end_islands": "Small End Islands",
        // "biome.minecraft.snowy_beach": "Snowy Beach",
        // "biome.minecraft.snowy_plains": "Snowy Plains",
        // "biome.minecraft.snowy_slopes": "Snowy Slopes",
        // "biome.minecraft.snowy_taiga": "Snowy Taiga",
        // "biome.minecraft.soul_sand_valley": "Soul Sand Valley",
        // "biome.minecraft.sparse_jungle": "Sparse Jungle",
        // "biome.minecraft.stony_peaks": "Stony Peaks",
        // "biome.minecraft.stony_shore": "Stony Shore",
        // "biome.minecraft.sunflower_plains": "Sunflower Plains",
        // "biome.minecraft.swamp": "Swamp",
        // "biome.minecraft.taiga": "Taiga",
        // "biome.minecraft.the_end": "The End",
        // "biome.minecraft.the_void": "The Void",
        // "biome.minecraft.warm_ocean": "Warm Ocean",
        // "biome.minecraft.warped_forest": "Warped Forest",
        // "biome.minecraft.windswept_forest": "Windswept Forest",
        // "biome.minecraft.windswept_gravelly_hills": "Windswept Gravelly Hills",
        // "biome.minecraft.windswept_hills": "Windswept Hills",
        // "biome.minecraft.windswept_savanna": "Windswept Savanna",
        // "biome.minecraft.wooded_badlands": "Wooded Badlands",
        "biome": { }

        // "gamerule.announceAdvancements": "Announce advancements",
        // "gamerule.commandBlockOutput": "Broadcast command block output",
        // "gamerule.disableElytraMovementCheck": "Disable elytra movement check",
        // "gamerule.disableRaids": "Disable raids",
        // "gamerule.doDaylightCycle": "Advance time of day",
        // "gamerule.doEntityDrops": "Drop entity equipment",
        // "gamerule.doEntityDrops.description": "Controls drops from minecarts (including inventories), item frames, boats, etc.",
        // "gamerule.doFireTick": "Update fire",
        // "gamerule.doImmediateRespawn": "Respawn immediately",
        // "gamerule.doInsomnia": "Spawn phantoms",
        // "gamerule.doLimitedCrafting": "Require recipe for crafting",
        // "gamerule.doLimitedCrafting.description": "If enabled, players will be able to craft only unlocked recipes",
        // "gamerule.doMobLoot": "Drop mob loot",
        // "gamerule.doMobLoot.description": "Controls resource drops from mobs, including experience orbs",
        // "gamerule.doMobSpawning": "Spawn mobs",
        // "gamerule.doMobSpawning.description": "Some entities might have separate rules",
        // "gamerule.doPatrolSpawning": "Spawn pillager patrols",
        // "gamerule.doTileDrops": "Drop blocks",
        // "gamerule.doTileDrops.description": "Controls resource drops from blocks, including experience orbs",
        // "gamerule.doTraderSpawning": "Spawn wandering traders",
        // "gamerule.doWeatherCycle": "Update weather",
        // "gamerule.drowningDamage": "Deal drowning damage",
        // "gamerule.fallDamage": "Deal fall damage",
        // "gamerule.fireDamage": "Deal fire damage",
        // "gamerule.freezeDamage": "Deal freeze damage",
        // "gamerule.forgiveDeadPlayers": "Forgive dead players",
        // "gamerule.forgiveDeadPlayers.description": "Angered neutral mobs stop being angry when the targeted player dies nearby.",
        // "gamerule.keepInventory": "Keep inventory after death",
        // "gamerule.logAdminCommands": "Broadcast admin commands",
        // "gamerule.maxCommandChainLength": "Command chain size limit",
        // "gamerule.maxCommandChainLength.description": "Applies to command block chains and functions",
        // "gamerule.maxEntityCramming": "Entity cramming threshold",
        // "gamerule.mobGriefing": "Allow destructive mob actions",
        // "gamerule.naturalRegeneration": "Regenerate health",
        // "gamerule.randomTickSpeed": "Random tick speed rate",
        // "gamerule.reducedDebugInfo": "Reduce debug info",
        // "gamerule.reducedDebugInfo.description": "Limits contents of debug screen",
        // "gamerule.sendCommandFeedback": "Send command feedback",
        // "gamerule.showDeathMessages": "Show death messages",
        // "gamerule.playersSleepingPercentage": "Sleep percentage",
        // "gamerule.playersSleepingPercentage.description": "The percentage of players who must be sleeping to skip the night.",
        // "gamerule.spawnRadius": "Respawn location radius",
        // "gamerule.spectatorsGenerateChunks": "Allow spectators to generate terrain",
        // "gamerule.universalAnger": "Universal anger",
        // "gamerule.universalAnger.description": "Angered neutral mobs attack any nearby player, not just the player that angered them. Works best if forgiveDeadPlayers is disabled.",
        // "gamerule.category.chat": "Chat",
        // "gamerule.category.spawning": "Spawning",
        // "gamerule.category.updates": "World Updates",
        // "gamerule.category.drops": "Drops",
        // "gamerule.category.mobs": "Mobs",
        // "gamerule.category.player": "Player",
        // "gamerule.category.misc": "Miscellaneous",
        "gamerule": { }

        // "color.minecraft.white": "White",
        // "color.minecraft.orange": "Orange",
        // "color.minecraft.magenta": "Magenta",
        // "color.minecraft.light_blue": "Light Blue",
        // "color.minecraft.yellow": "Yellow",
        // "color.minecraft.lime": "Lime",
        // "color.minecraft.pink": "Pink",
        // "color.minecraft.gray": "Gray",
        // "color.minecraft.light_gray": "Light Gray",
        // "color.minecraft.cyan": "Cyan",
        // "color.minecraft.purple": "Purple",
        // "color.minecraft.blue": "Blue",
        // "color.minecraft.brown": "Brown",
        // "color.minecraft.green": "Green",
        // "color.minecraft.red": "Red",
        // "color.minecraft.black": "Black",
        "color": { }

        // "mirror.none": "|",
        // "mirror.left_right": "\u2190 \u2192",
        // "mirror.front_back": "\u2191 \u2193",
        "mirror": { }
        
        // "sleep.not_possible": "No amount of rest can pass this night",
        // "sleep.players_sleeping": "%s/%s players sleeping",
        // "sleep.skipping_night": "Sleeping through this night",
        "sleep": { }
        
        // "compliance.playtime.greaterThan24Hours": "You've been playing for greater than 24 hours",
        // "compliance.playtime.message": "Excessive gaming may interfere with normal daily life",
        // "compliance.playtime.hours": "You've been playing for %s hour(s)" 
        "compliance": { }

        // "realms.missing.module.error.text": "Realms could not be opened right now, please try again later",
        // "realms.missing.snapshot.error.text": "Realms is currently not supported in snapshots",
        "realms": { }

        // "clear.failed.single": "No items were found on player %s",
        // "clear.failed.multiple": "No items were found on %s players",
        "clear": { }

        // "slot.unknown": "Unknown slot '%s'",
        "slot": { }

        // "lectern.take_book": "Take Book",
        "lectern": { }
        
        // "item_modifier.unknown": "Unknown item modifier: %s",
        "item_modifier": { }

        // "predicate.unknown": "Unknown predicate: %s",
        "predicate": { }

        // "particle.notFound": "Unknown particle: %s",
        "particle": { }

      }

      "models": { 
        
        "block": { } 
        
        "item": { }  
      
      }

      "particles": { }

      "shaders": { }

      "texts": { }

      "other": { }

    }

    "data": {

      "advancements": { }

      "loot_tables": { }

      "recipes": { }

      "structures": { }

      "tags": { }

    },

    "presets": {

      // modelo: "minecraft:block/barrel"
      "blockstates_model": String

    }

  }

  "beamngdrive": { }

  "terraria": { }
  
  "cubbic": {

    "tamanho": {

      "tam02x02": {
        
        "estrutura": [[][]]
        "aviso": String 
      
      }
      "tam03x03": {
        
        "estrutura": [[][][]] 
        "aviso": String 
      
      }
      "tam04x04": {
        
        "estrutura": [[][][][]] 
        "aviso": String 
      
      }
      "tam05x05": {
        
        "estrutura": [[][][][][]] 
        "aviso": String 
      
      }
      "tam06x06": {
        
        "estrutura": [[][][][][][]] 
        "aviso": String 
      
      }
      "tam07x07": {
        
        "estrutura": [[][][][][][][]] 
        "aviso": String 
      
      }
      "tam08x08": {
        
        "estrutura": [[][][][][][][][]] 
        "aviso": String 
      
      }
      "tam09x09": {
        
        "estrutura": [[][][][][][][][][]] 
        "aviso": String 
      
      }
      "tam10x10": {
        
        "estrutura": [[][][][][][][][][][]] 
        "aviso": String 
      
      }

    }

    "pontuacao": {

      "valorm2": {

        "nvl01": {
          
          "valor": 2 
          "cor": String
        
        }
        "nvl02": {
          
          "valor": 4 
          "cor": String
        
        }
        "nvl03": {
          
          "valor": 8 
          "cor": String
        
        }
        "nvl04": {
          
          "valor": 16 
          "cor": String
        
        }
        "nvl05": {
          
          "valor": 32 
          "cor": String
        
        }
        "nvl06": {
          
          "valor": 64 
          "cor": String
        
        }
        "nvl07": {
          
          "valor": 128 
          "cor": String
        
        }
        "nvl08": {
          
          "valor": 256 
          "cor": String
        
        }
        "nvl09": {
          
          "valor": 512 
          "cor": String
        
        }
        "nvl10": {
          
          "valor": 1024 
          "cor": String
        
        }
        "nvl11": {
          
          "valor": 2048 
          "cor": String
        
        }
        "nvl12": {
          
          "valor": 4096 
          "cor": String
        
        }
        "nvl13": {
          
          "valor": 8192 
          "cor": String
        
        }
        "nvl14": {
          
          "valor": 16384 
          "cor": String
        
        }
        "nvl15": {
          
          "valor": 32768 
          "cor": String
        
        }
        "nvl16": {
          
          "valor": 65536 
          "cor": String
        
        }
        "nvl17": {
          
          "valor": 131072 
          "cor": String
        
        }
        "nvl18": {
          
          "valor": 262144 
          "cor": String
        
        }
        "nvl19": {
          
          "valor": 524288 
          "cor": String
        
        }
        "nvl20": {
          
          "valor": 1048576 
          "cor": String
        
        }

      }

    }

    "rank": {

      "rankE": {

        "meta": 1500
        "nome": "E"

      }
      "rankD": {

        "meta": 8200
        "nome": "D"

      }
      "rankC": {

        "meta": 18500
        "nome": "C"

      }
      "rankB": {
      
        "meta": 30020
        "nome": "B"
      
      }
      "rankA": {

        "meta": 60280
        "nome": "A"

      }
      "rankS": {

        "meta": 290590
        "nome": "S"

      }

    }

  }

}

declare interface WKMinecraft { }

declare interface WKCubbic { }

<?php namespace Karzok\Minecraft;

class JsonCreator  
{
  // Métodos de Manipulação Zip #115555


  // Métodos de Manipulação I/O #007700
  static private function &io_manipulacao() 
  {
    function &io_folder() { }

    function &io_folder_and_one_subfolder() { }

    function &io_folder_and_two_subfolders() { }

    function &io_folder_and_three_subfolders() { }

    function &io_folder_and_four_subfolders() { }

    function &io_folder_and_five_subfolders() { }
  }

// Métodos Privados #660000
  private function json_blueprint_model_block($filename="") : void
  {
    $esquematica = json_encode(["gui_light"=>"side", "display"=>["gui"=>["rotation"=>[30, 225, 0], "translation"=>[0, 0, 0], "scale"=>[0.625, 0.625, 0.625 ]], "ground"=>["rotation"=>[0, 0, 0], "translation"=>[0, 3, 0], "scale"=>[0.25, 0.25, 0.25 ]], "fixed"=>["rotation"=>[0, 0, 0], "translation"=>[0, 0, 0], "scale"=>[0.5, 0.5, 0.5]], "thirdperson_righthand"=>["rotation"=>[75, 45, 0], "translation"=>[0, 2.5, 0], "scale"=>[0.375, 0.375, 0.375]], "firstperson_righthand"=>["rotation"=>[ 0, 45, 0 ], "translation"=>[ 0, 0, 0 ], "scale"=>[ 0.40, 0.40, 0.40 ]], "firstperson_lefthand"=>["rotation"=>[ 0, 225, 0 ], "translation"=>[ 0, 0, 0 ],"scale"=>[ 0.40, 0.40, 0.40 ]]]], JSON_PRETTY_PRINT, 2);

    // Refatorar!
    $dir = "../out/$filename-folder-model";

    if(is_dir($dir) == true) 
    { 
      return; 
    } else { 
      mkdir($dir, 0777, false); 
    }

    if(file_exists($dir.'/'.$filename) == true) 
    {
      { $handle = fopen($dir.'/'.$filename, "w+"); fflush($handle); fclose($handle); 
      }
      
      file_put_contents($dir.'/'.$filename, $esquematica, FILE_APPEND); 
    } else { 
      file_put_contents($dir.'/'.$filename, $esquematica, FILE_APPEND);
    }

  }

  private function json_blueprint_model_bamboo_large_leaves($filename="") : void { }

  private function json_blueprint_model_bamboo_small_leaves($filename="") : void { }

  private function json_blueprint_model_bamboo1_age0($filename="") : void { }

  private function json_blueprint_model_bamboo1_age1($filename="") : void { }

  private function json_blueprint_model_bamboo2_age0($filename="") : void { }

  private function json_blueprint_model_bamboo2_age1($filename="") : void { }

  private function json_blueprint_model_bamboo3_age0($filename="") : void { }

  private function json_blueprint_model_bamboo3_age1($filename="") : void { }

  private function json_blueprint_model_beacon($filename="") : void { }

  private function json_blueprint_model_bell_between_walls($filename="") : void { }

  private function json_blueprint_model_bell_bottom($filename="") : void { }

  private function json_blueprint_model_bell_ceiling($filename="") : void { }

  private function json_blueprint_model_bell_floor($filename="") : void { }

  private function json_blueprint_model_bell_wall($filename="") : void { }

  private function json_blueprint_model_big_dripleaf_full_tilt($filename="") : void { }

  private function json_blueprint_model_big_dripleaf_partial_tilt($filename="") : void { }

  private function json_blueprint_model_big_dripleaf_stem($filename="") : void { }

  private function json_blueprint_model_big_dripleaf($filename="") : void { }

  private function json_blueprint_model_brewing_stand($filename="") : void { }

  private function json_blueprint_model_brewing_stand_bottle0($filename="") : void { }

  private function json_blueprint_model_brewing_stand_bottle1($filename="") : void { }

  private function json_blueprint_model_brewing_stand_bottle2($filename="") : void { }

  private function json_blueprint_model_brewing_stand_empty0($filename="") : void { }

  private function json_blueprint_model_brewing_stand_empty1($filename="") : void { }

  private function json_blueprint_model_brewing_stand_empty2($filename="") : void { }

  private function json_blueprint_model_cake($filename="") : void { }

  private function json_blueprint_model_cake_slice1($filename="") : void { }

  private function json_blueprint_model_cake_slice2($filename="") : void { }

  private function json_blueprint_model_cake_slice3($filename="") : void { }

  private function json_blueprint_model_cake_slice4($filename="") : void { }

  private function json_blueprint_model_cake_slice5($filename="") : void { }

  private function json_blueprint_model_cake_slice6($filename="") : void { }

  private function json_blueprint_model_carpet($filename="") : void { }

  private function json_blueprint_model_chain($filename="") : void { }

  private function json_blueprint_model_cube($filename="") : void { }

  private function json_blueprint_model_cube_all($filename="") : void { }

  private function json_blueprint_model_cube_bottom_top($filename="") : void { }

  private function json_blueprint_model_cube_column($filename="") : void { }

  private function json_blueprint_model_cube_column_horizontal($filename="") : void { }

  private function json_blueprint_model_cube_directional($filename="") : void { }
  
  private function json_blueprint_model_cube_mirrored($filename="") : void { }

  private function json_blueprint_model_cube_mirrored_all($filename="") : void { }

  private function json_blueprint_model_cube_top($filename="") : void { }

  private function json_blueprint_model_cactus($filename="") : void { }

  private function json_blueprint_model_campfire_off($filename="") : void { }

  private function json_blueprint_model_cauldron($filename="") : void { }

  private function json_blueprint_model_cocoa_stage0($filename="") : void { }

  private function json_blueprint_model_cocoa_stage1($filename="") : void { }

  private function json_blueprint_model_cocoa_stage2($filename="") : void { }
  
  private function json_blueprint_model_comparator($filename="") : void { }

  private function json_blueprint_model_comparator_on($filename="") : void { }  
  
  private function json_blueprint_model_comparator_substract($filename="") : void { }

  private function json_blueprint_model_comparator_on_subtract($filename="") : void { }

  private function json_blueprint_model_composter($filename="") : void { }

  private function json_blueprint_model_composter_contents1($filename="") : void { }
  
  private function json_blueprint_model_composter_contents2($filename="") : void { }
  
  private function json_blueprint_model_composter_contents3($filename="") : void { }
  
  private function json_blueprint_model_composter_contents4($filename="") : void { }
  
  private function json_blueprint_model_composter_contents5($filename="") : void { }
  
  private function json_blueprint_model_composter_contents6($filename="") : void { }
  
  private function json_blueprint_model_composter_contents7($filename="") : void { }

  private function json_blueprint_model_composter_contents_ready($filename="") : void { }

  private function json_blueprint_model_conduit($filename="") : void { }

  private function json_blueprint_model_coral_fan($filename="") : void { }

  private function json_blueprint_model_coral_wall_fan($filename="") : void { }

  private function json_blueprint_model_cross($filename="") : void { }

  private function json_blueprint_model_tinted_cross($filename="") : void { }

  private function json_blueprint_model_crop($filename="") : void { }

  private function json_blueprint_model_dirt_path($filename="") : void { }

  private function json_blueprint_model_dragon_egg($filename="") : void { }

  private function json_blueprint_model_dried_kelp_block($filename="") : void { }

  private function json_blueprint_model_enchanting_table($filename="") : void { }

  private function json_blueprint_model_end_portal_frame_filled($filename="") : void { }

  private function json_blueprint_model_end_portal_frame($filename="") : void { }

  private function json_blueprint_model_end_rod($filename="") : void { }

  private function json_blueprint_model_flower_pot($filename="") : void { }
  
  private function json_blueprint_model_flower_pot_cross($filename="") : void { }

  private function json_blueprint_model_four_dead_sea_pickes($filename="") : void { }

  private function json_blueprint_model_four_sea_pickes($filename="") : void { }

  private function json_blueprint_model_glow_lichen($filename="") : void { }

  private function json_blueprint_model_grindstone($filename="") : void { }

  private function json_blueprint_model_honey_block($filename="") : void { }

  private function json_blueprint_model_hopper($filename="") : void { }
  
  private function json_blueprint_model_ladder($filename="") : void { }

  private function json_blueprint_model_leaves($filename="") : void { }

  private function json_blueprint_model_lectern($filename="") : void { }

  private function json_blueprint_model_lever($filename="") : void { }

  private function json_blueprint_model_lever_on($filename="") : void { }

  private function json_blueprint_model_lightning_rod($filename="") : void { }

  private function json_blueprint_model_lightning_rod_on($filename="") : void { }

  private function json_blueprint_model_lily_pad($filename="") : void { }

  private function json_blueprint_model_observer($filename="") : void { }

  private function json_blueprint_model_orientable($filename="") : void { }
  
  private function json_blueprint_model_orientable_vertical($filename="") : void { }

  private function json_blueprint_model_orientable_with_bottom($filename="") : void { }
  
  private function json_blueprint_model_pressure_plate_down($filename="") : void { }
  
  private function json_blueprint_model_pressure_plate_up($filename="") : void { }

  private function json_blueprint_model_pointed_dripstone($filename="") : void { }

  private function json_blueprint_model_potted_bamboo($filename="") : void { }

  private function json_blueprint_model_potted_cactus($filename="") : void { }

  private function json_blueprint_model_potted_fern($filename="") : void { }

  private function json_blueprint_model_powder_snow($filename="") : void { }

  private function json_blueprint_model_pumpkin($filename="") : void { }

  private function json_blueprint_model_rail_flat($filename="") : void { }

  private function json_blueprint_model_redstone_dust_dot($filename="") : void { }

  private function json_blueprint_model_redstone_dust_side_alt($filename="") : void { }

  private function json_blueprint_model_redstone_dust_side_alt0($filename="") : void { }
  
  private function json_blueprint_model_redstone_dust_side_alt1($filename="") : void { }
  
  private function json_blueprint_model_redstone_dust_side($filename="") : void { }

  private function json_blueprint_model_redstone_dust_side0($filename="") : void { }
  
  private function json_blueprint_model_redstone_dust_side1($filename="") : void { }
  
  private function json_blueprint_model_redstone_dust_up($filename="") : void { }
  
  private function json_blueprint_model_repeater_1tick($filename="") : void { }

  private function json_blueprint_model_repeater_1tick_on($filename="") : void { }

  private function json_blueprint_model_repeater_1tick_locked($filename="") : void { }

  private function json_blueprint_model_repeater_1tick_on_locked($filename="") : void { }
  
  private function json_blueprint_model_repeater_2tick($filename="") : void { }

  private function json_blueprint_model_repeater_2tick_on($filename="") : void { }

  private function json_blueprint_model_repeater_2tick_locked($filename="") : void { }

  private function json_blueprint_model_repeater_2tick_on_locked($filename="") : void { }
  
  private function json_blueprint_model_repeater_3tick($filename="") : void { }

  private function json_blueprint_model_repeater_3tick_on($filename="") : void { }

  private function json_blueprint_model_repeater_3tick_locked($filename="") : void { }

  private function json_blueprint_model_repeater_3tick_on_locked($filename="") : void { }
  
  private function json_blueprint_model_repeater_4tick($filename="") : void { }

  private function json_blueprint_model_repeater_4tick_on($filename="") : void { }

  private function json_blueprint_model_repeater_4tick_locked($filename="") : void { }

  private function json_blueprint_model_repeater_4tick_on_locked($filename="") : void { }

  private function json_blueprint_model_sea_pickle($filename="") : void { }

  private function json_blueprint_model_scaffolding_stable($filename="") : void { }

  private function json_blueprint_model_scaffolding_unstable($filename="") : void { }

  private function json_blueprint_model_stem_fruit($filename="") : void { }

  private function json_blueprint_model_slab($filename="") : void { }

  private function json_blueprint_model_slab_top($filename="") : void { }
  
  private function json_blueprint_model_slime_block($filename="") : void { }
  
  private function json_blueprint_model_small_dripleaf_bottom($filename="") : void { }
  
  private function json_blueprint_model_small_dripleaf_top($filename="") : void { }

  private function json_blueprint_model_snow_height2($filename="") : void { }
  
  private function json_blueprint_model_snow_height4($filename="") : void { }

  private function json_blueprint_model_snow_height6($filename="") : void { }
  
  private function json_blueprint_model_snow_height8($filename="") : void { }
  
  private function json_blueprint_model_snow_height10($filename="") : void { }
  
  private function json_blueprint_model_snow_height12($filename="") : void { }
  
  private function json_blueprint_model_snow_height14($filename="") : void { }
  
  private function json_blueprint_model_spore_blossom($filename="") : void { }
  
  private function json_blueprint_model_stonecutter($filename="") : void { }
  
  private function json_blueprint_model_sunflower_top($filename="") : void { }
  
  private function json_blueprint_model_stairs($filename="") : void { }
  
  private function json_blueprint_model_inner_stairs($filename="") : void { }

  private function json_blueprint_model_outer_stairs($filename="") : void { }
  
  private function json_blueprint_model_template_anvil($filename="") : void { }

  private function json_blueprint_model_template_azalea($filename="") : void { }

  private function json_blueprint_model_template_cake_with_candle($filename="") : void { }
  
  private function json_blueprint_model_template_command_block($filename="") : void { }

  private function json_blueprint_model_template_chorus_flower($filename="") : void { }

  private function json_blueprint_model_template_candle($filename="") : void { }

  private function json_blueprint_model_template_two_candles($filename="") : void { }

  private function json_blueprint_model_template_three_candles($filename="") : void { }

  private function json_blueprint_model_template_four_candles($filename="") : void { }

  private function json_blueprint_model_template_daylight_detector($filename="") : void { }

  private function json_blueprint_model_template_campfire($filename="") : void { }

  private function json_blueprint_model_template_farmland($filename="") : void { }

  private function json_blueprint_model_template_fire_floor($filename="") : void { }

  private function json_blueprint_model_template_fire_side_alt($filename="") : void { }
  
  private function json_blueprint_model_template_fire_side($filename="") : void { }
  
  private function json_blueprint_model_template_fire_up_alt($filename="") : void { }
  
  private function json_blueprint_model_template_fire_up($filename="") : void { }

  private function json_blueprint_model_template_glazed_terracotta($filename="") : void { }

  private function json_blueprint_model_template_glass_pane_noside($filename="") : void { }

  private function json_blueprint_model_template_glass_pane_noside_alt($filename="") : void { }

  private function json_blueprint_model_template_glass_pane_post($filename="") : void { }

  private function json_blueprint_model_template_glass_pane_side($filename="") : void { }

  private function json_blueprint_model_template_glass_pane_side_alt($filename="") : void { }

  private function json_blueprint_model_template_orientable_trapdoor_bottom($filename="") : void { }

  private function json_blueprint_model_template_orientable_trapdoor_open($filename="") : void { }

  private function json_blueprint_model_template_orientable_trapdoor_top($filename="") : void { }

  private function json_blueprint_model_template_rail_raised_ne($filename="") : void { }
  
  private function json_blueprint_model_template_rail_raised_sw($filename="") : void { }

  private function json_blueprint_model_template_seagrass($filename="") : void { }

  private function json_blueprint_model_template_single_face($filename="") : void { }

  private function json_blueprint_model_template_wall_post($filename="") : void { } 
  
  private function json_blueprint_model_template_wall_side($filename="") : void { }
  
  private function json_blueprint_model_template_wall_side_tall($filename="") : void { }
  
  private function json_blueprint_model_template_four_turtle_eggs($filename="") : void { }

  private function json_blueprint_model_template_item_frame_map($filename="") : void { }

  private function json_blueprint_model_template_item_frame($filename="") : void { }

  private function json_blueprint_model_template_fence_gate_open($filename="") : void { }
  
  private function json_blueprint_model_template_fence_gate_wall_open($filename="") : void { }
  
  private function json_blueprint_model_template_fence_gate_wall($filename="") : void { }
  
  private function json_blueprint_model_template_fence_gate($filename="") : void { }

  private function json_blueprint_model_template_hanging_lantern($filename="") : void { }

  private function json_blueprint_model_template_lantern($filename="") : void { }

  private function json_blueprint_model_template_cauldron_full($filename="") : void { }

  private function json_blueprint_model_template_potted_azalea_bush($filename="") : void { }

  private function json_blueprint_model_template_cauldron_level1($filename="") : void { }

  private function json_blueprint_model_template_cauldron_level2($filename="") : void { }

  private function json_blueprint_model_template_torch($filename="") : void { }

  private function json_blueprint_model_template_torch_wall($filename="") : void { }

  private function json_blueprint_model_sculk_sensor($filename="") : void { }

  private function json_blueprint_model_stem_growth0($filename="") : void { }

  private function json_blueprint_model_stem_growth1($filename="") : void { }

  private function json_blueprint_model_stem_growth2($filename="") : void { }

  private function json_blueprint_model_stem_growth3($filename="") : void { }

  private function json_blueprint_model_stem_growth4($filename="") : void { }

  private function json_blueprint_model_stem_growth5($filename="") : void { }

  private function json_blueprint_model_stem_growth6($filename="") : void { }

  private function json_blueprint_model_stem_growth7($filename="") : void { }

  private function json_blueprint_model_thin_block($filename="") : void { }

  private function json_blueprint_model_three_dead_sea_pickles($filename="") : void { }

  private function json_blueprint_model_three_sea_pickles($filename="") : void { }

  private function json_blueprint_model_tripwire_n($filename="") : void { }

  private function json_blueprint_model_tripwire_ne($filename="") : void { }

  private function json_blueprint_model_tripwire_ns($filename="") : void { }

  private function json_blueprint_model_tripwire_nse($filename="") : void { }

  private function json_blueprint_model_tripwire_nsew($filename="") : void { }

  private function json_blueprint_model_tripwire_attached_n($filename="") : void { }

  private function json_blueprint_model_tripwire_attached_ne($filename="") : void { }

  private function json_blueprint_model_tripwire_attached_ns($filename="") : void { }

  private function json_blueprint_model_tripwire_attached_nse($filename="") : void { }

  private function json_blueprint_model_tripwire_attached_nsew($filename="") : void { }

  private function json_blueprint_model_tripwire_hook($filename="") : void { }

  private function json_blueprint_model_tripwire_hook_on($filename="") : void { }

  private function json_blueprint_model_tripwire_hook_attached($filename="") : void { }

  private function json_blueprint_model_tripwire_hook_attached_on($filename="") : void { }

  private function json_blueprint_model_two_dead_sea_pickles($filename="") : void { }

  private function json_blueprint_model_two_sea_pickles($filename="") : void { }

  private function json_blueprint_model_vine($filename="") : void { }

  private function json_blueprint_model_wall_inventory($filename="") : void { }

// Métodos Protegidos #770099
  protected function json_datatag_block_item() : void { }

  protected function json_language() : void { }

  protected function json_blasting_recipe() : void { }

  protected function json_smelting_recipe() : void { }

  protected function json_smoking_recipe() : void { }

  protected function json_blockstates() : void { }

  protected function json_loot_table() : void { }

  protected function json_particles() : void { }

  protected function json_advancements() : void { }

  protected function json_recipes() : void { }

  protected function json_model_block_type_template_common() : void { }

  protected function json_model_block_type_button_inventory() : void { }

  protected function json_model_block_type_button_pressed() : void { }

  protected function json_model_block_type_button() : void { }

  protected function json_model_block_type_door_bottom_rh() : void { }

  protected function json_model_block_type_door_bottom() : void { }

  protected function json_model_block_type_door_top_rh() : void { }

  protected function json_model_block_type_door_top() : void { }

  protected function json_model_block_type_template_fence_gate_open() : void { }

  protected function json_model_block_type_template_fence_gate_wall_open() : void { }

  protected function json_model_block_type_template_fence_gate_wall() : void { }

  protected function json_model_block_type_template_fence_gate() : void { }

  protected function json_model_block_type_fence_inventory() : void { }

  protected function json_model_block_type_fence_post() : void { }

  protected function json_model_block_type_fence_side() : void { }

  protected function json_model_block_type_leaves() : void { }

  protected function json_model_block_type_cube_column_horizontal() : void { }

  protected function json_model_block_type_cube_column() : void { }

  protected function json_model_block_type_cube_all() : void { }

  protected function json_model_block_type_pressure_plate_down() : void { }

  protected function json_model_block_type_pressure_plate_up() : void { }

  protected function json_model_block_type_cross() : void { }

  protected function json_model_block_type_slab_top() : void { }

  protected function json_model_block_type_slab() : void { }

  protected function json_model_block_type_inner_stairs() : void { }

  protected function json_model_block_type_outer_stairs() : void { }

  protected function json_model_block_type_stairs() : void { }

  protected function json_model_block_type_template_orientable_trapdoor_bottom() : void { }

  protected function json_model_block_type_template_orientable_trapdoor_open() : void { }

  protected function json_model_block_type_template_orientable_trapdoor_top() : void { }

  protected function json_model_block_type_template_rail_raised_ne() : void { }

  protected function json_model_block_type_template_rail_raised_sw() : void { }
  
  protected function json_model_block_type_rail_flat() : void { }

  protected function json_model_block_type_air() : void { }

  protected function json_model_block_type_wall_inventory() : void { }

  protected function json_model_block_type_template_wall_post() : void { }

  protected function json_model_block_type_template_wall_side_tall() : void { }

  protected function json_model_block_type_template_wall_side() : void { }

  protected function json_model_block_type_template_anvil() : void { }

  protected function json_model_block_type_stem_fruit() : void { }

  protected function json_model_block_type_template_azalea() : void { }

  protected function json_model_block_type_tinted_cross() : void { }

  protected function json_model_block_type_cube_bottom_top() : void { }

  protected function json_model_block_type_cube_mirrored_all() : void { }

  protected function json_model_block_type_orientable_with_bottom() : void { }

  protected function json_model_block_type_crop() : void { }

  protected function json_model_block_type_bell_bottom() : void { }

  protected function json_model_block_type_template_cake_with_candle() : void { }

  protected function json_model_block_type_template_four_candles() : void { }

  protected function json_model_block_type_template_candle() : void { }

  protected function json_model_block_type_template_three_candles() : void { }

  protected function json_model_block_type_template_two_candles() : void { }

  protected function json_model_block_type_carpet() : void { }

  protected function json_model_block_type_template_glazed_terracotta() : void { }

  protected function json_model_block_type_template_glass_pane_noside_alt() : void { }

  protected function json_model_block_type_template_glass_pane_noside() : void { }

  protected function json_model_block_type_template_glass_pane_post() : void { }

  protected function json_model_block_type_template_glass_pane_side_alt() : void { }

  protected function json_model_block_type_template_glass_pane_side() : void { }

  protected function json_model_block_type_orientable() : void { }

  protected function json_model_block_type_coral_fan() : void { }

  protected function json_model_block_type_coral_wall_fan() : void { }

  protected function json_model_block_type_template_single_face() : void { }

  protected function json_model_block_type_template_cake() : void { }

  protected function json_model_block_type_template_command_block() : void { }

  protected function json_model_block_type_template_chorus_flower() : void { }

  protected function json_model_block_type_cube() : void { }

  protected function json_model_block_type_cube_mirrored() : void { }

  protected function json_model_block_type_cube_top() : void { }

  protected function json_model_block_type_template_daylight_detector() : void { }

  protected function json_model_block_type_orientable_vertical() : void { }

  protected function json_model_block_type_template_farmland() : void { }

  protected function json_model_block_type_template_fire_floor() : void { }

  protected function json_model_block_type_template_fire_side_alt() : void { }

  protected function json_model_block_type_template_fire_side() : void { }

  protected function json_model_block_type_template_fire_up_alt() : void { }

  protected function json_model_block_type_template_fire_up() : void { }

  protected function json_model_block_type_template_four_turtle_eggs() : void { }

  protected function json_model_block_type_template_item_frame_map() : void { }

  protected function json_model_block_type_template_item_frame() : void { }

  protected function json_model_block_type_cube_directional() : void { }

  protected function json_model_block_type_template_hanging_lantern() : void { }

  protected function json_model_block_type_template_lantern() : void { }

  protected function json_model_block_type_template_cauldron_full() : void { }

  protected function json_model_block_type_pointed_dripstone() : void { }

  protected function json_model_block_type_flower_pot_cross() : void { }

  protected function json_model_block_type_template_potted_azalea_bush() : void { }

  protected function json_model_block_type_template_cauldron_level1() : void { }

  protected function json_model_block_type_template_cauldron_level2() : void { }

  protected function json_model_block_type_stem_growth0() : void { }

  protected function json_model_block_type_stem_growth1() : void { }

  protected function json_model_block_type_stem_growth2() : void { }

  protected function json_model_block_type_stem_growth3() : void { }

  protected function json_model_block_type_stem_growth4() : void { }

  protected function json_model_block_type_stem_growth5() : void { }

  protected function json_model_block_type_stem_growth6() : void { }

  protected function json_model_block_type_stem_growth7() : void { }

  protected function json_model_block_type_template_torch() : void { }

  protected function json_model_block_type_template_torch_wall() : void { }

  protected function json_model_block_type_sculk_sensor() : void { }

  protected function json_model_block_type_template_seagrass() : void { }

  protected function json_model_itens_type_common() : void { }

  // Getters and Setters #0000ff
  
  // Métodos de Blueprint 
  public function get_json_blueprint_model_block($filename="") 
  { 
    return $this->json_blueprint_model_block($filename);
  }

  public function get_json_blueprint_model_bamboo_large_leaves($filename="") 
  { 
    return $this->json_blueprint_model_bamboo_large_leaves($filename); 
  }
  
  public function get_json_blueprint_model_bamboo_small_leaves($filename="") 
  { 
    return $this->json_blueprint_model_bamboo_small_leaves($filename); 
  }
  
  public function get_json_blueprint_model_bamboo1_age0($filename="") 
  { 
    return $this->json_blueprint_model_bamboo1_age0($filename); 
  }
  
  public function get_json_blueprint_model_bamboo1_age1($filename="") 
  { 
    return $this->json_blueprint_model_bamboo1_age1($filename); 
  }
  
  public function get_json_blueprint_model_bamboo2_age0($filename="") 
  { 
    return $this->json_blueprint_model_bamboo2_age1($filename); 
  }
  
  public function get_json_blueprint_model_bamboo2_age1($filename="") 
  { 
    return $this->json_blueprint_model_bamboo2_age0($filename); 
  }
  
  public function get_json_blueprint_model_bamboo3_age0($filename="") 
  { 
    return $this->json_blueprint_model_bamboo3_age1($filename); 
  }
  
  public function get_json_blueprint_model_bamboo3_age1($filename="") 
  { 
    return $this->json_blueprint_model_bamboo3_age0($filename); 
  }
  
  public function get_json_blueprint_model_beacon($filename="") 
  { 
    return $this->json_blueprint_model_beacon($filename); 
  }
  
  public function get_json_blueprint_model_bell_between_walls($filename="") 
  { 
    return $this->json_blueprint_model_bell_between_walls($filename); 
  }
  
  public function get_json_blueprint_model_bell_bottom($filename="") 
  { 
    return $this->json_blueprint_model_bell_bottom($filename); 
  }
  
  public function get_json_blueprint_model_bell_ceiling($filename="") 
  { 
    return $this->json_blueprint_model_bell_ceiling($filename); 
  }
  
  public function get_json_blueprint_model_bell_floor($filename="") 
  { 
    return $this->json_blueprint_model_bell_floor($filename); 
  }
  
  public function get_json_blueprint_model_bell_wall($filename="") 
  { 
    return $this->json_blueprint_model_bell_wall($filename); 
  }
  
  public function get_json_blueprint_model_big_dripleaf_full_tilt($filename="") 
  { 
    return $this->json_blueprint_model_big_dripleaf_full_tilt($filename); 
  }
  
  public function get_json_blueprint_model_big_dripleaf_partial_tilt($filename="") 
  { 
    return $this->json_blueprint_model_big_dripleaf_partial_tilt($filename); 
  }
  
  public function get_json_blueprint_model_big_dripleaf_stem($filename="") 
  { 
    return $this->json_blueprint_model_big_dripleaf_stem($filename); 
  }
  
  public function get_json_blueprint_model_big_dripleaf($filename="") 
  { 
    return $this->json_blueprint_model_big_dripleaf($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_bottle0($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_bottle0($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_bottle1($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_bottle1($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_bottle2($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_bottle2($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_empty0($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_empty0($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_empty1($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_empty1($filename); 
  }
  
  public function get_json_blueprint_model_brewing_stand_empty2($filename="") 
  { 
    return $this->json_blueprint_model_brewing_stand_empty2($filename); 
  }
  
  public function get_json_blueprint_model_cake($filename="") 
  { 
    return $this->json_blueprint_model_cake($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice1($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice1($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice2($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice2($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice3($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice3($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice4($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice4($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice5($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice5($filename); 
  }
  
  public function get_json_blueprint_model_cake_slice6($filename="") 
  { 
    return $this->json_blueprint_model_cake_slice6($filename); 
  }
  
  public function get_json_blueprint_model_carpet($filename="") 
  { 
    return $this->json_blueprint_model_carpet($filename); 
  }
  
  public function get_json_blueprint_model_chain($filename="") 
  { 
    return $this->json_blueprint_model_chain($filename); 
  }
  
  public function get_json_blueprint_model_cube($filename="")
  { 
    return $this->json_blueprint_model_cube($filename); 
  }
  
  public function get_json_blueprint_model_cube_all($filename="") 
  { 
    return $this->json_blueprint_model_cube_all($filename); 
  }
  
  public function get_json_blueprint_model_cube_bottom_top($filename="") 
  { 
    return $this->json_blueprint_model_cube_bottom_top($filename); 
  }
  
  public function get_json_blueprint_model_cube_column($filename="") 
  { 
    return $this->json_blueprint_model_cube_column($filename); 
  }
  
  public function get_json_blueprint_model_cube_column_horizontal($filename="") 
  { 
    return $this->json_blueprint_model_cube_column($filename); 
  }
  
  public function get_json_blueprint_model_cube_directional($filename="") 
  { 
    return $this->json_blueprint_model_cube_column($filename); 
  }
  
  public function get_json_blueprint_model_cube_mirrored($filename="") 
  { 
    return $this->json_blueprint_model_cube_mirrored($filename); 
  }
  
  public function get_json_blueprint_model_cube_mirrored_all($filename="") 
  { 
    return $this->json_blueprint_model_cube_mirrored_all($filename); 
  }
  
  public function get_json_blueprint_model_cube_top($filename="") 
  { 
    return $this->json_blueprint_model_cube_top($filename); 
  }
  
  public function get_json_blueprint_model_cactus($filename="") 
  { 
    return $this->json_blueprint_model_cactus($filename); 
  }
  
  public function get_json_blueprint_model_campfire_off($filename="") 
  { 
    return $this->json_blueprint_model_campfire_off($filename); 
  }
  
  public function get_json_blueprint_model_cauldron($filename="") 
  { 
    return $this->json_blueprint_model_cauldron($filename); 
  }
  
  public function get_json_blueprint_model_cocoa_stage0($filename="") 
  { 
    return $this->json_blueprint_model_cocoa_stage0($filename); 
  }
  
  public function get_json_blueprint_model_cocoa_stage1($filename="") 
  { 
    return $this->json_blueprint_model_cocoa_stage1($filename); 
  }
  
  public function get_json_blueprint_model_cocoa_stage2($filename="") 
  { 
    return $this->json_blueprint_model_cocoa_stage2($filename); 
  }
  
  public function get_json_blueprint_model_comparator($filename="") 
  { 
    return $this->json_blueprint_model_comparator($filename); 
  }
  
  public function get_json_blueprint_model_comparator_on($filename="") 
  { 
    return $this->json_blueprint_model_comparator_on($filename); 
  }  
  
  public function get_json_blueprint_model_comparator_substract($filename="") 
  { 
    return $this->json_blueprint_model_comparator_substract($filename); 
  }
  
  public function get_json_blueprint_model_comparator_on_subtract($filename="") 
  { 
    return $this->json_blueprint_model_comparator_on_subtract($filename); 
  }
  
  public function get_json_blueprint_model_composter($filename="")
  { 
    return $this->json_blueprint_model_composter($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents1($filename="")
  { 
    return $this->json_blueprint_model_composter_contents1($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents2($filename="") 
  { 
    return $this->json_blueprint_model_composter_contents2($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents3($filename="")
  { 
    return $this->json_blueprint_model_composter_contents3($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents4($filename="") 
  { 
    return $this->json_blueprint_model_composter_contents4($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents5($filename="") 
  { 
    return $this->json_blueprint_model_composter_contents5($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents6($filename="")
  { 
    return $this->json_blueprint_model_composter_contents6($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents7($filename="")
  { 
    return $this->json_blueprint_model_composter_contents7($filename); 
  }
  
  public function get_json_blueprint_model_composter_contents_ready($filename="") 
  { 
    return $this->json_blueprint_model_composter_contents_ready($filename); 
  }
  
  public function get_json_blueprint_model_conduit($filename="") 
  { 
    return $this->json_blueprint_model_conduit($filename); 
  }
  
  public function get_json_blueprint_model_coral_fan($filename="") 
  { 
    return $this->json_blueprint_model_coral_fan($filename); 
  }
  
  public function get_json_blueprint_model_coral_wall_fan($filename="") 
  { 
    return $this->json_blueprint_model_coral_wall_fan($filename); 
  }
  
  public function get_json_blueprint_model_cross($filename="") 
  { 
    return $this->json_blueprint_model_cross($filename); 
  }
  
  public function get_json_blueprint_model_tinted_cross($filename="")
  { 
    return $this->json_blueprint_model_tinted_cross($filename); 
  }
  
  public function get_json_blueprint_model_crop($filename="") 
  { 
    return $this->json_blueprint_model_crop($filename); 
  }
  
  public function get_json_blueprint_model_dirt_path($filename="")
  { 
    return $this->json_blueprint_model_dirt_path($filename); 
  }
  
  public function get_json_blueprint_model_dragon_egg($filename="") 
  { 
    return $this->json_blueprint_model_dragon_egg($filename); 
  }
  
  public function get_json_blueprint_model_dried_kelp_block($filename="") 
  { 
    return $this->json_blueprint_model_dried_kelp_block($filename); 
  }
  
  public function get_json_blueprint_model_enchanting_table($filename="") 
  { 
    return $this->json_blueprint_model_enchanting_table($filename); 
  }
  
  public function get_json_blueprint_model_end_portal_frame_filled($filename="") 
  { 
    return $this->json_blueprint_model_end_portal_frame_filled($filename); 
  }
  
  public function get_json_blueprint_model_end_portal_frame($filename="") 
  { 
    return $this->json_blueprint_model_end_portal_frame($filename); 
  }
  
  public function get_json_blueprint_model_end_rod($filename="") 
  { 
    return $this->json_blueprint_model_end_rod($filename); 
  }
  
  public function get_json_blueprint_model_flower_pot($filename="") 
  { 
    return $this->json_blueprint_model_flower_pot($filename); 
  }
  
  public function get_json_blueprint_model_flower_pot_cross($filename="") 
  { 
    return $this->json_blueprint_model_flower_pot_cross($filename); 
  }
  
  public function get_json_blueprint_model_four_dead_sea_pickes($filename="") 
  { 
    return $this->json_blueprint_model_four_dead_sea_pickes($filename); 
  }
  
  public function get_json_blueprint_model_four_sea_pickes($filename="") 
  { 
    return $this->json_blueprint_model_four_sea_pickes($filename); 
  }
  
  public function get_json_blueprint_model_glow_lichen($filename="") 
  { 
    return $this->json_blueprint_model_glow_lichen($filename); 
  }
  
  public function get_json_blueprint_model_grindstone($filename="") 
  { 
    return $this->json_blueprint_model_grindstone($filename); 
  }
  
  public function get_json_blueprint_model_honey_block($filename="") 
  { 
    return $this->json_blueprint_model_honey_block($filename); 
  }
  
  public function get_json_blueprint_model_hopper($filename="") 
  { 
    return $this->json_blueprint_model_hopper($filename); 
  }
  
  public function get_json_blueprint_model_ladder($filename="") 
  { 
    return $this->json_blueprint_model_ladder($filename); 
  }
  
  public function get_json_blueprint_model_leaves($filename="") 
  { 
    return $this->json_blueprint_model_leaves($filename); 
  }
  
  public function get_json_blueprint_model_lectern($filename="") 
  { 
    return $this->json_blueprint_model_lectern($filename); 
  }
  
  public function get_json_blueprint_model_lever($filename="") 
  { 
    return $this->json_blueprint_model_lever($filename); 
  }
  
  public function get_json_blueprint_model_lever_on($filename="") 
  { 
    return $this->json_blueprint_model_lever_on($filename); 
  }
  
  public function get_json_blueprint_model_lightning_rod($filename="") 
  { 
    return $this->json_blueprint_model_lightning_rod($filename); 
  }
  
  public function get_json_blueprint_model_lightning_rod_on($filename="") 
  { 
    return $this->json_blueprint_model_lightning_rod_on($filename); 
  }
  
  public function get_json_blueprint_model_lily_pad($filename="") 
  { 
    return $this->json_blueprint_model_lily_pad($filename); 
  }
  
  public function get_json_blueprint_model_observer($filename="") 
  { 
    return $this->json_blueprint_model_observer($filename); 
  }
  
  public function get_json_blueprint_model_orientable($filename="") 
  { 
    return $this->json_blueprint_model_orientable($filename); 
  }
  
  public function get_json_blueprint_model_orientable_vertical($filename="") 
  { 
    return $this->json_blueprint_model_orientable_vertical($filename); 
  }
  
  public function get_json_blueprint_model_orientable_with_bottom($filename="") 
  { 
    return $this->json_blueprint_model_orientable_with_bottom($filename); 
  }
  
  public function get_json_blueprint_model_pressure_plate_down($filename="") 
  { 
    return $this->json_blueprint_model_pressure_plate_down($filename); 
  }
  
  public function get_json_blueprint_model_pressure_plate_up($filename="") 
  { 
    return $this->json_blueprint_model_pressure_plate_up($filename); 
  }
  
  public function get_json_blueprint_model_pointed_dripstone($filename="") 
  { 
    return $this->json_blueprint_model_pointed_dripstone($filename); 
  }
  
  public function get_json_blueprint_model_potted_bamboo($filename="") 
  { 
    return $this->json_blueprint_model_potted_bamboo($filename); 
  }
  
  public function get_json_blueprint_model_potted_cactus($filename="") 
  { 
    return $this->json_blueprint_model_potted_cactus($filename); 
  }
  
  public function get_json_blueprint_model_potted_fern($filename="") 
  { 
    return $this->json_blueprint_model_potted_fern($filename); 
  }
  
  public function get_json_blueprint_model_powder_snow($filename="") 
  { 
    return $this->json_blueprint_model_powder_snow($filename); 
  }
  
  public function get_json_blueprint_model_pumpkin($filename="") 
  { 
    return $this->json_blueprint_model_pumpkin($filename); 
  }
  
  public function get_json_blueprint_model_rail_flat($filename="") 
  { 
    return $this->json_blueprint_model_rail_flat($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_dot($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_dot($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side_alt($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side_alt($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side_alt0($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side_alt0($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side_alt1($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side_alt1($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side0($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side0($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_side1($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_side1($filename); 
  }
  
  public function get_json_blueprint_model_redstone_dust_up($filename="") 
  { 
    return $this->json_blueprint_model_redstone_dust_up($filename); 
  }
  
  public function get_json_blueprint_model_repeater_1tick($filename="") 
  { 
    return $this->json_blueprint_model_repeater_1tick($filename); 
  }
  
  public function get_json_blueprint_model_repeater_1tick_on($filename="") 
  { 
    return $this->json_blueprint_model_repeater_1tick_on($filename); 
  }
  
  public function get_json_blueprint_model_repeater_1tick_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_1tick_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_1tick_on_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_1tick_on_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_2tick($filename="") 
  { 
    return $this->json_blueprint_model_repeater_2tick($filename); 
  }
  
  public function get_json_blueprint_model_repeater_2tick_on($filename="") 
  { 
    return $this->json_blueprint_model_repeater_2tick_on($filename); 
  }
  
  public function get_json_blueprint_model_repeater_2tick_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_2tick_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_2tick_on_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_2tick_on_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_3tick($filename="") 
  { 
    return $this->json_blueprint_model_repeater_3tick($filename); 
  }
  
  public function get_json_blueprint_model_repeater_3tick_on($filename="") 
  { 
    return $this->json_blueprint_model_repeater_3tick_on($filename); 
  }
  
  public function get_json_blueprint_model_repeater_3tick_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_3tick_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_3tick_on_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_3tick_on_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_4tick($filename="") 
  { 
    return $this->json_blueprint_model_repeater_4tick($filename); 
  }
  
  public function get_json_blueprint_model_repeater_4tick_on($filename="")
  { 
    return $this->json_blueprint_model_repeater_4tick_on($filename); 
  }
  
  public function get_json_blueprint_model_repeater_4tick_locked($filename="")
  { 
    return $this->json_blueprint_model_repeater_4tick_locked($filename); 
  }
  
  public function get_json_blueprint_model_repeater_4tick_on_locked($filename="") 
  { 
    return $this->json_blueprint_model_repeater_4tick_on_locked($filename); 
  }
  
  public function get_json_blueprint_model_sea_pickle($filename="") 
  { 
    return $this->json_blueprint_model_sea_pickle($filename); 
  }
  
  public function get_json_blueprint_model_scaffolding_stable($filename="") 
  { 
    return $this->json_blueprint_model_scaffolding_stable($filename); 
  }
  
  public function get_json_blueprint_model_scaffolding_unstable($filename="") 
  { 
    return $this->json_blueprint_model_scaffolding_unstable($filename); 
  }
  
  public function get_json_blueprint_model_stem_fruit($filename="") 
  { 
    return $this->json_blueprint_model_stem_fruit($filename); 
  }
  
  public function get_json_blueprint_model_slab($filename="") 
  { 
    return $this->json_blueprint_model_slab($filename); 
  }
  
  public function get_json_blueprint_model_slab_top($filename="") 
  { 
    return $this->json_blueprint_model_slab_top($filename); 
  }
  
  public function get_json_blueprint_model_slime_block($filename="") 
  { 
    return $this->json_blueprint_model_slime_block($filename); 
  }
  
  public function get_json_blueprint_model_small_dripleaf_bottom($filename="") 
  { 
    return $this->json_blueprint_model_small_dripleaf_bottom($filename); 
  }
  
  public function get_json_blueprint_model_small_dripleaf_top($filename="") 
  { 
    return $this->json_blueprint_model_small_dripleaf_top($filename); 
  }
  
  public function get_json_blueprint_model_snow_height2($filename="") 
  { 
    return $this->json_blueprint_model_snow_height2($filename); 
  }
  
  public function get_json_blueprint_model_snow_height4($filename="") 
  { 
    return $this->json_blueprint_model_snow_height4($filename); 
  }
  
  public function get_json_blueprint_model_snow_height6($filename="") 
  { 
    return $this->json_blueprint_model_snow_height6($filename); 
  }
  
  public function get_json_blueprint_model_snow_height8($filename="") 
  { 
    return $this->json_blueprint_model_snow_height8($filename); 
  }
  
  public function get_json_blueprint_model_snow_height10($filename="") 
  { 
    return $this->json_blueprint_model_snow_height10($filename); 
  }
  
  public function get_json_blueprint_model_snow_height12($filename="") 
  { 
    return $this->json_blueprint_model_snow_height12($filename); 
  }
  
  public function get_json_blueprint_model_snow_height14($filename="") 
  { 
    return $this->json_blueprint_model_snow_height14($filename); 
  }
  
  public function get_json_blueprint_model_spore_blossom($filename="") 
  { 
    return $this->json_blueprint_model_spore_blossom($filename); 
  }  
  
  public function get_json_blueprint_model_stonecutter($filename="") 
  { 
    return $this->json_blueprint_model_stonecutter($filename); 
  }
  
  public function get_json_blueprint_model_sunflower_top($filename="") 
  { 
    return $this->json_blueprint_model_sunflower_top($filename); 
  }
  
  public function get_json_blueprint_model_stairs($filename="") 
  { 
    return $this->json_blueprint_model_stairs($filename); 
  }
  
  public function get_json_blueprint_model_inner_stairs($filename="") 
  { 
    return $this->json_blueprint_model_inner_stairs($filename); 
  }
  
  public function get_json_blueprint_model_outer_stairs($filename="") 
  { 
    return $this->json_blueprint_model_outer_stairs($filename); 
  }
  
  public function get_json_blueprint_model_template_anvil($filename="") 
  { 
    return $this->json_blueprint_model_template_anvil($filename); 
  }
  
  public function get_json_blueprint_model_template_azalea($filename="") 
  { 
    return $this->json_blueprint_model_template_azalea($filename); 
  }
  
  public function get_json_blueprint_model_template_cake_with_candle($filename="") 
  { 
    return $this->json_blueprint_model_template_cake_with_candle($filename); 
  }
  
  public function get_json_blueprint_model_template_command_block($filename="") 
  { 
    return $this->json_blueprint_model_template_command_block($filename); 
  }
  
  public function get_json_blueprint_model_template_chorus_flower($filename="") 
  { 
    return $this->json_blueprint_model_template_chorus_flower($filename); 
  }
  
  public function get_json_blueprint_model_template_candle($filename="") 
  { 
    return $this->json_blueprint_model_template_candle($filename); 
  }
  
  public function get_json_blueprint_model_template_two_candles($filename="") 
  { 
    return $this->json_blueprint_model_template_two_candles($filename); 
  }
  
  public function get_json_blueprint_model_template_three_candles($filename="") 
  { 
    return $this->json_blueprint_model_template_three_candles($filename); 
  }
  
  public function get_json_blueprint_model_template_four_candles($filename="") 
  { 
    return $this->json_blueprint_model_template_four_candles($filename); 
  }
  
  public function get_json_blueprint_model_template_daylight_detector($filename="") 
  { 
    return $this->json_blueprint_model_template_daylight_detector($filename); 
  }
  
  public function get_json_blueprint_model_template_campfire($filename="") 
  { 
    return $this->json_blueprint_model_template_campfire($filename); 
  }
  
  public function get_json_blueprint_model_template_farmland($filename="") 
  { 
    return $this->json_blueprint_model_template_farmland($filename); 
  }
  
  public function get_json_blueprint_model_template_fire_floor($filename="") 
  { 
    return $this->json_blueprint_model_template_fire_floor($filename); 
  }
  
  public function get_json_blueprint_model_template_fire_side_alt($filename="") 
  { 
    return $this->json_blueprint_model_template_fire_side_alt($filename); 
  }
  
  public function get_json_blueprint_model_template_fire_side($filename="") 
  { 
    return $this->json_blueprint_model_template_fire_side($filename); 
  }
  
  public function get_json_blueprint_model_template_fire_up_alt($filename="") 
  { 
    return $this->json_blueprint_model_template_fire_up_alt($filename); 
  }
  
  public function get_json_blueprint_model_template_fire_up($filename="") 
  { 
    return $this->json_blueprint_model_template_fire_up($filename); 
  }
  
  public function get_json_blueprint_model_template_glazed_terracotta($filename="") 
  { 
    return $this->json_blueprint_model_template_glazed_terracotta($filename); 
  }
  
  public function get_json_blueprint_model_template_glass_pane_noside($filename="") 
  { 
    return $this->json_blueprint_model_template_glass_pane_noside($filename); 
  }
  
  public function get_json_blueprint_model_template_glass_pane_noside_alt($filename="") 
  { 
    return $this->json_blueprint_model_template_glass_pane_noside_alt($filename); 
  }
  
  public function get_json_blueprint_model_template_glass_pane_post($filename="") 
  { 
    return $this->json_blueprint_model_template_glass_pane_post($filename); 
  }
  
  public function get_json_blueprint_model_template_glass_pane_side($filename="") 
  { 
    return $this->json_blueprint_model_template_glass_pane_side($filename); 
  }
  
  public function get_json_blueprint_model_template_glass_pane_side_alt($filename="") 
  { 
    return $this->json_blueprint_model_template_glass_pane_side_alt($filename); 
  }
  
  public function get_json_blueprint_model_template_orientable_trapdoor_bottom($filename="") 
  { 
    return $this->json_blueprint_model_template_orientable_trapdoor_bottom($filename); 
  }
  
  public function get_json_blueprint_model_template_orientable_trapdoor_open($filename="") 
  { 
    return $this->json_blueprint_model_template_orientable_trapdoor_open($filename); 
  }
  
  public function get_json_blueprint_model_template_orientable_trapdoor_top($filename="") 
  { 
    return $this->json_blueprint_model_template_orientable_trapdoor_top($filename); 
  }
  
  public function get_json_blueprint_model_template_rail_raised_ne($filename="") 
  { 
    return $this->json_blueprint_model_template_rail_raised_ne($filename); 
  }
  
  public function get_json_blueprint_model_template_rail_raised_sw($filename="") 
  { 
    return $this->json_blueprint_model_template_rail_raised_sw($filename); 
  }
  
  public function get_json_blueprint_model_template_seagrass($filename="") 
  { 
    return $this->json_blueprint_model_template_seagrass($filename); 
  }
  
  public function get_json_blueprint_model_template_single_face($filename="") 
  { 
    return $this->json_blueprint_model_template_single_face($filename); 
  }
  
  public function get_json_blueprint_model_template_wall_post($filename="") 
  { 
    return $this->json_blueprint_model_template_wall_post($filename); 
  } 
  
  public function get_json_blueprint_model_template_wall_side($filename="") 
  { 
    return $this->json_blueprint_model_template_wall_side($filename); 
  }
  
  public function get_json_blueprint_model_template_wall_side_tall($filename="") 
  { 
    return $this->json_blueprint_model_template_wall_side_tall($filename); 
  }
  
  public function get_json_blueprint_model_template_four_turtle_eggs($filename="") 
  { 
    return $this->json_blueprint_model_template_four_turtle_eggs($filename); 
  }
  
  public function get_json_blueprint_model_template_item_frame_map($filename="") 
  { 
    return $this->json_blueprint_model_template_item_frame_map($filename); 
  }
  
  public function get_json_blueprint_model_template_item_frame($filename="") 
  { 
    return $this->json_blueprint_model_template_item_frame($filename); 
  }
  
  public function get_json_blueprint_model_template_fence_gate_open($filename="") 
  { 
    return $this->json_blueprint_model_template_fence_gate_open($filename); 
  }
  
  public function get_json_blueprint_model_template_fence_gate_wall_open($filename="") 
  { 
    return $this->json_blueprint_model_template_fence_gate_wall_open($filename); 
  }
  
  public function get_json_blueprint_model_template_fence_gate_wall($filename="") 
  { 
    return $this->json_blueprint_model_template_fence_gate_wall($filename); 
  }
  
  public function get_json_blueprint_model_template_fence_gate($filename="") 
  { 
    return $this->json_blueprint_model_template_fence_gate($filename); 
  }
  
  public function get_json_blueprint_model_template_hanging_lantern($filename="") 
  { 
    return $this->json_blueprint_model_template_hanging_lantern($filename); 
  }
  
  public function get_json_blueprint_model_template_lantern($filename="") 
  { 
    return $this->json_blueprint_model_template_lantern($filename); 
  }
  
  public function get_json_blueprint_model_template_cauldron_full($filename="") 
  { 
    return $this->json_blueprint_model_template_cauldron_full($filename); 
  }
  
  public function get_json_blueprint_model_template_potted_azalea_bush($filename="") 
  { 
    return $this->json_blueprint_model_template_potted_azalea_bush($filename); 
}
  
  public function get_json_blueprint_model_template_cauldron_level1($filename="") 
  { 
    return $this->json_blueprint_model_template_cauldron_level1($filename); 
  }
  
  public function get_json_blueprint_model_template_cauldron_level2($filename="") 
  { 
    return $this->json_blueprint_model_template_cauldron_level2($filename); 
  }
  
  public function get_json_blueprint_model_template_torch($filename="") 
  { 
    return $this->json_blueprint_model_template_torch($filename); 
  }
  
  public function get_json_blueprint_model_template_torch_wall($filename="") 
  { 
    return $this->json_blueprint_model_template_torch_wall($filename); 
  }
  
  public function get_json_blueprint_model_sculk_sensor($filename="") 
  { 
    return $this->json_blueprint_model_sculk_sensor($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth0($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth0($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth1($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth1($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth2($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth2($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth3($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth3($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth4($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth4($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth5($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth5($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth6($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth6($filename); 
  }
  
  public function get_json_blueprint_model_stem_growth7($filename="") 
  { 
    return $this->json_blueprint_model_stem_growth7($filename); 
  }
  
  public function get_json_blueprint_model_thin_block($filename="") 
  { 
    return $this->json_blueprint_model_thin_block($filename); 
  }
  
  public function get_json_blueprint_model_three_dead_sea_pickles($filename="") 
  { 
    return $this->json_blueprint_model_three_dead_sea_pickles($filename); 
  }
  
  public function get_json_blueprint_model_three_sea_pickles($filename="") 
  { 
    return $this->json_blueprint_model_three_sea_pickles($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_n($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_n($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_ne($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_ne($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_ns($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_ns($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_nse($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_nse($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_nsew($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_nsew($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_attached_n($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_attached_n($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_attached_ne($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_attached_ne($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_attached_ns($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_attached_ns($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_attached_nse($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_attached_nse($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_attached_nsew($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_attached_nsew($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_hook($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_hook($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_hook_on($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_hook_on($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_hook_attached($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_hook_attached($filename); 
  }
  
  public function get_json_blueprint_model_tripwire_hook_attached_on($filename="") 
  { 
    return $this->json_blueprint_model_tripwire_hook_attached_on($filename); 
  }
  
  public function get_json_blueprint_model_two_dead_sea_pickles($filename="") 
  { 
    return $this->json_blueprint_model_two_dead_sea_pickles($filename); 
  }
  
  public function get_json_blueprint_model_two_sea_pickles($filename="") 
  { 
    return $this->json_blueprint_model_two_sea_pickles($filename); 
  }
  
  public function get_json_blueprint_model_vine($filename="") 
  { 
    return $this->json_blueprint_model_vine($filename); 
  }
  
  public function get_json_blueprint_model_wall_inventory($filename="") 
  { 
    return $this->json_blueprint_model_wall_inventory($filename); 
  }

}

?>
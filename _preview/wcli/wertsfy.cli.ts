#! /usr/bin/env node

import { argv } from "process";

if(argv[2] == "--labo") {
  console.warn("Labo = "+ argv[3] + argv[4]);
}

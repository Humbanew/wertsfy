import os
from sys import stdin

# compilando o código typescript
def build_typescript(destiny, destiny_declare):
  os.system(f'rmdir /s /q {destiny} {destiny_declare}')
  os.system(f'npx tsc --project tsconfig.json --outDir {destiny}')

# coletando dados importantes
def build_informations_collect():
  print("Coloque o diretório de destino para os arquivos gerados:")
  dest = stdin.readline()
  return dest

fileout = build_informations_collect();
build_typescript(fileout, fileout+"/def/");

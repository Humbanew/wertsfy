import os

# compilando o código typescript
def build_typescript():
  os.system('rmdir /s /q dist dist-def');
  os.system('npx tsc --project tsconfig.json');

build_typescript();

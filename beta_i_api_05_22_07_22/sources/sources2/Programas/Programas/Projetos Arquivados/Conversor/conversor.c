#include <stdio.h>
#include <stdlib.h>

void main() {
	int bit = 1;

	int byte = 8;

	int kilobyte = 1024; 

	int megabyte = kilobyte * 1024; 

	int gigabyte = megabyte * 1024;

	int terrabyte = gigabyte * 1024;

	int petabyte = terrabyte * 1024;

	int exabyte = petabyte * 1024;

	int zettabyte = exabyte * 1024;

	int yottabyte = zettabyte * 1024;

	int brontobyte = yottabyte * 1024;

	int geopbyte = brontobyte * 1024;

	printf("1 KB => 1024 B\n\n");

	printf("1 MB => 1024 KB\n\n");

	printf("1 GB => 1024 MB\n\n");

	printf("1 TB => 1024 GB\n\n");

	printf("1 PB => 1024 TB\n\n");

	printf("1 EB => 1024 PB\n\n");

	printf("1 ZB => 1024 EB\n\n");

	printf("1 YB => 1024 ZB\n\n");

	printf("1 BB => 1024 YB\n\n");

	printf("1 GeB => 1024 BB\n\n");
}
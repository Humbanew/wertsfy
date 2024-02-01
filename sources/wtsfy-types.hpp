#ifndef WTSFY_TYPES_HPP
#define WTSFY_TYPES_HPP

#include <any>
#include <atomic>
#include <cstdio>
#include <cstdlib>
#include <cstdint>
#include <string>
#include <regex>

using namespace std;

// Definições de tipos de dados dentro da Wertsfy
#pragma region WTSFY-TYPES

  #pragma region ATOMIC-DEFINITIONS

    typedef atomic_bool ablt;
    typedef atomic_char achrt;
    typedef atomic_schar aschrt;
    typedef atomic_uchar auchrt;
    typedef atomic_short asi16t;
    typedef atomic_ushort ausi16t;
    typedef atomic_int asi32t;
    typedef atomic_uint ausi32t;
    typedef atomic_long asli32t;
    typedef atomic_ulong aslui32t;
    typedef atomic_llong aslli64t;
    typedef atomic_ullong asllui64t;
    typedef atomic_wchar_t awchrt;
    typedef atomic_char16_t achr16t;
    typedef atomic_char32_t achr32t;
    typedef atomic_int8_t ai8t;
    typedef atomic_uint8_t aui8t;
    typedef atomic_int16_t ai16t;
    typedef atomic_uint16_t aui16t;
    typedef atomic_int32_t ai32t;
    typedef atomic_uint32_t aui32t;
    typedef atomic_int64_t ai64t;
    typedef atomic_uint64_t aui64t;

  #pragma endregion

  #pragma region BASIC-DEFINITIONS

    typedef short int si16t;
    typedef long int li32t;
    typedef long long int lli64t;
    typedef unsigned short int usi16t;
    typedef unsigned long int uli32t;
    typedef unsigned long long int ulli64t;

    typedef bool bool_t;
    typedef bool_t blt;
    typedef float float_t;
    typedef float_t f32t;
    typedef double double_t;
    typedef double_t f64t;

    typedef char char_t;
    typedef char_t chrt;
    typedef char16_t chr16t;
    typedef char32_t chr32t;
    typedef wchar_t wchrt;
    typedef const char cnschrt;
    typedef const char16_t cnschr16t;
    typedef const char32_t cnschr32t;
    typedef const wchar_t cnswchrt;

    typedef void vdt;

    typedef string str;
    typedef wstring wstr;
    typedef u16string str16;
    typedef u32string str32;
  
  #pragma endregion

  #pragma region ADVANCED-DEFINITIONS

    typedef size_t szt;
    typedef ptrdiff_t pdt;
    typedef intptr_t ipt;
    typedef uintptr_t uipt;
    typedef intmax_t imt;
    typedef uintmax_t uimt;

    #pragma region ADVANCED-TYPES-DEFINITIONS

      #pragma region ADVANCED-TYPES-INT-DEFINITIONS

        typedef int8_t i8t;
        typedef int16_t i16t;
        typedef int32_t i32t;
        typedef int64_t i64t;

      #pragma endregion

      #pragma region ADVANCED-TYPES-UINT-DEFINITIONS

        typedef uint8_t ui8t;
        typedef uint16_t ui16t;
        typedef uint32_t ui32t;
        typedef uint64_t ui64t;
      
      #pragma endregion

      #pragma region ADVANCED-TYPES-FINT-DEFINITIONS

        typedef int_fast8_t if8t;
        typedef int_fast16_t if16t;
        typedef int_fast32_t if32t;
        typedef int_fast64_t if64t;
      
      #pragma endregion

      #pragma region ADVANCED-TYPES-FUINT-DEFINITIONS

        typedef uint_fast8_t uif8t;
        typedef uint_fast16_t uif16t;
        typedef uint_fast32_t uif32t;
        typedef uint_fast64_t uif64t;
      
      #pragma endregion

      #pragma region ADVANCED-TYPES-LINT-DEFINITIONS

        typedef int_least8_t il8t;
        typedef int_least16_t il16t;
        typedef int_least32_t il32t;
        typedef int_least64_t il64t;

      #pragma endregion

      #pragma region ADVANCED-TYPES-LUINT-DEFINITIONS

        typedef uint_least8_t uil8t;
        typedef uint_least16_t uil16t;
        typedef uint_least32_t uil32t;
        typedef uint_least64_t uil64t;

      #pragma endregion

    #pragma endregion

  #pragma endregion

  #pragma region ANOTHER-DEFINITIONS

    typedef any any_t;
    typedef regex regex_t;

  #pragma endregion

#pragma endregion

#endif

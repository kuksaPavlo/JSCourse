
// //Number to string
// value = String(10);//string
// value = String(10+3);//string
// value = (40).toString();//string

// //Boolean to String
// value = String(true);//string

// //Array to string
// value = String([1,2,3,4]);//string
// //Object to string
// value = String({nam: 'Denis'});//string [object Object]

// value = 30 + '' + 30;//string 3030
// value = 30 - 'cvfd';//number NaN
// value = 30 * '2';//number 60

// value = true + 10;//number 11
// value = false * 2;//number 0
// value = true + undefined;//number NaN

// //string to number
// value = Number('23');//number 23
// value = Number(true);//number 1
// value = Number(null);//number 0
// value = Number('false');//number NaN
// value = Number([1,23,4]);//number NaN

// value = parseInt('200sdfg');//number 200
// value = parseInt('aaaa200sdfg');//number NaN
// value = parseFloat('200.212px');//number 200.212

// //Boolean
// value = Boolean('Hello');//boolean true
// value = Boolean('');//boolean false
// value = Boolean(100);//boolean true
// value = Boolean(-222);//boolean true
// value = Boolean(0);//boolean false
// value = Boolean(undefined);//boolean false
// value = Boolean({});//boolean true
// value = Boolean([]);//boolean true
// value = Boolean(null);//boolean false

Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true

Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123

String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'

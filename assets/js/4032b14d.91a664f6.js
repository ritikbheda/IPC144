"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[729],{3905:function(t,n,l){l.d(n,{Zo:function(){return s},kt:function(){return c}});var e=l(7294);function a(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function r(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function u(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function i(t,n){if(null==t)return{};var l,e,a=function(t,n){if(null==t)return{};var l,e,a={},r=Object.keys(t);for(e=0;e<r.length;e++)l=r[e],n.indexOf(l)>=0||(a[l]=t[l]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)l=r[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var d=e.createContext({}),k=function(t){var n=e.useContext(d),l=n;return t&&(l="function"==typeof t?t(n):u(u({},n),t)),l},s=function(t){var n=k(t.components);return e.createElement(d.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},p=e.forwardRef((function(t,n){var l=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=k(l),c=a,m=p["".concat(d,".").concat(c)]||p[c]||o[c]||r;return l?e.createElement(m,u(u({ref:n},s),{},{components:l})):e.createElement(m,u({ref:n},s))}));function c(t,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=l.length,u=new Array(r);u[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var k=2;k<r;k++)u[k]=l[k];return e.createElement.apply(null,u)}return e.createElement.apply(null,l)}p.displayName="MDXCreateElement"},6872:function(t,n,l){l.r(n),l.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return s},default:function(){return p}});var e=l(3117),a=l(102),r=(l(7294),l(3905)),u=["components"],i={sidebar_position:1},d="Character Strings (C string)",k={unversionedId:"F-Refinements/character-strings",id:"F-Refinements/character-strings",isDocsHomePage:!1,title:"Character Strings (C string)",description:"Learning Outcomes",source:"@site/docs/F-Refinements/character-strings.md",sourceDirName:"F-Refinements",slug:"/F-Refinements/character-strings",permalink:"/F-Refinements/character-strings",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/F-Refinements/character-strings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"courseNotesSidebar",previous:{title:"Records and Files",permalink:"/secondary-storage/records-and-files"},next:{title:"String Library",permalink:"/refinements/string-library"}},s=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Definition (review)",id:"definition-review",children:[{value:"Allocating Memory",id:"allocating-memory",children:[],level:3},{value:"Initializing Memory",id:"initializing-memory",children:[],level:3}],level:2},{value:"String Handling",id:"string-handling",children:[{value:"Iterations",id:"iterations",children:[],level:3},{value:"Functions",id:"functions",children:[],level:3}],level:2},{value:"Formatted String Input",id:"formatted-string-input",children:[{value:"%s",id:"s",children:[],level:3},{value:"%[]",id:"",children:[],level:3}],level:2},{value:"String Output",id:"string-output",children:[{value:"Formatted Output",id:"formatted-output",children:[],level:3},{value:"Qualifiers",id:"qualifiers",children:[],level:3},{value:"Unformatted Output",id:"unformatted-output",children:[],level:3}],level:2}],o={toc:s};function p(t){var n=t.components,l=(0,a.Z)(t,u);return(0,r.kt)("wrapper",(0,e.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"character-strings-c-string"},"Character Strings (C string)"),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,r.kt)("p",null,"After reading this section, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design data collections using arrays to manage information efficiently"),(0,r.kt)("li",{parentName:"ul"},"Stream data using standard library functions to interact with users")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Although some original programming languages focused on processing numerical information, most languages include extensive features for processing textual data.  Textual data involves sets of characters and these sets are often referred to as character strings.  The C language libraries provide facilities for processing character strings, treated as arrays of characters with a special delimiter. "),(0,r.kt)("p",null,"This chapter introduces these C-style strings, highlights their distinguishing feature and notes the advantage of using strings to pass textual data from one function to another.  This chapter include the conversion specifiers for input and output of character strings."),(0,r.kt)("h2",{id:"definition-review"},"Definition (review)"),(0,r.kt)("p",null,"A string is a ",(0,r.kt)("inlineCode",{parentName:"p"},"char")," array with a special property: a terminator element follows the last ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"meaningful character"))," in the string.  We refer to this terminator as the ",(0,r.kt)("strong",{parentName:"p"},"null terminator")," and identify it by the escape sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\0'"),". "),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"18",align:"center"},"char")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\\0"))),(0,r.kt)("blockquote",null,(0,r.kt)("u",null,"Term Definition"),(0,r.kt)("br",null),'The term "Meaningful Characters" in these notes refers to the actual data content you want to manage in the C string character array.'),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"null terminator")," has the integral value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," on any host platform (in its collating sequence).  All of its bits are 0's.  The null terminator occupies the first position in the ",(0,r.kt)("a",{parentName:"p",href:"../Resources-Appendices/ascii-collating-sequence"},"ASCII")," and ",(0,r.kt)("a",{parentName:"p",href:"../Resources-Appendices/ebcdic-collating-sequence"},"EBCDIC"),". "),(0,r.kt)("p",null,"The index identifying the null terminator element is the same as the number of meaningful characters in the string. "),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"18",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"m"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"i"),(0,r.kt)("td",null,"s"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"A"),(0,r.kt)("td",null,"r"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"o"),(0,r.kt)("td",null,"l"),(0,r.kt)("td",null,"d"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")))),(0,r.kt)("blockquote",null,(0,r.kt)("u",null,"HINT"),(0,r.kt)("br",null),"The number of memory locations (`char` **array size**) occupied by a C string is one more than the number of meaningful characters in the string."),(0,r.kt)("h3",{id:"allocating-memory"},"Allocating Memory"),(0,r.kt)("p",null,"We allocate memory for a C string in the same way that we allocate memory for an array.  Since the ",(0,r.kt)("strong",{parentName:"p"},"null terminator")," is one of the elements in the array, we must allocate memory for one extra character than the number of meaningful characters. "),(0,r.kt)("p",null,"For example, to allocate memory for a string with up to ",(0,r.kt)("inlineCode",{parentName:"p"},"30")," meaningful characters, we write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"char name[31]; // 30 chars plus 1 char for the null terminator byte\n")),(0,r.kt)("h3",{id:"initializing-memory"},"Initializing Memory"),(0,r.kt)("p",null,"To initialize a string at the time of memory allocation, we follow the definition with the assignment operator and the set of initial characters enclosed in braces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"const char name[31] = {'M','y',' ','n','a','m','e',' ','i','s',' ', \n                       'A','r','n','o','l','d','\\0'};\n")),(0,r.kt)("p",null,"For a more compact form we enclosed the list of meaningful characters in double quotes. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'const char name[31] = "My name is Arnold";  // null-byte is automatically appended\n')),(0,r.kt)("p",null,"The C compiler copies the characters in the string literal into the character string and appends the null-byte terminator after the last character copied."),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"m"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"i"),(0,r.kt)("td",null,"s"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"A"),(0,r.kt)("td",null,"r"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"o"),(0,r.kt)("td",null,"l"),(0,r.kt)("td",null,"d"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"Since the number of initializers (18) is less than the number of elements (31) available, the compiler fills the uninitialized elements with 0's. "),(0,r.kt)("h2",{id:"string-handling"},"String Handling"),(0,r.kt)("p",null,"Arrays of numbers require a separate variable to hold the number of elements that are filled.  Unlike arrays of numbers, character strings do not require a separate variable for sizing.  In iterations on the characters in a string, we check for the presence of the null terminator in our test conditions. "),(0,r.kt)("h3",{id:"iterations"},"Iterations"),(0,r.kt)("p",null,"The following program displays the string stored in name","[31]"," character by character:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// Iterations on Strings\n// string_iterations.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        int i;\n        const char name[31] = \"My name is Arnold\"; \n\n        for (i = 0; name[i] != '\\0'; i++)\n                printf(\"%c\", name[i]);\n\n        putchar('\\n');\n\n        return 0;\n}\n")),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"My name is Arnold\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Using a character string instead of an array of characters with a separate sizing variable achieves a more compact argument list for function calls.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// Strings To Functions\n// string_to_function.c\n\n#include <stdio.h>\nvoid print(const char name[]);\n\nint main(void)\n{\n        int i;\n        const char name[31] = \"My name is Arnold\"; \n\n        print(name);\n        return 0;\n}\n\nvoid print(const char name[])\n{\n        int i;\n\n        for (i = 0; name[i] != '\\0'; i++)\n                printf(\"%c\", name[i]);\n\n        putchar('\\n');\n}\n")),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"My name is Arnold\n")),(0,r.kt)("h2",{id:"formatted-string-input"},"Formatted String Input"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fscanf()")," library functions support conversion specifiers particularly designed for character string input.  These specifiers are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%s"),"  - whitespace delimited set"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%[]")," - rule delimited set")),(0,r.kt)("p",null,"The corresponding argument for these specifiers is the address of the string to be populated from the input stream. "),(0,r.kt)("h3",{id:"s"},"%s"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," conversion specifier"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reads all characters ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"until"))," the first whitespace character"),(0,r.kt)("li",{parentName:"ul"},"stores the characters read in the char array identified by the corresponding argument"),(0,r.kt)("li",{parentName:"ul"},"stores the null terminator in the char array after accepting the last character"),(0,r.kt)("li",{parentName:"ul"},"leaves the delimiting whitespace character and any subsequent characters in the input buffer")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char name[31];\nscanf("%s", name);  // <=== User enters: My name is Arnold\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function will stop accepting input after the character ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," and stores the following:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"The characters ",(0,r.kt)("inlineCode",{parentName:"p"},"' name is Arnold'")," remain in the input buffer."),(0,r.kt)("p",null,"A qualifier on the conversion specifier limits the number of characters accepted.  For instance, %10s reads no more than 10 characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char name[31];\nscanf("%10s", name); // <=== User enters: Schwartzenegger\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function will stop accepting input after the character ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and stores the following:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"S"),(0,r.kt)("td",null,"c"),(0,r.kt)("td",null,"h"),(0,r.kt)("td",null,"w"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"r"),(0,r.kt)("td",null,"t"),(0,r.kt)("td",null,"z"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"By specifying the maximum number of characters to be read at less than 31, we ensure that scanf() does not exceed the memory allocated for the string."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%s")," discards all leading whitespace characters."),(0,r.kt)("p",null,"For example, if enter many spaces before the Schwartzenegger value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"char name[31];\nscanf(\"%10s\", name);  // <=== User enters: '          Schwartzenegger'\n")),(0,r.kt)("p",null,"Just as before, the ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function will stop accepting input after the character ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," but will also discard the leading spaces entered and stores the following:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"S"),(0,r.kt)("td",null,"c"),(0,r.kt)("td",null,"h"),(0,r.kt)("td",null,"w"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"r"),(0,r.kt)("td",null,"t"),(0,r.kt)("td",null,"z"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," discards ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"leading whitespace")),", it cannot accept an empty string; that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," does not treat a ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'")," in an otherwise empty input buffer as an empty string.  If the buffer only contains ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'scanf("%10s", name)')," discards the ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'")," and waits for non-whitespace input followed by another ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'"),"."),(0,r.kt)("h3",{id:""},"%[]"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"%[]")," conversion specifier accepts input consisting only of a set of pre-selected characters.  The brackets contain the admissible and/or inadmissible characters.  The symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," prefaces the list of ",(0,r.kt)("strong",{parentName:"p"},"inadmissible")," characters.  The symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," identifies a range of characters in an ",(0,r.kt)("strong",{parentName:"p"},"inclusive")," set. "),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"%[^\\n]")," conversion specifier:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reads all characters until the newline ('\\n')"),(0,r.kt)("li",{parentName:"ul"},"stores the characters read in the char array identified by the corresponding argument"),(0,r.kt)("li",{parentName:"ul"},"stores the null terminator in the char array after accepting the last character"),(0,r.kt)("li",{parentName:"ul"},"leaves the delimiting character (here, '\\n') in the input buffer")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char name[31];\nscanf("%[^\\n]", name);  // <=== User enters: My name is Arnold\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function accepts the full line an stores:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"m"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"i"),(0,r.kt)("td",null,"s"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"A"),(0,r.kt)("td",null,"r"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"o"),(0,r.kt)("td",null,"l"),(0,r.kt)("td",null,"d"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"A qualifier on this conversion specifier before the opening bracket limits the number of characters accepted.  For instance, %10",(0,r.kt)("sup",{parentName:"p",id:"fnref-\\n"},(0,r.kt)("a",{parentName:"sup",href:"#fn-\\n",className:"footnote-ref"},"\\n"))," reads no more than 10 characters: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char name[31];\nscanf("%10[^\\n]", name);  // <=== User enters: My name is Arnold\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function will store:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"m"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"i"),(0,r.kt)("td",null,"s"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,"We specify the maximum number of characters as the qualifier to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," does not store more characters than the allocated memory for the array size."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%[ ]"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"%s"),", ignores any leading whitespace characters."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"char name[31];\nscanf(\"%10[^\\n]\", name);  // <=== User enters: '          My name is Arnold'\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," function will store:"),(0,r.kt)("table",{border:"0"},(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"31",align:"center"},"char",(0,r.kt)("br",null),"name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"12"),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"15"),(0,r.kt)("td",null,"16"),(0,r.kt)("td",null,(0,r.kt)("b",null,"17")),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"19"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"24"),(0,r.kt)("td",null,"25"),(0,r.kt)("td",null,"26"),(0,r.kt)("td",null,"27"),(0,r.kt)("td",null,"28"),(0,r.kt)("td",null,"29"),(0,r.kt)("td",null,"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"M"),(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"n"),(0,r.kt)("td",null,"a"),(0,r.kt)("td",null,"m"),(0,r.kt)("td",null,"e"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"i"),(0,r.kt)("td",null,"s"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\\0")),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Caution")),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"%[ ]")," ignores leading whitespace, it cannot accept an empty string; that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"%[^\\n]")," does not treat a ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'")," in an otherwise empty input buffer as an empty string.  If the input buffer only contains ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'scanf("%[^\\n]", name)'),", unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"%s"),", returns ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and leaves ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," unchanged."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"Consider a text file named spring.dat that contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Light Jacket\nLong-Sleeved Shirts\nLarge Skateboards\n")),(0,r.kt)("p",null,"The following program reads and displays this data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Reading from a file\n// readFromFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n        char phrase[61];\n\n        fp = fopen("spring.dat","r");\n\n        if (fp != NULL)\n        {\n                while (fscanf(fp, "%60[^\\n]%*c", phrase) != EOF)\n                        printf("%s\\n", phrase);\n                \n                fclose(fp);\n        } \n        else\n        {\n                printf("Failed to open file\\n"); \n        }\n\n        return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Light Jacket\nLong-Sleeved Shirts\nLarge Skateboards\n")),(0,r.kt)("h2",{id:"string-output"},"String Output"),(0,r.kt)("h3",{id:"formatted-output"},"Formatted Output"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fprintf()")," library functions support the ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," conversion specifier for character string output.  The corresponding argument is the ",(0,r.kt)("strong",{parentName:"p"},"address")," of the character string or string literal.  Under this specifier ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," displays all of the characters from the address provided up to but ",(0,r.kt)("strong",{parentName:"p"},"excluding")," the null terminator byte.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Displaying Strings\n// displayStrings.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        const char name[31] = "My name is Arnold"; \n\n        printf("%s\\n", name);\n\n        return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"My name is Arnold\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Writing to a File\n// writeToFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n        const char phrase[] = "My name is Arnold";\n\n        fp = fopen("alpha.txt","w");\n\n        if (fp != NULL) \n        {\n                fprintf(fp, "%s\\n", phrase);\n                fclose(fp);\n        } \n        else \n        {\n                printf("Failed to open file\\n"); \n        }\n\n        return 0;\n}\n')),(0,r.kt)("h3",{id:"qualifiers"},"Qualifiers"),(0,r.kt)("p",null,"Qualifiers on the ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," specifier add detail control:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%20s")," displays a string ",(0,r.kt)("strong",{parentName:"li"},"right"),"-justified in a field of ",(0,r.kt)("strong",{parentName:"li"},"20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%-20s")," displays a string ",(0,r.kt)("strong",{parentName:"li"},"left"),"-justified in a field of ",(0,r.kt)("strong",{parentName:"li"},"20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%20.10s")," displays the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"first"))," ",(0,r.kt)("strong",{parentName:"li"},"10")," characters of a string ",(0,r.kt)("strong",{parentName:"li"},"right"),"-justified in a field of ",(0,r.kt)("strong",{parentName:"li"},"20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%-20.10s")," displays the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"first"))," ",(0,r.kt)("strong",{parentName:"li"},"10")," characters of a string ",(0,r.kt)("strong",{parentName:"li"},"left"),"-justified in a field of ",(0,r.kt)("strong",{parentName:"li"},"20"))),(0,r.kt)("h3",{id:"unformatted-output"},"Unformatted Output"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"puts()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fputs()")," library functions output a character string to the standard or specified output device respectively. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"puts")),(0,r.kt)("p",null,"The prototype for puts() is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int puts(const char *);\n")),(0,r.kt)("p",null,"The parameter receives the address of the character string to be displayed.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Displaying Lines\n// puts.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        const char name[31] = "My name is Arnold"; \n\n        puts(name);\n\n        return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"My name is Arnold\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fputs")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fputs()")," writes a null-terminated string to a file.  The prototype for ",(0,r.kt)("inlineCode",{parentName:"p"},"fputs()")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fputs(const char *str, FILE *fp);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"str")," receives the address of the string to be written and ",(0,r.kt)("inlineCode",{parentName:"p"},"fp")," receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  ",(0,r.kt)("inlineCode",{parentName:"p"},"fputs()")," returns a non-negative value if successful; ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," in the event of an error."))}p.isMDXComponent=!0}}]);
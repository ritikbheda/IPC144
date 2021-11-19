"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[381],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2544:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),l=["components"],o={id:"structures",title:"Structures",sidebar_position:2,slug:"/data-structures/structures",description:"A structure type is a collection of not necessarily identical types."},s="Structures",u={unversionedId:"C-Data-Structures/structures",id:"C-Data-Structures/structures",isDocsHomePage:!1,title:"Structures",description:"A structure type is a collection of not necessarily identical types.",source:"@site/docs/C-Data-Structures/structures.md",sourceDirName:"C-Data-Structures",slug:"/data-structures/structures",permalink:"/data-structures/structures",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/C-Data-Structures/structures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"structures",title:"Structures",sidebar_position:2,slug:"/data-structures/structures",description:"A structure type is a collection of not necessarily identical types."},sidebar:"courseNotesSidebar",previous:{title:"Arrays",permalink:"/data-structures/arrays"},next:{title:"Functions",permalink:"/D-Modularity/functions"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Types",id:"types",children:[{value:"Primitive Types",id:"primitive-types",children:[],level:3},{value:"Derived Types",id:"derived-types",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Declaration",id:"declaration",children:[],level:3},{value:"Allocating Memory",id:"allocating-memory",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"Initialization",id:"initialization",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3}],level:2},{value:"Member Access",id:"member-access",children:[{value:"Example",id:"example-3",children:[],level:4}],level:2},{value:"Walkthrough",id:"walkthrough",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structures"},"Structures"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design data collections using structures to manage information efficiently")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The most commonly used data structure in C language programs aside from the ",(0,i.kt)("a",{parentName:"p",href:"/C-Data-Structures/arrays",title:"Array"},"array")," is the struct or structure.  A structure type is a collection of not necessarily identical types.  We use the structure type to define a group of variables as a single object. "),(0,i.kt)("p",null,"This chapter reviews the primitive types and presents the syntax for declaring a structure type, defining an object of structure type, and accessing the data values within that object.  This chapter includes an example of how to walkthrough a program that includes structure types."),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"A type describes how to interpret the information stored in a region of memory.  In the C language, a type may be a primitive type or a derived type.  A derived type is a collection of other types."),(0,i.kt)("h3",{id:"primitive-types"},"Primitive Types"),(0,i.kt)("p",null,"The core language defines the ",(0,i.kt)("a",{parentName:"p",href:"/B-Computations/types",title:"Primitive Types"},"primitive types"),".  We cannot redefine these types or introduce new primitive types.  The C language primitive types include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"char")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"double"))),(0,i.kt)("p",null,"Each type defines how a value of that type is stored in a region of memory.  Consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," type.  A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," type is stored in equivalent binary representation in 4 ",(0,i.kt)("a",{parentName:"p",href:"/A-Introduction/information#bytes",title:"Bytes"},"bytes")," on a 32-bit platform:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Representation of a 32-bit integer in memory.",src:r(9052).Z})),(0,i.kt)("p",null,"To define an object of ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," type called ",(0,i.kt)("inlineCode",{parentName:"p"},"noSubjects"),", we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int noSubjects;\n")),(0,i.kt)("h3",{id:"derived-types"},"Derived Types"),(0,i.kt)("p",null,"The declaration of a derived type in the C language takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag\n{\n    //... declarations here\n};\n")),(0,i.kt)("p",null,"where the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," identifies a derived type or structure.  ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," is the name by which we call the structure (just like ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," above).  The declaration concludes with a semicolon."),(0,i.kt)("p",null,"We list the types that belong to the structure along with their identifiers within the curly braces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag\n{\n    // [type] [identifier];\n    // ... other types\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," is the member's type.  ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," is the name by which we access the member's value. "),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider a structure type that consists of two pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the student's ID number"),(0,i.kt)("li",{parentName:"ul"},"the student's grades (up to 4 individual grades)")),(0,i.kt)("p",null,"Let us call this structure type ",(0,i.kt)("inlineCode",{parentName:"p"},"Student"),".  To declare the type, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Student\n{\n    int idNum;       // student number \n    float grade[4];  // grades\n};\n")),(0,i.kt)("p",null,"The members occupy memory in the order in which we have listed them in the declaration of our structure:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Byte representation of a Student struct in memory.",src:r(4233).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This declaration does not allocate any memory for any object; it only defines the structure and the rules for objects of that type. "))),(0,i.kt)("h3",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,"We declare our structure globally and may store its declaration in a separate file called a header file (say, with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.h"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// Student.h\n\nstruct Student\n{\n    int idNum;       // student number \n    float grade[4];  // grades\n};\n")),(0,i.kt)("p",null,"When we place source code in a header (",(0,i.kt)("inlineCode",{parentName:"p"},".h"),") file, we insert that header file's code into the source file that requires that information, as shown below.  In such cases, our complete source code is stored in more than one file.  When compiling multi-file source code, we only pass the ",(0,i.kt)("inlineCode",{parentName:"p"},".c")," file(s) to the compiler.  The code in a header file is duplicated inside each C file in which it is included, which allows us to write code, like a ",(0,i.kt)("inlineCode",{parentName:"p"},"struct"),", in one spot and edit it in that one spot alone."),(0,i.kt)("h3",{id:"allocating-memory"},"Allocating Memory"),(0,i.kt)("p",null,"When we define an object of a structure, we allocate memory for that object.  Our definition takes the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag identifier;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," is the name of the structure and ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," is the name of the object. "),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"To allocate memory for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),", we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// main.c\n\n#include "Student.h" // includes the description of a Student \n\nint main(void)\n{\n    struct Student harry; // allocates memory for harry \n\n    // ...\n\n    return 0;\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Representation of a Student variable with annotated memory addresses.",src:r(8983).Z})),(0,i.kt)("p",null,"The object name ",(0,i.kt)("inlineCode",{parentName:"p"},"harry")," refers to the collection of members in ",(0,i.kt)("inlineCode",{parentName:"p"},"Student harry")," taken together. "),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"To initialize an object of a structure we add a braces-enclosed, comma-separated list of values.  We organize the initial values in the same order as the member listing in the declaration of the structure.  The initialization takes the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag identifier = { value, ... , value };\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Structure initialization is similar to one of an array. "))),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("p",null,"To initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"harry")," with student number ",(0,i.kt)("inlineCode",{parentName:"p"},"975")," and grades of ",(0,i.kt)("inlineCode",{parentName:"p"},"75.6"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"82.3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"68.9"),", we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct Student harry = { 975, { 75.6f, 82.3f, 68.9f } };\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A Student variable with annotated memory addresses and values.",src:r(9448).Z})),(0,i.kt)("h2",{id:"member-access"},"Member Access"),(0,i.kt)("p",null,"To access a member of an object of a structure, we use the dot operator (",(0,i.kt)("inlineCode",{parentName:"p"},"."),").  Dot notation takes the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.member\n")),(0,i.kt)("p",null,"To access ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),"'s student number, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"harry.idNum\n")),(0,i.kt)("p",null,"To retrieve the ",(0,i.kt)("a",{parentName:"p",href:"/D-Modularity/pointers#addresses",title:"Address"},"address")," of a non-array member of an object, we use the address of operator (",(0,i.kt)("inlineCode",{parentName:"p"},"&"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"&instance.member\n")),(0,i.kt)("p",null,"To access the address of ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),"'s student number, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"&harry.idNum\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We may omit the parentheses here - ",(0,i.kt)("inlineCode",{parentName:"p"},"&(harry.idNum)")," - they are unnecessary because the dot (",(0,i.kt)("inlineCode",{parentName:"p"},"."),") operator binds tighter than the address-of operator (see the ",(0,i.kt)("a",{parentName:"p",href:"/resources-appendices/operators",title:"Operator Precedence"},"precedence")," table). "))),(0,i.kt)("p",null,"To access an array member, we refer to its name without brackets.  For example, to access the address of ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),"'s grades, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"harry.grade\n")),(0,i.kt)("p",null,"To access an element of an array member, we use subscript notation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.member[index]\n")),(0,i.kt)("p",null,"To access ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),"'s ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"third"))," grade, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"harry.grade[2]\n")),(0,i.kt)("p",null,"To retrieve the address of an element of an array member, we use the address of operator (",(0,i.kt)("inlineCode",{parentName:"p"},"&"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"&object.member[index]\n")),(0,i.kt)("p",null,"To access the address of ",(0,i.kt)("inlineCode",{parentName:"p"},"harry"),"'s ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"third"))," grade, we write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"&harry.grade[2]\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A Student variable with annotated expressions for addresses. ",src:r(3547).Z}),"  "),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("p",null,"A convenient alternative to ",(0,i.kt)("a",{parentName:"p",href:"/C-Data-Structures/arrays#parallel-arrays",title:"Parallel Arrays"},"parallel arrays")," for storing tabular information is an array of structures.  One member holds the key, while the other member holds the data. "),(0,i.kt)("p",null,"In the following example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sku")," member holds the stock keeping unit (sku) for a product, while ",(0,i.kt)("inlineCode",{parentName:"p"},"price")," holds its unit price.  The header file with the declaration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," structure contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// Structure Example\n// product.h\n\nstruct Product\n{\n    int sku;\n    double price;\n};\n")),(0,i.kt)("p",null,"The program that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," structure is listed below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Structure Example\n// structure.c\n\n#include <stdio.h>\n#include "product.h"\n\nint main(void)\n{\n    int i;\n    struct Product product[] = { {2156, 2.34}, {4633, 7.89},\n                                 {3122, 6.56}, {5611, 9.32} };\n    const int n = 4;\n\n    printf("  SKU Price\\n");\n    for (i = 0; i < n; i++)\n    {\n        printf("%5d $%.2lf\\n", product[i].sku, product[i].price); \n    }\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"The output produced from the above sample is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  SKU Price \n 2156 $2.34\n 4633 $7.89\n 3122 $6.56\n 5611 $9.32\n")),(0,i.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/B-Computations/testing-and-debugging#walkthrough-table",title:"Walkthrough Table"},"walkthrough table")," for a program with structure types includes lists of the member types below the object identifiers.  The table for the example above is shown below."),(0,i.kt)("p",null,"The table includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the structure type of each object"),(0,i.kt)("li",{parentName:"ul"},"the identifier of each object"),(0,i.kt)("li",{parentName:"ul"},"the type of each member"),(0,i.kt)("li",{parentName:"ul"},"the identifier of each member")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each object is broken down into its members in the head of the table. We reserve a separate line for the addresses of the different objects:"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A walkthrough table.",src:r(108).Z})),(0,i.kt)("p",null,"Output:"),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null))}d.isMDXComponent=!0},4233:function(e,t){t.Z="data:image/png;base64,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"},8983:function(e,t,r){t.Z=r.p+"assets/images/example2-memory-occupation-c76980f109d3cf1731f330b8ee546102.png"},9448:function(e,t,r){t.Z=r.p+"assets/images/example3-b9fc1a2c20a2de5c00592e0203b484c4.png"},3547:function(e,t,r){t.Z=r.p+"assets/images/example4-88a54a29ba30552916047f599bc673a0.png"},9052:function(e,t){t.Z="data:image/png;base64,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WfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdJ1uCbt9tKM6po1XzOq20szqmvWfM2orlnzNaO6vTSjumbN1yxdh2vSbi/NqK5Z8zWjur00o7pmzdeM6po1XzOq20szqmvWfM3Sdbgm7fbSjOqaNV8zqttLM6pr1nzNqK5Z8zWjur00o7pmzdcsXYdr0m4vzaiuWfM1o7q9NKO6Zs3XjOqaNV8zqttLM6pr1nzN0nW4Ju320ozqmjVfM6rbSzOqa9Z8zaiuWfM1o7q9NKO6Zs3XLF2Ha9JuL82orlnzNaO6vTSjumbN14zqmjVfM6rbSzOqa9Z8zdI9PlxJkiRJkqzRT0JOZgAAAAAAZvJ/yBK9ir1OW+cAAAAASUVORK5CYII="},108:function(e,t,r){t.Z=r.p+"assets/images/structures-walkthrough-table-ffad408f453d9da10956ff4a932a6c7f.png"}}]);
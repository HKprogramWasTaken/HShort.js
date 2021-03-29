/* 

██╗░░██╗░██████╗██╗░░██╗░█████╗░██████╗░████████╗░░░░░░░░██╗░██████╗
██║░░██║██╔════╝██║░░██║██╔══██╗██╔══██╗╚══██╔══╝░░░░░░░░██║██╔════╝
███████║╚█████╗░███████║██║░░██║██████╔╝░░░██║░░░░░░░░░░░██║╚█████╗░
██╔══██║░╚═══██╗██╔══██║██║░░██║██╔══██╗░░░██║░░░░░░██╗░░██║░╚═══██╗
██║░░██║██████╔╝██║░░██║╚█████╔╝██║░░██║░░░██║░░░██╗╚█████╔╝██████╔╝
╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═════╝░

Plugin To Web javascript

Made by HxKprogram (21-03-29)

*/

"use strict";

// GetFromID

function GetFromID(i) {return document.getElementById(i);}

// GetFromClassName

function GetFromClassName(i){return document.getElementsByClassName(i);}

// WriteHtml

function WriteHtml(i) {document.write(i)} 

// GetFromName

function GetFromName(i){return document.getElementsByName(i);}

// Print

function Print(i) {
  console.log(i)
}

// Warn
function Warn(i) {
  console.warn(i)
}

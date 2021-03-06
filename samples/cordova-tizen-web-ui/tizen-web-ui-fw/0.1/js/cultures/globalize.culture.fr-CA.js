/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*
 * Globalize Culture fr-CA
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "fr-CA", "default", {
	name: "fr-CA",
	englishName: "French (Canada)",
	nativeName: "français (Canada)",
	language: "fr",
	numberFormat: {
		",": " ",
		".": ",",
		NaN: "Non Numérique",
		negativeInfinity: "-Infini",
		positiveInfinity: "+Infini",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["(n $)","n $"],
			",": " ",
			".": ","
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
				namesAbbr: ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],
				namesShort: ["di","lu","ma","me","je","ve","sa"]
			},
			months: {
				names: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],
				namesAbbr: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});

}( this ));

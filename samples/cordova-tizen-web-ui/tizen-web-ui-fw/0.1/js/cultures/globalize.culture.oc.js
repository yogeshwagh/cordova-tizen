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
 * Globalize Culture oc
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

Globalize.addCultureInfo( "oc", "default", {
	name: "oc",
	englishName: "Occitan",
	nativeName: "Occitan",
	language: "oc",
	numberFormat: {
		",": " ",
		".": ",",
		NaN: "Non Numeric",
		negativeInfinity: "-Infinit",
		positiveInfinity: "+Infinit",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"],
				namesAbbr: ["dim.","lun.","mar.","mèc.","jòu.","ven.","sab."],
				namesShort: ["di","lu","ma","mè","jò","ve","sa"]
			},
			months: {
				names: ["genier","febrier","març","abril","mai","junh","julh","agost","setembre","octobre","novembre","desembre",""],
				namesAbbr: ["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]
			},
			monthsGenitive: {
				names: ["de genier","de febrier","de març","d'abril","de mai","de junh","de julh","d'agost","de setembre","d'octobre","de novembre","de desembre",""],
				namesAbbr: ["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"après Jèsus-Crist","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd,' lo 'd MMMM' de 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd,' lo 'd MMMM' de 'yyyy HH:mm",
				F: "dddd,' lo 'd MMMM' de 'yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));

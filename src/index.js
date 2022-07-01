module.exports = function toReadable (number) {


    let object = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight", 
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
            100: "one hundred",
            200: "two hundred",
            300: "three hundred",
            400: "four hundred",
            500: "five hundred",
            600: "six hundred",
            700: "seven hundred",
            800: "eight hundred",
            900: "nine hundred"

        }
    

    
        for(key in object){
            if(key == number){
                return object[key];
            }else if(number >= 20 && number <= 99){
                return funcDozens(number);
            }else if(number >= 100 && number <= 999){
                return funcWeaving(number);
            }
        }
    

      
    
    
	function funcDozens(elem){
		let arr = String(elem).split("");
		let num = arr.length;
		let newArr = [];
		if(num == 2){
			newArr.push(arr[0]);
			newArr.push(0);
		}
		str = newArr.join("");
		
			let result = `${object[str]} ${object[arr[1]]}`;	
			return deleteUndefined(result);
	}


	function funcWeaving(elem){
		let arr = String(elem).split("");
		let num = arr.length;
		let newArr = [];
		let zero = "00";
		if(num == 3){
			newArr.push(arr[0]);
			newArr.push(zero);	
		}
		console.log(newArr)
		let str = newArr.join("");
		console.log(str);
		let res = `${arr[1]}${arr[2]}`
		console.log(res)
		let resu = Number(res);
		let result;
		if(solo(resu)){
			result = `${object[str]} ${solo(resu)}`;
		}else{
			result = `${object[str]} ${funcDozens(resu)}`;
		}

		 

		return deleteUndefined(result);

	}
	
	function deleteUndefined(result){
        let str = result.split(" ").filter(elem => elem != "undefined" && elem != "zero" ).join(" ");
		return String(str);
	}

	function solo(elem){

		for(key in object){
			if(key == elem){
				return object[elem];
			}
		}
	}

  
}

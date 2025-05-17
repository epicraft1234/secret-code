function txttomorse(){
    const teks = document.getElementById("text").value;
    const code = [];

    for (let i = 0; i < teks.length; i++) {
        code.push(teks[i]);

    }

    const trans = {
        a: '.....', b: '-----', c: '-....', d: '.----', e: '.-...', f: '-.---', g: '..-..',
        h: '--.--', i: '...-.', j: '---.-', k: '....-', l: '----.', m: '..---', n: '--...', 
        o: '.--..', p: '-..--', q: '..--.', r: '--..-', s: '...--', t: '---..', u: '-..-',
        v: '.--.', w: '.-.-', x: '-.-.', y: '--..', z: '..--', '-': '-.', '?': '.-',
        1: '-', 2: '.', 3: '--', 4: '..', 5: '---', 6: '...', 7: '.--', 8: '-..', 9: '..-', 0: '--.' 
    };
    const i = 0;
    const hasil = [];

    for (let i = 0; i < teks.length; i++){
        if(code[i].toLowerCase() == " "){
            hasil[i] = "|" ;
        }
        else{
            hasil[i] = trans[code[i].toLowerCase()];
        }
        

    }
    document.getElementById("out").textContent = `${hasil.join(" ")}`;
}

function morsetotxt(){
    const teks = document.getElementById("text").value;
    const words = teks.split(' ')
    const jumlah = teks.split(' ').length;

    const trans = {
        '.....': 'a', '-----': 'b', '-....': 'c', '.----': 'd', '.-...': 'e', '-.---': 'f', '..-..': 'g',
        '--.--': 'h', '...-.': 'i', '---.-': 'j', '....-': 'k', '----.': 'l', '..---': 'm', '--...': 'n', 
        '.--..': 'o', '-..--': 'p', '..--.': 'q', '--..-': 'r', '...--': 's', '---..': 't', '-..-': 'u',
        '.--.': 'v', '.-.-': 'w', '-.-.': 'x', '--..': 'y', '..--': 'z', '-.': '-', '.-': '?',
        '-': '1', '.': '2', '--': '3', '..': '4', '---': '5', '...': '6', '.--': '7', '-..': '8', '..-': '9', '--.': '0' 
    };

    const i = 0;
    const hasil = [];
    for (let i = 0; i < jumlah; i++){
        if(words[i] == "|"){
            hasil[i] = " " ;
        }
        else{
            hasil[i] = trans[words[i]];
            hasil[i] = hasil[i].toUpperCase();
        }
    }
    document.getElementById("out").textContent = `${hasil.join("")}`;

}
var A = [],B = [];
var C=0,a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,m=0,p=0;

for (var i=0; i < 104; i ++) {
    !(i % 8)? A[i] = 1: A[i] = i > 96 || i < 8;
}

function start() { 
    var view = "";
    for (var i = 0; i < 104; i ++) {
        view += "￣■○●◇◆△▲".charAt(A[i]) + (!((i + 1) % 8) ? "■<br>": "");
    }
    
    D.innerHTML = view + d;
    if (!a) {
        j = 0;
        for (var i = 96; i > 17; i --) {
            if(!A[i] && A[i - 8] != 0) {
                A[i] = A[i - 8];
                A[i - 8] = 0;
                j = 1;
            }
        }
        j ? a = 0: (a = h = 1, f = 12, g = 4);
    }
    if (a == 1) {
        for (var i = 0; i < 96; i ++) {
            B = A.slice(0);
            m = 0;
            p = B[i];
            chain(i);
            if(m > 3) {
                e ++;
                d += m * e;
                A = B.slice(0);
                a = -1
            }
        }
        !A[12] ? a ++: a = 9;
    }
    if(a > 3) {
        e = A[f] = A[g] = 0;
        f +=( C == 39) * (!A[f + 1]) * (!A[g + 1]) - (C == 37) * (!A[f - 1]) * (!A[g - 1]);
        h +=( C > 39) * (!A[f + ((h + 1) % 4 == 1) * -8 + ((h + 1) % 4 == 2) + ((h + 1) % 4 == 3) * 8 - !((h + 1) % 4)]);
        g = f -(h % 4 == 1) * 8 + (h % 4 == 2) + (h % 4 == 3) * 8 - !(h % 4);
        A[f] = b;
        A[g] = c;
        C = 0;
        a == 8 ? a = 3: a ++
    }
    
    if(a == 3) {
        A[f] = A[g] = 0;
        !A[20]? a = 9: 0;
        !A[f + 8] && !A[g + 8]? (f += 8, g += 8, a = 4): a = 0;
        A[f] = b;
        A[g] = c;
    }
    
    if (a == 2) 
        (b = 2 + (Math.random(c = 2 + (Math.random(A[f] = b) * 6) | 0) * 6) | 0, A[g] = c, a ++);
    
    if (a < 9) 
        setTimeout(start, 70)
    
}

function chain(n) {
    if(B[n] == p && p > 1) {
        B[n] = 0;
        m ++;
        chain(n - 8);
        chain(n + 1);
        chain(n + 8);
        chain(n - 1);
    }
}

start();
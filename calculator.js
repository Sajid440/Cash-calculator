
            function main() {
                // let a = document.getElementById("one").value;
                let b = document.getElementById("two").value;

                // let c  = document.getElementById("four").value;
                let d = document.getElementById("five").value;

                // let e = document.getElementById("seven").value;
                let f = document.getElementById("eight").value;

                // let g= document.getElementById("ten").value;
                let h = document.getElementById("elevan").value;

                // let i= document.getElementById("thirteen").value;
                let j = document.getElementById("fourteen").value;

                // let k= document.getElementById("sixteen").value;
                let l = document.getElementById("seventeen").value;

                // let m= document.getElementById("nineteen").value;
                let n = document.getElementById("twenty").value;

                // let o= document.getElementById( "twentytwo").value
                let p = document.getElementById("twentythree").value

                // let q= document.getElementById( "twentyfive").value
                let r = document.getElementById("twentysix").value

                // let s= document.getElementById( "twentyeight").value
                let t = document.getElementById("twentynine").value


                let note = Number(b) + Number(d) + Number(f) + Number(h) + Number(j) + Number(l) + Number(n) + Number(p) + Number(r) + Number(t);

                let tot1 = document.getElementById("three").value = 2000 * b;
                let tot2 = document.getElementById("six").value = 500 * d;
                let tot3 = document.getElementById("nine").value = 200 * f;
                let tot4 = document.getElementById("twelve").value = 100 * h;
                let tot5 = document.getElementById("fifteen").value = 50 * j
                let tot6 = document.getElementById("eighteen").value = 20 * l
                let tot7 = document.getElementById("twentyone").value = 10 * n
                let tot8 = document.getElementById("twentyfour").value = 5 * p
                let tot9 = document.getElementById("twentyseven").value = 2 * r
                let tot10 = document.getElementById("thirty").value = 1 * t

                //all  total 

                document.getElementById("notes").innerHTML = note;
                document.getElementById("cash").innerHTML = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7 + tot8 + tot9 + tot10;
            }

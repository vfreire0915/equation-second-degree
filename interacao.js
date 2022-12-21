function calcula() {
    var resultado = window.document.getElementById("resultado");
    var ca = window.document.getElementById("a");
    var cb = window.document.getElementById("b");
    var cc = window.document.getElementById("c");
    var a = Number(ca.value);
    var b = Number(cb.value);
    var c = Number(cc.value);
    var delta = (b**2) - (4 * a * c);
    var formula_soma = (-b + delta**(1/2)) / (2*a);
    var formula_subt = (-b - delta**(1/2)) / (2*a);

    if (delta < 0) {
        delta = -delta;
        raiz = delta**0.5;
        raiz_s = String(raiz);
        b = -b
        b_s = String(b);
        den = 2*a;
        den_s = String(den);
        formula_subt = ("(" + b_s + " + " + raiz_s + "<i>i</i>)/" + den_s);
        formula_soma = ("(" + b_s + " - " + raiz_s + "<i>i</i>)/" + den_s);
        resultado.innerHTML = `Como delta é menor que zero, existem duas raízes imaginárias, que são <strong> ${formula_soma} e ${formula_subt}</strong>`;
    } else if (delta == 0) {
        resultado.innerHTML = `Como delta é zero, existe apenas uma raíz que é <strong>${formula_soma}</strong>.`;
    } else if (delta > 0){
        resultado.innerHTML = `Como delta é maior que zero, existem duas raízes reais, que são <strong>${formula_soma}</strong> e <strong>${formula_subt}</strong>.`;
    } 

}
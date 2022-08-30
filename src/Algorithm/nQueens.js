

const objArray = (n) => new Array(n).fill(null).map(a => ({}));
const row = (i, n) => `${'.'.repeat(i)}Q${'.'.repeat(n - 1 - i)}`;
const rows = (n) => {
    const A = new Array(n);
    for (let i = 0; i < n; ++i) A[i] = row(i, n);
    return A;
};
const f = (O, L, B, R, n, r) => {
    if (r === n) {
        L.push([...B]);
        return;
    }
    const Rn = objArray(n);
    for (let i = 0; i < n; ++i) {
        if (R[i].c) Rn[i].c = true;
        if (R[i].l && i - 1 >= 0) Rn[i - 1].l = true;
        if (R[i].r && i + 1 < n) Rn[i + 1].r = true;
    }
    for (let i = 0; i < n; ++i) {
        if (!R[i].c && !R[i].l && !R[i].r) {
            B[r] = O[i];
            let tc = Rn[i].c;
            let tr, tl;
            Rn[i].c = true;
            if (i - 1 >= 0) {
                tl = Rn[i - 1].l;
                Rn[i - 1].l = true;
            }
            if (i + 1 < n) {
                tr = Rn[i + 1].r;
                Rn[i + 1].r = true;
            }
            f(O, L, B, Rn, n, r + 1);
            Rn[i].c = tc;
            if (i - 1 >= 0) Rn[i - 1].l = tl;
            if (i + 1 < n) Rn[i + 1].r = tr;
        }
    }
};
const solveNQueens = (n) => {
    const L = [];
    f(rows(n), L, new Array(n), objArray(n), n, 0);
    return L;
};

export default solveNQueens;
const gameboard = (() => {
    const board = ['','','','','','','','',''];
    return{board};
})();

const player = (name, symbol) => {
    return{name, symbol};
}

let user1;
let user2;

let turn = 0;

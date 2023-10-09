const test = require('../RPS.js')

describe("RPS", function(){

    test("returns 'TIE!' if P1 == P2", function() {
        let output = test.whoWon(P1 = P2)
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = test.whoWon('rock','paper')
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
        let output = test.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 == scissors & P2 == rock", function() {
        let output = test.whoWon('scissors','rock')
        expect(output).toBe("Player 2 wins!");
    });
});
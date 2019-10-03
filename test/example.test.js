// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

import checkResult from '../check-result.js';

test('should return win if playerChoice is rock and computerChoice is scissors', function(assert) {
    const playerChoice = 'rock';
    const computerChoice = 'scissors';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'win'

    assert.equal(result, expected);
});
test('should return lose if playerChoice is rock and computerChoice is paper', function(assert) {
    const playerChoice = 'rock';
    const computerChoice = 'paper';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'lose'

    assert.equal(result, expected);
});
test('should return draw if playerChoice is rock and computerChoice is rock', function(assert) {
    const playerChoice = 'rock';
    const computerChoice = 'rock';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'draw'

    assert.equal(result, expected);
});
test('should return win if playerChoice is scissors and computerChoice is paper', function(assert) {
    const playerChoice = 'scissors';
    const computerChoice = 'paper';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'win'

    assert.equal(result, expected);
});
test('should return lose if playerChoice is scissors and computerChoice is rock', function(assert) {
    const playerChoice = 'scissors';
    const computerChoice = 'rock';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'lose'

    assert.equal(result, expected);
});
test('should return draw if playerChoice is scissors and computerChoice is scissors', function(assert) {
    const playerChoice = 'scissors';
    const computerChoice = 'scissors';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'draw'

    assert.equal(result, expected);
});
test('should return win if playerChoice is paper and computerChoice is rock', function(assert) {
    const playerChoice = 'paper';
    const computerChoice = 'rock';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'win'

    assert.equal(result, expected);
});
test('should return lose if playerChoice is paper and computerChoice is scissors', function(assert) {
    const playerChoice = 'paper';
    const computerChoice = 'scissors';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'lose'

    assert.equal(result, expected);
});
test('should return draw if playerChoice is paper and computerChoice is paper', function(assert) {
    const playerChoice = 'rock';
    const computerChoice = 'rock';

    const result = checkResult (playerChoice, computerChoice);
    const expected = 'draw'

    assert.equal(result, expected);
});

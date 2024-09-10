var text = "Meow mewo";
var animalTalk = function (sound) {
    if (sound === void 0) { sound = text; }
    var input = "Cat said: ".concat(sound);
    return input;
};
console.log(animalTalk("bark bark"));
console.log(animalTalk());
/**
 * Run with ts: npx ts-node index.ts
 * Run without ts-node, you need to create file js and run this file.
 */ 

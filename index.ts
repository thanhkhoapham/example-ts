const text = "Meow mewo";

const animalTalk = (sound: string = text): string => {
    const input = `Cat said: ${sound}`;

    return input;
}

console.log(animalTalk("bark bark"));
console.log(animalTalk());

/**
 * 1: Run with ts: npx ts-node index.ts
 * 
 * 2: Run without ts-node, you need to create file js and run this file.
 * Step 1: create file js: npx tsc index.ts --> index.js
 * Step 2: run file js: node index.js
 */
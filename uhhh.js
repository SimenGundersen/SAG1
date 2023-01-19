Once upon a time, there was a young adventurer named __________. They had always dreamed of exploring the __________ __________, a mysterious and dangerous jungle said to be filled with untold riches and ancient artifacts.

One day, __________ set out on their journey, armed with nothing but their courage and a trusty __________. After many days of traveling, they finally reached the edge of the jungle.

As soon as they stepped inside, __________ knew they were in for an adventure like no other. The dense foliage and thick vines made it difficult to move forward, but __________ was determined to press on.

As __________ pushed deeper into the jungle, they came across many obstacles. A giant __________ blocked their path, a deep __________ threatened to swallow them whole, and a tribe of __________ warriors challenged them at every turn. But __________ persevered, using their wit and bravery to overcome each challenge.

Finally, __________ reached the heart of the jungle, where they discovered the ancient __________ temple they had been searching for. Inside, they found more treasure than they had ever imagined, along with the ancient __________ artifact they had been seeking.

With their quest complete, __________ returned home a hero, hailed by all for their daring and incredible __________.

Here is the list of words for the story:

    adventurer
    mysterious
    jungle
    machete
    adventurer
    giant
    quicksand
    hostile
    adventurer
    temple
    treasure
    artifact
    adventure

let words = ["adventurer", "mysterious", "jungle", "machete", "adventurer", "giant", "quicksand", "hostile", "adventurer", "temple", "treasure", "artifact", "adventure"];
let story = document.getElementById("story");

for(let i=0; i < words.length; i++){
    let wordBtn = document.createElement("button");
    wordBtn.innerHTML = words[i];
    wordBtn.onclick = function(){
        story.innerHTML = story.innerHTML.replace("__________", words[i]);
    }
    document.getElementById("wordList").appendChild(wordBtn);
}
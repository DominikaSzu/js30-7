    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];

    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const result = people.some(person => {
    let date = (new Date).getFullYear();
    return (date - person.year) >= 19;
})
console.log(result);

// Array.prototype.every() // is everyone 19 or older?

const result2 = people.every(person => {
    let date = (new Date).getFullYear();
    return (date - person.year) >= 19;
});

console.log(result2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const result3 = comments.find(comment => {
    if (comment.id === 823423) {
        return comment;
    }
});

console.log(result3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const result4 = comments.findIndex(comment => comment.id === 823423);

comments.splice(result4, 1);

console.log(result4);
console.log(comments);